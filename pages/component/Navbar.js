export default function Navbar() {
  const array = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Sports",
      href: "/sports",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];
  return (
    <>
      <nav class="bg-white border-y-4  border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">
          <div class="hidden w-full  md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col text-2xl  font-[400]  p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {array.map((e) => {
                return (
                  <>
                    <li>
                      <a
                        href={e.href}
                        class="block h-full border-y-2 rounded  border-gray-200  text-white hover:bg-[#f0f0f0] hover:border-2 hover:border-red-500 bg-blue-700  md:bg-transparent md:text-black hover:text-blue-700 md:p-3 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                        aria-current="page"
                      >
                        {e.name}
                      </a>
                    </li>
                  </>
                );
              })}

              <li>
                <select
                  id="singleSelection"
                  className="border-0 text-start p-2 rounded w-50 border-y-2  border-gray-200  text-white hover:bg-[#f0f0f0] hover:border-2 hover:border-red-500 bg-blue-700  md:bg-transparent md:text-black hover:text-blue-700 md:p-3 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  data-te-select-init
                >
                  <option value="1">Categories</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
