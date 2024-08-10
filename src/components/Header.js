// Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from './Typewriter';

function Header({ setDone }) {
  const [nameDone, setNameDone] = useState(false);
  const [linkedInDone, setLinkedInDone] = useState(false);
  const [gitHubDone, setGitHubDone] = useState(false);
  const [homeDone, setHomeDone] = useState(false);
  const [experienceDone, setExperienceDone] = useState(false);
  const location = useLocation().pathname;
  const activeColorStyle = {color: 'red'};

  return (
    <header>
      <h1 id="name">
        <Typewriter text="Nick Tarallo - " delay={90} setDone={setNameDone}/> 
        {" "}
        {nameDone && <a href='https://www.linkedin.com/in/nicholas-tarallo/' target='_blank'><Typewriter text="LinkedIn" delay={90} setDone={setLinkedInDone}/></a>}
        {" "}
        {linkedInDone && <a href='https://github.com/nicktarallo' target='_blank'><Typewriter text="GitHub" delay={90} setDone={setGitHubDone}/></a>}
      </h1>
      <nav>
        {(gitHubDone ? <Link to="/" style={(location === '/' ? activeColorStyle : {})}>
          <Typewriter text="Homepage" delay={90} setDone={setHomeDone}/>
        </Link> : <br/>)}
        {(homeDone && <Link to="/experience" style={(location === '/experience' ? activeColorStyle : {})}>
          <Typewriter text="Experience" delay={90} setDone={setExperienceDone}/>
        </Link>)}
        {(experienceDone && <Link to="/projects" style={(location === '/projects' ? activeColorStyle : {})}>
          <Typewriter text="Projects" delay={90} setDone={setDone}/>
        </Link>)}
      </nav>
    </header>
  );
}

export default Header;
