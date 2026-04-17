import { Button } from "@/components/ui/button";
import { PlusMinus01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <Button variant="destructive" size="lg" className="rounded">
        <HugeiconsIcon icon={PlusMinus01Icon} />
        Click Me</Button>
    </div>
  );
}
