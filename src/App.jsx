import "./App.css";

function App() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm px-10 bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="">
                  Changelog
                </a>
              </li>
              <li>
                <a href="" className="">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="">
                  Download
                </a>
              </li>
              <li>
                <a href="" className="">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="btn btn-outline btn-primary">
                  <span>+</span>New Ticket
                </a>
              </li>
            </ul>
          </div>
          <a className="flex items-center gap-1" href="#">
            <span className="text-lg font-bold">CS — Ticket System</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <a href="" className="">
                Home
              </a>
            </li>
            <li>
              <a href="" className="">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="">
                Changelog
              </a>
            </li>
            <li>
              <a href="" className="">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="">
                Download
              </a>
            </li>
            <li>
              <a href="" className="">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="btn btn-outline btn-primary">
                <span>+</span>New Ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
