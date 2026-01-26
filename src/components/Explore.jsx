import explore01 from '../assets/images/explore-image-01.jpg';
import explore02 from '../assets/images/explore-image-02.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Explore = ({ pageRefs }) => {
  function scrolltop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <section ref={el => pageRefs.current = { ...pageRefs.current, explore: el }}>
      <div className="border-t-2 border-dashed border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-15 pt-20">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Explore Our Products
              </h2>
              <p className="text-[#aaaaaa] mt-5">
                You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.
              </p>
              <div className="flex items-center space-x-2">
                <span className="quote-icon text-4xl font-bold text-gray-800"><FaQuoteLeft /></span>
                <p className="mt-5 italic">
                  You are not allowed to redistribute this template ZIP file on any other website.
                </p>
              </div>
              <p className="text-[#aaaaaa] mt-5">
                There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.
              </p>
              <p className="text-[#aaaaaa] mt-5">
                If this template is beneficial for your website or business, please kindly 
                <span>
                  <Link className="text-blue-500" onClick={scrolltop}>
                    support us
                  </Link>
                </span>
                a little via PayPal. Please also tell your friends about our great website. Thank you.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Link onClick={scrolltop} to="/product" className="px-6 py-3 border hover:bg-[#2a2a2a] hover:text-white transition duration-300">
                  Discover More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className='mt-4'>
                <div className="text-center mx-3 flex flex-col items-center justify-center bg-[#f8f8f8] min-h-[250px]  p-3">
                  <h4 className="text-2xl font-bold">Leather Bags</h4>
                  <p className="text-[#aaa] italic">Latest Collection</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center min-h-[200px] p-4">
                  <img
                    className="w-full object-cover mt-2"
                    src={explore02}
                    alt="Leather Bags Image"
                  />
                </div>
              </div>
              <div>
                <div className="text-center flex flex-col items-center justify-center min-h-[200px] p-4">
                  <img
                    className="w-full object-cover"
                    src={explore01}
                    alt="Leather Bag Collection"
                  />
                </div>
                <div className="text-center mx-3 flex flex-col items-center justify-center bg-[#f8f8f8] min-h-[250px] p-4 mt-2">
                  <h4 className="text-2xl font-bold">Different Types</h4>
                  <p className="text-[#aaa] italic">Over 304 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
