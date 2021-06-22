import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const terms = searchInputRef.current.value;
    // console.log("terms");
    if (!terms) {
      return;
    } else {
      router.push(`/search?term=${terms}`);
    }
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full items-center p-6'>
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="p-2 cursor-pointer"
      />
      <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-10">
        <input
          ref={searchInputRef}
          defaultValue={router.query.term}
          type="text"
          className="flex-grow w-full focus:outline-none"
        />
        <XIcon
          onClick={() => (searchInputRef.current.value = "")}
          className="h-7 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125 sm:mr-3"
        />
        <MicrophoneIcon className="h-7 mr-3 text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-400" />
        <SearchIcon className="h-7 text-blue-500 hidden sm:inline-flex" />
        <button hidden type="submit" onClick={search}>
          search
        </button>
      </form>
      <Avatar url='https://sirilmp.online/img/profile.png' className='ml-auto'/> 
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
