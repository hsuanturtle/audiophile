import React, { useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { DISPLAY_CART } from "../utils/actions";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "HEADPHONES", href: "/headphones", current: false },
  { name: "SPEAKERS", href: "/speaker", current: false },
  { name: "EARPHONES", href: "/earphones", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const displayCart = useSelector((state) => state.cart.display);
  const dispatch = useDispatch();
  const setDisplayCart = useCallback(
    (displayCart) =>
      dispatch({
        type: DISPLAY_CART,
        payload: { displayCart },
      }),
    [dispatch]
  );

  return (
    <Disclosure as="nav" className="bg-black text-white ">
      {({ open }) => (
        <>
          <div className="max-w-screen px-2 sm:px-6 w-screen lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-4xl h-auto w-auto">audiophile</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-grey hover:bg-gray-700 hover:text-light-beige",
                          "px-3 py-2.5 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  onClick={() => {
                    setDisplayCart(!displayCart);
                  }}
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View Cart</span>
                  <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
              {displayCart && <Cart />}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-grey "
                      : "text-gray-300 hover:bg-gray-700 hover:text-light-beige",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
