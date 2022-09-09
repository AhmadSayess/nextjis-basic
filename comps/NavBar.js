import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav>

      <div className="logo">
        {/* <h1>ninja list</h1> */}
        <Image src="/logo.png" alt="logo" width={80} height={50} />
      </div>

     <Link href='/' ><a>Home</a></Link> 
     <Link href='/About' ><a> About</a></Link>
     <Link href='/ninjas' ><a> Ninja Listing</a></Link>

    </nav>
  );
};

export default NavBar;
