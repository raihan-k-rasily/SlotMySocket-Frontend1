import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-white/80 border-t border-purple-900/40 py-24 px-4 md:px-8 lg:px-16">

            {/* Brand Section FULL WIDTH */}
            <div className="w-full flex flex-col items-center text-center px-4 md:px-0">
                <Link 
                    to="/" 
                    className="text-3xl md:text-4xl font-bold text-purple-400 tracking-wide"
                >
                    SlotMySocket
                </Link>

                <p className="mt-6 md:mt-8 text-sm md:text-base leading-relaxed max-w-md text-white/70 border-t border-purple-900/40 pt-4">
                    Book your charge. Power your day.  
                    Find nearby, flexible charging slots when you need them most.
                </p>
            </div>

            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 md:mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                    {/* Add Resources / Legal / Contact here */}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-20 border-t border-purple-900/40 py-8 flex items-center justify-center text-sm md:text-base text-white/60">
                <p>&copy; {new Date().getFullYear()} Slot My Socket. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
