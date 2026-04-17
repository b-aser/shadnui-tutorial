import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button size="lg" variant="ghost">
        <CirclePlus />
        Click Me</Button>
    </div>
  );
}
