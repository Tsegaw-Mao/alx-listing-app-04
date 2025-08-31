import React from "react";

export type Property = {
  id: string | number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};

type PropertyCardProps = {
  property: Property;
  onClick?: (id: string | number) => void;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform m-3 w-72"
      onClick={() => onClick?.(property.id)}
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {property.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{property.location}</p>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span className="text-pink-600">${property.price}/night</span>
          <span>⭐ {property.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
