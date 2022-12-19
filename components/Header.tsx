import React from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  HiOutlineBell,
  HiOutlineShoppingCart,
  HiOutlineChevronDown,
  HiOutlinePlus,
} from "react-icons/hi";

import { SlMagnifier } from "react-icons/sl";

import ThemeToggler from "./ThemeToggler";
import { ConnectWallet } from "@thirdweb-dev/react";
import useColorTheme from "../utils/useColorTheme";
import { ColorMode } from "@thirdweb-dev/react/dist/declarations/src/evm/components/theme";
import useMint from "../utils/hooks/useMint";
import useListItem from "../utils/hooks/useListItem";
import {
  DrawerModal,
  MintItem,
  ListItem,
  ConnectModal,
  ButtonNeon,
} from ".";
import ConnectModalContent from "./ConnectModalContent";

type Props = {};

function Header({}: Props) {
  const theme = useColorTheme();

  const {
    address,
    name,
    setName,
    image,
    setImage,
    description,
    setDescription,
    typeOfProperty,
    setTypeOfProperty,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    squareFeet,
    setSquareFeet,
    isMinting,
    openAddInventory,
    closeConnectModal,
    connectModalRef,
    inventoryModalRef,
    mintNtf,
    nfts,
    isLoadingNft,
    refetchNtfs,
  } = useMint();

  const {
    selectedNft,
    setSelectedNft,
    listItemModalRef,
    openListItem,
    setPrice,
    setListingType,
    handleCreateListing,
    isDirectListingLoading,
    isAuctionListingLoading,
    networkMismatch,
  } = useListItem();
  return (
    <>
      <div className="max-w-6xl mx-auto p-2">
        <nav className="flex justify-between items-center relative">
          <div className="flex items-center space-x-2 text-sm">
            <ButtonNeon>
              <ConnectWallet
                className="relative flex items-center space-x-4 divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none text-black transition duration-200 hover:text-[#e0aa53] dark:bg-black dark:text-white dark:hover:text-[#e0aa53]"
                colorMode={
                  theme as ColorMode | undefined
                }
              />
            </ButtonNeon>

            <p className="headerLink">
              <span className="hover:font-bold m-2 ease-in-out duration-200">
                <a
                  href="https://mumbaifaucet.com/"
                  target="_blank"
                >
                  Get Free Matic
                </a>
              </span>
            </p>
          </div>
          <section className="static top-5 object-center">
            <ThemeToggler />
          </section>
          <div className="flex items-center space-x-4 text-sm">
            {/* <p className="headerLink">About</p> */}

            <p className="headerLink">
              <span className="hover:font-bold m-2 ease-in-out duration-200">
                <a
                  href="https://alimora-portfolio.vercel.app/"
                  target="_blank"
                >
                  About
                </a>
              </span>
            </p>

            <div
              onClick={() => openAddInventory()}
              className="group relative cursor-pointer"
            >
              <div className="animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#2c2b2b] to-[#2c2b2b] dark:bg-gradient-to-r dark:from-[#855d0c] dark:to-[#e0aa53] opacity-20 blur transition duration-1000 group-hover:opacity-60"></div>
              <div className="relative flex items-center divide-gray-600 rounded-lg bg-white px-4 py-4 leading-none text-black transition duration-200 hover:text-[#e0aa53] dark:bg-black dark:text-white dark:hover:text-[#e0aa53] justify-center">
                <span className="hidden md:mr-4 md:inline-flex">
                  Add to Inventory
                </span>
                <HiOutlinePlus className="text-base font-bold" />
              </div>
            </div>
          </div>
        </nav>

        <hr className="mt-2" />

        <section className="flex items-center space-x-4 py-10">
          <div className="cursor-pointer w-32 flex-shrink-0 relative">
            <Link href="/">
              <Image
                className="h-full w-full object-contain position"
                src="/logo.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          {/* <button className="hidden lg:flex items-center space-x-2 w-20">
                        <p className="text-gray-600 dark:text-white/50 text-sm">
                            Shop by Category
                        </p>
                        <HiOutlineChevronDown className="flex-shrink-0 text-sm" />
                    </button> */}

          <form className="flex items-center flex-1">
            <label
              htmlFor="voice-search"
              className="sr-only"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#e0aa53] focus:border-[#e0aa53] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:[#e0aa53] dark:focus:border-[#e0aa53]"
                placeholder="Search Anything..."
                required
              />
            </div>

            <button
              type="submit"
              className="h-btn"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="hidden md:inline-flex">
                Search
              </span>
            </button>
          </form>

          <button
            onClick={() => {
              if (!address)
                return toast.error(
                  "Connect Wallet"
                );
              openListItem();
            }}
            className="inline-flex bg-transparent text-[#080a0b] dark:text-[#caa969] hover:bg-[#080a0b] hover:text-[#caa969] px-5 md:px-5 py-2 border-2 border-[#080a0b] dark:border-[#caa969] dark:hover:bg-[#caa969] dark:hover:text-[#080a0b] transition-colors duration-200 rounded-lg"
          >
            List Item
          </button>
        </section>
        <hr />
      </div>

      {/* Connect to Wallet Modal */}
      <ConnectModal
        noCancelButton
        ref={connectModalRef}
      >
        <ConnectModalContent
          address={address}
          closeModal={closeConnectModal}
        />
      </ConnectModal>

      {/* Inventory Modal */}
      <DrawerModal
        isLoading={isMinting}
        headerText="Add an Item to the Marketplace"
        ref={inventoryModalRef}
        successBtnText={"Add/Mint Item"}
        onSuccessClick={mintNtf}
      >
        <MintItem
          image={image}
          setImage={setImage}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          typeOfProperty={typeOfProperty}
          setTypeOfProperty={setTypeOfProperty}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          bathrooms={bathrooms}
          setBathrooms={setBathrooms}
          squareFeet={squareFeet}
          setSquareFeet={setSquareFeet}
        />
      </DrawerModal>

      {/* List Item Modal */}
      <DrawerModal
        isLoading={
          isDirectListingLoading ||
          isAuctionListingLoading
        }
        headerText="List an Item"
        ref={listItemModalRef}
        successBtnText={
          networkMismatch
            ? "Switch Network"
            : "Create Listing"
        }
        onSuccessClick={handleCreateListing}
      >
        <ListItem
          nfts={nfts}
          isLoadingNft={isLoadingNft}
          refetchNtfs={refetchNtfs}
          selectedNft={selectedNft}
          setSelectedNft={setSelectedNft}
          setPrice={setPrice}
          setListingType={setListingType}
        />
      </DrawerModal>
    </>
  );
}

export default Header;
