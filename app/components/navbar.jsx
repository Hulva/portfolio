// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/portfolio"
            className=" text-[#16f2b3] text-3xl font-bold">
            华滤(Luva Hua)
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-md opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">关于我</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience">
              <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">经历</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills">
              <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">技能</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education">
              <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">教育</div></a>
          </li>
          {/* <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#blogs"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></a>
          </li> */}
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects">
              <div className="text-md text-white transition-colors duration-300 hover:text-pink-600">项目</div></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;