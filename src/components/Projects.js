// Projects.js
import React, { useState } from 'react';
import ProjectSection from './ProjectSection';

function Projects() {

  const projects = [
    { title: 'This Site!', dates: 'Aug 2024', github: 'https://github.com/nicktarallo/nicktarallo.github.io', points: [
      'Created front-end website with React to display personal work experience and projects',
      'Deployed statically for resource-efficient public usage',
    ]},
    { title: 'Gold Price Prediction', dates: 'Oct - Dec 2023', github: 'https://github.com/nicktarallo/gold-prediction', points: [
      'Explored machine learning models to predict gold price action on the current day based on the last n days',
      'Added in additional data such as the CBOE Volatility Index to see if correlations could improve predictions',
      'Utilized LDA, Gaussian Naive Bayes, Logistic Regression, Decision Trees, Random Forest Classifiers, and Rolling Window Linear Regression to make predictions',
      'Evaluated models with k-fold cross validation',
      'Backtested and simulated returns based on the predictive models to find models that provided best results (the goal was to make a greater profit over a time period than simply passively holding gold all the way through)',
    ]},
    { title: 'Image Processor', dates: 'Oct - Nov 2022', github: '', points: [
      'Developed a Java program using Model, View, Controller (MVC) framework for basic image editing with Swing GUI',
      'Implemented command pattern to perform image operations such as load, save, flip, filter, and mosaic',
      'Code available upon request',
    ]},
    { title: 'Pydoku: Sudoku Puzzle Solver and Generator', dates: 'Mar - May 2022', github: 'https://github.com/nicktarallo/Pydoku', points: [
      'Developed a GUI-based application with Python + Tkinter that can solve any sudoku puzzle and generate valid easy, medium, or hard sudoku puzzles that are guaranteed to have one solution',
      'Employed a recursive backtracking depth-first search algorithm to explore all potential solutions to a given puzzle and implemented specific sudoku strategies to improve its efficiency through an incremental design process',
    ]},
    { title: 'Hydroelectric Generator for use in Gutter Systems (Published Work)', dates: 'Sep - Dec 2021', github: '', points: [
      'Studied the viability of a system to generate electricity from wasted, untapped hydro energy in gutters',
      'Designed and built prototype using engineering design process, 3D printing, laser cutting, SolidWorks, and AutoCAD',
      'Measured and recorded instantaneous and cumulative power generation with Arduino circuit and code',
      'Published findings in the proceedings for 2022 American Society for Engineering Education Annual Conference',
    ]},
    // ... other projects
  ];

  const falses = []
  for (let i = 0; i < projects.length; i++) {
    falses.push(false);
  }
  const [projectCompletions, setProjectCompletions] = useState(falses);

  return (
    <section>
      <ul>
        {projects.map((exp, index) => (
          (index === 0 || projectCompletions[index-1]) && 
          <ProjectSection {...exp} setSectionDone={(newVal) => {
            const nextProjectCompletions = projectCompletions.map((item, i) => {
              if (i === index) {
                  return newVal;
              }
              else {
                  return item;
              }
          })
          setProjectCompletions(nextProjectCompletions)}}/>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
