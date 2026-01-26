import AboutHead from '../assets/images/about-us-page-heading.jpg';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import PageHeader from '../components/PageHeader';
import Subscribe from '../components/Subscribe';
const ContactPage = () => {
     const headData = {
        title: "Contact Us",
        img: AboutHead
      };
    return (
        <div>
            <Navbar />
            <PageHeader title={headData.title} img={headData.img} />
            <ContactUs />
            <Subscribe />
            <Footer/>
        </div>
    )
}

export default ContactPage
