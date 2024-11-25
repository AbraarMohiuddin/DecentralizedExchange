// Home.js
/*Abraar Mohiuddin Syed
103795990
This is the code for the HomePage. It is the page that opens when the user starts the website. It has links to other pages as well as 
Welcomes the User to the site.*/


import React from "react";
import { Grid, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


import { BsFire } from "react-icons/bs"; // Import the filled flame icon

import "../App.css";
import image from "../images/home.png";
import bitcoin from "../images/bitcoin.jpg";
import eth from "../images/eth.webp";
import doge from "../images/doge.png";
import cardano from "../images/cardano.png";
import wave from "../images/wave369.png";

import {
    FaCheckCircle,
    FaEnvelope,
    FaPhone,
    FaArrowUp,
    FaUp,
} from "react-icons/fa"; // Import Font Awesome icons
import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Grid container>
                {/* Text Content */}
                <Grid item xs={12} md={6} className="text-half">
                    <div className="text-content">
                        <Typography variant="h4" className="forte-text">
                            Your Trading Destination
                        </Typography>
                        <Typography variant="h2" className="larger-text">
                            DEX
                        </Typography>
                        <Typography variant="body1" className="smaller-text">
                            Welcome to DEX, your premier destination for
                            decentralized trading. We offer a wide range of
                            digital assets, providing you with the best
                            opportunities to buy and sell in a secure and
                            efficient manner. <br></br> Join us today and
                            explore the future of trading.
                        </Typography>
                        <Button
                            className="connect-button"
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: "1rem",
                                borderRadius: "25px",
                                height: "48px", // Increase the height
                                width: "210px", // Increase the width
                            }}
                        >
                            CONNECT WALLET
                        </Button>
                    </div>
                </Grid>
                {/* Image */}
                <Grid item xs={12} md={6} className="image-half">
                    <img src={image} alt="Image" className="cover-image" />
                </Grid>
                <h1 className="trending-heading">
                    {" "}
                    Trending Today
                    <BsFire style={{ color: "orange", marginRight: "40px" }} />
                </h1>{" "}
                {/* Added heading */}
                {/* Cards */}
                <Grid
                    container
                    className="card-container"
                    style={{ marginLeft: "65px", marginTop: "20px" }}
                >
                    <Grid item xs={12} md={2}>
                        <div className="card" style={{ height: "350px" }}>
                            <img
                                src={bitcoin}
                                alt="Card 1"
                                className="card-image"
                            />
                            <Typography variant="h5" className="card-title">
                                Bitcoin
                                <FaCheckCircle
                                    style={{
                                        color: "#005aa0",
                                        marginRight: "20px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body2" className="card-text">
                                Asset #3766910
                                <br />
                                Seller: Blip Studios
                            </Typography>
                            <div
                                className="card-price"
                                style={{ textAlign: "right", color: "black" }}
                            >
                                Price: 25 ETH
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Link
                                    href="/trading"
                                    style={{ color: "black" }}
                                >
                                    <b>BUY NOW</b>
                                </Link>
                            </div>
                        </div>
                    </Grid>

                    {/* Random Data for Card 2 */}
                    <Grid item xs={12} md={2}>
                        <div className="card" style={{ height: "350px" }}>
                            <img
                                src={doge}
                                alt="Card 2"
                                className="card-image"
                            />
                            <Typography variant="h5" className="card-title">
                                Dogecoin
                                <FaCheckCircle
                                    style={{
                                        color: "#005aa0",
                                        marginRight: "20px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body2" className="card-text">
                                Asset #7845123
                                <br />
                                Seller: Crypto Emporium
                            </Typography>
                            <div
                                className="card-price"
                                style={{ textAlign: "right", color: "black" }}
                            >
                                Price: 30 ETH
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Link
                                    href="/trading"
                                    style={{ color: "black" }}
                                >
                                    <b>BUY NOW</b>
                                </Link>
                            </div>
                        </div>
                    </Grid>

                    {/* Random Data for Card 3 */}
                    <Grid item xs={12} md={2}>
                        <div className="card" style={{ height: "350px" }}>
                            <img
                                src={eth}
                                alt="Card 3"
                                className="card-image"
                            />
                            <Typography variant="h5" className="card-title">
                                Ethereum
                                <FaCheckCircle
                                    style={{
                                        color: "#005aa0",
                                        marginRight: "20px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body2" className="card-text">
                                Asset #9376540
                                <br />
                                Seller: Crypto Universe
                            </Typography>
                            <div
                                className="card-price"
                                style={{ textAlign: "right", color: "black" }}
                            >
                                Price: 15 ETH
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Link
                                    href="/trading"
                                    style={{ color: "black" }}
                                >
                                    <b>BUY NOW</b>
                                </Link>
                            </div>
                        </div>
                    </Grid>

                    {/* Random Data for Card 4 */}
                    <Grid item xs={12} md={2}>
                        <div className="card" style={{ height: "350px" }}>
                            <img
                                src={wave}
                                alt="Card 4"
                                className="card-image"
                            />
                            <Typography variant="h5" className="card-title">
                                Wave369
                                <FaCheckCircle
                                    style={{
                                        color: "#005aa0",
                                        marginRight: "20px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body2" className="card-text">
                                Asset #4567891
                                <br />
                                Seller: NFT Creations
                            </Typography>
                            <div
                                className="card-price"
                                style={{ textAlign: "right", color: "black" }}
                            >
                                Price: 50 ETH
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Link
                                    href="/trading"
                                    style={{ color: "black" }}
                                >
                                    <b>BUY NOW</b>
                                </Link>
                            </div>
                        </div>
                    </Grid>

                    {/* Random Data for Card 5 */}
                    <Grid item xs={12} md={2}>
                        <div className="card" style={{ height: "350px" }}>
                            <img
                                src={cardano}
                                alt="Card 5"
                                className="card-image"
                            />
                            <Typography variant="h5" className="card-title">
                                Cardano
                                <FaCheckCircle
                                    style={{
                                        color: "#005aa0",
                                        marginRight: "20px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body2" className="card-text">
                                Asset #1234567
                                <br />
                                Seller: Crypto Investments
                            </Typography>
                            <div
                                className="card-price"
                                style={{ textAlign: "right", color: "black" }}
                            >
                                Price: 40 ETH
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Link
                                    href="/trading"
                                    style={{ color: "black" }}
                                >
                                    <b>BUY NOW</b>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    {/* Below the Cards */}

                    <Grid item xs={12} style={{ textAlign: "center" }}>
    <Button
        href="./assets"
        variant="contained"
        color="primary"
        style={{
            borderRadius: "25px",
            height: "58px",
            width: "250px",
            marginTop: "100px",
            backgroundColor: "#CFB53B	" // Set the background color to gold
        }}
    >
        START TRADING NOW!
    </Button>
</Grid>

                    <Grid item xs={12}>
                        <h2
                            style={{
                                marginTop: "35px",
                                marginLeft: "-40px",
                                marginBottom: "-65px",
                                fontSize: "26px",
                                
                            }}
                        >
                            Top Sales in 24 Hours
                            <FaArrowUp
                                style={{
                                    color: "green",
                                    marginLeft: "5px",
                                }}
                            />
                        </h2>
                    </Grid>

                    <div className="table-container table-center">
                        <table className="asset-table">
                            <thead>
                                <tr>
                                    <th>
                                        Rank
                                        <FaArrowUp
                                            style={{
                                                color: "green",
                                                marginLeft: "5px",
                                            }}
                                        />
                                    </th>
                                    <th>Asset</th>
                                    <th>Seller</th>
                                    <th>
                                        Floor Price
                                        <FaArrowUp
                                            style={{
                                                color: "green",
                                                marginLeft: "5px",
                                            }}
                                        />
                                    </th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Wave369</td>
                                    <td>Parallel Alpha</td>
                                    <td>0.11 ETH</td>
                                    <td>44 ETH</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jellybean</td>
                                    <td>Rainbow World</td>
                                    <td>0.04 ETH</td>
                                    <td>11 ETH</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>CryptoCat</td>
                                    <td>Mutant Ape Yacht Club</td>
                                    <td>5.34 ETH</td>
                                    <td>1,545 ETH</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>DigitalArt</td>
                                    <td>Blips</td>
                                    <td>0.25 ETH</td>
                                    <td>79 ETH</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>NFTKingdom</td>
                                    <td>Pepunks</td>
                                    <td>0.01 ETH</td>
                                    <td>43 ETH</td>
                                </tr>
                                {/* Additional rows */}
                                <tr>
                                    <td>6</td>
                                    <td>ArtisticGems</td>
                                    <td>Creative Expressions</td>
                                    <td>0.15 ETH</td>
                                    <td>24 ETH</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>MoonlitDreams</td>
                                    <td>Lunar Creations</td>
                                    <td>0.08 ETH</td>
                                    <td>58 ETH</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>PixelMagic</td>
                                    <td>Digital Wizards</td>
                                    <td>0.18 ETH</td>
                                    <td>35 ETH</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>FantasySculpt</td>
                                    <td>Enchanted Artistry</td>
                                    <td>0.12 ETH</td>
                                    <td>16 ETH</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>SpaceCanvas</td>
                                    <td>Astronomical Designs</td>
                                    <td>0.09 ETH</td>
                                    <td>72 ETH</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={12}>
    <div style={{ textAlign: "center" }}>
        <p style={{ marginTop: "20px", marginLeft: "650px" }}>
            Sign Up today for the best offers!
        </p>
        <Button
            href="./sign-up"
            variant="contained"
            color="primary"
            style={{
                borderRadius: "25px",
                height: "48px",
                width: "210px",
                marginTop: "10px",
                marginLeft:"650px",
                marginBottom:"60px"
                
              }}
        >
            Login / Sign Up
        </Button>
    </div>
</Grid>

            <footer className="footer">
                <div className="footer-content">
                    <div className="left-section">
                        <p>DEX</p> {/* Brand name */}
                    </div>
                    <div className="middle-section">
                        <p>
                            <FaEnvelope /> info@example.com {/* Email */}
                        </p>
                    </div>
                    <div className="right-section">
                        <p>
                            <FaPhone /> +1 (123) 456-7890 {/* Phone number */}
                        </p>
                    </div>
                </div>
                <p>&copy; 2023 Trading Platform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
