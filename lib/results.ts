export type Result = {
  title: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  traits: string[];
  friendRole: string;
  fictionalCharacters: string[];
  vibe: string;
};

export const mbtiResults: Record<string, Result> = {
  INTJ: {
    title: "The Architect",
    summary:
      "Strategic, independent, and quietly intense. You see patterns where others see noise.",
    strengths: ["Analytical", "Long-term thinking", "Self-sufficient"],
    weaknesses: ["Overly critical", "Emotionally distant", "Perfectionist"],
    traits: ["Future-focused", "Private", "System builder"],
    friendRole:
      "The mastermind who plans everything but rarely explains the plan.",
    fictionalCharacters: ["Batman", "Gandalf", "Elon Musk (interpretive)"],
    vibe: "Alpha 6'3 CEO",
  },

  INTP: {
    title: "The Thinker",
    summary: "Curious and abstract, you live in ideas more than reality.",
    strengths: ["Logical", "Creative thinker", "Open-minded"],
    weaknesses: ["Overthinking", "Detached", "Inconsistent"],
    traits: ["Idea generator", "Philosophical", "Independent"],
    friendRole: "The one who asks 'why' until things get existential.",
    fictionalCharacters: ["Sherlock Holmes", "L (Death Note)"],
    vibe: "Messy Genius",
  },

  ENTJ: {
    title: "The Commander",
    summary: "Bold, decisive, and driven. You naturally take charge.",
    strengths: ["Leadership", "Efficiency", "Confidence"],
    weaknesses: ["Impatient", "Dominating", "Work-obsessed"],
    traits: ["Goal-oriented", "Strategic", "Assertive"],
    friendRole: "The leader who organizes everyone’s life.",
    fictionalCharacters: ["Tony Stark", "Light Yagami"],
    vibe: "Unstoppable Rizz",
  },

  ENTP: {
    title: "The Debater",
    summary: "Quick-witted and playful, you thrive on ideas and arguments.",
    strengths: ["Innovative", "Energetic", "Charismatic"],
    weaknesses: ["Argumentative", "Easily bored", "Unfocused"],
    traits: ["Devil’s advocate", "Creative", "Curious"],
    friendRole: "The one who turns everything into a debate.",
    fictionalCharacters: ["Deadpool", "Jack Sparrow"],
    vibe: "Charming Hater",
  },

  INFJ: {
    title: "The Advocate",
    summary:
      "Deep, intuitive, and empathetic. You understand people on another level.",
    strengths: ["Insightful", "Compassionate", "Visionary"],
    weaknesses: ["Overwhelmed easily", "Too idealistic", "Private"],
    traits: ["Emotionally aware", "Purpose-driven", "Complex"],
    friendRole: "The therapist friend everyone depends on.",
    fictionalCharacters: ["Dumbledore", "Itachi Uchiha"],
    vibe: "The Know-it-all",
  },

  INFP: {
    title: "The Mediator",
    summary:
      "Gentle, imaginative, and deeply emotional. You value authenticity above all.",
    strengths: ["Empathetic", "Creative", "Idealistic"],
    weaknesses: ["Overly sensitive", "Avoids conflict", "Self-doubt"],
    traits: ["Dreamy", "Introspective", "Value-driven"],
    friendRole: "The one who truly *gets* you.",
    fictionalCharacters: ["Frodo", "Joker (Arthur Fleck)"],
    vibe: "Good Guy",
  },

  ENFJ: {
    title: "The Protagonist",
    summary: "Warm, inspiring, and socially aware. You bring people together.",
    strengths: ["Charismatic", "Empathetic", "Natural leader"],
    weaknesses: ["People-pleasing", "Overinvolved", "Sensitive"],
    traits: ["Supportive", "Expressive", "Driven"],
    friendRole: "The emotional glue of the group.",
    fictionalCharacters: ["Spider-Man", "Naruto"],
    vibe: "Focused and Chalant",
  },

  ENFP: {
    title: "The Campaigner",
    summary:
      "Energetic, imaginative, and full of ideas. You bring life wherever you go.",
    strengths: ["Creative", "Enthusiastic", "Curious"],
    weaknesses: ["Easily distracted", "Overthinks emotions", "Impulsive"],
    traits: ["Spontaneous", "Expressive", "Optimistic"],
    friendRole: "The chaotic sunshine friend.",
    fictionalCharacters: ["Aang", "Rapunzel"],
    vibe: "The Sun",
  },

  ISTJ: {
    title: "The Logistician",
    summary: "Reliable, practical, and grounded. You do what needs to be done.",
    strengths: ["Responsible", "Organized", "Dependable"],
    weaknesses: ["Rigid", "Judgmental", "Resistant to change"],
    traits: ["Detail-oriented", "Traditional", "Structured"],
    friendRole: "The responsible one everyone relies on.",
    fictionalCharacters: ["Captain America"],
    vibe: "Apocalypse Survivor",
  },

  ISFJ: {
    title: "The Defender",
    summary:
      "Kind, loyal, and quietly supportive. You care deeply through actions.",
    strengths: ["Loyal", "Caring", "Observant"],
    weaknesses: ["Self-sacrificing", "Avoids conflict", "Undervalues self"],
    traits: ["Protective", "Warm", "Reliable"],
    friendRole: "The one who always checks in on you.",
    fictionalCharacters: ["Samwise Gamgee"],
    vibe: "Everyone's Favourite",
  },

  ESTJ: {
    title: "The Executive",
    summary: "Organized and decisive, you bring order to chaos.",
    strengths: ["Efficient", "Direct", "Strong-willed"],
    weaknesses: ["Controlling", "Inflexible", "Blunt"],
    traits: ["Structured", "Practical", "Leader"],
    friendRole: "The one who makes plans actually happen.",
    fictionalCharacters: ["Miranda Priestly"],
    vibe: "Extroverted Batman",
  },

  ESFJ: {
    title: "The Consul",
    summary: "Warm, social, and community-driven. You thrive on connection.",
    strengths: ["Supportive", "Loyal", "Outgoing"],
    weaknesses: ["Approval-seeking", "Sensitive to criticism", "Overbearing"],
    traits: ["Friendly", "Organized", "Caring"],
    friendRole: "The host of every gathering.",
    fictionalCharacters: ["Monica Geller"],
    vibe: "You are everywhere",
  },

  ISTP: {
    title: "The Virtuoso",
    summary: "Calm, observant, and hands-on. You understand how things work.",
    strengths: ["Practical", "Adaptable", "Independent"],
    weaknesses: ["Emotionally reserved", "Impulsive", "Detached"],
    traits: ["Problem-solver", "Cool-headed", "Tactical"],
    friendRole: "The chill one who fixes everything.",
    fictionalCharacters: ["John Wick"],
    vibe: '"I must win."',
  },

  ISFP: {
    title: "The Adventurer",
    summary: "Creative and free-spirited. You live in the moment.",
    strengths: ["Artistic", "Gentle", "Flexible"],
    weaknesses: ["Avoids planning", "Sensitive", "Unpredictable"],
    traits: ["Aesthetic-driven", "Quiet", "Spontaneous"],
    friendRole: "The lowkey artistic one.",
    fictionalCharacters: ["Zuko"],
    vibe: "Lying Liar",
  },

  ESTP: {
    title: "The Entrepreneur",
    summary: "Bold and action-oriented. You thrive in the moment.",
    strengths: ["Energetic", "Confident", "Practical"],
    weaknesses: ["Risky", "Impatient", "Insensitive"],
    traits: ["Adventurous", "Direct", "Fast-paced"],
    friendRole: "The one who says 'let’s just do it'.",
    fictionalCharacters: ["Tyler Durden"],
    vibe: "Raw Energy",
  },

  ESFP: {
    title: "The Entertainer",
    summary: "Fun-loving and expressive. You bring joy wherever you go.",
    strengths: ["Playful", "Social", "Spontaneous"],
    weaknesses: ["Easily bored", "Avoids seriousness", "Impulsive"],
    traits: ["Lively", "Attention-loving", "Warm"],
    friendRole: "The life of the party.",
    fictionalCharacters: ["Harley Quinn"],
    vibe: "Easily Distracted.",
  },
};
