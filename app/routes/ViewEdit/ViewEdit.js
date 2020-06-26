import React, { useState } from "react";

import SplitPane from 'react-split-pane';
import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
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
import ListItem from './components/ListItem';

import axios from "axios";

import './../../styles/view-edit.scss';

const possibleRejections = [
    "User under age 13",
    "User over age 20",
    "Too short/Not detailed/Not written in complete sentences",
    "Irrelevant to the story prompt",
    "Crude or inappropriate language",
    "Self-harm or suicide",
    "Sexual assault or abuse",
    "Serious and non-accidental bodily/physical injury",
    "Child abuse",
    "Romantic relationships between minors and adults (18+)",
    "Incest",
    "Pornography",
    "Nudes",
    "Cheating",
    "Retaliation",
    "Prescription drugs",
    "Religion",
    "Unhealthy eating behavior or unhealthy body image"
]

const ViewEdit = () => {
    const [splitOpen, setSplitOpen] = useState(false); //SplitPane state
    const [alertStatus, setAlertStatus] = useState(""); //alert state
    const [alertMessage, setAlertMessage] = useState(); //alert message
    const [story, setStory] = useState(); //current story
    const [key, setKey] = useState("details"); //Tabs state
    const [pub, setPub] = useState(0); //Approved/rejected state where 1: Approve, 2: Reject
    const [pubDate, setPubDate] = useState(new Date()); //Date scheduled to be published
    const [lede, setLede] = useState(0); //Selected lede for publication
    const [tags, setTags] = useState([]); //Story tags
    const [links, setLinks] = useState(); //All possible links for add link modal
    const [selectedLinks, setSelectedLinks] = useState([]); //Currently selected links to attach to the story
    const [currentLink, setCurrentLink] = useState(null); //Current link selected in modal typeahead
    const [reasonForRejection, setReasonForRejection] = useState(); //Reason for rejecting the story
    const [selectedRejections, setSelectedRejections] = useState([]); //Currently selected rejections for story
    const [currentRejections, setCurrentRejections] = useState([]); //Current rejections selected in modal 
    const [showLinkModal, setShowLinkModal] = useState(false); //Link Modal state
    const [showRejectionModal, setShowRejectionModal] = useState(false); //Rejection Modal state

    
    var underReviewStyle = pub == 0 ? "color-button pub-button" : "pub-button";
    var approveStyle = pub == 1 ? "color-button pub-button" : "pub-button";
    var rejectStyle = pub == 2 ? "color-button pub-button" : "pub-button";

    function setText(items) {
        let newStory = story;
        newStory["story texts"] = items;
        setStory(newStory);
    }

    async function load() {
        if (story == null) {
            await axios.get('/api/stories/get?page=0')
                .then(response => {
                    let data = response.data;
                    data[0]["story texts"] = data[0]["story texts"].split(";");
                    setStory(data[0]);
                })
                .catch(err => console.log(err));
            await axios.get('/api/links/get?page=0')
                .then(data => setLinks(data.data))
                .catch(err => console.log(err));
        }
        setSplitOpen(true);
    }

    function saveStory() {
        // TODO implement tags
        let updatedStory = {
            id: story.id,
            // demographics
            age: story.age,
            lgbtq: story.lgbtq,
            perspective: story.perspective,
            phone: story.phone,
            race: story.race,
            // story info
            lede: story["story texts"][lede], // Grabs correct text corresponding to lede index
            "story texts": story["story texts"].join(";"),
            title: story.title,
            topic: story.topic,
            // link
            "link url": selectedLinks[0] ? selectLinks[0].url : null, // Grabs first url
            // story status
            status: pub === 1 ? "accepted" : (pub === 2 ? "not accepted" : "under review"),
            published_at: pubDate,
            sent_published_notification_at: pubDate, // TODO figure out how to get this value
            accepted_at: pub === 1 ? Date.now() : null,
            sent_accepted_notification_at: Date.now(),
            rejected_at: pub === 2 ? Date.now() : null,
            reason_for_rejection: pub === 2 ? reasonForRejection : null,
            // reactions
            cringey: story.cringey,
            haha: story.haha,
            interesting: story.interesting,
            like: story.like,
            "me too": story["me too"]
        };
        axios.post('/api/stories/edit', updatedStory)
            .then((response) => {
                console.log(response);
                setAlertStatus("success");
                setAlertMessage("Story successfully saved!");
            })
            .catch((error) => {
                console.log(error);
                setAlertStatus("danger");
                setAlertMessage("There was an error saving the story.")
            });
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
                    <Input type="select" onChange={(e) => setLede(e.target.value)}> 
                        {story == null ? null : story["story texts"].map((val, i) => {
                            return (
                                <option key={i} value={i}>{val}</option>
                            )
                        })}
                    </Input>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <b>Links:</b> <br />
                    <Modal centered show={showLinkModal} onHide={() => setShowLinkModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Link</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Typeahead
                                id="link_selection"
                                clearButton
                                labelKey={option => option.title}
                                options={links == null ? null : links.filter(e => !selectedLinks.includes(e))}
                                onChange={(link) => {
                                    if (links.includes(link[0])) {
                                        setCurrentLink(link)
                                    }
                                }}
                                placeholder="Search..."
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => {
                                setShowLinkModal(false);
                                if (currentLink !== null) {
                                    setTags([...new Set(tags.concat(currentLink
                                        .map(link => link.subtopic)
                                        .toString()
                                        .split(",")
                                        .map(e => e.trim())))
                                    ]);
                                    setSelectedLinks(selectedLinks.concat(currentLink));
                                }
                            }}
                                color="primary">Save</Button>
                        </Modal.Footer>
                    </Modal>
                    {selectedLinks.map((link, i) => {
                        return (
                            <ListItem key={i} delete={() => {
                                setTags(tags.filter(e => !selectedLinks[i].subtopic
                                    .toString()
                                    .split(",")
                                    .map(e => e.trim())
                                    .includes(e)));
                                setSelectedLinks(selectedLinks.filter((_, index) => index !== i));
                            }}>
                                <a target="_blank" rel="noopener noreferrer" className="text-primary underline" href={link.url}>{link.title}</a>
                            </ListItem>
                        )
                    })}
                    <button className="add-button" onClick={() => {
                        setShowLinkModal(true);
                        setCurrentLink(null);
                    }}>Add</button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <b>Tags:</b>
                    <Typeahead
                        id="tag_selection"
                        clearButton
                        multiple
                        allowNew
                        flip
                        options={[]}
                        selected={tags}
                        onChange={(selected) => setTags(selected)}
                        placeholder="Add tags..."
                    />
                </Col>
            </Row>
            <br />

        </Container >

    let reject =
        <Container>
            <Row>
                <Col>
                    <b>Reasons for rejection (only visible to Real Talk staff):</b> <br />
                   <Input 
                        id="rejection_reason"
                        type="textarea"
                        onChange={(e) => setReasonForRejection(e.target.value)}
                    />
                </Col>
            </Row>
        </Container>

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
    if (!splitOpen) {
        content = <Button onClick={() => load()}>Open Edit Pane</Button>
    } else {
        content =
            <SplitPane split="vertical">
                <div>Story list view!</div>
                <div id="height-adjustment">
                    <div className="header">
                        <div className="flex-display">
                            <a onClick={() => setSplitOpen(false)} id="tick" className="x">x</a>
                        </div>
                        <div className="flex-display">
                            <h2 id="title">{story.id}: {story.title}</h2>
                        </div>
                    </div>
                    <Container>
                        <br />
                        {alertStatus !== "" &&
                            <Alert variant={alertStatus} onClose={() => setAlertStatus("")}>
                                {alertMessage}
                                <hr/>
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setAlertStatus("")} color={alertStatus}>
                                        Close
                                    </Button>
                                </div>
                            </Alert>
                        }
                        
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
                                    <div className="button-wrapper">
                                        <button onClick={() => setPub(0)} className={underReviewStyle}>Under Review</button>
                                    </div>
                                    <div className="button-wrapper">
                                        <button onClick={() => setPub(1)} className={approveStyle}>Approve</button>
                                        <button onClick={() => setPub(2)} className={rejectStyle}>Reject</button>
                                    </div>
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
                                    <br />
                                    <Row>
                                        <Col>
                                            <b>LGTBQ Status:</b> <br /> {story.lgbtq}
                                        </Col>
                                        <Col>
                                            <b>Race:</b> <br /> {story.race}
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <b>Phone Number:</b> <br />
                                            <p>({story.phone.slice(0, 3)}) {story.phone.slice(3, 6)}-{story.phone.slice(6, 10)}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Container>
                    <br/>
                    <Container>
                        <div className="footer">
                            <div className="text-center">
                                <Button color="primary" size="lg" onClick={() => saveStory()}>Save Story</Button>
                            </div>
                        </div>
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