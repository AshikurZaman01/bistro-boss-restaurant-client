import CoverPage from "../Shared/CoverPage/CoverPage";
import SetTitle from "../Shared/SetTitle/SetTitle";
import shopImg from "../../../assets/assets/shop/banner2.jpg";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import usemenu from "../../../hooks/useMenu";
import FoodCard from "./FoodCard";

const OurShop = () => {

    const [menus] = usemenu();

    const [tabIndex, setTabIndex] = useState(0);

    const desserts = menus.filter((item) => item.category === "dessert");
    const soup = menus.filter((item) => item.category === "soup");
    const salad = menus.filter((item) => item.category === "salad");
    const pizza = menus.filter((item) => item.category === "pizza");
    const drinks = menus.filter((item) => item.category === "drinks");



    return (
        <div>
            <div>
                <SetTitle title={'Our Shop'}></SetTitle>
            </div>

            <div>
                <CoverPage img={shopImg} title={'Our Shop'}></CoverPage>
            </div>

            <div className="my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Desserts</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                desserts.map((item) => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                soup.map((item) => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                salad.map((item) => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                pizza.map((item) => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                drinks.length > 0 ?
                                    drinks.map((item) => <FoodCard item={item} key={item._id}></FoodCard>)
                                    :
                                    <p>"No Data Found"</p>

                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;