import producthead from '../assets/images/products-page-heading.jpg';
import BuyProduct from '../components/BuyProduct';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/PageHeader';
const SingleProduct = () => {
     const headData = {
        title: "Single Product Page",
        img: producthead
      };
    return (
        <div>
            <Navbar/>
            <PageHeader title={headData.title} img={headData.img} />
            <BuyProduct/>
            <Footer/>
        </div>
    )
}

export default SingleProduct