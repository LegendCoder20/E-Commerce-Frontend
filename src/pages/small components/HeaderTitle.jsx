import React from "react";
import "../../index.css";

const HeaderTitle = React.memo(() => {
  return (
    <header className="bg-white shadow">
      {/* <marquee behavior="" direction=""> */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl tracking-tight text-center text-gray">
          <span className="bona-nova-sc-regular">
            Your Shopping, Just a Click Away!
          </span>
        </h1>
      </div>
      {/* </marquee> */}
    </header>
  );
});

export default HeaderTitle;
