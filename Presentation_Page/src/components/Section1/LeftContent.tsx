import Arrow from "./Arrow";
import HeroText from "./HeroText";

export default function LeftContent(){
    return(
        <div className="h-full flex flex-col justify-between w-1/3 ">
            <HeroText />
            <div></div>
            <Arrow />
        </div>
    )
}