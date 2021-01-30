import React, { createContext, useReducer, useContext } from "react";

const QuestionContext = createContext({
  flag: "",
  choice1: "",
  choice2: "",
  choice3: "",
  choice4: "",
  choice5: "",
  correctChoice: "",
  lastAnswer: "",
  loading: true,
  citiesArray: [],
  userScore: 0,
  questionCount: 0,
  timeLeft: 60,
  gameOver: false,
  userName: "",
  isAuthenticated: false,
  userId: "",
  firstRun: true,
  scores: [],
});

const { Provider } = QuestionContext;

function reducer(state, action) {

  switch (action.type) {
    case "loadCities":
      return {
        ...state,
        loading: false,
        citiesArray: action.citiesArray,
        firstRun: false
      };

    case "setQuestion":
      return {
        ...state,
        correctChoice: action.correctChoice,
        choice1: action.countryChoices[0],
        choice2: action.countryChoices[1],
        choice3: action.countryChoices[2],
        choice4: action.countryChoices[3],
        choice5: action.countryChoices[4],
        loading: false,
        flag: action.flag,
        userScore: action.userScore,
        questionCount: action.questionCount + 1
      };

    case "loading":
      return {
        ...state,
        loading: true
      };

    case "logOut":
      return {
        ...state,
        isAuthenticated: false
      };

    case "playAgain":
      return {
        ...state,
        loading: false,
        gameOver: false,
        questionCount: 0,
        userScore: 0,
        timeLeft: 60,
        firstRun: true,
      };

    case "updateTime":
      return {
        ...state,
        timeLeft: action.timeLeft
      };
    case "gameOver":
      return {
        ...state,
        gameOver: true
      };
    case "setUsername":
      return {
        ...state,
        userName: action.name,
        isAuthenticated: true,
        userId: action.id
      };

    case "loadScores":
      return {
        ...state,
        scores: action.scores,
        loading: false,
      };

    default:
      return state;
  }
}

function QuestionProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    flag: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    loading: true,
    citiesArray: [],
    correctChoice: "",
    lastAnswer: "",
    userScore: 0,
    questionCount: 0,
    timeLeft: 60,
    gameOver: false,
    userName: "",
    isAuthenticated: false,
    userId: "",
    firstRun: true,
    scores: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

const useQuestionContext = () => {
  return useContext(QuestionContext);
}

export { QuestionProvider, useQuestionContext };
