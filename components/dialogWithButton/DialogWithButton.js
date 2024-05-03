import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FloatingButton from "../floatingButton/FloatingButton";
// import { Button } from "../ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { InputForm } from "./Form";

function DialogWithButton({ open = false, setOpen, defaultValue }) {
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
              <InputForm setParentOpen={setOpen} defaultValue={defaultValue} />
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
            <InputForm setParentOpen={setOpen} defaultValue={defaultValue} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DialogWithButton;
