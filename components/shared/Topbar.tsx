import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
// import OrgSwitcherButton from "./OrgSwitcherButton";
import UserProfileButton from "./UserProfileButton";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-dark-1 dark:text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <UserProfileButton />
        {/* <OrgSwitcherButton /> */}
        <div className="block max-sm:hidden">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
