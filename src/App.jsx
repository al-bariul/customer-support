import { Suspense } from "react";
import "./App.css";
import CustomTicket from "./CustomTicket";

const ticketPromise = fetch("../public/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <div className="navbar bg-base-100 shadow-sm px-10 bg-white text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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

      <main className="mt-[80px]">
        <section
          id="main-section"
          className="flex justify-between px-10 gap-x-6"
        >
          <div
            className="in-progress  w-[700px] h-[250px] flex flex-col items-center justify-center 
          bg-gradient-to-r from-[rgba(127,17,224,1)] to-[rgba(159,98,242,1)] rounded-lg"
          >
            <p className="text-xl">In-Progress</p>
            <p className="text-6xl font-bold">0</p>
          </div>
          <div
            className="resolved  w-[700px] h-[250px] flex flex-col items-center justify-center 
          bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)] rounded-lg"
          >
            <p className="text-xl">Resolved</p>
            <p className="text-6xl font-bold">0</p>
          </div>
        </section>
      </main>

      {/*  */}
      <section className="bg-[rgba(233, 233, 233, 1)] text-black">
        <div className="container flex justify-between px-10 mt-[80px]">
          <div className="left border-4 border-red-500">
            <h1 className="text-3xl font-bold mb-4 text-[#34485ae3]">
              Custome Ticket
            </h1>
            <Suspense fallback={<h2>Ticket Data Comming...</h2>}>
              <CustomTicket ticketPromise={ticketPromise}></CustomTicket>
            </Suspense>
          </div>
          <div className="right border-4 border-yellow-500 w-[350px]">
            <div className="top">
              <p className="text-[24px] font-bold">Task Status</p>
              <p>Select a ticket to add to Task Status</p>
            </div>
            <div className="bottom mt-10 ">
              <p className="text-[24px] font-bold">Resolved Task</p>
              <p>No resolved tasks yet</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-300 pt-16">
        <div className="bb mx-auto px-10 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-white text-lg font-semibold mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className=" ">About Us</li>
              <li className=" ">Our Mission</li>
              <li className=" ">Contact Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className=" ">Products & Services</li>
              <li className=" ">Customer Stories</li>
              <li className=" ">Download Apps</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className=" ">Privacy Policy</li>
              <li className=" ">Terms & Conditions</li>
              <li className=" ">Join Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3  ">
                <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System
              </li>
              <li className="flex items-center gap-3  ">
                <i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System
              </li>
              <li className="flex items-center gap-3  ">
                <i class="fa-brands fa-facebook-f"></i> @CS — Ticket System
              </li>
              <li className="flex items-center gap-3  ">
                <i class="fa-regular fa-message"></i> support@cst.com
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-white py-6 ">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
