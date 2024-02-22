"use client";

import Facebook from "../../../public/svgs/facebook";
import Tiktok from "../../../public/svgs/tiktok";
import Youtube from "../../../public/svgs/youtube";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bell from "../../../public/svgs/bell";
import HeartOutline from "../../../public/svgs/heart-outline";
import {
  IoNotificationsOffOutline,
  IoHeartDislikeOutline,
} from "react-icons/io5";
import Search from "../../../public/svgs/search";
import Map from "../../../public/svgs/map";
import Burger from "../../../public/svgs/burger";
import RedBall from "../../../public/svgs/redBall";

export default function HeaderProfil() {
  const [isOpen, setIsOpen] = useState(false);
  const [notif, setNotif] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [profil, setProfil] = useState(false);

  function handleProfil() {
    setProfil(!profil);
  }

  function handleFavorite() {
    setFavorite(!favorite);
  }

  function handleNotif() {
    setNotif(!notif);
  }

  return (
    <header className="lg:flex bg-white w-screen">
      <div className="px-[20px] lg:px-0 flex lg:w-[1280px] mx-auto lg:h-[81px] h-[56px] items-center justify-between">
        <div className="">
          <Link href="/" className="grid items-center">
            <Image
              className="w-[144.2px] h-[28px]"
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
            />
          </Link>
        </div>

        <section className="hidden lg:contents">
          <form className="">
            <div className="flex gap-[2px]">
              <div className="form-group relative">
                <input
                  className="w-[189px] h-[44px] bg-[#F4F5F7] pl-12 rounded-l-[8px] text-sm"
                  type="text"
                  placeholder="Indonesia"
                />
                <button className="flex absolute left-4 top-0 mr-3 mt-3 text-gray-400">
                  <Map />
                </button>
              </div>
              <div className="form-group">
                <input
                  className="w-[389px] h-[44px] bg-[#F4F5F7] px-4 py-2 text-sm"
                  type="text"
                  placeholder="Cari yang kamu mau di sini..."
                />
              </div>
              <botton className="cursor-pointer w-[52px] bg-[#F4F5F7] flex justify-center items-center rounded-r-[8px]">
                <button>
                  <Search />
                </button>
              </botton>
            </div>
          </form>

          <div className="flex gap-8 items-center">
            <div className="relative flex">
              <button
                onClick={handleProfil}
                className="hover:scale-110 active:scale-100 bg-orange-200 w-[44px] h-[44px] cursor-pointer rounded-full">
                A
              </button>
              {profil && (
                <div className="absolute border gap-3 flex flex-col items-center shadow-lg end-0 top-12 bg-white z-20 w-max p-10 rounded">
                  <div className="hover:scale-110 active:scale-100 bg-orange-200 cursor-pointer rounded-full w-[30px] h-[30px] flex items-center justify-center">
                    A
                  </div>
                  <h1 className="cursor-pointer hover:scale-110 active:scale-100">
                    Dashboard
                  </h1>
                  <h1 className="cursor-pointer hover:scale-110 active:scale-100">
                    Log Out
                  </h1>
                </div>
              )}
            </div>
            <span className="h-[24px] border border-[#e5e5e5]"></span>
            <div className="relative flex">
              <button
                onClick={handleFavorite}
                className="hover:scale-110 active:scale-100 relative">
                <HeartOutline />
              </button>
              {favorite && (
                <div className="absolute flex flex-col items-center shadow-lg end-0 top-6 bg-white z-20 w-max p-10 rounded">
                  <IoHeartDislikeOutline size={50} className="text-gray-500" />
                  <h1>Tidak ada item favorit</h1>
                </div>
              )}
            </div>
            <div className="relative flex">
              <button
                onClick={handleNotif}
                className="hover:scale-110 active:scale-100 relative">
                <Bell />
                <RedBall className="absolute top-[-3px] end-[-3px]" />
              </button>
              {notif && (
                <div className="absolute flex flex-col items-center shadow-lg end-0 top-6 bg-white z-20 w-max p-10 rounded">
                  <IoNotificationsOffOutline
                    size={50}
                    className="text-gray-500"
                  />
                  <h1>Tidak ada notifikasi</h1>
                </div>
              )}
            </div>
          </div>
        </section>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative lg:hidden rounded-[8px]flex justify-center items-center">
          {!isOpen ? <Burger /> : <div>X</div>}
        </button>

        {/* menu header */}
        {isOpen && (
          <section className="h-screen start-0 top-0 fixed px-[20px] py-[12px] backdrop-blur-sm bg-[#333333]/80 z-10 w-screen">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute active:scale-75 end-[20px] top-[17px]">
              <Image src={"/icons/close.png"} width={18} height={18} />
            </button>
            <Link
              href="/"
              className="flex items-center w-[144.2px] h-[28px] text-white">
              <div className="">
                <Image
                  className=""
                  src="/images/logo-putih.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </Link>

            <div className="w-full h-[75px] mt-[20px] flex items-center px-[20px] gap-[13px] rounded-[8px] bg-[#333333]/80">
              <Image src={"/icons/profile-bulat.png"} width={50} height={50} />
              <div className="Quicksand flex flex-col justify-center">
                <h1 className="text-[14px] leading-[17.5px] text-[#AAAAAA]">
                  Halo,
                </h1>
                <h1 className="text-[16px] leading-[20px] text-[#E6BD40]">
                  Ayo login ke akunmu
                </h1>
              </div>
            </div>

            <div className="w-full border-b-2 border-[#333333] pb-[36px] flex flex-wrap gap-x-[27px] gap-y-[20px] justify-evenly mt-[30px]">
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
              <button className="flex flex-col text-[10px] justify-between items-center text-[#aaaaaa] w-[44px] h-[68px]">
                <div className="grid items-center justify-center bg-[#333333] rounded-full w-[44px] h-[44px]">
                  <Image src={"/icons/semua.png"} width={24} height={24} />
                </div>
                <p>Semua</p>
              </button>
            </div>

            <div className="grid mt-[25px] text-[12px] text-[#aaaaaa] h-auto grid-cols-2">
              <div className="grid gap-[15px] text-center">
                <button>Tentang kami</button>
                <button>Syarat & Ketentuan</button>
              </div>
              <div className="grid gap-[15px] text-center">
                <button>Tentang kami</button>
                <button>Syarat & Ketentuan</button>
              </div>
            </div>

            <div className="mt-[24px] justify-center flex gap-[11px]">
              <Image
                className="cursor-pointer"
                src={"/icons/playstore-grey.png"}
                width={137}
                height={48}
              />
              <Image
                className="cursor-pointer"
                src={"/icons/playstore-grey.png"}
                width={137}
                height={48}
              />
            </div>

            <div className="flex mt-[21px] justify-center gap-[18px]">
              <Link href={"/"} className="flex justify-center items-center">
                <Facebook className="" />
              </Link>
              <Link href={"/"} className="flex  justify-center items-center">
                <Image src={"/icons/Instagram.png"} width={20} height={20} />
              </Link>
              <Link href={"/"} className=" flex  justify-center items-center">
                <Youtube />
              </Link>
              <Link href={"/"} className=" flex  justify-center items-center">
                <Tiktok />
              </Link>
            </div>

            {/* footer */}
            <footer className="w-full pt-[10px] border-[#333333] border-t-2 mt-[22px]">
              <h1 className="flex gap-[5px] justify-center w-full font-[600] text-[12px] text-[#aaaaaa]">
                Copyright © 2023{""}
                <Link
                  href={"/"}
                  className="font-[500] text-[12px] text-[#d7a901]">
                  autodeal
                </Link>
              </h1>
            </footer>
          </section>
        )}
      </div>
    </header>
  );
}
