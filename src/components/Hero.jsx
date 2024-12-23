/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-16">
      <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/MH.JPG"
                alt="Mazahir Haider avatar"
                width={50}
                height={50}
                className="img-cover"
              ></img>
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-2 mb-6">
          Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">

            <ButtonPrimary
            label="Download CV"
            icon="download"
            href="/files/MazahirHaider_CV.pdf"
            target= "_blank"

            />

            <ButtonOutline 
            label="Scroll down"
            href="#about"
            icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto  overflow-hidden">
                <img src="/images/mazahir.png" alt="Mazahir Haider" className="w-full"
                width={556} height={700}/>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
