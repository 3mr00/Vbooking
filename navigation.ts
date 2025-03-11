import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"];
export const localePrefix = "as-needed"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
