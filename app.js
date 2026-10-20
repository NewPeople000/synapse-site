// ==========================================================================
// SYNAPSE OS — Upgraded Application & Micro-Learning Engine
// Production-quality personal learning, discovery & retention platform
// ==========================================================================

// --------------------------------------------------------------------------
// 1. Initial State & Storage Schema
// --------------------------------------------------------------------------
const INITIAL_USER_STATE = {
  name: "UNKNOWN",
  avatar: "UN",
  level: "Systems Polymath",
  tier: 4,
  streakDays: 5,
  streakFrozen: false,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  knowledgePoints: 540,
  activeTopicId: "topic-ai-agent",
  completedTopics: ["topic-ai-1", "topic-sys-1", "topic-mm-1"],
  completedTopicDates: {
    "topic-ai-1": "2026-09-28",
    "topic-sys-1": "2026-09-29",
    "topic-mm-1": "2026-09-30"
  },
  savedItems: ["discovery-today", "topic-ai-agent", "topic-ai-1", "res-1"],
  completedChallenges: [
    { id: "sprint-ai", score: 4, total: 4, points: 75, date: "2026-09-30" }
  ],
  interests: ["AI", "Programming", "Technology", "Design", "Productivity"],
  weeklyStats: {
    Mon: { minutes: 18, lessons: 2, points: 60 },
    Tue: { minutes: 12, lessons: 1, points: 40 },
    Wed: { minutes: 25, lessons: 3, points: 110 },
    Thu: { minutes: 15, lessons: 2, points: 70 },
    Fri: { minutes: 30, lessons: 3, points: 130 },
    Sat: { minutes: 10, lessons: 1, points: 30 },
    Sun: { minutes: 22, lessons: 2, points: 100 }
  },
  recentSearches: ["Agents", "Consensus", "Lindy Effect", "Cache Stampede", "B-Tree"],
  soundEnabled: true,
  theme: "light"
};

// --------------------------------------------------------------------------
// 2. Curated Disciplines & Knowledge Catalog
// --------------------------------------------------------------------------
const CATEGORIES = [
  { id: "all", name: "All Disciplines", icon: "sparkles", count: 12 },
  { id: "ai", name: "AI", icon: "cpu", count: 3 },
  { id: "programming", name: "Programming", icon: "terminal", count: 3 },
  { id: "technology", name: "Technology", icon: "network", count: 2 },
  { id: "design", name: "Design", icon: "palette", count: 1 },
  { id: "business", name: "Business", icon: "briefcase", count: 1 },
  { id: "science", name: "Science", icon: "activity", count: 1 },
  { id: "productivity", name: "Productivity", icon: "zap", count: 1 }
];

const DAILY_DISCOVERY = {
  id: "discovery-today",
  date: "Today's 5-Minute Knowledge",
  category: "technology",
  categoryName: "Technology & Systems",
  tag: "Core Mental Model",
  readTime: "4 min read",
  title: "The Lindy Effect & Architectural Durability",
  summary: "The Lindy Effect states that the future life expectancy of a non-perishable technology or idea is proportional to its current age. The longer it has survived, the longer it will continue to survive.",
  keyInsight: "Technologies that survive 20 years (like SQL, Unix, HTTP) are far more likely to survive another 20 years than frameworks released 6 months ago. When architecting systems, build your core on Lindy-proven primitives and confine novelty to the edges.",
  practicalRule: "Rule of thumb: In high-stakes architecture, 80% of your stack should be >= 10 years old; only 20% should be experimental bleeding edge.",
  takeaways: [
    "Non-perishable entities (concepts, protocols, software paradigms) age in reverse: each surviving year adds to their statistical survival expectation.",
    "SQL is 50+ years old; its probability of surviving to 2050 is exponentially higher than that of transient ORM abstractions.",
    "Architectural advice: Depend inwards on Lindy constants (TCP, Markdown, POSIX, relational math) rather than transient hype cycles."
  ]
};

const TOPICS = [
  {
    id: "topic-ai-agent",
    category: "ai",
    categoryName: "AI",
    title: "Why AI Agents Are Changing Software Development",
    subtitle: "From autocomplete to autonomous reasoning loops, tool calling, and deterministic test harnesses.",
    duration: "5 min",
    durationMinutes: 5,
    difficulty: "Intermediate",
    progress: 0,
    tags: ["Agents", "LLMs", "Tool Calling", "Architecture"],
    overview: "Software development is shifting from manual coding to agent orchestration. Rather than predicting the next token in a vacuum, modern AI agents operate in closed execution loops: formulating hypotheses, inspecting schemas, calling sandbox tools, observing runtime errors, and iterating until tests pass.",
    sections: [
      {
        heading: "1. The ReAct Loop: Reasoning Meets Action",
        content: "Traditional LLM wrappers generate passive text. An agent, by contrast, operates on the ReAct (Reasoning + Acting) paradigm. Given a goal like 'Fix failing authentication test', the agent first forms an internal plan, generates an environment action (e.g. running a test command), parses stdout/stderr, and adapts its next action based on reality.",
        highlight: "Agents bridge generative models with deterministic environments by observing tool execution output."
      },
      {
        heading: "2. Tool Calling and Environment Grounding",
        content: "Frontier models are fine-tuned to emit structured function calls (JSON schemas). Rather than hallucinating database records or filesystem states, the agent calls dedicated tool functions: `run_test()`, `read_file()`, `git_diff()`. The agent never directly touches prod; it operates against rigorous API contracts.",
        highlight: "Tools convert fuzzy probabilistic predictions into concrete, verifiable real-world side effects."
      },
      {
        heading: "3. Interactive Agent Execution Loop",
        interactiveType: "agent-loop-sim",
        content: "Step through an autonomous agent cycle resolving a production test failure."
      }
    ],
    quiz: {
      question: "What is the primary architectural difference between an AI code autocomplete tool and an autonomous AI coding agent?",
      options: [
        "Agents use smaller models to generate code faster.",
        "Agents execute iterative feedback loops where they call sandbox tools, observe output, and self-correct based on test results.",
        "Autocomplete tools can write compiler assembly, while agents cannot.",
        "Agents replace the need for unit testing completely."
      ],
      correctIndex: 1,
      explanation: "Autocomplete operates strictly on single forward-pass next-token prediction. An agent operates in an environment loop with tool calling, observing execution feedback (like test failures) to self-correct autonomously."
    },
    takeaways: [
      "AI coding has evolved from static autocomplete to iterative goal-directed execution loops.",
      "Grounding via structured tool calling prevents hallucinated code from lingering without verification.",
      "The engineer's role elevates from manual syntax writing to defining clear specifications, constraints, and test harnesses for agents."
    ]
  },
  {
    id: "topic-ai-1",
    category: "ai",
    categoryName: "AI",
    title: "Test-Time Compute & Chain-of-Thought Scaling",
    subtitle: "Why frontier models are trained to deliberate, backtrack, and self-correct during inference.",
    duration: "6 min",
    durationMinutes: 6,
    difficulty: "Intermediate",
    progress: 100,
    tags: ["LLMs", "Inference", "Chain-of-Thought", "Scaling Laws"],
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
        "Because it doubles the parameter count in memory during execution."
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
    categoryName: "AI",
    title: "Vector Embeddings: High-Dimensional Geometry Explained",
    subtitle: "How neural networks convert semantics, imagery, and code into mathematical vectors.",
    duration: "5 min",
    durationMinutes: 5,
    difficulty: "Beginner",
    progress: 65,
    tags: ["Vectors", "Embeddings", "RAG", "Semantic Search"],
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
    id: "topic-web-internals",
    category: "programming",
    categoryName: "Programming",
    title: "What Happens Under the Hood When You Open a Website",
    subtitle: "The complete journey from DNS resolution and TLS handshake to DOM parsing and GPU rasterization.",
    duration: "6 min",
    durationMinutes: 6,
    difficulty: "Intermediate",
    progress: 0,
    tags: ["Networking", "Browsers", "DNS", "Performance"],
    overview: "You type a URL into your browser and press Enter. Within 300 milliseconds, interactive pixels paint across your screen. Behind that blink of an eye is an astonishing multi-layer dance of protocols.",
    sections: [
      {
        heading: "1. DNS Lookup & The TLS 1.3 Handshake",
        content: "Your browser checks local cache, asks resolver servers for the domain IP, and opens a TCP connection. With TLS 1.3, key exchange (Diffie-Hellman) and encryption setup are completed in just 1 Round Trip Time (1-RTT), immediately securing the HTTP/2 or HTTP/3 stream.",
        highlight: "Modern TLS 1.3 cut connection latency in half compared to older security protocols."
      },
      {
        heading: "2. The Critical Rendering Path",
        content: "The browser receives the initial HTML bytes, tokenizes them, and constructs the DOM tree. Parallel CSS tokens form the CSSOM. When combined into the Render Tree, the browser computes exact pixel geometry (Layout / Reflow) and dispatches drawing commands to the GPU (Paint & Composite).",
        highlight: "Offloading layer compositing to GPU hardware threads prevents page scrolling from locking the main JavaScript thread."
      }
    ],
    quiz: {
      question: "Which phase of the browser rendering pipeline is responsible for calculating the exact geometry and pixel coordinates of elements?",
      options: [
        "DNS Resolution",
        "Layout (Reflow)",
        "Tokenization",
        "GPU Rasterization"
      ],
      correctIndex: 1,
      explanation: "Layout (also called Reflow) calculates the exact physical dimensions and positions of all visible nodes in the render tree before painting occurs."
    },
    takeaways: [
      "Network latency is dominated by round trips (DNS, TCP, TLS); minimizing round trips is the single largest performance lever.",
      "The Critical Rendering Path converts HTML and CSS into DOM and CSSOM before constructing the Render Tree.",
      "Optimizing CSS and deferring non-critical JS unblocks the browser's initial paint."
    ]
  },
  {
    id: "topic-db-internals",
    category: "technology",
    categoryName: "Technology",
    title: "How Databases Store & Index Data: B-Trees vs. LSM Trees",
    subtitle: "Why relational databases choose B+ Trees for read latency, while distributed stores pick Log-Structured Merge Trees.",
    duration: "7 min",
    durationMinutes: 7,
    difficulty: "Advanced",
    progress: 0,
    tags: ["Databases", "B-Tree", "LSM-Tree", "Storage Engines"],
    overview: "Every database performance characteristic is dictated by its underlying on-disk storage engine. Understanding B+ Trees versus LSM Trees gives you the architectural intuition to choose between PostgreSQL, MySQL, Cassandra, and RocksDB.",
    sections: [
      {
        heading: "1. B+ Trees: In-Place Mutation for Fast Reads",
        content: "B+ Trees organize data into balanced tree pages with high branching factors (typically 100+ children per node). Traversing a tree of 100 million rows requires only 3 to 4 disk reads. However, updates write directly to random disk pages, incurring heavy write amplification.",
        highlight: "B+ Trees maximize read speed at the expense of random write I/O overhead."
      },
      {
        heading: "2. LSM Trees: Append-Only Sequential Writes",
        content: "LSM (Log-Structured Merge) trees never mutate data in place. Incoming writes append to an in-memory sorted table (MemTable) and a sequential commit log. When full, MemTables flush sequentially to immutable disk SSTables, which background threads merge and compact.",
        highlight: "Sequential disk writes are orders of magnitude faster than random writes on both NVMe SSDs and spinning disks."
      }
    ],
    quiz: {
      question: "Why do high-throughput write-heavy systems (like financial tick data and timeseries telemetry) prefer LSM-Tree engines?",
      options: [
        "Because LSM trees use zero RAM.",
        "Because writes are converted into fast sequential appends rather than expensive random in-place disk mutations.",
        "Because B+ Trees cannot store strings.",
        "Because LSM trees don't require compaction."
      ],
      correctIndex: 1,
      explanation: "LSM trees buffer writes in memory and flush them as sequential streams to disk, avoiding random disk seeks and delivering massively superior write throughput."
    },
    takeaways: [
      "Storage engines represent a fundamental trade-off between read latency and write throughput.",
      "B+ Trees provide predictable single-digit millisecond random reads through structured page hierarchies.",
      "LSM Trees dominate modern cloud-native distributed databases (CockroachDB, RocksDB, TiKV) due to append-only write speeds."
    ]
  },
  {
    id: "topic-api-protocols",
    category: "programming",
    categoryName: "Programming",
    title: "How APIs Communicate: REST vs. GraphQL vs. gRPC vs. WebSockets",
    subtitle: "Matching network transport protocols and serialization formats to architectural throughput requirements.",
    duration: "5 min",
    durationMinutes: 5,
    difficulty: "Beginner",
    progress: 0,
    tags: ["APIs", "gRPC", "Protobuf", "WebSockets"],
    overview: "Modern architectures are constellations of microservices and client interfaces. Using the wrong communication protocol introduces latency, payload bloat, and operational complexity.",
    sections: [
      {
        heading: "1. HTTP/JSON (REST) vs. Binary Protocol Buffers (gRPC)",
        content: "REST over JSON is ubiquitous, human-readable, and easy to debug in browser dev tools. But JSON serialization and textual parsing carry severe CPU overhead. In backend service-to-service communication, gRPC over HTTP/2 using binary Protocol Buffers reduces payload size by 60-80% and cuts CPU serialization latency drastically.",
        highlight: "Use REST for public browser-facing APIs; use gRPC for high-throughput internal microservice meshes."
      },
      {
        heading: "2. Full-Duplex WebSockets vs. Unidirectional Streaming",
        content: "When building real-time dashboards, multiplayer canvases, or live market tickers, HTTP polling wastefully opens and closes connections. WebSockets maintain a persistent, bidirectional TCP connection, enabling sub-millisecond server-to-client pushes with single-byte framing overhead.",
        highlight: "WebSockets eliminate HTTP header overhead for continuous bidirectional data streams."
      }
    ],
    quiz: {
      question: "What is the primary advantage of gRPC over standard REST for inter-service communication inside a backend cluster?",
      options: [
        "gRPC works without requiring servers.",
        "Binary Protocol Buffers and HTTP/2 multiplexing provide significantly smaller payloads and lower serialization CPU overhead.",
        "gRPC is supported natively by all HTML5 form tags without JavaScript.",
        "gRPC eliminates the need for database indexes."
      ],
      correctIndex: 1,
      explanation: "Protocol Buffers serialize structured data into compact binary representations, and HTTP/2 multiplexes multiple streams over a single connection, making internal cluster calls dramatically faster than verbose JSON over HTTP/1.1."
    },
    takeaways: [
      "REST is the global standard for public developer ergonomics and browser interoperability.",
      "gRPC is the gold standard for high-performance internal microservice communication.",
      "Persistent WebSockets solve real-time streaming needs where HTTP polling causes unacceptable latency."
    ]
  },
  {
    id: "topic-sys-1",
    category: "technology",
    categoryName: "Technology",
    title: "The Raft Consensus Algorithm: How Distributed Systems Agree",
    subtitle: "Understanding leader election, log replication, and split-brain prevention.",
    duration: "7 min",
    durationMinutes: 7,
    difficulty: "Advanced",
    progress: 100,
    tags: ["Distributed Systems", "Consensus", "Raft", "Fault Tolerance"],
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
    id: "topic-eng-1",
    category: "programming",
    categoryName: "Programming",
    title: "Zero-Cost Abstractions: Performance Without Ergonomic Tax",
    subtitle: "How modern compilers optimize high-level functional code into raw assembly.",
    duration: "6 min",
    durationMinutes: 6,
    difficulty: "Advanced",
    progress: 0,
    tags: ["Compilers", "Rust", "C++", "Performance"],
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
    id: "topic-design-1",
    category: "design",
    categoryName: "Design",
    title: "Progressive Disclosure & Cognitive Ergonomics in Modern UX",
    subtitle: "Designing interfaces that feel deceptively simple yet deliver pro-grade power.",
    duration: "5 min",
    durationMinutes: 5,
    difficulty: "Intermediate",
    progress: 0,
    tags: ["UX Design", "HCI", "Cognitive Load", "Linear Design"],
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
    id: "topic-biz-moats",
    category: "business",
    categoryName: "Business",
    title: "Economic Moats: Network Effects, Switching Costs & Scale Economies",
    subtitle: "Hamilton Helmer's 7 Powers and why durable tech products win through structural defensibility.",
    duration: "6 min",
    durationMinutes: 6,
    difficulty: "Intermediate",
    progress: 0,
    tags: ["Business", "Strategy", "Economic Moats", "Network Effects"],
    overview: "In software, feature parity is commoditized faster than ever. What creates enduring market value is not moving first, but building structural economic moats that competitors cannot bridge even if they copy your source code.",
    sections: [
      {
        heading: "1. The Illusion of Feature Superiority",
        content: "Competitors can replicate your UI in weeks and your backend APIs in months. Sustainable margins require what Hamilton Helmer calls 'Power': a set of conditions that creates significant economic value while providing structural barriers that prevent competitors from copying it.",
        highlight: "Great product design gets you users; economic moats ensure you keep them."
      },
      {
        heading: "2. Two-Sided Network Effects & High Switching Costs",
        content: "Network effects exist when every new participant increases the value for all existing participants (e.g. Figma multiplayer, GitHub social graphs). Switching costs make migration economically irrational: once a company has 5 years of accumulated schema history and workflow habits, swapping tools costs millions in lost velocity.",
        highlight: "Data gravity and workflow integration form the deepest enterprise moats."
      }
    ],
    quiz: {
      question: "Which of the following creates the highest long-term structural economic moat for an enterprise B2B SaaS platform?",
      options: [
        "A trendy gradient logo and marketing billboard campaign.",
        "High switching costs combined with deep organizational data gravity and workflow integrations.",
        "Lowering prices below cost indefinitely.",
        "Writing all code in C++ instead of Python."
      ],
      correctIndex: 1,
      explanation: "When software integrates deeply into team workflows and stores cumulative mission-critical data, switching costs become prohibitively expensive, protecting the company from churn even against lower-priced alternatives."
    },
    takeaways: [
      "Product features are temporary; structural power is enduring.",
      "Network effects and data gravity compound exponentially over time.",
      "Design systems to accumulate user value with every interaction to maximize retention."
    ]
  },
  {
    id: "topic-prod-1",
    category: "productivity",
    categoryName: "Productivity",
    title: "Ultradian Rhythms & The 90-Minute Focus Protocol",
    subtitle: "Aligning deep creative work with the brain's biological energy cycles.",
    duration: "4 min",
    durationMinutes: 4,
    difficulty: "Beginner",
    progress: 0,
    tags: ["Neuroscience", "Productivity", "Deep Work", "Energy Management"],
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
  },
  {
    id: "topic-mm-1",
    category: "science",
    categoryName: "Science",
    title: "First Principles & Inversion: Deconstructing Hard Problems",
    subtitle: "The dual thinking frameworks used by Feynman, Munger, and top systems engineers.",
    duration: "5 min",
    durationMinutes: 5,
    difficulty: "Beginner",
    progress: 100,
    tags: ["Mental Models", "Inversion", "Charlie Munger", "First Principles"],
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
  }
];

