import { Play, Save } from "lucide-react";

type ToolbarProps = {
  save: () => void;
  run: () => void;
};

export default function Toolbar({ save, run }: ToolbarProps) {
  return (
    <div className="bg-gruvbox-bg flex items-center p-2 gap-2 text-white">
      <button
        onClick={save}
        className="hover:text-gruvbox-gray transition-colors cursor-pointer"
      >
        <Save />
      </button>
      <button
        onClick={run}
        className="hover:text-gruvbox-gray transition-colors cursor-pointer"
      >
        <Play />
      </button>
    </div>
  );
}
