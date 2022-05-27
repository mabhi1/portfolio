import React from "react";
import Image from "next/image";

const Header = ({ id }) => {
    return (
        <div className="w-full h-auto">
            <Image src="/asianmart.png" alt="Asian Mart" width="600" height="280" />
        </div>
    );
};

export default Header;
