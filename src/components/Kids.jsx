import KidsCrousel from "./KidsCrousel";
import Header from './Header';

const Kids = ({ pageRefs }) => {

  const title = "Kid's Latest";

  return (
    <section ref={el => pageRefs.current = { ...pageRefs.current, kids: el }}>
      <div className="my-20 border-t-2 border-dashed border-gray-300">
        <Header title={title} />
        <KidsCrousel />
      </div>
    </section>
  );
};

export default Kids;
