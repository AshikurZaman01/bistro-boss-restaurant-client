
const SectionTitle = ({ subTitle, heading }) => {
    return (
        <div className="w-[30%] mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2">---{subTitle}---</p>
            <h3 className="lg:text-4xl md:text-3xl text-2xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;