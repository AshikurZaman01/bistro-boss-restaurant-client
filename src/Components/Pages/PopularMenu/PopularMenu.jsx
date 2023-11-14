import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menus, setMenus] = useState();
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenus = data.filter(menu => menu.category === 'popular')
                setMenus(popularMenus)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <section className="my-10">

                <div>
                    <SectionTitle
                        subTitle={'Popular Items'}
                        heading={'From Out Menu'}
                    ></SectionTitle>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        menus && menus.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                    }
                </div>



            </section>
        </div>
    );
};

export default PopularMenu;