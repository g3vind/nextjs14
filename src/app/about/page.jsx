import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <div>
        <Image src="/about.png" alt="about image" height={500} width={500} />
      </div>
    </div>
  );
};

export default AboutPage;
