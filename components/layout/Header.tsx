import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/alx.png";


import Rooms from "@/public/assets/living-room-1.svg"
import Mansion from "@/public/assets/mansion-1.png"
import Countryside from "@/public/assets/farm-1.png"
import Villa from "@/public/assets/villa-1.png"
import Tropical from "@/public/assets/palm-tree 1.png"
import New from "@/public/assets/key-chain-1.png"
import Amazingpool from "@/public/assets/swimming-pool-1.png"
import Beachhouse from "@/public/assets/vacations-1.png"
import Island from "@/public/assets/island(1)-1.png"
import Camping from "@/public/assets/tent-1.png"
import Apartment from "@/public/assets/apartment-1.png"
import House from "@/public/assets/home-1.png"
import Lakefront from "@/public/assets/cottage-1.png"
import Farmhouse from "@/public/assets/farm-1.png"
import Treehouse from "@/public/assets/treehouse(1)-1.png"
import Cabins from "@/public/assets/cabin-1.png"
import Castles from "@/public/assets/castle-tower-1.png"

import Magnifer from "@/public/assets/Magnifer.svg"

import HeroBg from "@/public/assets/Image-1.png";





const categories = [
    { label: "Rooms", img: Rooms },
    { label: "Mansion", img: Mansion },
    { label: "Countryside", img: Countryside },
    { label: "Villa", img: Villa },
    { label: "Tropical", img: Tropical },
    { label: "New", img: New },
    { label: "Amazing pool", img: Amazingpool },
    { label: "Beach house", img: Beachhouse },
    { label: "Island", img: Island },
    { label: "Camping", img: Camping },
    { label: "Apartment", img: Apartment },
    { label: "House", img: House },
    { label: "Lakefront", img: Lakefront },
    { label: "Farm house", img: Farmhouse },
    { label: "Treehouse", img: Treehouse },
    { label: "Cabins", img: Cabins },
    { label: "Castles", img: Castles },
    { label: "Lakeside", img: Countryside },
];

const Header = () => {
    return (
        <>
            <header className="shadow-sm border-b bg-white sticky top-0 z-50">

                <div className="bg-[#34967C] text-white flex items-center justify-between px-6 py-2 text-sm">
                    <span className="flex items-center gap-2">
                        <span className="text-lg">👜</span>
                        Overseas trip? Get the latest information on travel guides
                    </span>
                    <button className="bg-black text-white px-3 py-1 rounded-full text-xs hover:bg-gray-800">
                        More Info
                    </button>
                </div>


                {/* Top Bar */}
                <div className="flex items-center justify-between px-14 py-4">
                    {/* Logo Section */}
                    <div className="flex items-center gap-6 mx-8">
                        <Image src={Logo} alt="StayFinder Logo" width={58.73} height={30.6} />
                    </div>

                    {/* Search Bar */}

                    {/* Search Bar */}
                    <div className="flex gap-2 items-end border rounded-full px-4 py-3 shadow-sm w-full max-w-5xl mx-2 bg-white">
                        {/* Location - Takes 2/5 of total width (twice others) */}
                        <div className="flex flex-col flex-[2] min-w-0 px-4">
                            <label className="text-md text-black font-black">Location</label>
                            <input
                                type="text"
                                placeholder="Search for destination"
                                className="outline-none text-md w-full placeholder-gray-500"
                            />
                        </div>

                        <div className="h-8 w-px bg-gray-300 self-center" />

                        {/* Check-in - Takes 1/5 of total width */}
                        <div className="flex flex-col flex-1 min-w-0 px-2">
                            <label className="text-xs text-gray-500 mb-1">Check in</label>
                            <input
                                type="date"
                                placeholder="Add date"
                                className="outline-none text-sm w-full placeholder-black"
                            />
                        </div>

                        <div className="h-8 w-px bg-gray-300 self-center" />

                        {/* Check-out - Takes 1/5 of total width */}
                        <div className="flex flex-col flex-1 min-w-0 px-2">
                            <label className="text-xs text-gray-500 mb-1">Check out</label>
                            <input
                                type="date"
                                placeholder="Add date"
                                className="outline-none text-sm w-full placeholder-black"
                            />
                        </div>

                        <div className="h-8 w-px bg-gray-300 self-center" />

                        {/* Guests - Takes 1/5 of total width */}
                        <div className="flex flex-col flex-1 min-w-0 px-2">
                            <label className="text-xs text-gray-500 mb-1">Guests</label>
                            <input
                                type="text"
                                placeholder="Add guests"
                                className="outline-none text-sm w-full placeholder-black"
                            />
                        </div>

                        {/* Search button - Fixed width */}
                        <button className="bg-orange-400 text-white p-2 rounded-full ml-2 w-10 h-10 flex items-center justify-center">
                            <Image
                                src={Magnifer}
                                alt={"Search"}
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </button>
                    </div>



                    {/* Auth Buttons */}
                    <div className="flex gap-4">
                        {/* Sign in Button - Filled */}
                        <button className="bg-[#34967C] text-white font-medium px-6 py-2 rounded-full hover:opacity-90">
                            Sign in
                        </button>

                        {/* Sign up Button - Outlined */}
                        <button className="border border-gray-300 text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100">
                            Sign up
                        </button>
                    </div>
                </div>
                <hr />

                {/* Categories */}
                <div className="w-[calc(100%-7rem)] overflow-x-auto border-t border-b mx-14">
                    <div className="flex items-center gap-6 py-3 px-6 min-w-full mx-8">
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-sm text-gray-700 hover:text-black cursor-pointer min-w-[70px] px-6 hover:scale-140 hover:font-semibold"
                            >
                                <div className="w-10 h-10 relative mb-1">
                                    <Image
                                        src={cat.img}
                                        alt={cat.label}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <span>{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </header>

            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative w-[calc(100%-7rem)] h-[60vh] rounded-3xl overflow-hidden mx-14 mt-4 px-6">
                <div className="absolute inset-0">
                    <Image
                        src={HeroBg}
                        alt="Scenic view"
                        fill
                        priority
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                        className="select-none"
                    />
                </div>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-white text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 max-w-2xl">
                        Find your favorite <br /> place here!
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        The best prices for over 2 million properties worldwide
                    </p>
                </div>
            </div>
        </>

    );
};

export default Header;
