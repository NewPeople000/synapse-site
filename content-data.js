// SYNAPSE OS Content Data Engine
// Curated high-value micro-learning curriculum, challenges, daily discoveries, and toolkits

export const INITIAL_USER_STATE = {
  name: "UNKNOWN",
  avatar: "UN",
  level: "Systems Polymath",
  tier: 4,
  streakDays: 5,
  streakFrozen: false,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  knowledgePoints: 540,
  completedTopics: ["topic-ai-1", "topic-sys-1", "topic-mm-1"],
  savedItems: ["discovery-1", "topic-ai-1", "res-1"],
  completedChallenges: ["quiz-sys-1"],
  interests: ["Artificial Intelligence", "Systems Architecture", "Mental Models", "Product Design", "Engineering"],
  weeklyStats: {
    Mon: { minutes: 18, lessons: 2, points: 60 },
    Tue: { minutes: 12, lessons: 1, points: 40 },
    Wed: { minutes: 25, lessons: 3, points: 110 },
    Thu: { minutes: 15, lessons: 2, points: 70 },
    Fri: { minutes: 30, lessons: 3, points: 130 },
    Sat: { minutes: 10, lessons: 1, points: 30 },
    Sun: { minutes: 22, lessons: 2, points: 100 }
  },
  soundEnabled: true
};

export const CATEGORIES = [
  { id: "all", name: "All Disciplines", icon: "sparkles", count: 18 },
  { id: "ai", name: "AI & Machine Learning", icon: "cpu", count: 5 },
  { id: "systems", name: "Systems & Architecture", icon: "network", count: 4 },
  { id: "mental-models", name: "Mental Models & Logic", icon: "brain", count: 4 },
  { id: "design", name: "Product & UI/UX Design", icon: "palette", count: 3 },
  { id: "engineering", name: "Engineering & Code", icon: "terminal", count: 4 },
  { id: "productivity", name: "High-Performance Work", icon: "zap", count: 3 }
];

export const DAILY_DISCOVERY = {
  id: "discovery-today",
  date: "Today's Briefing",
  category: "Systems & Economics",
  tag: "Core Mental Model",
  readTime: "4 min read",
  title: "The Lindy Effect & Architectural Durability",
  summary: "The Lindy Effect states that the future life expectancy of a non-perishable technology or idea is proportional to its current age. The longer it has survived, the longer it will continue to survive.",
  keyInsight: "Technologies that survive 20 years (like SQL, Unix, HTTP) are far more likely to survive another 20 years than frameworks released 6 months ago. When architecting systems, build your core on Lindy-proven primitives and confine novelty to the edges.",
  practicalRule: "Rule of thumb: In high-stakes architecture, 80% of your stack should be >= 10 years old; only 20% should be experimental bleeding edge.",
  interactiveWidget: {
    type: "lindy-calculator",
    label: "Interactive Lindy Longevity Projector"
  },
  takeaways: [
    "Non-perishable entities (concepts, protocols, software paradigms) age in reverse: every year they survive adds to their statistical survival expectation.",
    "SQL is 50+ years old; its probability of surviving to 2050 is exponentially higher than that of transient ORM abstractions.",
    "Architectural advice: Depend inwards on Lindy constants (TCP, Markdown, POSIX, relational math) rather than transient hype cycles."
  ]
};

