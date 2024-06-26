import React, { useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiQuestion } from "../data/initialState";

const Test = () => {
  // logic
  const [step, setStep] = useState(1);

  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);

  const hanleAnswerClick = () => {
    setStep(step + 1);
  };

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progess />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question
        text={"선재가 이클립스 공연에 당신을 초대한다면?"}
        step={step}
      />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer onAnswerClick={hanleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
