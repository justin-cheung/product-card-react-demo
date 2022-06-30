import { FC } from "react";
import mobileImage from "../images/image-product-mobile.jpg";
import desktopImage from "../images/image-product-desktop.jpg";
import cartIcon from "../images/icon-cart.svg";

export const ProductCard: FC = () => {
  return (
    <div className="flex max-w-sm flex-col overflow-hidden rounded-lg bg-white text-sm font-medium xl:max-w-3xl xl:flex-row">
      <div className="xl:basis-1/2">
        <img
          className="w-full xl:hidden"
          src={mobileImage}
          alt="Gabrielle Essence Eau De Parfum"
        />
        <img
          className="hidden w-full xl:block"
          src={desktopImage}
          alt="Gabrielle Essence Eau De Parfum"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 xl:basis-1/2 xl:gap-6 xl:p-8">
        <p className="text-lg  uppercase tracking-[.25em] text-grayish-blue">
          Perfume
        </p>
        <h2 className="font-fraunces text-4xl font-bold text-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="text-base leading-7 text-grayish-blue xl:text-xl xl:leading-8">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mt-8 flex flex-row flex-wrap items-center gap-8 xl:mt-auto">
          <span className="font-fraunces text-5xl font-bold text-dark-cyan">
            $149.99
          </span>
          <span className="text-grayish-blue line-through">$169.99</span>
        </div>
        <button className="w-full rounded-lg bg-dark-cyan px-8 py-4 text-center text-white transition hover:bg-dark-cyan-active focus:bg-dark-cyan-active active:bg-dark-cyan-active">
          <img className="mr-2 inline" src={cartIcon} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
