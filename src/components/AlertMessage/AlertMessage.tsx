import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { CopyIcon } from "@radix-ui/react-icons";

interface AlertMessageProps {
  msg: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertMessage = ({ msg, open, setOpen }: AlertMessageProps) => {
  const handleCopyClick = async () => {
    try {
      const text = document.getElementById("commit-message");
      await navigator.clipboard.writeText(text?.innerText ?? "");
    } catch (error) {
      console.error("Erro ao copiar link:", error);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Commit message:</AlertDialogTitle>
          <AlertDialogDescription>
            {msg && (
              <div className="text-sm bg-gray-500 text-black p-2 rounded-md">
                <p
                  dangerouslySetInnerHTML={{ __html: msg }}
                  id="commit-message"
                />
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleCopyClick}>
            <CopyIcon />
          </AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
