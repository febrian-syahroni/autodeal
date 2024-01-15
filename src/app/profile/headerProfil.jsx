"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bell from "../../../public/svgs/bell";
import HeartOutline from "../../../public/svgs/heart-outline";
import Search from "../../../public/svgs/search";
import Map from "../../../public/svgs/map";
import Burger from "../../../public/svgs/burger";
import RedBall from "../../../public/svgs/redBall";

export default function HeaderProfil() {
  const [isOpen, setIsOpen] = useState(false);
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
            <button className="bg-orange-200 w-[44px] h-[44px] cursor-pointer rounded-full">
              A
            </button>
            <span className="h-[24px] border border-[#e5e5e5]"></span>
            <button>
              <HeartOutline />
            </button>
            <button className="relative">
              <Bell />
              <RedBall className="absolute top-[-3px] end-[-3px]" />
            </button>
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
