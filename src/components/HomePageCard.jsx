 const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="h-[320px] bg-white z-30 mt-4  object-cover">
      <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">{title}</div>
      <div className="h-[200px] m-4">
        <img
          className="h-[100%] w-[100%] object-cover "
          src={img}
          alt="Home card"
        />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4 ">
        <a href={link}   rel="noopener noreferrer" target="_blank">
          See more
        </a>
      </div>
    </div>
  );
};

export default HomePageCard;
