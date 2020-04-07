import React, { useState, useEffect } from "react";
import TextLoop from "react-text-loop";

interface WrapperProps {
  className?: string
}

const Example: React.FC<WrapperProps> = p => (
  <div className={p.className}>{p.children}</div>
)

const Section: React.FC<WrapperProps> = p => (
  <div className={p.className}>{p.children}</div>
)

//TODO Abstract out the loop values as props and map to span
const Masked = () => (
  <Section>
    <Example>
      <TextLoop mask={true}>
        <span>Delight customers</span>
        <span>Increase ROI</span>
        <span>Exceed KPIs</span>
        <span>Tell stories</span>
        <span>Revolutionize multichannel</span>
        <span>Maximize disruption</span>
      </TextLoop>{" "}
      with digital transformation.
    </Example>
  </Section>
);

enum Sections {
  Masked
}

const App = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.Masked);

  const mapSectionToComponent = {
    [Sections.Masked]: Masked
  };

  const ExampleSection = mapSectionToComponent[activeSection];
  return (
    <div>
      <ExampleSection />
    </div>
  );
};

export default App;
