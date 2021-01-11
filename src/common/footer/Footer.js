import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from './Footer.module.css'

import FacebookImg from '../../assets/img/facebook.png'
import YoutubeImg from '../../assets/img/youtube.png'
import InstagramImg from '../../assets/img/instagram.png'
export default function Footer() {

    return (
        <footer className={"footer " + classes.mainFooter} style={{ backgroundColor: '#262626' }}>
            <Container>
                <Row style={{ display: 'flex' }}>
                    <Col xs="12" md="1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                       

                    </Col>
                    <Col xs="12" md="3">
                        
                        <Row>
                            <Col>
                                <pre className={classes.textDescription} style={{ color:'black' }}>
                                </pre>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                    <Col xs="12" md="3">
                        <Row style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                            <Col style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={InstagramImg} height="50px" alt="" style={{ cursor: 'pointer' }} />
                            </Col>
                            <Col style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={FacebookImg}  height="60px" alt="" style={{ cursor: 'pointer' }} />
                            </Col>
                            <Col style={{ padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={YoutubeImg} height="50px" alt="" style={{ cursor: 'pointer' }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <p style={{ color:'white' }} className={classes.textDescription}>
                            <strong>Email:</strong> AmaraMootaz11@gmail.com
                        </p>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <p style={{ color: 'white' }} className={classes.textDescription}>
                            <strong>
                            </strong>+216 28896426

                        </p>
                    </Col>
                   
                </Row>
            </Container>
        </footer>
    );
}
