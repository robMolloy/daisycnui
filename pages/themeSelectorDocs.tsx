import fs from "fs/promises";
import { ThemeSelector } from "@/components/themeSelector/ThemeSelector";

export async function getStaticProps() {
  const text = await fs.readFile(
    "components/themeSelector/ThemeSelector.tsx",
    "utf8"
  );

  return { props: { text } };
}

export default function Page(p: { text: string }) {
  return (
    <>
      <ThemeSelector />
      <pre className="text-xs h-[40vh] overflow-y-scroll ">{p.text}</pre>
    </>
  );
}
