import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <sec className="flex">
                <Cousin name={'Kamrul'}></Cousin>
                <Cousin name={'Fahim'} asset={asset}></Cousin>
            </sec>
        </div>
    );
};

export default Uncle;