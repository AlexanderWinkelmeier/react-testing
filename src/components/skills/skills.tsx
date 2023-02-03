import { SkillsProps } from './skills.types';

export const Skills = (props: SkillsProps): JSX.Element => {
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
