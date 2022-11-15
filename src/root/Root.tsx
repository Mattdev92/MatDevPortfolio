import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'assets/globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/globalStyles/theme';
import MainView from 'views/mainView/mainView';
import AboutView from 'views/aboutView/aboutView';
import SkillsView from 'views/skillsView/skillsView';
import ContactView from 'views/contactView/contactView';
import CvView from 'views/cvView/cvView';
import AppContext from 'context';
import ProjectsView from 'views/projectsView/projectsView';

import {
  ProjectMiniatures,
  ProjectsUrl,
  ProjectDescription,
  ProjectTitles,
} from '../helpers/helpers';

const Root: FC = () => {
  const [store, setStore] = useState({
    mobileNav: false,
    actualScreenWidth: window.innerWidth,
  });

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  useEffect(() => {
    const resizeListener = () => {
      setStore((prev) => {
        return { mobileNav: prev.mobileNav, actualScreenWidth: getWidth() };
      });
    };
    window.addEventListener('resize', resizeListener);
  }, []);
  return (
    <AppContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route
              path="/projects"
              element={
                <ProjectsView
                  ProjectMiniatures={ProjectMiniatures}
                  ProjectsUrl={ProjectsUrl}
                  ProjectDescription={ProjectDescription}
                  ProjectTitles={ProjectTitles}
                />
              }
            />
            <Route path="/skills" element={<SkillsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/CV" element={<CvView />} />
            <Route
              path="/completed"
              element={
                <ProjectsView
                  ProjectMiniatures={ProjectMiniatures}
                  ProjectsUrl={ProjectsUrl}
                  ProjectDescription={ProjectDescription}
                  ProjectTitles={ProjectTitles}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default Root;
