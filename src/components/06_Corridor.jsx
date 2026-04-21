import Gallery from "./07_Gallery";

export default function Corridor({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-purple-600 w-[90%]">
      <h1>Corridor</h1>
      {/* {question ? question : "Waiting for a message ..."} */}
      {/* Gallery */}
      <Gallery
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
