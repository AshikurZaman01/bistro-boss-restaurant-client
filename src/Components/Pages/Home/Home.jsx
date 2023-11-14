import FoodCategory from "../FoodCategory/FoodCategory";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-6">
                <FoodCategory></FoodCategory>
            </div>
        </div>
    );
};

export default Home;