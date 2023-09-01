import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { useTranslation } from "react-i18next";

function Home() {
  const { t,i18n} = useTranslation();

  return (
    // i18n translations might still be loaded by the http backend
    // use react's Suspense
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <h1>{t('testmsg')}</h1>

            <Col md={2}><div className="circle"></div></Col>
            <Col md={7}>
              <Row>
                <Col>  <h1 className="heading">{t('selfIntroduction')}</h1>
  
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                我是
                <strong className="main-name"> 徐沛駿</strong>
                是一名插畫家
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
