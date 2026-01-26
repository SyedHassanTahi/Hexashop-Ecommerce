import Header from './Header';
import MenCrousel from './MenCrousel';

const Men = ({ pageRefs }) => {
  const title = "Men's Latest";
  return (
    <section ref={el => pageRefs.current = { ...pageRefs.current, men: el }}>
      <div className="men-section lg:px-8">
        <div className="my-20 border-t-2 border-dashed border-gray-300">
          <Header title={title} />
          <MenCrousel />
        </div>
      </div>
    </section>
  );
};

export default Men;
