import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import projectWeb1 from "../assets/img/real-estate1.png";
import projectWeb2 from "../assets/img/solidity.png";
import projectWeb3 from "../assets/img/sidgpt.png";
import projectWeb4 from "../assets/img/bike-rental.png";
import projectWeb5 from "../assets/img/car-transport.png";
import projectWeb6 from "../assets/img/phishdetector.png";

import projectMob1 from "../assets/img/suggest-ai.jpeg";
import projectMob2 from "../assets/img/daily-routine.jpg";

import projectOther1 from "../assets/img/discord.png";
import projectOther2 from "../assets/img/CryptoWallet.png";
import projectOther3 from "../assets/img/voiceassistant.jpg";
import projectOther4 from "../assets/img/climate.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsWeb = [
    {
      title: "Real Estate - 1",
      description: "E-Commerce",
      imgUrl: projectWeb1,
      link: "https://real-estate-locofy-siddarthan999.vercel.app/",
    },
    {
      title: "Real Estate - 2",
      description: "Purchase, Lend and Sell Properties using CryptoCurrency",
      imgUrl: projectWeb2,
      link: "https://real-estate-app-solidity.vercel.app/",
    },
    {
      title: "Phishing Link Detector",
      description: "Machine Learning Algorithms",
      imgUrl: projectWeb6,
      link: "https://github.com/Siddarthan999/PhishDetector.git",
    },
    {
      title: "SidGPT",
      description: "ChatGPT Clone",
      imgUrl: projectWeb3,
      link: "https://sid-gpt-a-chat-gpt-clone.vercel.app/",
    },
    {
      title: "Bike Rental",
      description: "UI/UX Design - Figma",
      imgUrl: projectWeb4,
      link: "https://www.figma.com/file/lTkMnESzqMGPSds6uzyQ41/Bike-Retail?type=design&node-id=0%3A1&mode=design&t=c7s1WWd9unA6IkXy-1",
    },
    {
      title: "Car Transport",
      description: "UI/UX Design - Figma",
      imgUrl: projectWeb5,
      link: "https://www.figma.com/file/YOGqF9lUWGpXIZkinJ8RkG/CAR-TRANSPORT?type=design&node-id=1%3A37&mode=design&t=836GzGNEfnOFmj47-1",
    }, 
  ];

  const projectsMobile = [
    {
      title: "Suggest AI",
      description: "Mobile Development",
      imgUrl: projectMob1,
      link: "https://suggestai-z5ih.glide.page/",
    },
    {
      title: "Daily Routine",
      description: "Mobile Development",
      imgUrl: projectMob2,
      link: "https://routine-siddarthan.glideapp.io/",
    },
  ];

  const projectsOther = [
    {
      title: "Discord Bot",
      description: "Intelligent and Iteractive Bot",
      imgUrl: projectOther1,
      link: "https://discord.com/api/oauth2/authorize?client_id=1133393926489899089&permissions=21434035338304&scope=bot",
    },
    {
      title: "Voice Assistant",
      description: "Powered by ChatGPT and Google Voice Assistant to Assist you",
      imgUrl: projectOther3,
      link: "https://github.com/Siddarthan999/Voice-Assistant.git",
    },
    {
      title: "Climate Prediction",
      description: "Data Cleaning and Model Training",
      imgUrl: projectOther4,
      link: "https://github.com/Siddarthan999/DS-MINI-PROJECT",
    },
    {
      title: "Sidd Crypto Wallet",
      description: "A Secure Crypto Transfer Extension",
      imgUrl: projectOther2,
      link: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A Computer Science enthusiast with a keen interest in UI/UX designing and Prototyping. I find joy in creating intuitive and visually appealing interfaces that enhance user experiences. Additionally, I'm enthusiastic about full-stack development, where I can combine my creative design skills with my technical expertise to build comprehensive and innovative solutions for impactful projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Apps/Designs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsWeb.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsMobile.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsOther.map((project, index) => {
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
