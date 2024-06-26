import React, { useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiQuestionList } from "../data/response";

const Test = () => {
  // logic

  /*
  mbtiAnswer
  {
    id: 1,
    questionStep: 1,
    questionNextStep: 2,
    questionType: "EI",
    answerList: [
      {
        code: 0,
        type: "E",
        text: "꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!",
      },
      {
        code: 1,
        type: "I",
        text: "선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어",
      },
    ],
  },
  */

  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);

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
    ); // undefined

    // question데이터 변경
    nextQuestion && setMbtiQuestion(nextQuestion);

    // answerData 변경
  }, [currentStep]);

  // 2. 진입 시 딱 한번만 실행
  useEffect(() => {
    // 진입 시 실행될 실행문
  }, []);

  // 3. 모든 state가 변경될때 실행
  useEffect(() => {
    // 페이지에서 하나의 state라도 변경될때 실행될 실행문
  });

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
      <Answer data={mbtiAnswer} onAnswerClick={hanleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
