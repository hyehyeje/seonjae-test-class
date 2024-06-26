import React, { useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiQuestion } from "../data/initialState";
import { mbtiQuestionList } from "../data/resonse";

const Test = () => {
  // logic

  /*
  mbtiQuestion
  {
    id: 1,
    step: 1,
    nextStep: 2,
    questionType: "EI",
    firstType: "E",
    lastType: "I",
    questionText: "선재가 이클립스 공연에 당신을 초대한다면?",
  }
  */

  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);

  const { step, questionText } = mbtiQuestion;

  const hanleAnswerClick = () => {
    setCurrentStep(currentStep + 1);
    // state업데이트 안함
  };

  // 1. 원하는 state 감시
  useEffect(() => {
    // state 변경시 실행될 실행문
    const nextQuestion = mbtiQuestionList.find(
      (item) => item.step === currentStep
    );
    setMbtiQuestion(nextQuestion);
  }, [currentStep]);

  // 2. 진입 시 딱 한번만 실행
  useEffect(() => {
    // 진입 시 실행될 실행문
  }, []);

  // 3. 모든 state가 변경될때 실행
  useEffect(() => {
    // 페이지에서 하나의 state라도 변경될때 실행될 실행문
  });

  // 1. answer버튼 클릭 이벤트 잡기
  // 2. mbtiQuestion.step 값 변경

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progess />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question text={questionText} step={step} />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer onAnswerClick={hanleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
