import { FC, useEffect, useState } from 'react';
import { SkillsType } from './skills.types';

const Skills: FC<SkillsType> = (props: SkillsType) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  return (
    <>
      <ul>
        {skills.map(skill => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
