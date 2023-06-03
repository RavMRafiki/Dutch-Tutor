import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Level from "./Level";
import LevelEnd from "./LevelEnd";
import LevelChoose from "./LevelChoose";
interface IQuestion {
  typeofquest: string;
  question: string;
  sentence: string;
  words: string[];
  correct: string[];
}
interface IQuiz {
  quizname: string;
  questions: IQuestion[];
}

const Questions: IQuiz[] = [
  {
    quizname: "First Quiz",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik heb een koe",
        words: ["I", "have", "am", "tomato", "cow", "a"],
        correct: ["I", "have", "a", "cow"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "They throw cabbage",
        words: ["Ze", "ga", "aardappel", "gooien", "kool"],
        correct: ["Ze", "gooien", "kool"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to english",
        sentence: "Ik ben geen tomaat",
        words: ["friend", "I", "am", "coconut", "a", "tomato", "not"],
        correct: ["I", "am", "not", "a", "tomato"],
      },
    ],
  },
  {
    quizname: "Quiz A1",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik ben een student",
        words: ["I", "have", "am", "tomato", "student", "a"],
        correct: ["I", "am", "a", "student"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I like pizza",
        words: ["van", "Ik", "am", "houd", "a", "tomato", "woon", "pizza"],
        correct: ["Ik", "houd", "van", "pizza"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Mijn naam is Anna",
        words: ["Anna", "My", "am", "name", "good", "student", "is"],
        correct: ["My", "name", "is", "Anna"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik woon in Nederland",
        words: [
          "in",
          "live",
          "the",
          "name",
          "good",
          "work",
          "come",
          "from",
          "I",
          "is",
          "Netherlands",
        ],
        correct: ["I", "live", "in", "the", "Netherlands"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I speak a little Dutch",
        words: [
          "van",
          "Ik",
          "spreek",
          "beetje",
          "a",
          "tomato",
          "een",
          "woon",
          "Nederlands",
        ],
        correct: ["Ik", "spreek", "een", "beetje", "Nederlands"],
      },
    ],
  },
  {
    quizname: "Quiz A2",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik werk als een receptionist in een hotel",
        words: [
          "hotel",
          "like",
          "as",
          "in",
          "sleep",
          "receptionist",
          "a",
          "I",
          "You",
          "a",
          "work",
        ],
        correct: ["I", "work", "as", "a", "receptionist", "in", "a", "hotel"],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "In mijn vrije tijd ga ik graag naar de bioscoop",
        words: [
          "I",
          "free",
          "my",
          "going",
          "receptionist",
          "In",
          "koekjes",
          "time",
          "the",
          "You",
          "to",
          "hotel",
          "enjoy",
          "cinema",
        ],
        correct: [
          "In",
          "my",
          "free",
          "time",
          "I",
          "enjoy",
          "going",
          "to",
          "the",
          "cinema",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "My favorite holiday destination is Spain",
        words: [
          "favoriete",
          "graag",
          "Mijn",
          "tijd",
          "Spanje",
          "vakantiebestemming",
          "is",
        ],
        correct: ["Mijn", "favoriete", "vakantiebestemming", "is", "Spanje"],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence: "I have a cat as a pet. Her name is Mimi",
        words: [
          "vakantiebestemming",
          "huisdier",
          "kat",
          "naam",
          "heb",
          "werk",
          "Mimi",
          "is",
          "Haar",
          "graag",
          "een",
          "als",
          "Ik",
        ],
        correct: [
          "Ik",
          "heb",
          "een",
          "kat",
          "als",
          "huisdier",
          "Haar",
          "naam",
          "is",
          "Mimi",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "Today, I'm going grocery shopping and then cooking for dinner",
        words: [
          "huisdier",
          "voor",
          "daarna",
          "ik",
          "ga",
          "het",
          "boodschappen",
          "Vandaag",
          "avondeten",
          "een",
          "en",
          "koken",
          "Mimi",
          "doen",
        ],
        correct: [
          "Vandaag",
          "ga",
          "ik",
          "boodschappen",
          "doen",
          "en",
          "daarna",
          "koken",
          "voor",
          "het",
          "avondeten",
        ],
      },
    ],
  },
  {
    quizname: "Quiz B1",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence: "Ik heb mijn rijbewijs gehaald en nu kan ik zelf autorijden",
        words: [
          "I",
          "going",
          "and",
          "time",
          "obtained",
          "to",
          "I",
          "free",
          "by",
          "can",
          "have",
          "my",
          "In",
          "enjoy",
          "driver's",
          "drive",
          "now",
          "my",
          "myself",
          "license",
          "the",
        ],
        correct: [
          "I",
          "have",
          "obtained",
          "my",
          "driver's",
          "license",
          "and",
          "now",
          "I",
          "can",
          "drive",
          "by",
          "myself",
        ],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "Gisteren heb ik een interessante documentaire over de geschiedenis van Nederland gekeken",
        words: [
          "obtained",
          "history",
          "an",
          "documentary",
          "the",
          "about",
          "myself",
          "interesting",
          "of",
          "the",
          "I",
          "Yesterday",
          "my",
          "Netherlands",
          "watched",
        ],
        correct: [
          "Yesterday",
          "I",
          "watched",
          "an",
          "interesting",
          "documentary",
          "about",
          "the",
          "history",
          "of",
          "the",
          "Netherlands",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "I am planning to go on vacation to France this summer. I would like to experience the beautiful beaches and the French cuisine.",
        words: [
          "zomer",
          "plan",
          "naar",
          "deze",
          "gaan",
          "ervaren",
          "op",
          "Franse",
          "stranden",
          "de",
          "Ik",
          "wil",
          "keuken",
          "en",
          "te",
          "vakantie",
          "de",
          "ben",
          "om",
          "graag",
          "van",
          "prachtige",
          "Ik",
          "Frankrijk",
        ],
        correct: [
          "Ik",
          "ben",
          "van",
          "plan",
          "om",
          "deze",
          "zomer",
          "op",
          "vakantie",
          "te",
          "gaan",
          "naar",
          "Frankrijk",
          "Ik",
          "wil",
          "graag",
          "de",
          "prachtige",
          "stranden",
          "en",
          "de",
          "Franse",
          "keuken",
          "ervaren",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "I love reading. Currently, I am reading an exciting thriller.",
        words: [
          "prachtige",
          "Ik",
          "spannende",
          "moment",
          "lees",
          "ik",
          "op",
          "keuken",
          "dol",
          "ben",
          "dit",
          "thriller",
          "lezen",
          "Op",
          "ervaren",
          "een",
        ],
        correct: [
          "Ik",
          "ben",
          "dol",
          "op",
          "lezen",
          "Op",
          "dit",
          "moment",
          "lees",
          "ik",
          "een",
          "spannende",
          "thriller",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "Last weekend, I went hiking in the forest with friends. We enjoyed the fresh air and the beautiful nature",
        words: [
          "weekend",
          "de",
          "mooie",
          "en",
          "We",
          "de",
          "hebben",
          "ik",
          "met",
          "natuur",
          "van",
          "gaan",
          "ben",
          "bos",
          "het",
          "in",
          "frisse",
          "Afgelopen",
          "wandelen",
          "genoten",
          "lucht",
          "vrienden",
        ],
        correct: [
          "Afgelopen",
          "weekend",
          "ben",
          "ik",
          "met",
          "vrienden",
          "gaan",
          "wandelen",
          "in",
          "het",
          "bos",
          "We",
          "hebben",
          "genoten",
          "van",
          "de",
          "frisse",
          "lucht",
          "en",
          "de",
          "mooie",
          "natuur",
        ],
      },
    ],
  },
  {
    quizname: "Quiz B2",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "De economie groeit gestaag, wat positieve vooruitzichten biedt voor de werkgelegenheid",
        words: [
          "obtained",
          "which",
          "employment",
          "steadily",
          "is",
          "prospects",
          "free",
          "growing",
          "for",
          "economy",
          "The",
          "provides",
          "license",
          "positive",
        ],
        correct: [
          "The",
          "economy",
          "is",
          "growing",
          "steadily",
          "which",
          "provides",
          "positive",
          "prospects",
          "for",
          "employment",
        ],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "Het is van belang om regelmatig te blijven sporten en een gezonde levensstijl te behouden",
        words: [
          "employment",
          "important",
          "exercise",
          "is",
          "prospects",
          "healthy",
          "is",
          "to",
          "a",
          "lifestyle",
          "regularly",
          "and",
          "maintain",
          "It",
          "steadily",
        ],
        correct: [
          "It",
          "is",
          "important",
          "to",
          "exercise",
          "regularly",
          "and",
          "maintain",
          "a",
          "healthy",
          "lifestyle",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "I plan to take a language course soon to improve my speaking skills",
        words: [
          "lucht",
          "plan",
          "frisse",
          "Ik",
          "taalcursus",
          "genoten",
          "te",
          "volgen",
          "om",
          "van",
          "een",
          "ben",
          "binnenkort",
          "om",
          "spreekvaardigheid",
          "vrienden",
          "mijn",
          "Afgelopen",
          "wandelen",
          "te",
          "verbeteren",
        ],
        correct: [
          "Ik",
          "ben",
          "van",
          "plan",
          "om",
          "binnenkort",
          "een",
          "taalcursus",
          "te",
          "volgen",
          "om",
          "mijn",
          "spreekvaardigheid",
          "te",
          "verbeteren",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "It is crucial to be mindful of the environment and make sustainable choices in our daily lives",
        words: [
          "gaan",
          "is",
          "in",
          "duurzame",
          "keuzes",
          "lucht",
          "bewust",
          "met",
          "plan",
          "te",
          "frisse",
          "om",
          "om",
          "dagelijks",
          "ons",
          "milieu",
          "cruciaal",
          "te",
          "maken",
          "Het",
          "leven",
          "en",
          "het",
        ],
        correct: [
          "Het",
          "is",
          "cruciaal",
          "om",
          "bewust",
          "om",
          "te",
          "gaan",
          "met",
          "het",
          "milieu",
          "en",
          "duurzame",
          "keuzes",
          "te",
          "maken",
          "in",
          "ons",
          "dagelijks",
          "leven",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "I am interested in art and regularly visit exhibitions and museums to expand my knowledge and appreciation",
        words: [
          "regelmatig",
          "waardering",
          "en",
          "en",
          "lucht",
          "in",
          "vergroten",
          "gaan",
          "kennis",
          "ben",
          "duurzame",
          "keuzes",
          "geïnteresseerd",
          "musea",
          "en",
          "tentoonstellingen",
          "Ik",
          "om",
          "te",
          "kunst",
          "mijn",
          "bezoek",
        ],
        correct: [
          "Ik",
          "ben",
          "geïnteresseerd",
          "in",
          "kunst",
          "en",
          "bezoek",
          "regelmatig",
          "tentoonstellingen",
          "en",
          "musea",
          "om",
          "mijn",
          "kennis",
          "en",
          "waardering",
          "te",
          "vergroten",
        ],
      },
    ],
  },
  {
    quizname: "Quiz C1",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "De wetenschappelijke gemeenschap heeft een belangrijke doorbraak bereikt in het onderzoek naar klimaatverandering.",
        words: [
          "artist",
          "my",
          "breakthrough",
          "going",
          "achieved",
          "research",
          "receptionist",
          "climate",
          "The",
          "a",
          "in",
          "scientific",
          "has",
          "change",
          "significant",
          "community",
        ],
        correct: [
          "The",
          "scientific",
          "community",
          "has",
          "achieved",
          "a",
          "significant",
          "breakthrough",
          "in",
          "climate",
          "change",
          "research",
        ],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "Het is essentieel dat we ons bewust zijn van de impact van sociale media op onze samenleving en actief werken aan het bevorderen van digitale geletterdheid",
        words: [
          "our",
          "of",
          "hotel",
          "is",
          "media",
          "It",
          "cinema",
          "the",
          "actively",
          "essential",
          "promote",
          "social",
          "we",
          "to",
          "are",
          "aware",
          "work",
          "enjoy",
          "of",
          "digital",
          "and",
          "literacy",
          "society",
          "impact",
          "on",
          "that",
        ],
        correct: [
          "It",
          "is",
          "essential",
          "that",
          "we",
          "are",
          "aware",
          "of",
          "the",
          "impact",
          "of",
          "social",
          "media",
          "on",
          "our",
          "society",
          "and",
          "actively",
          "work",
          "to",
          "promote",
          "digital",
          "literacy",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "It is crucial that the government invests in sustainable energy sources to reduce greenhouse gas emissions",
        words: [
          "tijd",
          "broeikasgassen",
          "Spanje",
          "de",
          "de",
          "dat",
          "verminderen",
          "groot",
          "om",
          "is",
          "uitstoot",
          "in",
          "Het",
          "van",
          "te",
          "overheid",
          "duurzame",
          "vakantiebestemming",
          "van",
          "energiebronnen",
          "investeert",
          "belang",
        ],
        correct: [
          "Het",
          "is",
          "van",
          "groot",
          "belang",
          "dat",
          "de",
          "overheid",
          "investeert",
          "in",
          "duurzame",
          "energiebronnen",
          "om",
          "de",
          "uitstoot",
          "van",
          "broeikasgassen",
          "te",
          "verminderen",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "Finding a balance between economic growth and preserving the natural resources that are essential for our well-being is a challenge",
        words: [
          "de",
          "is",
          "tussen",
          "economische",
          "het",
          "Het",
          "en",
          "van",
          "de",
          "hulpbronnen",
          "essentieel",
          "welzijn",
          "kat",
          "te",
          "uitdaging",
          "een",
          "behoud",
          "voor",
          "balans",
          "ons",
          "vinden",
          "die",
          "om",
          "vakantiebestemming",
          "huisdier",
          "groei",
          "natuurlijke",
          "zijn",
        ],
        correct: [
          "Het",
          "is",
          "een",
          "uitdaging",
          "om",
          "de",
          "balans",
          "te",
          "vinden",
          "tussen",
          "economische",
          "groei",
          "en",
          "het",
          "behoud",
          "van",
          "de",
          "natuurlijke",
          "hulpbronnen",
          "die",
          "essentieel",
          "zijn",
          "voor",
          "ons",
          "welzijn",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "In a rapidly changing world, it is necessary that we remain flexible and continue to learn to adapt to new technologies and developments",
        words: [
          "te",
          "en",
          "nieuwe",
          "aan",
          "snel",
          "ontwikkelingen",
          "flexibel",
          "is",
          "en",
          "boodschappen",
          "om",
          "technologieën",
          "avondeten",
          "noodzakelijk",
          "wereld",
          "zijn",
          "we",
          "In",
          "ons",
          "het",
          "veranderende",
          "dat",
          "leren",
          "passen",
          "aan",
          "een",
          "blijven",
          "Vandaag",
        ],
        correct: [
          "In",
          "een",
          "snel",
          "veranderende",
          "wereld",
          "is",
          "het",
          "noodzakelijk",
          "dat",
          "we",
          "flexibel",
          "zijn",
          "en",
          "blijven",
          "leren",
          "om",
          "ons",
          "aan",
          "te",
          "passen",
          "aan",
          "nieuwe",
          "technologieën",
          "en",
          "ontwikkelingen",
        ],
      },
    ],
  },
  {
    quizname: "Quiz C2",
    questions: [
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "De auteur schetste een meesterlijk portret van de menselijke conditionering en de complexiteit van menselijke relaties in zijn nieuwste roman",
        words: [
          "his",
          "of",
          "a",
          "and",
          "novel",
          "in",
          "The",
          "human",
          "the",
          "climate",
          "portrait",
          "receptionist",
          "latest",
          "conditioning",
          "complexity",
          "author",
          "relationships",
          "human",
          "masterful",
          "research",
          "painted",
          "of",
        ],
        correct: [
          "The",
          "author",
          "painted",
          "a",
          "masterful",
          "portrait",
          "of",
          "human",
          "conditioning",
          "and",
          "the",
          "complexity",
          "of",
          "human",
          "relationships",
          "in",
          "his",
          "latest",
          "novel",
        ],
      },
      {
        typeofquest: "translate",
        question: "Translate sentence to english",
        sentence:
          "De spreker hanteerde een verfijnde retorische stijl en bracht zijn argumenten op overtuigende wijze over aan het publiek",
        words: [
          "literacy",
          "and",
          "effectively",
          "a",
          "sophisticated",
          "rhetorical",
          "society",
          "employed",
          "and",
          "arguments",
          "the",
          "audience",
          "style",
          "their",
          "to",
          "impact",
          "conveyed",
          "speaker",
          "The",
        ],
        correct: [
          "The",
          "speaker",
          "employed",
          "a",
          "sophisticated",
          "rhetorical",
          "style",
          "and",
          "effectively",
          "conveyed",
          "their",
          "arguments",
          "to",
          "the",
          "audience",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "The film director succeeded in creating an immersive visual experience through the use of innovative camerawork and breathtaking cinematography",
        words: [
          "door",
          "visuele",
          "ervaring",
          "en",
          "filmregisseur",
          "erin",
          "slaagde",
          "om",
          "gebruik",
          "creëren",
          "adembenemende",
          "maken",
          "overheid",
          "innovatieve",
          "te",
          "cinematografie",
          "te",
          "duurzame",
          "van",
          "meeslepende",
          "De",
          "cameravoering",
          "vakantiebestemming",
          "een",
        ],
        correct: [
          "De",
          "filmregisseur",
          "slaagde",
          "erin",
          "om",
          "een",
          "meeslepende",
          "visuele",
          "ervaring",
          "te",
          "creëren",
          "door",
          "gebruik",
          "te",
          "maken",
          "van",
          "innovatieve",
          "cameravoering",
          "en",
          "adembenemende",
          "cinematografie",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "The orchestra delivered an impressive performance of the symphonic masterpiece and captivated the audience with their virtuosity",
        words: [
          "meesterwerk",
          "bracht",
          "orkest",
          "publiek",
          "met",
          "betoveren",
          "huisdier",
          "symfonische",
          "een",
          "vakantiebestemming",
          "indrukwekkende",
          "van",
          "hun",
          "natuurlijke",
          "en",
          "het",
          "het",
          "te",
          "uitvoering",
          "wist",
          "groei",
          "virtuositeit",
          "Het",
        ],
        correct: [
          "Het",
          "orkest",
          "bracht",
          "een",
          "indrukwekkende",
          "uitvoering",
          "van",
          "het",
          "symfonische",
          "meesterwerk",
          "en",
          "wist",
          "het",
          "publiek",
          "te",
          "betoveren",
          "met",
          "hun",
          "virtuositeit",
        ],
      },
      {
        typeofquest: "translate back",
        question: "Translate sentence to dutch",
        sentence:
          "The scientific publication was praised for its groundbreaking research methodology and the relevance of the findings to the field",
        words: [
          "De",
          "en",
          "het",
          "vanwege",
          "de",
          "voor",
          "de",
          "Vandaag",
          "blijven",
          "bevindingen",
          "vakgebied",
          "geprezen",
          "aan",
          "onderzoeksmethodologie",
          "publicatie",
          "wetenschappelijke",
          "relevantie",
          "werd",
          "een",
          "zijn",
          "van",
          "passen",
          "baanbrekende",
        ],
        correct: [
          "De",
          "wetenschappelijke",
          "publicatie",
          "werd",
          "geprezen",
          "vanwege",
          "zijn",
          "baanbrekende",
          "onderzoeksmethodologie",
          "en",
          "de",
          "relevantie",
          "van",
          "de",
          "bevindingen",
          "voor",
          "het",
          "vakgebied",
        ],
      },
    ],
  },
];
const quiznames: string[] = Questions.map((el) => el.quizname);
enum IGameState {
  Started,
  Finished,
  StartMenu,
}
function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [gameState, setGameState] = useState<IGameState>(IGameState.StartMenu);
  const [gameResets, setGameResets] = useState<number>(0);
  const [finishedQuizName, setFinishedQuizName] = useState<string>("QuizName");
  const [finishedQuizScore, setFinishedQuizScore] = useState<number>(0);
  const [finishedQuizMaxScore, setFinishedQuizMaxScore] = useState<number>(0);
  function handleBackToMenu() {
    setGameState(IGameState.StartMenu);
  }
  function handleGameEnd(score: number, maxscore: number, name: string): void {
    setFinishedQuizName(name);
    setFinishedQuizScore(score);
    setFinishedQuizMaxScore(maxscore);
    setGameState(IGameState.Finished);
  }
  function handleGameStart(index: number): void {
    setCurrentQuestion(index);
    setGameState(IGameState.Started);
  }
  function handleGameReset(): void {
    setGameResets((prev) => (prev += 1));
  }
  return (
    <div className="h-screen">
      <Navbar handleGameReset={() => handleGameReset()} />
      {gameState == IGameState.Started ? (
        <Level
          handleLevelEnd={(score: number, maxscore: number, name: string) =>
            handleGameEnd(score, maxscore, name)
          }
          currentQuiz={Questions[currentQuestion]}
          quizname={quiznames[currentQuestion]}
          key={gameResets}
        />
      ) : gameState === IGameState.Finished ? (
        <LevelEnd
          handleGoToMenu={() => handleBackToMenu()}
          name={finishedQuizName}
          score={finishedQuizScore}
          maxScore={finishedQuizMaxScore}
        />
      ) : (
        <LevelChoose levelNames={quiznames} handleChoose={handleGameStart} />
      )}
    </div>
  );
}

export default App;
