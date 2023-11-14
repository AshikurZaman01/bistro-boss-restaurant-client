import FoodCategory from "../FoodCategory/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
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
            <div>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Home;