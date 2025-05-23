import Accordion from "./Accordion";

const Questions = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces, developed by Facebook." },
    { title: "What is JSX?", content: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM." },
    { title: "What are components in React?", content: "Components are the building blocks of a React application's UI. They can be functional or class-based." },
    { title: "What is the virtual DOM?", content: "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM." },
    { title: "What are props in React?", content: "Props are inputs to components. They are single values or objects passed to components to customize them." },
    { title: "What is state in React?", content: "State is a built-in object that stores property values that belong to the component and can change over time." },
    { title: "What are hooks in React?", content: "Hooks are functions that let you use state and other React features in functional components." },
    { title: "What is useEffect used for?", content: "The useEffect hook lets you perform side effects in function components, like data fetching or subscriptions." },
    { title: "How do you handle forms in React?", content: "Forms in React are typically handled with controlled components, where form data is handled by the component's state." },
    { title: "What is the difference between controlled and uncontrolled components?", content: "Controlled components have their form data controlled by React state, while uncontrolled components store their own state in the DOM." }
];

export default function FAQ() {
    return (
        <div className="shadow-neutral-500 shadow flex flex-col text-left p-5 rounded-2xl bg-slate-400 w-[40vw]">
            <h1>Frequently Asked Questions</h1>
            {Questions.map((Q)=><Accordion title={Q.title} content={Q.content} key={Q.title + Q.content}/>)}
        </div>
    )
}