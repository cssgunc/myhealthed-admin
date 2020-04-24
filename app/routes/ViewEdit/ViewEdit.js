import React, { useState } from "react";

import SplitPane from 'react-split-pane';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DatePicker from 'react-datepicker';
import {
    Container,
    Row,
    Col,
    Input,
    Button
} from './../../components';
import { Typeahead } from 'react-bootstrap-typeahead';
import TextDragDrop from './components/TextDragDrop';
import ButtonInput from './components/ButtonInput';

import './../../styles/view-edit.scss';

const ViewEdit = () => {
    const [open, setOpen] = useState(false);
    const [story, setStory] = useState();
    const [key, setKey] = useState("details");
    const [pub, setPub] = useState(0);
    const [pubDate, setPubDate] = useState(new Date());
    const [tags, setTags] = useState(["These", "Changed"]);

    function setText(items) {
        let newStory = story;
        newStory["story texts"] = items;
        setStory(newStory);
    }

    async function load() {
        if (story == null) {
            await fetch(`/api/stories/get?page=0`)
                .then(response => response.json())
                .then(data => {
                    data[0]["story texts"] = data[0]["story texts"].split(";");
                    setStory(data[0]);
                })
                .catch(err => { console.log(err); })
        }
        setOpen(true);
    }

    let approve =
        <Container>
            <Row>
                <Col>
                    <b>Date Scheduled to be Published:</b> <br />
                    <DatePicker
                        customInput={<ButtonInput />}
                        onChange={(date) => setPubDate(date)}
                        selected={pubDate}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <b>Lede:</b>
                    <Input type="select">
                        {story == null ? null : story["story texts"].map((val, i) => {
                            return (
                                <option key={i}>{val}</option>
                            )
                        })}
                    </Input>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <b>Links:</b>
                    <p>TODO</p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <b>Tags:</b>
                    <Typeahead
                        clearButton
                        multiple={true}
                        options={["These", "Need", "To", "Be", "Changed"]}
                        selected={tags}
                        onChange={(selected) => setTags(selected)}
                        placeholder="Select tags..."
                    />
                </Col>
            </Row>
            <br />

        </Container >

    let reject =
        <p>Reject</p>

    let pubContent;
    switch (pub) {
        case 1:
            pubContent = approve;
            break;
        case 2: pubContent = reject;
            break;
        default:
            null;
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
                    <Container>
                        <br />
                        <Tabs
                            variant="pills"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="nav-justified tabs"
                        >
                            <Tab eventKey="details" title="Story Details">
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
                                            <TextDragDrop className="no-padding" text={story["story texts"]} setText={setText} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="publication" title="Publication">
                                <Container className="top-margin">
                                    <Row>
                                        <Col>
                                            <button onClick={() => setPub(1)} className="pub-button">Approve</button>
                                        </Col>
                                        <Col>
                                            <button onClick={() => setPub(2)} className="pub-button">Reject</button>
                                        </Col>
                                    </Row>
                                    {pubContent}
                                </Container>
                            </Tab>
                            <Tab eventKey="writer" title="Writer">
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
                    </Container>
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