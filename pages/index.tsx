import { PropertyProps } from '@/interfaces';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import Image from 'next/image';

const PropertyListingPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Property Image */}
            <div className="relative aspect-[4/3] flex-grow">
              {typeof property.image === 'string' ? (
                <img
                  src={property.image}
                  alt={property.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              )}
              {property.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {property.discount}% OFF
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold truncate">{property.name}</h3>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm">{property.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-1">
                {property.address.city}, {property.address.country}
              </p>

              <div className="mt-3">
                <span className="text-lg font-semibold">${property.price}</span>
                <span className="text-gray-500 text-sm"> / night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListingPage;