import { BiSearch } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="w-full h-[78px] bg-gray-500">
            <div className="flex pt-6 pl-28 justify-start items-center">
                <p className="capitalize text-2xl font-semibold text-logo">NFTER</p>
                <div className="w-[25%] ml-10 cursor-pointer flex flex-row justify-around items-center">
                    <p>Marketplace</p>
                    <p>Resource</p>
                    <p>About</p>
                </div>
                <div className="pl-28">
                    <div className="w-[200px] h-auto border-solid border-2 border-ring-col rounded-full">
                        <div className="flex flex-row justify-between items-center m-1">
                            <input type="text" placeholder="Search" className="outline-none w-40 pl-2 rounded-full placeholder:pl-2" />
                            <i className="mr-2 text-logo"><BiSearch /></i>
                        </div>
                    </div>
                </div>
                <div className="w-48 h-auto flex-1 flex-row pl-12 justify-between items-start">
                    <button className="text-white rounded-full bg-logo px-6 py-2 text-xs">Upload</button>
                    <button className="text-logo rounded-full bg-white ring-2 px-6 py-2 ml-4 text-xs">Connect Wallet</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;