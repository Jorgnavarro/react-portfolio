import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="card po_item" style={{width: "18rem"}}>
                <img src={data.img} id="imgCard" className="card-img-top" alt="..." />
                <div className="card-body containerDescription">
                  <h5 className="card-title">
                    <a id="linkTitle" target="_blank" rel="noreferrer" href={data.link}>
                      {data.title}
                    </a> 
                    </h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{data.role}</h6>
                  <p id="descriptionText" className="card-text">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
