import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div id="thankyou">
      <div className="max-w-7xl mx-auto px-8 items-center justify-center">
        <h1 className="font-ABC">Thank You</h1>
        <p>
          Go to the
          <Link href="/">
            <a>Main</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
