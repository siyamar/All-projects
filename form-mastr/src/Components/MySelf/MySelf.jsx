import Special from "../Special/Special";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>My Self</h2>
            <sec className="flex">
                <Special asset={asset}></Special>
            </sec>
        </div>
    );
};

export default MySelf;