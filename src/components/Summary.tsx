import { Loader } from '@mantine/core'
import ivyTech from '/Ivy-tech.png'
import iupui from '/iupui.png'
function Summary() {
  const education = [
    {
      school: 'Ivy Tech',
      degree: 'Certification',
      major: 'Entrepreneurship',
      image: ivyTech,
      year: 'Spring 2022',
      deansList: true,
    },
    {
      school: 'Ivy Tech',
      degree: 'Classes',
      major: 'Computer Science',
      image: ivyTech,
      year: 'Summer 2022',
    },
    {
      school: 'Indiana University Purdue University Indianapolis',
      major: 'Informatics',
      degree: 'Bachelors',
      year: 'Spring 2024',
      image: iupui,
      gpa: '3.893',
      inProgress: true,
      deansList: true,
    },
  ]
  return (
    <div id="summary" className="min-h-screen bg-slate-900 text-white p-12">
      {/* Insert Education Here */}
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl mt-12">Summary</h2>

        <div className="flex flex-col">
          <h3 className="text-2xl">Education</h3>
          <div className="w-full flex justify-evenly md:flex-row flex-col gap-6 mt-12 items-center">
            {education.map((school) => (
              <div className="flex flex-col gap-2 w-64 rounded-xl shadow-lg bg-white text-black p-4 ring-slate-300">
                <h4 className="text-lg underline h-12">{school.school}</h4>
                <div className="h-6">
                  {school.deansList && (
                    <p className="text-xs text-slate-400">Deans List</p>
                  )}
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col">
                    <span className="font-bold">{school.degree}</span>
                    <p className="text-xs">{school.major}</p>
                  </div>
                  <div className="w-24 h-24 mx-auto">
                    {school.image && (
                      <img
                        src={school.image}
                        alt={school.school}
                        className="cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center h-full flex-col">
                  <p className="text-xs text-slate-400">
                    {school.year} {school.gpa && `| ${school.gpa}`}
                  </p>
                  <p className="text-slate-400 ">{school.year}</p>
                </div>
                {school.inProgress && (
                  <div className="flex items-center gap-2 justify-center">
                    <Loader />
                    <div className="">
                      <p>In Progress </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
