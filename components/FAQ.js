import React from "react";
import { discordUrl, etherscanUrl, openseaCollection, twitterUrl } from "../constants/urlLinks";

const style = {
    background: `bg-gradient-to-b from-[#F9EA9A] to-[#f9dc5c]`,
    wrapper: `container mx-auto mb-8 md:w-4/5 pt-4`,
    title: `text-4xl md:text-5xl text-center underline mb-8`,
    grid: `grid grid-cols-2`,
    gridContainer: `flex flex-col mx-4`,
    gridTitle: `text-lg md:text-xl mb-2`,
    gridDescription: `text-justify text-sm md:text-lg`,
};

const FAQ = () => {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>FAQ</h1>
                <div className={style.grid}>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>What&apos;s an NFT?</h1>
                        <p className={style.gridDescription}>
                            An NFT stands for &quot;non-fungible token&quot;, a one of a kind token
                            that proves ownership of a digital item. Once you own that item, you can
                            then do lots of other things, like sell it, hold it, show it off, use it
                            to access a chat room (like Discord) and much more. For some NFT&apos;s
                            - the main function is to simply be visual art and look cool, while some
                            are audio-based, and others offer additional utility like exclusive
                            access to websites or participation in an event. In short, it&apos;s
                            something unique, which you alone own. It can be art, and can also act
                            as a &quot;members&quot; card.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>What are Pokémon?</h1>
                        <p className={style.gridDescription}>
                            Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese
                            media franchise managed by The Pokémon Company, a company founded by
                            Nintendo, Game Freak, and Creatures. The franchise was created by
                            Satoshi Tajiri in 1996, and is centered on fictional creatures called
                            &quot;Pokémon&quot;. In Pokémon, humans, known as Pokémon Trainers,
                            catch and train Pokémon to battle other Pokémon for sport. All media
                            works within the franchise are set in the Pokémon universe. The English
                            slogan for the franchise is &quot;Gotta Catch ‘Em All!&quot;. There are
                            currently 913 Pokémon species.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>How much is it to mint a Pokémon?</h1>
                        <p className={style.gridDescription}>
                            Each Pokémon NFT costs 0.01 ETH to mint.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>What happens after I mint a Pokémon?</h1>
                        <p className={style.gridDescription}>
                            Wait 2-5 minutes for the Chainlink nodes to respond with the random
                            numbers needed to choose which Pokémon belongs to you! You will know
                            that the process has been completed when a notification appears with a
                            link to view your newly minted Pokémon on OpenSea.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>
                            Why does my NFT show a picture of an egg?
                        </h1>
                        <p className={style.gridDescription}>
                            Just like in the game, your Pokémon needs time to incubate before
                            hatching. Come back after a few hours, or the next day, and see which
                            Pokémon awaits you.
                            <br />
                            <br />
                            For the technically inclined, you can find out what Pokémon you have by
                            passing the Token ID into the tokenIdToPokemon function in the contract.
                            For example, if you&apos;d gotten Bulbasaur, it will return values of
                            &quot;0&quot; for both the &quot;generation&quot; and &quot;id&quot;
                            fields.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>Where is the Pokédex Collection stored?</h1>
                        <p className={style.gridDescription}>
                            Your NFT is securely stored at the address / wallet you used to mint or
                            purchase. You can verify via{" "}
                            <a
                                href={etherscanUrl}
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Etherscan
                            </a>
                            . You can also view your Pokémon on OpenSea:{" "}
                            <a
                                href={openseaCollection}
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pokédex Collection
                            </a>
                            .
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h1 className={style.gridTitle}>How do I get involved?</h1>
                        <p className={style.gridDescription}>
                            Mint a Pokémon yourself, or purchase a Pokémon of your liking on{" "}
                            <a
                                href={openseaCollection}
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OpenSea
                            </a>
                            . Head over to the{" "}
                            <a
                                href={discordUrl}
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pokédex Discord
                            </a>
                            , jump in on the conversation and let us know your ideas! In Discord you
                            can verify as a holder to access gated channels. Jump on{" "}
                            <a
                                href={twitterUrl}
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>{" "}
                            and show your support for the project!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
