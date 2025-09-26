import { Children, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import clsx from "clsx";

import Tab from "./Tab";
import styles from "./Tabs.module.scss";

function Tabs({
  id,
  className,
  tabsClassName,
  defaultTabIndex = 0,
  keepActiveTab = false,
  preserveContent = false,
  children,
}) {
  const [params, setParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(() => {
    if (!keepActiveTab) return defaultTabIndex;
    // eslint-disable-next-line no-constant-binary-expression
    return +params.get(id) ?? defaultTabIndex;
  });
  const tabs = Children.map(children, (tab) => {
    // if (tab.type !== Tab) throw new Error("Children of <Tabs> must be <Tab>");
    return tab;
  });

  useEffect(() => {
    if (!keepActiveTab) return;
    if (!id)
      throw new Error(
        'When using keepActiveTab, it is required to pass "id" props.'
      );
  }, [id, keepActiveTab]);

  useEffect(() => {
    if (!keepActiveTab) return;
    params.set(id, tabIndex);
    setParams(params);
  }, [id, tabIndex, keepActiveTab, params, setParams]);

  const renderTabContent = () => {
    if (preserveContent) {
      return tabs.map((tab, index) => {
        return (
          <div key={index} hidden={index !== tabIndex}>
            {tab.props.children}
          </div>
        );
      });
    }
    return tabs[tabIndex].props.children;
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={clsx(styles.tabsList, tabsClassName)}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            onClick={() => setTabIndex(index)}
            active={index === tabIndex}
          >
            {tab.props.title}
          </Tab>
        ))}
      </div>
      <div className={styles.tabContent}>{renderTabContent()}</div>
    </div>
  );
}

export default Tabs;
