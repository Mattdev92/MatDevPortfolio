import MainTemplate from 'templates/mainTemplate/mainTemplate';
import ProjectsContent from 'components/molecules/projectsContent/projectsContent';

const ProjectsView = ({
  ProjectMiniatures,
  ProjectsUrl,
  ProjectDescription,
  ProjectTitles,
}: {
  ProjectMiniatures: string[];
  ProjectsUrl: string[];
  ProjectDescription: string[];
  ProjectTitles: string[];
}) => (
  <MainTemplate>
    <ProjectsContent
      ProjectMiniatures={ProjectMiniatures}
      ProjectsUrl={ProjectsUrl}
      ProjectDescription={ProjectDescription}
      ProjectTitles={ProjectTitles}
    />
  </MainTemplate>
);

export default ProjectsView;
