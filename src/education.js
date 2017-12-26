import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AUEB from './aueb.png';
import AIT from './ait.gif';
import EPP from './epp.png';

const style = {
  height: 250,
  width: '75%',
  marginLeft: '15%',
  marginTop: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const Education = () => (
  <article>
    <div className="eduexpWrapper">
      <div className="innerWrapper">
        <h1 className="sectionHeading">Education</h1>
        <MuiThemeProvider>
          <div>
            <Paper style={style} zDepth={5}>
              <div className="educationLeft">
                <img alt="AUEB logo" src={AUEB} />
              </div>
              <div className="educationRight">
                <h4 className="date">09/2016 - 06/2018</h4>
                <h4 className="date">MSc in Information Systems</h4>
                <ul className="info">
                  <li>Conceptual Modeling of Information Systems</li>
                  <li>Computer Networks</li>
                  <li>Information Security and Infrastructure Protection Management</li>
                  <li>Methods of Software Development & Systems Architectures</li>
                  <li>Business Management</li>
                  <li>Large Scale Data Management</li>
                  <li>Information Systems Security Audit</li>
                  <li>Cryptography</li>
                  <li>General Data Protection Regulation (GDPR)</li>
                </ul>
              </div>
            </Paper>
            <Paper style={style} zDepth={5}>
              <div className="educationLeft">
                <img alt="AIT logo" src={AIT} />
              </div>
              <div className="educationRight">
                <h4 className="date">01/2014 - 06/2014</h4>
                <h4 className="date">Web Applications Diploma</h4>
                <ul className="info">
                  <li>HTML5, CSS3, Bootstrap.</li>
                  <li>Javascript, jQuery.</li>
                  <li>PHP, Internet Security.</li>
                  <li>MVC Architecture, Symfony, Drupal.</li>
                </ul>
              </div>
            </Paper>
            <Paper style={style} zDepth={5}>
              <div className="educationLeft">
                <img alt="EPP logo" src={EPP} />
              </div>
              <div className="educationRight">
                <h4 className="date">09/2013 - 02/2010</h4>
                <h4 className="date">BSc in Applied Informatics & Multimedia</h4>
                <p className="info">
                Covered the fields of IT, Communications and Multimedia,
                all of crucial importance to the emerging Information Society.
                </p>
                <p>
                Thesis subject: Survey the field of electronic payments.
                Deep analysis of e-business adoption, presenting data of the main business models
                and electronic payment systems,
                with an emphasis on security of electronic transactions.
                </p>
              </div>
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    </div>
  </article>
);

export default Education;
