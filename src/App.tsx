import { javascript } from "@codemirror/lang-javascript";
import { gruvboxDarkInit } from "@uiw/codemirror-theme-gruvbox-dark";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useEffect, useRef, useState } from "react";
import executeJs from "./utils/execute-js";
import transpile from "./utils/transpile";
import Toolbar from "./components/toolbar";
import useKeybinds from "./hooks/useKeybinds";
import { loadFile, saveFile } from "./utils/file-management";

export default function App() {
  const [code, setCode] = useState("");
  const consoleOutputRef = useRef<HTMLDivElement>(null);

  const onChange = useCallback((newCode: string) => {
    setCode(newCode);
  }, []);

  useEffect(() => {
    const loadedFile = loadFile();
    if (loadedFile) {
      setCode(loadedFile);
    }
  }, []);

  const clearConsoleOutput = () => {
    if (consoleOutputRef.current) {
      consoleOutputRef.current.innerHTML = "";
    }
  };

  const transpileAndExecute = useCallback(() => {
    clearConsoleOutput();
    const transpiledCode = transpile(code);
    if (transpiledCode) {
      executeJs(transpiledCode);
    }
  }, [code]);

  useKeybinds({
    run: transpileAndExecute,
    save: () => saveFile(code),
  });

  return (
    <div className="flex flex-col w-full h-screen">
      <Toolbar save={() => saveFile(code)} run={transpileAndExecute} />
      <div className="w-full h-full grid grid-cols-2">
        <CodeMirror
          value={code}
          height="100%"
          extensions={[javascript({ typescript: true })]}
          onChange={onChange}
          theme={gruvboxDarkInit()}
          className="text-xl max-h-full overflow-y-auto [scrollbar-color:#928374_transparent] [scrollbar-width:thin]"
        />
        <div
          className="bg-gruvbox-bg w-full h-full text-white font-mono p-2 border-l border-l-gruvbox-gray"
          id="console-output"
          ref={consoleOutputRef}
        ></div>
      </div>
    </div>
  );
}
