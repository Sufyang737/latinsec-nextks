import Image from "next/image";

/* eslint-disable react/prop-types */
export const TestimonialCard = ({ data }) => {
  const { image, name, description, rate } = data;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }
  return (
    <section className="bg-white px-16 py-6 relative ml-12">
      <div className="w-24 h-24 rounded-full overflow-hidden absolute top-5 -left-12">
        <Image src={image} alt="" className="object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-2xl text-[#252B42]">{name}</h4>
        <div className="text-[#F3CD03] text-xl">{stars}</div>
        <p className="text-sm font-medium text-[#737373]">{description}</p>
      </div>
    </section>
  );
};
