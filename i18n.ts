import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: {
      ...(await import(`./messages/${locale}/home.json`)).default,
      ...(await import(`./messages/${locale}/lang.json`)).default,
      ...(await import(`./messages/${locale}/productPage.json`)).default,
      ...(await import(`./messages/${locale}/technologyPage.json`)).default,
      ...(await import(`./messages/${locale}/turboPage.json`)).default,
      ...(await import(`./messages/${locale}/Traveler.json`)).default,
      ...(await import(`./messages/${locale}/TravelManagementPage.json`))
        .default,
      ...(await import(`./messages/${locale}/WhyUsPage.json`)).default,
      ...(await import(`./messages/${locale}/ContactUsPage.json`)).default,
    },
  };
});
