import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const EducationItem = ({ institution, degree, year, description }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{institution}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{degree}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{year}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </CardContent>
  </Card>
)

const Education = () => {
  const educationData = [
    {
      institution: "Chandigarh Engnieering College",
      degree: "Bachelor of Technology in Information Technology",
      year: "2022 - 2026",
      description:
        "Pursuing a comprehensive program in IT, focusing on software development, database management, and network technologies.",
    },
    {
      institution: "Senior Secondary School",
      degree: "12th Grade (New Era Public school)",
      
      description:
        "Completed senior secondary education with a focus on science and mathematics, laying a strong foundation for further studies in technology.",
    },
    {
      institution: "High School",
      degree: "10th Grade",
      School: "CCS",
      description:
        "Completed secondary education with distinction, developing a keen interest in science and technology.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

