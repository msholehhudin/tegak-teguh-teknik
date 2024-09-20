import { NAV_LINK } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="border-b w-full">
      <div className="py-5 max-container flexBetween padding-container">
      <Link href="/">
          <Image src={"/logo.svg"} alt="logo" width={90} height={90} />
      </Link>
      

    <div className="flex gap-12 items-center">
      <ul className="gap-12 md:flex h-full hidden">
        {NAV_LINK.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 hover:font-bold transition-all">
            {link.label}
          </Link>
        ))}
      </ul>

          <div className="md:flexCenter hidden">
            {/* <Button */}
            <button className="border rounded-full p-4 bg-black text-white">
              Contact Us
            </button>
          </div>
      </div>
      <Image src={'/menu.svg'} alt="hamburger-menu" width={30} height={30} className="block md:hidden cursor-pointer hover:rotate-180 transition-all"/>

      </div>
    </nav>
  )
}

export default Navbar