export const TOPICS = [
  {
    id: "topic-ai-1",
    category: "ai",
    categoryName: "AI & Machine Learning",
    title: "Test-Time Compute & Chain-of-Thought Scaling",
    subtitle: "Why frontier models are trained to think, backtrack, and self-correct during inference.",
    duration: "6 min read",
    difficulty: "Intermediate",
    progress: 100,
    tags: ["LLMs", "Inference", "Chain-of-Thought"],
    bannerGradient: "from-indigo-500/10 to-violet-500/10",
    overview: "Until recently, AI scaling was dominated by pre-training: throwing billions of tokens into bigger parameter models. The new frontier is Test-Time Compute: letting the model allocate compute dynamically at query time to explore multiple reasoning paths.",
    sections: [
      {
        heading: "1. The Pre-Training Bottleneck",
        content: "Traditional LLMs produce one token per forward pass with a fixed computation budget per word. This means solving '2 + 2' costs roughly the same compute cycles as analyzing a complex legal contract. As high-quality internet text reaches exhaustion, scaling pre-training yields diminishing returns.",
        highlight: "Fixed compute per token creates an intellectual ceiling on complex multi-step reasoning."
      },
      {
        heading: "2. Thinking as Search in Tree Space",
        content: "With Test-Time Compute (exemplified by reasoning models like OpenAI o1/o3 and Google Gemini Flash Thinking), models generate hidden intermediate reasoning tokens. They formulate hypotheses, critique their own steps, backtrack when reaching a dead end, and synthesize final answers.",
        highlight: "Inference compute turns prediction into heuristic search across mathematical and logical solution spaces."
      },
      {
        heading: "3. Interactive Demonstration: Compute vs. Accuracy",
        interactiveType: "compute-scaling-sim",
        content: "Observe how allocating additional 'thinking time' (tokens spent exploring reasoning branches) dramatically raises success rates on competitive math and logic puzzles."
      }
    ],
    quiz: {
      question: "Why does allocating more compute at test-time enable models to solve problems they fail at with standard single-pass generation?",
      options: [
        "Because it retrains the underlying model weights using your question.",
        "Because it enables the model to explore multiple solution trajectories, verify intermediate steps, and backtrack when an error is detected.",
        "Because it connects to a live Google search engine to look up exact answers.",
        "Because it doubles the parameter count in memory during the execution."
      ],
      correctIndex: 1,
      explanation: "Test-time compute treats reasoning as search. Just like a chess engine searches candidate moves rather than playing instantly, the model uses tokens to deliberate, check intermediate theorems, and prune invalid hypotheses."
    },
    takeaways: [
      "Test-time compute shifts the scaling law from training data bounds to algorithmic inference exploration.",
      "Hidden reasoning chains allow error detection and self-correction before committing to user-visible tokens.",
      "Engineering implication: Prompt engineering shifts from crafting rigid output templates to guiding the model's reflection budget."
    ]
  },
  {
    id: "topic-ai-2",
    category: "ai",
    categoryName: "AI & Machine Learning",
    title: "Vector Embeddings: High-Dimensional Geometry Explained",
    subtitle: "How neural networks convert semantics, imagery, and code into mathematical vectors.",
    duration: "5 min read",
    difficulty: "Beginner",
    progress: 65,
    tags: ["Vectors", "Embeddings", "RAG", "Semantic Search"],
    bannerGradient: "from-blue-500/10 to-cyan-500/10",
    overview: "Every modern AI application—from semantic search to Retrieval-Augmented Generation (RAG)—relies on vector embeddings. Here is the intuitive mathematical intuition without dense linear algebra.",
    sections: [
      {
        heading: "1. The Semantic Coordinate System",
        content: "Imagine plotting fruits on a 2D plane: X-axis represents 'sweetness', Y-axis represents 'acidity'. Lemon sits high in acidity, low in sweetness; watermelon sits opposite. Now expand that coordinate plane to 1,536 dimensions. Words with similar meanings cluster together naturally in high-dimensional hyperspace.",
        highlight: "Semantics become spatial proximity: concepts with related meanings share nearby coordinates."
      },
      {
        heading: "2. Cosine Similarity: Measuring Angle, Not Length",
        content: "When comparing two vectors, Euclidean distance can be distorted by document length. Cosine similarity measures the angle between two vector arrows: an angle of 0° means cosine = 1 (identical orientation and topic), while 90° means orthogonality (unrelated topics).",
        highlight: "Cosine similarity allows matching short queries to long paragraphs with identical semantic intent."
      },
      {
        heading: "3. Interactive Embedding Geometry",
        interactiveType: "vector-similarity-demo",
        content: "Test how vector distance calculates closeness between diverse concept pairs."
      }
    ],
    quiz: {
      question: "Why is Cosine Similarity generally preferred over Euclidean distance for text search embeddings?",
      options: [
        "Cosine similarity computes faster on CPUs than Euclidean distance.",
        "Cosine similarity measures direction rather than magnitude, preventing document length from penalizing semantic relevance.",
        "Euclidean distance cannot operate on dimensions higher than 3.",
        "Cosine similarity always converts text into binary 1s and 0s."
      ],
      correctIndex: 1,
      explanation: "Magnitude often reflects word frequency or document length rather than core meaning. By evaluating the angle (cosine) rather than arrow distance, long articles and concise questions align perfectly on identical topics."
    },
    takeaways: [
      "Vector embeddings project fuzzy human language into structured continuous geometric spaces.",
      "Cosine distance calculates thematic alignment independently of passage length.",
      "RAG pipelines work by converting user questions into vectors and retrieving the K-nearest vector chunks."
    ]
  },
  {
    id: "topic-sys-1",
    category: "systems",
    categoryName: "Systems & Architecture",
    title: "The Raft Consensus Algorithm: How Distributed Systems Agree",
    subtitle: "Understanding leader election, log replication, and split-brain prevention.",
    duration: "7 min read",
    difficulty: "Advanced",
    progress: 100,
    tags: ["Distributed Systems", "Consensus", "Raft", "Fault Tolerance"],
    bannerGradient: "from-amber-500/10 to-orange-500/10",
    overview: "When databases run across 5 different servers in 3 data centers, how do they ensure that a customer's bank balance update is never corrupted even if cables are cut? Enter Raft.",
    sections: [
      {
        heading: "1. The Consensus Dilemma",
        content: "In distributed systems, networks drop packets, nodes crash, and clocks drift. Raft was designed by Stanford researchers to be radically more understandable than Paxos while offering mathematical equivalence in safety.",
        highlight: "A Raft cluster requires a simple majority (Quorum = N/2 + 1) to commit any state change."
      },
      {
        heading: "2. Leader Election & Heartbeats",
        content: "At any moment, each node is in one of three states: Leader, Follower, or Candidate. If followers stop receiving periodic heartbeats from the leader due to server failure, an election timer expires and nodes vote for a new leader using randomized backoff timeouts.",
        highlight: "Randomized timers prevent vote split ties when multiple nodes attempt to claim leadership simultaneously."
      },
      {
        heading: "3. Interactive Cluster Partition Simulator",
        interactiveType: "raft-quorum-sim",
        content: "Simulate a network split between 5 nodes and witness how minority partitions are forbidden from accepting commits."
      }
    ],
    quiz: {
      question: "In a 5-node Raft cluster, what is the minimum number of healthy nodes required to commit a write transaction?",
      options: [
        "All 5 nodes must be online and agree.",
        "At least 3 nodes (majority quorum = 5/2 + 1 = 3).",
        "Only 2 nodes are needed if one of them is the designated leader.",
        "Only 1 node if it holds the primary log."
      ],
      correctIndex: 1,
      explanation: "Consensus requires a strict majority (Quorum = floor(N/2) + 1). In a 5-node cluster, 3 nodes guarantee that any two quorums overlap by at least one node containing the most up-to-date log entry."
    },
    takeaways: [
      "Quorum mechanics (N/2 + 1) mathematically guarantee that two opposing partitions cannot both commit changes simultaneously.",
      "Randomized election timeouts solve distributed coordination deadlocks elegantly.",
      "Modern cloud databases like CockroachDB, etcd (Kubernetes), and TiKV rely on Raft for rock-solid consistency."
    ]
  },
  {
    id: "topic-mm-1",
    category: "mental-models",
    categoryName: "Mental Models & Logic",
    title: "First Principles & Inversion: Deconstructing Hard Problems",
    subtitle: "The dual thinking frameworks used by Feynman, Munger, and top systems engineers.",
    duration: "5 min read",
    difficulty: "Beginner",
    progress: 100,
    tags: ["Mental Models", "Inversion", "Charlie Munger", "First Principles"],
    bannerGradient: "from-emerald-500/10 to-teal-500/10",
    overview: "Most people reason by analogy—copying what others do with slight tweaks. First Principles breaks problems down to their fundamental physical truths. Inversion attacks problems from the finish line backwards.",
    sections: [
      {
        heading: "1. Reasoning by Analogy vs. First Principles",
        content: "Reasoning by analogy says: 'Battery packs cost $600/kWh because everyone sells them for $600/kWh.' First principles asks: 'What are the physical constituents of a battery? Cobalt, nickel, aluminum, carbon, polymers, and a steel can. If we bought them on the London Metal Exchange, what would they cost? $80/kWh.' The rest is purely assembly optimization.",
        highlight: "Analogy preserves existing inefficiencies; First Principles exposes the irreducible floor of possibility."
      },
      {
        heading: "2. The Inversion Method (Jacobi & Munger)",
        content: "'Invert, always invert'—German mathematician Carl Jacobi. Instead of asking: 'How do I build a wildly successful software product?', ask: 'What are all the guaranteed ways to make this product fail miserably?' (Confusing onboarding, slow response time, ignoring user data, broken billing). Systematically eliminate failure vectors.",
        highlight: "It is often dramatically easier to identify and avoid catastrophic stupidity than it is to achieve brilliant inspiration."
      },
      {
        heading: "3. Interactive Decision Framework",
        interactiveType: "inversion-matrix-tool",
        content: "Apply inversion to your current quarterly goals and identify hidden anti-goals."
      }
    ],
    quiz: {
      question: "Which question exemplifies the 'Inversion' mental model when planning a mission-critical project?",
      options: [
        "What are our competitor's top 3 marketing strategies?",
        "What are the specific ways this launch could fail disastrously, and how do we systematically eliminate each one?",
        "How can we maximize positive press coverage on launch day?",
        "Can we hire 10 more engineers to speed up delivery?"
      ],
      correctIndex: 1,
      explanation: "Inversion approaches the problem backwards by asking how catastrophic failure would occur, allowing teams to construct defenses against high-probability pitfalls that optimism blinds them to."
    },
    takeaways: [
      "Strip problems down to foundational undeniable truths; eliminate assumptions inherited from legacy industry customs.",
      "Inversion shifts focus from elusive perfection to systematically cutting out points of failure.",
      "Combining both frameworks provides clarity under high ambiguity and resource constraints."
    ]
  },
  {
    id: "topic-design-1",
    category: "design",
    categoryName: "Product & UI/UX Design",
    title: "Progressive Disclosure & Cognitive Ergonomics",
    subtitle: "Designing interfaces that feel deceptively simple yet deliver pro-grade power.",
    duration: "5 min read",
    difficulty: "Intermediate",
    progress: 0,
    tags: ["UX Design", "HCI", "Cognitive Load", "Linear Design"],
    bannerGradient: "from-rose-500/10 to-pink-500/10",
    overview: "Why do tools like Linear, Notion, and Arc feel so fast and light despite containing thousands of features? The answer is ruthless Progressive Disclosure.",
    sections: [
      {
        heading: "1. The Law of Conservation of Complexity (Tesler's Law)",
        content: "Every system has an inherent amount of complexity that cannot be reduced—it can only be transferred. Either the software absorbs the complexity through thoughtful defaults and state machines, or the user is forced to suffer it through cluttered menus and confusing controls.",
        highlight: "Great tools absorb complexity behind clean defaults and reveal depth only when demanded."
      },
      {
        heading: "2. The Three Layers of Progressive Disclosure",
        content: "Layer 1: Primary action visible at all times (e.g., search, create). Layer 2: Contextual secondary controls revealed on hover, selection, or focus. Layer 3: Power user command palette (Cmd+K) and keyboard shortcuts for immediate traversal without mouse hunting.",
        highlight: "A beginner should never feel intimidated, and an expert should never feel bottlenecked."
      }
    ],
    quiz: {
      question: "According to Tesler's Law (Law of Conservation of Complexity), what happens when a software team refuses to design opinionated defaults?",
      options: [
        "The software runs twice as fast because there is less code.",
        "The inherent complexity is pushed onto the end user in the form of settings, cognitive strain, and decision fatigue.",
        "The interface automatically adapts to user preferences without code.",
        "The system eliminates technical debt."
      ],
      correctIndex: 1,
      explanation: "Complexity is conserved. If software developers and designers don't make the hard decisions about reasonable defaults and streamlined workflows, the burden directly transfers to the user's cognitive load."
    },
    takeaways: [
      "Keep initial surfaces clean: show only what is essential for the current user milestone.",
      "Reveal secondary capabilities contextually as user intent becomes clear.",
      "Empower power users with hotkeys and command palettes without cluttering the visual canvas."
    ]
  },
  {
    id: "topic-eng-1",
    category: "engineering",
    categoryName: "Engineering & Code",
    title: "Zero-Cost Abstractions: Performance Without Ergonomic Tax",
    subtitle: "How modern compilers optimize high-level functional code into raw assembly.",
    duration: "6 min read",
    difficulty: "Advanced",
    progress: 0,
    tags: ["Compilers", "Rust", "C++", "Performance"],
    bannerGradient: "from-emerald-500/10 to-teal-500/10",
    overview: "Bjarne Stroustrup famously coined the term: 'What you don't use, you don't pay for. And further: What you do use, you couldn't hand code any better.'",
    sections: [
      {
        heading: "1. The Classic Trade-off Myth",
        content: "For decades, programmers believed that clean, expressive, object-oriented or functional code was inherently slower than dirty C code with raw pointers. Zero-cost abstractions challenge this by moving all translation overhead to compile time.",
        highlight: "Zero runtime penalty for expressive language constructs like iterators, pattern matching, and type guards."
      },
      {
        heading: "2. Monomorphization and Inlining",
        content: "When you write generic functions with static dispatch, modern compilers duplicate and tailor the machine code for the exact types used. Function calls disappear via inlining, and loops with map/filter collapse into direct vectorized SIMD instructions.",
        highlight: "The compiler turns declarative functional intent into hyper-optimized cache-friendly assembly."
      }
    ],
    quiz: {
      question: "What does 'Zero-Cost Abstraction' mean in practical software engineering?",
      options: [
        "The software license is completely open-source and free of financial cost.",
        "The high-level language abstraction introduces zero runtime CPU/memory overhead compared to hand-written low-level code.",
        "Compiling the application takes zero seconds.",
        "The code uses zero memory allocations across the entire program lifetime."
      ],
      correctIndex: 1,
      explanation: "Zero-cost means zero runtime overhead. You get readable, safe, high-level code constructs (like iterators and type traits) that compile down into machine code as fast as if you had written bespoke assembly by hand."
    },
    takeaways: [
      "Modern compilers are aggressive optimizers: readable code and fast execution are no longer opposites.",
      "Static dispatch and inlining eliminate function call indirection at runtime.",
      "Leverage expressive idioms with confidence when working in languages that support zero-cost designs."
    ]
  },
  {
    id: "topic-prod-1",
    category: "productivity",
    categoryName: "High-Performance Work",
    title: "Ultradian Rhythms & The 90-Minute Focus Protocol",
    subtitle: "Aligning deep creative work with the brain's biological energy cycles.",
    duration: "4 min read",
    difficulty: "Beginner",
    progress: 0,
    tags: ["Neuroscience", "Productivity", "Deep Work", "Energy Management"],
    bannerGradient: "from-purple-500/10 to-indigo-500/10",
    overview: "Just as our bodies follow a 24-hour Circadian cycle for sleep and wakefulness, our nervous systems cycle through 90-to-120 minute Ultradian waves of alertness throughout the waking day.",
    sections: [
      {
        heading: "1. The Neurobiology of the Ultradian Wave",
        content: "During the first 10-15 minutes of a focus sprint, your brain undergoes friction as dopamine and norepinephrine ramp up attention. Peak cognitive throughput occurs between minutes 25 and 75. Beyond minute 90, adenosine builds up, causing mental fatigue and loss of synthesis capacity.",
        highlight: "Fighting through post-90-minute exhaustion produces low-quality code and cognitive errors."
      },
      {
        heading: "2. Strategic Decompression",
        content: "To recharge the neural circuits, you must engage in deliberate non-screen decompression for 15-20 minutes: walking, hydration, or panoramic vision (looking at a distant horizon). Checking social media does NOT decompress dopamine circuits—it exhausts them further.",
        highlight: "True rest is passive sensory decompression, not swapping from code editor to smartphone."
      }
    ],
    quiz: {
      question: "Why is switching directly from coding to scrolling social media during a 15-minute break counterproductive for deep cognitive stamina?",
      options: [
        "Because phone screens are smaller than desktop monitors.",
        "Because high-novelty social media continues stimulating dopamine and visual processing pathways, preventing neural recovery.",
        "Because social media uses too much Wi-Fi bandwidth.",
        "Because it is prohibited by most modern operating systems."
      ],
      correctIndex: 1,
      explanation: "Recovery requires sensory decompression. High-velocity social feeds trigger continuous dopamine spikes and attentional shifts, leaving the prefrontal cortex depleted when you return to your primary task."
    },
    takeaways: [
      "Structure high-leverage intellectual work into maximum two 90-minute blocks per day.",
      "Expect the first 10 minutes to feel uncomfortable as neural circuits synchronize.",
      "Protect your decompression intervals: step away from screens and look into the distance."
    ]
  }
];

