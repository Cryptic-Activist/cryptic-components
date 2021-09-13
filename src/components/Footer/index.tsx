import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div>
      <Link href="/map" as="/map" passHref>
        <a>Test</a>
      </Link>
    </div>
  );
};

export default Footer;
