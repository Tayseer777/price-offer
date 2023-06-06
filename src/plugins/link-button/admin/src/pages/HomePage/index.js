import React from 'react';
import { Link } from 'react-router-dom';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      <Link to="/your-link-path">
        <button>Go to Link</button>
      </Link>
    </div>
  );
};

export default HomePage;
