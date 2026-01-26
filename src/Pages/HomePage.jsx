import { useRef } from "react";
import Navbar from "../components/Navbar/Navbar"
import MainBanner from "../components/MainBanner";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import Explore from "../components/Explore";
import SocialMedia from "../components/SocialMedia";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";


const HomePage = () => {
    const pageRefs = useRef({});
    return (
        <div className="app">
                <Navbar pageRefs={pageRefs} />
                <MainBanner pageRefs={pageRefs} />
                <Men pageRefs={pageRefs} />
                <Women pageRefs={pageRefs} />
                <Kids pageRefs={pageRefs} />
                <Explore pageRefs={pageRefs} />
                <SocialMedia />
                <Subscribe />
                <Footer/>
        </div>
    );
};

export default HomePage;
