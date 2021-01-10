import { useState } from "react";
import * as prism from "../lib/prism";

export function highlight(code, lang) {
  if (lang == "sh") lang = "bash";
  if (prism.languages[lang] != null) {
    return prism.highlight(code, prism.languages[lang], lang);
  }
  throw Error(`Unknown language: ${lang}`);
}

const noop = (result) => {};

export function CodeRunner({
  code,
  lang = "javascript",
  executable = false,
  executableIframe,
  output = noop,
}) {
  let [result, setResult] = useState(undefined);
  return (
    <div>
      <div className="highlight-container">
        <pre dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}></pre>
      </div>
      {(executable || executableIframe )&& (
        <button
          className="button-primary"
          onClick={() => {
            if(executableIframe) {
              return runOnIframe(code)
            }
            let [consol, result] = runCode(code);
            output([result, consol]);
          }}
        >
          Run
        </button>
      )}
    </div>
  );
}

const runOnIframe = (code) => {
  let iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(code);
  iframe.contentWindow.document.close();
  document.body.removeChild(iframe)
}

const runCode = (code) => {
  let old_log = console.log;
  let result = [];
  console.log = function (...args) {
    result.push(args.join(" "));
  };
  let final = eval(code);
  console.log = old_log;
  return [result.join("\n"), final];
};

export function CodeRunnerOutput({ code }) {
  let [res, set] = useState("");
  return (
    <>
      <div className="six columns">
        <CodeRunner
          executable
          code={code}
          output={([_, consol]) => set(consol)}
        />
      </div>
      <div className="six columns">
        {res != "" && <CodeRunner code={res} />}
      </div>
    </>
  );
}

