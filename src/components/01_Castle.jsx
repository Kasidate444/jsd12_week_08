import Tower from "./02_Tower";

export default function Castle({ banana, answer, handleAnswer }) {
  // banana in func parameter is Object, {banana} in func parameter is destructuring
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
      <h1>Castle</h1>
      <Tower question={banana} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
