import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Image src="/react.png" alt="site logo" width={115} height={100} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs/">
        <a>Blog Lists</a>
      </Link>
    </nav>
  );
};

export default Navbar;
