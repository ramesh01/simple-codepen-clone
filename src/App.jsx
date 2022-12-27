import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
        setSrcDoc(`<html><body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>`);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          srcDoc={srcDoc}
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
