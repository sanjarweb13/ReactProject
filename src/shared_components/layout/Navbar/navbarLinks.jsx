import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <nav className="font-semibold hidden lg:block">
      <Link to="/about" className="px-4 ">
        About Us
      </Link>
      <Link to="/blog" className="px-4 ">
        Blogs
      </Link>
      <Link to="/team" className="px-4 ">
        Our Team
      </Link>

      <Link to="/contact" className="px-4 ">
        Contact Us
      </Link>
      <Link to="/faq" className="px-4 ">
        FAQ
      </Link>
    </nav>
  );
}

export default NavbarLinks;
