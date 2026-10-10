export const projectDetails = {
  'adalat': {
    title: 'Adalat — AI Courtroom Simulator',
    tagline: 'Multi-Agent Pakistani Legal Reasoning System',
    icon: '⚖️',
    image: '/aicourtroom.svg',
    description: 'A multi-agent legal reasoning simulator where prosecutor, defence, and judge agents argue cases under Pakistani law (PPC, CrPC, QSO, PECA), delivering structured verdicts against a weighted rubric.',
    techStack: ['Python', 'Gemini', 'Streamlit', 'Pydantic', 'SQLite', 'HyDE', 'RAG'],
    features: [
      'Multi-Agent Arguments: Simulated prosecutor, defence, and judge agents debating legal precedents.',
      'Pakistani Law Grounding: Built on PPC, CrPC, QSO, and PECA legal codes.',
      'Hybrid Retrieval: Fused BM25, citation matching, and HyDE with reciprocal rank fusion for 100% recall@5 on a 40-case benchmark.',
      'Anti-Hallucination Defense: 3-layer defense (retrieval-first prompting, ID stripping, LLM verifier) against hallucinated law.'
    ],
    workflow: [
      { step: '01', title: 'Legal Architecture', desc: 'Designed specialized agent roles for prosecution, defense, and judge using Pakistani legal codes.' },
      { step: '02', title: 'Hybrid Retrieval Engine', desc: 'Combined BM25 keyword search, citation matching, and HyDE with reciprocal rank fusion.' },
      { step: '03', title: 'Anti-Hallucination Pipeline', desc: 'Built a 3-layer verification system to prevent legal hallucinations and ensure citation accuracy.' },
      { step: '04', title: 'Verdict Engine', desc: 'Integrated structured LLM scoring rubrics in Streamlit for clear, explainable court decisions.' }
    ],
    challenge: 'Legal AI applications frequently hallucinate case law or produce vague arguments without proper statutory grounding.',
    solution: 'Engineered a 3-layer anti-hallucination defense paired with hybrid BM25+HyDE retrieval to ground multi-agent debates in authentic Pakistani law.',
    results: 'Achieved 100% recall@5 across a 40-case benchmark and produced explainable, rubric-backed legal verdicts.'
  },
  'awaaz': {
    title: 'Awaaz — Real-time Voice AI Assistant',
    tagline: 'Bilingual Urdu/English Voice AI System',
    icon: '🎙️',
    image: '/chatbot.svg',
    description: 'A real-time bilingual (Urdu/English) voice assistant with a FastAPI backend, PostgreSQL + pgvector long-term memory, Redis caching, and a React web client containerized with Docker.',
    techStack: ['LiveKit Agents', 'ElevenLabs', 'FastAPI', 'pgvector', 'Redis', 'React', 'Docker'],
    features: [
      'Real-Time Speech Processing: Powered by LiveKit Agents and ElevenLabs for low-latency bilingual speech.',
      'Vector Memory: Vector memory with PostgreSQL + pgvector for seamless multi-session recall.',
      'Bilingual Capabilities: Instant language switching between Urdu and English with high accuracy.',
      'Production Stack: Containerized with Docker, backed by Redis caching and a responsive React UI.'
    ],
    workflow: [
      { step: '01', title: 'Voice Pipeline Setup', desc: 'Orchestrated LiveKit Agents and ElevenLabs for ultra-low latency voice interaction.' },
      { step: '02', title: 'Memory Integration', desc: 'Implemented pgvector with PostgreSQL and Redis to give the assistant persistent conversational memory.' },
      { step: '03', title: 'Bilingual Prompting', desc: 'Designed context-switching prompts to maintain natural Urdu and English dialogue.' },
      { step: '04', title: 'Containerization', desc: 'Packaged the FastAPI backend and React frontend with Docker for cloud deployment.' }
    ],
    challenge: 'Real-time voice assistants suffer from latency and loss of context in non-English or bilingual environments.',
    solution: 'Integrated LiveKit streaming pipelines with pgvector vector memory and Redis to deliver fast, context-aware bilingual conversations.',
    results: 'Shipped a containerized, low-latency bilingual voice assistant capable of real-time Urdu and English interaction.'
  },
  'qa-supervisor': {
    title: 'QA Supervisor & Instrumentation Agent',
    tagline: 'Friday Media Group — Edge & Token Automation',
    icon: '⚡',
    image: '/cvresume.jpg',
    description: 'Built a zero-impact instrumentation shim across 142 edge functions that simulates side effects, token tracking systems, and 700+ automated Vitest/Playwright tests across 35 categories.',
    techStack: ['Python', 'Supabase', 'Vitest', 'Playwright', 'FastAPI', 'Redis', 'LLM Evaluation'],
    features: [
      'Edge Function Instrumentation: Zero-impact shim across 142 edge functions for safe dry-run testing.',
      'Token & Cost Monitoring: Per-test input/output token tracking, model call metrics, and separate judge cost analysis.',
      'Comprehensive Test Suite: 700+ automated Vitest & Playwright tests covering security, prompt injection, and reliability.',
      'Real-Time Dashboard: Built with Supabase Realtime for execution traces, token usage, and regression tracking.'
    ],
    workflow: [
      { step: '01', title: 'Instrumentation Shim', desc: 'Created dry-run simulation layer for DB writes, emails, refunds, and external API calls.' },
      { step: '02', title: 'Token & Cost Engine', desc: 'Built fine-grained metrics tracking for LLM calls and evaluation costs.' },
      { step: '03', title: 'QA Automation', desc: 'Authored 700+ automated test cases covering prompt injection, concurrency, and security.' },
      { step: '04', title: 'Realtime Dashboard', desc: 'Connected Supabase Realtime for instant trace visualization and regression alerts.' }
    ],
    challenge: 'Testing AI agents in production risks unintended side effects (refunds, emails, DB writes) and unmonitored LLM token costs.',
    solution: 'Developed an edge function instrumentation shim alongside automated token tracking and a QA supervisor agent.',
    results: 'Enabled safe dry-run testing across 142 edge functions, tracked token spend, and reduced regression errors.'
  },
  'goguide': {
    title: 'GoGuide',
    tagline: 'AI-Based Travel Planning System',
    icon: '🧭',
    image: '/goguide.jpg',
    description: 'An AI-powered travel planning application built with FastAPI and CrewAI, using a multi-agent architecture to generate personalized itineraries.',
    techStack: ['FastAPI', 'CrewAI', 'LangChain', 'Python', 'Docker', 'Render'],
    features: [
      'Multi-Agent Architecture: Dedicated agents for location analysis, travel guidance, and itinerary generation.',
      'LLM Integration: Connected DeepSeek and OpenRouter APIs for intelligent, personalized travel plans.',
      'Scalable Backend: Deployed on Render with a containerized FastAPI service.',
      'Robust Engineering: Resolved real-world API errors, dependency conflicts, and deployment issues.'
    ],
    workflow: [
      { step: '01', title: 'Agent Design', desc: 'Designed and implemented specialized CrewAI agents for location analysis, travel guidance, and itinerary generation.' },
      { step: '02', title: 'LLM Orchestration', desc: 'Integrated DeepSeek and OpenRouter LLM APIs through LangChain to power personalized travel recommendations.' },
      { step: '03', title: 'Backend Development', desc: 'Built a scalable FastAPI backend with Docker containerization for reliable, portable deployment.' },
      { step: '04', title: 'Deployment & Debugging', desc: 'Shipped the system to Render, resolving API errors, dependency conflicts, and deployment issues along the way.' }
    ],
    challenge: 'Travelers need personalized, multi-step itineraries, but coordinating location data, guidance, and scheduling into one coherent plan is complex for a single AI call to handle well.',
    solution: 'A multi-agent system where specialized CrewAI agents each own one part of the problem — location analysis, guidance, and itinerary generation — then combine their outputs into a single personalized plan.',
    results: 'Delivered a working, deployed AI travel planner with a scalable FastAPI backend and multi-agent orchestration running in production on Render.'
  },
  'hajjumrah': {
    title: 'Hajj & Umrah AI Planner',
    tagline: 'Multi-Agent Pilgrimage Guidance System',
    icon: '🕋',
    image: '/hajjumrah.jpg',
    description: 'An AI-based Hajj and Umrah planner that creates personalized pilgrimage itineraries and guidance using a multi-agent system with retrieval-augmented generation.',
    techStack: ['CrewAI', 'LangChain', 'RAG', 'Streamlit', 'Docker', 'Python'],
    features: [
      'Personalized Itineraries: Generates pilgrimage plans tailored to each user.',
      'RAG-Powered Accuracy: Retrieval-augmented generation for context-aware religious and travel information.',
      'Interactive Frontend: Built with Streamlit for a smooth, easy-to-use planning experience.',
      'Containerized Deployment: Packaged with Docker and deployed on Render.'
    ],
    workflow: [
      { step: '01', title: 'Multi-Agent Architecture', desc: 'Designed a CrewAI + LangChain multi-agent system for intelligent decision-making across itinerary and guidance tasks.' },
      { step: '02', title: 'RAG Integration', desc: 'Implemented retrieval-augmented generation and API integrations to ground responses in accurate travel and religious information.' },
      { step: '03', title: 'Frontend Experience', desc: 'Designed an interactive Streamlit interface for a smooth, guided planning flow.' },
      { step: '04', title: 'Deployment', desc: 'Deployed the full system using Docker and Render, backed by a Python service layer.' }
    ],
    challenge: 'Pilgrims need accurate, personalized guidance that blends logistics with religious context — a domain where generic AI answers risk being incomplete or wrong.',
    solution: 'A multi-agent system grounded with RAG so responses stay accurate and context-aware, wrapped in a simple Streamlit interface for an easy planning experience.',
    results: 'Built and deployed a functioning AI pilgrimage planner combining multi-agent reasoning, RAG-based accuracy, and a user-friendly interactive frontend.'
  },
  'mockinterview': {
    title: 'Mock Interview Chatbot',
    tagline: 'AI-Powered Interview Practice',
    icon: '🎤',
    image: '/mockinterview.jpg',
    description: 'A conversational AI chatbot that simulates realistic interview scenarios, helping candidates practice and improve before the real thing.',
    techStack: ['LangChain', 'Python', 'LLM APIs', 'FastAPI'],
    features: [
      'Realistic Q&A Flow: Simulates role-specific interview questions and follow-ups.',
      'Instant Feedback: AI-generated feedback on answers to help candidates improve.',
      'LLM-Backed Conversations: Powered by large language model APIs for natural dialogue.',
      'Lightweight Deployment: Simple API-driven architecture for easy integration.'
    ],
    workflow: [
      { step: '01', title: 'Conversation Design', desc: 'Structured interview flows and prompt templates to keep the AI on-topic and role-relevant.' },
      { step: '02', title: 'LLM Integration', desc: 'Connected LLM APIs through LangChain to generate natural, context-aware interview questions and feedback.' },
      { step: '03', title: 'API Layer', desc: 'Exposed the chatbot through a lightweight backend for easy integration into other tools.' }
    ],
    challenge: 'Candidates often lack accessible ways to practice interviews and get honest, immediate feedback.',
    solution: 'A chatbot that simulates interview conversations and gives instant, AI-generated feedback so candidates can practice on demand.',
    results: 'Delivered a functional AI interview-practice tool giving users a realistic, low-pressure way to rehearse before real interviews.'
  },
  'cvresume': {
    title: 'AI CV / Resume Assistant',
    tagline: 'Intelligent Resume Support',
    icon: '📄',
    image: '/cvresume.jpg',
    description: 'An AI-assisted tool for reviewing and improving resumes, using LLMs to analyze content and suggest improvements.',
    techStack: ['Python', 'LangChain', 'LLM APIs'],
    features: [
      'Content Analysis: Reviews resume text for clarity and completeness.',
      'AI Suggestions: Generates suggestions to strengthen wording and structure.',
      'LLM-Driven: Built on large language model APIs via LangChain.'
    ],
    workflow: [
      { step: '01', title: 'Parsing', desc: 'Processed resume content for analysis.' },
      { step: '02', title: 'AI Review', desc: 'Used LLM prompts through LangChain to evaluate and suggest improvements.' },
      { step: '03', title: 'Output', desc: 'Presented actionable, AI-generated suggestions back to the user.' }
    ],
    challenge: 'Many job seekers struggle to know how to improve their resume without expensive professional review.',
    solution: 'An AI assistant that reviews resume content and offers concrete, LLM-generated improvement suggestions.',
    results: 'Built a working AI resume-review tool that gives users fast, actionable feedback.'
  },
  'chatbot': {
    title: 'AI Chatbot',
    tagline: 'Conversational Information Assistant',
    icon: '💬',
    image: '/chatbot.svg',
    description: 'An AI chatbot designed to answer user questions and provide useful, conversational responses based on user intent and context.',
    techStack: ['Python', 'LLM APIs', 'Prompt Engineering', 'Conversational AI'],
    features: [
      'Natural Question Handling: Understands user questions and responds conversationally.',
      'Context-Aware Replies: Uses prompt-driven logic and LLM interaction to produce useful answers.',
      'Simple User Experience: Built for smooth, easy-to-use chat interactions.'
    ],
    workflow: [
      { step: '01', title: 'Prompt Design', desc: 'Built conversational prompts that structure replies and keep answers relevant.' },
      { step: '02', title: 'LLM Interaction', desc: 'Connected the application to model APIs to generate helpful responses.' },
      { step: '03', title: 'User Flow', desc: 'Shaped the experience around quick, practical conversation and response quality.' }
    ],
    challenge: 'Users need fast, clear answers in a conversational format without needing to understand complex systems behind the scenes.',
    solution: 'A chatbot interface powered by LLMs and prompt design, focused on helpful, natural interaction.',
    results: 'Developed a clean conversational AI app that demonstrates practical chatbot design and use of LLMs.'
  },
  'translator': {
    title: 'AI Language Translator',
    tagline: 'LLM-Powered Translation Tool',
    icon: '🌐',
    image: '/translator.svg',
    description: 'A language translation tool powered by large language models, built to handle natural, context-aware translation.',
    techStack: ['Python', 'LLM APIs', 'LangChain'],
    features: [
      'Context-Aware Translation: Uses LLMs for more natural results than rule-based translation.',
      'Multi-Language Support: Handles translation across multiple language pairs.',
      'Simple Interface: Straightforward input-to-output translation flow.'
    ],
    workflow: [
      { step: '01', title: 'Language Handling', desc: 'Set up input handling for multiple source and target languages.' },
      { step: '02', title: 'LLM Translation', desc: 'Used LangChain-orchestrated LLM calls to produce context-aware translations.' },
      { step: '03', title: 'Output Delivery', desc: 'Returned clean, natural-language translations to the user.' }
    ],
    challenge: 'Rule-based translators often miss context and nuance in everyday language.',
    solution: 'An LLM-backed translator that leans on language model context-awareness for more natural results.',
    results: 'Delivered a working AI translation tool demonstrating practical LLM application beyond chat.'
  },
  'multiagents': {
    title: 'Multiagents',
    tagline: 'Investment Research Multi-Agent System',
    icon: '📊',
    image: '/multiagents.svg',
    description: 'A multi-agent AI project that analyzes companies such as Tesla, NVIDIA, and Apple to support long-term investment research and decision-making.',
    techStack: ['Python', 'LLM APIs', 'Multi-Agent Systems', 'Research Analysis'],
    features: [
      'Specialized Agent Roles: Different agents focus on financial and strategic analysis.',
      'Comparative Research: Analyzes multiple companies to create broader investment insight.',
      'Decision Support: Helps users explore relevant long-term trends and signals.'
    ],
    workflow: [
      { step: '01', title: 'Research Setup', desc: 'Structured the system around market research for multiple technology companies.' },
      { step: '02', title: 'Agent Coordination', desc: 'Used a multi-agent approach to gather, compare, and synthesize analysis.' },
      { step: '03', title: 'Insight Delivery', desc: 'Presented data-backed output for easier long-term investment evaluation.' }
    ],
    challenge: 'Investment analysis can be fragmented across multiple sectors, companies, and signals — making comprehensive research hard to organize.',
    solution: 'A multi-agent research workflow that structures analysis across multiple firms and synthesizes insights for clearer decision support.',
    results: 'Built a multi-agent research prototype for analyzing business trends and long-term investment opportunities.'
  },
  'ai-courtroom': {
    title: 'Adalat — AI Courtroom Simulator',
    tagline: 'Multi-Agent Legal Reasoning System',
    icon: '⚖️',
    image: '/aicourtroom.svg',
    description: 'A courtroom-focused legal reasoning simulator where prosecutor, defence, and judge agents argue cases under Pakistani law.',
    techStack: ['Python', 'Gemini', 'Streamlit', 'Pydantic', 'SQLite'],
    features: [
      'Case-Oriented Q&A: Helps users explore legal scenarios under PPC, CrPC, QSO, and PECA.',
      'Hybrid Retrieval: Fused BM25 and HyDE for 100% recall@5 on 40-case benchmark.',
      'Anti-Hallucination: 3-layer verification against hallucinated case law.'
    ],
    workflow: [
      { step: '01', title: 'Problem Framing', desc: 'Mapped the project around legal question handling and case-oriented responses.' },
      { step: '02', title: 'LLM Logic', desc: 'Structured prompts to guide legal reasoning and produce clear, explainable answers.' },
      { step: '03', title: 'User Experience', desc: 'Built a simple interaction flow for easier legal exploration and learning.' }
    ],
    challenge: 'Legal discussions can be complicated and hard to navigate without context, structure, or statutory grounding.',
    solution: 'An AI assistant designed to guide users through legal questions in a structured, understandable conversational format.',
    results: 'Developed a functional AI legal-assistant prototype that demonstrates practical AI support for courtroom-style inquiries.'
  },
  'aicourtroom': {
    title: 'Adalat — AI Courtroom Simulator',
    tagline: 'Multi-Agent Legal Reasoning System',
    icon: '⚖️',
    image: '/aicourtroom.svg',
    description: 'A courtroom-focused legal reasoning simulator where prosecutor, defence, and judge agents argue cases under Pakistani law.',
    techStack: ['Python', 'Gemini', 'Streamlit', 'Pydantic', 'SQLite'],
    features: [
      'Case-Oriented Q&A: Helps users explore legal scenarios under PPC, CrPC, QSO, and PECA.',
      'Hybrid Retrieval: Fused BM25 and HyDE for 100% recall@5 on 40-case benchmark.',
      'Anti-Hallucination: 3-layer verification against hallucinated case law.'
    ],
    workflow: [
      { step: '01', title: 'Problem Framing', desc: 'Mapped the project around legal question handling and case-oriented responses.' },
      { step: '02', title: 'LLM Logic', desc: 'Structured prompts to guide legal reasoning and produce clear, explainable answers.' },
      { step: '03', title: 'User Experience', desc: 'Built a simple interaction flow for easier legal exploration and learning.' }
    ],
    challenge: 'Legal discussions can be complicated and hard to navigate without context, structure, or statutory grounding.',
    solution: 'An AI assistant designed to guide users through legal questions in a structured, understandable conversational format.',
    results: 'Developed a functional AI legal-assistant prototype that demonstrates practical AI support for courtroom-style inquiries.'
  },
  'mini-ai-hub': {
    title: 'Mini AI Hub',
    tagline: 'Multi-Agent Runtime & Orchestrator',
    icon: '⚡',
    image: '/miniaihub.svg',
    description: 'A unified agent runtime and orchestrator powering Finance and Marketing multi-agent stacks with Supabase integration and Stripe webhooks.',
    techStack: ['JavaScript', 'Node.js', 'Supabase', 'Stripe', 'Anthropic API'],
    features: [
      'Agent Runtime Engine: Orchestrates multi-domain agent execution with state persistence.',
      'Supabase Integration: Shared database schema storing agent logs, tasks, and outputs.',
      'Stripe Monetization: Webhook-driven billing events and subscription-gated agent workflows.'
    ],
    workflow: [
      { step: '01', title: 'Architecture', desc: 'Designed unified agent runtime with background scheduled cycles.' },
      { step: '02', title: 'State & Events', desc: 'Connected Supabase for persistent memory and Stripe webhooks for lifecycle events.' },
      { step: '03', title: 'Domain Execution', desc: 'Dispatched specialized agents for automated finance and marketing analysis.' }
    ],
    challenge: 'Managing distinct agent lifecycles across diverse business domains without state fragmentation or billing overhead.',
    solution: 'A unified multi-agent runtime sharing a robust Supabase database and automated Stripe billing triggers.',
    results: 'Built a scalable multi-domain agent orchestrator ready for production SaaS workloads.'
  },
  'miniaihub': {
    title: 'Mini AI Hub',
    tagline: 'Multi-Agent Runtime & Orchestrator',
    icon: '⚡',
    image: '/miniaihub.svg',
    description: 'A unified agent runtime and orchestrator powering Finance and Marketing multi-agent stacks with Supabase integration and Stripe webhooks.',
    techStack: ['JavaScript', 'Node.js', 'Supabase', 'Stripe', 'Anthropic API'],
    features: [
      'Agent Runtime Engine: Orchestrates multi-domain agent execution with state persistence.',
      'Supabase Integration: Shared database schema storing agent logs, tasks, and outputs.',
      'Stripe Monetization: Webhook-driven billing events and subscription-gated agent workflows.'
    ],
    workflow: [
      { step: '01', title: 'Architecture', desc: 'Designed unified agent runtime with background scheduled cycles.' },
      { step: '02', title: 'State & Events', desc: 'Connected Supabase for persistent memory and Stripe webhooks for lifecycle events.' },
      { step: '03', title: 'Domain Execution', desc: 'Dispatched specialized agents for automated finance and marketing analysis.' }
    ],
    challenge: 'Managing distinct agent lifecycles across diverse business domains without state fragmentation or billing overhead.',
    solution: 'A unified multi-agent runtime sharing a robust Supabase database and automated Stripe billing triggers.',
    results: 'Built a scalable multi-domain agent orchestrator ready for production SaaS workloads.'
  },
  'neural-bridge': {
    title: 'Neural-Bridge: Production AI System',
    tagline: 'From Research to Production MLOps',
    icon: '🌉',
    image: '/neuralbridge.svg',
    description: 'Demonstrating the full AI lifecycle from research-grade experimentation to production: training CNNs on CIFAR-10 with PyTorch and TensorFlow, sentiment analysis with NLTK, and packaging into a containerized FastAPI endpoint.',
    techStack: ['PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'Docker Compose', 'NLTK'],
    features: [
      'Dual-Framework CNN: Built and benchmarked identical architectures across PyTorch and TensorFlow/Keras on CIFAR-10.',
      'Production FastAPI Serving: Wrapped sentiment NLP models in asynchronous, high-throughput REST endpoints.',
      'Dockerized Deployment: Configured reproducible container builds and docker-compose orchestration.'
    ],
    workflow: [
      { step: '01', title: 'Model Training', desc: 'Trained and evaluated deep CNN models on CIFAR-10, comparing framework metrics.' },
      { step: '02', title: 'API Wrapping', desc: 'Developed clean FastAPI endpoints for model inference and sentiment classification.' },
      { step: '03', title: 'Containerization', desc: 'Constructed multi-stage Dockerfiles and docker-compose files for one-command deployment.' }
    ],
    challenge: 'Transitioning machine learning models from prototype notebooks into robust, portable, production-ready microservices.',
    solution: 'Standardized the MLOps pipeline using containerization, REST API standards, and framework-agnostic evaluation.',
    results: 'Successfully built a complete MLOps workflow enabling zero-downtime serving of vision and NLP models.'
  },
  'neuralbridge': {
    title: 'Neural-Bridge: Production AI System',
    tagline: 'From Research to Production MLOps',
    icon: '🌉',
    image: '/neuralbridge.svg',
    description: 'Demonstrating the full AI lifecycle from research-grade experimentation to production: training CNNs on CIFAR-10 with PyTorch and TensorFlow, sentiment analysis with NLTK, and packaging into a containerized FastAPI endpoint.',
    techStack: ['PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'Docker Compose', 'NLTK'],
    features: [
      'Dual-Framework CNN: Built and benchmarked identical architectures across PyTorch and TensorFlow/Keras on CIFAR-10.',
      'Production FastAPI Serving: Wrapped sentiment NLP models in asynchronous, high-throughput REST endpoints.',
      'Dockerized Deployment: Configured reproducible container builds and docker-compose orchestration.'
    ],
    workflow: [
      { step: '01', title: 'Model Training', desc: 'Trained and evaluated deep CNN models on CIFAR-10, comparing framework metrics.' },
      { step: '02', title: 'API Wrapping', desc: 'Developed clean FastAPI endpoints for model inference and sentiment classification.' },
      { step: '03', title: 'Containerization', desc: 'Constructed multi-stage Dockerfiles and docker-compose files for one-command deployment.' }
    ],
    challenge: 'Transitioning machine learning models from prototype notebooks into robust, portable, production-ready microservices.',
    solution: 'Standardized the MLOps pipeline using containerization, REST API standards, and framework-agnostic evaluation.',
    results: 'Successfully built a complete MLOps workflow enabling zero-downtime serving of vision and NLP models.'
  },
  'sustainability': {
    title: 'Mission Sustainability',
    tagline: 'Multi-Agent Environmental Intelligence',
    icon: '🌱',
    image: '/sustainability.svg',
    description: 'A multi-agent response system designed to analyze sustainability metrics, ecological impact, and corporate ESG practices using specialized AI agents.',
    techStack: ['Python', 'CrewAI', 'LangChain', 'Prompt Engineering'],
    features: [
      'Multi-Agent Ecological Analysis: Specialized agents evaluate carbon emissions, resource consumption, and sustainability goals.',
      'Automated Policy Insights: Generates actionable recommendations tailored to environmental regulations.',
      'Holistic Synthesis: Cross-references environmental data to produce balanced, evidence-based reports.'
    ],
    workflow: [
      { step: '01', title: 'Data Ingestion', desc: 'Parsed sustainability disclosures, environmental metrics, and targets.' },
      { step: '02', title: 'Agent Deliberation', desc: 'Orchestrated specialized agents to evaluate specific sustainability verticals.' },
      { step: '03', title: 'Report Generation', desc: 'Synthesized multi-agent findings into comprehensive ESG recommendation summaries.' }
    ],
    challenge: 'Evaluating complex sustainability initiatives requires analyzing conflicting data across emissions, supply chains, and regulatory standards.',
    solution: 'Leveraged cooperative multi-agent teams where each agent rigorously scrutinizes a distinct environmental pillar.',
    results: 'Delivered an autonomous sustainability auditing agent capable of deep ecological insights.'
  },
  'research-discussion': {
    title: 'Research Discussion AI',
    tagline: 'Collaborative Multi-Agent Deliberation',
    icon: '💡',
    image: '/researchdiscussion.svg',
    description: 'A multi-agent deliberative system that facilitates academic and technical research discussions through hypothesis generation, peer critique, and consensus building.',
    techStack: ['Python', 'LangChain', 'LLM APIs', 'Multi-Agent Deliberation'],
    features: [
      'Dialectical Reasoning: Agents challenge assumptions and provide counter-arguments to stress-test ideas.',
      'Consensus Synthesis: Identifies common ground and summarizes unresolved questions.',
      'Automated Literature Grounding: Contextualizes discussions against current scientific methodology.'
    ],
    workflow: [
      { step: '01', title: 'Hypothesis Setup', desc: 'Input initial research question or problem statement for exploration.' },
      { step: '02', title: 'Agent Debate', desc: 'Agents engage in multi-turn structured debate from contrasting perspectives.' },
      { step: '03', title: 'Consensus Report', desc: 'Produced finalized discussion brief highlighting strongest arguments and key takeaways.' }
    ],
    challenge: 'Single-prompt LLMs often produce agreeable but shallow answers lacking deep intellectual critique.',
    solution: 'Designed an adversarial yet collaborative multi-agent discussion dynamic where agents rigorously cross-examine hypotheses.',
    results: 'Achieved high-depth research reasoning with autonomous debate and synthesized consensus.'
  },
  'researchdiscussion': {
    title: 'Research Discussion AI',
    tagline: 'Collaborative Multi-Agent Deliberation',
    icon: '💡',
    image: '/researchdiscussion.svg',
    description: 'A multi-agent deliberative system that facilitates academic and technical research discussions through hypothesis generation, peer critique, and consensus building.',
    techStack: ['Python', 'LangChain', 'LLM APIs', 'Multi-Agent Deliberation'],
    features: [
      'Dialectical Reasoning: Agents challenge assumptions and provide counter-arguments to stress-test ideas.',
      'Consensus Synthesis: Identifies common ground and summarizes unresolved questions.',
      'Automated Literature Grounding: Contextualizes discussions against current scientific methodology.'
    ],
    workflow: [
      { step: '01', title: 'Hypothesis Setup', desc: 'Input initial research question or problem statement for exploration.' },
      { step: '02', title: 'Agent Debate', desc: 'Agents engage in multi-turn structured debate from contrasting perspectives.' },
      { step: '03', title: 'Consensus Report', desc: 'Produced finalized discussion brief highlighting strongest arguments and key takeaways.' }
    ],
    challenge: 'Single-prompt LLMs often produce agreeable but shallow answers lacking deep intellectual critique.',
    solution: 'Designed an adversarial yet collaborative multi-agent discussion dynamic where agents rigorously cross-examine hypotheses.',
    results: 'Achieved high-depth research reasoning with autonomous debate and synthesized consensus.'
  },
  // Skills mappings
  'ai-agents': {
    title: 'AI Agents & Multi-Agent Systems',
    tagline: 'Autonomous, Orchestrated AI',
    icon: '🤖',
    description: 'Designing and building multi-agent AI systems where specialized agents collaborate to solve complex, multi-step problems.',
    techStack: ['CrewAI', 'LangChain', 'LangGraph', 'LLM Orchestration'],
    features: [
      'Agent role design for focused, specialized reasoning',
      'Multi-agent coordination for complex, multi-step tasks',
      'RAG integration for grounded, accurate responses',
      'Production deployment of agent-based systems'
    ],
    workflow: [
      { step: '01', title: 'Problem Decomposition', desc: 'Breaking complex tasks into specialized agent roles that each own a clear part of the problem.' },
      { step: '02', title: 'Agent Orchestration', desc: 'Coordinating agents with CrewAI and LangChain so their outputs combine into a coherent result.' },
      { step: '03', title: 'Grounding & Deployment', desc: 'Adding RAG for accuracy and shipping the system with Docker on platforms like Render.' }
    ]
  },
  'genai': {
    title: 'Generative AI & LLMs',
    tagline: 'Applied Large Language Models',
    icon: '🧠',
    description: 'Building practical applications on top of large language models — from prompt design to full-stack AI product integration.',
    techStack: ['LangChain', 'LangGraph', 'Gemini', 'Claude', 'GPT', 'Pinecone', 'pgvector'],
    features: [
      'Prompt engineering for reliable, task-specific outputs',
      'LLM API integration (Gemini, Claude, GPT, DeepSeek)',
      'LLM evaluation, token & cost monitoring',
      'Retrieval-augmented generation (RAG) with Pinecone & pgvector'
    ],
    workflow: [
      { step: '01', title: 'Model Selection', desc: 'Choosing the right LLM and API for a given task and cost/performance tradeoff.' },
      { step: '02', title: 'Prompt & RAG Design', desc: 'Crafting prompts and retrieval pipelines that keep model output accurate and on-task.' },
      { step: '03', title: 'Application Integration', desc: 'Wiring LLM output into real applications with clean API boundaries.' }
    ]
  },
  'backend': {
    title: 'Backend & Deployment',
    tagline: 'Shipping AI to Production',
    icon: '⚙️',
    description: 'Building and deploying backend services that bring AI systems from notebook to production.',
    techStack: ['FastAPI', 'PostgreSQL', 'Supabase', 'Redis', 'Docker'],
    features: [
      'RESTful API development with FastAPI',
      'Database & Vector Search with Supabase, PostgreSQL & pgvector',
      'Containerized deployments with Docker & Render',
      'Automated testing with Vitest & Playwright'
    ],
    workflow: [
      { step: '01', title: 'API Design', desc: 'Structuring clean, well-documented FastAPI endpoints for AI-powered services.' },
      { step: '02', title: 'Containerization', desc: 'Packaging services with Docker for consistent, portable deployment.' },
      { step: '03', title: 'Cloud Deployment', desc: 'Shipping and maintaining services on Render/Supabase, resolving issues as they come up.' }
    ]
  },
  'automation': {
    title: 'Automation & QA Testing',
    tagline: 'Agent Reliability & Token Tracking',
    icon: '⚡',
    description: 'Building QA supervisor agents, edge function dry-run instrumentation shims, and token tracking systems.',
    techStack: ['Vitest', 'Playwright', 'Supabase Realtime', 'Python', 'N8N'],
    features: [
      'Zero-impact edge function dry-run shims',
      'LLM token, cost & regression tracking',
      '700+ automated tests across 35 categories',
      'Realtime QA execution trace dashboards'
    ],
    workflow: [
      { step: '01', title: 'Workflow Mapping', desc: 'Identifying edge side-effects and critical test categories worth automating.' },
      { step: '02', title: 'Instrumentation Build', desc: 'Building dry-run simulation layers for safe automated agent execution.' },
      { step: '03', title: 'Testing & Refinement', desc: 'Validating end-to-end execution traces and monitoring token budgets.' }
    ]
  }
};