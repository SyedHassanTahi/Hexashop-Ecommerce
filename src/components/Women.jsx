import Header from './Header';
import WomenCrousel from './WomenCrousel';

const Women = ({ pageRefs }) => {
  const title = "Women's Latest";
  return (
    <section ref={el => pageRefs.current = { ...pageRefs.current, women: el }}>
      <div className="my-20 border-t-2 border-dashed border-gray-300">
        <Header title={title} />
        <WomenCrousel />
      </div>
    </section>
  );
};

export default Women;
