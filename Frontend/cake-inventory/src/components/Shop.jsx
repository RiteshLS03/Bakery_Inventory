import Couple from "../../public/Couple.svg";
import Circle from "../../public/Circle.svg";
import Order from "../../public/Order.svg";
import cakesData from "../assets/cake";
import Cards from "./Cards";

const Shop = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between font-nunitoSans px-24 py-8">
        <div className="flex flex-wrap justify-center font-bold">
          <h1 className="text-8xl px-20" style={{ color: "#223645" }}>
            A Perfect <span className="text-theme-color">Date Night</span>,
            Delivered to Your{" "}
            <span className="text-theme-color">Doorstep!</span>
          </h1>
          <div className="my-4 leading-6">
            <p className="text-3xl mb-4" style={{ color: "#223645" }}>
              Order food from favourite restaurants near you.
            </p>
            <div className="flex absolute items-center py-6">
              <button
                className="rounded-3xl pl-4 pr-16 justify-between bg-theme-color text-[#fff] text-2xl pr-8"
                type="button"
              >
                Order Now
              </button>
              <img
                src={Circle}
                alt="cirlce"
                width={"80px"}
                className="flex absolute right-[-20px]"
              />
            </div>
          </div>
          {/* <div className="flex mr-auto ml-3 mt-8 border justify-between ">
          <img src={Reviews} alt="reviews" />
          <div className="f">
            <p>Customer Reviews</p>
            <p> ⭐ 4.8 </p>
          </div>
        </div> */}
        </div>
        <div>
          <img src={Couple} alt="couple" width={"1800px"} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-12 px-44">
        <div>
          <p
            className="text-6xl font-bold font-nunitoSans"
            style={{ color: "#223645" }}
          >
            Inspiration to
            <span className="text-theme-color"> your first order</span>
          </p>
        </div>
        <div className="m-4 flex flex-wrap rounded">
          {cakesData.map((item, index) => {
            return <Cards item={item} key={index} />;
          })}
        </div>
        <div className="flex justify-between items-center font-nunitoSans font-bold">
          <div className="w-1/2">
            <img src={Order} alt="delivery-by" />
          </div>
          <div className="w-1/2">
            <div className="flex-wrap">
              <p className="text-6xl" style={{ color: "#223645" }}>
                Stay At Home. We Will Provide{" "}
                <span color="text-theme-color" className="text-theme-color">
                  Good Food
                </span>
              </p>
              <p style={{ color: "#223645" }}>
                we provide tasty food and super fast delivery at your home. Let
                use our service right Now and get 50% Discount
              </p>
              <div className="flex absolute items-center py-6">
                <button
                  className="rounded-3xl pl-4 pr-16  bg-theme-color text-[#fff] text-2xl pr-8"
                  type="button"
                >
                  Order Now
                </button>
                <img
                  src={Circle}
                  alt="cirlce"
                  width={"80px"}
                  className="flex absolute right-[-20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
