const skillCategories = [
  {
    category: "Technical Skills",
    skills: [
      { name: "SQL & Database Management", level: 90 },
      { name: "Data Analysis", level: 85 },
      { name: "Business Intelligence Tools", level: 80 },
      { name: "ERP Systems", level: 75 },
      { name: "Python Programming", level: 70 },
      { name: "System Administration", level: 80 }
    ]
  },
  {
    category: "Business Skills",
    skills: [
      { name: "Business Process Analysis", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Data Visualization", level: 75 },
      { name: "Technical Documentation", level: 90 },
      { name: "Stakeholder Communication", level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}