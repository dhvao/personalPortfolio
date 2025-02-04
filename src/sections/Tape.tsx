import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Feel free to contact me using the contact form below",
];

export const TapeSection = () => {
  return (
    <div className="py-1">
      <div className="bg-gradient-to-r from-yellow-300 to-emerald-400 overflow-x-clip">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s] [animation-timing-function:linear] [animation-iteration-count:infinite]"
          >
            {[...new Array(20)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word + idx} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
