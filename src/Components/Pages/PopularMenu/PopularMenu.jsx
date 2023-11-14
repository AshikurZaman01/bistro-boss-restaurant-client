import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import usemenu from "../../../hooks/useMenu";
import MenuCategory from "../Menu/MenuCategory";

const PopularMenu = () => {

    const [menus] = usemenu();
    const popular = menus.filter((menu) => menu.category === 'popular');

    return (
        <div>
            <section className="my-10 py-10 ">

                <div>
                    <SectionTitle
                        subTitle={'Popular Items'}
                        heading={'From Our Menu'}
                    ></SectionTitle>
                </div>

                <div>
                    <MenuCategory items={popular}></MenuCategory>
                </div>



            </section>
        </div>
    );
};

export default PopularMenu;