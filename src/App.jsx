import "./App.css";
import Title from "./components/Title";
import Section from "./components/Section";
import TextComp from "./components/TextComp";
// import { calucateFloor, calculateTimesTwo } from "./utils/calculator";

function App() {
  return (
    <div>
      <Title content={"My blog"} />
      <Section
        sectionTitle={"Section 1"}
        sectionContent={"je suis le cotnenu de la section 1"}
      />
      <Section
        sectionTitle={"Section 2"}
        sectionContent={"je suis le cotnenu de la section 2"}
      />
      <TextComp content={"je suis le textComp de app.jsx"} />
    </div>
  );
}

export default App;
