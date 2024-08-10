// Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from './Typewriter';

function Header({ setDone }) {
  const [nameDone, setNameDone] = useState(false);
  const [homeDone, setHomeDone] = useState(false);
  const [experienceDone, setExperienceDone] = useState(false);
  const location = useLocation().pathname;
  const activeColorStyle = {color: 'red'};

  return (
    <header>
      <h1 id="name"><Typewriter text="Nick Tarallo" delay={100} setDone={setNameDone}/></h1>
      {/* <br/> */}
      <nav>
        {(nameDone ? <Link to="/" style={(location === '/' ? activeColorStyle : {})}>
          <Typewriter text="Homepage" delay={100} setDone={setHomeDone}/>
        </Link> : <br/>)}
        {(homeDone && <Link to="/experience" style={(location === '/experience' ? activeColorStyle : {})}>
          <Typewriter text="Experience" delay={100} setDone={setExperienceDone}/>
        </Link>)}
        {(experienceDone && <Link to="/projects" style={(location === '/projects' ? activeColorStyle : {})}>
          <Typewriter text="Projects" delay={100} setDone={setDone}/>
        </Link>)}
      </nav>
    </header>
  );
}

export default Header;
