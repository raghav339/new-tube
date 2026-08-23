import {SearchIcon} from "lucide-react";


export default function SearchInput()
{
    return(
        <form className="flex w-full max-w-150 ">
            <div className="relative w-full">
                <input type="text" placeholder="Search" className="w-full pl-4 pr-12 py-2 focus:outline-none border rounded-l-full focus:border-blue-500"/>
            </div>
            <button type="submit" className="rounded-r-full border-l-0 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 diabled:cursor-not-allowed disabled:opacity-50">
                <SearchIcon className="size-5"/>
            </button>
        </form>
    )
}