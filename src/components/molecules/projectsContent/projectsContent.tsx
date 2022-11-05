import React, { useRef, useEffect } from 'react';
import { ContentWrapper } from './projectsContent.styles';
import gsap from 'gsap';
import { Power0 } from 'gsap/all';
import Project from './project/project';

const ProjectsContent = ({
  ProjectMiniatures,
  ProjectsUrl,
  ProjectDescription,
  ProjectTitles,
}: {
  ProjectMiniatures: string[];
  ProjectsUrl: string[];
  ProjectDescription: string[];
  ProjectTitles: string[];
}) => {
  const refTab = useRef<React.RefObject<any>[]>(
    Array.from(ProjectMiniatures, () => React.createRef())
  );
  useEffect(() => {
    const skillsTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    ProjectMiniatures.map((_: any, i: number) =>
      skillsTimeline.from(refTab.current[i].current, {
        opacity: 0,
        x: 0,
        y: 10,
        ease: Power0.easeOut,
        duration: 0.2,
        delay: 0.3,
      })
    );
    skillsTimeline.play();
  }, [refTab, ProjectMiniatures]);

  return (
    <ContentWrapper>
      {ProjectMiniatures.map((item, i) => (
        <Project
          refProject={refTab.current[i]}
          key={item}
          image={item}
          content={ProjectDescription[i]}
          link={ProjectsUrl[i]}
          title={ProjectTitles[i]}
        />
      ))}
    </ContentWrapper>
  );
};

export default ProjectsContent;
