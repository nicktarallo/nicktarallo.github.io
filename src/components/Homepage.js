// Homepage.js
import React, { useState } from 'react';
import Typewriter from './Typewriter';

function Homepage() {
  const homepageText = "Welcome to my site. I am a fourth-year Computer Engineering and Computer Science student at Northeastern University, and I have a passion for all things programming. I worked on production-scale web and database systems at the Baltimore Orioles and Johnson & Johnson. My initial love for software started with my experiences in FIRST Robotics. Use the links to view my work experience and projects."

  const contextText = "My main language experience lies in Python, JavaScript, Java, C, C++, SQL, and Racket (Scheme). Frameworks and services that I am knowledgeable in include Django, React, AWS (Lambda, SQS, S3), Azure Databricks, Swing, and more."

  const [firstPDone, setFirstPDone] = useState(false);
  return (
    <section>
      <p><Typewriter text={homepageText} delay={3} setDone={setFirstPDone}/></p>
      {firstPDone && <p><Typewriter text={contextText} delay={3} setDone={() => {}}/></p>}
    </section>
  );
}

export default Homepage;
