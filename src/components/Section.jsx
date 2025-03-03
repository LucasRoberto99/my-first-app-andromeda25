import TextComp from "./TextComp";
import Title from "./Title";

const Section = (props) => {
  console.log(props);

  return (
    <div style={{ backgroundColor: "lightgreen", margin: 10 }}>
      <Title content={props.sectionTitle} />
      <TextComp content={props.sectionContent} />
    </div>
  );
};

export default Section;
