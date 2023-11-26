import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import chair from '@/public/chair.webp';
import backpack from '@/public/backpack.webp';
import shoes from '@/public/shoes.webp';
import BarMenuIcon from '@/public/BarMenuIcon.svg';

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      {/* Top Header */}
      <div className="w-screen  bg-zorro-purple border-b border-zorro-light-purple text-zorro-light-purple">
        <div className="w-240 h-10 mx-auto flex flex-row items-center">
          <p className="text-sm font-light">{`World's Fastest Online Shopping Hub Hotline 1.800.123.456789`}</p>
          <div className="ml-20 flex flex-row items-center">
            <Link
              className="text-sm font-light hover:text-zorro-pink focus:text-zorro-pink focus:outline-none focus-visible:outline-none"
              href={""}
            >
              {"Advertise"}
            </Link>
            <Link
              className="text-sm ml-4 font-light hover:text-zorro-pink focus:text-zorro-pink focus:outline-none focus-visible:outline-none"
              href={""}
            >
              {"Gift Cards"}
            </Link>
            <Link
              className="text-sm ml-4 font-light hover:text-zorro-pink focus:text-zorro-pink focus:outline-none focus-visible:outline-none"
              href={""}
            >
              {"Today's Deals"}
            </Link>
            <Link
              className="text-sm ml-4 font-light hover:text-zorro-pink focus:text-zorro-pink focus:outline-none focus-visible:outline-none"
              href={""}
            >
              {"Help"}
            </Link>
            <Link
              className="text-sm ml-4 font-light hover:text-zorro-pink focus:text-zorro-pink focus:outline-none focus-visible:outline-none"
              href={""}
            >
              {"Track Your Order"}
            </Link>
          </div>
        </div>
      </div>
      {/* Logo Search Sign */}
      <div className="w-screen bg-zorro-purple">
        <div className="w-240 mx-auto flex flex-row items-center h-20">
          <Image src={logo} width={100} height={20} alt="Zorro Logo" />
          {/* <button className="flex w-3 h-4 text-white flex-col">
            <BarMenuIcon />
          </button> */}
          <div className="flex flex-row items-center ml-4 text-zorro-grey">
            <input
              type="text"
              className="rounded p-2 w-128 focus:outline-none focus-visible:outline-none focus-visible:border-zorro-pink focus-visible:border-2"
              placeholder="Search"
              name="header-search"
              id="header-search"
            />
            {/* Add Search Icon */}
          </div>
          <div className="relative ml-auto flex flex-col items-center justify-center">
            <div className="rounded-full absolute bg-zorro-pink text-sm flex flex-col items-center justify-center h-4 w-4 -top-2 -right-2 text-white">
              {"1"}
            </div>
            <button
              className="text-white bg-transparent w-6 h-6 focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex ml-6 flex-row items-center">
            <button className="text-white bg-transparent flex flex-row items-center focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="text-sm">{"Sign In"}</p>
            </button>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="w-screen bg-white">
        <div className="w-240 mx-auto h-12 flex flex-row text-zorro-social-grey items-center">
          <p className="text-sm">SHOP BY CATEGORY:</p>
          <Link
            className="text-sm ml-6 font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
            href={""}
          >
            Appliances
          </Link>
          <Link
            className="text-sm ml-4 font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
            href={""}
          >
            Electronics
          </Link>
          <Link
            className="text-sm ml-4 font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
            href={""}
          >
            Mobile
          </Link>
          <Link
            className="text-sm ml-4 font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
            href={""}
          >
            Computer
          </Link>
        </div>
      </div>
      {/* Hero Section Gallery */}
      <div className="w-screen h-80 bg-zorro-yellow"></div>
      {/* Latest Products */}
      <div className="w-screen">
        <div className="h-80 bg-white w-240 rounded mx-auto relative -mt-14 p-2 flex flex-row items-center">
          <div className="flex flex-col w-1/4 h-full items-center justify-center z-0 border-r border-light-grey border-solid relative">
            <p className="text-zorro-social-grey text-center font-extralight text-4xl mb-6">
              Latest Products
            </p>
            <Link
              className="bg-zorro-green px-4 py-2 rounded text-white text-sm focus:outline-none focus-visible:outline-none hover:bg-zorro-pink focus:bg-zorro-pink"
              href={""}
            >
              View More
            </Link>
            <button
              type="button"
              className="rounded-full bg-white flex flex-row drop-shadow-md items-center -right-5 h-10 w-10 absolute text-zorro-social-grey justify-center focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col w-1/4 h-full items-center relative p-4 overflow-hidden justify-center">
            <Image
              className="mb-auto"
              src={chair}
              height={180}
              alt="chair image"
            />
            <div className="self-start">
              <p className="text-sm text-zorro-green font-extralight text-left mb-1">
                Furniture
              </p>
              <Link
                className="text-sm font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
                href={""}
              >
                Modern Armchair Rocker
              </Link>
              <div className="flex flex-row items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base text-zorro-social-grey">$123</p>
            </div>
          </div>
          <div className="flex drop-shadow-lg bg-white flex-col w-1/4 h-full items-center relative p-4 overflow-hidden justify-center">
            <div className="bookmark absolute right-5 top-5 bg-zorro-pink rounded-tr text-white text-xs font-light rounded-br pl-4 pr-2 py-1">
              {`25% OFF`}
            </div>
            <Image
              className="mb-auto"
              src={backpack}
              height={180}
              alt="chair image"
            />
            <div className="self-start">
              <p className="text-sm text-zorro-green font-extralight text-left mb-1">
                Accessories
              </p>
              <Link
                className="text-sm font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
                href={""}
              >
                Travel Backpack
              </Link>
              <div className="flex flex-row items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base text-zorro-social-grey">$69.90</p>
            </div>
          </div>
          <div className="flex flex-col w-1/4 h-full items-center relative p-4 overflow-hidden justify-center">
            <Image
              className="mb-auto"
              src={shoes}
              height={180}
              alt="chair image"
            />
            <div className="self-start">
              <p className="text-sm text-zorro-green font-extralight text-left mb-1">
                Clothing
              </p>
              <Link
                className="text-sm font-light focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
                href={""}
              >
                {`Men's Casual Shoes`}
              </Link>
              <div className="flex flex-row items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zorro-light-grey"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base text-zorro-social-grey">$219</p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-full bg-white flex flex-row drop-shadow-md items-center -right-5 h-10 w-10 absolute text-zorro-social-grey justify-center focus:outline-none focus-visible:outline-none hover:text-zorro-pink focus:text-zorro-pink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Deals of the Day */}
      <div className="w-screen mt-12">
        <div className="w-240 mx-auto h-80 grid grid-cols-2-1-1 gap-3">
          <div className="bg-zorro-pastel-blue flex flex-row rounded">
            <div className="flex flex-col justify-center pl-6">
              <div className="bookmark mb-4 bg-white rounded-tr text-zorro-grey w-fit text-xs font-regular rounded-br pl-4 pr-2 py-1">
                {`30% EXTRA OFF`}
              </div>
              <p className='text-zorro-grey text-4xl'>{`Spring Fling`}</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Offers For You */}
    </main>
  );
}
