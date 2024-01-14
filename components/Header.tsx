import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://placehold.jp/000000/ffffff/150x150.png?text=B&css=%7B%22border-radius%22%3A%2215px%22%7D"
          alt="logo"
          width={50}
          height={50}
          className=""
        />
      </Link>

      <NavLink />
    </header>
  );
};

export default Header;
