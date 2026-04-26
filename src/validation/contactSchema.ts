import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too short")
    .required("Name is required *"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required *"),

  message: Yup.string()
    .min(2, "Message should be at least 2 characters")
    .required("Message is required *"),
});