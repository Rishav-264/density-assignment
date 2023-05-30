import { TopNav } from "@/components/TopNav/TopNav"
import { Banner } from "@/components/Banner/Banner"
import { Filler } from "@/components/Filler/Filler"
import { Carousel } from "@/components/Carousel/Carousel"
import { BannerTwo } from "@/components/BannerTwo/BannerTwo"

export default function HomePageLayout({children}) {
    return ( 
        <section>
            <TopNav />
            <Banner />
            <Filler />
            <Carousel />
            <BannerTwo />
            <Filler />
            {children}
        </section>
    )}