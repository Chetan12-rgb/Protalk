// import { Button } from "@/components/ui/button";
// import Link from "next/link";

import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-nav";
import { LandingContent } from "@/components/lending-content";

const LandingPage = ()=>{
    return(
        <div className="h-full ">
           <LandingNavbar/>
           <LandingHero/>
           <LandingContent />
        </div>
    )
}

export default LandingPage;