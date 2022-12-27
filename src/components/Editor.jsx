import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Resizable } from "react-resizable";

function Editor(props) {
  const { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const [width, setWidth] = useState(400);

  const onResize = (event, { element, size, handle }) => {
    
    setWidth(size.width);
  };

  return (
    <>
      <Resizable
        className="box"
        height="auto"
        width={width}
        onResize={onResize}
        resizeHandles={["w","e"]}
      >
        <div style={{ width: width + "px", height: "auto" }}>
          <div className='editor-container'>
            <div className="editor-title">
              {displayName}
             
            </div>
            <ControlledEditor
              onBeforeChange={handleChange}
              value={value}
              className="codemirror-wrapper"
              options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: "material",
              }}
            />
          </div>
        </div>
      </Resizable>
    </>
  );
}

export default Editor;
