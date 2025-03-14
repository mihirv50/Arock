import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  return (
    <>
      <div className="flex w-fullitems-center justify-between px-7 py-6">
        <Logo />
        <Menu />
      </div>
    </>
  );
};

export default Nav;
