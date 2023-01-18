import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/guides">Guides</Link>
    </div>
  );
};

export default Navbar;
