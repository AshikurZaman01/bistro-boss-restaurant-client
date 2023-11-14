import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./features.css";
import featuredImage from "../../../assets/assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="my-10 featuredItem py-10 pb-28 text-white bg-fixed ">

            <div>
                <SectionTitle heading={'from our menu'} subTitle={'Check it out'}></SectionTitle>
            </div>

            <section className="md:flex justify-center items-center py-8 px-16 gap-10 bg-slate-600 bg-opacity-20">
                <div>
                    <div className="">
                        <img className="" src={featuredImage} alt="" />
                    </div>
                </div>

                <div className="space-y-4 text-white">
                    <p className="font-bold">Aug 20, 2029</p>
                    <p className="uppercase font-semibold">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nisi, beatae repellat, eveniet id quam voluptatem repellendus deleniti, maxime laboriosam magni totam eum voluptatum? Odit, officiis sunt? Asperiores, quae ducimus.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </section >

        </div >
    );
};

export default Featured;