// --------------------------------------------------------------------------
// 3. Multi-Question Challenges & Practice Arena
// --------------------------------------------------------------------------
const CHALLENGE_SETS = [
  {
    id: "sprint-ai",
    title: "AI & Autonomous Systems Mastery Sprint",
    category: "ai",
    badge: "Multi-Question Sprint",
    questions: [
      {
        id: "q-ai-1",
        type: "Scenario Question",
        question: "Your autonomous coding agent begins looping infinitely while trying to fix a failing test, repeatedly editing the same file and blowing through API token budgets. What is the fundamental defensive safeguard missing?",
        options: [
          "Switch from Python to C++.",
          "Implement a strict maximum step budget, execution timeout, and diff hash verification to detect repetitive cycles.",
          "Tell the LLM prompt to 'please try harder'.",
          "Remove tests from the repository so none fail."
        ],
        correctIndex: 1,
        explanation: "Production agent architectures require deterministic circuit breakers: step limits, token budgets, and loop detection (tracking hash of file diffs to detect oscillation) to safely terminate runaway agentic loops."
      },
      {
        id: "q-ai-2",
        type: "True / False",
        question: "Allocating more 'thinking compute' at test-time permanently updates the neural network's underlying weights in GPU memory.",
        options: [
          "True",
          "False"
        ],
        correctIndex: 1,
        explanation: "False! Test-time compute uses hidden scratchpad tokens to explore reasoning trajectories during inference. The underlying model weights remain completely static and frozen."
      },
      {
        id: "q-ai-3",
        type: "Multiple Choice",
        question: "Why is Cosine Similarity preferred over Euclidean distance for text embeddings in RAG systems?",
        options: [
          "Cosine similarity runs faster on GPUs by using only integer math.",
          "Cosine similarity compares vector angle rather than magnitude, ensuring long documents don't get penalized compared to concise queries.",
          "Euclidean distance cannot operate on dimensions above 3.",
          "Cosine distance converts text into binary 1s and 0s."
        ],
        correctIndex: 1,
        explanation: "Vector magnitude often reflects document length or repetitive vocabulary rather than topical essence. Cosine similarity measures directional alignment, allowing a short search query to perfectly match an in-depth article on the same theme."
      },
      {
        id: "q-ai-4",
        type: "Quick Knowledge Test",
        question: "What is the primary role of a JSON Schema in modern LLM tool calling?",
        options: [
          "It forces the LLM to output valid arguments matching the exact parameter types expected by the host application.",
          "It encrypts the prompt with public key cryptography.",
          "It compresses the prompt by 90% before sending.",
          "It translates the prompt into SQL automatically."
        ],
        correctIndex: 0,
        explanation: "JSON Schema provides a strict machine-readable contract. Frontier models use schema constraints during constrained decoding to ensure every emitted argument matches the exact type (string, integer, array) required by host code."
      }
    ],
    recommendedTopic: "topic-ai-agent"
  },
  {
    id: "sprint-systems",
    title: "Distributed Architecture & Performance Sprint",
    category: "technology",
    badge: "Architecture Sprint",
    questions: [
      {
        id: "q-sys-1",
        type: "Scenario Question",
        question: "Your flash sale service receives 50,000 req/sec. The database is bottlenecked. Which caching approach prevents a catastrophic cache stampede ('thundering herd') while preserving inventory correctness?",
        options: [
          "Direct Cache-Aside without locking: all worker threads query the database if the key expires.",
          "Mutex-guarded Cache Population with Probabilistic Early Expiration (XFetch algorithm).",
          "Set Cache Time-To-Live (TTL) to 30 days and never invalidate keys.",
          "Route every single request directly to a replica database without caching."
        ],
        correctIndex: 1,
        explanation: "By combining distributed mutexes or probabilistic early background refresh (XFetch), only a single background worker regenerates the cache key before expiration, eliminating the thundering herd entirely."
      },
      {
        id: "q-sys-2",
        type: "True / False",
        question: "In a 5-node Raft consensus cluster, write transactions can still be committed safely if 2 nodes crash or are partitioned away.",
        options: [
          "True",
          "False"
        ],
        correctIndex: 0,
        explanation: "True! Raft requires a simple majority quorum: floor(N/2) + 1. In a 5-node cluster, quorum is 3. With 2 nodes down, 3 remain online, allowing transactions to continue committing safely."
      },
      {
        id: "q-sys-3",
        type: "Multiple Choice",
        question: "What makes Log-Structured Merge (LSM) trees drastically faster at write throughput than B+ Trees?",
        options: [
          "LSM trees write only to RAM and never touch disk.",
          "LSM trees append writes sequentially to memory MemTables and sequential disk logs rather than performing expensive random in-place page mutations.",
          "LSM trees don't maintain sorted order.",
          "LSM trees eliminate the need for backup recovery."
        ],
        correctIndex: 1,
        explanation: "Sequential disk writes avoid random disk seeks and page fragmentation, providing orders-of-magnitude faster write throughput on both NVMe SSDs and spinning drives."
      }
    ],
    recommendedTopic: "topic-sys-1"
  }
];

const CONCEPT_MATCHER = {
  id: "matcher-laws",
  title: "Match the System Law to Its Core Principle",
  category: "technology",
  points: 40,
  pairs: [
    { term: "Amdahl's Law", match: "The speedup of a program is strictly limited by its serial fraction." },
    { term: "Conway's Law", match: "System architectures mirror the communication structures of their organizations." },
    { term: "Goodhart's Law", match: "When a measure becomes a target, it ceases to be a good measure." },
    { term: "Tesler's Law", match: "Complexity in any system cannot be eliminated, only shifted." }
  ],
  whyItMatters: "These four laws represent the foundational compass for engineering leaders, software architects, and product strategists navigating organizational and technical trade-offs."
};

