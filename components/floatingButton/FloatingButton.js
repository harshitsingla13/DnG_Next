import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const FloatingButton = (props, ref) => {
  return (
    <Button
      variant="outline"
      size="icon"
      // className="fixed bottom-4 right-4 bg-black"
      className="bg-black"
      {...props}
    >
      <MessageSquare
        className="h-4 w-4 sm:h-auto sm:w-auto"
        fill="#fff"
        color="#fff"
        strokeWidth="2.25px"
      />
    </Button>
  );
};

export default React.forwardRef(FloatingButton);
