import React from 'react';
import { Link } from 'react-router-dom';
import pluginId from '../../pluginId';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p> */}
      <div className="center-align">
        <Link to="/your-link-path" className="link-button">
          Go to Link
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
