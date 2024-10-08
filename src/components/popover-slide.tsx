import { Cross1Icon } from "@radix-ui/react-icons";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "@radix-ui/react-popover";

const transition = {
  duration: 0.3,
  ease: [0.32, 0.72, 0, 1],
};

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    height: 112,
  },
  closed: {
    opacity: 0.6,
    scale: 0,
    filter: "blur(2px)",
    height: 0,
  },
} as Variants;

const childVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 1, scale: 1 },
};

const LAST_10_GITHUB_FOLLOWERS = [
  "achris2",
  "609529897",
  "AbhirajSinha179",
  "jbreite",
  "rafunderscore",
  "RJohnPaul",
  "DarkInventor",
  "TechSon1c",
  "laoqin2024",
];

export function PopoverSlideSelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[180px] w-full flex-col items-center justify-start overflow-hidden p-4">
      <div className="flex flex-col items-center justify-start">
        <Popover onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button className="mb-2 rounded-[4px] bg-green-200 px-2 py-1 text-sm outline-none dark:bg-mauve-dark-3">
              <span className="text-mauve-light-11 dark:text-mauve-dark-11">
                411
              </span>
              <span className="ml-1 text-mauve-light-11 dark:text-mauve-dark-11">
                Followers
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            data-side="bottom"
            side="bottom"
            sideOffset={12}
            forceMount
          >
            <motion.div
              className="data-[state=closed]:animate-hide w-[290px] rounded-xl bg-green-200 py-3 dark:bg-mauve-dark-3"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={transition}
              style={{
                transformOrigin: "top",
              }}
            >
              <PopoverArrow className="fill-mauve-light-3 dark:fill-mauve-dark-3" />
              <div className="mb-2 flex items-center justify-between px-3">
                <div className="text-sm text-mauve-light-11 dark:text-mauve-dark-11">
                  Last Followers
                </div>
                <PopoverClose asChild>
                  <button>
                    <Cross1Icon className="h-3 w-3 text-mauve-light-12 dark:text-mauve-dark-11" />
                  </button>
                </PopoverClose>
              </div>
              <div className="flex gap-4 overflow-x-scroll px-3">
                {LAST_10_GITHUB_FOLLOWERS.map((item, index) => {
                  return (
                    <motion.button
                      key={index}
                      className="group flex flex-col items-center"
                      variants={childVariants}
                      transition={transition}
                    >
                      <img
                        src={`
                    https://avatars.githubusercontent.com/${item}
                  `}
                        className="h-12 w-12 rounded-full transition-transform group-active:scale-95"
                      />
                      <span className="w-12 truncate text-xs text-mauve-light-11 dark:text-mauve-dark-11">
                        {item}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
