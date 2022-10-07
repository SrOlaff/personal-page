import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import TabPanel from "../../components/TabPanel";
import SocialMediaButton from "../../components/SocialMediaButton";

function Me() {
  const animationControls = useAnimation();

  async function logoAnimation() {
    await animationControls.start("show");
    animationControls.start("bounce");
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <div className="container mx-auto py-10 px-5 space-y-10" id="me">
      <div className="h-[40vh] text-text">
        <h1 className="text-4xl font-bold w-fit border-b border-accent mb-5">
          me
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita
          consequatur nisi vero, autem illum perspiciatis doloremque hic
          officiis molestiae facere vitae maxime aperiam voluptas ratione eos
          sit aliquid commodi.
        </p>
      </div>

      <div className="h-[70vh] text-text flex flex-col">
        <h1 className="text-4xl font-bold w-fit border-b border-accent mb-5">
          experience
        </h1>

        <TabPanel />
        <div className="flex">
          <SocialMediaButton iconName="GITHUB" />
          <SocialMediaButton iconName="LINKEDIN" />
        </div>
      </div>
    </div>
  );
}

export default Me;
