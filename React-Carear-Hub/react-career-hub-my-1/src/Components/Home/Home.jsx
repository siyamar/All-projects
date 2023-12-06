import Banner from "../Banner/Banner";
import CategoriesList from "../CategoriesList/CategoriesList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesList></CategoriesList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;