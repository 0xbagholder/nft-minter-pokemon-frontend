import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";
import Pokedex2 from "../assets/Pokedex2.webp";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

const Header = ({ title }) => {
    const { isConnected, isDisconnected } = useAccount();

    const [aboutActive, setAboutActive] = useState("");
    const [teamActive, setTeamActive] = useState("");
    const [faqActive, setFaqActive] = useState("");
    const [mintActive, setMintActive] = useState("");
    const [adminActive, setAdminActive] = useState("");
    const [disconnected, setDisconnected] = useState(false);

    const toastWelcome = () => toast("Welcome!", { icon: "🥳", position: "top-center" });

    useEffect(() => {
        if (isDisconnected) {
            setDisconnected(true);
        }
        /* this condition makes sure the toast is only shown once at login */
        if (disconnected && isConnected) {
            toastWelcome();
        }
        if (title == "Mint") {
            setMintActive("tab-active");
        }
        if (title == "Admin") {
            setAdminActive("tab-active");
        }
    }, [isDisconnected, isConnected]);

    return (
        <div>
            <Head>
                <title>Pokedéx - {title}</title>
                <meta name="description" content="Mint a Pokemon NFT" />
                <link rel="icon" href="/pokeball.png" />
            </Head>

            <div className="navbar bg-[#0F1108] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-circle btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0F1108] rounded-box w-52"
                        >
                            <li className="hover-bordered">
                                <Link href="/#about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className="hover-bordered">
                                <Link href="/#team">
                                    <a>Team</a>
                                </Link>
                            </li>
                            <li className="hover-bordered">
                                <Link href="/#faq">
                                    <a>FAQ</a>
                                </Link>
                            </li>
                            <li className="hover-bordered">
                                <Link href="/mint">
                                    <a>Mint</a>
                                </Link>
                            </li>
                            <li className="w-[5.5rem] rounded-full hover-bordered border-[1px] border-primary hover:border-0">
                                <Link href="/admin">
                                    <a>Admin</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <div className="flex items-center ml-0 transition duration-300 ease-in-out delay-150 cursor-pointer md:ml-2 hover:scale-110">
                            <div className="h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem]">
                                <Image src={Pokedex2} />
                            </div>
                            <h1 className="-ml-2 text-lg normal-case btn btn-ghost sm:text-xl hover:bg-transparent">
                                Pokédex
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="hidden navbar-center md:flex">
                    <div className="tabs lg:space-x-8">
                        <Link href="/#about">
                            <a
                                className={`tab tab-bordered ${aboutActive} hover:tab-active text-[16px] text-white`}
                                onClick={() => {
                                    setAboutActive("tab-active");
                                    setTeamActive("");
                                    setFaqActive("");
                                    setMintActive("");
                                }}
                            >
                                About
                            </a>
                        </Link>
                        <Link href="/#team">
                            <a
                                className={`tab tab-bordered ${teamActive} hover:tab-active text-[16px] text-white`}
                                onClick={() => {
                                    setAboutActive("");
                                    setTeamActive("tab-active");
                                    setFaqActive("");
                                    setMintActive("");
                                }}
                            >
                                Team
                            </a>
                        </Link>
                        <Link href="/#faq">
                            <a
                                className={`tab tab-bordered ${faqActive} hover:tab-active text-[16px] text-white`}
                                onClick={() => {
                                    setAboutActive("");
                                    setTeamActive("");
                                    setFaqActive("tab-active");
                                    setMintActive("");
                                }}
                            >
                                FAQ
                            </a>
                        </Link>
                        <Link href="/mint">
                            <a
                                className={`tab tab-bordered ${mintActive} hover:tab-active text-[16px] text-white`}
                                onClick={() => {
                                    setAboutActive("");
                                    setTeamActive("");
                                    setFaqActive("");
                                    setMintActive("tab-active");
                                }}
                            >
                                Mint
                            </a>
                        </Link>
                        <Link href="/admin">
                            <a
                                className={`tab tab-bordered ${adminActive} hover:tab-active text-[16px] badge badge-primary badge-outline`}
                                onClick={() => {
                                    setAboutActive("");
                                    setTeamActive("");
                                    setFaqActive("");
                                    setMintActive("");
                                    setAdminActive("tab-active");
                                }}
                            >
                                Admin
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="mr-5 md:mr-1">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
