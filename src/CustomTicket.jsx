import React, { use } from "react";

const CustomTicket = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ticketData.map((data) => {
        const status = data.status.toLowerCase().trim();
        const isOpen = status === "open";

        const priority = data.priority.toLowerCase().trim();
        const high = priority === "high";
        // console.log(priority === "high");

        return (
          <div
            key={data.id}
            className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm w-[515px] h-[150px]"
          >
            <div className="head flex justify-between items-center mb-3">
              <p className="text-[#001931] text-xl font-bold">{data.title}</p>
              <p
                className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium
                  ${
                    isOpen
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }
                `}
              >
                <span
                  className={`w-3 h-3 rounded-full
                    ${isOpen ? "bg-emerald-600" : "bg-amber-500"}
                  `}
                ></span>

                {isOpen ? "Open" : "In-Progress"}
              </p>
            </div>

            <div className="body mb-4">
              <p className="text-gray-600 text-[16px]">{data.description}</p>
            </div>

            <div className="foot flex justify-between items-center text-sm text-gray-500">
              <p>#{data.id}</p>
              <p
                className={`${
                  high
                    ? "text-red-500 font-medium uppercase"
                    : "text-amber-500 font-medium uppercase"
                }`}
              >
                {data.priority} priority
              </p>
              <p>{data.customer}</p>
              <p>
                <i class="fa-regular fa-calendar"></i> {data.createdAt}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomTicket;