const RESOURCES = [
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
    category: "technology",
    type: "Framework",
    title: "The Distributed Systems Reliability Compass",
    badge: "Mental Model",
    readTime: "Quick Reference",
    description: "An interactive decision framework for choosing between Eventual Consistency vs Strong Consistency, Paxos vs Raft, and Caching Topologies.",
    contentPreview: "Decision tree: If latency < 10ms AND writes > 10k/sec -> Log-Structured Merge (LSM) + CQRS."
  },
  {
    id: "res-3",
    category: "science",
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

const ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "First Discovery",
    desc: "Uncovered your first daily insight",
    unlocked: true,
    icon: "compass",
    date: "Unlocked"
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
    date: "Unlocked"
  },
  {
    id: "ach-4",
    title: "Challenge Maestro",
    desc: "Complete 3 challenge sprints with 100% score",
    unlocked: false,
    progress: "1 / 3 completed",
    icon: "target"
  },
  {
    id: "ach-5",
    title: "Polymath Spectrum",
    desc: "Engage with lessons across 4 different disciplines",
    unlocked: true,
    icon: "layers",
    date: "Unlocked"
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

// ==========================================================================
// 4. Main SynapseApp Application Class
// ==========================================================================
class SynapseApp {
  constructor() {
    this.storageKey = 'synapse_os_user_state_v3';
    this.state = this.loadState();

    this.currentView = 'dashboard';
    this.activeExploreCategory = 'all';
    this.activeExploreDifficulty = 'all';
    this.activeExploreDuration = 'all';
    this.exploreSearchTerm = '';

    this.activeSavedTab = 'all';
    this.savedSearchTerm = '';

    this.currentReadingTopicId = null;
    this.isSpeaking = false;
    this.speechSynthUtterance = null;

    // Challenge Sprint State
    this.activeChallengeSetIndex = 0;
    this.currentQuestionIndex = 0;
    this.challengeAnswers = [];
    this.challengeScore = 0;
    this.challengeFinished = false;

    // Web Audio Synthesizer Context
    this.audioCtx = null;

    // Initialize all components
    this.initAudio();
    this.initDom();
    this.initConfetti();
    this.bindEvents();
    this.renderAll();
  }

  // ------------------------------------------------------------------------
  // Persistence & Storage
  // ------------------------------------------------------------------------
  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_USER_STATE, ...parsed };
      }
    } catch (e) {
      console.warn('LocalStorage access issue, using default state', e);
    }
    return { ...INITIAL_USER_STATE };
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
    this.renderHeaderStats();
  }

  // ------------------------------------------------------------------------
  // Web Audio Synthesizer (Zero-Dependency Tactile Tones)
  // ------------------------------------------------------------------------
  initAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }
  }

  playAudioTone(frequency = 440, type = 'sine', duration = 0.08, gainVal = 0.08) {
    if (!this.state.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playTap() {
    this.playAudioTone(520, 'sine', 0.04, 0.05);
  }

  playSuccessChime() {
    if (!this.state.soundEnabled || !this.audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playAudioTone(freq, 'triangle', 0.22, 0.09);
      }, idx * 75);
    });
  }

  playWrongSound() {
    this.playAudioTone(180, 'sawtooth', 0.18, 0.06);
  }

  showToast(message, icon = '✓') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span style="color: var(--accent-primary); font-weight: bold;">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 320);
    }, 3200);
  }

  initConfetti() {
    this.canvas = document.getElementById('confettiCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.confettiParticles = [];
    this.isConfettiActive = false;

    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  launchConfetti() {
    if (!this.canvas || !this.ctx) return;
    const colors = ['#4f46e5', '#818cf8', '#059669', '#ea580c', '#ec4899', '#f59e0b'];
    for (let i = 0; i < 70; i++) {
      this.confettiParticles.push({
        x: window.innerWidth * 0.5 + (Math.random() * 200 - 100),
        y: window.innerHeight * 0.7,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 14 - 6,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        life: 1,
        decay: Math.random() * 0.015 + 0.012
      });
    }

    if (!this.isConfettiActive) {
      this.isConfettiActive = true;
      this.animateConfetti();
    }
  }

  animateConfetti() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38;
      p.vx *= 0.98;
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > this.canvas.height + 20) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      this.ctx.restore();
    }

    if (this.confettiParticles.length > 0) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.isConfettiActive = false;
    }
  }

  // ------------------------------------------------------------------------
  // DOM Cache & Initialization
  // ------------------------------------------------------------------------
  initDom() {
    this.streakCountNav = document.getElementById('streakCountNav');
    this.pointsCountNav = document.getElementById('pointsCountNav');
    this.audioToggleBtn = document.getElementById('audioToggleBtn');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.brandLogoBtn = document.getElementById('brandLogoBtn');

    this.topicReaderModal = document.getElementById('topicReaderModal');
    this.globalSearchModal = document.getElementById('globalSearchModal');
    this.weeklySummaryModal = document.getElementById('weeklySummaryModal');
    this.globalSearchInput = document.getElementById('globalSearchInput');

    if (this.state.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  // ------------------------------------------------------------------------
  // Event Bindings
  // ------------------------------------------------------------------------
  bindEvents() {
    // Navigation items
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-view');
        this.switchView(view);
        this.playTap();
      });
    });

    if (this.brandLogoBtn) {
      this.brandLogoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('dashboard');
        this.playTap();
      });
    }

    // Audio & Theme toggles
    if (this.audioToggleBtn) {
      this.audioToggleBtn.addEventListener('click', () => {
        this.state.soundEnabled = !this.state.soundEnabled;
        this.saveState();
        this.updateAudioButtonState();
        this.showToast(this.state.soundEnabled ? 'Audio feedback enabled' : 'Audio feedback muted');
        if (this.state.soundEnabled) this.playTap();
      });
    }

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        this.state.theme = next;
        this.saveState();
        this.playTap();
        this.showToast(`Switched to ${next} theme`);
      });
    }

    // Today Spotlight Topic Buttons
    const spotlightStartBtn = document.getElementById('spotlightStartBtn');
    if (spotlightStartBtn) {
      spotlightStartBtn.addEventListener('click', () => {
        this.openTopicReader('topic-ai-agent');
        this.playTap();
      });
    }

    const spotlightSaveBtn = document.getElementById('spotlightSaveBtn');
    if (spotlightSaveBtn) {
      spotlightSaveBtn.addEventListener('click', () => {
        this.toggleSaveItem('topic-ai-agent');
      });
    }

    // Continue Learning Resume Button
    const resumeLessonBtn = document.getElementById('resumeLessonBtn');
    if (resumeLessonBtn) {
      resumeLessonBtn.addEventListener('click', () => {
        const targetId = this.state.activeTopicId || 'topic-ai-agent';
        this.openTopicReader(targetId);
        this.playTap();
      });
    }

    const changeTopicQuickBtn = document.getElementById('changeTopicQuickBtn');
    if (changeTopicQuickBtn) {
      changeTopicQuickBtn.addEventListener('click', () => {
        this.switchView('explore');
        this.playTap();
      });
    }

    // Lindy Interactive Slider in Today's Discovery
    const lindySlider = document.getElementById('lindySlider');
    const lindyCurrentAge = document.getElementById('lindyCurrentAge');
    const lindyProjectedOutput = document.getElementById('lindyProjectedOutput');
    if (lindySlider && lindyCurrentAge && lindyProjectedOutput) {
      lindySlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        lindyCurrentAge.textContent = `Current Age: ${val} Years`;
        lindyProjectedOutput.textContent = `Expected Survival: ~${val} more years (Total: ${val * 2} yrs)`;
      });
    }

    const readDiscoveryModalBtn = document.getElementById('readDiscoveryModalBtn');
    if (readDiscoveryModalBtn) {
      readDiscoveryModalBtn.addEventListener('click', () => {
        this.openDiscoveryReader();
        this.playTap();
      });
    }

    const saveDiscoveryBtn = document.getElementById('saveDiscoveryBtn');
    if (saveDiscoveryBtn) {
      saveDiscoveryBtn.addEventListener('click', () => {
        this.toggleSaveItem('discovery-today');
      });
    }

    const shareDiscoveryBtn = document.getElementById('shareDiscoveryBtn');
    if (shareDiscoveryBtn) {
      shareDiscoveryBtn.addEventListener('click', () => {
        const quote = `"${DAILY_DISCOVERY.title}" - ${DAILY_DISCOVERY.practicalRule} via Synapse OS`;
        navigator.clipboard?.writeText(quote);
        this.showToast('Insight quote copied to clipboard!', '📋');
        this.playTap();
      });
    }

    const markDiscoveryLearnedBtn = document.getElementById('markDiscoveryLearnedBtn');
    if (markDiscoveryLearnedBtn) {
      markDiscoveryLearnedBtn.addEventListener('click', () => {
        if (!this.state.completedTopics.includes('discovery-today')) {
          this.state.completedTopics.push('discovery-today');
          this.state.knowledgePoints += 40;
          this.saveState();
          this.playSuccessChime();
          this.launchConfetti();
          this.showToast('Marked as Learned! +40 Knowledge Points', '⚡');
          this.renderHeaderStats();
        } else {
          this.showToast('Already marked as learned today!', '✓');
        }
      });
    }

    // View All Explore Button
    const viewAllExploreBtn = document.getElementById('viewAllExploreBtn');
    if (viewAllExploreBtn) {
      viewAllExploreBtn.addEventListener('click', () => {
        this.switchView('explore');
        this.playTap();
      });
    }

    // Tune Interests Button
    const tuneInterestsBtn = document.getElementById('tuneInterestsBtn');
    if (tuneInterestsBtn) {
      tuneInterestsBtn.addEventListener('click', () => {
        this.switchView('profile');
        this.playTap();
      });
    }

    // Weekly Summary trigger
    const openWeeklySummaryBtn = document.getElementById('openWeeklySummaryBtn');
    if (openWeeklySummaryBtn) {
      openWeeklySummaryBtn.addEventListener('click', () => {
        this.openWeeklyModal();
        this.playTap();
      });
    }

    const progressWeeklyDigestBtn = document.getElementById('progressWeeklyDigestBtn');
    if (progressWeeklyDigestBtn) {
      progressWeeklyDigestBtn.addEventListener('click', () => {
        this.openWeeklyModal();
        this.playTap();
      });
    }

    const closeWeeklySummaryBtn = document.getElementById('closeWeeklySummaryBtn');
    if (closeWeeklySummaryBtn) {
      closeWeeklySummaryBtn.addEventListener('click', () => {
        this.weeklySummaryModal.classList.remove('open');
      });
    }

    const shareWeeklyDigestBtn = document.getElementById('shareWeeklyDigestBtn');
    if (shareWeeklyDigestBtn) {
      shareWeeklyDigestBtn.addEventListener('click', () => {
        const text = `Weekly Synapse Digest: ${this.state.completedTopics.length} Topics Mastered, 129 Focused Minutes. Level: ${this.state.level}`;
        navigator.clipboard?.writeText(text);
        this.showToast('Weekly achievement summary copied!', '📋');
      });
    }

    // Global Search Trigger & Keydown
    const globalSearchTrigger = document.getElementById('globalSearchTrigger');
    if (globalSearchTrigger) {
      globalSearchTrigger.addEventListener('click', () => {
        this.openSearchModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    if (this.globalSearchInput) {
      this.globalSearchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }

    // Reader Modal Controls & Footer Actions
    const closeReaderModalBtn = document.getElementById('closeReaderModalBtn');
    if (closeReaderModalBtn) {
      closeReaderModalBtn.addEventListener('click', () => {
        this.closeTopicReader();
      });
    }

    const modalCompleteTopicBtn = document.getElementById('modalCompleteTopicBtn');
    if (modalCompleteTopicBtn) {
      modalCompleteTopicBtn.addEventListener('click', () => {
        this.completeCurrentTopic();
      });
    }

    const modalSaveFooterBtn = document.getElementById('modalSaveFooterBtn');
    if (modalSaveFooterBtn) {
      modalSaveFooterBtn.addEventListener('click', () => {
        if (this.currentReadingTopicId) {
          this.toggleSaveItem(this.currentReadingTopicId);
        }
      });
    }

    const modalTakeChallengeBtn = document.getElementById('modalTakeChallengeBtn');
    if (modalTakeChallengeBtn) {
      modalTakeChallengeBtn.addEventListener('click', () => {
        this.closeTopicReader();
        this.switchView('challenges');
        this.playTap();
      });
    }

    const modalExploreRelatedBtn = document.getElementById('modalExploreRelatedBtn');
    if (modalExploreRelatedBtn) {
      modalExploreRelatedBtn.addEventListener('click', () => {
        const topic = TOPICS.find(t => t.id === this.currentReadingTopicId);
        this.closeTopicReader();
        if (topic) {
          this.activeExploreCategory = topic.category;
        }
        this.switchView('explore');
        this.playTap();
      });
    }

    const modalSpeechBtn = document.getElementById('modalSpeechBtn');
    if (modalSpeechBtn) {
      modalSpeechBtn.addEventListener('click', () => {
        this.toggleSpeechNarration();
      });
    }

    const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');
    if (modalBookmarkBtn) {
      modalBookmarkBtn.addEventListener('click', () => {
        if (this.currentReadingTopicId) {
          this.toggleSaveItem(this.currentReadingTopicId);
        }
      });
    }

    // Track scroll for reader progress bar
    const readerBodyContent = document.getElementById('readerBodyContent');
    const readerProgressFill = document.getElementById('readerProgressFill');
    if (readerBodyContent && readerProgressFill) {
      readerBodyContent.addEventListener('scroll', () => {
        const scrollTop = readerBodyContent.scrollTop;
        const scrollHeight = readerBodyContent.scrollHeight - readerBodyContent.clientHeight;
        const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        readerProgressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      });
    }

    // Export Notebook Buttons
    ['exportNotebookBtn', 'profileExportBtn'].forEach(btnId => {
      const el = document.getElementById(btnId);
      if (el) {
        el.addEventListener('click', () => this.exportMarkdownNotebook());
      }
    });

    // Reset Progress Button for Testing
    const resetDemoProgressBtn = document.getElementById('resetDemoProgressBtn');
    if (resetDemoProgressBtn) {
      resetDemoProgressBtn.addEventListener('click', () => {
        if (confirm("Reset all test progress back to default demo state?")) {
          this.state = { ...INITIAL_USER_STATE };
          this.saveState();
          this.renderAll();
          this.showToast('Test progress reset to default state');
        }
      });
    }

    // Challenge Tab Switchers
    const tabScenarioBtn = document.getElementById('tabScenarioChallengesBtn');
    const tabMatcherBtn = document.getElementById('tabConceptMatcherBtn');
    if (tabScenarioBtn && tabMatcherBtn) {
      tabScenarioBtn.addEventListener('click', () => {
        tabScenarioBtn.classList.add('active');
        tabMatcherBtn.classList.remove('active');
        this.renderChallengeSprintFlow();
        this.playTap();
      });
      tabMatcherBtn.addEventListener('click', () => {
        tabMatcherBtn.classList.add('active');
        tabScenarioBtn.classList.remove('active');
        this.renderConceptMatcherFlow();
        this.playTap();
      });
    }

    // Saved Tabs Switchers
    document.querySelectorAll('#savedTypeTabs .saved-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#savedTypeTabs .saved-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeSavedTab = e.currentTarget.getAttribute('data-saved-type');
        this.renderSavedVault();
        this.playTap();
      });
    });

    const savedSearchInput = document.getElementById('savedSearchInput');
    if (savedSearchInput) {
      savedSearchInput.addEventListener('input', (e) => {
        this.savedSearchTerm = e.target.value.toLowerCase().trim();
        this.renderSavedVault();
      });
    }

    // Explore Filter Controls
    const exploreSearchInput = document.getElementById('exploreSearchInput');
    if (exploreSearchInput) {
      exploreSearchInput.addEventListener('input', (e) => {
        this.exploreSearchTerm = e.target.value.toLowerCase().trim();
        this.renderFullExploreGrid();
      });
    }

    document.querySelectorAll('#exploreDifficultyFilters .filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#exploreDifficultyFilters .filter-pill-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeExploreDifficulty = e.currentTarget.getAttribute('data-difficulty');
        this.renderFullExploreGrid();
        this.playTap();
      });
    });

    document.querySelectorAll('#exploreDurationFilters .filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#exploreDurationFilters .filter-pill-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeExploreDuration = e.currentTarget.getAttribute('data-duration');
        this.renderFullExploreGrid();
        this.playTap();
      });
    });

    // Close modals on overlay backdrop click
    [this.topicReaderModal, this.globalSearchModal, this.weeklySummaryModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.closeAllModals();
          }
        });
      }
    });
  }

  // ------------------------------------------------------------------------
  // Views Routing
  // ------------------------------------------------------------------------
  switchView(viewName) {
    this.currentView = viewName;

    // Desktop nav items
    document.querySelectorAll('.site-header .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    // Mobile nav items
    document.querySelectorAll('.mobile-bottom-bar .mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    // Hide all panels, activate current
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Refresh view data
    if (viewName === 'dashboard') {
      this.renderPersonalizedGreeting();
      this.renderTodaySpotlight();
      this.renderDashboardTopics();
      this.renderDashboardChallenge();
      this.renderRecommendations();
      this.renderRetentionSection();
    } else if (viewName === 'explore') {
      this.renderFullExplore();
    } else if (viewName === 'challenges') {
      this.renderChallengesArena();
    } else if (viewName === 'resources') {
      this.renderResources();
    } else if (viewName === 'saved') {
      this.renderSavedVault();
    } else if (viewName === 'progress') {
      this.renderProgressView();
    } else if (viewName === 'profile') {
      this.renderProfile();
    }
  }

  closeAllModals() {
    if (this.topicReaderModal) this.topicReaderModal.classList.remove('open');
    if (this.globalSearchModal) this.globalSearchModal.classList.remove('open');
    if (this.weeklySummaryModal) this.weeklySummaryModal.classList.remove('open');
    if (this.isSpeaking) {
      window.speechSynthesis?.cancel();
      this.isSpeaking = false;
    }
  }

  // ------------------------------------------------------------------------
  // Render Methods
  // ------------------------------------------------------------------------
  renderAll() {
    this.renderHeaderStats();
    this.renderPersonalizedGreeting();
    this.renderTodaySpotlight();
    this.renderCategoryFilterBar();
    this.renderDashboardTopics();
    this.renderDashboardChallenge();
    this.renderRecommendations();
    this.renderRetentionSection();
    this.renderFullExplore();
    this.renderChallengesArena();
    this.renderResources();
    this.renderSavedVault();
    this.renderProgressView();
    this.renderProfile();
    this.updateSaveButtonUI('discovery-today', document.getElementById('saveDiscoveryBtn'));
  }

  renderHeaderStats() {
    if (this.streakCountNav) this.streakCountNav.textContent = this.state.streakDays;
    if (this.pointsCountNav) this.pointsCountNav.textContent = this.state.knowledgePoints;

    const streakDaysCount = document.getElementById('streakDaysCount');
    if (streakDaysCount) streakDaysCount.textContent = this.state.streakDays;

    const weeklyMins = Object.values(this.state.weeklyStats).reduce((acc, curr) => acc + (curr.minutes || 0), 0);
    const weeklyTotalEl = document.getElementById('weeklyTotalMinutes');
    if (weeklyTotalEl) weeklyTotalEl.textContent = weeklyMins;

    // Spotlight save state
    const isSpotlightSaved = this.state.savedItems.includes('topic-ai-agent');
    const spotlightSaveIcon = document.getElementById('spotlightSaveIcon');
    const spotlightSaveText = document.getElementById('spotlightSaveText');
    if (spotlightSaveIcon) spotlightSaveIcon.setAttribute('fill', isSpotlightSaved ? 'currentColor' : 'none');
    if (spotlightSaveText) spotlightSaveText.textContent = isSpotlightSaved ? 'Saved' : 'Save';
  }

  renderPersonalizedGreeting() {
    const greetingText = document.getElementById('greetingText');
    const greetingIcon = document.getElementById('greetingTimeIcon');
    const liveDateText = document.getElementById('todayLiveDateText');

    const now = new Date();
    const hours = now.getHours();

    let salutation = "Good morning";
    let icon = "🌅";

    if (hours >= 12 && hours < 18) {
      salutation = "Good afternoon";
      icon = "☀️";
    } else if (hours >= 18) {
      salutation = "Good evening";
      icon = "🌙";
    }

    if (greetingText) greetingText.textContent = `${salutation}, ${this.state.name.split(' ')[0]}`;
    if (greetingIcon) greetingIcon.textContent = icon;

    if (liveDateText) {
      const options = { weekday: 'long', month: 'short', day: 'numeric' };
      liveDateText.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  renderTodaySpotlight() {
    const isSaved = this.state.savedItems.includes('topic-ai-agent');
    const isCompleted = this.state.completedTopics.includes('topic-ai-agent');

    const startBtn = document.getElementById('spotlightStartBtn');
    if (startBtn) {
      startBtn.innerHTML = `
        <span>${isCompleted ? 'Review Topic' : 'Start Learning'}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      `;
    }

    const saveText = document.getElementById('spotlightSaveText');
    const saveIcon = document.getElementById('spotlightSaveIcon');
    if (saveText) saveText.textContent = isSaved ? 'Saved' : 'Save';
    if (saveIcon) saveIcon.setAttribute('fill', isSaved ? 'currentColor' : 'none');
  }

  updateAudioButtonState() {
    const icon = document.getElementById('audioIconOn');
    if (icon) {
      if (this.state.soundEnabled) {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
      } else {
        icon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
      }
    }
  }

  renderCategoryFilterBar() {
    const bar = document.getElementById('categoryFilterBar');
    if (!bar) return;
    bar.innerHTML = '';

    CATEGORIES.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = `category-chip ${this.activeExploreCategory === cat.id ? 'active' : ''}`;
      chip.innerHTML = `<span>${cat.name}</span> <span style="font-size: 0.72rem; opacity: 0.65;">(${cat.count})</span>`;
      chip.addEventListener('click', () => {
        this.activeExploreCategory = cat.id;
        this.renderCategoryFilterBar();
        this.renderDashboardTopics();
        this.playTap();
      });
      bar.appendChild(chip);
    });
  }

  renderDashboardTopics() {
    const container = document.getElementById('topicsGridContainer');
    if (!container) return;
    container.innerHTML = '';

    const filtered = this.activeExploreCategory === 'all'
      ? TOPICS
      : TOPICS.filter(t => t.category === this.activeExploreCategory);

    filtered.slice(0, 6).forEach(topic => {
      const isCompleted = this.state.completedTopics.includes(topic.id);
      const isSaved = this.state.savedItems.includes(topic.id);

      const card = document.createElement('article');
      card.className = 'topic-card';
      card.setAttribute('aria-label', topic.title);

      card.innerHTML = `
        <div class="topic-card-top">
          <div class="topic-meta-row">
            <span class="badge ${this.getBadgeClassForCategory(topic.category)}">${topic.categoryName}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge">${topic.duration}</span>
              <button class="icon-btn save-card-btn" data-id="${topic.id}" title="${isSaved ? 'Remove from Saved' : 'Save Topic'}" style="width: 28px; height: 28px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
              </button>
            </div>
          </div>
          <h3 class="topic-title">${topic.title}</h3>
          <p class="topic-desc">${topic.subtitle}</p>
          <div class="topic-tags-row">
            ${topic.tags.map(tag => `<span class="badge" style="font-size: 0.7rem;">#${tag}</span>`).join('')}
          </div>
        </div>
        <div class="topic-card-bottom">
          <div class="topic-status-indicator" style="color: ${isCompleted ? 'var(--emerald)' : 'var(--text-muted)'};">
            ${isCompleted
              ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Mastered`
              : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Available`
            }
          </div>
          <button class="secondary-btn read-topic-btn" data-id="${topic.id}" style="padding: 5px 12px; font-size: 0.8rem;">
            <span>${isCompleted ? 'Review' : 'Learn Now'}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      `;

      card.querySelector('.read-topic-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.openTopicReader(topic.id);
        this.playTap();
      });

      card.querySelector('.save-card-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSaveItem(topic.id);
      });

      card.addEventListener('click', () => {
        this.openTopicReader(topic.id);
        this.playTap();
      });

      container.appendChild(card);
    });
  }

  getBadgeClassForCategory(cat) {
    switch (cat) {
      case 'ai': return 'badge-indigo';
      case 'technology': return 'badge-amber';
      case 'science': return 'badge-emerald';
      case 'design': return 'badge-rose';
      case 'programming': return 'badge-sky';
      case 'business': return 'badge-amber';
      case 'productivity': return 'badge-indigo';
      default: return '';
    }
  }

  // ------------------------------------------------------------------------
  // Quick Challenge on Today Dashboard
  // ------------------------------------------------------------------------
  renderDashboardChallenge() {
    const challengeSet = CHALLENGE_SETS[1]; // Distributed systems dilemma
    const question = challengeSet.questions[0];

    const optionsContainer = document.getElementById('challengeOptionsContainer');
    const feedbackPanel = document.getElementById('challengeFeedbackPanel');
    const statusTitle = document.getElementById('feedbackStatusTitle');
    const explanationText = document.getElementById('feedbackExplanationText');
    const whyMatters = document.getElementById('feedbackWhyMatters');

    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const isAlreadyCompleted = this.state.completedChallenges.some(c => c.id === 'quick-daily');

    question.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'challenge-option-btn';
      btn.innerHTML = `
        <div class="option-radio-indicator"></div>
        <span>${optText}</span>
      `;

      if (isAlreadyCompleted && idx === question.correctIndex) {
        btn.classList.add('selected-correct');
      }

      btn.addEventListener('click', () => {
        const buttons = optionsContainer.querySelectorAll('.challenge-option-btn');
        buttons.forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));

        if (idx === question.correctIndex) {
          btn.classList.add('selected-correct');
          this.playSuccessChime();
          this.launchConfetti();

          statusTitle.className = 'feedback-status-title correct';
          statusTitle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Correct Analysis! (+35 KP)
          `;

          if (!this.state.completedChallenges.some(c => c.id === 'quick-daily')) {
            this.state.completedChallenges.push({ id: 'quick-daily', score: 1, total: 1, points: 35, date: new Date().toISOString().slice(0, 10) });
            this.state.knowledgePoints += 35;
            this.saveState();
            this.showToast('Daily Challenge Solved! +35 Knowledge Points', '🎯');
          }
        } else {
          btn.classList.add('selected-wrong');
          this.playWrongSound();

          statusTitle.className = 'feedback-status-title wrong';
          statusTitle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            Architectural Risk Identified
          `;
        }

        explanationText.textContent = question.explanation;
        whyMatters.innerHTML = `<strong>Why This Matters:</strong> Mitigates cascading distributed failures under extreme concurrency.`;
        feedbackPanel.classList.add('show');
      });

      optionsContainer.appendChild(btn);
    });

    if (isAlreadyCompleted) {
      statusTitle.className = 'feedback-status-title correct';
      statusTitle.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Mastered Today
      `;
      explanationText.textContent = question.explanation;
      whyMatters.innerHTML = `<strong>Why This Matters:</strong> Mitigates cascading distributed failures under extreme concurrency.`;
      feedbackPanel.classList.add('show');
    }
  }

  // ------------------------------------------------------------------------
  // Personalized Recommendations (Reacts to Selected Interests)
  // ------------------------------------------------------------------------
  renderRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Match topics to user's selected interests that are NOT completed yet
    const interestTags = this.state.interests.map(i => i.toLowerCase());

    let matchingTopics = TOPICS.filter(t => {
      const catMatch = interestTags.includes(t.category.toLowerCase()) || interestTags.includes(t.categoryName.toLowerCase());
      return catMatch && !this.state.completedTopics.includes(t.id);
    });

    // Fallback if user completed all matching
    if (matchingTopics.length === 0) {
      matchingTopics = TOPICS.filter(t => !this.state.completedTopics.includes(t.id));
    }
    if (matchingTopics.length === 0) {
      matchingTopics = TOPICS; // all mastered
    }

    matchingTopics.slice(0, 2).forEach(topic => {
      const isSaved = this.state.savedItems.includes(topic.id);
      const isCompleted = this.state.completedTopics.includes(topic.id);

      const card = document.createElement('div');
      card.className = 'rec-card';
      card.innerHTML = `
        <div class="rec-reason-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Based on your focus in ${topic.categoryName}
        </div>
        <h3 class="topic-title" style="font-size: 1.15rem; margin-bottom: 6px;">${topic.title}</h3>
        <p class="topic-desc" style="font-size: 0.86rem; margin-bottom: 16px;">${topic.subtitle}</p>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
          <span class="badge">${topic.duration}</span>
          <button class="primary-btn read-rec-btn" data-id="${topic.id}" style="padding: 6px 14px; font-size: 0.82rem;">
            <span>${isCompleted ? 'Review' : 'Start Micro-Lesson'}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      `;

      card.querySelector('.read-rec-btn').addEventListener('click', () => {
        this.openTopicReader(topic.id);
        this.playTap();
      });

      grid.appendChild(card);
    });
  }

  renderRetentionSection() {
    const streakNodes = document.getElementById('streakNodesContainer');
    if (streakNodes) {
      streakNodes.innerHTML = '';
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      days.forEach((day, idx) => {
        const isActive = idx < this.state.streakDays;
        const node = document.createElement('div');
        node.className = `day-streak-node ${isActive ? 'active' : ''}`;
        node.innerHTML = `
          <div class="day-streak-circle">${isActive ? '✓' : ''}</div>
          <span class="day-streak-label">${day}</span>
        `;
        streakNodes.appendChild(node);
      });
    }

    const activityChart = document.getElementById('weeklyActivityChart');
    if (activityChart) {
      activityChart.innerHTML = '';
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const maxMins = 35;

      days.forEach(day => {
        const data = this.state.weeklyStats[day] || { minutes: 10, points: 20 };
        const heightPct = Math.min(100, Math.round((data.minutes / maxMins) * 100));

        const col = document.createElement('div');
        col.className = 'activity-bar-col';
        col.innerHTML = `
          <div class="activity-bar-fill ${day === 'Fri' ? 'highlight' : ''}" style="height: ${heightPct}%;" title="${day}: ${data.minutes} mins, ${data.points} KP"></div>
          <span class="activity-day-label">${day}</span>
        `;
        activityChart.appendChild(col);
      });
    }

    const achievementsGrid = document.getElementById('achievementsGrid');
    if (achievementsGrid) {
      achievementsGrid.innerHTML = '';
      ACHIEVEMENTS.slice(0, 4).forEach(ach => {
        const item = document.createElement('div');
        item.className = `achievement-card ${ach.unlocked ? '' : 'locked'}`;
        item.innerHTML = `
          <div class="achievement-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <div class="achievement-info">
            <div class="achievement-title">${ach.title}</div>
            <div class="achievement-desc">${ach.desc}</div>
            <span style="font-size: 0.7rem; color: var(--accent-primary); font-weight: 600; margin-top: 2px;">
              ${ach.unlocked ? ach.date : ach.progress}
            </span>
          </div>
        `;
        achievementsGrid.appendChild(item);
      });
    }
  }

  // ------------------------------------------------------------------------
  // Dedicated Immersive Learning Experience (Reader Modal)
  // ------------------------------------------------------------------------
  openTopicReader(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    this.currentReadingTopicId = topic.id;
    this.state.activeTopicId = topic.id;
    this.saveState();

    const modal = this.topicReaderModal;
    const body = document.getElementById('readerBodyContent');
    const catBadge = document.getElementById('modalCategoryBadge');
    const durBadge = document.getElementById('modalDurationBadge');
    const diffBadge = document.getElementById('modalDifficultyBadge');
    const completeBtn = document.getElementById('modalCompleteTopicBtn');
    const bookmarkBtn = document.getElementById('modalBookmarkBtn');
    const saveFooterBtn = document.getElementById('modalSaveFooterBtn');
    const saveFooterText = document.getElementById('modalSaveFooterText');
    const saveFooterIcon = document.getElementById('modalSaveFooterIcon');
    const progressFill = document.getElementById('readerProgressFill');

    if (progressFill) progressFill.style.width = '0%';

    catBadge.textContent = topic.categoryName;
    durBadge.textContent = topic.duration;
    diffBadge.textContent = topic.difficulty;

    const isCompleted = this.state.completedTopics.includes(topic.id);
    const isSaved = this.state.savedItems.includes(topic.id);

    completeBtn.innerHTML = isCompleted
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Mastered (Review)</span>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Mark as Learned (+50 KP)</span>`;

    bookmarkBtn.innerHTML = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
    `;

    if (saveFooterText) saveFooterText.textContent = isSaved ? 'Saved' : 'Save';
    if (saveFooterIcon) saveFooterIcon.setAttribute('fill', isSaved ? 'currentColor' : 'none');

    // Build Reader Content
    body.innerHTML = `
      <div class="reader-meta-bar">
        <span class="badge ${this.getBadgeClassForCategory(topic.category)}">${topic.categoryName}</span>
        <span class="badge">${topic.difficulty}</span>
        <span class="badge">${topic.duration} read</span>
      </div>

      <h1 class="reader-h1" id="modalTopicTitle">${topic.title}</h1>
      <p class="reader-subtitle">${topic.subtitle}</p>

      <div class="reader-overview-box">
        <strong>The Big Picture:</strong> ${topic.overview}
      </div>

      <!-- Content Sections -->
      ${topic.sections.map(sec => `
        <div class="reader-section-block">
          <h2 class="reader-section-h2">${sec.heading}</h2>
          <p class="reader-paragraph">${sec.content}</p>
          ${sec.highlight ? `<div class="reader-callout">${sec.highlight}</div>` : ''}
          ${sec.interactiveType ? this.renderInteractiveSimMarkup(sec.interactiveType) : ''}
        </div>
      `).join('')}

      <!-- Interactive Checkpoint Question -->
      <div class="embedded-sim-card" style="background: var(--bg-card); border-color: var(--border-medium); margin-top: 32px;">
        <div class="sim-title" style="color: var(--text-main);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          Interactive Checkpoint: Test Your Mental Model
        </div>
        <p style="font-size: 0.94rem; font-weight: 600; margin-bottom: 14px; color: var(--text-main);">${topic.quiz.question}</p>
        <div class="challenge-options-list" id="checkpointQuizOptions">
          ${topic.quiz.options.map((opt, idx) => `
            <button class="challenge-option-btn checkpoint-opt-btn" data-index="${idx}">
              <div class="option-radio-indicator"></div>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="challenge-feedback-panel" id="checkpointFeedbackPanel">
          <div class="feedback-status-title" id="checkpointFeedbackTitle"></div>
          <p class="feedback-explanation" id="checkpointFeedbackText">${topic.quiz.explanation}</p>
        </div>
      </div>

      <!-- "Knowledge Unlocked" Key Takeaways -->
      <div class="knowledge-unlocked-card">
        <h3 class="knowledge-unlocked-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Knowledge Unlocked
          <span class="k-badge">Mastery Takeaways</span>
        </h3>
        <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">You now understand these foundational principles:</p>
        <div class="takeaways-list">
          ${topic.takeaways.map((t, i) => `
            <div class="takeaway-item">
              <div class="takeaway-check-icon">✓</div>
              <span><strong>${i + 1}.</strong> ${t}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind Quiz inside reader
    const quizOptions = body.querySelectorAll('.checkpoint-opt-btn');
    const feedbackPanel = body.querySelector('#checkpointFeedbackPanel');
    const feedbackTitle = body.querySelector('#checkpointFeedbackTitle');

    quizOptions.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = parseInt(btn.getAttribute('data-index'), 10);
        quizOptions.forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));

        if (selected === topic.quiz.correctIndex) {
          btn.classList.add('selected-correct');
          this.playSuccessChime();
          this.launchConfetti();
          feedbackTitle.className = 'feedback-status-title correct';
          feedbackTitle.innerHTML = '✓ Correct Answer & Rationale';
        } else {
          btn.classList.add('selected-wrong');
          this.playWrongSound();
          feedbackTitle.className = 'feedback-status-title wrong';
          feedbackTitle.innerHTML = '✕ Review Hypothesis';
        }
        feedbackPanel.classList.add('show');
      });
    });

    this.wireInteractiveSimulators(body);
    modal.classList.add('open');
  }

  renderInteractiveSimMarkup(type) {
    if (type === 'agent-loop-sim') {
      return `
        <div class="embedded-sim-card">
          <div class="sim-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Interactive Autonomous Agent Execution Loop
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">
            Click "Step Agent" to advance through a real ReAct cycle resolving an authentication test.
          </div>
          <div style="background: #0f172a; color: #f1f5f9; padding: 14px; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 12px;" id="agentTerminalOutput">
            [Goal]: Fix failing test_token_expiration() in auth_service.py
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="secondary-btn" id="stepAgentBtn" style="font-size: 0.8rem;">Step Agent ➜</button>
            <button class="ghost-btn" id="resetAgentBtn" style="font-size: 0.78rem;">Reset Cycle</button>
          </div>
        </div>
      `;
    } else if (type === 'compute-scaling-sim') {
      return `
        <div class="embedded-sim-card">
          <div class="sim-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Interactive Test-Time Compute Budget Simulator
          </div>
          <div class="sim-controls-row">
            <label style="font-size: 0.8rem; font-weight: 600;">Thinking Tokens Allocated:</label>
            <input type="range" class="custom-range" id="computeTokensRange" min="200" max="6400" step="200" value="1200">
            <span class="badge badge-indigo" id="computeTokensVal">1,200 Tokens</span>
          </div>
          <div class="sim-visual-display">
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Reasoning Depth</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);" id="simReasoningDepth">4 Steps</div>
            </div>
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Self-Corrections</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: var(--accent-primary);" id="simCorrections">1 Backtrack</div>
            </div>
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Benchmark Accuracy</div>
              <div style="font-size: 1.15rem; font-weight: 700; color: var(--emerald);" id="simAccuracy">82.4%</div>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'vector-similarity-demo') {
      return `
        <div class="embedded-sim-card">
          <div class="sim-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>
            2D Angle vs. Cosine Similarity Visualizer
          </div>
          <div class="sim-controls-row">
            <label style="font-size: 0.8rem; font-weight: 600;">Vector Angle (θ):</label>
            <input type="range" class="custom-range" id="vectorAngleRange" min="0" max="90" value="25">
            <span class="badge badge-sky" id="vectorAngleVal">25°</span>
          </div>
          <div class="sim-visual-display">
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Cosine Value (cos θ)</div>
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-primary);" id="vectorCosineVal">0.906</div>
            </div>
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Semantic Affinity</div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--emerald);" id="vectorSemanticVal">Strong Similarity</div>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'raft-quorum-sim') {
      return `
        <div class="embedded-sim-card">
          <div class="sim-title">5-Node Raft Cluster Quorum Simulator</div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">Toggle nodes on/off to observe consensus quorum boundary (Requires N/2 + 1 = 3 healthy nodes).</p>
          <div style="display: flex; gap: 8px; margin-bottom: 14px;" id="raftNodesRow">
            <button class="secondary-btn raft-node active" data-node="1">Node 1 (Leader)</button>
            <button class="secondary-btn raft-node active" data-node="2">Node 2</button>
            <button class="secondary-btn raft-node active" data-node="3">Node 3</button>
            <button class="secondary-btn raft-node active" data-node="4">Node 4</button>
            <button class="secondary-btn raft-node active" data-node="5">Node 5</button>
          </div>
          <div class="sim-visual-display">
            <div id="raftStatusText" style="font-weight: 700; color: var(--emerald);">
              ✓ Cluster Quorum Healthy (5/5 online) — Safe to Commit Writes
            </div>
          </div>
        </div>
      `;
    }
    return '';
  }

  wireInteractiveSimulators(container) {
    // 1. Agent loop simulator
    const stepBtn = container.querySelector('#stepAgentBtn');
    const resetBtn = container.querySelector('#resetAgentBtn');
    const term = container.querySelector('#agentTerminalOutput');
    if (stepBtn && term) {
      let stepIndex = 0;
      const steps = [
        "1. [Reason]: Inspecting git diff and test failure trace in auth_service.py...",
        "2. [Action]: Calling tool: read_file('auth_service.py', line 45-60)",
        "3. [Observation]: Found bug: token expiry timestamp is compared using UTC seconds instead of milliseconds.",
        "4. [Action]: Calling tool: apply_patch('auth_service.py') with epoch fix",
        "5. [Action]: Calling tool: run_test('pytest tests/test_auth.py')",
        "6. [Observation]: 1 passed in 0.04s. Exit code 0.",
        "7. [Synthesize]: Task completed autonomously with verified passing tests! 🚀"
      ];
      stepBtn.addEventListener('click', () => {
        if (stepIndex < steps.length) {
          term.textContent = steps[stepIndex];
          stepIndex++;
          this.playTap();
        } else {
          this.playSuccessChime();
        }
      });
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          stepIndex = 0;
          term.textContent = "[Goal]: Fix failing test_token_expiration() in auth_service.py";
        });
      }
    }

    // 2. Compute scaling
    const computeRange = container.querySelector('#computeTokensRange');
    if (computeRange) {
      computeRange.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        container.querySelector('#computeTokensVal').textContent = `${val.toLocaleString()} Tokens`;
        const steps = Math.round(val / 300);
        const backtracks = Math.floor(val / 1400);
        const accuracy = Math.min(96.8, (65 + (val / 6400) * 31.8)).toFixed(1);

        container.querySelector('#simReasoningDepth').textContent = `${steps} Steps`;
        container.querySelector('#simCorrections').textContent = `${backtracks} Backtracks`;
        container.querySelector('#simAccuracy').textContent = `${accuracy}%`;
      });
    }

    // 3. Vector angle
    const angleRange = container.querySelector('#vectorAngleRange');
    if (angleRange) {
      angleRange.addEventListener('input', (e) => {
        const deg = parseInt(e.target.value, 10);
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad).toFixed(3);
        container.querySelector('#vectorAngleVal').textContent = `${deg}°`;
        container.querySelector('#vectorCosineVal').textContent = cos;

        let affinity = 'Strong Similarity';
        let color = 'var(--emerald)';
        if (deg > 65) {
          affinity = 'Unrelated / Orthogonal';
          color = 'var(--rose)';
        } else if (deg > 35) {
          affinity = 'Moderate Topical Overlap';
          color = 'var(--amber)';
        }
        const affinityEl = container.querySelector('#vectorSemanticVal');
        affinityEl.textContent = affinity;
        affinityEl.style.color = color;
      });
    }

    // 4. Raft node buttons
    const raftNodes = container.querySelectorAll('.raft-node');
    if (raftNodes.length > 0) {
      raftNodes.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          if (btn.classList.contains('active')) {
            btn.style.background = 'var(--bg-card)';
            btn.style.color = 'var(--text-main)';
          } else {
            btn.style.background = 'var(--rose-light)';
            btn.style.color = 'var(--rose)';
          }

          const healthyCount = container.querySelectorAll('.raft-node.active').length;
          const statusEl = container.querySelector('#raftStatusText');
          if (healthyCount >= 3) {
            statusEl.style.color = 'var(--emerald)';
            statusEl.innerHTML = `✓ Cluster Quorum Healthy (${healthyCount}/5 online) — Safe to Commit Writes`;
          } else {
            statusEl.style.color = 'var(--rose)';
            statusEl.innerHTML = `✕ Quorum Lost (${healthyCount}/5 online) — Writes Rejected to Prevent Split-Brain`;
          }
        });
      });
    }
  }

  closeTopicReader() {
    if (this.topicReaderModal) {
      this.topicReaderModal.classList.remove('open');
    }
    if (this.isSpeaking) {
      window.speechSynthesis?.cancel();
      this.isSpeaking = false;
    }
  }

  completeCurrentTopic() {
    if (!this.currentReadingTopicId) return;
    const topicId = this.currentReadingTopicId;

    if (!this.state.completedTopics.includes(topicId)) {
      this.state.completedTopics.push(topicId);
      this.state.completedTopicDates[topicId] = new Date().toISOString().slice(0, 10);
      this.state.knowledgePoints += 50;

      // Add 5 focus minutes to today
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const todayKey = dayNames[new Date().getDay()];
      if (this.state.weeklyStats[todayKey]) {
        this.state.weeklyStats[todayKey].minutes += 5;
        this.state.weeklyStats[todayKey].lessons += 1;
        this.state.weeklyStats[todayKey].points += 50;
      }

      this.saveState();
      this.playSuccessChime();
      this.launchConfetti();
      this.showToast('Topic Mastered! +50 Knowledge Points', '🏆');
    } else {
      this.showToast('Topic reviewed! Reinforcing long-term retention.', '🧠');
    }

    this.renderHeaderStats();
    this.renderTodaySpotlight();
    this.renderDashboardTopics();
    this.renderRecommendations();
    this.renderProgressView();

    const completeBtn = document.getElementById('modalCompleteTopicBtn');
    if (completeBtn) {
      completeBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Mastered (Review)</span>`;
    }
  }

  toggleSpeechNarration() {
    if (!window.speechSynthesis) {
      this.showToast('Text-to-speech not supported in this browser');
      return;
    }

    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.showToast('Audio narration paused');
      return;
    }

    const topic = TOPICS.find(t => t.id === this.currentReadingTopicId);
    if (!topic) return;

    const speechText = `${topic.title}. ${topic.subtitle}. The big idea: ${topic.overview}. First takeaway: ${topic.takeaways[0]}`;
    this.speechSynthUtterance = new SpeechSynthesisUtterance(speechText);
    this.speechSynthUtterance.rate = 1.05;

    this.speechSynthUtterance.onend = () => {
      this.isSpeaking = false;
    };

    window.speechSynthesis.speak(this.speechSynthUtterance);
    this.isSpeaking = true;
    this.showToast('Playing audio overview...', '🔊');
  }

  openDiscoveryReader() {
    this.openTopicReader('topic-mm-1');
  }

  // ------------------------------------------------------------------------
  // Save / Bookmark Engine
  // ------------------------------------------------------------------------
  toggleSaveItem(itemId) {
    const idx = this.state.savedItems.indexOf(itemId);
    let isSaved = false;

    if (idx > -1) {
      this.state.savedItems.splice(idx, 1);
      this.showToast('Removed from Saved Items');
    } else {
      this.state.savedItems.push(itemId);
      isSaved = true;
      this.showToast('Saved to your Personal Vault', '📌');
      this.playTap();
    }

    this.saveState();
    this.renderDashboardTopics();
    this.renderSavedVault();
    this.renderTodaySpotlight();

    if (itemId === 'discovery-today') {
      this.updateSaveButtonUI(itemId, document.getElementById('saveDiscoveryBtn'));
    }

    if (itemId === this.currentReadingTopicId) {
      const bookmarkIcon = document.getElementById('modalBookmarkIcon');
      const saveFooterIcon = document.getElementById('modalSaveFooterIcon');
      const saveFooterText = document.getElementById('modalSaveFooterText');
      if (bookmarkIcon) bookmarkIcon.setAttribute('fill', isSaved ? 'currentColor' : 'none');
      if (saveFooterIcon) saveFooterIcon.setAttribute('fill', isSaved ? 'currentColor' : 'none');
      if (saveFooterText) saveFooterText.textContent = isSaved ? 'Saved' : 'Save';
    }
  }

  updateSaveButtonUI(itemId, btn) {
    if (!btn) return;
    const isSaved = this.state.savedItems.includes(itemId);
    const icon = btn.querySelector('svg');
    const text = btn.querySelector('span');

    if (icon) icon.setAttribute('fill', isSaved ? 'currentColor' : 'none');
    if (text) text.textContent = isSaved ? 'Saved' : 'Save';
  }

  // ------------------------------------------------------------------------
  // Explore Page Discovery Catalog
  // ------------------------------------------------------------------------
  renderFullExplore() {
    const bar = document.getElementById('explorePageFilterBar');
    if (bar && bar.children.length === 0) {
      CATEGORIES.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `category-chip ${this.activeExploreCategory === cat.id ? 'active' : ''}`;
        chip.innerHTML = `<span>${cat.name}</span>`;
        chip.addEventListener('click', () => {
          this.activeExploreCategory = cat.id;
          bar.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.renderFullExploreGrid();
          this.playTap();
        });
        bar.appendChild(chip);
      });
    }

    this.renderFullExploreGrid();
  }

  renderFullExploreGrid() {
    const grid = document.getElementById('fullExploreGrid');
    const countEl = document.getElementById('exploreResultsCount');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = TOPICS;

    // Filter Category
    if (this.activeExploreCategory !== 'all') {
      filtered = filtered.filter(t => t.category === this.activeExploreCategory);
    }

    // Filter Difficulty
    if (this.activeExploreDifficulty !== 'all') {
      filtered = filtered.filter(t => t.difficulty === this.activeExploreDifficulty);
    }

    // Filter Duration
    if (this.activeExploreDuration !== 'all') {
      const dur = parseInt(this.activeExploreDuration, 10);
      if (dur === 5) filtered = filtered.filter(t => t.durationMinutes <= 5);
      else if (dur === 10) filtered = filtered.filter(t => t.durationMinutes > 5 && t.durationMinutes <= 10);
      else if (dur === 20) filtered = filtered.filter(t => t.durationMinutes > 10);
    }

    // Filter Search
    if (this.exploreSearchTerm) {
      filtered = filtered.filter(t =>
        t.title.toLowerCase().includes(this.exploreSearchTerm) ||
        t.subtitle.toLowerCase().includes(this.exploreSearchTerm) ||
        t.tags.some(tag => tag.toLowerCase().includes(this.exploreSearchTerm))
      );
    }

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} topic${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
          <p style="color: var(--text-muted); font-size: 0.95rem;">No topics found matching your criteria.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(topic => {
      const isCompleted = this.state.completedTopics.includes(topic.id);
      const isSaved = this.state.savedItems.includes(topic.id);

      const card = document.createElement('article');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-card-top">
          <div class="topic-meta-row">
            <span class="badge ${this.getBadgeClassForCategory(topic.category)}">${topic.categoryName}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge">${topic.difficulty}</span>
              <button class="icon-btn save-explore-btn" data-id="${topic.id}" title="${isSaved ? 'Remove from Saved' : 'Save Topic'}" style="width: 28px; height: 28px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
              </button>
            </div>
          </div>
          <h3 class="topic-title">${topic.title}</h3>
          <p class="topic-desc">${topic.subtitle}</p>
          <div class="topic-tags-row">
            ${topic.tags.map(t => `<span class="badge" style="font-size: 0.7rem;">#${t}</span>`).join('')}
          </div>
        </div>
        <div class="topic-card-bottom">
          <span style="font-size: 0.78rem; color: var(--text-muted);">${topic.duration} read</span>
          <button class="primary-btn read-explore-btn" data-id="${topic.id}" style="padding: 6px 14px; font-size: 0.8rem;">
            <span>${isCompleted ? 'Review' : 'Master Topic'}</span>
          </button>
        </div>
      `;

      card.querySelector('.save-explore-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSaveItem(topic.id);
      });

      card.querySelector('.read-explore-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.openTopicReader(topic.id);
        this.playTap();
      });

      card.addEventListener('click', () => {
        this.openTopicReader(topic.id);
        this.playTap();
      });

      grid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // Challenges Arena: Stepper & Matcher Flow
  // ------------------------------------------------------------------------
  renderChallengesArena() {
    this.renderChallengeSprintFlow();
  }

  renderChallengeSprintFlow() {
    const container = document.getElementById('challengesInteractiveContainer');
    if (!container) return;

    const sprint = CHALLENGE_SETS[this.activeChallengeSetIndex];
    const totalQ = sprint.questions.length;

    if (this.challengeFinished) {
      // Results Screen
      const pct = Math.round((this.challengeScore / totalQ) * 100);
      const earnedKP = this.challengeScore * 25;
      const recTopic = TOPICS.find(t => t.id === sprint.recommendedTopic) || TOPICS[0];

      container.innerHTML = `
        <div class="metric-stat-card challenge-result-screen">
          <div class="challenge-score-circle">${this.challengeScore}/${totalQ}</div>
          <span class="badge badge-emerald" style="font-size: 0.8rem; margin-bottom: 8px;">Sprint Completed</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 6px;">Evaluation: ${pct >= 75 ? 'Exceptional Mastery' : 'Good Progress'}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 460px; margin-bottom: 20px;">
            You demonstrated robust analytical reasoning across ${sprint.title}.
          </p>

          <div style="background: var(--accent-light); border: 1px solid var(--accent-light-border); border-radius: var(--radius-lg); padding: 18px 24px; margin-bottom: 24px; text-align: left; width: 100%; max-width: 520px;">
            <div style="font-size: 0.74rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase;">Recommended Next Topic</div>
            <h4 style="font-size: 1.1rem; font-weight: 700; margin: 4px 0 6px;">${recTopic.title}</h4>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px;">${recTopic.subtitle}</p>
            <button class="primary-btn" id="startRecTopicFromChallengeBtn" style="font-size: 0.82rem; padding: 6px 14px;">
              <span>Start Recommended Topic</span>
            </button>
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="secondary-btn" id="retryChallengeSprintBtn">Retake Challenge</button>
            <button class="secondary-btn" id="switchChallengeSprintBtn">Try Another Sprint</button>
          </div>
        </div>
      `;

      container.querySelector('#startRecTopicFromChallengeBtn').addEventListener('click', () => {
        this.openTopicReader(recTopic.id);
        this.playTap();
      });

      container.querySelector('#retryChallengeSprintBtn').addEventListener('click', () => {
        this.currentQuestionIndex = 0;
        this.challengeScore = 0;
        this.challengeFinished = false;
        this.renderChallengeSprintFlow();
        this.playTap();
      });

      container.querySelector('#switchChallengeSprintBtn').addEventListener('click', () => {
        this.activeChallengeSetIndex = (this.activeChallengeSetIndex + 1) % CHALLENGE_SETS.length;
        this.currentQuestionIndex = 0;
        this.challengeScore = 0;
        this.challengeFinished = false;
        this.renderChallengeSprintFlow();
        this.playTap();
      });

      return;
    }

    const currentQ = sprint.questions[this.currentQuestionIndex];

    container.innerHTML = `
      <div class="metric-stat-card">
        <div class="challenge-stepper-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge badge-indigo">${currentQ.type}</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">Question ${this.currentQuestionIndex + 1} of ${totalQ}</span>
          </div>
          <div class="challenge-step-dots">
            ${sprint.questions.map((_, i) => `
              <div class="step-dot ${i === this.currentQuestionIndex ? 'active' : (i < this.currentQuestionIndex ? 'completed' : '')}"></div>
            `).join('')}
          </div>
        </div>

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 16px; color: var(--text-main);">${currentQ.question}</h3>

        <div class="challenge-options-list" id="sprintOptionsList" style="margin-bottom: 20px;">
          ${currentQ.options.map((opt, idx) => `
            <button class="challenge-option-btn sprint-option-btn" data-index="${idx}">
              <div class="option-radio-indicator"></div>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback & Explanation Panel -->
        <div class="challenge-feedback-panel" id="sprintFeedbackPanel" style="margin-bottom: 18px;">
          <div class="feedback-status-title" id="sprintFeedbackTitle"></div>
          <p class="feedback-explanation" id="sprintFeedbackExplanation">${currentQ.explanation}</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.78rem; color: var(--text-muted);">Pick an option to verify your hypothesis</span>
          <button class="primary-btn" id="sprintNextQuestionBtn" style="display: none;">
            <span>${this.currentQuestionIndex + 1 === totalQ ? 'Complete Sprint & View Score' : 'Next Question ➜'}</span>
          </button>
        </div>
      </div>
    `;

    const optionBtns = container.querySelectorAll('.sprint-option-btn');
    const feedbackPanel = container.querySelector('#sprintFeedbackPanel');
    const feedbackTitle = container.querySelector('#sprintFeedbackTitle');
    const nextBtn = container.querySelector('#sprintNextQuestionBtn');

    let answered = false;

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const selected = parseInt(btn.getAttribute('data-index'), 10);
        optionBtns.forEach(b => b.classList.remove('selected-correct', 'selected-wrong'));

        if (selected === currentQ.correctIndex) {
          btn.classList.add('selected-correct');
          this.challengeScore++;
          this.playSuccessChime();
          this.launchConfetti();
          feedbackTitle.className = 'feedback-status-title correct';
          feedbackTitle.innerHTML = '✓ Correct Answer & Rationale';
        } else {
          btn.classList.add('selected-wrong');
          this.playWrongSound();
          feedbackTitle.className = 'feedback-status-title wrong';
          feedbackTitle.innerHTML = '✕ Flawed Assumption Detected';
          // Also highlight correct one
          optionBtns[currentQ.correctIndex].classList.add('selected-correct');
        }

        feedbackPanel.classList.add('show');
        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (this.currentQuestionIndex + 1 < totalQ) {
        this.currentQuestionIndex++;
        this.renderChallengeSprintFlow();
      } else {
        this.challengeFinished = true;
        // Award points
        const pointsWon = this.challengeScore * 25;
        this.state.knowledgePoints += pointsWon;
        this.state.completedChallenges.push({
          id: sprint.id,
          score: this.challengeScore,
          total: totalQ,
          points: pointsWon,
          date: new Date().toISOString().slice(0, 10)
        });
        this.saveState();
        this.renderChallengeSprintFlow();
        this.playSuccessChime();
        this.launchConfetti();
        this.showToast(`Sprint Finished! +${pointsWon} KP Awarded`, '🏆');
      }
    });
  }

  renderConceptMatcherFlow() {
    const container = document.getElementById('challengesInteractiveContainer');
    if (!container) return;

    const ch = CONCEPT_MATCHER;

    container.innerHTML = `
      <div class="metric-stat-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge badge-indigo">Interactive Matcher</span>
            <span class="badge badge-amber">+${ch.points} KP</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Match Laws to Definitions</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">${ch.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">Click a Law on the left, then click its corresponding definition on the right to lock the pair.</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" id="matcherColumns">
          <div style="display: flex; flex-direction: column; gap: 10px;" id="matcherLeftTerms">
            ${ch.pairs.map(p => `
              <button class="secondary-btn matcher-term-btn" data-term="${p.term}" style="justify-content: flex-start; text-align: left; padding: 12px 14px;">
                <strong>${p.term}</strong>
              </button>
            `).join('')}
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;" id="matcherRightDefs">
            ${[...ch.pairs].sort(() => 0.5 - Math.random()).map(p => `
              <button class="secondary-btn matcher-def-btn" data-match="${p.match}" style="justify-content: flex-start; text-align: left; font-size: 0.84rem; padding: 12px 14px;">
                ${p.match}
              </button>
            `).join('')}
          </div>
        </div>
        <div id="matcherSuccessBanner" style="display: none; margin-top: 20px; background: var(--emerald-light); border: 1px solid var(--emerald-border); padding: 16px; border-radius: var(--radius-md); color: var(--emerald); font-weight: 600;">
          ✓ All System Laws Matched Perfectly! +${ch.points} KP Awarded.
        </div>
      </div>
    `;

    this.wireMatcherGame(container, ch);
  }

  wireMatcherGame(card, challenge) {
    let selectedTerm = null;
    let selectedDef = null;
    let matchedPairs = 0;

    const leftBtns = card.querySelectorAll('.matcher-term-btn');
    const rightBtns = card.querySelectorAll('.matcher-def-btn');
    const banner = card.querySelector('#matcherSuccessBanner');

    leftBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;
        leftBtns.forEach(b => b.style.borderColor = 'var(--border-medium)');
        btn.style.borderColor = 'var(--accent-primary)';
        selectedTerm = btn.getAttribute('data-term');
        this.playTap();
        checkPair();
      });
    });

    rightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;
        rightBtns.forEach(b => b.style.borderColor = 'var(--border-medium)');
        btn.style.borderColor = 'var(--accent-primary)';
        selectedDef = btn.getAttribute('data-match');
        this.playTap();
        checkPair();
      });
    });

    const checkPair = () => {
      if (!selectedTerm || !selectedDef) return;
      const targetPair = challenge.pairs.find(p => p.term === selectedTerm);

      if (targetPair && targetPair.match === selectedDef) {
        const termBtn = card.querySelector(`.matcher-term-btn[data-term="${selectedTerm}"]`);
        const defBtn = card.querySelector(`.matcher-def-btn[data-match="${selectedDef}"]`);

        termBtn.classList.add('matched');
        defBtn.classList.add('matched');
        termBtn.style.background = 'var(--emerald-light)';
        termBtn.style.borderColor = 'var(--emerald-border)';
        termBtn.style.color = 'var(--emerald)';
        defBtn.style.background = 'var(--emerald-light)';
        defBtn.style.borderColor = 'var(--emerald-border)';
        defBtn.style.color = 'var(--emerald)';

        this.playTap();
        matchedPairs++;
        selectedTerm = null;
        selectedDef = null;

        if (matchedPairs === challenge.pairs.length) {
          banner.style.display = 'block';
          this.playSuccessChime();
          this.launchConfetti();
          this.state.knowledgePoints += challenge.points;
          this.saveState();
          this.showToast(`Concept Matcher Complete! +${challenge.points} KP`, '🏆');
        }
      } else {
        this.playWrongSound();
        const termBtn = card.querySelector(`.matcher-term-btn[data-term="${selectedTerm}"]`);
        const defBtn = card.querySelector(`.matcher-def-btn[data-match="${selectedDef}"]`);
        if (termBtn) termBtn.style.borderColor = 'var(--rose)';
        if (defBtn) defBtn.style.borderColor = 'var(--rose)';

        setTimeout(() => {
          if (termBtn && !termBtn.classList.contains('matched')) termBtn.style.borderColor = 'var(--border-medium)';
          if (defBtn && !defBtn.classList.contains('matched')) defBtn.style.borderColor = 'var(--border-medium)';
          selectedTerm = null;
          selectedDef = null;
        }, 600);
      }
    };
  }

  // ------------------------------------------------------------------------
  // Toolkits & Resources
  // ------------------------------------------------------------------------
  renderResources() {
    const grid = document.getElementById('resourcesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    RESOURCES.forEach(res => {
      const isSaved = this.state.savedItems.includes(res.id);
      const card = document.createElement('article');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-card-top">
          <div class="topic-meta-row">
            <span class="badge badge-indigo">${res.badge}</span>
            <span class="badge">${res.readTime}</span>
          </div>
          <h3 class="topic-title">${res.title}</h3>
          <p class="topic-desc">${res.description}</p>
          <div style="background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 10px 12px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-bottom: 12px;">
            ${res.contentPreview}
          </div>
        </div>
        <div class="topic-card-bottom">
          <button class="secondary-btn copy-res-btn" data-id="${res.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            <span>Copy Template</span>
          </button>
          <button class="secondary-btn save-res-btn" data-id="${res.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
            <span>${isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      `;

      card.querySelector('.copy-res-btn').addEventListener('click', () => {
        const text = `# ${res.title}\n\n${res.description}\n\n${res.contentPreview}\n\n*From Synapse OS*`;
        navigator.clipboard?.writeText(text);
        this.showToast('Toolkit scaffold copied to clipboard!', '📋');
        this.playTap();
      });

      card.querySelector('.save-res-btn').addEventListener('click', (e) => {
        this.toggleSaveItem(res.id);
        const span = e.currentTarget.querySelector('span');
        const svg = e.currentTarget.querySelector('svg');
        const nowSaved = this.state.savedItems.includes(res.id);
        span.textContent = nowSaved ? 'Saved' : 'Save';
        svg.setAttribute('fill', nowSaved ? 'currentColor' : 'none');
      });

      grid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // Saved View with Category Tabs
  // ------------------------------------------------------------------------
  renderSavedVault() {
    const grid = document.getElementById('savedItemsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const savedIds = this.state.savedItems;

    // Collect all saved items objects
    let allItems = [];
    savedIds.forEach(id => {
      let topic = TOPICS.find(t => t.id === id);
      if (topic) {
        allItems.push({ id, title: topic.title, desc: topic.subtitle, type: 'topic', typeLabel: 'Topic', obj: topic });
        return;
      }
      let res = RESOURCES.find(r => r.id === id);
      if (res) {
        allItems.push({ id, title: res.title, desc: res.description, type: 'resource', typeLabel: 'Toolkit', obj: res });
        return;
      }
      if (id === 'discovery-today') {
        allItems.push({ id, title: DAILY_DISCOVERY.title, desc: DAILY_DISCOVERY.summary, type: 'topic', typeLabel: 'Daily Discovery', obj: DAILY_DISCOVERY });
        return;
      }
      let sprint = CHALLENGE_SETS.find(s => s.id === id);
      if (sprint) {
        allItems.push({ id, title: sprint.title, desc: sprint.badge, type: 'challenge', typeLabel: 'Challenge', obj: sprint });
        return;
      }
    });

    // Update Counts on Tabs
    const countAllEl = document.getElementById('savedCountAll');
    const countTopicsEl = document.getElementById('savedCountTopics');
    const countChallengesEl = document.getElementById('savedCountChallenges');
    const countResourcesEl = document.getElementById('savedCountResources');

    if (countAllEl) countAllEl.textContent = allItems.length;
    if (countTopicsEl) countTopicsEl.textContent = allItems.filter(i => i.type === 'topic').length;
    if (countChallengesEl) countChallengesEl.textContent = allItems.filter(i => i.type === 'challenge').length;
    if (countResourcesEl) countResourcesEl.textContent = allItems.filter(i => i.type === 'resource').length;

    // Filter by Active Tab
    let filtered = allItems;
    if (this.activeSavedTab !== 'all') {
      filtered = filtered.filter(i => i.type === this.activeSavedTab);
    }

    // Filter by Saved Search Term
    if (this.savedSearchTerm) {
      filtered = filtered.filter(i =>
        i.title.toLowerCase().includes(this.savedSearchTerm) ||
        i.desc.toLowerCase().includes(this.savedSearchTerm)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
          <svg style="margin: 0 auto 16px; color: var(--text-faint);" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
          <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">No Saved Items Found</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 20px;">
            ${this.savedSearchTerm ? 'No items match your search query.' : 'Click "Save" on topics, discoveries, or toolkits to store them in your personal knowledge vault.'}
          </p>
          <button class="primary-btn" id="exploreForVaultBtn">Explore Library</button>
        </div>
      `;
      const btn = grid.querySelector('#exploreForVaultBtn');
      if (btn) btn.addEventListener('click', () => this.switchView('explore'));
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-card-top">
          <div class="topic-meta-row">
            <span class="badge badge-indigo">${item.typeLabel}</span>
            <button class="icon-btn remove-saved-btn" title="Remove from Saved" style="width: 28px; height: 28px; color: var(--rose);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <h3 class="topic-title">${item.title}</h3>
          <p class="topic-desc">${item.desc}</p>
        </div>
        <div class="topic-card-bottom">
          <span style="font-size: 0.78rem; color: var(--text-muted);">In Personal Vault</span>
          <button class="secondary-btn open-vault-item-btn" style="padding: 6px 14px; font-size: 0.8rem;">
            <span>Review</span>
          </button>
        </div>
      `;

      card.querySelector('.remove-saved-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSaveItem(item.id);
      });

      card.querySelector('.open-vault-item-btn').addEventListener('click', () => {
        if (TOPICS.some(t => t.id === item.id)) {
          this.openTopicReader(item.id);
        } else if (item.id === 'discovery-today') {
          this.openDiscoveryReader();
        } else if (item.type === 'challenge') {
          this.switchView('challenges');
        } else {
          this.switchView('resources');
        }
      });

      grid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // Dedicated Dynamic Progress View
  // ------------------------------------------------------------------------
  renderProgressView() {
    const kpEl = document.getElementById('progKPCount');
    const streakEl = document.getElementById('progStreakCount');
    const topicsEl = document.getElementById('progTopicsCount');
    const challengesEl = document.getElementById('progChallengesCount');

    if (kpEl) kpEl.textContent = this.state.knowledgePoints;
    if (streakEl) streakEl.textContent = `${this.state.streakDays} Days`;
    if (topicsEl) topicsEl.textContent = this.state.completedTopics.length;
    if (challengesEl) challengesEl.textContent = this.state.completedChallenges.length;

    // Category Mastery Breakdown
    const masteryList = document.getElementById('categoryMasteryList');
    if (masteryList) {
      masteryList.innerHTML = '';
      const domainCategories = CATEGORIES.filter(c => c.id !== 'all');

      domainCategories.forEach(cat => {
        const totalInCat = TOPICS.filter(t => t.category === cat.id).length;
        const completedInCat = TOPICS.filter(t => t.category === cat.id && this.state.completedTopics.includes(t.id)).length;
        const pct = totalInCat > 0 ? Math.round((completedInCat / totalInCat) * 100) : 0;

        const row = document.createElement('div');
        row.className = 'category-mastery-item';
        row.innerHTML = `
          <div class="category-mastery-label">
            <span>${cat.name}</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${completedInCat}/${totalInCat} Mastered (${pct}%)</span>
          </div>
          <div class="category-mastery-track">
            <div class="category-mastery-bar" style="width: ${pct}%;"></div>
          </div>
        `;
        masteryList.appendChild(row);
      });
    }

    // Completed Topics Ledger
    const ledger = document.getElementById('completedTopicsLedger');
    if (ledger) {
      ledger.innerHTML = '';
      if (this.state.completedTopics.length === 0) {
        ledger.innerHTML = `<div style="font-size: 0.88rem; color: var(--text-muted);">No completed topics yet. Start with today's spotlight topic!</div>`;
      } else {
        this.state.completedTopics.forEach(id => {
          const topic = TOPICS.find(t => t.id === id);
          if (!topic) return;
          const dateStr = this.state.completedTopicDates[id] || 'Recently';

          const row = document.createElement('div');
          row.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);';
          row.innerHTML = `
            <div>
              <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">${topic.title}</div>
              <div style="font-size: 0.76rem; color: var(--text-muted);">${topic.categoryName} • Completed on ${dateStr}</div>
            </div>
            <button class="secondary-btn review-ledger-btn" style="padding: 4px 10px; font-size: 0.78rem;">Review</button>
          `;

          row.querySelector('.review-ledger-btn').addEventListener('click', () => {
            this.openTopicReader(topic.id);
            this.playTap();
          });

          ledger.appendChild(row);
        });
      }
    }

    // Full Achievements in Progress
    const achGrid = document.getElementById('fullAchievementsGrid');
    if (achGrid) {
      achGrid.innerHTML = '';
      ACHIEVEMENTS.forEach(ach => {
        const item = document.createElement('div');
        item.className = `achievement-card ${ach.unlocked ? '' : 'locked'}`;
        item.innerHTML = `
          <div class="achievement-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <div class="achievement-info">
            <div class="achievement-title">${ach.title}</div>
            <div class="achievement-desc">${ach.desc}</div>
            <span style="font-size: 0.7rem; color: var(--accent-primary); font-weight: 600; margin-top: 2px;">
              ${ach.unlocked ? ach.date : ach.progress}
            </span>
          </div>
        `;
        achGrid.appendChild(item);
      });
    }
  }

  // ------------------------------------------------------------------------
  // Profile & Interests Tuning
  // ------------------------------------------------------------------------
  renderProfile() {
    const list = document.getElementById('profileInterestsList');
    if (!list) return;
    list.innerHTML = '';

    const availableInterests = [
      'AI',
      'Programming',
      'Technology',
      'Design',
      'Business',
      'Science',
      'Productivity'
    ];

    availableInterests.forEach(interest => {
      const isSelected = this.state.interests.includes(interest);
      const pill = document.createElement('button');
      pill.className = `category-chip ${isSelected ? 'active' : ''}`;
      pill.innerHTML = `<span>${interest}</span> ${isSelected ? '✓' : '+'}`;

      pill.addEventListener('click', () => {
        if (isSelected) {
          if (this.state.interests.length > 1) {
            this.state.interests = this.state.interests.filter(i => i !== interest);
          } else {
            this.showToast('Please keep at least one active focus discipline');
            return;
          }
        } else {
          this.state.interests.push(interest);
        }
        this.saveState();
        this.renderProfile();
        this.renderRecommendations();
        this.playTap();
        this.showToast(`Updated focus: ${interest}`);
      });

      list.appendChild(pill);
    });
  }

  exportMarkdownNotebook() {
    let content = `# SYNAPSE OS — Personal Knowledge Notebook\nExported: ${new Date().toLocaleDateString()}\nUser: ${this.state.name} (${this.state.level})\n\n`;

    content += `## Mastered Topics (${this.state.completedTopics.length})\n\n`;
    this.state.completedTopics.forEach(id => {
      const topic = TOPICS.find(t => t.id === id);
      if (topic) {
        content += `### ${topic.title}\n*Category: ${topic.categoryName}*\n\nTakeaways:\n`;
        topic.takeaways.forEach(t => { content += `- ${t}\n`; });
        content += '\n---\n';
      }
    });

    content += `\n## Saved Items & Resources (${this.state.savedItems.length})\n\n`;
    this.state.savedItems.forEach(id => {
      const res = RESOURCES.find(r => r.id === id);
      if (res) {
        content += `### ${res.title}\n${res.description}\n\n`;
      }
    });

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `synapse-notebook-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showToast('Exported synapse-notebook.md to downloads!', '📥');
    this.playTap();
  }

  // ------------------------------------------------------------------------
  // Global Search Modal (⌘K / Ctrl+K)
  // ------------------------------------------------------------------------
  openSearchModal() {
    if (!this.globalSearchModal) return;
    this.globalSearchModal.classList.add('open');
    this.renderRecentSearches();
    if (this.globalSearchInput) {
      this.globalSearchInput.value = '';
      this.globalSearchInput.focus();
      this.handleSearch('');
    }
  }

  renderRecentSearches() {
    const row = document.getElementById('recentSearchesRow');
    if (!row) return;
    row.innerHTML = `<span style="font-weight: 600;">Recent:</span>`;

    (this.state.recentSearches || []).slice(0, 5).forEach(term => {
      const chip = document.createElement('button');
      chip.className = 'recent-chip';
      chip.textContent = term;
      chip.addEventListener('click', () => {
        if (this.globalSearchInput) {
          this.globalSearchInput.value = term;
          this.handleSearch(term);
        }
      });
      row.appendChild(chip);
    });
  }

  handleSearch(query) {
    const container = document.getElementById('searchResultsContainer');
    if (!container) return;
    container.innerHTML = '';

    const q = query.trim().toLowerCase();
    const results = [];

    TOPICS.forEach(t => {
      if (!q || t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q) || t.tags.some(tag => tag.toLowerCase().includes(q))) {
        results.push({ id: t.id, title: t.title, subtitle: `${t.categoryName} • ${t.duration} • ${t.difficulty}`, type: 'Topic', obj: t });
      }
    });

    CHALLENGE_SETS.forEach(c => {
      if (!q || c.title.toLowerCase().includes(q)) {
        results.push({ id: c.id, title: c.title, subtitle: `${c.badge} • ${c.questions.length} Questions`, type: 'Challenge', obj: c });
      }
    });

    RESOURCES.forEach(r => {
      if (!q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
        results.push({ id: r.id, title: r.title, subtitle: `${r.badge} • ${r.readTime}`, type: 'Toolkit', obj: r });
      }
    });

    if (results.length === 0) {
      container.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-faint); font-size: 0.88rem;">
          No matching knowledge concepts found for "${query}".
        </div>
      `;
      return;
    }

    results.slice(0, 7).forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = `search-result-item ${idx === 0 ? 'highlighted' : ''}`;
      row.innerHTML = `
        <div class="result-item-left">
          <span class="badge ${item.type === 'Topic' ? 'badge-indigo' : 'badge-amber'}">${item.type}</span>
          <div>
            <div class="result-title">${item.title}</div>
            <div class="result-category">${item.subtitle}</div>
          </div>
        </div>
        <kbd class="search-shortcut-key">↵</kbd>
      `;

      row.addEventListener('click', () => {
        // Add to recent searches if new
        if (q && !this.state.recentSearches.includes(q)) {
          this.state.recentSearches.unshift(q);
          if (this.state.recentSearches.length > 6) this.state.recentSearches.pop();
          this.saveState();
        }

        this.globalSearchModal.classList.remove('open');
        if (item.type === 'Topic') {
          this.openTopicReader(item.id);
        } else if (item.type === 'Challenge') {
          this.switchView('challenges');
        } else if (item.type === 'Toolkit') {
          this.switchView('resources');
        }
        this.playTap();
      });

      container.appendChild(row);
    });
  }

  // ------------------------------------------------------------------------
  // Weekly Summary Modal
  // ------------------------------------------------------------------------
  openWeeklyModal() {
    if (this.weeklySummaryModal) {
      const topicsCount = document.getElementById('weeklyTopicsCount');
      if (topicsCount) topicsCount.textContent = this.state.completedTopics.length;

      this.weeklySummaryModal.classList.add('open');
      this.playSuccessChime();
    }
  }
}

// Global bootstrap
window.addEventListener('DOMContentLoaded', () => {
  window.synapseApp = new SynapseApp();
});
