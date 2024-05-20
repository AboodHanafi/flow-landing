import React from "react";

function Feature({ icon, feature, featureInfo }) {
  return (
    <div className="w-[80%] bg-cyan-700 m-auto grid grid-cols-7 divide-x-2 gap-4 text-xl">
      <span className="px-6 py-8 border rounded-full">{icon}</span>

      <p className="col-span-2 px-6 py-8">{feature}</p>
      <p className="col-span-4 px-6 py-8">{featureInfo}</p>
    </div>
  );
}

export default Feature;
