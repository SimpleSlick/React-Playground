import { useState } from "react";
import NavBar from "./components/NavBar";

export default function App(){
    const[theme, setTheme] = useState<"light" | "dark">("light");

    return(
        <div className="dark:bg-black relative">
            <NavBar theme={theme} setTheme={setTheme}/>
        </div>
    )
}