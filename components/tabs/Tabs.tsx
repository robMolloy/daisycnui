import { useState } from "react";

type Tab = { label: string; selectedValue: string };

export function Tabs<T extends Readonly<Tab[]> | Tab[]>(
  p: {
    tabs: T;
  } & (
    | {
        mode: "external";
        value: T[number]["selectedValue"];
        onClick: (x: T[number]["selectedValue"]) => void;
      }
    | { mode?: never; startingValue: T[number]["selectedValue"] }
  )
) {
  const [internalValue, setInternalValue] = useState(
    p.mode === "external" ? undefined : p.startingValue
  );
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {p.tabs.map((x) => (
        <a
          key={x.selectedValue}
          role="tab"
          className={`tab ${
            (p.mode === "external" && x.selectedValue === p.value) ||
            x.selectedValue === internalValue
              ? "tab-active"
              : ""
          }`}
          onClick={() => {
            if (p.mode === "external") p.onClick(x.selectedValue);
            else setInternalValue(x.selectedValue);
          }}
        >
          {x.label}
        </a>
      ))}
    </div>
  );
}
