import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/5.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/1.png";
import projImg4 from "../assets/img/6.png";
import projImg5 from "../assets/img/7.png";
import projImg6 from "../assets/img/10.png";




import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: " AFRICA URBAN FORUM  ",
      description: "check https://auf.gov.et",
      imgUrl: projImg2,
    },
    {
      title: "Sirkuni App Landing Page",
      description: "check https://appstore.et",
      imgUrl: projImg5,
    },
    {
      title: "Fast Time Express",
      description: "check http://busmanagement.fasttimeexpress.net",
      imgUrl: projImg3,
    },
    {
      title: "DMU OSC",
      description: "One Card System for DMU",
      imgUrl: projImg1,
    },
    {
      title: "NZk System",
      description: "Fule Mangmetion System for INSA",
      imgUrl: projImg4,
    },
    {
      title: "Ethio-Addis Idea",
      description: "Transforming Ideas into Business Success! ",
      imgUrl: projImg6,
    },
  ];

  return (    
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on a diverse range of projects across multiple organizations, collaborating with cross-functional teams to deliver tailored solutions that meet specific business needs. My experience includes developing web and mobile applications, integrating APIs, and implementing user-centric designs, all while applying best practices in software development. This exposure has enhanced my adaptability and problem-solving skills, allowing me to effectively contribute to the success of each project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section"> 
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
   <p>"Thank you for taking the time to review my portfolio. I appreciate your interest in my work and hope that you found it both engaging and informative. If you have any questions or require further information, please do not hesitate to reach out. I look forward to the possibility of collaborating in the future."

</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
