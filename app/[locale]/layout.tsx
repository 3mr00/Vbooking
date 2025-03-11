import type { Metadata } from "next";
import "./globals.css";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { Poppins, Cairo } from "next/font/google";

const PoppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // Optionally add subsets if needed
  variable: "--font-poppins",
});

const CairoFont = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // Optionally add subsets if needed
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Vbooking",
    template: "%s | Vbooking",
  },
  description:
    "VBooking: Your Partner in Seamless Travel Solutions.Revolutionizing global travel with cutting-edge AI and automated systems, we empower your business with innovative tools and seamless all-in-one solutions, driving ultimate efficiency, innovation, and success in the digital age.",
  keywords: ["booking"],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${
        locale === "ar" ? CairoFont.className : PoppinsFont.className
      } 2xl:text-[30px] xl:text-[16px] text-[16px] `}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
