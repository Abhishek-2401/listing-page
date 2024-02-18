// PackageCard.js
import React from "react";

const PackageCard = () => {
  // Actual data for each package card
  const cards = [
    {
      id: 1,
      title: "Munnar : Honeymoon Package",
      description: "Description for Package 1",
      price: "$100",
      imageUrl: "card-1.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 2,
      title: "Munnar : Honeymoon Package",
      description: "Description for Package 2",
      price: "$150",
      imageUrl: "card-2.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 3,
      title: "Munnar : Honeymoon Package",
      description: "Description for Package 3",
      price: "$120",
      imageUrl: "card-3.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
    {
      id: 4,
      title: "Munnar : Honeymoon Package",
      description: "Description for Package 4",
      price: "$200",
      imageUrl: "card-4.png",
      rating: "4.5/5",
      ratingsCount: "1K+ ratings",
      memberPriceAvailable: true,
    },
  ];

  return (
    <div className="flex  flex-col">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white m-4 rounded-3xl border border-gray-300 relative flex"
        >
          {/* Image on the left with specific size */}
          <div className="relative rounded-lg overflow-hidden p-2 w-[501px] h-[243px]">
            <img
              src={card.imageUrl}
              alt={`Package ${card.id}`}
              className="object-cover rounded-tl-2xl rounded-bl-2xl w-full h-full"
            />

            {/* Icons at top-right corner */}
            <div className="absolute top-0 right-0 m-4 flex flex-col items-center">
              {/* Bookmark Icon */}
              <div className="w-6 h-6 bg-white rounded-full mb-2 flex items-center justify-center">
                <img
                  src="bookmark-icon.png"
                  alt="Bookmark Icon"
                  className="w-3 h-4"
                />
              </div>

              {/* Share Icon */}
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <img
                  src="share-icon.png"
                  alt="Share Icon"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex flex-col ml-2 w-full">
            <div className="flex items-center mt-[17px] justify-between">
              <h4 className="text-xl font-semibold tracking-normal leadin-8">{card.title}</h4>

              {/* Premium, Mid-Range, or Budget tag with icon to the left side of the title */}
              {card.id === 1 || card.id === 2 ? (
                <div className="bg-[#53E80D] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                  <img
                    src="premium.png"
                    alt="Premium Icon"
                    className="w-3 h-3 mr-1"
                  />
                  Premium
                </div>
              ) : card.id === 3 ? (
                <div className="bg-[#E8AB0D9C] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                  <img
                    src="midrange.png"  // Replace with the actual icon for Mid-Range
                    alt="Mid-Range Icon"
                    className="w-3 h-3 mr-1"
                  />
                  Mid-Range
                </div>
              ) : (
                <div className="bg-[#0DC1E859] text-black text-xs font-medium px-3 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center">
                  <img
                    src="budget.png"  // Replace with the actual icon for Budget
                    alt="Budget Icon"
                    className="w-3 h-3 mr-1"
                  />
                  Budget
                </div>
              )}
            </div>

            {/* Rating div below the title */}
            <div className="flex items-center mt-4 text-gray-500  mt-2">
              <img src="star.png" alt="Star Icon" className="w-4 h-4 mr-2 mb-1" />
              <span className="font-medium text-lg text-black mr-2">
                {card.rating}
              </span> ({" "}
              <span className="text-[#787878] text-xs">{card.ratingsCount}</span> )
              <div className="bg-white border border-[#787878] rounded-full  w-4 h-4 flex items-center justify-center ml-1">
                <span className="text-gray-400 text-xs font-thin">i</span>
              </div>
              {card.memberPriceAvailable && (
                <div className="bg-[#161EDD26] text-black text-xs font-medium px-4 py-2 rounded-tl-2xl rounded-bl-2xl flex items-center ml-auto">
                  <img
                    src="member-price.png"
                    alt="Member-Price Icon"
                    className="w-4 h-4 mr-1"
                  />
                  Member Price Available
                </div>
              )}
            </div>

            {/* What's Included section */}
            <div className="flex flex-col mt-4">
              <h5 className="text-sm font-semibold tracking-wider">What's Included</h5>
              <div className="flex flex-wrap">
                <div className="flex items-center text-sm mt-2 text-[#404040] mr-4 mb-2">
                  <img
                    src="days-night.png"
                    alt="Included Icon"
                    className="w-4 h-4 mr-1"
                  />
                  5 Days or 6 Nights
                </div>
                <div className="flex items-center text-sm text-[#404040] mr-4 mb-2">
                  <img
                    src="food.png"
                    alt="Included Icon"
                    className="w-4 h-4 mr-1"
                  />
                  Food Included
                </div>
                <div className="flex items-center text-sm text-[#404040] mr-4 mb-2">
                  <img
                    src="transportation.png"
                    alt="Included Icon"
                    className="w-4 h-4 mr-1"
                  />
                  Transportation
                </div>
                <div className="flex  text-sm text-[#404040] items-center">
                  <img
                    src="tickets.png"
                    alt="Included Icon"
                    className="w-4 h-4 mr-1"
                  />
                  All Tickets
                </div>
              </div>
            </div>

            {/* Price section */}
            <div className="mt-4 flex items-center">
              <div className="bg-white border border-[#FF0000] text-[#FF0000] text-sm px-2 py-1 rounded-full">
                25% off
              </div>
              <div className="ml-2">
                <span className="text-[#787878] text-sm mr-2 ml-1">From</span>
                <span className="text-black font-medium text-xl">₹7500 </span>
                <span className="text-[#787878] text-sm line-through ml-1">
                  ₹10000
                </span>
              </div>
              {/* Honeymoon Package text */}
              <div className="ml-auto text-[#787878] mr-2 text-sm">#Honeymoon Package</div>
            </div>

           
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
