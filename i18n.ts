import { getRequestConfig } from "next-intl/server";
import fs from "fs";
import path from "path";

// Helper function to merge JSON files
const mergeMessages = (locale: string) => {
  const messagesDir = path.join(process.cwd(), "messages", locale);
  const files = fs.readdirSync(messagesDir);

  return files.reduce((acc, file) => {
    if (file.endsWith(".json")) {
      const filePath = path.join(messagesDir, file);
      const fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return { ...acc, ...fileContent };
    }
    return acc;
  }, {});
};

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: mergeMessages(locale),
  };
});
