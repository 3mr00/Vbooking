import React from "react";

interface ScrollableCardsProps<T> {
  options: T[];
  renderCard: (option: T, index: number) => React.ReactNode;
}

const ScrollableCards = <T,>({
  options,
  renderCard,
}: ScrollableCardsProps<T>) => {
  return (
    <div className="w-full scroll-bar-hide">
      <div className="flex overflow-x-auto pb-2 scrollbar-none">
        {options.map((option, index) => (
          <div className="flex-shrink-0 mr-4" key={index}>
            {renderCard(option, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
