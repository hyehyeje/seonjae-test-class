import React, { useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiAnswerList, mbtiQuestionList } from "../data/response";
import { useNavigate } from "react-router-dom";

const Test = () => {
  // logic
  const history = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);

  const { step, questionText } = mbtiQuestion;

  const hanleAnswerClick = () => {
    currentStep < 12 ? setCurrentStep(currentStep + 1) : goResult();
    // state업데이트 안함

    // 12까지만
  };

  const goResult = () => {
    history("/result");
  };

  // 1. 원하는 state 감시
  useEffect(() => {
    console.log("current", currentStep);
    // state 변경시 실행될 실행문
    const nextQuestion = mbtiQuestionList.find(
      (item) => item.step === currentStep
    ); // undefined

    // question데이터 변경
    nextQuestion && setMbtiQuestion(nextQuestion);

    // answerData 변경
    const nextAnswer = mbtiAnswerList.find(
      (answer) => answer.questionStep === currentStep
    );
    nextAnswer && setMbtiAnswer(nextAnswer);
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
