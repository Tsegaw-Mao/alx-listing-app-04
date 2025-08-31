// components/property/PropertyDetail.tsx
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [tab, setTab] = useState<"offer" | "reviews" | "host">("offer");

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6">
      {/* Left content */}
      <div className="flex-1">
        {/* Title */}
        <h1 className="text-4xl font-bold">{property.name}</h1>

        {/* Location + Rating */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image as unknown as string}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />

          {/* If you later add more images */}
          {/* {property.offers.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${property.name} image ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))} */}
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-gray-300">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`pb-4 font-semibold ${
                tab === "offer" ? "border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setTab("offer")}
            >
              What we offer
            </button>
            <button
              className={`pb-4 font-semibold ${
                tab === "reviews" ? "border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`pb-4 font-semibold ${
                tab === "host" ? "border-b-2 border-blue-600" : "text-gray-500"
              }`}
              onClick={() => setTab("host")}
            >
              About host
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {tab === "offer" && (
            <div>
              <h2 className="text-2xl font-semibold mt-6">Amenities</h2>
              <ul className="flex flex-wrap space-x-4 mt-2">
                {property.category.map((amenity, index) => (
                  <li key={index} className="bg-gray-200 p-2 rounded-md mb-2">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tab === "reviews" && <ReviewSection reviews={property.offers.reviews} />}
          {tab === "host" && (
            <div>
              <h3 className="text-xl font-semibold">Host Information</h3>
              <p>{property.offers.host}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right content */}
      <div className="w-full lg:w-96 sticky top-20 self-start">
        <BookingSection price={property.price} discount={property.discount} />
      </div>
    </div>
  );
};

export default PropertyDetail;
