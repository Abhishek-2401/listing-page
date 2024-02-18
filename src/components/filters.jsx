
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles.css';

const Filters = () => {
  const [priceRange, setPriceRange] = useState([10000, 70000]);
  const [daysRange, setDaysRange] = useState([0, 25]);
  const [includedItems, setIncludedItems] = useState({
    Any: false,
    Transportation: false,
    Guide: false,
    Food: false,
    AllTickets: false,
    PickUp: false,
  });

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleDaysChange = (value) => {
    setDaysRange(value);
  };

  const handleIncludedItemsChange = (itemName) => {
    setIncludedItems((prevItems) => ({
      ...prevItems,
      [itemName]: !prevItems[itemName],
    }));
  };
  

  return (
    <div className="max-w-[371px] z-50">
      
      <h5 className="text-md font-semibold ml-14 mt-6 mb-2">Package Type</h5>

      
      <div className="flex mt-4 ml-14">
      
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option1" />
              <span className="ml-2 whitespace-nowrap">All</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option2" />
              <span className="ml-2 whitespace-nowrap">Family/Friends</span>
            </label>
          </div>
        </div>

        
        <div className="w-8 ml-24"></div>

        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option3" />
              <span className="ml-2 whitespace-nowrap">Honeymoon</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option4" />
              <span className="ml-2 whitespace-nowrap">Solo</span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2 ">Sort By</h5>

      
      <div className="flex mt-4 ml-14">
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option1" />
              <span className="ml-2 whitespace-nowrap">Guest Rating</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option2" />
              <span className="ml-2 whitespace-nowrap">Price Low-High</span>
            </label>
          </div>
        </div>

        
        <div className="w-8 ml-24"></div>

        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option3" />
              <span className="ml-2 whitespace-nowrap">Popularity</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option4" />
              <span className="ml-2 whitespace-nowrap ">Price High-Low</span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2 ">Budget</h5>

      
      <div className="flex mt-4 ml-14">
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option1" />
              <span className="ml-2 whitespace-nowrap">Any</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option2" />
              <span className="ml-2 whitespace-nowrap">Mid Range</span>
            </label>
          </div>
        </div>

        
        <div className="w-8 ml-32"></div>

        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option3" />
              <span className="ml-2 whitespace-nowrap">Premium</span>
            </label>
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option4" />
              <span className="ml-2 whitespace-nowrap ">Low Budget</span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2">Price Range</h5>
      <div className="ml-14 mt-4">
        <Slider
          range
          min={10}
          max={70}
          step={1}
          value={priceRange}
          onChange={handlePriceChange}
          trackStyle={[{ backgroundColor: 'black' }]}
          handleStyle={[
            { borderColor: 'black', backgroundColor: 'black' },
            { borderColor: 'black', backgroundColor: 'black' },
          ]}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{priceRange[0]}k</span>
          <span className="text-gray-600">{priceRange[1]}k</span>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2">Days Range</h5>
      <div className="ml-14 mt-4">
        <Slider
          range
          min={0}
          max={25}
          step={1}
          value={daysRange}
          onChange={handleDaysChange}
          trackStyle={[{ backgroundColor: 'black' }]}
          handleStyle={[
            { borderColor: 'black', backgroundColor: 'black' },
            { borderColor: 'black', backgroundColor: 'black' },
          ]}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{daysRange[0]} days</span>
          <span className="text-gray-600">{daysRange[1]} days</span>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2">What's Included</h5>
      <div className="ml-14 mt-4 flex">
      
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Any"
              checked={includedItems.Any}
              onChange={() => handleIncludedItemsChange('Any')}
              className="mr-2"
            />
            <label htmlFor="Any">Any</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="Transportation"
              checked={includedItems.Transportation}
              onChange={() => handleIncludedItemsChange('Transportation')}
              className="mr-2"
            />
            <label htmlFor="Transportation">Transportation</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="Guide"
              checked={includedItems.Guide}
              onChange={() => handleIncludedItemsChange('Guide')}
              className="mr-2"
            />
            <label htmlFor="Guide">Guide</label>
          </div>
        </div>

        
        <div className="flex flex-col space-y-2 ml-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Food"
              checked={includedItems.Food}
              onChange={() => handleIncludedItemsChange('Food')}
              className="mr-2"
            />
            <label htmlFor="Food">Food</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="AllTickets"
              checked={includedItems.AllTickets}
              onChange={() => handleIncludedItemsChange('AllTickets')}
              className="mr-2"
            />
            <label htmlFor="All Tickets">All Tickets</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="PickUp"
              checked={includedItems.PickUp}
              onChange={() => handleIncludedItemsChange('PickUp')}
              className="mr-2"
             
            />
            <label htmlFor="Pick Up" >Pick Up</label>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#F1F0F6] mt-10 ml-14 pt-4"></div>

      <h5 className="text-md font-semibold ml-14 mt-2 mb-2 ">One Key Benefits</h5>

      
      <div className="flex mt-4 ml-14">
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option1" />
              <span className="ml-2 whitespace-nowrap">Any </span>
            </label>
          </div>
        </div>

        
        <div className="w-8 ml-24"></div>

        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input type="radio" name="packageType" value="option3" />
              <span className="ml-2 whitespace-nowrap">Member Prices</span>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Filters;


