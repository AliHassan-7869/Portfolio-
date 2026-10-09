export const projectDetails = {
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
    title: 'AI Courtroom',
    tagline: 'AI-Powered Legal Case Assistant',
    icon: '⚖️',
    image: '/ai-courtroom-cover.svg',
    description: 'A courtroom-focused AI assistant built to help users understand legal questions, case structure, and legal reasoning in a more accessible way.',
    techStack: ['Python', 'LLM APIs', 'Prompt Engineering', 'Legal AI'],
    features: [
      'Case-Oriented Q&A: Helps users explore legal scenarios and relevant context.',
      'Decision Support: Provides structured, AI-assisted answers for legal exploration.',
      'Accessible Interface: Simplifies complex legal research into a conversational workflow.'
    ],
    workflow: [
      { step: '01', title: 'Problem Framing', desc: 'Mapped the project around legal question handling and case-oriented responses.' },
      { step: '02', title: 'LLM Logic', desc: 'Structured prompts to guide legal reasoning and produce clear, explainable answers.' },
      { step: '03', title: 'User Experience', desc: 'Built a simple interaction flow for easier legal exploration and learning.' }
    ],
    challenge: 'Legal discussions can be complicated and hard to navigate without context, structure, or simpler explanations.',
    solution: 'An AI assistant designed to guide users through legal questions in a structured, understandable conversational format.',
    results: 'Developed a functional AI legal-assistant prototype that demonstrates practical AI support for courtroom-style inquiries.'
  },
  'mini-ai-hub': {
    title: 'Mini AI Hub',
    tagline: 'AI Tools Dashboard',
    icon: '🧩',
    image: '/mini-ai-hub-cover.svg',
    description: 'A mini AI hub that brings together multiple AI-powered tools in one simple platform experience, focusing on usability and quick experimentation.',
    techStack: ['JavaScript', 'AI Tools', 'Frontend UI', 'Automation'],
    features: [
      'Unified Interface: Combines multiple AI experiences in one dashboard.',
      'Quick Access: Makes AI tools easier to explore and use.',
      'Practical UX: Designed for fast interaction and simple flow.'
    ],
    workflow: [
      { step: '01', title: 'Tool Mapping', desc: 'Collected and organized multiple AI use cases into one central experience.' },
      { step: '02', title: 'Dashboard Design', desc: 'Built a clean interface to present tools in an approachable way.' },
      { step: '03', title: 'Interaction Flow', desc: 'Focused the experience on quick access and practical user engagement.' }
    ],
    challenge: 'AI tools are often scattered across separate apps, making it hard to explore them in one place.',
    solution: 'A compact AI dashboard that centralizes multiple tool experiences and simplifies access.',
    results: 'Created a lightweight AI hub interface that demonstrates organized AI exploration in one place.'
  },
  // Skills mappings
  'ai-agents': {
    title: 'AI Agents & Multi-Agent Systems',
    tagline: 'Autonomous, Orchestrated AI',
    icon: '🤖',
    description: 'Designing and building multi-agent AI systems where specialized agents collaborate to solve complex, multi-step problems.',
    techStack: ['CrewAI', 'LangChain', 'Multi-Agent Design', 'LLM Orchestration'],
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
    techStack: ['LangChain', 'DeepSeek', 'OpenRouter', 'TensorFlow', 'PyTorch'],
    features: [
      'Prompt engineering for reliable, task-specific outputs',
      'LLM API integration (DeepSeek, OpenRouter, and others)',
      'Working knowledge of TensorFlow and PyTorch',
      'Retrieval-augmented generation (RAG) for grounded answers'
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
    techStack: ['FastAPI', 'Docker', 'Render', 'Python'],
    features: [
      'RESTful API development with FastAPI',
      'Containerized deployments with Docker',
      'Cloud deployment and hosting via Render',
      'Debugging real-world dependency and deployment issues'
    ],
    workflow: [
      { step: '01', title: 'API Design', desc: 'Structuring clean, well-documented FastAPI endpoints for AI-powered services.' },
      { step: '02', title: 'Containerization', desc: 'Packaging services with Docker for consistent, portable deployment.' },
      { step: '03', title: 'Cloud Deployment', desc: 'Shipping and maintaining services on Render, resolving issues as they come up in production.' }
    ]
  },
  'automation': {
    title: 'Automation & Workflows',
    tagline: 'Connecting Tools Intelligently',
    icon: '🔗',
    description: 'Automating workflows and connecting tools using platforms like N8N alongside custom AI logic.',
    techStack: ['N8N', 'Python', 'APIs', 'Automation'],
    features: [
      'Workflow automation with N8N',
      'Custom API integrations for connected tooling',
      'Python scripting for automation logic',
      'Practical, business-focused automation design'
    ],
    workflow: [
      { step: '01', title: 'Workflow Mapping', desc: 'Identifying repetitive or multi-step processes worth automating.' },
      { step: '02', title: 'Automation Build', desc: 'Building the workflow in N8N with API and Python logic where needed.' },
      { step: '03', title: 'Testing & Refinement', desc: 'Validating the automation end-to-end and refining for reliability.' }
    ]
  }
};