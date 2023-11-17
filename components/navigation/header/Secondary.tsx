import Link from "next/link";

const Secondary = () => {
  return (
    <nav className="bg-secondary border-b border-primary">
      <div className="max-w-screen-xl flex items-center justify-between py-5 mx-auto">
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Fabric
          </Link>
        </div>
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Wallpaper
          </Link>
        </div>
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Living & Decor
          </Link>
        </div>
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Dining
          </Link>
        </div>
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Bedding
          </Link>
        </div>
        <div className="leading-5">
          <Link className="hover:bg-primary py-5 px-3 cursor-pointer" href="/">
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Secondary;
