import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Header1() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className=" flex h-16 items-center justify-between px-7 md:px-12">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="/"
          >
            <Image
              width={60}
              height={100}
              src="/logo.svg"
              alt="DnG Bakers and Kitchen logo"
            />
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="not-sr-only text-base xs:text-xl">
              DnG Bakers & Kitchen
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-xl font-medium md:flex">
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="/menu">
              Menu
            </Link>
            <Link className="hover:underline" href="/contact">
              Contact Us
            </Link>
            <Link className="hover:underline" href="/about">
              About Us
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="transition-all duration-300 ease-in-out bg-[#fffbc9]"
              side="right"
            >
              <div className="grid gap-4 p-6">
                <SheetClose asChild>
                  <Link className="font-medium hover:underline" href="/">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link className="font-medium hover:underline" href="/menu">
                    Menu
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link className="font-medium hover:underline" href="/contact">
                    Contact Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link className="font-medium hover:underline" href="/about">
                    About Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="pt-16" />
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
