import { Price } from "@/components/price";
import { Shortform } from "@/components/shortform";
import { useState } from "react";
import { Cookie } from "@/components/cookie";
import { Kanban } from "./components/kanban";
import { Terminal } from "./components/terminal";
import { Testimonial } from "./components/testimonial";
import { Music } from "./components/music";
import { DynamicMenu } from "@/components/dynamic-menu";
import { PopoverSlideSelector } from "./components/popover-slide";
import ExplodingMenu from "./components/explore-menu";
import { Timeline } from "./components/ui/timeline";

const timelineItems = [
  {
    title: "2021",
    children: "Started working on Show v0",
  },
  {
    title: "2022",
    children: "Show v0 is now live",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="mt-20">Show v0</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Shortform />

      <Price />

      <Cookie />

      <Kanban />

      <Terminal />

      <Testimonial />

      <Music />

      <DynamicMenu />

      <PopoverSlideSelector />

      <ExplodingMenu />

      <div className="flex flex-row  items-center justify-center">
        <Timeline items={timelineItems} activeItem={0} />
      </div>
    </div>
  );
}

export default App;
