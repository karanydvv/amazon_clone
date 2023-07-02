import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";

const HomePage = () => {
  return (
    
    <div className="bg-amazonclone-background">
      <div className="min-w-[500px] max-w-[1500px] m-auto">
      
        <Carousel />
        <CarouselCategory/>
        <CarouselProduct/>

        <div className=" grid grid-cols-3 xl:grid-cols-4 mt-3  mb-0 ]">
        
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"/product/13"}
           
          />
          <HomePageCard
            title={"Watch Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"https://www.amazon.com/Lord-Rings-Power-Season/dp/B09QH98YG1"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"https://www.amazon.in/gp/prime?tag=msndeskstdin-21&ref=pd_sl_1bjx4njws8_e&adgrpid=1326012630099436&hvadid=82876047486695&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=150034&hvtargid=kwd-82876677293671:loc-90&hydadcr=15720_2210656"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"/search?category=Deals&searchTerm="}
          />
          <HomePageCard
            title={"DeLonghi Nescafé Dolce Coffee Machine"}
            img={"https://m.media-amazon.com/images/I/71zI-ry-gXL._AC_SX569_.jpg"}
            link={"product/12"}
          />
          <HomePageCard
            title={"Fire TV Stick Lite"}
            img={"https://m.media-amazon.com/images/I/51lQwjYsgBL._AC_UY327_FMwebp_QL65_.jpg"}
            link={"product/9"}
          />
          <HomePageCard
            title={"SPACEBOY"}
            img={ "https://th.bing.com/th/id/OIP.0ofRhqCrTADpLC2M1fOFPgAAAA?pid=ImgDet&w=207&h=218&c=7&dpr=1.3"}
            link={"product/6"}
          />
          <HomePageCard
            title={"Guinness World Records 2023"}
            img={"https://i.thenile.io/r1000/9781913484071.jpg?r=5f80ef0b51785"}
            link={"product/1"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
          
        </div>

        
        
       
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
