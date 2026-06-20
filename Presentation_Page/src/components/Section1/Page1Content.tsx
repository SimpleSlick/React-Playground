import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Page1Content(){
    return(
        <div className="py-10 flex gap-10 items-center p-17 h-[90vh] ">
            <LeftContent />
            <RightContent />
        </div>
    )
}