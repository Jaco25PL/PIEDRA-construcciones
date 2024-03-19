import { useState } from "react";

const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
        <span>Question</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>

      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">Answer</div>
      </div>
    </div> 
  );
};

export default Accordion;
