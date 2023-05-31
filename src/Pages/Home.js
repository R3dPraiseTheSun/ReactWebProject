import React, { useState, useEffect } from 'react';

function GithubRepos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/data") // Make a GET request to the Python server endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);


  const circularImage = {
    width: '200px',
    borderRadius: '50%',
    border: '4px solid #333',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  }
  return (
    <div>
      {data ? (
        <div className="github-container">
          <div className='profile-picture'>
            <a href="https://github.com/R3dPraiseTheSun"><img src={data.image} style={circularImage} /></a>
            <h3>R3dPraiseTheSun's Public Repo</h3>
          </div>
          <div className='projects-container'>
            <ul>
              {data.repos.map((repo, index) => (
                <li key={index}>
                  <div className='repo-container'>
                    <h2><a href={`https://github.com/R3dPraiseTheSun/${repo.title}`}>{repo.title}</a></h2>
                    <p><b>Project description:</b> {repo.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const Home = () => {

  return (
    <div className="homepage" style={{height:'100%'}}>
      <h1>Lates Github Activity</h1>
      {GithubRepos()}
    </div>
  );
};

export default Home;