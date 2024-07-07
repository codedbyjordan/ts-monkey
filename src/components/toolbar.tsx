import { Play, Save, CircleHelp } from "lucide-react";

type ToolbarProps = {
  save: () => void;
  run: () => void;
  openWelcomeAlert: () => void;
};

export default function Toolbar({ save, run, openWelcomeAlert }: ToolbarProps) {
  return (
    <div className="bg-gruvbox-bg flex justify-between items-center p-2 text-white">
      <div className="flex items-center gap-2">
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
      <button
        onClick={openWelcomeAlert}
        className="hover:text-gruvbox-gray transition-colors cursor-pointer"
      >
        <CircleHelp />
      </button>
    </div>
  );
}
