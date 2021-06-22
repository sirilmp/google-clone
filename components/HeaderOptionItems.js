function HeaderOptionItems({Icon,title,selected}) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent text-gray-500 sm:hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-2 ${selected && "text-blue-500 sm:border-blue-500"}`}>
         <Icon className='h-4'/>
         <p className='hidden sm:inline-flex'>{title}</p>
        </div>
    )
}

export default HeaderOptionItems
