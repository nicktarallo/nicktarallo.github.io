// Experience.js
import React, { useState } from 'react';
import ExperienceSection from './ExperienceSection';

function Experience() {

  const experiences = [
    { company: 'Baltimore Orioles', role: 'Software Developer Co-op', dates: 'Jan - Aug 2024', points: [
      'Utilized Django and React to contribute to a full-stack web application used by the Orioles front office, coaches, and players',
      'Created 3 brand new dashboards used by pitching staff, strength and conditioning staff, and analytics department',
      'Accessed and manipulated data with SQL, AWS S3, NumPy, and Pandas',
      'Deployed 4 serverless data processors with AWS Lambda, triggered via AWS SQS or cron to generate data about player performance over each game or day to support web dashboards and baseball analyst needs'
    ]},
    { company: 'Khoury College of Computer Sciences', role: 'Undergraduate Teaching Assistant', dates: 'Sep 2022 - Dec 2023', points: [
      'Taught students fundamental concepts of computer science in Racket and Java including object-oriented principles, non-primitive data structures, and algorithms to operate on such data structures',
      'Evaluated and debugged code written by others, and graded students’ work according to good-practice software design principles',
      'Oversaw and directed lab session of ~30 students for enrichment of students’ learning and provided assistance when necessary',
    ]},
    { company: 'Johnson & Johnson', role: 'Data Management & Engineering Co-op', dates: 'Jan 2023 - July 2023', points: [
      "Managed communication with owners of 200+ different source systems storing data in central Azure Databricks repository, the largest single datalake in J&J Supply Chain",
      "Supported ingestion of new source systems by coordinating access of the systems",
      "Automated tasks such as intake request management and AD Group tracking using Python and Power Automate, receiving Six Sigma Yellow Belt as certification",
      "Developed comprehensive source of truth for technical and privacy information for supply chain data with Confluence",

    ]},
    { company: 'Mount Olive Robotics Team', role: 'Programming Subteam Lead', dates: 'Sep 2017 - May 2021', points: [
      "Engineered and deployed Java code to robots that allowed for functionality such as controls, vision targeting, and automatic path-following using algorithms, such as PID, for use in FIRST Robotics Competition",
      "Communicated with members from other subteams to ensure functional code with the specifications of the robot",
      "Managed, distributed tasks to, and trained 11 members of programming team and managed codebase with Git and GitLab",
    ]},
    
    

    // ... other experiences
  ];

  const falses = []
  for (let i = 0; i < experiences.length; i++) {
    falses.push(false);
  }
  const [expCompletions, setExpCompletions] = useState(falses);

  return (
    <section>
      <ul>
        {experiences.map((exp, index) => (
          (index === 0 || expCompletions[index-1]) && 
          <ExperienceSection {...exp} setSectionDone={(newVal) => {
            const nextExpCompletions = expCompletions.map((item, i) => {
              if (i === index) {
                  return newVal;
              }
              else {
                  return item;
              }
          })
          setExpCompletions(nextExpCompletions)}}/>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
