import React from "react";
import { useLocation } from "react-router-dom";
import GooeyNav from "../../bits/components/GooeyNav";
// Import Link if using react-router-dom for navigation
// import { Link } from "react-router-dom"; 

function Header() {
    const items = [
        { label: "Home", href: "/" },
        { label: "Stations", href: "/stations" },
        { label: "Contact", href: "/contact" }
    ];

    const location = useLocation();

    // Use null as a default for safety, let GooeyNav handle the 0 fallback
    const activeIndex = items.findIndex(item => item.href === location.pathname);

    return (
        <header
            className="fixed top-0 left-0 w-full z-20 
                        h-20 
                        bg-black/40 backdrop-blur-sm 
                        flex items-center justify-between
                        px-8 md:px-12 text-purple-400" // Simplified and consistent padding
        >
            {/* LEFT — Website Name (Removed pl-20, using overall padding) */}
            <div className="flex-shrink-0">
                {/* 1. Using a Link component for a real logo/title. */}
                {/* <Link to="/" className="text-white text-2xl font-semibold tracking-wide"> */}
                <h2 className="text-white text-2xl font-semibold tracking-wide">
                    SlotMySocket
                </h2>
                {/* </Link> */}
            </div>

            {/* CENTER — Menu PERFECTLY CENTERED */}
            {/* This absolute centering is robust for unequal side elements */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    // Only pass activeIndex if it's found, otherwise default to 0 in GooeyNav if possible
                    initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>

            {/* RIGHT — Login Button */}
            <div className="flex-shrink-0">
         <button
    className="
        text-purple-900 font-bold
        px-16 py-6 rounded-full border border-purple-900
        text-2xl
        hover:bg-purple-900 hover:text-purple-400
        cursor-pointer
        transition duration-300
    " href="/login"
>
    Login
</button>

            </div>
        </header>
    );
}

export default Header;