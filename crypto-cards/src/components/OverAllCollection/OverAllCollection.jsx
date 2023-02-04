import nftimg from '../../assets/nft1.svg';
import guy from '../../assets/guy.svg';
import bid_profile from '../../constant/bid_profile';

const OverAllCollection = () => {
    return (
        <div className="w-full h-auto flex flex-row p-12 m-12">
            <div className='w-[33%]'>
                <img className='w-[300px] h-[325px]' src={nftimg} alt="nft image" />
                <div className='w-[300px] flex flex-row p-1 m-1'>
                    <img className='w-10 h-10' src={guy} alt="" />
                    <div className='pl-2'>
                        <p className='font-bold'>The Futr Abstr</p>
                        <p className='text-xs'>10 in the stock</p>
                    </div>
                    <div className='flex flex-col pl-8'>
                        <p className='text-sm font-light'>Highest Bid</p>
                        <div className='flex flex-row h-10'>
                            <i><svg width="12" height="18" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_213)">
                                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_213">
                                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            </i>
                            <p className='text-sm pl-1'>0.25 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[33%]'>
                <div className='h-[325px] flex flex-col'>
                    {
                        bid_profile.map((data) => (
                            <div className='w-[300px] flex flex-row items-start'>
                                <div className='m-3'>
                                    <img className='h-[106px]' src={data.nft_image} alt={data.nft_image} />
                                </div>
                                <div className='mt-3 flex flex-col items-start'>
                                    <p className='text-lg font-bold'>{data.title}</p>
                                    <div className='flex flex-row items-center'>
                                        <img className='p-0.5 mr-1 w-[34px] h-[34px]' src={data.profile_img} alt="Profile Image" />
                                        <div className='h-[20px] flex flex-row items-center ring-1 ring-green rounded-sm'>
                                            <img className='w-[16px] h-[16px] p-0.5' src={data.symbol_img} alt={data.symbol_id} />
                                            <p className='p-0.5 font-bold text-sm text-green'>{data.amount}</p>
                                            <p className='p-0.5 font-bold text-sm text-green'>{data.symbol_id}</p>
                                        </div>
                                        <p className='pl-2.5 font-thin text-xs'>{data.current_index} of {data.total_count}</p>
                                    </div>
                                    <div className='p-1 mt-2 ml-1'>
                                        <button className='bg-white w-[100px] h-[30px] text-logo ring-2 ring-logo text-sm font-normal capitalize text-center px-1 py-1 rounded-full hover:bg-logo hover:text-white'>Place Bid</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-[33%]'>

            </div>
        </div>
    );
}

export default OverAllCollection;