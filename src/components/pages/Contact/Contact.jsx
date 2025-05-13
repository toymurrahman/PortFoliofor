"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const { name, email, message } = data;

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_8bzye17",
        "template_uvs5l8n",
        templateParams,
        "NFEgRW3cvxPIJs-CV"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="uppercase text-xl font-semibold">get in toch</h2>
          <div className="flex items-start gap-4">
            <MdEmail className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-sm font-medium text-[#737373]">EMAIL</h4>
              <p className="text-lg">rahmantoymur2@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdPhone className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-sm font-medium text-[#737373]">CONTACT</h4>
              <p className="text-lg">+880 1623385441</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdLocationOn className="text-2xl mt-1 text-white" />
            <div>
              <h4 className="text-sm font-medium text-[#737373]">ADDRESS</h4>
              <p className="text-lg">1216, Block-B, Road-4, Mirpur-6, Dhaka</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="uppercase text-xl font-semibold">Social</h2>
            <div className="flex  gap-4 text-xl text-white">
              <a href="https://github.com/toymurrahman" target="blank">
                <FaGithub className="bg-[#383737] shadow-2xl p-3 text-5xl rounded-full" />
              </a>
              <a href="https://www.linkedin.com/in/toymur-rahman-tonmoy/" target="blank">
                <FaLinkedin className="bg-[#383737] shadow-2xl p-3 text-5xl rounded-full" />
              </a>
              <a href="https://x.com/ToymurRahman10" target="blank">
                <FaTwitter className="bg-[#383737] shadow-2xl p-3 text-5xl rounded-full" />
              </a>
              <a href="https://www.facebook.com/toymur.rahmantonmoy" target="blank">
                <FaFacebook className="bg-[#383737] shadow-2xl p-3 text-5xl rounded-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="gradiants p-6 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-3xl font-bold">
            Let’s work <span className="text-blue-500">together.</span>
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="gradiants text-white border-gray-500"
                        placeholder="Name *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="gradiants border-gray-500"
                        placeholder="Email *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="gradiants border-gray-500"
                        placeholder="Your Message *"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
