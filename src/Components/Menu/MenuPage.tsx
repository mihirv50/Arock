import MenuLeft from "./MenuLeft"
import MenuRight from "./MenuRight"


const MenuPage = () => {
  return (
    <div className="fixed h-screen w-full bg-red-500 top-0 z-60 flex">
        <MenuLeft/>
        <MenuRight/>
    </div>
  )
}

export default MenuPage