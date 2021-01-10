import AModal from "react-modal";
import {useApp} from "./context"
import {useRef} from "react"
import {useEffect} from "react"

AModal.setAppElement("#__next");


export function Modal({ children, ...props }) {
  const app = useApp()
  return (
    <AModal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => app.closeModal()}
    >
      <>
        <span className="close" onClick={() => app.closeModal()}></span>
        {children}
      </>
    </AModal>
  );
}


export function RunOnModal({code, button="Probar"}) {
  const app = useApp()
  return (
    <button className="button-primary"
      onClick={()=>app.openModal(
        <IFrame code={code} />
      )}>{button}</button>
  )
}


export function IFrame({code}) {
  const ref = useRef(null)
  useEffect(() =>{

    if (!ref) {
      return
    }
    ref.current.contentWindow.document.open()
    ref.current.contentWindow.document.write(code)
    ref.current.contentWindow.document.close()

  })

  return (
    <iframe width="99%" height="95%"
      className="iframe_code"
      ref={ref}></iframe>
  )

}

