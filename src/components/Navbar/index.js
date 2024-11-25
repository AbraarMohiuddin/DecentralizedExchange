//Abraar Mohiuddin Syed
//103795990
//This the Navbar that displays on top of screen. It redirects to different pages of the website.
import React from "react";
import {
    Nav,
    NavMenu,
    ConnectWalletButton,
    NavLinkWithIcon,
} from "./NavbarElements"; // Import NavLinkWithIcon component
import {
    FaHome,
    FaExchangeAlt,
    FaMoneyBillWave,
    FaQuestionCircle,
    FaUserPlus,
    FaWallet,
} from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLinkWithIcon to="/" activeStyle>
                        <FaHome />

                        <b>Home</b>
                    </NavLinkWithIcon>
                    <NavLinkWithIcon to="/assets" activeStyle>
                        <FaWallet />
                        Assets
                    </NavLinkWithIcon>
                    <NavLinkWithIcon to="/trading" activeStyle>
                        <FaExchangeAlt />
                        Trading
                    </NavLinkWithIcon>
                    <NavLinkWithIcon to="/transaction" activeStyle>
                        <FaMoneyBillWave />
                        Transactions
                    </NavLinkWithIcon>
                    <NavLinkWithIcon to="/sign-up" activeStyle>
                        <FaUserPlus size={20} />{" "}
                        {/* Render the FaUserPlus icon */}
                        Sign Up
                    </NavLinkWithIcon>
                </NavMenu>
                <NavMenu>
                    <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
