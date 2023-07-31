import React from 'react'

function Education() {
  const education = [
    {
      school: 'Ivy Tech',
      degree: 'certification',
      major: 'Entrepreneurship',
    },
    {
      school: 'Indiana University Purdue University Indianapolis',
      major: 'Informatics',
    },
  ]
  return (
    <div id="education" className="h-screen">
      {/* Insert Education Here */}
      <div className="flex">Education Component</div>
    </div>
  )
}

export default Education
