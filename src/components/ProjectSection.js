// ProjectSection.js
import React, { useState } from 'react';
import Typewriter from './Typewriter';

function ProjectSection( {title, dates, github, points, setSectionDone} ) {
  const falses = [];
  const [titleDone, setTitleDone] = useState(false);
  const [gitHubDone, setGitHubDone] = useState(github ? false : true);

  for (let i = 0; i < points.length; i++) {
    falses.push(false);
  }
  const [pointCompletions, setPointCompletions] = useState(falses);
  

  return (
    <div>
        <h3>
            {github && <a href={github} target="_blank"><Typewriter text={`View on GitHub`} delay={3} setDone={setGitHubDone} /></a>}
          {gitHubDone && <Typewriter text={`${github ? ' - ' : ''}${title} (${dates})`} delay={3} setDone={setTitleDone}/>}
        </h3>
        {titleDone && 
            <ul style={{marginLeft: '20px', marginRight: '20px'}}>
                {points.map((point, index) => {
                    return (index === 0 || pointCompletions[index-1]) && (
                        <li>
                            <Typewriter text={point} delay={3} setDone={(newVal) => {
                                const nextPointCompletions = pointCompletions.map((item, i) => {
                                    if (i === index) {
                                        if (index === points.length - 1 && newVal === true) {
                                            setSectionDone(true);
                                        }
                                        return newVal;
                                    }
                                    else {
                                        return item;
                                    }
                                })
                                setPointCompletions(nextPointCompletions);
                            }}/>
                            {/* {point} */}
                        </li>
                    )
                })}
            </ul>
        }
        <br/>
    </div>
  );
}

export default ProjectSection;
