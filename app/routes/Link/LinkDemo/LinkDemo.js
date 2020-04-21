// See: `app/routes/API_Demo/Demo/Demo.js`

import React, { useState, useEffect } from "react";
import { Container } from './../../../components';

// `axios` is a replacement for fetch, allowing us to make HTTP requests easily
// See: README in https://github.com/axios/axios
import * as axios from "axios";

const LinkDemo = () => {

    // State
    // - page number of table
    // - link data, to be displayed in table
    const [page, setPage] = useState(0);
    const [links, setLinks] = useState([]);


    // useEffect() is for any "side effects" that need to be made after render
    // - after the component initially loads
    // - after every component update
    // See: https://reactjs.org/docs/hooks-effect.html
    // - the empty array ensures that it only runs once (on load)
    useEffect(() => {
        // getLinks();
    }, []);

    // Returns: Promise of Link data (already converted from JSON to JS obj)
    const fetchPageOfLinks = () => {
        // Mock data example:
        // const data = [ { id: 12134123, url: 'linkUrl.com'} ];
        // return Promise.resolve(data);

        const url = `/api/links/get?page=${page}`;
        // console.log(`Fetching request with url ${url}`);
        return axios.get(url);
    }

    // Changes link state to new data, based on the page number.
    // Returns: nothing
    const getLinks = () => {
        fetchPageOfLinks()
            .then(response => {
                const data = response.data;
                setLinks(data);
                console.log('linkState', links);
        })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <div>Link Demo</div>
            <button onClick={ getLinks }>Get Links</button>

            <div>{ links.map((link, i) => {
                    return <p key={ i }>{ link.id } - { link.topic } - { link.url }</p>;
                }) }
            </div>
        </Container>
    );
};

    // TODO:
    // fetchLinkByID(id){};
    // - adding a new button that gets a hard-coded ID on click
    // - add a new state variable myLink
    // - add a new div that renders data in myLink
    // deleteLinkbyID(id){};
    // - new button that deletes hard-coded ID
    // -> so that once you delete, then press previous button to get, it should fail
    //

export default LinkDemo;
