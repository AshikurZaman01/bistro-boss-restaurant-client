
const MenuItem = ({ item }) => {


    const { _id, recipe, price, name, image, category } = item || {};

    return (
        <div className="flex gap-6 items-center">

            <div className="w-[140px] h-[100px]">
                <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-full h-full" src={image} alt={name} />
            </div>

            <div className="flex gap-6">

                <div>
                    <h3 className="font-bold">{name}</h3>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className="text-yellow-500 font-semibold">${price}</p>
                </div>

            </div>

        </div>
    );
};

export default MenuItem;