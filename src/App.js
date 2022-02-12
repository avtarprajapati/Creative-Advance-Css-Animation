import { useState } from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Transition,
  Transform,
  CreativeButton,
  CreativeImage,
  CreativeMenu,
  CreativeCard,
  CoolExamples,
  AnimationKeyframe,
  CreativeAnimation,
  ClipPath,
} from "./components";
import "./App.css";

const AccordionData = [
  { label: "Transition", component: Transition },
  { label: "Transform", component: Transform },
  { label: "Creative Button", component: CreativeButton },
  { label: "Creative Image", component: CreativeImage },
  { label: "Creative Menu", component: CreativeMenu },
  { label: "Creative Card", component: CreativeCard },
  { label: "Cool Example", component: CoolExamples },
  // { label: "Animation Keyframe", component: AnimationKeyframe },
  { label: "Creative Animation Examples", component: CreativeAnimation },
  { label: "Clip Path", component: ClipPath },
];

function App() {
  const [expanded, setExpanded] = useState(false);

  const onChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <h2 className="heading">Creative Advanced CSS Animations</h2>
        {AccordionData.map(({ label, component: AccordianComponent }) => (
          <Accordion
            key={label}
            expanded={label === expanded}
            onChange={onChange(label)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={label}
            >
              <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails>{<AccordianComponent />}</AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default App;
