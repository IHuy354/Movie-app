import LogoTitle from "../component/LogoTitle/LogoTitle";

const ContentClass = (): string => `
  py-2 text-2xl duration-400 font-medium
   hover:text-red-500 
`;

const Footer = () => {
  return (
    <div className="relative h-[480px] text-white ">
      <img
        src="https://calm-cendol-f3d19f.netlify.app/assets/footer-bg-e4b3ddb4.jpg"
        alt=" ảnh footer"
        className="absolute object-cover object-top w-full h-full "
      />
      {/* content  */}
      <div className="relative z-10 p-[64px] flex flex-col items-center">
        <LogoTitle />
        <div className="flex justify-between gap-30 mt-17 cursor-pointer">
          <div>
            <div className={ContentClass()}>Home</div>
            <div className={ContentClass()}>Contact us</div>
            <div className={ContentClass()}>Term of services</div>
            <div className={ContentClass()}>About us</div>
          </div>

          <div>
            <div className={ContentClass()}>Live</div>
            <div className={ContentClass()}>FAQ</div>
            <div className={ContentClass()}>Premium</div>
          </div>

          <div>
            <div className={ContentClass()}>You must watch</div>
            <div className={ContentClass()}>Recent release</div>
            <div className={ContentClass()}>Top IMDB</div>
            <div className={ContentClass()}>Pavacy policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
