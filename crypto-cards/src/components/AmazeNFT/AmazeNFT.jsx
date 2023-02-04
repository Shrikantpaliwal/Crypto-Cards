import card from '../../assets/card.svg';
import graph from '../../assets/graph.svg';

const AmazeNFT = () => {
    return (
        <div className="w-full h-[200px] flex flex-row p-12 m-12">
            <p className='w-[33%] text-2xl font-extrabold uppercase'>The amazing NFT art <br />of the world here</p>
            <div className='w-[33%] flex items-start'>
                <i className='m-1 font-bold'><img src={card} alt="cards" /></i>
                <div>
                    <p className='font-bold'>Fast Transaction</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                </div>
            </div>
            <div className='w-[33%] flex items-start'>
                <i className='m-1 font-bold'><img src={graph} alt="graph" /></i>
                <div>
                    <p className='font-bold'>Growth Transaction</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                </div>
            </div>
        </div>
    );
}

export default AmazeNFT;