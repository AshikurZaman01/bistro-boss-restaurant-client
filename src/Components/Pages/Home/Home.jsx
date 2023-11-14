import Featured from "../Featured/Featured";
import FoodCategory from "../FoodCategory/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
import SetTitle from "../Shared/SetTitle/SetTitle";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div>
                <SetTitle title={'Home'}></SetTitle>
            </div>
            <div>
                <Banner></Banner>
            </div>

            <div className="my-6">
                <FoodCategory></FoodCategory>
            </div>

            <div>
                <PopularMenu></PopularMenu>
            </div>

            <div>
                <Featured></Featured>
            </div>

            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;