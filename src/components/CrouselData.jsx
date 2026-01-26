import { FaEye, FaStar, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
const CrouselData = (props) => {
    function scrolltop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <div className="group relative">
                <div className="absolute bottom-5 left-5 right-5 flex justify-center opacity-0 group-hover:opacity-100 transform -translate-y-1.5 transition duration-600">
                    <ul className="flex mx-auto gap-5">
                        <li className="bg-white p-3 cursor-pointer hover:bg-gray-200">
                            <Link onClick={scrolltop}>
                                <FaEye size={20} />
                            </Link>
                        </li>
                        <li className="bg-white p-3 cursor-pointer hover:bg-gray-200">
                            <Link  onClick={scrolltop}>
                                <FaStar size={20} />
                            </Link>
                        </li>
                        <li className="bg-white p-3 cursor-pointer hover:bg-gray-200">
                            <Link onClick={scrolltop}>
                                <FaShoppingCart size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <img
                    className="w-full h-full object-cover"
                    src={props.img}
                    alt={props.name}
                />
            </div>


            {/* Details Section */}
            <div className="mt-4 flex flex-col flex-wrap sm:flex-row sm:items-start justify-between items-center gap-2">
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold truncate max-w-[200px]" title={props.name}>
                        {props.name}
                    </h4>
                    <span className="text-gray-500 font-medium block">${props.price}</span>
                </div>
                <div className="flex justify-start sm:justify-end">
                    <ul className="flex mt-2">
                        <li><FaStar size={14} strokeWidth={2} /></li>
                        <li><FaStar size={14} strokeWidth={2} /></li>
                        <li><FaStar size={14} strokeWidth={2} /></li>
                        <li><FaStar size={14} strokeWidth={2} /></li>
                        <li><FaStar size={14} strokeWidth={2} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CrouselData;
