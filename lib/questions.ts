export type Dimension = "EI" | "SN" | "TF" | "JP";
export type Value = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Option {
  text: string;
  value: Value;
}

export interface Question {
  id: number;
  dimension: Dimension;
  prompt: string;
  options: [Option, Option];
}


export const questions: Question[] = [
  // ======================
  // E vs I (0–9)
  // ======================
  {
    id: 1,
    dimension: "EI",
    prompt:
      "You walk into a gathering where you know only one person. They’re busy talking to someone else. You:",
    options: [
      { text: "Start introducing yourself to new people", value: "E" },
      { text: "Stay nearby and wait for a natural opening", value: "I" },
    ],
  },
  {
    id: 2,
    dimension: "EI",
    prompt:
      "After a really good but long day with people, you get home. Your instinct is to:",
    options: [
      { text: "Call/message someone and keep the energy going", value: "E" },
      { text: "Sit quietly and decompress before anything else", value: "I" },
    ],
  },
  {
    id: 3,
    dimension: "EI",
    prompt:
      "You have an idea you're excited about. You:",
    options: [
      { text: "Immediately tell someone and build on it together", value: "E" },
      { text: "Let it sit and develop it in your head first", value: "I" },
    ],
  },
  {
    id: 4,
    dimension: "EI",
    prompt:
      "In a group project, discussions are slow and quiet. You:",
    options: [
      { text: "Jump in to get things moving", value: "E" },
      { text: "Wait and speak when fully formed thoughts are ready", value: "I" },
    ],
  },
  {
    id: 5,
    dimension: "EI",
    prompt:
      "Someone invites you out last minute after you planned a quiet evening. You:",
    options: [
      { text: "Often go anyway", value: "E" },
      { text: "Prefer sticking to your plan", value: "I" },
    ],
  },
  {
    id: 6,
    dimension: "EI",
    prompt:
      "During conversations, you notice you:",
    options: [
      { text: "Think while speaking", value: "E" },
      { text: "Think before speaking", value: "I" },
    ],
  },
  {
    id: 7,
    dimension: "EI",
    prompt:
      "You’re at an event with high chaotic energy. You:",
    options: [
      { text: "Feed off it and get more involved", value: "E" },
      { text: "Step back and observe from the edges", value: "I" },
    ],
  },
  {
    id: 8,
    dimension: "EI",
    prompt:
      "When you're stressed, you’re more likely to:",
    options: [
      { text: "Reach out and talk it out", value: "E" },
      { text: "Process it internally first", value: "I" },
    ],
  },
  {
    id: 9,
    dimension: "EI",
    prompt:
      "A friend says, 'let’s meet new people today.' Your reaction:",
    options: [
      { text: "Sounds fun, let’s do it", value: "E" },
      { text: "Depends, but feels tiring", value: "I" },
    ],
  },
  {
    id: 10,
    dimension: "EI",
    prompt:
      "You feel most like yourself when:",
    options: [
      { text: "Engaging actively with others", value: "E" },
      { text: "Having space in your own head", value: "I" },
    ],
  },

  // ======================
  // S vs N (10–19)
  // ======================
  {
    id: 11,
    dimension: "SN",
    prompt:
      "You’re given a task with vague instructions. You:",
    options: [
      { text: "Ask for clarification and specifics", value: "S" },
      { text: "Start exploring possible directions", value: "N" },
    ],
  },
  {
    id: 12,
    dimension: "SN",
    prompt:
      "While listening to someone explain something, you:",
    options: [
      { text: "Focus on exact details and facts", value: "S" },
      { text: "Drift into ideas and possibilities", value: "N" },
    ],
  },
  {
    id: 13,
    dimension: "SN",
    prompt:
      "When learning something new, you prefer:",
    options: [
      { text: "Clear examples and real use-cases", value: "S" },
      { text: "Underlying concepts and patterns", value: "N" },
    ],
  },
  {
    id: 14,
    dimension: "SN",
    prompt:
      "You’re told about a new opportunity. You:",
    options: [
      { text: "Ask what it involves exactly", value: "S" },
      { text: "Think about what it could become", value: "N" },
    ],
  },
  {
    id: 15,
    dimension: "SN",
    prompt:
      "You’re working on a project. You:",
    options: [
      { text: "Focus on completing each step", value: "S" },
      { text: "Think about how it all connects", value: "N" },
    ],
  },
  {
    id: 16,
    dimension: "SN",
    prompt:
      "In conversations, you’re drawn to:",
    options: [
      { text: "What actually happened", value: "S" },
      { text: "What it might mean or lead to", value: "N" },
    ],
  },
  {
    id: 17,
    dimension: "SN",
    prompt:
      "When reading something interesting, you remember:",
    options: [
      { text: "Specific points", value: "S" },
      { text: "Overall idea or vibe", value: "N" },
    ],
  },
  {
    id: 18,
    dimension: "SN",
    prompt:
      "When solving problems, you:",
    options: [
      { text: "Use what has worked before", value: "S" },
      { text: "Try unconventional approaches", value: "N" },
    ],
  },
  {
    id: 19,
    dimension: "SN",
    prompt:
      "Your mind often:",
    options: [
      { text: "Stays grounded in the present", value: "S" },
      { text: "Jumps to future possibilities", value: "N" },
    ],
  },
  {
    id: 20,
    dimension: "SN",
    prompt:
      "When deciding something, you rely on:",
    options: [
      { text: "Experience", value: "S" },
      { text: "Intuition", value: "N" },
    ],
  },

  // ======================
  // T vs F (20–29)
  // ======================
  {
    id: 21,
    dimension: "TF",
    prompt:
      "A friend asks for honest feedback on something they made, but it’s not great. You:",
    options: [
      { text: "Tell them directly what needs improvement", value: "T" },
      { text: "Soften it to avoid hurting them", value: "F" },
    ],
  },
  {
    id: 22,
    dimension: "TF",
    prompt:
      "In a disagreement where you're right but the other person is upset, you:",
    options: [
      { text: "Stick to your point", value: "T" },
      { text: "Preserve the relationship", value: "F" },
    ],
  },
  {
    id: 23,
    dimension: "TF",
    prompt:
      "You choose between logic vs feeling. You lean toward:",
    options: [
      { text: "Logic", value: "T" },
      { text: "Feeling", value: "F" },
    ],
  },
  {
    id: 24,
    dimension: "TF",
    prompt:
      "Someone makes a mistake affecting the team. You:",
    options: [
      { text: "Fix the issue and prevent it", value: "T" },
      { text: "Consider how they feel first", value: "F" },
    ],
  },
  {
    id: 25,
    dimension: "TF",
    prompt:
      "You respect people more for:",
    options: [
      { text: "Competence", value: "T" },
      { text: "Kindness", value: "F" },
    ],
  },
  {
    id: 26,
    dimension: "TF",
    prompt:
      "In debates, you:",
    options: [
      { text: "Enjoy analyzing arguments", value: "T" },
      { text: "Notice emotional impact", value: "F" },
    ],
  },
  {
    id: 27,
    dimension: "TF",
    prompt:
      "When making tough decisions, you:",
    options: [
      { text: "Detach emotionally", value: "T" },
      { text: "Feel personal impact deeply", value: "F" },
    ],
  },
  {
    id: 28,
    dimension: "TF",
    prompt:
      "You feel more uncomfortable when:",
    options: [
      { text: "Something doesn’t make sense", value: "T" },
      { text: "Someone feels excluded", value: "F" },
    ],
  },
  {
    id: 29,
    dimension: "TF",
    prompt:
      "You tend to prioritize:",
    options: [
      { text: "Fair rules for all", value: "T" },
      { text: "Context and understanding", value: "F" },
    ],
  },
  {
    id: 30,
    dimension: "TF",
    prompt:
      "When someone vents to you, you:",
    options: [
      { text: "Offer solutions", value: "T" },
      { text: "Offer empathy first", value: "F" },
    ],
  },

  // ======================
  // J vs P (30–39)
  // ======================
  {
    id: 31,
    dimension: "JP",
    prompt:
      "You have a free day with no plans. You:",
    options: [
      { text: "Structure it", value: "J" },
      { text: "Let it unfold naturally", value: "P" },
    ],
  },
  {
    id: 32,
    dimension: "JP",
    prompt:
      "A deadline is two weeks away. You:",
    options: [
      { text: "Start early", value: "J" },
      { text: "Work closer to deadline", value: "P" },
    ],
  },
  {
    id: 33,
    dimension: "JP",
    prompt:
      "Plans suddenly change. You:",
    options: [
      { text: "Feel thrown off", value: "J" },
      { text: "Adapt easily", value: "P" },
    ],
  },
  {
    id: 34,
    dimension: "JP",
    prompt:
      "When packing for a trip, you:",
    options: [
      { text: "Prepare everything in advance", value: "J" },
      { text: "Pack last minute", value: "P" },
    ],
  },
  {
    id: 35,
    dimension: "JP",
    prompt:
      "You feel better when:",
    options: [
      { text: "Things are decided", value: "J" },
      { text: "Options remain open", value: "P" },
    ],
  },
  {
    id: 36,
    dimension: "JP",
    prompt:
      "You approach goals by:",
    options: [
      { text: "Breaking into steps", value: "J" },
      { text: "Figuring out as you go", value: "P" },
    ],
  },
  {
    id: 37,
    dimension: "JP",
    prompt:
      "Your workspace tends to be:",
    options: [
      { text: "Organized", value: "J" },
      { text: "Messy but functional", value: "P" },
    ],
  },
  {
    id: 38,
    dimension: "JP",
    prompt:
      "You prefer:",
    options: [
      { text: "Knowing what’s coming", value: "J" },
      { text: "Being surprised", value: "P" },
    ],
  },
  {
    id: 39,
    dimension: "JP",
    prompt:
      "When working, you:",
    options: [
      { text: "Finish before moving on", value: "J" },
      { text: "Jump between tasks", value: "P" },
    ],
  },
  {
    id: 40,
    dimension: "JP",
    prompt:
      "You see plans as:",
    options: [
      { text: "Commitments", value: "J" },
      { text: "Suggestions", value: "P" },
    ],
  },
];
