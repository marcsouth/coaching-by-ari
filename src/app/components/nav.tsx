import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Services",
    "Testimonials",
    "Contact",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="dark z-40"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

        <NavbarBrand >
          <Link href='/' className="text-white">
          <p className="font-bold ">COACHING BY  ARI</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand >
      <Link href='/' className="text-white">
          <p className="font-bold max-sm:hidden ">COACHING BY ARI</p>
          </Link>
        </NavbarBrand>



        <NavbarContent className="hidden sm:flex gap-12 " justify="center">
        <NavbarItem >
          <Link className="text-white" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#services" className="text-white" >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#faq">
          F.A.Q
          </Link>
        </NavbarItem>
      </NavbarContent>
      

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#contact" variant="flat" className="text-white">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent dark">
        {/* Hard code each link */}
        <NavbarMenuItem>
          <Link
            className="w-full text-white dark"
            size="lg"
            href="#about"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white dark"
            size="lg"
            href="#services"
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white dark"
            size="lg"
            href="#faq"
          >
            F.A.Q
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white dark"
            size="lg"
            href="#faq"
          >
            Contact
          </Link>
        </NavbarMenuItem>

        {/* Add custom links */}
        <NavbarMenuItem>
          <Link
          showAnchorIcon
            className="w-full dark"
            size="lg"
            href='https://www.tiktok.com/@amwbrah'
            color='secondary'
            isExternal
          >
            Tik Tok
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
          showAnchorIcon
            className="w-full dark"
            size="lg"
            color='secondary'
            href='https://www.instagram.com/aesthetics.by.ari/'
            isExternal
          >
            Instagram
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
          showAnchorIcon
            className="w-full dark"
            size="lg"
            color='secondary'
            href="https://www.youtube.com/@Amwbrah"
            isExternal
          >
            Youtube
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
