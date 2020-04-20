import React, { useState } from "react";

import SplitPane from 'react-split-pane';
import { Tab, Tabs } from 'react-bootstrap-tabs';
import {
    Container,
    Row,
    Col,
    Button
} from './../../components';
import TextDragDrop from './components/TextDragDrop';

<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossOrigin="anonymous"
/>

import './../../styles/view-edit.scss';

const ViewEdit = () => {
    const [open, setOpen] = useState(false);
    const [story, setStory] = useState();
    const [text, setText] = useState();

    async function load() {
        if (story == null) {
            await fetch(`/api/stories/get?page=0`)
                .then(response => response.json())
                .then(data => {
                    setStory(data[0]);
                    setText(data[0]["story texts"].split(";"));
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
                <div id="height-adjustment">
                    <div className="header">
                        <div className="flex-display">
                            <a onClick={() => setOpen(false)} id="tick" className="x">x</a>
                        </div>
                        <div className="flex-display">
                            <h2 id="title">{story.id}: {story.title}</h2>
                        </div>
                    </div>
                    <Tabs variant="pills" className="nav-justified">
                        <Tab eventKey="details" label="Story Details">
                            <Container className="top-margin">
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
                                        <b>Story Text:</b> <br />
                                        <TextDragDrop className="no-padding" text={text} setText={setText}/>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="publication" label="Publication">
                            <Container className="top-margin">
                                    <Row>
                                        <Col>
                                            <button className="pub-button">Approve</button>
                                        </Col>
                                        <Col>
                                            <button className="pub-button">Reject</button>
                                        </Col>
                                    </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="writer" label="Writer">
                            <Container className="top-margin">
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