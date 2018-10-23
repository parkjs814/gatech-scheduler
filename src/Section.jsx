import React, { Component } from 'react';
import './Section.scss';
import { classes, periodToString } from './utils';
import { CLOSE, OPEN } from './constants';

class Section extends Component {
  render() {
    const { className, section, overlay, preview } = this.props;

    return (
      <div className={classes('Section', overlay && 'overlay', className)}>
        {
          section.meetings.map((meeting, i) => meeting.period && (
            meeting.days.map(day => (
              <div className={`meeting ${day}`} key={[i, day].join('-')}
                   style={{
                     top: (meeting.period.start - OPEN) / (CLOSE - OPEN) * 100 + '%',
                     height: (meeting.period.end - meeting.period.start) / (CLOSE - OPEN) * 100 + '%',
                     backgroundColor: meeting.course.color,
                   }}>
                {
                  !preview &&
                  <div className="meeting-wrapper">
                    <span className="course_id">{meeting.course.id} {meeting.section.id}</span>
                    <span className="period">{periodToString(meeting.period)}</span>
                    <span className="where">{meeting.where}</span>
                    <span className="instructors">{meeting.instructors.join(', ')}</span>
                  </div>
                }
              </div>
            ))
          ))
        }
      </div>
    );
  }
}


export default Section;
