import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "What is demand forecasting?",
      answer: "Demand forecasting is the process of predicting future customer demand for a product or service. This is essential for retailers to optimize their inventory, prevent overstock or out-of-stock situations, and ultimately, improve customer satisfaction and profitability."
    },
    {
      question: "How does AI improve demand forecasting?",
      answer: "AI enhances demand forecasting by analyzing vast amounts of data, identifying complex patterns, and making more accurate predictions. It can consider multiple factors such as historical sales data, seasonal trends, economic indicators, and even external events to provide more precise forecasts."
    },
    {
      question: "What are the benefits of demand forecasting?",
      answer: "The benefits of demand forecasting include improved inventory management, reduced costs, increased sales, better cash flow management, enhanced customer satisfaction, and more informed business decisions."
    },
    {
      question: "Can demand forecasting reduce waste?",
      answer: "Yes, demand forecasting can significantly reduce waste by helping retailers order the right amount of inventory. By accurately predicting demand, businesses can avoid overstocking perishable goods or products with limited shelf life, thus minimizing waste and associated costs."
    }
  ]
  
  export function FAQ() {
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0e161b] mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[#0e161b]">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#507a95]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  