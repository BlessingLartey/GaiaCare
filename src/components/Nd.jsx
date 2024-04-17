import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "../Styles/Tabs.css";
import Agroforestry from "./Agroforestry";
import BeeKeeping from "./BeeKeeping";
import ImprovedCook from "./ImprovedCook";
import AwarenessRaising from "./AwarenessRaising";

const MyTabsComponent = () => {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <Tabs
      selectedIndex={activeIndex}
      onSelect={(index) => setActiveIndex(index)}
    >
      <TabList>
        <Tab>Agroforestry</Tab>
        <Tab>BeeKeeping</Tab>
        <Tab>Improved cookstoves</Tab>
        <Tab>Awareness Raising</Tab>
      </TabList>

      <Tab>{activeIndex === 0 && <Agroforestry />}</Tab>
      <Tab>{activeIndex === 1 && <BeeKeeping />}</Tab>
      <Tab>{activeIndex === 2 && <ImprovedCook />}</Tab>
      <Tab>{activeIndex === 3 && <AwarenessRaising />}</Tab>
    </Tabs>
  );
};

export default MyTabsComponent;
