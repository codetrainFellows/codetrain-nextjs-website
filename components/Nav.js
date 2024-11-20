"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  PencilIcon,
  GlobeAmericasIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navListMenuItems = [
  {
    title: "Software Engineer",
    icon: ComputerDesktopIcon,
    href: "/courses/software-engineering",
  },
  {
    title: "UI/UX Design",
    icon: PencilIcon,
    href: "/courses/ui-ux-design",
  },
  {
    title: "Student Life at Codetrain",
    icon: GlobeAmericasIcon,
    href: "/courses/student-life-at-codetrain",
  },
  {
    title: "Codetrain Solara",
    icon: AcademicCapIcon,
    href: "/courses/codetrain-solara",
  },
];

function NavListMenu({ handleLinkClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Menu
      open={isMenuOpen}
      handler={handleMenuToggle}
      offset={{ mainAxis: 20 }}
      placement="bottom"
    >
      <MenuHandler>
        <Typography as="div" variant="paragraph">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 text-violet cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
          >
            Course
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="hidden max-w-md left-[750px] rounded-xl lg:block">
        <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
          {navListMenuItems.map(({ icon, title, href }, key) => (
            <li key={key}>
              <Link href={href} passHref onClick={handleLinkClick}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                  <div className="flex items-center justify-center rounded-lg p-2">
                    {React.createElement(icon, {
                      strokeWidth: 2,
                      className: "h-6 w-6",
                    })}
                  </div>
                  <Typography variant="h6" className="text-sm">
                    {title}
                  </Typography>
                </MenuItem>
              </Link>
            </li>
          ))}
        </ul>
      </MenuList>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpen}>
          <MenuList className="max-w-md rounded-xl lg:hidden">
            {navListMenuItems.map(({ icon, title, href }, key) => (
              <Link href={href} passHref key={key} onClick={handleLinkClick}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                  <div className="flex items-center justify-center rounded-lg p-2">
                    {React.createElement(icon, {
                      strokeWidth: 2,
                      className: "h-6 w-6",
                    })}
                  </div>
                  <Typography variant="h6" className="text-sm">
                    {title}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Collapse>
      </div>
    </Menu>
  );
}

function NavList({ handleLinkClick }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-violet">
      <Link href="/" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          Home
        </ListItem>
      </Link>
      <Link href="/about-us" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          About Us
        </ListItem>
      </Link>
      <NavListMenu handleLinkClick={handleLinkClick} />
      <Link href="/success-stories" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          Success Stories
        </ListItem>
      </Link>
      <Link href="/hire-a-graduate" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          Hire a grad
        </ListItem>
      </Link>
      <Link href="/partnerships" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          Partnerships
        </ListItem>
      </Link>
      <Link href="/donate" passHref onClick={handleLinkClick}>
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent focus:font-extrabold focus:bg-transparent active:bg-transparent"
          ripple={false}
        >
          Donate
        </ListItem>
      </Link>
    </List>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (event) => {
    event.stopPropagation(); // Stop event bubbling
    setOpenNav(false); // Close the menu on link click
  };

  const path = usePathname();

  return (
    <Navbar className="sticky top-0 z-50 mx-auto max-w-full px-4 py-2 rounded-none shadow-none">
      <div className="flex items-center justify-between">
        <Link href="/" passHref className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <Image
            src="/codetrain-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden gap-2 ml-auto lg:flex">
          <NavList handleLinkClick={handleLinkClick} />
        </div>

        <div className="ml-auto hidden lg:flex">
          <Link
            href="https://codetrainafrica.heiapply.com/application"
            target="_blank"
          >
            <Button
              variant="outlined"
              size="sm"
              className="rounded-none bg-violet text-white capitalize text-nowrap"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList handleLinkClick={handleLinkClick} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link
            href="https://codetrainafrica.heiapply.com/application"
            target="_blank"
          >
            <Button
              variant="outlined"
              size="sm"
              className="rounded-none bg-violet text-white capitalize"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Nav;
