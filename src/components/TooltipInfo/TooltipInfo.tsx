import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export function TooltipInfo({ msg }: { msg: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <InfoCircledIcon color="#0090FF" />
        </TooltipTrigger>
        <TooltipContent className="max-w-64">
          <p dangerouslySetInnerHTML={{ __html: msg }} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
