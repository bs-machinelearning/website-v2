import { Calendar } from "lucide-react";

const theses = [
  {
    id: 1,
    title: "Deep Learning Approaches to Volatility Surface Modeling",
    author: "Francesco T.",
    supervisor: "Prof. Maria G.",
    year: "2024",
    degree: "MSc Finance",
  },
  {
    id: 2,
    title: "Machine Learning for ESG Scoring in Investment Decisions",
    author: "Giulia M.",
    supervisor: "Prof. Alessandro V.",
    year: "2024",
    degree: "MSc Data Science",
  },
  {
    id: 3,
    title: "Quantum Machine Learning for Portfolio Optimization",
    author: "Luca R.",
    supervisor: "Dr. Paolo S.",
    year: "2023",
    degree: "MSc Quant Finance",
  },
  {
    id: 4,
    title: "Reinforcement Learning for Algorithmic Trading Strategies",
    author: "Anna B.",
    supervisor: "Prof. Roberto M.",
    year: "2023",
    degree: "MSc Finance",
  },
  {
    id: 5,
    title: "Natural Language Processing for Financial Sentiment Analysis",
    author: "Marco P.",
    supervisor: "Dr. Laura F.",
    year: "2022",
    degree: "MSc Data Science",
  },
  {
    id: 6,
    title: "Graph Neural Networks for Credit Risk Modeling",
    author: "Sofia L.",
    supervisor: "Prof. Giovanni D.",
    year: "2022",
    degree: "MSc Quant Finance",
  },
];

export default function ResearchPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="border-b border-gray-200 px-6 py-24 md:py-32 dark:border-gray-800">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl dark:text-white">
            Research & Theses
          </h1>
          <p className="text-muted-foreground text-lg">
            Undergraduate and master's theses from our members, exploring
            machine learning applications in finance and quantitative methods.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-muted-foreground pb-4 text-sm font-medium">
                    Title
                  </th>
                  <th className="text-muted-foreground pb-4 text-sm font-medium">
                    Author
                  </th>
                  <th className="text-muted-foreground pb-4 text-sm font-medium">
                    Year
                  </th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {theses.map((thesis) => (
                  <tr
                    key={thesis.id}
                    className="group border-b border-gray-100 dark:border-gray-800/50"
                  >
                    <td className="py-6 pr-4">
                      <div className="font-medium dark:text-white">
                        {thesis.title}
                      </div>
                      <div className="text-muted-foreground mt-1 text-sm">
                        {thesis.supervisor}
                      </div>
                    </td>
                    <td className="text-muted-foreground py-6 pr-4 text-sm">
                      {thesis.author}
                    </td>
                    <td className="text-muted-foreground py-6 pr-4 text-sm">
                      {thesis.year}
                    </td>
                    <td className="py-6 text-right">
                      <a
                        href="#"
                        className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline dark:text-purple-500"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
