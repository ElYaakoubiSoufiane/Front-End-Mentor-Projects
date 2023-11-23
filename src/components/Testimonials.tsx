import { useState } from "react";
import img0 from "../assets/images/profile-1.jpg";
import img1 from "../assets/images/profile-2.jpg";
import img2 from "../assets/images/profile-3.jpg";
import img4 from "../assets/images/bg-quotes.png";

// `../../assets/images/`
import React from "react";
function Testimonials() {
  const [testData, setTestData] = useState([
    {
      id: 0,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-0.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[250px] ">
      <div className="container relative">
        <div className="absolute left-[10px] top-[-25px]">
          <img src={img4} alt="quote" />
        </div>
        <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 gap-[40px] relative z-00">
          <div className="bg-[#10192c] rounded-[5px] p-[20px] shadow-[8px_8px_0px_8px_#0c101c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[20px]">
              {testData[0].desc}
            </p>
            <div className="flex items-center gap-[05px]">
              <img
                src={img0}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">
                  {testData[0].name}
                </strong>
                <p className="text-white font-normal text-sm">
                  {testData[0].position}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#10192c] rounded-[5px] p-[20px] shadow-[8px_8px_0px_8px_#0c101c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[20px]">
              {testData[1].desc}
            </p>
            <div className="flex items-center gap-[05px]">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">
                  {testData[1].name}
                </strong>
                <p className="text-white font-normal text-sm">
                  {testData[1].position}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#10192c] rounded-[5px] p-[20px] shadow-[8px_8px_0px_8px_#0c101c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[20px]">
              {testData[2].desc}
            </p>
            <div className="flex items-center gap-[05px]">
              <img
                src={img2}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">
                  {testData[2].name}
                </strong>
                <p className="text-white font-normal text-sm">
                  {testData[2].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
