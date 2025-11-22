import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "MIS Analyst",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    responsibilities: [
      "Managed and optimized company databases and information systems",
      "Developed and maintained business intelligence dashboards",
      "Automated reporting processes reducing manual work by 40%",
      "Collaborated with cross-functional teams to implement system improvements"
    ]
  },
  {
    title: "Junior MIS Specialist",
    company: "Data Systems Corp",
    period: "2021 - 2022",
    responsibilities: [
      "Assisted in database management and maintenance",
      "Supported system implementation projects",
      "Created technical documentation and user guides",
      "Provided technical support to end-users"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <Briefcase className="text-blue-500 mr-2" size={20} />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-2" size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <h4 className="text-lg text-blue-600 font-medium mb-3">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}