import Container from "./Container";
import { SlCallIn } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Logo from "./Logo";

const Navber = () => {
  return (
    <div>
      <header className=" fixed bg-white  py-2 w-full z-10 ">
        <Container>
          <div className=" ">
            {/* lg+ */}
            <nav className="flex items-center pb-2 md:gap-6  lg:gap-0 justify-between h-20 ">
              {/* Drawer */}

              <div className="text-start md:hidden ">
                <div className="drawer mr-6 z-10 md:hidden">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content ">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="text-3xl bg-red-400"
                    >
                      <HiOutlineMenuAlt1 />{" "}
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>

                    <ul className="relative pt-12 px-2  w-3/4 md:pl-10 list-none space-y-3  text-start   min-h-full bg-gray-200  text-base-content">
                      <button className="absolute left-[268px] top-4  btn btn-sm btn-circle btn-outline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      {/* Sidebar content here */}

                      <ul className="menu -menu-vertical px-1">
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                              <li>
                                <a>Submenu 1</a>
                              </li>
                              <li>
                                <a>Submenu 2</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <a>Item 3</a>
                        </li>
                      </ul>

                      <button className="px-3 py-3 ml-5 text-base font-semibold bg-primary text-white rounded-md hover:scale-105 transition-transform  relative overflow-hidden group z-10 hover:text-white duration-1000">
                        <span className="absolute bg-amber-500 w-36 h-36 rounded-full group-hover:scale-110 scale-0 -z-10  group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                        <span className="absolute bg-amber-600 w-36 h-36  rounded-full group-hover:scale-110  scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                        LOGIN/REGISTER
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:gap-5 lg:gap-10">
                <div>
                  {" "}
                  <Logo></Logo>
                </div>
                <div>
                  {/* search Fuction */}

                  <form className="md:flex items-center mx-auto hidden">
                    <div className="relative md:w-40 lg:w-[380px]">
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

              {/* for lg */}
              <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="tel:0100000009">
                  <button
                    className="flex items-center gap-2 border p-3 rounded-md tooltip tooltip-bottom"
                    data-tip="Call Us"
                  >
                    <SlCallIn className="text-amber-500" /> +88017-0000000
                  </button>
                </a>
              </div>
              {/* for sm */}
              <div className="lg:hidden flex items-center ml-auto space-x-10">
                <a href="tel:0100000009">
                  <button
                    className="flex items-center gap-2 border p-3 rounded-md tooltip tooltip-bottom"
                    data-tip="Call Us"
                  >
                    <SlCallIn className="text-amber-500 text-2xl " />{" "}
                  </button>
                </a>
              </div>

              <div className="border-0 border-r-2 py-8 px-4 md:px-0 lg:px-2 border-primary"></div>

              <div className="pl-4 md:pl-0 md:-ml-4 lg:pl-8 dropdown dropdown-end">
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

              <button className="md:inline-flex items-center justify-center hidden px-3 py-3 md:ml-1 lg:ml-6 text-base font-semibold bg-primary text-white rounded-md hover:scale-105 transition-transform  relative overflow-hidden group z-10 hover:text-white duration-1000">
                <span className="absolute bg-amber-500 w-36 h-36 rounded-full group-hover:scale-110 scale-0 -z-10  group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-amber-600 w-36 h-36  rounded-full group-hover:scale-110  scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                LOGIN/REGISTER
              </button>
            </nav>
          </div>
        </Container>
        <nav className="flex border-0 border-y items-center  justify-between h-8 py-5">
          <Container>
            <div className="hidden md:flex md:items-center md:ml-auto md:space-x-10">
              <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <details>
                      <summary>Parent</summary>
                      <ul className="p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* search Fuction */}

            <form className="flex items-center mx-auto md:hidden">
              <div className="relative w-[300px] ">
                <input
                  type="text"
                  id="simple-search"
                  className="border border-primary text-secondary text-sm rounded-md rounded-r-none focus:ring-primary focus:border-primary block w-full ps-5 p-1 "
                  placeholder="Search Product..."
                  required
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-1.5 text-sm font-medium text-white bg-primary rounded-md rounded-l-none border border-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary "
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
          </Container>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
