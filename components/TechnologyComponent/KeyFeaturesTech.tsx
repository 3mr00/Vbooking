import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { FaCircleCheck } from "react-icons/fa6";

type Feature = {
  title: string;
  items: {
    subtitle: string;
    description: string;
  }[];
};

const KeyFeaturesTech = ({ techId }: { techId: string }) => {
  const t = useTranslations("technology.keyFeatures");

  // Render only if techId is not "HTMX" or "DecentraliseServers"
  if (techId === "HTMX" || techId === "DecentraliseServers") {
    return null; // Or return an empty fragment: return <></>;
  }
  // Fetch the title and features dynamically based on techId
  const title = t(`${techId}.title`);
  const features = t.raw(`${techId}.features`) as Feature[]; // Add type assertion

  return (
    <CustomContainer className="!py-12">
      <section>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
          <span className="text-[#2d63cf] md:text-[36px] text-[22px] font-medium">
            {title.split(" ")[0]}{" "}
          </span>
          <span className="text-[#9c25a0] md:text-[36px] text-[22px] font-medium">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        {item.subtitle}:
                      </span>{" "}
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </CustomContainer>
  );
};

export default KeyFeaturesTech;
