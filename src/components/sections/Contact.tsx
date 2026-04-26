"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "@/validation/contactSchema";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";
import { socialLinks } from "@/data/data";
import type { ContactFormValues, ApiResponse } from "@/data/data";

const fieldClass =
  "w-full max-w-[500px] h-14 border rounded-md border-black text-black px-3 transition-colors hover:bg-neutral-100 outline-none placeholder:text-[#71717A]";

const textareaClass =
  "w-full max-w-[500px] h-[140px] border rounded-md border-black text-black px-3 py-3 transition-colors hover:bg-neutral-100 resize-none outline-none placeholder:text-[#71717A]";



export default function Contact() {
  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {

     const sendMessage = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result: ApiResponse = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.error || "Failed to send message");
    }

    return result;
  };

    try {
    await toast.promise(
      sendMessage(),
      {
        pending: "Sending message...",
        success: "Thanks for reaching out! I’ll respond soon",
        error: "Failed to send message ",
      },
      {
        position: "bottom-right",
      }
    );

    resetForm();
  }

   catch (error) {
      toast.error("Something went wrong ! Please try again later.");
    }

  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-neutral-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
        {/* Left: form */}
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {() => (
              <Form className="flex flex-col gap-5">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={fieldClass}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="How can I help?"
                    className={textareaClass}
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div className="flex max-w-[500px] flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className={`bg-black px-6 py-3 font-bold rounded-md text-white transition hover:bg-neutral-800"}`}

                  >
                    Let&apos;s talk
                  </button>
                  <div className="flex flex-wrap items-center gap-3">
                    {socialLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        // data-tooltip-id="social-tooltip"
                        // data-tooltip-content={item.name}
                        className="group inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-black p-2 transition-all duration-300 hover:bg-black"
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="transition duration-300 group-hover:invert"
                        />
                      </a>
                    ))}
                  </div>{" "}
                </div>
              </Form>
          )}
        </Formik>

        {/* Right panel — replace with your content */}
        <div className="w-full max-w-[608px] min-h-[312px]">
          <div className="flex h-full flex-col justify-center text-left text-black">
            <h2 className="text-5xl font-bold leading-tight">
              Let&apos;s{" "}
              <span className="text-transparent [-webkit-text-stroke:2px_#000]">
                talk
              </span>{" "}
              for
              <br />
              Something special
            </h2>

            <p className="mt-5 max-w-[560px] text-base text-neutral-600">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className="mt-10 space-y-1 text-xl font-semibold">
              <p>hvharish32@gmail.com</p>
              <p>+919500684419</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
