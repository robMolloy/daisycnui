import fs from "fs/promises";
import { Tabs } from "@/components/tabs/Tabs";
import { useState } from "react";

export async function getStaticProps() {
  const text = await fs.readFile(
    "components/themeSelector/ThemeSelector.tsx",
    "utf8"
  );

  return { props: { text } };
}

const tabs = [
  { label: "hi", selectedValue: "hi" },
  { label: "bye", selectedValue: "bye" },
  { label: "cry", selectedValue: "cry" },
] as const;

export default function Page(p: { text: string }) {
  const [value, setValue] =
    useState<(typeof tabs)[number]["selectedValue"]>("hi");

  return (
    <>
      <div>{value}</div>
      <Tabs
        mode="external"
        tabs={tabs}
        value={value}
        onClick={(x) => setValue(x)}
      />

      <Tabs tabs={tabs} startingValue="hi" />
      <pre className="text-xs h-[40vh] overflow-y-scroll ">{p.text}</pre>
    </>
  );
}
