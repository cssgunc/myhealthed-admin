import React, { useState, useEffect } from "react";
import {Container} from './../../../components';
// import { fetchData } from './../routes';

const LinkDemo = () => {
  const [page, setPage] = useState(0);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // fetchData();
    // getLinks();
  },[]);

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

  async function fetchPageOfLinks() {
    // const data = [ { id: 12134123, url: 'linkUrl.com'} ];

      let url = `/api/links/get?page=${page}`;
      console.log(`Fetching request with url ${url}`);
      const data = await fetch(url).then(async response => {
          console.log(`Received response with status ${response.status}`);
          return response.json();
      });

    return data;
  }

  const getLinks = () => {
      fetchPageOfLinks().then(data => {
          setLinks(data);
          console.log('linkState', links);
      }).catch(err => console.log(err));
  }

  // fetchLinkByID(id){};
  // - adding a new button that gets a hard-coded ID on click
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
      <div>
        {links.map((link, i) => {
          return <p key={i}>{link.id} - {link.topic} - {link.url}</p>;
        })}
      </div>

    </Container>
  );
};

export default LinkDemo;
