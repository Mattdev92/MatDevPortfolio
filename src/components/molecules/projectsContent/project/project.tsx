import { FC, useState } from 'react';
import {
  ProjectWrapper,
  StyledProject,
  CoverWrapper,
  StyledLink,
  ContentWrapper,
} from './project.styles';
import { ProjectProps } from './project.types';
import Button from 'components/atoms/button/button';
import { MainWrapper } from './project.styles';

const Project: FC<ProjectProps> = ({
  refProject,
  image,
  content,
  link,
  title,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <MainWrapper
      onClick={(e) => {
        e.stopPropagation();
        setShowDescription(!showDescription);
      }}
    >
      <h1>{title}</h1>
      <ProjectWrapper
        ref={refProject}
        onMouseLeave={(e) => {
          if (window.innerWidth > 580) {
            e.stopPropagation();
            setShowDescription(false);
          }
        }}
      >
        <StyledProject src={image} />
        <CoverWrapper
          onMouseOver={() => {
            if (window.innerWidth > 580) {
              setShowDescription(true);
            }
          }}
          onClick={() => setShowDescription(true)}
        />
        <ContentWrapper show={showDescription}>
          <h2>{title}</h2>
          {showDescription && content}
          <StyledLink href={link}>
            <Button content="GITHUB" />
          </StyledLink>
        </ContentWrapper>
      </ProjectWrapper>
    </MainWrapper>
  );
};

export default Project;
