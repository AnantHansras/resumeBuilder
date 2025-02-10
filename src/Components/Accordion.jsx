import { createContext, useState, useContext } from "react";
import { ChevronDown } from "lucide-react";

const AccordionContext = createContext();

export function Accordion({ children }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openItemId, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
}

export function AccordionItem({ id, title, steps }) {
  const { openItemId, toggleItem } = useAccordion();
  const isOpen = openItemId === id;

  return (
    <div className="border border-[#46464e] rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-[#f9faff] hover:bg-white transition-colors"
        onClick={() => toggleItem(id)}
      >
        <span className="text-[#07142b] font-semibold">{title}</span>
        <ChevronDown
          className={`text-[#0c1986] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-[#f9faff] text-[#46464e]">
          <ol className="list-decimal pl-5 space-y-2">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
            <li>
              If you need further assistance,{' '}
              <a href="/contact" className="text-[#0c1986] hover:underline transition-all duration-200">
                contact us
              </a>
              .
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
