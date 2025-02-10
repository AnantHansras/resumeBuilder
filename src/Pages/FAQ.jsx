import { Accordion, AccordionItem } from "../Components/Accordion";

const faqData = [
  {
    id: "1",
    question: "What is Next.js?",
    steps: [
      "Next.js is a React framework for building full-stack web applications.",
      "It provides a suite of tools and features for optimizing your React applications.",
      "Next.js offers server-side rendering, static site generation, and API routes out of the box.",
      "It simplifies the development process with its file-based routing system.",
    ],
  },
  {
    id: "2",
    question: "How do I get started with Next.js?",
    steps: [
      "Ensure you have Node.js installed on your computer.",
      "Open your terminal and run the command: npx create-next-app@latest",
      "Follow the prompts to set up your project, choosing your preferred options.",
      "Once the installation is complete, navigate to your project directory.",
      "Run npm run dev to start the development server.",
    ],
  },
  {
    id: "3",
    question: "What is the App Router?",
    steps: [
      "The App Router is a new routing system introduced in Next.js 13.",
      "It uses a file-system based approach for defining routes.",
      "The App Router supports nested layouts, which allows for more flexible page structures.",
      "It introduces new file conventions like page.js, layout.js, and loading.js for better organization.",
      "The App Router enables the use of React Server Components by default.",
    ],
  },
  {
    id: "4",
    question: "What are Server Components?",
    steps: [
      "Server Components are a new React feature that allows components to be rendered on the server.",
      "They reduce the amount of JavaScript sent to the client, improving initial page load time.",
      "Server Components can access backend resources directly, like databases or file systems.",
      "They work seamlessly with Client Components, allowing you to build hybrid applications.",
      "In Next.js, all components inside the app directory are Server Components by default.",
    ],
  },
  {
    id: "5",
    question: "How does Next.js handle styling?",
    steps: [
      "Next.js supports CSS Modules out of the box, allowing for scoped CSS.",
      "Global CSS can be imported in the app/layout.js file.",
      "Sass is supported with minimal configuration.",
      "Tailwind CSS can be easily integrated into a Next.js project.",
      "CSS-in-JS solutions like styled-components or Emotion can also be used with some additional setup.",
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#07142b] mb-8">Frequently Asked Questions</h1>
        <p className="text-[#46464e] text-center mb-12">
          Find step-by-step answers to common questions about Next.js and web development.
        </p>
        <Accordion>
          {faqData.map((item) => (
            <AccordionItem key={item.id} id={item.id} title={item.question} steps={item.steps} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
