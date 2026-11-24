import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/contactUs";
import {Toaster} from "react-hot-toast";

export default function App(){
    const[theme, setTheme] = useState<"dark" | "light">(() => {
        const saveTheme = localStorage.getItem("theme");

        return saveTheme === "dark" ? "dark" : "light";
    })

    return(
        <div className="dark:bg-black relative">
            <Toaster />
            <NavBar theme={theme} setTheme={setTheme}/>

            <Hero />
            <Trust />

            <Services />
            <OurWork />
            <Teams />
            <ContactUs />
        </div>
    )
}