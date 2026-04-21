import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // State Variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for JSD12:{" "}
        <span className="text-yellow-300">
          {/* question or waiting for a message */}
          {/* {} using like <div></div> in html file */}
          {question ? question : "Waiting for a message ..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:{" "}
        <span className="text-yellow-300">
          {/* answer or waiting for a reply */}
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
      <Castle banana={question} answer={answer} handleAnswer={handleAnswer} />
      {/* sent props{question} to new object in castle file not call banana */}
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="min-h-screen flex justify-center bg-blue-950">
//       <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
//         <h1 className="w-full p-6 bg-amber-100 font-extrabold">
//           React App Starter
//         </h1>
//         <section className="w-full p-5 bg-amber-100 flex">
//           <ul className="list-inside list-disc flex-1">
//             <span className="font-semibold">Tech Stack:</span>
//             <li>Vite</li>
//             <li>React</li>
//             <li>JavaScript</li>
//             <li>Tailwind</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }
