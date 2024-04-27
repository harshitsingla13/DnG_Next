import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import FloatingButton from "../floatingButton/FloatingButton";
// import { Button } from "../ui/button";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { InputForm } from "./Form";

function DialogWithButton() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="fixed bottom-4 right-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <FloatingButton onClick={() => setOpen(!open)} />
          <DialogTrigger />
          {/* <FloatingButton /> */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Fill out the form below to get in touch.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <InputForm setParentOpen={setOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger />
        <FloatingButton onClick={() => setOpen(!open)} />
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Contact Us</DrawerTitle>
            <DrawerDescription>
              Fill out the form below to get in touch.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid items-start gap-4 px-4">
            <InputForm setParentOpen={setOpen} />
            {/* <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <div className="flex items-center gap-4">
                <RadioGroup defaultValue="male">
                  <RadioGroupItem id="male" value="male" />
                  <Label className="text-sm font-normal" htmlFor="male">
                    Male
                  </Label>
                  <RadioGroupItem id="female" value="female" />
                  <Label className="text-sm font-normal" htmlFor="female">
                    Female
                  </Label>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div> */}
          </div>
          {/* <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Submit</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DialogWithButton;
