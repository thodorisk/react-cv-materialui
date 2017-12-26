import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

const Skills = () => (
  <article>
    <div className="skillsWrapper">
      <div className="innerWrapper">
        <h1 className="sectionHeading">Skills (Technical & Soft)</h1>
        <MuiThemeProvider>
          <div className="progress-bars">
            <h4>HTML5</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={95} style={{ width: '75%' }} />
            <h4>CSS3 (SASS, Bootstrap, Flexbox, Material UI)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={90} style={{ width: '75%' }} />
            <h4>Javacript (Vanilla, jQuery, KnockoutJS, React)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={88} style={{ width: '75%' }} />
            <h4>Javascript Unit Testing (Karma, Mocha, Sinon, Chai)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={86} style={{ width: '75%' }} />
            <h4>Web Accessibility (WCAG 2.0, VoiceOver, NVDA, TalkBack)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={90} style={{ width: '75%' }} />
            <h4>Task Runners (GulpJS, GruntJS, Webpack)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={90} style={{ width: '75%' }} />
            <h4>Team, goal & high achievement orientation</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={98} style={{ width: '75%' }} />
            <h4>High-level communication ability</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={97} style={{ width: '75%' }} />
            <h4>Agile Methodologies (Scrum/Kanban)</h4>
            <LinearProgress mode="determinate" color="#64FFDA" value={99} style={{ width: '75%' }} />
          </div>
        </MuiThemeProvider>
      </div>
    </div>
  </article>
);

export default Skills;
