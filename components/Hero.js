import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="flex justify-center items-center text-lg gap-4">
        <h1 className="text-6xl whitespace-nowrap hidden md:block">
          F<span className="text-green-500">A |</span>
        </h1>
        <p className="font-bold my-6 text-gray-600">
          Join Flow Angels to become one of the pioneering investors in
          Palestinian startups and to be an integral part of the Palestinian
          entrepreneurial ecosystem on a global scale.
        </p>
      </div>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 "
          variants={scrollAnimation}
        >
          <div className="flex w-full">
            <motion.div className="w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero4.JPG"
                alt="Flow Accelerator"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
                style={{
                  borderRadius: 20,
                }}
              />
            </motion.div>
          </div>
          <div className="flex w-full">
            <motion.div className="w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero5.JPG"
                alt="Flow Accelerator"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
                style={{
                  borderRadius: 20,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="flex justify-center items-center text-lg">
        <p className="font-bold my-6 text-gray-600">
          Join a community where exclusivity meets opportunity and embark on an
          investment journey guided by excellence and distinction. Connect with
          a select array of high-potential startups, to ensure unparalleled
          investment potential.
        </p>
      </div>
    </div>
  );
};

export default Hero;
