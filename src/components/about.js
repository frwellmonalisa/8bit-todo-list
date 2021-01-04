import React from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"

export const About = () => {
  return (
    <div className="nes-container with-title" style={{ margin: "1rem 0" }}>
      <p className="title">Эбаут</p>
      <Row>
        <Col md={6}>
          <ul className="nes-list is-disc">
            <li>
              Сделано с помощью{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                React
              </a>
            </li>
            <li>
              Стилизовано с помощью{" "}
              <a
                href="https://nostalgic-css.github.io/NES.css/"
                target="_blank"
                rel="noreferrer noopener"
              >
                NES.css
              </a>
            </li>
            <li>
              Разработано{" "}
              <a
                href="https://frwellmonalisa.github.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                frwellmonalisa
              </a>
            </li>
            <li>
              Код на{" "}
              <a
                href="https://github.com/frwellmonalisa/8bit-todo-list"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center "
        >
          <i className="nes-octocat animate"></i>
        </Col>
      </Row>
    </div>
  )
}
