import React from 'react';
import ProjectCarousel from './ProjectCarousel.js';
import ProjectDetail from './ProjectDetail.js';

export default class ProjectMain extends React.Component {

    render() {
        return (
            <div className="projectMain">
                <ProjectCarousel />
                <ProjectDetail />
            </div>
        );
    }
}
