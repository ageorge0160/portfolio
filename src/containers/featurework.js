import React from 'react';

const FeatureWork = () =>
  <div id='feature-box'>
    <div id='feature-container'>
      <h1>Feature Work</h1>
      <hr className='large-hr' />
      <div className='project row'>
        <div className='col'>
          <img src='images/blog.png' alt='blog' width='200px'/>
        </div>
        <div className='project-description col'>
          <h4>React & Rails Blog App</h4>
          <hr />
          <p>A blog app created with a React front end and Rails backend. This was my first project in react and redux and it took some time to understand the flow with redux actions and reducers.I read through redux articles and documentation and built a small site to fetch posts from Reddit to gain a better understanding of the process. I used Bootstrap to create a simple clean design for the app. The site displays posts on a single page and allows for the creation of new posts that will be saved to the Rails api.</p>
          <a href='https://github.com/ageorge0160/new-blog-client'>Github Repo</a>
        </div>
      </div>
      <div className='project row'>
        <div className='col'>
          <img src='images/blog.png' alt='blog' width='200px'/>
        </div>
        <div className='project-description col'>
          <h4>Team Building App</h4>
          <hr />
          <p>Team Building Rails is an account-based application to log and manage a collection of team building activities. A collection of activities from all users is available to view. Team building activities are organized into the 5 categories provided, but users are able to add topic tags to their activities. I did have some difficulties with the associations and nested forms with many-to-many relationships and took quite a few tries at getting them to log correctly. Working with a mentor helped to get this feature working correctly. What I did learn along the way was how to better understand the error messages and as a result feel more comfortable with debugging my programs.</p>
          <a href='https://github.com/ageorge0160/team-building-rails'>Github Repo</a>
        </div>
      </div>
    </div>
  </div>

export default FeatureWork;
