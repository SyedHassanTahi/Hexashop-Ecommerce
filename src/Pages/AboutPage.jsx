import AboutHead from '../assets/images/about-us-page-heading.jpg';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar/Navbar';
import OurServices from '../components/OurServices';
import OurTeam from '../components/OurTeam';
import PageHeader from '../components/PageHeader';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
const AboutPage = () => {
  const headData = {
    title: "About Our Company",
    img: AboutHead
  };

  return (
    <div>
      <Navbar />
      <PageHeader title={headData.title} img={headData.img} />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutPage;
