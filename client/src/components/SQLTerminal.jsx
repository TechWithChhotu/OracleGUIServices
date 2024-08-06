// import React, { useEffect, useCallback, useState, useRef } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { sql } from "@codemirror/lang-sql";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import "../App.css";

// const SqlTerminal = () => {
//   const [query, setQuery] = useState("");
//   const editorRef = useRef(null);

//   const [rowsData, setRowsData] = useState([]);
//   const [msg, setMsg] = useState("");

//   const isLogin = useSelector((state) => state.userSlice.login);

//   const handleExecute = useCallback(async () => {
//     const editor = editorRef.current?.view; // Correctly access the editor view
//     setMsg("");
//     setRowsData([]);

//     if (editor) {
//       const state = editor.state;
//       const selectedText = state.doc.sliceString(
//         state.selection.main.from,
//         state.selection.main.to
//       );

//       if (selectedText) {
//         const response1 = await axios.post(
//           "http://localhost:3000/execute-terminal-query",
//           { query: selectedText, isLogin: isLogin },
//           { withCredentials: true }
//         );
//         // console.log(response1.data);
//         // console.log(response1);

//         setMsg(response1.data.msg);
//         if (response1.data.data.rows) setRowsData(response1.data.data.rows);
//       } else {
//         const response2 = await axios.post(
//           "http://localhost:3000/execute-terminal-query",
//           { query: query, isLogin: isLogin },
//           { withCredentials: true }
//         );
//         // console.log(response2.data);
//         console.log(response2);

//         setMsg(response2.data.msg);
//         if (response2.data.data.rows) setRowsData(response2.data.data.rows);
//       }
//     }
//   }, [query]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.ctrlKey && event.key === "Enter") {
//         event.preventDefault(); // Prevent default behavior
//         handleExecute();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleExecute]);

//   return (
//     <div className="min-h-[80%]">
//       <div className="shadow-lg border border-gray-200 rounded-md m-5 h-[200px]">
//         <CodeMirror
//           ref={editorRef}
//           value=""
//           height="200px"
//           extensions={[sql()]}
//           placeholder={"Write the query here"}
//           onChange={(value) => {
//             setQuery(value);
//           }}
//         />
//       </div>

//       <div className="bg-gray-400 py-1 mt text-center">
//         <button
//           className="bg-blue-400 px-5 py-1 rounded-lg hover:bg-blue-600 hover:text-white "
//           onClick={handleExecute}
//         >
//           Execute (ctrl + enter)
//         </button>
//       </div>

//       <div>
//         <h2 className="bg-green-400 py-1 text-center">Output Area</h2>

//         <div className="shadow-lg border border-gray-200 rounded-md m-5 h-[200px] scroll-container px-5 py-2">
//           <p className="text-center text-indigo-600 py-2">{msg}</p>
//           {rowsData.map((e, index) => (
//             <p key={index}>{e}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SqlTerminal;

import React, { useEffect, useCallback, useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import axios from "axios";
import { useSelector } from "react-redux";
import "../App.css";

const SqlTerminal = () => {
  const [query, setQuery] = useState("");
  const editorRef = useRef(null);

  const [rowsData, setRowsData] = useState([]);
  const [msg, setMsg] = useState("");

  const isLogin = useSelector((state) => state.userSlice.login);

  const handleExecute = useCallback(async () => {
    const editor = editorRef.current?.view; // Correctly access the editor view
    setMsg("");
    setRowsData([]);

    if (editor) {
      const state = editor.state;
      const selectedText = state.doc.sliceString(
        state.selection.main.from,
        state.selection.main.to
      );

      try {
        const response = await axios.post(
          "http://localhost:3000/execute-terminal-query",
          { query: selectedText || query, isLogin: isLogin },
          { withCredentials: true }
        );

        setMsg(response.data.msg);
        if (response.data.data?.rows) {
          setRowsData(response.data.data.rows);
        }
      } catch (error) {
        setMsg(error.response.data.msg);
      }
    }
  }, [query, isLogin]);

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
            setQuery(value);
          }}
        />
      </div>

      <div className="bg-gray-400 py-1 mt text-center">
        <button
          className="bg-blue-400 px-5 py-1 rounded-lg hover:bg-blue-600 hover:text-white"
          onClick={handleExecute}
        >
          Execute (ctrl + enter)
        </button>
      </div>

      <div>
        <h2 className="bg-green-400 py-1 text-center">Output Area</h2>

        <div className="shadow-lg border border-gray-200 rounded-md m-5 h-[200px] scroll-container px-5 py-2">
          <p className="text-center text-indigo-600 py-2">{msg}</p>
          {rowsData.length > 0 ? (
            rowsData.map((e, index) => <p key={index}>{e}</p>)
          ) : (
            <p className="text-center text-gray-500">No data to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SqlTerminal;
