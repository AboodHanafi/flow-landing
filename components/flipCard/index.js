import { AiOutlineBank } from "react-icons/ai";

const FlipCard = ({ Icon, title, subTitle, text }) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {Icon}
            {/* <AiOutlineBank color="#018578" size={90} /> */}
            <h2 className="text-xl font-bold text-green-500 absolute bottom-4">
              {/* Access to Talent */}
              {title}
            </h2>
          </div>
          <div className="flip-card-back px-1 ">
            {/* <h2 className="text-sm font-bold text-white-500"> */}
            {/* Global Market Reach and Extensive Network */}
            {/* {subTitle} */}
            {/* </h2> */}
            <p className="text-white-500">
              {/* Leveraging established connections, we offer extensive regional
              and global networking opportunities vital for fostering
              partnerships and facilitating growth. */}
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
