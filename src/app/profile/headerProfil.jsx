"use client";
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
          <form>
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
        {isOpen && (
          <section className="flex absolute h-screen start-0 bg-[#333333] top-0 p-7 z-10 w-[90%]">
            <form>
              <div className="flex-wrap flex gap-1">
                <div className="form-group relative">
                  <input
                    className="w-[189px] h-[44px] bg-[#F4F5F7] pl-12 md:rounded-l-[8px] text-sm"
                    type="text"
                    placeholder="Indonesia"
                  />
                  <button className="flex absolute left-4 top-0 mr-3 mt-3 text-gray-400">
                    <Map />
                  </button>
                </div>
                <div className="form-group">
                  <input
                    className="w-full h-[44px] bg-[#F4F5F7] px-4 py-2 text-sm"
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
          </section>
        )}
      </div>
    </header>
  );
}
