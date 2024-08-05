import NavLinks from "../NavLinks";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto max-w-[1038px] flex justify-between items-center m-4">
        <div className="flex flex-col">
          <img src="/images/logo.png" alt="Logo Wifi Socks" className="h-12" />
        </div>
        <button className="bg-[#B37422] text-white py-2 px-10 rounded">
          Liên hệ
        </button>
      </div>
      <div className='p-3 bg-[#4A1414] text-white'>
        <div className="container mx-auto max-w-[1038px]">
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
