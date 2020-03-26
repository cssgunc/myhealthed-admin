import React from 'react';

import {
    Container,
    Row,
    Button,
    Col,
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    FormFeedback,
    Badge,
    CustomInput,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from './../../../components';

import { Typeahead } from 'react-bootstrap-typeahead';
import { HeaderMain } from "../../components/HeaderMain";
import { Redirect } from 'react-router';

const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

export class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 16,
            race: "White",
            lgbtq: "Yes",
            perspective: "Female",
            contact: 1234567,
            title: "Example Title",
            lede: "blank",
            topic: "Puberty",
            published: "2020-03-01",
            status: "Published",
            selected: ["Like", "Haha"],
            story: "Example body of story",
            link: "https://www.google.com",
            validLink: true
        };
    }

    changeHandler = (event) => {
        if (event.target.name == "link") {
            if (pattern.test(event.target.value)) {
                this.setState({ validLink: true });
            } else {
                this.setState({ validLink: false });
            }
        }
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    onSubmit = () => {
        console.log(this.state)
    }


    render() {
        return (
            <React.Fragment>
                <Container>
                    <HeaderMain
                        title="Edit Story"
                        className="mb-5 mt-4"
                    />
                    <Card>
                        <CardHeader tag="h6">
                            Submitter Demographics
                    </CardHeader>
                        <CardBody>
                            <Form id="demographics">
                                <FormGroup row>
                                    <Label sm={3}>Age</Label>
                                    <Col>
                                        <Input
                                            type="number"
                                            name="age"
                                            value={this.state.age}
                                            disabled
                                        />

                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Race
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="race"
                                            value={this.state.race}
                                            disabled
                                        >
                                            <option disabled>Select an Option</option>
                                            <option key="White">White</option>
                                            <option>Black</option>
                                            <option>American Indian or Alaskan Native</option>
                                            <option>Asian</option>
                                            <option>Native Hawaiian or Other Pacific Islander</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        LGBTQ
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="lgbtq"
                                            value={this.state.lgbtq}
                                            disabled
                                        >
                                            <option defaultValue="">Select an Option</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Perspective
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="perspective_locked"
                                            value={this.state.perspective}
                                            disabled
                                        >
                                            {
                                                ["Male", "Female", "Non-Binary", "Undisclosed"].map((i, j) => {
                                                    return <option key={i} value={i}>{i}</option>
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>Contact</Label>
                                    <Col>
                                        <Input
                                            type="number"
                                            name="contact"
                                            value={this.state.contact}
                                            disabled
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                    <br />
                    <Card>
                        <CardHeader tag="h6">
                            Story Information
                    </CardHeader>
                        <CardBody>
                            <Form id="storyInfo">
                                <FormGroup row>
                                    <Label sm={3}>Title</Label>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.changeHandler}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Perspective
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="perspective"
                                            value={this.state.perspective}
                                            onChange={this.changeHandler}
                                        >
                                            <option disabled defaultValue>Select an Option</option>
                                            {
                                                ["Male", "Female", "Non-Binary", "Undisclosed"].map((i, j) => {
                                                    return <option key={i} value={i}>{i}</option>
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>Lede</Label>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="lede"
                                            value={this.state.lede}
                                            onChange={this.changeHandler}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Topic
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="topic"
                                            value={this.state.topic}
                                            onChange={this.changeHandler}
                                        >
                                            <option disabled defaultValue="">Select an Option</option>
                                            <option>Puberty</option>
                                            <option>Relationships</option>
                                            <option>Bullying</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Background Image
                            </Label>
                                    <Col>
                                        <CustomInput
                                            type="file"
                                            name="backgrouond"
                                            id="background_id"
                                        >
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Published At
                            </Label>
                                    <Col>
                                        <Input
                                            type="date"
                                            name="published"
                                            value={this.state.published}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>
                                        Status
                                    </Label>
                                    <Col>
                                        <Input
                                            type="select"
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.changeHandler}
                                        >
                                            <option disabled defaultValue>Select an Option</option>
                                            <option>Under Review</option>
                                            <option>Published</option>
                                            <option>Cancelled</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={3}>Tags</Label>
                                    <Col>
                                        <Typeahead
                                            id="tag_select"
                                            multiple={true}
                                            options={["Like", "Cringey", "Haha", "Me Too", "Interesting"]}
                                            selected={this.state.selected}
                                            onChange={(selected) => {
                                                this.setState({ selected });
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                    <br />
                    <Card>
                        <CardHeader tag="h6">
                            Story
                    </CardHeader>
                        <CardBody>
                            <Form id="storyText">
                                <FormGroup>
                                    <Input
                                        type="textarea"
                                        name="story"
                                        value={this.state.story}
                                        onChange={this.changeHandler}
                                    >
                                    </Input>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                    <br />
                    <Card>
                        <CardHeader tag="h6">
                            Link Information
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label sm={3}>Link</Label>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="link"
                                            valid={this.state.validLink}
                                            value={this.state.link}
                                            invalid={!this.state.validLink}
                                            onChange={this.changeHandler}
                                            required
                                        >
                                        </Input>
                                        <FormFeedback>Invalid URL</FormFeedback>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                    <br />
                    <Button color="primary" disabled={!this.state.validLink} onClick={this.onSubmit}>Update Story</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </Container>
            </React.Fragment>
        );
    }
}