import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/Guides">Guides</Link>
    </div>
  );
};

export default NavBar;
