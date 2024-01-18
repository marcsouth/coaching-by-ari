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
      className="dark z-0"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

        <NavbarBrand >
          <p className="font-bold ">COACHING BY  ARI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand >
          <p className="font-bold max-sm:hidden ">COACHING BY ARI</p>
        </NavbarBrand>



        <NavbarContent className="hidden sm:flex gap-12 " justify="center">
        <NavbarItem >
          <Link className="text-white" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" className="text-white" >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Testimonials
          </Link>
        </NavbarItem>
      </NavbarContent>
      

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat" className="text-white">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white dark "
              size="lg"
             
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
