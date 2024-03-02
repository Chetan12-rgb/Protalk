
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobileview";

const NavBar = () => {
    return(
        <div>
            <MobileSidebar/>
            <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default NavBar;