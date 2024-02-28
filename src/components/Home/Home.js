import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    // i18n translations might still be loaded by the http backend
    // use react's Suspense
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>


            <Col md={2}><div className="circle"></div></Col>
            <Col md={7}>
              <Row>

              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                謝謝點進網站的您<br></br>

                兩年半前，我做了一個<b className="purple">大膽</b>決定，我想要做<br></br>Art related的工作。自那天以來，我為自己制定了學習計畫並Step by Step <b className="purple">每天實行</b>，即使是假日也不例外。
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
