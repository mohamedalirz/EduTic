import React, { Component } from "react";

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {}, // Initially an empty object
    };
  }

  componentDidMount() {
    fetch("/data/courses.json")
      .then((response) => {
        console.log("Response Status:", response.status); // Debug status
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); // Debug JSON data
        this.setState({ courses: data });
      })
      .catch((error) => console.error("Error loading courses:", error));
  }

  render() {
    const { courses } = this.state;
    const { user } = this.props; // Get user from props

    return (
      <div className="container">
        {courses[user.classe] ? (
          <>
            <h3>Courses for {user.classe.toUpperCase()}</h3>
            <div className="course-cards">
              {courses[user.classe].map((course, index) => (
                <div key={index} className="card">
                  <header className="card-header">
                    <p>{course.year}</p>
                    <span className="title">{course.title}</span>
                  </header>
                  <div className="card-author">
                    <a className="author-avatar" href="/"><span></span></a>
                    <svg className="half-circle" viewBox="0 0 106 57">
                      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className="author-name">
                      <div className="author-name-prefix">Prof</div> {course.professor}
                    </div>
                  </div>
                  <div className="tags">
                    {course.tags.map((tag, i) => (
                      <a key={i} href="#">{tag}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No courses available for this level.</p>
        )}
      </div>
    );
  }
}
