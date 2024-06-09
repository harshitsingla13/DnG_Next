"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

const phoneRegex = new RegExp(/^[6-9]\d{9}$/);

const FormSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  mobile: z.string().regex(phoneRegex, {
    message: "Enter valid number.",
  }),
  orderType: z.enum(["regular", "bulk"], {
    required_error: "You need to select one option",
  }),
  orderDetail: z.string().min(10, {
    message: "Detail must be at least 10 characters.",
  }),
});

export function InputForm({ setParentOpen, defaultValue, radioButtonStyle }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: defaultValue?.name ?? "",
      mobile: defaultValue?.mobile ?? "",
      orderType: defaultValue?.orderType ?? "bulk",
      orderDetail: defaultValue?.orderDetail ?? "",
    },
  });

  async function onSubmit({ name, mobile, orderType, orderDetail }) {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/sendEmail", {
        name,
        mobile,
        orderType,
        orderDetail,
      });
      setIsLoading(false);

      if (res.status === 200) {
        form.reset();
        setParentOpen(false);
        toast({
          title: "Submitted Successfully",
          description: "The team will reach out to you shortly.",
        })
      }
      else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem. Please try again."
        })
      }
    }
    catch (e) {
      console.log("Error in Lead creation", error)
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem. Please try again."
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="DnG Bakers" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="orderType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Want to know about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1 gap-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="regular"
                        className={radioButtonStyle}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Regular Order</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="bulk"
                        className={radioButtonStyle}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Bulk Order</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="orderDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your query/order"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
}
