import Container from "./Container";
import { RiMenuFoldFill } from "react-icons/ri";
import { SlCallIn } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "./Logo";

const Navber = () => {
  const navMenu = (
    <>
      <li>Home</li>
      <li>fdfdf</li>
      <li>fdfdf</li>
      <li>fdfdf</li>
      <li>fdfdf</li>
    </>
  );

  return (
    <div>
      <header className=" fixed bg-white  py-2 w-full z-10 ">
        <Container>
          <div className=" ">
            {/* lg+ */}
            <nav className="flex items-center pb-2  justify-between h-20 ">
              <div className="flex items-center justify-center gap-10">
                <div>
                  {" "}
                  <Logo></Logo>
                </div>
                <div>
                  {/* search Fuction */}

                  <form className="flex items-center mx-auto">
                    <div className="relative w-[380px]">
                      <input
                        type="text"
                        id="simple-search"
                        className="border border-primary text-secondary text-sm rounded-md rounded-r-none focus:ring-primary focus:border-primary block w-full ps-5 p-3 "
                        placeholder="Search Product..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-3.5 text-sm font-medium text-white bg-primary rounded-md rounded-l-none border border-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary "
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="tel:0100000009">
                  <button
                    className="flex items-center gap-2 border p-3 rounded-md tooltip tooltip-bottom"
                    data-tip="Call Us"
                  >
                    <SlCallIn className="text-amber-500 font-bold h " />{" "}
                    +88017-0000000
                  </button>
                </a>
              </div>

              <div className="border-0 border-r-2 py-8 px-2 border-primary"></div>

              <div className="pl-8 dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <FiShoppingCart className="text-[28px] " />
                    <span className="badge badge-warning     badge-md indicator-item ">
                      5
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                title=""
                className="items-center justify-center hidden px-4 py-3 ml-6 text-base font-semibold text-secondary hover:text-primary bg-primary  border border-transparent rounded-md lg:inline-flex hover:bg-secondary  focus:bg-primary hover:scale-105   transition-transform duration-300"
                role="button"
              >
                {" "}
                LOGIN/REGISTER{" "}
              </a>

              {/* Drawer */}

              <div className="drawer-end lg:hidden">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content ">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="text-2xl bg-red-400">
                    <RiMenuFoldFill />{" "}
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className=" pt-20 px-5 md:w-3/5 w-3/4 md:pl-10 list-none space-y-3    min-h-full bg-gray-200  text-base-content">
                    {/* Sidebar content here */}
                    {navMenu}
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded text-sm  px-6 py-2.5 text-center me-2 mb-2"
                    >
                      Log In
                    </button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </Container>
        <nav className="flex border-0 border-y items-center  justify-between h-8 py-5">
          <Container>
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
            </div>
          </Container>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
