import assets from "../assets/assets"

interface NavBarProps{
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const NavBar = ({theme, setTheme}: NavBarProps) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img src={theme === "dark" ? assets.logo_dark: assets.logo} className="w-32 sm:w-40" alt=''/>
    </div>
  )
}

export default NavBar