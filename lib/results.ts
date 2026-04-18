export type Result = {
  title: string;
  category: string;
  headline: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  traits: string[];
  fictionalCharacters: string[];
};

export const mbtiResults: Record<string, Result> = {
  INTJ: {
    title: "The Architect",
    category: "Analysts",
    headline: "A strategic thinker who builds long-term plans and systems.",
    summary:
      "INTJs are independent thinkers who focus on logic and long-term goals. They like planning things in detail and understanding how systems work. They often prefer working alone because it helps them focus better. They trust their own ideas more than outside opinions.\n\nThey usually think before acting and avoid wasting time on unnecessary things. They can seem quiet or serious, but they are always observing and analyzing. Their main focus is improvement and achieving big goals over time.",
    strengths: [
      "You think in a logical and structured way.",
      "You are independent and self-driven.",
      "You focus on long-term planning.",
      "You are good at solving complex problems.",
      "You stay calm under pressure.",
    ],
    weaknesses: [
      "You can ignore emotions in decisions.",
      "You may seem distant to others.",
      "You expect too much from yourself.",
      "You can be overly critical.",
      "You struggle with expressing feelings.",
    ],
    traits: [
      "You prefer thinking over talking.",
      "You enjoy planning everything ahead.",
      "You like working alone.",
      "You focus on future outcomes.",
      "You question ideas deeply.",
    ],
    fictionalCharacters: [
      "Batman (The Dark Knight)",
      "Light Yagami (Death Note)",
      "Dr. Strange (Doctor Strange)",
      "Gandalf (The Lord of the Rings)",
      "Vito Corleone (The Godfather)",
    ],
  },

  INTP: {
    title: "The Thinker",
    category: "Analysts",
    headline: "A curious mind that explores ideas and theories deeply.",
    summary:
      "INTPs love thinking and exploring ideas. They enjoy solving problems and understanding how things work. They often spend time inside their own thoughts, building theories and connections. They prefer ideas and concepts over routines.\n\nThey are quiet and observant in social situations. They like freedom to think without rules or pressure. Their curiosity makes them question everything around them.",
    strengths: [
      "You are very logical.",
      "You think creatively.",
      "You are open-minded.",
      "You solve problems in unique ways.",
      "You enjoy learning new ideas.",
    ],
    weaknesses: [
      "You overthink small things.",
      "You struggle with consistency.",
      "You may seem detached.",
      "You delay decisions.",
      "You avoid routine tasks.",
    ],
    traits: [
      "You question everything.",
      "You enjoy deep thinking.",
      "You prefer ideas over action.",
      "You like independence.",
      "You get lost in thoughts.",
    ],
    fictionalCharacters: [
      "Sherlock Holmes (Sherlock)",
      "L (Death Note)",
      "Bruce Banner (The Hulk)",
      "Neo (The Matrix)",
      "Abed Nadir (Community)",
    ],
  },

  ENTJ: {
    title: "The Commander",
    category: "Analysts",
    headline: "A natural leader who focuses on goals and efficiency.",
    summary:
      "ENTJs are strong leaders who like taking control and making plans. They focus on results and efficiency. They enjoy organizing people and systems to reach goals faster. They are confident in their decisions.\n\nThey prefer action over waiting and do not hesitate to lead. They can be strict but are focused on success. They always think about the bigger picture and long-term results.",
    strengths: [
      "You are confident in leadership.",
      "You focus on results.",
      "You make strong decisions.",
      "You organize people well.",
      "You think strategically.",
    ],
    weaknesses: [
      "You can be impatient.",
      "You may seem controlling.",
      "You ignore emotions sometimes.",
      "You push people hard.",
      "You dislike inefficiency.",
    ],
    traits: [
      "You like taking charge.",
      "You think in systems.",
      "You focus on goals.",
      "You act quickly.",
      "You prefer structure.",
    ],
    fictionalCharacters: [
      "Tony Stark (Iron Man)",
      "Light Yagami (Death Note)",
      "Harvey Specter (Suits)",
      "Daenerys Targaryen (Game of Thrones)",
      "Erwin Smith (Attack on Titan)",
    ],
  },

  ENTP: {
    title: "The Debater",
    category: "Analysts",
    headline: "A quick thinker who loves debating ideas and possibilities.",
    summary:
      "ENTPs enjoy discussing ideas and challenging opinions. They are fast thinkers who like exploring many possibilities. They enjoy debates and mental challenges. They get bored with routine quickly.\n\nThey are creative and playful with ideas. They like breaking rules and finding new ways to do things. Their mind moves fast and jumps between topics easily.",
    strengths: [
      "You think very fast.",
      "You are creative.",
      "You enjoy debates.",
      "You adapt quickly.",
      "You see many sides of a problem.",
    ],
    weaknesses: [
      "You get bored easily.",
      "You struggle with focus.",
      "You may argue too much.",
      "You avoid routine work.",
      "You leave things unfinished.",
    ],
    traits: [
      "You love debating ideas.",
      "You enjoy challenges.",
      "You think outside the box.",
      "You are energetic.",
      "You question rules.",
    ],
    fictionalCharacters: [
      "Jack Sparrow (Pirates of the Caribbean)",
      "Tony Stark (Iron Man)",
      "Gojo Satoru (Jujutsu Kaisen)",
      "The Joker (The Dark Knight)",
      "Rick Sanchez (Rick and Morty)",
    ],
  },

  INFJ: {
    title: "The Advocate",
    category: "Diplomats",
    headline: "A thoughtful guide who understands people deeply.",
    summary:
      "INFJs are quiet and thoughtful people who care deeply about others. They often think about meaning and purpose in life. They understand emotions very well and can read people easily. They like helping others grow.\n\nThey often keep their thoughts private. They prefer deep connections instead of many shallow ones. They think about the future and try to make a positive impact.",
    strengths: [
      "You understand people well.",
      "You are deeply caring.",
      "You think about meaning.",
      "You are intuitive.",
      "You are patient.",
    ],
    weaknesses: [
      "You overthink emotions.",
      "You can feel drained socially.",
      "You avoid conflict.",
      "You are too private.",
      "You expect too much from yourself.",
    ],
    traits: [
      "You are introspective.",
      "You value deep bonds.",
      "You think long-term.",
      "You are empathetic.",
      "You stay calm and quiet.",
    ],
    fictionalCharacters: [
      "Itachi Uchiha (Naruto)",
      "Armin Arlert (Attack on Titan)",
      "Professor X (X-Men)",
      "Remus Lupin (Harry Potter)",
      "Jane Eyre (Jane Eyre)",
    ],
  },

  INFP: {
    title: "The Mediator",
    category: "Diplomats",
    headline: "An idealist who follows strong personal values.",
    summary:
      "INFPs are idealistic and emotional people who care about their values. They enjoy creativity and imagination. They often think deeply about life and meaning. They want to live in a way that feels true to themselves.\n\nThey are gentle and prefer peaceful environments. They avoid conflict and focus on understanding people. They often express themselves through art or writing.",
    strengths: [
      "You are creative.",
      "You are kind.",
      "You value honesty.",
      "You are empathetic.",
      "You are imaginative.",
    ],
    weaknesses: [
      "You avoid conflict.",
      "You overthink feelings.",
      "You struggle with decisions.",
      "You get emotionally overwhelmed.",
      "You can be unrealistic.",
    ],
    traits: [
      "You follow your values.",
      "You enjoy creativity.",
      "You are sensitive.",
      "You prefer peace.",
      "You think deeply.",
    ],
    fictionalCharacters: [
      "Frodo Baggins (The Lord of the Rings)",
      "Wanda Maximoff (Marvel)",
      "Shinji Ikari (Neon Genesis Evangelion)",
      "Amélie Poulain (Amélie)",
      "Belle (Beauty and the Beast)",
    ],
  },

  ENFJ: {
    title: "The Protagonist",
    category: "Diplomats",
    headline: "An inspiring leader who helps others grow.",
    summary:
      "ENFJs are social and caring leaders who help people improve. They understand emotions and connect well with others. They enjoy guiding and supporting people. They are natural motivators.\n\nThey focus on relationships and group harmony. They often take responsibility for others. They enjoy making a positive difference in people’s lives.",
    strengths: [
      "You inspire others.",
      "You understand emotions.",
      "You are supportive.",
      "You are responsible.",
      "You communicate well.",
    ],
    weaknesses: [
      "You overwork yourself.",
      "You seek approval.",
      "You ignore your own needs.",
      "You take on too much responsibility.",
      "You avoid letting people down.",
    ],
    traits: [
      "You are outgoing.",
      "You care about people.",
      "You lead naturally.",
      "You are empathetic.",
      "You enjoy teamwork.",
    ],
    fictionalCharacters: [
      "Naruto Uzumaki (Naruto)",
      "Morpheus (The Matrix)",
      "Princess Diana (The Crown)",
      "Tanjiro Kamado (Demon Slayer)",
      "Elizabeth Bennet (Pride & Prejudice)",
    ],
  },

  ENFP: {
    title: "The Campaigner",
    category: "Diplomats",
    headline: "A cheerful explorer full of ideas and energy.",
    summary:
      "ENFPs are energetic and creative people who love exploring new ideas. They enjoy meeting people and sharing thoughts. They are emotional and expressive. They like freedom and change.\n\nThey often get excited about new possibilities. They dislike boring routines. They try to find meaning and joy in everything they do.",
    strengths: [
      "You are creative.",
      "You are energetic.",
      "You are friendly.",
      "You think openly.",
      "You inspire others.",
    ],
    weaknesses: [
      "You get distracted.",
      "You struggle with focus.",
      "You act impulsively.",
      "You avoid boring tasks.",
      "You overthink emotions.",
    ],
    traits: [
      "You love new ideas.",
      "You are expressive.",
      "You enjoy people.",
      "You are spontaneous.",
      "You value freedom.",
    ],
    fictionalCharacters: [
      "Peter Parker (Spider-Man)",
      "Aang (Avatar: The Last Airbender)",
      "Rapunzel (Tangled)",
      "Barney Stinson (How I Met Your Mother)",
      "Mabel Pines (Gravity Falls)",
    ],
  },

  ISTJ: {
    title: "The Logistician",
    category: "Sentinels",
    headline: "A responsible planner who values structure and order.",
    summary:
      "ISTJs are practical and responsible people who like structure. They follow rules and take duties seriously. They prefer clear plans and organized systems. They are dependable and consistent.\n\nThey focus on details and accuracy. They do not like chaos or sudden changes. They believe in doing things the right way and finishing tasks properly.",
    strengths: [
      "You are reliable.",
      "You are organized.",
      "You are disciplined.",
      "You are practical.",
      "You are focused.",
    ],
    weaknesses: [
      "You resist change.",
      "You can be rigid.",
      "You avoid risk.",
      "You dislike uncertainty.",
      "You can be overly serious.",
    ],
    traits: [
      "You follow rules.",
      "You value structure.",
      "You focus on details.",
      "You are responsible.",
      "You stay consistent.",
    ],
    fictionalCharacters: [
      "Hermione Granger (Harry Potter)",
      "Captain America (Marvel)",
      "Levi Ackerman (Attack on Titan)",
      "Brienne of Tarth (Game of Thrones)",
      "Thanos (Marvel)",
    ],
  },

  ISFJ: {
    title: "The Defender",
    category: "Sentinels",
    headline: "A caring protector who supports and helps others.",
    summary:
      "ISFJs are kind and caring people who focus on helping others. They are very responsible and loyal. They remember small details about people. They like keeping things stable and peaceful.\n\nThey often put others before themselves. They are quiet but very dependable. They work hard to support the people they care about.",
    strengths: [
      "You are caring.",
      "You are loyal.",
      "You are responsible.",
      "You are supportive.",
      "You are attentive.",
    ],
    weaknesses: [
      "You ignore your own needs.",
      "You avoid conflict.",
      "You fear change.",
      "You can be self-sacrificing.",
      "You worry too much.",
    ],
    traits: [
      "You are gentle.",
      "You value harmony.",
      "You are reliable.",
      "You are kind.",
      "You are observant.",
    ],
    fictionalCharacters: [
      "Samwise Gamgee (Lord of the Rings)",
      "Nezuko Kamado (Demon Slayer)",
      "Pam Beesly (The Office)",
      "Cedric Diggory (Harry Potter)",
      "Joyce Byers (Stranger Things)",
    ],
  },

  ESTJ: {
    title: "The Executive",
    category: "Sentinels",
    headline: "A strong organizer who leads with structure and control.",
    summary:
      "ESTJs are practical leaders who focus on order and rules. They like structure and clear systems. They take responsibility seriously. They are good at organizing people and tasks.\n\nThey prefer efficiency and clear results. They can be strict but reliable. They believe in discipline and tradition.",
    strengths: [
      "You are organized.",
      "You are efficient.",
      "You are responsible.",
      "You are direct.",
      "You are practical.",
    ],
    weaknesses: [
      "You can be strict.",
      "You resist change.",
      "You may be controlling.",
      "You ignore emotions.",
      "You can be inflexible.",
    ],
    traits: [
      "You like structure.",
      "You take charge.",
      "You value rules.",
      "You are disciplined.",
      "You focus on results.",
    ],
    fictionalCharacters: [
      "Miranda Priestly (The Devil Wears Prada)",
      "Dwight Schrute (The Office)",
      "Erwin Smith (Attack on Titan)",
      "Tywin Lannister (Game of Thrones)",
      "Amanda Waller (DC Universe)",
    ],
  },

  ESFJ: {
    title: "The Consul",
    category: "Sentinels",
    headline: "A friendly helper who cares about people and harmony.",
    summary:
      "ESFJs are social and caring people who like helping others. They enjoy being around people and building strong relationships. They focus on harmony and group well-being. They are supportive and warm.\n\nThey like being useful and appreciated. They often take care of others’ needs. They work hard to keep everyone happy and included.",
    strengths: [
      "You are social.",
      "You are caring.",
      "You are supportive.",
      "You are organized.",
      "You are responsible.",
    ],
    weaknesses: [
      "You seek approval.",
      "You fear rejection.",
      "You avoid conflict.",
      "You depend on others’ opinions.",
      "You take criticism personally.",
    ],
    traits: [
      "You are friendly.",
      "You value harmony.",
      "You are helpful.",
      "You are expressive.",
      "You are dependable.",
    ],
    fictionalCharacters: [
      "Leslie Knope (Parks and Recreation)",
      "Steve Harrington (Stranger Things)",
      "Molly Weasley (Harry Potter)",
      "Olaf (Frozen)",
      "Rachel Green (Friends)",
    ],
  },

  ISTP: {
    title: "The Virtuoso",
    category: "Explorers",
    headline: "A practical problem-solver who learns by doing.",
    summary:
      "ISTPs are hands-on and practical people who like solving real problems. They enjoy figuring out how things work. They prefer action over theory. They are calm under pressure.\n\nThey like freedom and independence. They do not like strict rules. They focus on what is useful and practical in the moment.",
    strengths: [
      "You are practical.",
      "You are calm.",
      "You solve problems well.",
      "You adapt quickly.",
      "You are observant.",
    ],
    weaknesses: [
      "You avoid emotions.",
      "You can be detached.",
      "You get bored easily.",
      "You avoid long-term planning.",
      "You take risks.",
    ],
    traits: [
      "You are independent.",
      "You like action.",
      "You are quiet.",
      "You are flexible.",
      "You focus on results.",
    ],
    fictionalCharacters: [
      "Han Solo (Star Wars)",
      "Black Widow (Marvel)",
      "Zoro (One Piece)",
      "Levi Ackerman (Attack on Titan)",
      "James Bond (007)",
    ],
  },

  ISFP: {
    title: "The Adventurer",
    category: "Explorers",
    headline: "A creative soul who lives freely and values expression.",
    summary:
      "ISFPs are quiet, creative, and sensitive people. They enjoy expressing themselves through art or experiences. They value freedom and personal space. They like living in the present moment.\n\nThey avoid conflict and prefer peaceful environments. They are gentle and caring. They often follow their feelings when making choices.",
    strengths: [
      "You are creative.",
      "You are kind.",
      "You are gentle.",
      "You are adaptable.",
      "You are observant.",
    ],
    weaknesses: [
      "You avoid planning.",
      "You dislike conflict.",
      "You are indecisive.",
      "You get overwhelmed easily.",
      "You avoid pressure.",
    ],
    traits: [
      "You value freedom.",
      "You are artistic.",
      "You live in the moment.",
      "You are quiet.",
      "You are sensitive.",
    ],
    fictionalCharacters: [
      "Todoroki Shoto (My Hero Academia)",
      "Eren Yeager (Attack on Titan)",
      "Marceline (Adventure Time)",
      "Katniss Everdeen (The Hunger Games)",
      "Legolas (The Lord of the Rings)",
    ],
  },

  ESTP: {
    title: "The Entrepreneur",
    category: "Explorers",
    headline: "A bold action-taker who enjoys excitement and risk.",
    summary:
      "ESTPs are energetic and action-oriented people. They like excitement and taking risks. They live in the present and act quickly. They are confident and practical.\n\nThey enjoy challenges and fast-paced situations. They prefer learning by doing. They are direct and straightforward in communication.",
    strengths: [
      "You are confident.",
      "You act quickly.",
      "You are energetic.",
      "You are practical.",
      "You adapt easily.",
    ],
    weaknesses: [
      "You are impulsive.",
      "You take risks often.",
      "You get bored easily.",
      "You avoid planning.",
      "You can be reckless.",
    ],
    traits: [
      "You love action.",
      "You are bold.",
      "You are social.",
      "You live in the moment.",
      "You enjoy excitement.",
    ],
    fictionalCharacters: [
      "Tony Stark (Iron Man)",
      "Jake Peralta (Brooklyn Nine-Nine)",
      "Dom Toretto (Fast & Furious)",
      "Gojo Satoru (Jujutsu Kaisen)",
      "Captain Jack Sparrow (Pirates of the Caribbean)",
    ],
  },

  ESFP: {
    title: "The Entertainer",
    category: "Explorers",
    headline: "A fun-loving personality who enjoys life and people.",
    summary:
      "ESFPs are lively and social people who enjoy having fun. They like being around others and making experiences enjoyable. They live in the moment and enjoy excitement. They are expressive and friendly.\n\nThey dislike boredom and routine. They bring energy to social situations. They care about making people happy and enjoying life fully.",
    strengths: [
      "You are energetic.",
      "You are friendly.",
      "You are fun-loving.",
      "You are social.",
      "You are expressive.",
    ],
    weaknesses: [
      "You avoid responsibility.",
      "You get distracted.",
      "You dislike planning.",
      "You act impulsively.",
      "You avoid serious topics.",
    ],
    traits: [
      "You live in the moment.",
      "You enjoy attention.",
      "You are playful.",
      "You are outgoing.",
      "You love fun experiences.",
    ],
    fictionalCharacters: [
      "Barney Stinson (How I Met Your Mother)",
      "Mabel Pines (Gravity Falls)",
      "Captain Jack Sparrow (Pirates of the Caribbean)",
      "Homer Simpson (The Simpsons)",
      "Deadpool (Deadpool)",
    ],
  },
};
