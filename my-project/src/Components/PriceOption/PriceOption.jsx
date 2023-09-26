import { prototype } from 'postcss/lib/previous-map';
import PropTypes  from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col '>
            <h2 className='text-center font-bold'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className='text-3xl text-center my-8'>{name}</h3>
              <div className='pl-6 pb-6 flex-grow'>
              {
                    features.map((feature, index)=> <Feature key={index} feature={feature}></Feature>)
                }
              </div>
                <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOption.protoTypes ={
    option: PropTypes.object
}

export default PriceOption;