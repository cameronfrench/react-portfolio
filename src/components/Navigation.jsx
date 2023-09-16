import { Link } from "react-router-dom";

import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
 
export default function NavbarDefault() {
  const [ setOpenNav ] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  <Typography
  as="li"
  variant="small"
  color="blue-gray"
  className="p-1 font-normal"
>
  <Link to="/about" className="flex items-center">
    About
  </Link>
</Typography>
<Typography
  as="li"
  variant="small"
  color="blue-gray"
  className="p-1 font-normal"
>
  <Link to="/portfolio" className="flex items-center">
    Portfolio
  </Link>
</Typography>
<Typography
  as="li"
  variant="small"
  color="blue-gray"
  className="p-1 font-normal"
>
  <Link to="/resume" className="flex items-center">
    Resume
  </Link>
</Typography>
<Typography
  as="li"
  variant="small"
  color="blue-gray"
  className="p-1 font-normal"
>
  <Link to="/contact" className="flex items-center">
    Contact
  </Link>
</Typography>

    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4 mt-6">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold uppercase text-xl "
        >
          Cameron French
        </Typography>
        <div className="hidden lg:block">{navList}</div>
      </div>
    </Navbar>
  );
}