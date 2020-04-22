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

<<<<<<< HEAD
  class myLink extends React.Component {
    constructor(props) {
      super (props)
      this.state = {
        //how to set up the state variable? sinc info varies based on link?
      }
    }
    render() {

    }
  }

  // async function fetchData() {
  //   let url = `/api/stories/get?page=${page}`;
  //   console.log(`Fetching request with url ${url}`);
  //   fetch(url).then(async response => {
  //       console.log(`Received response with status ${response.status}`);
  //       let data = await response.json();
  //       console.log(data[0]);
  //       return data;
  //   }).then(data => setStories(stories.concat(data)))
  //     .then(()=> setPage(page+1))
  //     .catch(err => console.log(err));
  // }
  //
=======
>>>>>>> 5b1594b485e9464913aa6f0b5597ef4b1d7e9adb

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

<<<<<<< HEAD
  async function fetchLinkByID(id) {
    let url = `/api/links/get?id=${id}`;
    console.log(`Fetching request with url ${url}`);
    const data = await fetch(url).then(async response => {
      console.log(`Received response with status ${response.status}`);
          return response.json();
    });
    return data;
  }

  async function deleteLinkByID(id) {
    let url = `/api/links/get?id=${id}`;
    console.log(`Fetching request with url ${url}`);
    const data = await fetch(url).then(async response => {
      console.log(`Received response with status ${response.status}`);
          return response.json();
    });
  }

  const getLinks = () => {
    fetchPageOfLinks().then(data => {
        setLinks(data);
        console.log('linkState', links);
    }).catch(err => console.log(err));
}

const getLinkByID = (id) => {
  fetchLinkByID(id).then(data => {
      setLinks(data);
      console.log('linkState', links);
  }).catch(err => console.log(err));
}

const delLinkByID= (id)=> {
  deleteLinkByID(id).then(data => {
    setLinks(data);
    console.log('linkState', links);
  }).catch(err => console.log(err));
  //how to actually remove the link?
}

  // fetchLinkByID(id){};
  // - adding a new button that gets link by hard-coded ID on click
  // - add a new state variable myLink
  // - add a new div that renders data in myLink
  // deleteLinkbyID(id){};
  // - new button that deletes hard-coded ID
  // -> so that once you delete, then press previous button to get, it should fail
  //
  return (
    <Container>
      <div>Link Demo</div>
      <button onClick={getLinks}>Get Links</button>
      <button onClick={delLinkByID}>Remove Link</button>
      <button onClick={getLinkByID}>Get Link by ID</button>
      <div>
        {links.map((link, i) => {
          return <p key={i}>{link.id} - {link.topic} - {link.url}</p>;
        })}
      </div>


    </Container>
  );
=======
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
>>>>>>> 5b1594b485e9464913aa6f0b5597ef4b1d7e9adb
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
