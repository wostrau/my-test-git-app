import React, { useState } from 'react'

import './App.css'
import { QUESTIONS } from './context/questions'
import { useQuizSettings } from './context/QuizSettingsContext'
import { AppHeader } from './components/AppHeader'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { QuizScreen } from './screens/QuizScreen'
import { ResultScreen } from './screens/ResultScreen'

export const App = () => {
  const { quizSettings, resetQuizSettings } = useQuizSettings()

  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [timeElapsed, setTimeElapsed] = useState(0)

  const [isSet, setIsSet] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  const handleStartQuiz = () => {
    const shuffledQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5)

    setSelectedQuestions(shuffledQuestions)
    setTimeElapsed(0)

    setIsSet(true)
    setIsEnded(false)
  }

  const handleEndQuiz = (answers, elapsedTime) => {
    setSelectedAnswers(answers)
    setTimeElapsed(elapsedTime)

    setIsEnded(true)
  }

  const handleRestartQuiz = () => {
    setSelectedAnswers([])
    setTimeElapsed(0)

    setIsEnded(false)
  }

  const handleChooseAnotherQuiz = () => {
    resetQuizSettings()

    setSelectedAnswers([])
    setTimeElapsed(0)

    setIsSet(false)
    setIsEnded(false)
  }

  return (
    <>
      <AppHeader />
      <div id="screens">
        {!isSet && !isEnded ? (
          <WelcomeScreen onStartQuiz={handleStartQuiz} />
        ) : isSet && !isEnded ? (
          <QuizScreen
            onEndQuiz={handleEndQuiz}
            questions={selectedQuestions}
            totalTime={quizSettings.time}
          />
        ) : (
          <ResultScreen
            correctAnswersCount={selectedAnswers.length}
            totalQuestions={selectedQuestions.length}
            timeElapsed={timeElapsed}
            onRestart={handleRestartQuiz}
            onChooseAnother={handleChooseAnotherQuiz}
            {...quizSettings}
          />
        )}
      </div>
    </>
  )
}
