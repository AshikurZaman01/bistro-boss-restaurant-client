import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto">
                {
                    items && items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;