export const CHALLENGES = [
  {
    id: "quiz-sys-1",
    category: "systems",
    type: "scenario",
    title: "Distributed Caching Dilemma",
    difficulty: "Medium",
    points: 35,
    scenario: "Your e-commerce flash sale service receives 50,000 requests/second. The database is bottlenecked. You want to cache product inventories. Which strategy prevents cache stampede ('thundering herd') while preserving inventory correctness?",
    options: [
      {
        text: "Direct Cache-Aside without locking: all worker threads query the database if the cache key is missing.",
        correct: false,
        feedback: "Incorrect. Under 50,000 req/sec, when the cache expires, thousands of concurrent requests will slam the database simultaneously, causing total collapse (Cache Stampede)."
      },
      {
        text: "Mutex-guarded Cache Population with Probabilistic Early Expiration (XFetch algorithm).",
        correct: true,
        feedback: "Spot on! By using a distributed mutex or probabilistic early background refresh (XFetch), only a single background worker regenerates the cache value before it hard-expires, completely preventing the thundering herd."
      },
      {
        text: "Set Cache Time-To-Live (TTL) to 30 days and never invalidate keys.",
        correct: false,
        feedback: "Incorrect. Setting TTL to 30 days causes severe data staleness. Flash sales will sell out-of-stock items, corrupting customer orders."
      },
      {
        text: "Route every single request directly to a replica database without any in-memory cache.",
        correct: false,
        feedback: "Incorrect. Read replicas cannot handle 50k writes/sec during inventory depletion and still introduce replication lag race conditions."
      }
    ],
    whyItMatters: "Cache stampedes are responsible for some of the largest cloud outages during Black Friday and ticket sales. Probabilistic background refresh (XFetch) ensures that cache misses remain practically zero under extreme load."
  },
  {
    id: "match-concepts-1",
    category: "mental-models",
    type: "matcher",
    title: "Match the System Law to Its Core Principle",
    difficulty: "Quick",
    points: 25,
    pairs: [
      { term: "Amdahl's Law", match: "The speedup of a program is strictly limited by its serial fraction." },
      { term: "Conway's Law", match: "System architectures mirror the communication structures of their organizations." },
      { term: "Goodhart's Law", match: "When a measure becomes a target, it ceases to be a good measure." },
      { term: "Tesler's Law", match: "Complexity in any system cannot be eliminated, only shifted." }
    ],
    whyItMatters: "These four laws represent the foundational compass for engineering leaders, software architects, and product strategists navigating organizational and technical trade-offs."
  },
  {
    id: "code-logic-1",
    category: "ai",
    type: "logic-check",
    title: "Spot the LLM Prompting Anti-Pattern",
    difficulty: "Medium",
    points: 30,
    scenario: "Review the system prompt below for an automated medical diagnosis classification tool. Why will it fail reliably in production?",
    codeSnippet: `// System Prompt:
"You are a medical assistant. Categorize the user symptoms into high, medium, or low urgency. 
Do not make any mistakes. Always be 100% accurate. 
If unsure, try your best to guess the disease."`,
    options: [
      {
        text: "Telling an LLM 'do not make any mistakes' doesn't eliminate hallucinations, and instructing it to 'guess when unsure' violates defensive refusal safeguards.",
        correct: true,
        feedback: "Precisely. Directives like 'be 100% accurate' are ineffective semantic wishes. More critically, instructing an AI to guess when uncertain induces dangerous hallucinations instead of forcing structured fallback, uncertainty quantification, or escalation to human experts."
      },
      {
        text: "The prompt is written in English instead of Python.",
        correct: false,
        feedback: "Incorrect. System prompts are natural language instructions; programming language does not determine efficacy."
      },
      {
        text: "The prompt should be at least 2,000 words long to be taken seriously by the transformer.",
        correct: false,
        feedback: "Incorrect. Prompt bloat degrades instruction adherence. Conciseness and strict output schema constraints are far superior."
      }
    ],
    whyItMatters: "Safety-critical AI prompts must explicitly demand deterministic schemas, give the model a safe 'cannot answer' fallback exit, and penalize ungrounded speculation."
  }
];

