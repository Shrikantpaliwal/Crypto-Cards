import heroPic from '../../assets/hero.svg';

const Hero = () => {
    return (
        <div className='w-full bg-white flex justify-center items-start p-12 m-12'>
            <div className='w-[50%]'>
                <p className='w-[600px] h-[96px] text-4xl font-extrabold uppercase'>Discover, and collect <br /> Digital Art  NFTs</p>
                <p className='w-[400px] h-[96px] text-lg font-extralight capitalize'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                <button className='bg-logo w-[150px] h-[50px] text-bold text-white text-xl font-normal capitalize text-center px-1 py-2 rounded-full mt-4'>Explore Now</button>
                <ul className='mt-5 w-[300px] flex flex-row justify-between items-center'>
                    <li><p className='text-4xl font-semibold'>98+</p><p>Artwork</p></li>
                    <li><p className='text-4xl font-semibold'>12+</p><p>Auction</p></li>
                    <li><p className='text-4xl font-semibold'>15+</p><p>Artist</p></li>
                </ul>
            </div>
            <div className='w-[50%]'><img src={heroPic} alt="Hero Image of NFT" className='w-[400px]' /></div>
        </div>
    );
}

export default Hero;