import { useEffect, useState } from "react";

export const brandColors = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  "ghost",
] as const;
const stateColors = ["info", "success", "warning", "error"] as const;
const allColors = [...brandColors, ...stateColors];

//
//
// implemented like this to enable tailwind to access the relevant colors
const colorClassMap: {
  [k in (typeof allColors)[number]]: `badge-${k}`;
} = {
  neutral: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  ghost: "badge-ghost",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};

const themeNames = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
] as const;

export const ThemeSelector = () => {
  const [themeName, setThemeName] = useState<(typeof themeNames)[number]>(
    themeNames[0]
  );

  useEffect(() => {
    const htmlElm = document.querySelector("html");
    if (!htmlElm)
      throw new Error("can't find html element so unable to change theme");

    htmlElm.setAttribute("data-theme", themeName);
  }, [themeName]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {themeNames.map((x) => (
          <div key={x}>
            <div
              data-theme={x}
              className="btn btn-neutral btn-wide btn-base-100"
              onClick={() => setThemeName(x)}
            >
              <div className="flex flex-col gap-2">
                <div>{x}</div>
                <div className="flex gap-2">
                  {Object.entries(colorClassMap).map((entry) => (
                    <div key={`${x}-${entry[0]}`}>
                      <div className="tooltip" data-tip={entry[1]}>
                        <div
                          className={`badge ${entry[1]} badge-xs border-base-100`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>{themeName}</div>
    </div>
  );
};
