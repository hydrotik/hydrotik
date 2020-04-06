import React, { useState, useEffect } from "react";
import TextLoop from "react-text-loop";

//@ts-ignore
import cxs from "cxs/component";

const Example:any = cxs("div")({
  fontSize: "24px"
});

const Title = cxs("div")({
  marginBottom: "5px",
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "#aaa"
});

const Section = cxs("div")({
  marginBottom: "50px",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
});

const StyledTextLoop = cxs(TextLoop)({
  display: "block"
});

const Masked = () => (
  <Section>
    <Example>
      <TextLoop mask={true}>
        <span>Delight customers</span>
        <span>Increase revenue</span>
        <span>Exceed KPIs</span>
        <span>Digital transformation</span>
      </TextLoop>{" "}
      in every category.
    </Example>
  </Section>
);

const Controlled = () => {
  const [options, setOptions] = useState(["Trade faster", "Increase sales"]);
  const [interval, setInterval] = useState(0);

  useEffect(() => {
    const optionsTimeout = setTimeout(() => {
      setOptions([
        "Trade faster",
        "Increase sales",
        "Stock winners",
        "Price perfectly"
      ]);
      console.log("change options");
    }, 10000);

    return () => {
      clearTimeout(optionsTimeout);
    };
  }, []);

  useEffect(() => {
    const intervalStartTimeout = setTimeout(() => {
      console.log("start");
      setInterval(1000);
    }, 5000);
    return () => {
      clearTimeout(intervalStartTimeout);
    };
  }, []);

  useEffect(() => {
    const intervalStopTimeout = setTimeout(() => {
      setInterval(0);
      console.log("stop");
    }, 15000);

    return () => {
      clearTimeout(intervalStopTimeout);
    };
  }, []);

  return (
    <Section>
      <Title>Controlled props (start/stop animation and change options)</Title>
      <Example>
        <TextLoop interval={interval} children={options} /> in every category.
      </Example>
    </Section>
  );
};

const Staggered = () => (
  <Section>
    <Title>Staggered (with delay prop and custom styling)</Title>
    <Example>
      <StyledTextLoop mask={true} fade={false}>
        <span>Trade</span>
        <span>Increase</span>
        <span>Stock</span>
      </StyledTextLoop>
      <StyledTextLoop delay={500} mask={true} fade={false}>
        <span>faster</span>
        <span>sales</span>
        <span>winners</span>
      </StyledTextLoop>
      <StyledTextLoop delay={1000} mask={true} fade={false}>
        <span>in every category.</span>
        <span>in something else.</span>
        <span>in other category.</span>
      </StyledTextLoop>
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
