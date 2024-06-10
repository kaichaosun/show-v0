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
    </div>
  );
}

export default App;
