import { useState, useRef, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-light.css";
import "codemirror/mode/gfm/gfm";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/scroll/scrollpastend";

const NoteEditor = () => {
  const [note, setNote] = useState("Hello");

  const codemirror = useRef();

  const options = {
    mode: "gfm",
    theme: "base16-light",
    lineNumbers: false,
    lineWrapping: true,
    styleActiveLine: false,
    keyMap: "default",
    dragDrop: false,

    scrollPastEnd: false,
  };

  const setEditorOverlay = (editor) => {
    const query = /\{\{[^}]*}}/g;
    editor.addOverlay({
      token: function (stream) {
        query.lastIndex = stream.pos;
        var match = query.exec(stream.string);
        if (match && match.index == stream.pos) {
          stream.pos += match[0].length || 1;

          return "notelink";
        } else if (match) {
          stream.pos = match.index;
        } else {
          stream.skipToEnd();
        }
      },
    });
  };

  useEffect(() => {
    codemirror.current.editor.display.wrapper.style.height = "100%";
    codemirror.current.editor.display.wrapper.style.padding = "10px";
  }, []);

  return (
    <CodeMirror
      ref={codemirror}
      className="editor bg-red-900"
      value={note}
      onBeforeChange={(editor, data, value) => {
        setNote(value);
      }}
      onChange={(editor, data, value) => {}}
      options={options}
      editorDidMount={(editor) => {
        setTimeout(() => {
          editor.focus();
        }, 0);
        editor.setCursor(0);
        editor.setSize("100%", "100vh");
        setEditorOverlay(editor);
      }}
    />
  );
};

export default NoteEditor;
