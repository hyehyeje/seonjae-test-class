import React from "react";

const LoveIndex = () => {
  return (
    <div className="px-4">
      <ul>
        {/* START: LoveIndex 요소 */}
        <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
          <span className="text-base min-w-20 max-w-20">애정표현력</span>
          <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
            <span
              className="block h-full bg-mbti-pink transition-all"
              style={{ width: `70%` }}
            ></span>
          </div>
        </li>
        {/* END: LoveIndex 요소 */}
        {/* START: LoveIndex 요소 */}
        <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
          <span className="text-base min-w-20 max-w-20">눈치력</span>
          <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
            <span
              className="block h-full bg-mbti-pink transition-all"
              style={{ width: `50%` }}
            ></span>
          </div>
        </li>
        {/* END: LoveIndex 요소 */}
        {/* START: LoveIndex 요소 */}
        <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
          <span className="text-base min-w-20 max-w-20">썸 추진력</span>
          <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
            <span
              className="block h-full bg-mbti-pink transition-all"
              style={{ width: `80%` }}
            ></span>
          </div>
        </li>
        {/* END: LoveIndex 요소 */}
        {/* START: LoveIndex 요소 */}
        <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
          <span className="text-base min-w-20 max-w-20">19금력</span>
          <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
            <span
              className="block h-full bg-mbti-pink transition-all"
              style={{ width: `60%` }}
            ></span>
          </div>
        </li>
        {/* END: LoveIndex 요소 */}
      </ul>
    </div>
  );
};

export default LoveIndex;
