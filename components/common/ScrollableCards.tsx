import { useTranslations } from "next-intl";
import React from "react";

interface ScrollableCardsProps<T> {
  options: T[];
  renderCard: (option: T, index: number) => React.ReactNode;
}

const ScrollableCards = <T,>({
  options,
  renderCard,
}: ScrollableCardsProps<T>) => {
  const t = useTranslations();
  return (
    <div className="w-full scroll-bar-hide">
      <div className="flex overflow-x-auto pb-2 scrollbar-none">
        {options.map((option, index) => (
          <div
            className={`flex-shrink-0 ${
              t("lang.lang") === "en" ? "mr-4" : "ml-4"
            } `}
            key={index}
          >
            {renderCard(option, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
