import React from "react";

const ResultMessage = ({text}) => {
  return (
    <div className="px-4">
      <div className="bg-white px-4 pb-4 rounded-md overflow-hidden border-2 border-black">
        <span className="block text-3xl font-minhye text-center py-4">
          선재랑 나는..
        </span>
        <div className="text-sm font-pretendard">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ResultMessage;
