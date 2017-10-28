import React from 'react';

const FeatureWork = () =>
  <div id='feature-box'>
    <div id='feature-container'>
      <h1>Feature Work</h1>
      <hr className='small-hr' />
      <div className='project row'>
        <div className='col'>
          <img src='images/blog.png' alt='blog' width='200px'/>
        </div>
        <div className='project-description col'>
          <h4>React & Rails Blog App</h4>
          <hr />
          <p>A blog app created with a React front end and Rails backend. This was my first project in react and redux and it took some time to understand the flow with redux actions and reducers.I read through redux articles and documentation and built a small site to fetch posts from Reddit to gain a better understanding of the process. I used Bootstrap to create a simple clean design for the app. The site displays posts on a single page and allows for the creation of new posts that will be saved to the Rails api.</p>
        </div>
      </div>
      
    </div>
  </div>

export default FeatureWork;
