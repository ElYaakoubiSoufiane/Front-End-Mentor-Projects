import { useState } from "react";

import img1 from "../../assets/images/icon-access-anywhere.svg";
import img2 from "../../assets/images/icon-security.svg";
import img3 from "../../assets/images/icon-collaboration.svg";
import img4 from "../../assets/images/icon-any-file.svg";
export default function Features() {
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[100] w-[865px] mx-auto max-w-full " >
          <div className="  container  text-white element-center flex-col text-center "  >
            <img
              src={img1}
              alt="icon-img"
              className="w-[80px] flex  h-[80px]  object-contain "
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Acces your files,anywhere
            </h4>
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia.
            </p>
          </div>

          <div className="  container text-white element-center flex-col text-center " >
            <img
              src={img2}
              alt="icon-img"
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Security you can trust
            </h4>
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia.
            </p>
          </div>

          <div className="  container text-white element-center flex-col text-center " >
            <img
              src={img3}
              alt="icon-img"
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Real-time collaboration
            </h4>
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia.
            </p>
          </div>

          <div className="  container text-white element-center flex-col text-center " >
            <img
              src={img4}
              alt="icon-img"
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Store any type of file
            </h4>
            <p className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
