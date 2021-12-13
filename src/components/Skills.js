import React, { Component } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var s = React.createElement(
        Radar,
        {data: this.props.sharedSkills, 
          config : {
            options: {
              animations: {
                tension: {
                  duration: 1000,
                  easing: 'easeInCubic',
                  from: 1,
                  to: 0,
                  loop: true
                }
              }
        }
      }}
      );
    }
      
/*       var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              <span class="iconify" data-icon={skills.data_icon} style={skills.style} data-width="50" data-height="50"></span>
                <i>
                  
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      }); */
    

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center" >
            <ul>
              <li className="list-inline chart" >
                {s}
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
    }
}

export default Skills;
