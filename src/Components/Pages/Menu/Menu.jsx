import CoverPage from "../Shared/CoverPage/CoverPage";
import SetTitle from "../Shared/SetTitle/SetTitle";

import menuImg from "../../../assets/assets/menu/banner3.jpg";
import dessertImg from "../../../assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/assets/menu/soup-bg.jpg";

import usemenu from "../../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {

    const [menus] = usemenu();
    const desserts = menus.filter((item) => item.category === "dessert");
    const soup = menus.filter((item) => item.category === "soup");
    const salad = menus.filter((item) => item.category === "salad");
    const pizza = menus.filter((item) => item.category === "pizza");
    const offered = menus.filter((item) => item.category === "offered");
    console.log(desserts);

    return (
        <div>
            <div>
                <SetTitle title={'Our Menu'}></SetTitle>
            </div>

            <div>
                <CoverPage img={menuImg} title={'our menu'}></CoverPage>
            </div>

            <div>
                <SectionTitle heading={'Todays Offer'} subTitle={'Dont Miss it'}></SectionTitle>
            </div>

            <div className="my-20">
                <MenuCategory items={offered}></MenuCategory>
            </div>

            <div>
                <CoverPage img={dessertImg} title={'Desserts'}></CoverPage>
            </div>

            <div className="my-20">
                <MenuCategory items={desserts}></MenuCategory>
            </div>

            <div>
                <CoverPage img={pizzaImg} title={'pizza'}></CoverPage>
            </div>

            <div className="my-20">
                <MenuCategory items={pizza}></MenuCategory>
            </div>

            <div>
                <CoverPage img={saladImg} title={'salad'}></CoverPage>
            </div>

            <div className="my-20">
                <MenuCategory items={salad}></MenuCategory>
            </div>

            <div>
                <CoverPage img={soupImg} title={'soup'}></CoverPage>
            </div>

            <div className="my-20">
                <MenuCategory items={soup}></MenuCategory>
            </div>



        </div>
    );
};

export default Menu;