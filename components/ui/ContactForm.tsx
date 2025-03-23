"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const t = useTranslations("ContactUsPage.ContactForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10"
    >
      <h2 className="text-[#1e1e1e] text-4xl font-semibold leading-none">
        {t("title")}
      </h2>
      <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          <div className="text-[#1e1e1e] text-lg font-medium">
            {t("name.label")}{" "}
            <span className="text-[#eb001b]">{t("required")}</span>
          </div>
          <input
            {...register("name")}
            placeholder={t("name.placeholder")}
            className={`self-stretch border border-[#bdbdbd] bg-white w-full gap-2.5 text-base text-[#667085] font-normal mt-1.5 px-[18px] py-3 rounded-lg border-solid max-md:max-w-full ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full mt-6 max-md:max-w-full">
          <div className="text-[#1e1e1e] text-lg font-medium">
            {t("email.label")}{" "}
            <span className="text-[#eb001b]">{t("required")}</span>
          </div>
          <input
            {...register("email")}
            type="email"
            placeholder={t("email.placeholder")}
            className={`self-stretch border border-[#bdbdbd] bg-white w-full gap-2.5 text-base text-[#667085] font-normal mt-1.5 px-[18px] py-3 rounded-lg border-solid max-md:max-w-full ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full mt-6 max-md:max-w-full">
          <div className="text-[#1e1e1e] text-lg font-medium">
            {t("phone.label")}{" "}
            <span className="font-normal text-base text-[#667085]">
              {t("phone.optional")}
            </span>
          </div>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("phone.placeholder")}
            className="self-stretch border border-[#bdbdbd] bg-white w-full gap-2.5 text-base text-[#667085] font-normal mt-1.5 px-[18px] py-3 rounded-lg border-solid max-md:max-w-full"
          />
        </div>
        <div className="w-full mt-6 max-md:max-w-full">
          <div className="text-[#1e1e1e] text-lg font-medium">
            {t("message.label")}{" "}
            <span className="text-[#eb001b]">{t("required")}</span>
          </div>
          <textarea
            {...register("message")}
            placeholder={t("message.placeholder")}
            className={`border border-[#bdbdbd] bg-white min-h-[98px] w-full gap-2.5 text-base text-[#667085] font-normal mt-1.5 pt-3 pb-[62px] px-[18px] rounded-lg border-solid max-md:max-w-full ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-[140px] shadow-sm bg-[#9c25a0] text-base text-white font-medium mt-8 px-4 py-3 rounded-full"
        >
          {t("submit")}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
