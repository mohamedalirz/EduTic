import react from "react";

export class Footer extends react.Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <>
          <footer>
            <div class="footer-content">
              <div class="footer-section">
                  <h3>About Us</h3>
                  <p>Informatics Study Hub is an online platform designed to provide accessible learning resources for aspiring programmers, developers, and tech enthusiasts. Our mission is to simplify complex topics and provide an engaging learning experience.</p>
              </div>
              <div class="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Courses</a></li>
                      <li><a href="#">Forum</a></li>
                      <li><a href="#">Dashboard</a></li>
                  </ul>
              </div>
              <div class="footer-section">
                  <h3>Contact</h3>
                  <p>Email: <a href="mailto:contact@studyhub.com">contact@studyhub.com</a></p>
                  <p>Phone: +123 456 7890</p>
              </div>
            </div>
            <div>
                <p>&copy; 2025 Informatics Study Hub. All rights reserved.</p>
            </div>
          </footer>
        </>
      )
    }
  }