export const RESOURCES = [
  {
    id: "res-1",
    category: "ai",
    type: "Interactive Tool",
    title: "Prompt Engineering Architecture Matrix",
    badge: "Interactive Cheatsheet",
    readTime: "Bookmark & Use",
    description: "Production-ready prompt engineering templates for few-shot reasoning, structured JSON schemas, role conditioning, and self-consistency voting.",
    contentPreview: "Contains 6 battle-tested prompt design scaffolds with zero fluff, input parameters, and negative guardrails."
  },
  {
    id: "res-2",
    category: "systems",
    type: "Framework",
    title: "The Distributed Systems Reliability Compass",
    badge: "Mental Model",
    readTime: "Quick Reference",
    description: "An interactive decision framework for choosing between Eventual Consistency vs Strong Consistency, Paxos vs Raft, and Caching Topologies.",
    contentPreview: "Decision tree: If latency < 10ms AND writes > 10k/sec -> Log-Structured Merge (LSM) + CQRS."
  },
  {
    id: "res-3",
    category: "mental-models",
    type: "Toolkit",
    title: "The Polymath Thinking Toolbox (30 Core Models)",
    badge: "Reference Guide",
    readTime: "Evergreen",
    description: "Distilled executive summaries of Occam's Razor, Inversion, Second-Order Thinking, Gall's Law, Chesterton's Fence, and Pareto Distribution.",
    contentPreview: "Gall's Law: A complex system that works is invariably found to have evolved from a simple system that worked."
  },
  {
    id: "res-4",
    category: "design",
    type: "Spec Sheet",
    title: "Micro-Interaction Timing & Easing Curves",
    badge: "Design System",
    readTime: "Quick Reference",
    description: "Standardized cubic-bezier curves, duration guidelines (150ms hover vs 300ms modal), and spatial physics for high-end SaaS products.",
    contentPreview: "Spring physics: mass 1, tension 170, friction 26 for tactile non-distracting button responses."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "First Discovery",
    desc: "Uncovered your first daily insight",
    unlocked: true,
    icon: "compass",
    date: "Unlocked 5 days ago"
  },
  {
    id: "ach-2",
    title: "5-Day Continuum",
    desc: "Maintained a 5-day active learning streak",
    unlocked: true,
    icon: "flame",
    date: "Unlocked today"
  },
  {
    id: "ach-3",
    title: "Systems Thinker",
    desc: "Completed 3 deep architectural modules",
    unlocked: true,
    icon: "cpu",
    date: "Unlocked yesterday"
  },
  {
    id: "ach-4",
    title: "Challenge Maestro",
    desc: "Solve 5 quick challenges with first-try accuracy",
    unlocked: false,
    progress: "3 / 5 completed",
    icon: "target"
  },
  {
    id: "ach-5",
    title: "Polymath Spectrum",
    desc: "Engage with lessons across 4 different disciplines",
    unlocked: true,
    icon: "layers",
    date: "Unlocked 2 days ago"
  },
  {
    id: "ach-6",
    title: "Retention Virtuoso",
    desc: "Reach a 14-day continuous learning streak",
    unlocked: false,
    progress: "5 / 14 days",
    icon: "award"
  }
];
