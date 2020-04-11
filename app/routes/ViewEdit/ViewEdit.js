import React, { useState } from "react";

import SplitPane from 'react-split-pane';
import { Tab, Tabs } from 'react-bootstrap-tabs';

import {
    Container,
    Row,
    Col,
    Button
} from './../../components';

<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossOrigin="anonymous"
/>

import './style/style.css';

const ViewEdit = () => {
    const [open, setOpen] = useState(false);
    const [story, setStory] = useState();

    async function load() {
        if (story == null) {
            await fetch(`/api/stories/get?page=0`)
                .then(response => response.json())
                .then(data => {
                    setStory(data[0]);
                })
                .catch(err => { console.log(err); })
        }
        setOpen(true);
    }

    let content;
    if (!open) {
        content = <Button onClick={() => load()}>Open Edit Pane</Button>
    } else {
        content =
            <SplitPane split="vertical">
                <div>Story list view!</div>
                <div>
                    <div className="header">
                        <h2>{story.id}: {story.title}</h2>
                        <button onClick={() => setOpen(false)} className="x">x</button> {/* Need help getting this CSS to work*/}
                    </div>
                    <Tabs variant="pills" className="nav-justified">
                        <Tab eventKey="details" label="Story Details">
                            <Container>
                                <Row>
                                    <Col>
                                        <b>Status:</b> <br /> <p>TODO</p>
                                    </Col>
                                    <Col>
                                        <b>Date Submitted:</b> <br /> {story.createdAt.substring(0, 10)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Prompt:</b> <br /> <p>TODO</p>
                                    </Col>
                                    <Col>
                                        <b>Topic:</b> <br /> {story.topic}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Story Text: (to be converted to drag and drop)</b> <br />
                                        {story["story texts"].split(";").map((text, i) => {
                                            return <p key={i}>{text}</p>
                                        })}
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="publication" label="Publication">

                        </Tab>
                        <Tab eventKey="writer" label="Writer">
                            <Container>
                                <Row>
                                    <Col>
                                        <b>Gender:</b> <br /> {story.perspective}
                                    </Col>
                                    <Col>
                                        <b>Age:</b> <br /> {story.age}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>LGTBQ Status:</b> <br /> {story.lgbtq}
                                    </Col>
                                    <Col>
                                        <b>Race:</b> <br /> {story.race}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Phone Number:</b> <br /> {story.phone}
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div>
            </SplitPane>
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default ViewEdit;