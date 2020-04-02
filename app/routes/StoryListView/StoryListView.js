import React from 'react';

import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Table,
} from './../../components';

import { HeaderMain } from "../components/HeaderMain";

/*import {
    HeaderDemo
} from "../components/HeaderDemo";*/

import {
    TrTableDefault
} from "./components/TrTableDefault";
import {
    TrTableStriped
} from "./components/TrTableStriped";

const StoryListView = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Stories"
                className="mb-5 mt-4"
            />
            { /* START Section 1 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Default
                                <span className="small ml-1 text-muted">
                                    #1.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Using the most basic table markup, here’s how <code>.table-based</code> tables look in Bootstrap. 
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the 
                                same manner as the parent.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">ID</th>
                                    <th className="bt-0">Date Submitted</th>
                                    <th className="bt-0">Prompt Title</th>
                                    <th className="bt-0">Topic</th>
                                    <th className="bt-0">Status</th>
                                    <th className="text-right bt-0">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableDefault />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Section 3 */}
            <Row>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Table Striped
                                <span className="small ml-1 text-muted">
                                    #3.01
                                </span>
                            </CardTitle>
                            <p className="mb-0">
                                Use <code>striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
                            </p>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" striped responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0"></th>
                                    <th className="bt-0">ID</th>
                                    <th className="bt-0">Text</th>
                                    <th className="bt-0">Perspective</th>
                                    <th className="text-right bt-0">
                                        Lede
                                    </th>
                                    <th className="bt-0">Topic</th>
                                    <th className="bt-0">Published</th>
                                    <th className="bt-0">Submitted</th>
                                    <th className="bt-0"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableStriped />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Section 3 */}

        </Container>
    </React.Fragment>
);

export default StoryListView;