import React from "react";

function NavLinks({ links }) {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {links.map((item) => (
        <li key={item}>
          <a
            href="#"
            className={
              item === "Home"
                ? `block py-2 pr-4 pl-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white aria-current="page" `
                : `block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`
            }
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
