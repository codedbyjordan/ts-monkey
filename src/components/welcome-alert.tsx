import * as AlertDialog from "@radix-ui/react-alert-dialog";

const LOCALSTORAGE_KEY = "ts-monkey-welcome-alert";

type WelcomeAlertProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WelcomeAlert({ isOpen, onClose }: WelcomeAlertProps) {
  return (
    <AlertDialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          localStorage.setItem(LOCALSTORAGE_KEY, "true");
          onClose();
        }
      }}
    >
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="fixed w-[500px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gruvbox-bg text-white rounded-lg p-4 text-center">
          <AlertDialog.Title className="font-mono text-2xl font-bold">
            Welcome to TS Monkey!
          </AlertDialog.Title>
          <AlertDialog.Description className="font-mono flex flex-col">
            TS Monkey is a simple editor for JavaScript and TypeScript. Think of
            it as a scratchpad where you can quickly test out code snippets.
          </AlertDialog.Description>
          <div className="text-left mb-4">
            <span className="font-bold text-left text-lg">Keybinds</span>
            <ul className="ml-4 list-disc list-inside">
              <li>Ctrl+S - Save</li>
              <li>Ctrl+Shift+Enter - Run</li>
            </ul>
          </div>
          <AlertDialog.Cancel className="font-mono font-bold bg-white text-black rounded-lg px-2 py-1 w-full hover:bg-white/80 transition-colors">
            Got it!
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
