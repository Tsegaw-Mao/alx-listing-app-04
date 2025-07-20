import { StaticImageData } from 'next/image';

export interface CardProps {
  title: string
  image: string
}

export interface ButtonProps {
  label: string
  onClick: () => void
}

export interface PropertyProps{
    name:     string;
    address:  Address;
    rating:   number;
    category: string[];
    price:    number;
    offers:   Offers;
    image:    StaticImageData;
    discount: string;
}

export interface Address {
    state:   string;
    city:    string;
    country: string;
}

export interface Offers {
    bed:       string;
    shower:    string;
    occupants: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}
