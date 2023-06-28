import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/socio.png";
import projImg2 from "../assets/img/post.png";
import projImg3 from "../assets/img/amazon.png";
import projImg4 from "../assets/img/pizza.png";
import projImg5 from "../assets/img/crud.png";
import projImg6 from "../assets/img/port.png";
import projImg7 from "../assets/img/whatsapp.avif";
import projImg8 from "../assets/img/gossipp.png";
import projImg9 from "../assets/img/chat.jpg";
import projImg10 from "../assets/img/covidd.jpg";
import projImg11 from "../assets/img/note-takingg.jpg";
import projImg12 from "../assets/img/todo.jpg";
import projImg13 from "../assets/img/fight.jpg";
import projImg14 from "../assets/img/weap.webp";
import projImg15 from "../assets/img/url.jpeg";
import projImg16 from "../assets/img/note-web.webp";
import projImg17 from "../assets/img/pebl.jpg";
import projImg18 from "../assets/img/page.jpeg";
import projImg19 from "../assets/img/musix.avif";
import projImg20 from "../assets/img/dice.webp";
import projImg21 from "../assets/img/guga.jpeg";
import projImg22 from "../assets/img/sb.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sociopedia",
      description:
        "Sociopedia is a social media web app built using the MERN stack",
      imgUrl: projImg1,
    },
    {
      title: "Twitter Clone",
      description:
        "A Twitter clone that allows users to post tweets after logging in",
      imgUrl: projImg2,
    },
    {
      title: "Amazon Mini",
      description:
        "This project is a mini clone of Amazon built using React JS and CSS",
      imgUrl: projImg3,
    },
    {
      title: "PizzaHut",
      description:
        "Pizzeria is a pizza ordering web app built using React and React Router",
      imgUrl: projImg4,
    },
    {
      title: "ReactCurd",
      description:
        "React-based web app, users can interaction with user data through crud operations",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio",
      description:
        "This is my personal portfolio website, where I showcase my work & skills",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "WhatsApp",
      description:
        "Replicating the seamless messaging app WhatsApp using Flutter and Firebase",
      imgUrl: projImg7,
    },
    {
      title: "Gossip",
      description: "GOSSIP allows users to create and join groups for chatting",
      imgUrl: projImg8,
    },
    {
      title: "Chat-Assist",
      description:
        "Voice Assist is a voice-activated virtual assistant that generate images and answer questions",
      imgUrl: projImg9,
    },
    {
      title: "Covid Tracker",
      description:
        "A Flutter application that allows users to track COVID-19 statistics worldwide",
      imgUrl: projImg10,
    },
    {
      title: "ToDo App",
      description: "A simple ToDo list app for managing tasks",
      imgUrl: projImg11,
    },
    {
      title: "NoteTaker",
      description:
        "A simple note-taking app. It allows users to create, edit, and delete notes",
      imgUrl: projImg12,
    },
  ];

  const projects3 = [
    {
      title: "Fight Game",
      description: "A game project that allows two players to fight",
      imgUrl: projImg13,
    },
    {
      title: "Weather App",
      description:
        "The application displays the current temperature, humidity, wind speed",
      imgUrl: projImg14,
    },
    {
      title: "Url Shortener",
      description:
        "this allows users to shorten long URLs into shorter, more manageable links",
      imgUrl: projImg15,
    },
    {
      title: "Note Taker",
      description:
        "This is a simple note-taking application built using JavaScript, HTML, and CSS",
      imgUrl: projImg16,
    },
    {
      title: "Personal Blog",
      description:
        "This is my personal blog website, where I write about technology",
      imgUrl: projImg17,
    },
    {
      title: "Password Gen",
      description:
        "Generates a random password based on user-specified criteria",
      imgUrl: projImg18,
    },
    {
      title: "Music App",
      description:
        "This is a web app music app that allows users to listen to and discover new music",
      imgUrl: projImg19,
    },
    {
      title: "Dice Game",
      description:
        "Two-player game, Players take turns rolling dice to try to score of 100",
      imgUrl: projImg20,
    },
    {
      title: "Guess Game",
      description: "This project is a simple guessing game between 1 and 20",
      imgUrl: projImg21,
    },
    {
      title: "Starbucks",
      description:
        "This is a Starbucks clone project created using only HTML and CSS",
      imgUrl: projImg22,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In project section, we have three tabs. The first tab
                    features a React project, while the second tab showcases a
                    Flutter and Riverpod project. The third tab presents a
                    JavaScript project, highlighting my skills in FrontEnd and
                    BackEnd development and cross-platform mobile app
                    development.
                    <br /> Reach out to my github profile{" "}
                    <a
                      href="https://github.com/Ganeshshinde-2003?tab=repositories"
                      style={{ color: "white" }}
                    >
                      HERE
                    </a>{" "}
                    to see all the projects in detail.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
