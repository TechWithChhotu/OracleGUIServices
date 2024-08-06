import React, { useEffect, useCallback, useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

const SqlTerminal = () => {
  const [query, setQuery] = useState("");
  const editorRef = useRef(null);

  const handleExecute = useCallback(() => {
    const editor = editorRef.current?.view; // Correctly access the editor view

    if (editor) {
      const state = editor.state;
      const selectedText = state.doc.sliceString(
        state.selection.main.from,
        state.selection.main.to
      );

      if (selectedText) {
        console.log("Executing selected query:", selectedText);
      } else {
        console.log("Executing full query:", query);
      }
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior
        handleExecute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleExecute]);

  return (
    <div className="min-h-[80%]">
      <div className="shadow-lg border border-gray-200 rounded-md m-5 h-[200px]">
        <CodeMirror
          ref={editorRef}
          value=""
          height="200px"
          extensions={[sql()]}
          placeholder={"Write the query here"}
          onChange={(value) => {
            console.log("Content changed:", value);
            setQuery(value);
          }}
        />
      </div>

      <div className="bg-gray-400 py-1 mt text-center">
        <button
          className="bg-blue-400 px-5 py-1 rounded-lg hover:bg-blue-600 hover:text-white "
          onClick={handleExecute}
        >
          Execute (ctrl + enter)
        </button>
      </div>

      <div>
        <h2 className="bg-green-400 py-1 text-center">Output Area</h2>
        <div className="shadow-lg border border-gray-200 rounded-md m-5 h-[200px]"></div>
      </div>
    </div>
  );
};

export default SqlTerminal;
