import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAddressBook,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="">
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-red-300">
          <ul className="space-y-8 font-medium">
            <li className="flex-1 px-3 w-full whitespace-nowrap block sm:hidden">
              <button className="w-full" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
              </button>
            </li>
            <li>
              <span
                className="flex-1 whitespace-nowrap"
                onClick={toggleSidebar}
              >
                <Link to="/">
                  <span className="text-xl">
                    <FontAwesomeIcon icon={faAddressBook} /> Contacts
                  </span>
                </Link>
              </span>
            </li>
            <li>
              <span
                className="flex-1 whitespace-nowrap"
                onClick={toggleSidebar}
              >
                <Link to="/map">
                  <span className="text-xl">
                    <FontAwesomeIcon icon={faChartLine} /> Charts and Maps
                  </span>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </aside>
      <main className="h-fit px-3  sm:ml-64">
        <div className="w-full h-10 block sm:hidden">
          <button onClick={toggleSidebar} className="h-full w-full text-left">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
