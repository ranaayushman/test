import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-white drop-shadow-custom rounded-md p-4 flex justify-between items-center mt-2">
      <h1 className="text-lg font-semibold">Welcome</h1>
      <div className="flex items-center space-x-2">
        <Image
          src="/img/logo.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-sm font-semibold">Mayank Kumar</span>
      </div>
    </header>
  );
};

export default Header;
