import { LocationMarkerIcon, PhotographIcon  , NewspaperIcon, PlayIcon} from "@heroicons/react/outline";
import { DotsVerticalIcon,  SearchIcon } from "@heroicons/react/solid";
import HeaderOptionItems from "./HeaderOptionItems";

function HeaderOptions() {
  return (
    <div className='flex w-full items-center justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:px-52 border-b'>
      <div className='flex space-x-6'>
        <HeaderOptionItems Icon={SearchIcon} title='All' selected />
        <HeaderOptionItems Icon={PhotographIcon} title='Images' />
        <HeaderOptionItems Icon={PlayIcon} title='Videos' />
        <HeaderOptionItems Icon={NewspaperIcon} title='News' />
        <HeaderOptionItems Icon={LocationMarkerIcon} title='Maps' />
        <HeaderOptionItems Icon={DotsVerticalIcon} title='More' />
      </div>

      <div className="flex space-x-4">
        <p className="link text-gray-500 text-sm">Settings</p>
        <p className=" text-gray-500 text-sm">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
