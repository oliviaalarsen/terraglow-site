// Import React hook and image asset
import { useState } from "react";
import skincareImage from "../assets/skincare.png";

// Array of quiz questions and answer options
const quizQuestions = [
  {
    question: "How does your skin feel after cleansing?",
    options: ["Tight and dry", "Soft and balanced", "Oily and shiny"],
  },
  {
    question: "How often do you get breakouts?",
    options: ["Rarely", "Sometimes", "Often"],
  },
  {
    question: "How does your skin react to moisturizers?",
    options: [
      "Soaks it up instantly",
      "Feels good, no issues",
      "Feels greasy quickly",
    ],
  },
];

// SkinTypeQuiz component lets user answer questions and get a skin type result
export default function SkinTypeQuiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  // Handle user selecting an answer
  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  // Calculate quiz result based on user's answers
  const calculateResult = () => {
    const dryAnswers = ["Tight and dry", "Rarely", "Soaks it up instantly"];
    const oilyAnswers = ["Oily and shiny", "Often", "Feels greasy quickly"];

    let dryScore = answers.filter((a) => dryAnswers.includes(a)).length;
    let oilyScore = answers.filter((a) => oilyAnswers.includes(a)).length;

    if (dryScore > oilyScore) {
      setResult("🌿 You have Dry Skin! Hydration is your bestie ✨");
    } else if (oilyScore > dryScore) {
      setResult("💧 You have Oily Skin! Balance is key 🌱");
    } else {
      setResult("💖 You have Normal/Combination Skin! Lucky you 😍");
    }
  };

  return (
    <div className="container my-5 text-center">
      <div
        className="p-5 rounded-4 shadow"
        style={{ backgroundColor: "#fffaf5", border: "1px solid #e4dcd2" }}
      >
        <h2 className="mb-4 text-brown">discover your skin type</h2>

        <img
          src={skincareImage}
          alt="our earthen-rich products"
          className="quiz-image"
        />

        {/* Quiz questions */}
        {!result && answers.length < quizQuestions.length && (
          <div>
            <p className="mb-4 fw-semibold text-brown">
              {quizQuestions[answers.length].question}
            </p>
            <div className="d-grid gap-3">
              {quizQuestions[answers.length].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="btn btn-light border rounded-pill"
                  style={{
                    backgroundColor: "#f8eee8",
                    borderColor: "#d6c6b9",
                    color: "#6b4d3b",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Reveal result button */}
        {!result && answers.length === quizQuestions.length && (
          <button
            onClick={calculateResult}
            className="btn btn-light border rounded-pill mt-4"
            style={{
              backgroundColor: "#f8eee8",
              borderColor: "#d6c6b9",
              color: "#6b4d3b",
            }}
          >
            reveal my result ✨
          </button>
        )}

        {/* Quiz result display */}
        {result && (
          <div className="mt-4">
            <p
              className="p-4 rounded-4"
              style={{
                backgroundColor: "#f8eee8",
                color: "#6b4d3b",
                boxShadow: "inset 0 0 10px #e4dcd2",
              }}
            >
              {result}
            </p>
            {/* Restart quiz button */}
            <button
              onClick={() => {
                setAnswers([]);
                setResult(null);
              }}
              className="btn btn-light border rounded-pill mt-3"
              style={{
                backgroundColor: "#f8eee8",
                borderColor: "#d6c6b9",
                color: "#6b4d3b",
              }}
            >
              retake quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
