import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import projImg5 from "../assets/img/project-img5.png"
import projImg6 from "../assets/img/project-img6.png"
import projImg7 from "../assets/img/project-img7.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "HomeFlix",
      url: "https://flixhome.netlify.app/",
      description: "Aplicação para assistir filmes",
      imgUrl: projImg1,
    },
    {
      title: "Controle Salário",
      url: "https://seu-salario.netlify.app/",
      description: "Aplicação para controlar o salário",
      imgUrl: projImg2,
    },
    {
      title: "Pizza Battle",
      url: "https://pizzabattle.netlify.app/",
      description: "Projeto de um jogo feito para a faculdade",
      imgUrl: projImg3,
    },
    {
      title: "Gym WebSite",
      url: "https://web-gym-site.netlify.app/",
      description: "WebSite para academias",
      imgUrl: projImg4,
    },{
      title: "Formulario para Email",
      url: "https://email-form-orpin.vercel.app/",
      description: "Aplicação para Envio de Emails",
      imgUrl: projImg5,
    },
    {
      title: "Validação de Cadastro",
      url: "https://validando-cadastro.netlify.app/pages/abrir-conta-form.html",
      description: "Aplicação para validar cadastro",
      imgUrl: projImg6,
    }

  ];

  const projectsSecond = [
    {
      title: "Kimetsu no Yaiba",
      url: "https://kimetsu-no-yaiba2023.netlify.app/index.html",
      description: "Site para Assistir Kimetsu no Yaiba",
      imgUrl: projImg7,
    }
    
    // Add more projects as needed
  ];
  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                
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

                    <Tab.Pane eventKey="second">
                    <Row>
                      {projectsSecond.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      
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
