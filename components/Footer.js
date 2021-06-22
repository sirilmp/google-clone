function Footer() {
  return (
    <footer className="grid w-full pb-2 divide-y-[1px] divide-gray-300 bg-[#F2F2F2] text-sm text-gray-500">
      <div className="py-4 px-3">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="flex justify-center space-x-8 whitespace-nowrap py-4 md:justify-self-start">
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap py-4 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
