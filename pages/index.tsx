import { BanknotesIcon, ClockIcon } from "@heroicons/react/24/outline";
import { MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";

import { ListingType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { Footer, Header, ListingCard, NftSkeleton } from "../components";
import useListItem from "../utils/hooks/useListItem";

const Home: NextPage = () => {
    const { listings, loadingListings } = useListItem();

    return (
        <>
            <div className="bg-gradient-to-tr from-gray-400/[0.50] to-gray-200[0.35]  dark:from-[#080a0b] dark:to-gray-500/[0.1] min-h-screen pb-20 md:pb-10">
                <Header />

                <main className="max-w-6xl mx-auto p-2">
                    {loadingListings ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 lg:mx-auto">
                            {/* Skeleton Loading */}
                            {Array(8)
                                .fill(0)
                                .map((_, index) => (
                                    <NftSkeleton key={index} />
                                ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 lg:mx-auto">
                            {listings?.map((listing) => (
                                <Link
                                    key={listing.id}
                                    href={`/listing/${listing.id}`}
                                    className="flex flex-col"
                                >
                                    <ListingCard>
                                        <div className="flex flex-col p-5 space-y-5">
                                            <div className="flex-1 flex flex-col pb-2 items-center">
                                                <MediaRenderer
                                                    className="w-44 rounded-lg"
                                                    src={listing.asset.image}
                                                />
                                            </div>

                                            <div className="pt-2 space-y-4">
                                                <h2 className="text-md truncate text-gray-500 font-bold">
                                                    {listing.asset.name}
                                                </h2>
                                                <hr className="border-[#caa969]"/>
                                                <p className="truncate text-xs text-gray-600 dark:text-white/60">
                                                    {listing.asset.description}
                                                </p>
                                            </div>

                                            <p className="flex items-center space-x-1">
                                                <span className="font-md text-black dark:text-white text-sm">
                                                    {
                                                        listing
                                                            .buyoutCurrencyValuePerToken
                                                            .displayValue
                                                    }
                                                </span>
                                                <span className="text-gray-600 text-sm">
                                                    {
                                                        listing
                                                            .buyoutCurrencyValuePerToken
                                                            .symbol
                                                    }
                                                </span>
                                            </p>

                                            <div
                                                className={[
                                                    "flex space-x-1 items-center justify-end text-xs w-fit ml-auto p-2 rounded-lg text-white",
                                                    listing.type ===
                                                    ListingType.Direct
                                                        ? "bg-[#2c2b2b]"
                                                        : "bg-[#caa969]",
                                                ].join(" ")}
                                            >
                                                <p>
                                                    {listing.type ===
                                                    ListingType.Direct
                                                        ? "Buy Now"
                                                        : "Auction"}
                                                </p>
                                                {listing.type ===
                                                ListingType.Direct ? (
                                                    <BanknotesIcon className="h-4" />
                                                ) : (
                                                    <ClockIcon className="h-4" />
                                                )}
                                            </div>
                                        </div>
                                    </ListingCard>
                                </Link>
                            ))}
                        </div>
                    )}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
