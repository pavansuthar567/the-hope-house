import Link from "next/link";
import React from "react";

const Social = ({ socials = [] }) => {
  return (
    <div className="social">
      <ul>
        {socials.map(({ id, icon, href = "" }) => (
          <li key={id}>
            <Link href={href} target="_blank">
              <i className={icon}></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
