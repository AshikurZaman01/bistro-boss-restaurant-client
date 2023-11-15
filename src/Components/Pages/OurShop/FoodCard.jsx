
const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item || {};

    return (
        <div className="mx-auto my-5">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="flex justify-between items-center gap-20">
                        <h2 className="card-title text-center">{name}</h2>
                        <p className="font-bold text-yellow-500">${price}</p>
                    </div>

                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;