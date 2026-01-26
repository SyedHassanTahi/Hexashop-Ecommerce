import producthead from '../assets/images/products-page-heading.jpg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader';
import ProductImages from '../components/ProductImages'
const ProductPage = () => {
    const headData = {
        title: "Check Our Products",
        img: producthead
    };
    return (
        <div>
            <Navbar />
            <PageHeader title={headData.title} img={headData.img} />
            <div className='py-20'>
                <div>
                    <div className="mb-10 px-4 sm:px-8 lg:px-20 pt-16 text-center flex flex-col gap-2">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Our Latest Products
                        </h2>
                        <span className="text-[#a1a1a1] text-base sm:text-lg italic">
                            Check out all of our products.
                        </span>
                    </div>
                </div>
                <ProductImages />
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage