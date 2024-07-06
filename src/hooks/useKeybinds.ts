import { useEffect } from "react";

type UseKeybindsOptions = {
  save: () => void;
  run: () => void;
};

export default function useKeybinds({ save, run }: UseKeybindsOptions) {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      event.stopPropagation();
      save();
    } else if (event.ctrlKey && event.shiftKey && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      run();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
}
