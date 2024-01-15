import Link from "next/link";
import Home from "../../../public/svgs/home";

export default function Endpoint() {
  return (
    <div className="px-[20px] lg:px-0 flex max-w-[1280px] lg:h-[47px] h-[32px] mx-auto items-center gap-[6px]">
      <Link href={"/"}>
        <Home />
      </Link>
      <p className="text-[#aaaaaa]">/</p>
      <Link href={"/profil"} className="font-[500] text-[12px] text-[#333333]">
        Profil
      </Link>
      <p className="text-[#aaaaaa]">/</p>
      <h1 className="font-[500] text-[12px] text-[#aaaaaa]">ID 12345</h1>
    </div>
  );
}
