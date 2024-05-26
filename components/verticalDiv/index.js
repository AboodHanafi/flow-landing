import React from "react";

function Feature({ icon, feature, featureInfo }) {
  return (
    <div className="relative shadow m-auto grid md:grid-cols-7 grid-cols-1 items-center gap-4 ">
      <span className="px-6 py-8 rounded-full ">{icon}</span>
      <p className="md:col-span-2 px-6 py-2 md:py-8 md:border-l-4 text-green-500 font-bold text-xl md:border-r-4  md:border-l-green-500 md:border-r-green-500">
        {feature}
      </p>
      <p className="md:col-span-4 px-6 py-2 md:py-8 text-green-500 text-xl">
        {featureInfo}
      </p>
    </div>
  );
}

export default Feature;
