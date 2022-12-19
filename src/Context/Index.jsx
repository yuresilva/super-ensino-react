import { createContext } from "react";

export const INITIAL_STATE = {
  data: [
    {
      id: 1,
      materia: "portugues",
      list: [
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question: "In the Star Trek universe, what color is Vulcan blood?",
          correct: "Green",
          incorrect: ["Blue", "Red", "Purple"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Kanye West at 2009 VMA&#039;s interrupted which celebrity?",
          correct: "Taylor Swift",
          incorrect: ["MF DOOM", "Beyonce", "Beck"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Which animated movie was first to feature a celebrity as a voice actor?",
          correct: "Aladdin",
          incorrect: [
            "Toy Story",
            "James and the Giant Peach",
            "The Hunchback of Notre Dame",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question: "What is Meg&#039;s full name in &quot;Family Guy&quot;?",
          correct: "Megatron Griffin",
          incorrect: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In Game of Thrones what is the name of Jon Snow&#039;s sword?",
          correct: "Longclaw",
          incorrect: ["Oathkeeper", "Widow&#039;s Wail", "Needle"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
          correct: "Wolowizard",
          incorrect: ["Sheldor", "Rajesh", "Priya"],
        },

        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
          correct: "Look into sky and yell loudly in mourning.",
          incorrect: [
            "Kiss the jagged forehead before burial.",
            "Shoot into space in a torpedo casing.",
            "Split the deceased&#039;s earnings between bloodkin.",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "Which of these Nickelodeon game shows aired first?",
          correct: "Double Dare",
          incorrect: ["Nick Arcade", "Finders Keepers", "Nickelodeon Guts"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "What is the official name of Prince&#039;s backing band?",
          correct: "The Revolution",
          incorrect: ["The Paupers", "The Wailers", "The Heartbreakers"],
        },
      ],
    },
    {
      id: 2,
      materia: "Matematica",
      list: [
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question: "In the Star Trek universe, what color is Vulcan blood?",
          correct: "Green",
          incorrect: ["Blue", "Red", "Purple"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Kanye West at 2009 VMA&#039;s interrupted which celebrity?",
          correct: "Taylor Swift",
          incorrect: ["MF DOOM", "Beyonce", "Beck"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Which animated movie was first to feature a celebrity as a voice actor?",
          correct: "Aladdin",
          incorrect: [
            "Toy Story",
            "James and the Giant Peach",
            "The Hunchback of Notre Dame",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question: "What is Meg&#039;s full name in &quot;Family Guy&quot;?",
          correct: "Megatron Griffin",
          incorrect: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"],
        },
        {
          difficulty: "medium",
          question:
            "In Game of Thrones what is the name of Jon Snow&#039;s sword?",
          correct: "Longclaw",
          incorrect: ["Oathkeeper", "Widow&#039;s Wail", "Needle"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
          correct: "Wolowizard",
          incorrect: ["Sheldor", "Rajesh", "Priya"],
        },
        {
          difficulty: "medium",
          question: "Which of these artists do NOT originate from France?",
          correct: "The Chemical Brothers",
          incorrect: ["Air", "Justice", "Daft Punk"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
          correct: "Look into sky and yell loudly in mourning.",
          incorrect: [
            "Kiss the jagged forehead before burial.",
            "Shoot into space in a torpedo casing.",
            "Split the deceased&#039;s earnings between bloodkin.",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "Which of these Nickelodeon game shows aired first?",
          correct: "Double Dare",
          incorrect: ["Nick Arcade", "Finders Keepers", "Nickelodeon Guts"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "What is the official name of Prince&#039;s backing band?",
          correct: "The Revolution",
          incorrect: ["The Paupers", "The Wailers", "The Heartbreakers"],
        },
      ],
    },
    {
      id: 3,
      materia: "Historia",
      list: [
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question: "In the Star Trek universe, what color is Vulcan blood?",
          correct: "Green",
          incorrect: ["Blue", "Red", "Purple"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Kanye West at 2009 VMA&#039;s interrupted which celebrity?",
          correct: "Taylor Swift",
          incorrect: ["MF DOOM", "Beyonce", "Beck"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "easy",
          question:
            "Which animated movie was first to feature a celebrity as a voice actor?",
          correct: "Aladdin",
          incorrect: [
            "Toy Story",
            "James and the Giant Peach",
            "The Hunchback of Notre Dame",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question: "What is Meg&#039;s full name in &quot;Family Guy&quot;?",
          correct: "Megatron Griffin",
          incorrect: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"],
        },
        {
          difficulty: "medium",
          question:
            "In Game of Thrones what is the name of Jon Snow&#039;s sword?",
          correct: "Longclaw",
          incorrect: ["Oathkeeper", "Widow&#039;s Wail", "Needle"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
          correct: "Wolowizard",
          incorrect: ["Sheldor", "Rajesh", "Priya"],
        },
        {
          difficulty: "medium",
          question: "Which of these artists do NOT originate from France?",
          correct: "The Chemical Brothers",
          incorrect: ["Air", "Justice", "Daft Punk"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "medium",
          question:
            "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
          correct: "Look into sky and yell loudly in mourning.",
          incorrect: [
            "Kiss the jagged forehead before burial.",
            "Shoot into space in a torpedo casing.",
            "Split the deceased&#039;s earnings between bloodkin.",
          ],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "Which of these Nickelodeon game shows aired first?",
          correct: "Double Dare",
          incorrect: ["Nick Arcade", "Finders Keepers", "Nickelodeon Guts"],
        },
        {
          exerciceo: "exerciceos",
          difficulty: "hard",
          question: "What is the official name of Prince&#039;s backing band?",
          correct: "The Revolution",
          incorrect: ["The Paupers", "The Wailers", "The Heartbreakers"],
        },
      ],
    },
  ],
};

export const AppContext = createContext({
  state: INITIAL_STATE,
});
