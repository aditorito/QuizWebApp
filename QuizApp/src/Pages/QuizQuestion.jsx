import React, { useState, useEffect } from 'react';
import axios from "axios";

export const QuizQuestion = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.allorigins.win/raw?url=${encodeURIComponent("https://api.jsonserve.com/Uw5CrX")}`
                );
                setQuestions(response.data.questions);
                console.log(response.data.questions);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleOptionSelect = (index, optionObj) => {
        console.log(optionObj);
        if (optionObj.is_correct == true) {
            setScore((score) => score + 1)            
        }
        setSelectedOption(index);
        setUserAnswers({
            ...userAnswers,
            [currentQuestionIndex]: index
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(userAnswers[currentQuestionIndex + 1] ?? null);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(userAnswers[currentQuestionIndex - 1] ?? null);
        }
    };

    // If questions haven't loaded yet, show loading state
    if (!questions || questions.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Loading questions...</div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 flex items-center justify-center p-4">
            {/* Main container */}
            <div className="relative w-full max-w-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
                {/* Floating orbs */}
                <div className="absolute bottom-12 right-8 w-8 h-8 bg-gradient-to-br from-orange-300 to-red-400 rounded-full shadow-lg"></div>
                <div className="absolute top-1/3 right-12 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"></div>

                {/* Progress bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-white mb-2">
                        <span className="font-bold">Question {currentQuestionIndex + 1}/{questions.length}</span>
                    
                        <div className="w-20 h-23 bg-blue-600/20 rounded-full border-2 border-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">Score:- {score}</span>
                </div>
                    </div>
                    <div className="w-full h-4 bg-blue-800/30 rounded-full">
                        <div
                            className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question */}
                <div className="bg-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white/20">
                    <h2 className="text-3xl font-bold text-white text-center mb-2">
                        {currentQuestion.description}
                    </h2>
                </div>

                {/* Options */}
                {currentQuestion.options.map((optionObj, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionSelect(index, optionObj)}
                        className={`
            w-full p-6
            ${selectedOption === index
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 border-white'
                                : 'bg-white/10 hover:bg-white/20 border-white/20'}
                                
            rounded-2xl
            text-white text-xl font-semibold
            transition-all duration-300
            border-2
            backdrop-blur-sm
            shadow-lg hover:shadow-xl
            relative
            overflow-hidden
        `}
                    >
                        <span className="absolute left-4 opacity-50">
                            {String.fromCharCode(65 + index)}.
                        </span>
                        <span  className="ml-8">{optionObj.description}</span>
                    </button>
                ))}


                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className={`
                            px-8 py-3
                            bg-gradient-to-br from-pink-400 to-purple-600
                            hover:from-pink-500 hover:to-purple-700
                            text-white text-lg font-bold
                            rounded-full
                            shadow-lg shadow-purple-600/50
                            hover:shadow-xl
                            border-2 border-white/20
                            ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className={`
                            px-8 py-3
                            bg-gradient-to-br from-blue-400 to-blue-600
                            hover:from-blue-500 hover:to-blue-700
                            text-white text-lg font-bold
                            rounded-full
                            shadow-lg shadow-blue-600/50
                            hover:shadow-xl
                            border-2 border-white/20
                            ${currentQuestionIndex === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        Next
                    </button>
                </div>

                {/* Score indicator */}

            </div>
        </div>
    );
}