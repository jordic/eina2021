import "../styles/normalize.css";
import "../styles/skeleton.css";
import "../styles/custom.scss";
import "../lib/prism.css";
import { AppProvider } from "../components/context";
import { useState } from "react";
import {Modal} from "../components/modal"
import React from "react";


function MyApp({ Component, pageProps }) {
  const [Comp, setOpenModal] = useState(undefined);
  const OpenModal = Comp !== undefined ? Comp.type : undefined;
  return (
    <AppProvider
      openModal={setOpenModal}
      closeModal={() => setOpenModal(undefined)}
    >
      <Component {...pageProps} />
      {Comp != undefined && (
        <Modal>
          <OpenModal {...Comp.props} />
        </Modal>
      )}
    </AppProvider>
  );
}

export default MyApp;
