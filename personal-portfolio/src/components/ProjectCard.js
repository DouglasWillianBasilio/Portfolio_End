import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url}>
          <img src={imgUrl} alt={title} />
        </a>
        <div className="proj-txtx">
          <a href={url}>
            <h4>{title}</h4>
            <span>{description}</span>
          </a>  
        </div>
      </div>
    </Col>
  )
}
