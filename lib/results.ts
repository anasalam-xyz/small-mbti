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
    headline: "The person who somehow has a five-step plan before everyone else even notices there's a problem.",
    summary: "INTJs are the kind of people who accidentally turn life into a strategy game. Their brain is constantly connecting dots, spotting patterns, and silently building plans for things weeks, months, or years ahead. While others are still deciding where to start, they're already mentally on phase three.\n\nThey value efficiency almost suspiciously much. If something feels pointless, repetitive, or badly designed, they'll immediately start imagining a better system for it. They often appear quiet or serious, but their mind is rarely calm — it's usually running simulations, questioning ideas, and redesigning reality in the background. They trust logic over noise, and would rather be correct than popular.",
    strengths: [
      "You can see the bigger picture while everyone else is staring at puzzle pieces.",
      "You don't need constant motivation from others — once you lock onto a goal, you become terrifyingly consistent.",
      "You naturally notice flaws and inefficiencies and immediately start mentally fixing them.",
      "You stay calm when things get chaotic, almost like your brain secretly prepared for this exact situation.",
      "You enjoy learning things deeply instead of just collecting random facts."
    ],
    weaknesses: [
      "You can accidentally treat emotions like annoying pop-up notifications.",
      "You sometimes expect people to 'just understand' things that only make sense inside your own head.",
      "You set ridiculously high standards and then get annoyed when reality refuses to cooperate.",
      "You may overanalyze decisions until your brain creates six alternate timelines.",
      "You can come across as cold when you're actually just focused."
    ],
    traits: [
      "You mentally debate ideas even when nobody asked.",
      "You like having a plan — and preferably a backup plan for the backup plan.",
      "You enjoy being alone because uninterrupted thinking feels like premium content.",
      "You question rules before following them.",
      "You often think about future possibilities more than what's happening right now."
    ],
    fictionalCharacters: [
      "Batman (The Dark Knight)",
      "Light Yagami (Death Note)",
      "Dr. Strange (Doctor Strange)",
      "Gandalf (The Lord of the Rings)",
      "Vito Corleone (The Godfather)"
    ],
  },

  INTP: {
    title: "The Thinker",
    category: "Analysts",
    headline: "The person who can disappear into a random thought and return with an entire theory nobody asked for.",
    summary: "INTPs live inside a world of ideas, questions, and 'wait... but what if?' moments. Their mind naturally jumps between concepts, patterns, and possibilities, constantly trying to understand how everything connects. While others see random pieces, they start building mental webs that somehow make sense — at least to them.\n\nThey enjoy exploring ideas more than following routines and often care more about understanding something than simply finishing it. Rules can feel restrictive if they don't seem logical, and curiosity tends to pull them into endless rabbit holes. They may look quiet from the outside, but internally their brain is usually hosting a 24/7 debate between five different theories.",
    strengths: [
      "You can take apart complicated ideas and understand how they work beneath the surface.",
      "You think creatively and often connect things that seem completely unrelated.",
      "You stay open-minded and enjoy exploring possibilities instead of instantly choosing sides.",
      "You solve problems in unexpected ways that make people wonder how you even got there.",
      "You genuinely enjoy learning, especially when curiosity decides to take over."
    ],
    weaknesses: [
      "You can spend so much time thinking about an idea that reality starts waiting in line.",
      "You sometimes collect projects and interests like browser tabs — and forget to close any of them.",
      "You may seem emotionally distant when you're actually just mentally somewhere else.",
      "Making decisions can feel painful because every option creates ten more possibilities.",
      "Routine tasks can feel like side quests you never wanted to accept."
    ],
    traits: [
      "You question things simply because 'that's how it works' isn't satisfying enough.",
      "You enjoy deep conversations that accidentally turn into philosophical adventures.",
      "You often get more excited by ideas than by actually finishing them.",
      "You value independence and like figuring things out your own way.",
      "You can vanish into your thoughts and lose track of time completely."
    ],
    fictionalCharacters: [
      "Sherlock Holmes (Sherlock)",
      "L (Death Note)",
      "Bruce Banner (The Hulk)",
      "Neo (The Matrix)",
      "Abed Nadir (Community)"
    ],
  },

  ENTJ: {
    title: "The Commander",
    category: "Analysts",
    headline: "The person who walks into chaos, immediately notices what's wrong, and starts assigning roles without being asked.",
    summary: "ENTJs naturally think in terms of goals, systems, and progress. Their brain constantly asks questions like: 'What's the plan?', 'Can this be done better?', and 'Why is this taking so long?' They don't just want things to work — they want things to work efficiently. If they see a messy situation, they instinctively begin organizing it in their head.\n\nThey enjoy taking initiative and rarely sit around waiting for someone else to lead. Challenges often energize them rather than scare them. They focus on the bigger picture and prefer moving forward over endlessly discussing possibilities. They can appear intense because once they decide on a direction, they move with the energy of someone who already has the ending planned out.",
    strengths: [
      "You naturally take charge when others hesitate or don't know where to start.",
      "You can quickly see the bigger picture while also understanding how the smaller pieces fit together.",
      "You make decisions confidently instead of getting trapped in endless uncertainty.",
      "You are highly goal-oriented and can turn ideas into actual results.",
      "You motivate people to push further, even when things become difficult."
    ],
    weaknesses: [
      "You can become impatient when people move slower than your mental speed.",
      "You sometimes focus so much on efficiency that emotions accidentally get pushed into the background.",
      "You may come across as controlling when you're simply trying to keep things moving.",
      "You can set demanding standards for yourself and everyone around you.",
      "Poor planning and unnecessary delays can test your patience immediately."
    ],
    traits: [
      "You naturally step into leadership roles, even when you didn't plan to.",
      "You think in systems and constantly look for better ways to organize things.",
      "You focus heavily on goals and long-term outcomes.",
      "You prefer action over sitting around waiting for the perfect moment.",
      "You enjoy structure, progress, and knowing where things are headed."
    ],
    fictionalCharacters: [
      "Tony Stark (Iron Man)",
      "Light Yagami (Death Note)",
      "Harvey Specter (Suits)",
      "Daenerys Targaryen (Game of Thrones)",
      "Erwin Smith (Attack on Titan)"
    ],
  },

  ENTP: {
    title: "The Debater",
    category: "Analysts",
    headline: "The person who starts with a random question and somehow turns it into a three-hour discussion.",
    summary: "ENTPs live on ideas, possibilities, and the excitement of asking 'okay, but what if we tried this instead?' Their mind moves quickly, jumping from one concept to another and connecting things that seem completely unrelated. They enjoy exploring new perspectives and often see possibilities where others only see limits.\n\nDebates are less about winning and more about mental adventure. They enjoy challenging ideas — sometimes even ideas they secretly agree with — simply to see where the conversation goes. Routine can feel painfully repetitive, and their curiosity constantly pulls them toward something newer, more interesting, or more chaotic. Their brain often feels like twenty browser tabs open at once, with music playing from one of them for absolutely no reason.",
    strengths: [
      "You think quickly and can come up with ideas before most people have finished processing the question.",
      "You naturally see multiple sides of an issue instead of getting stuck in one viewpoint.",
      "You are creative and enjoy experimenting with unusual or unexpected solutions.",
      "You adapt easily when situations change and rarely panic when plans fall apart.",
      "You bring energy and curiosity into conversations and make ideas feel exciting."
    ],
    weaknesses: [
      "You can get bored the moment something starts feeling repetitive or predictable.",
      "You sometimes chase new ideas so quickly that older projects get abandoned halfway through.",
      "You may accidentally turn casual conversations into debates without realizing it.",
      "Staying focused on one thing for long periods can feel like being trapped in slow motion.",
      "You can become more excited by starting things than by finishing them."
    ],
    traits: [
      "You enjoy debating ideas just to see what happens.",
      "You question rules, especially when they seem pointless.",
      "You think outside the box and occasionally forget the box existed.",
      "You enjoy challenges and get energized by mental stimulation.",
      "You jump between thoughts quickly and somehow still connect everything together."
    ],
    fictionalCharacters: [
      "Jack Sparrow (Pirates of the Caribbean)",
      "Tony Stark (Iron Man)",
      "Gojo Satoru (Jujutsu Kaisen)",
      "The Joker (The Dark Knight)",
      "Rick Sanchez (Rick and Morty)"
    ],
  },

  INFJ: {
    title: "The Advocate",
    category: "Diplomats",
    headline: "The person who somehow notices the emotion you were trying very hard not to show.",
    summary: "INFJs are thoughtful people who often seem calm on the outside while carrying an entire universe of thoughts inside. They naturally pay attention to emotions, hidden meanings, and the things people leave unsaid. While others hear words, INFJs often notice the feelings, intentions, and quiet details hiding behind them.\n\nThey care deeply about people and often want to help others grow into better versions of themselves. Small talk can feel empty, while meaningful conversations feel like discovering treasure. They tend to think about purpose, the future, and the impact they leave on others. They may appear quiet or reserved, but their mind is usually busy understanding people and imagining better possibilities for the world.",
    strengths: [
      "You understand people deeply and often notice things others completely miss.",
      "You genuinely care about others and want to help them become their best selves.",
      "You can see meaning and patterns beneath surface-level situations.",
      "You are intuitive and often trust feelings or impressions that later turn out to be right.",
      "You stay patient and thoughtful, even during emotionally difficult moments."
    ],
    weaknesses: [
      "You can overthink emotions until one feeling somehow becomes an entire storyline.",
      "Being around too much social energy for too long can leave your mental battery at 1%.",
      "You may avoid conflict even when something truly needs to be said.",
      "You tend to keep important thoughts hidden and expect people to somehow understand them anyway.",
      "You often place heavy expectations on yourself and feel responsible for more than you should."
    ],
    traits: [
      "You spend a lot of time reflecting on life, people, and deeper meanings.",
      "You prefer a few genuine connections over a crowd of shallow ones.",
      "You naturally think about the future and where things are heading.",
      "You care deeply about emotions and human experiences.",
      "You appear calm and quiet, even when your mind is running a thousand thoughts."
    ],
    fictionalCharacters: [
      "Itachi Uchiha (Naruto)",
      "Armin Arlert (Attack on Titan)",
      "Professor X (X-Men)",
      "Remus Lupin (Harry Potter)",
      "Jane Eyre (Jane Eyre)"
    ],
  },

  INFP: {
    title: "The Mediator",
    category: "Diplomats",
    headline: "The person who looks calm on the outside but secretly carries an entire fantasy world inside their head.",
    summary: "INFPs are driven by values, emotions, and the feeling that life should mean something more than simply checking boxes. They naturally look for authenticity and want their choices to feel true to who they are. Rather than following the crowd, they prefer following what genuinely feels right to them.\n\nTheir imagination is often rich and constantly active, turning ordinary moments into stories, possibilities, and deeper meanings. They care deeply about people, even if they don't always show it openly. Loud environments, fake behavior, or unnecessary conflict can feel exhausting. They may seem gentle and quiet, but underneath that calm surface is a surprisingly passionate person who cares intensely about what matters to them.",
    strengths: [
      "You have a vivid imagination and can see beauty and meaning in places others overlook.",
      "You genuinely care about people and want others to feel understood.",
      "You value honesty and authenticity instead of pretending to fit in.",
      "You are empathetic and naturally connect with emotions.",
      "You think creatively and often come up with unique ideas or perspectives."
    ],
    weaknesses: [
      "You can avoid conflict so much that problems end up sitting in the background collecting dust.",
      "You sometimes overthink emotions until a small feeling becomes a full emotional movie.",
      "Making decisions can be difficult when your heart and mind start arguing with each other.",
      "You may absorb too much emotional energy from people around you.",
      "Reality can occasionally disappoint you because your imagination sets very high expectations."
    ],
    traits: [
      "You follow personal values even when it would be easier not to.",
      "You enjoy creativity and often express yourself through ideas, art, or imagination.",
      "You are sensitive to emotions and notice how people feel.",
      "You prefer peaceful environments over unnecessary drama.",
      "You spend a lot of time thinking about deeper meanings and possibilities."
    ],
    fictionalCharacters: [
      "Frodo Baggins (The Lord of the Rings)",
      "Wanda Maximoff (Marvel)",
      "Shinji Ikari (Neon Genesis Evangelion)",
      "Amélie Poulain (Amélie)",
      "Belle (Beauty and the Beast)"
    ],
  },

  ENFJ: {
    title: "The Protagonist",
    category: "Diplomats",
    headline: "The person who somehow becomes everyone's life coach without officially applying for the job.",
    summary: "ENFJs naturally focus on people, growth, and helping others become better versions of themselves. They notice emotions easily and often understand what someone needs before that person says it out loud. Building meaningful connections isn't just something they enjoy — it feels important to them.\n\nThey have a warm and motivating energy that often pulls people toward them. They enjoy encouraging others, creating harmony, and bringing people together around a shared goal. Their optimism can make people feel understood and supported. Underneath that kindness is someone surprisingly driven — because when ENFJs believe in something or someone, they put their whole heart into it.",
    strengths: [
      "You naturally inspire people and make them feel capable of doing more than they thought they could.",
      "You understand emotions well and notice feelings that others often overlook.",
      "You genuinely enjoy supporting people and helping them grow.",
      "You take responsibility seriously and care deeply about the people around you.",
      "You communicate in a way that makes people feel heard and understood."
    ],
    weaknesses: [
      "You can give so much energy to others that your own battery quietly reaches zero.",
      "You sometimes care too much about disappointing people.",
      "You may ignore your own needs while trying to fix everyone else's problems.",
      "You can feel responsible for situations that were never yours to carry.",
      "You struggle to say no because helping people feels natural to you."
    ],
    traits: [
      "You enjoy connecting with people and understanding what drives them.",
      "You naturally step into leadership roles without forcing it.",
      "You care deeply about emotions and relationships.",
      "You are empathetic and often become the person others open up to.",
      "You enjoy teamwork and bringing people together."
    ],
    fictionalCharacters: [
      "Naruto Uzumaki (Naruto)",
      "Morpheus (The Matrix)",
      "Princess Diana (The Crown)",
      "Tanjiro Kamado (Demon Slayer)",
      "Elizabeth Bennet (Pride & Prejudice)"
    ],
  },

  ENFP: {
    title: "The Campaigner",
    category: "Diplomats",
    headline: "The person who gets excited about ten different possibilities before finishing the first sentence.",
    summary: "ENFPs are energetic, curious, and naturally drawn toward new ideas and experiences. Their mind constantly searches for interesting possibilities, exciting adventures, and meaningful connections. They don't just see what something is — they immediately start imagining what it *could* become.\n\nThey bring warmth and enthusiasm into the spaces around them and often make people feel comfortable very quickly. Routine can feel painfully repetitive because curiosity keeps pulling them toward something newer and more exciting. Beneath all the playful energy is someone who genuinely wants life to feel meaningful and real. They don't just want to exist — they want to experience, explore, and feel everything life has to offer.",
    strengths: [
      "You bring creativity and fresh ideas into almost every situation.",
      "Your energy and enthusiasm can make people around you feel excited too.",
      "You connect easily with people and naturally create a welcoming atmosphere.",
      "You stay open-minded and enjoy exploring different perspectives.",
      "You inspire others simply by being curious, optimistic, and passionate."
    ],
    weaknesses: [
      "You can get distracted because every new idea suddenly feels like the most important idea in the universe.",
      "Staying focused on one thing for long periods can feel surprisingly difficult.",
      "You sometimes act on excitement before stopping to think through all the details.",
      "Routine tasks can quickly become your personal final boss.",
      "You may overthink emotions and get caught in loops of 'what if?' scenarios."
    ],
    traits: [
      "You love discovering new ideas and possibilities.",
      "You express yourself openly and enjoy sharing excitement with others.",
      "You genuinely enjoy meeting and understanding people.",
      "You are spontaneous and often follow curiosity wherever it goes.",
      "You value freedom and dislike feeling trapped by strict limits."
    ],
    fictionalCharacters: [
      "Peter Parker (Spider-Man)",
      "Aang (Avatar: The Last Airbender)",
      "Rapunzel (Tangled)",
      "Barney Stinson (How I Met Your Mother)",
      "Mabel Pines (Gravity Falls)"
    ],
  },

  ISTJ: {
    title: "The Logistician",
    category: "Sentinels",
    headline: "The person who already read the instructions while everyone else was pressing random buttons.",
    summary: "ISTJs value structure, responsibility, and doing things properly. They naturally prefer order over chaos and tend to approach life with a practical mindset. While some people enjoy improvising everything, ISTJs usually trust plans, systems, and methods that actually work.\n\nThey take commitments seriously and are often the people others rely on when something simply needs to get done. Details matter to them, and they notice small mistakes that many people completely miss. Sudden chaos or pointless changes can feel frustrating because ISTJs believe that if something already works well, breaking it for no reason makes little sense. They may seem serious at first, but underneath that calm and organized exterior is someone deeply dependable and loyal.",
    strengths: [
      "You are reliable and people know they can count on you when things matter.",
      "You stay organized and naturally bring structure into messy situations.",
      "You have strong discipline and can keep going even when motivation disappears.",
      "You think practically and focus on what actually works instead of empty ideas.",
      "You pay attention to details and notice things that others often overlook."
    ],
    weaknesses: [
      "You can resist change because your brain immediately asks, 'Was the old system actually broken?'",
      "You sometimes become too attached to routines and familiar ways of doing things.",
      "Taking risks can feel uncomfortable when there isn't enough certainty involved.",
      "Unclear plans or sudden surprises can drain your patience quickly.",
      "You may appear overly serious when you're actually just focused on getting things right."
    ],
    traits: [
      "You naturally follow rules when they make practical sense.",
      "You value structure and prefer knowing what to expect.",
      "You focus on details and accuracy instead of rushing things.",
      "You take responsibilities seriously and rarely ignore commitments.",
      "You stay consistent and dependable even when situations become stressful."
    ],
    fictionalCharacters: [
      "Hermione Granger (Harry Potter)",
      "Captain America (Marvel)",
      "Levi Ackerman (Attack on Titan)",
      "Brienne of Tarth (Game of Thrones)",
      "Thanos (Marvel)"
    ],
  },

  ISFJ: {
    title: "The Defender",
    category: "Sentinels",
    headline: "The person who remembers your favorite snack, your bad day from two weeks ago, and whether you reached home safely.",
    summary: "ISFJs are warm, dependable people who naturally care for and support the people around them. They pay attention to details that many others miss — not because they are trying to impress anyone, but because people genuinely matter to them. Small acts of kindness often mean more to them than big dramatic gestures.\n\nThey value stability, comfort, and maintaining harmony in their relationships. While they may appear quiet or reserved at first, they often have a deeply caring side that shows through actions rather than words. They are the kind of people who quietly help behind the scenes, remember things you forgot, and somehow notice when something feels off before anyone says a word. They may not always stand in the spotlight, but they are often the reason things continue running smoothly.",
    strengths: [
      "You genuinely care about people and often make others feel safe and supported.",
      "You are loyal and stay by the people you care about even during difficult times.",
      "You take responsibilities seriously and can be trusted to follow through.",
      "You naturally support others without expecting attention or praise in return.",
      "You notice small details about people that others completely overlook."
    ],
    weaknesses: [
      "You sometimes focus so much on helping others that your own needs end up waiting in the background.",
      "You may avoid conflict even when speaking up would actually help.",
      "Sudden changes can feel uncomfortable because stability matters a lot to you.",
      "You can sacrifice too much of your own time and energy for other people.",
      "You sometimes worry more than necessary because you care deeply about outcomes and people."
    ],
    traits: [
      "You have a gentle and caring approach toward people.",
      "You value harmony and prefer peaceful environments.",
      "You are reliable and people often depend on you.",
      "You show kindness through actions rather than dramatic words.",
      "You naturally observe and remember small things that matter."
    ],
    fictionalCharacters: [
      "Samwise Gamgee (Lord of the Rings)",
      "Nezuko Kamado (Demon Slayer)",
      "Pam Beesly (The Office)",
      "Cedric Diggory (Harry Potter)",
      "Joyce Byers (Stranger Things)"
    ],
  },

  ESTJ: {
    title: "The Executive",
    category: "Sentinels",
    headline: "The person who sees chaos, sighs once, and immediately starts turning it into a checklist.",
    summary: "ESTJs naturally focus on structure, efficiency, and getting things done. Their mind tends to organize situations quickly, noticing what needs to happen, who should do it, and how to reach the goal with the least amount of confusion. While some people enjoy improvising, ESTJs usually prefer plans that actually work.\n\nThey take responsibilities seriously and often become the people others rely on when leadership is needed. They value discipline, consistency, and clear expectations. If something feels disorganized or inefficient, they instinctively want to fix it. They can come across as strong or strict, but much of that comes from wanting things to run smoothly and wanting people to succeed rather than fail.",
    strengths: [
      "You naturally organize people and situations instead of waiting for someone else to step up.",
      "You focus on efficiency and usually find practical ways to get things done.",
      "You take responsibility seriously and follow through on commitments.",
      "You communicate directly and make expectations clear.",
      "You stay grounded in reality and focus on solutions that actually work."
    ],
    weaknesses: [
      "You can become impatient when things feel disorganized or unnecessarily slow.",
      "You may resist change at first, especially if the current system already works.",
      "You sometimes come across as controlling when you're simply trying to create order.",
      "You can focus so heavily on logic and results that emotions get pushed into the background.",
      "You may become stubborn when you strongly believe your method is the most effective one."
    ],
    traits: [
      "You prefer structure and dislike unnecessary chaos.",
      "You naturally take charge when things need direction.",
      "You value rules and systems that keep things running properly.",
      "You are disciplined and take responsibilities seriously.",
      "You focus on results and prefer action over endless discussion."
    ],
    fictionalCharacters: [
      "Miranda Priestly (The Devil Wears Prada)",
      "Dwight Schrute (The Office)",
      "Erwin Smith (Attack on Titan)",
      "Tywin Lannister (Game of Thrones)",
      "Amanda Waller (DC Universe)"
    ],
  },

  ESFJ: {
    title: "The Consul",
    category: "Sentinels",
    headline: "The person who somehow adopts an entire friend group and starts making sure everyone has eaten.",
    summary: "ESFJs naturally focus on people, connection, and creating a sense of warmth around them. They enjoy making others feel included and often notice when someone is left out, uncomfortable, or having a bad day. Relationships matter deeply to them, and they often express care through actions rather than grand speeches.\n\nThey enjoy being helpful and often become the people holding groups together behind the scenes. Creating harmony feels important, and they usually work hard to make sure everyone feels valued. They bring energy, kindness, and support into the spaces around them. They may appear cheerful and outgoing, but underneath that is someone who genuinely wants people around them to feel happy and cared for.",
    strengths: [
      "You naturally make people feel welcomed and included.",
      "You genuinely care about others and enjoy helping when people need support.",
      "You are dependable and take responsibilities seriously.",
      "You stay organized and often keep things running smoothly.",
      "You bring warmth and positive energy into relationships."
    ],
    weaknesses: [
      "You can care so much about what others think that your own needs end up in the background.",
      "You may fear disappointing people or being disliked.",
      "You often avoid conflict because keeping harmony feels important.",
      "Criticism can affect you more deeply than you let people see.",
      "You sometimes take responsibility for everyone's happiness, even when it isn't your job."
    ],
    traits: [
      "You are naturally friendly and enjoy connecting with people.",
      "You value harmony and dislike unnecessary tension.",
      "You enjoy helping others and making people feel supported.",
      "You openly express emotions and care about relationships.",
      "You are dependable and people often trust you."
    ],
    fictionalCharacters: [
      "Leslie Knope (Parks and Recreation)",
      "Steve Harrington (Stranger Things)",
      "Molly Weasley (Harry Potter)",
      "Olaf (Frozen)",
      "Rachel Green (Friends)"
    ],
  },

  ISTP: {
    title: "The Virtuoso",
    category: "Explorers",
    headline: "The person who quietly says 'I’ll figure it out' and somehow actually does.",
    summary: "ISTPs naturally learn through action rather than endless discussion. They enjoy understanding how things work and often prefer taking things apart, experimenting, and figuring things out firsthand. While others may spend time planning every detail, ISTPs often trust experience and adapt as they go.\n\nThey value freedom and dislike feeling boxed in by strict rules or unnecessary limits. Problems and challenges can actually become interesting puzzles to solve rather than things to avoid. They usually stay calm in stressful situations and focus on what needs to happen right now. They may appear quiet or relaxed on the outside, but internally their mind is often scanning, analyzing, and preparing for the next move.",
    strengths: [
      "You think practically and focus on solving problems instead of getting stuck on them.",
      "You stay surprisingly calm when situations become stressful or chaotic.",
      "You quickly adapt when plans change instead of completely falling apart.",
      "You notice details and patterns that other people often miss.",
      "You learn best through experience and become skilled by actually doing things."
    ],
    weaknesses: [
      "You sometimes avoid dealing with emotions because fixing a problem feels easier than discussing feelings.",
      "You may appear distant when you're simply focused or thinking quietly.",
      "You can get bored once something becomes repetitive or predictable.",
      "Long-term planning can feel restrictive compared to handling things as they come.",
      "You occasionally jump into risks because curiosity whispers, 'It'll probably be fine.'"
    ],
    traits: [
      "You value independence and prefer figuring things out yourself.",
      "You enjoy action and hands-on experiences over long theories.",
      "You are often quiet but constantly observing your surroundings.",
      "You stay flexible and adapt naturally to changing situations.",
      "You focus on results and practical solutions."
    ],
    fictionalCharacters: [
      "Han Solo (Star Wars)",
      "Black Widow (Marvel)",
      "Zoro (One Piece)",
      "Levi Ackerman (Attack on Titan)",
      "James Bond (007)"
    ],
  },

  ISFP: {
    title: "The Adventurer",
    category: "Explorers",
    headline: "The person who quietly notices beauty in things everyone else walked right past.",
    summary: "ISFPs are creative, independent people who prefer experiencing life rather than trying to control every part of it. They often see the world through emotions, personal values, and small details that others overlook. Whether through art, music, style, or everyday choices, they naturally express parts of themselves without needing to loudly announce it.\n\nThey value freedom deeply and dislike feeling trapped by pressure, expectations, or rigid rules. While they may appear calm and reserved, they often feel things intensely beneath the surface. They enjoy living in the present moment and appreciate experiences that feel real and meaningful. They usually avoid unnecessary conflict and prefer environments where they can simply be themselves without pretending.",
    strengths: [
      "You naturally express creativity and often see beauty in places others miss.",
      "You are kind and care deeply about people around you.",
      "You have a gentle nature that helps others feel comfortable.",
      "You adapt well and can adjust when situations suddenly change.",
      "You notice details and emotions that many people overlook."
    ],
    weaknesses: [
      "You sometimes avoid planning because staying flexible feels more natural.",
      "You may avoid conflict even when something important needs to be addressed.",
      "Making decisions can become difficult when your feelings pull you in different directions.",
      "You can become emotionally overwhelmed when too much pressure builds up.",
      "Strict expectations or constant pressure can quickly drain your energy."
    ],
    traits: [
      "You value freedom and dislike feeling restricted.",
      "You enjoy creativity and expressing yourself in personal ways.",
      "You prefer living in the present rather than worrying too much about distant plans.",
      "You often appear quiet while observing the world around you.",
      "You are sensitive to emotions and deeply value authenticity."
    ],
    fictionalCharacters: [
      "Todoroki Shoto (My Hero Academia)",
      "Eren Yeager (Attack on Titan)",
      "Marceline (Adventure Time)",
      "Katniss Everdeen (The Hunger Games)",
      "Legolas (The Lord of the Rings)"
    ],
  },

  ESTP: {
    title: "The Entrepreneur",
    category: "Explorers",
    headline: "The person who sees a warning sign and immediately becomes curious about what's behind it.",
    summary: "ESTPs are energetic, action-focused people who prefer jumping into life instead of standing around analyzing it forever. They enjoy movement, excitement, and situations that keep things interesting. While some people spend time creating perfect plans, ESTPs often trust themselves to figure things out as they go.\n\nThey learn best through experience and enjoy challenges that require quick thinking and adaptability. Fast-paced environments tend to energize them because they naturally react well under pressure. They are confident, direct, and usually willing to take chances if something looks exciting or worth trying. They live strongly in the present moment and often believe life becomes more interesting when you actually step into it instead of watching from the sidelines.",
    strengths: [
      "You stay confident and usually trust yourself even in unpredictable situations.",
      "You react quickly and can make decisions when others are still hesitating.",
      "You bring energy and excitement into situations and conversations.",
      "You think practically and focus on what works in reality.",
      "You adapt naturally and handle sudden changes without panicking."
    ],
    weaknesses: [
      "You can act so quickly that your brain occasionally sends the 'maybe think first' notification too late.",
      "You sometimes take risks simply because the challenge itself looks interesting.",
      "You can lose interest once something becomes repetitive or predictable.",
      "Long-term planning may feel boring compared to handling things in the moment.",
      "You sometimes underestimate consequences because confidence tells you it'll probably work out."
    ],
    traits: [
      "You enjoy action and prefer doing things over endlessly discussing them.",
      "You are naturally bold and don't hesitate to take initiative.",
      "You enjoy social situations and bring energy into groups.",
      "You focus on the present rather than constantly thinking far ahead.",
      "You actively seek excitement and interesting experiences."
    ],
    fictionalCharacters: [
      "Tony Stark (Iron Man)",
      "Jake Peralta (Brooklyn Nine-Nine)",
      "Dom Toretto (Fast & Furious)",
      "Gojo Satoru (Jujutsu Kaisen)",
      "Captain Jack Sparrow (Pirates of the Caribbean)"
    ],
  },

  ESFP: {
    title: "The Entertainer",
    category: "Explorers",
    headline: "The person who somehow turns ordinary moments into stories people keep talking about later.",
    summary: "ESFPs are energetic, expressive people who naturally bring life into the spaces around them. They enjoy experiencing things directly instead of simply watching from a distance, and they often approach life with curiosity and enthusiasm. For them, life isn't something meant to be observed quietly — it's something meant to be lived.\n\nThey love connecting with people and often create a fun, welcoming atmosphere without even trying. New experiences, exciting moments, and spontaneous adventures tend to pull them in immediately. Routine can feel repetitive and draining because they prefer variety and energy. Underneath all the humor and social energy is someone who genuinely enjoys making people smile and creating memories worth remembering.",
    strengths: [
      "You bring energy into situations and can instantly make environments feel more lively.",
      "You connect with people naturally and make others feel comfortable around you.",
      "You enjoy making people laugh and creating positive experiences.",
      "You express yourself openly and rarely hide your excitement.",
      "You adapt easily and enjoy jumping into new experiences."
    ],
    weaknesses: [
      "You sometimes focus so much on enjoying the moment that future responsibilities start quietly staring at you.",
      "You can get distracted because interesting things keep appearing every five minutes.",
      "Planning too far ahead can feel restrictive or boring.",
      "You sometimes act on excitement before thinking through every consequence.",
      "You may avoid serious or uncomfortable situations longer than you should."
    ],
    traits: [
      "You naturally live in the present moment.",
      "You enjoy attention and sharing experiences with people.",
      "You have a playful personality and enjoy making things more fun.",
      "You are outgoing and usually enjoy social interactions.",
      "You actively seek excitement and memorable experiences."
    ],
    fictionalCharacters: [
      "Barney Stinson (How I Met Your Mother)",
      "Mabel Pines (Gravity Falls)",
      "Captain Jack Sparrow (Pirates of the Caribbean)",
      "Homer Simpson (The Simpsons)",
      "Deadpool (Deadpool)"
    ],
  },
};
