import { Tabs, Tab } from "@/components/Tabs";
import { useEffect, useState } from "react";

const styles = {
  wrapper: { margin: 20 },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
  },
};

function Children() {
  const [value, setValue] = useState("");
  console.log(`Current state: ${value}`);
  
  useEffect(()=> {
  }, [])
  return (
    <input value={value} onChange={(e) => setValue(e.target.value)}></input>
  );
}

function TabsDemo() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Tabs Demo</h1>

      <Tabs id="tab_a" keepActiveTab preserveContent>
        <Tab title="Tab A">
          <Children />
        </Tab>
        <Tab title="Tab B">Content of Tab B</Tab>
        <Tab title="Tab C">Content of Tab C</Tab>
      </Tabs>

      <Tabs id="tab_1" defaultTabIndex={1} keepActiveTab>
        <Tab title="Tab 1">Content of Tab 1</Tab>
        <Tab title="Tab 2">Content of Tab 2</Tab>
        <Tab title="Tab 3">Content of Tab 3</Tab>
      </Tabs>
    </div>
  );
}

export default TabsDemo;
