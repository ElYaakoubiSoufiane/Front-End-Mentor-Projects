import img1 from "../../assets/images/landing-img.png";
import img2 from "../../assets/images/bg-curvy-desktop.svg";

export default function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="containe ">
        <div className="element-center flex-col pt-[200px]">
          <div className=" w-[750px] max-w-full ">
            <img src={img1} alt="landing-img" className="w-full h-fit" />
          </div>
          <div className="text-white text-center ">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywere.
            </h1>

            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              lorem ipsum dolor sit amet cosectetur adipisicing elit. Molestias
              isite dosesrunt totam itaque nisi veniam voluptas vel , eos
              aliquam nulla impedit commodi
            </p>
          </div>
          <a
            href="/"
            className="btn h-[60px] w-[280px] rounded-[30px] element-center text-white font-medium "
          > Get Started</a>
        </div>
      </div>
      <div>
      <img src={img2} alt="" className="h-full w-full"/></div>
    </section>
  ); 
}
