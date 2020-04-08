import React, { useState, useEffect } from "react";
import { Container } from './../../../components';

const Demo = () => {
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  function fetchData() {
    let url = `/api/stories/get?page=${page}`;
    console.log(url);
    fetch(url)                           // returns Promise of response
      .then(response => response.json()) // transform response into JS object
      .then(data => {
        setStories(stories.concat(data));// update component with new data
        setPage(page+1);                 // increment page counter
    })                                   // (so next call will fetch next page)
      .catch(err => { console.log(err); });
  }

  return (
    <Container>
      <div>API TEST PAGE</div>
      <button onClick={ fetchData }>Load More</button>
      <div>
        { stories.map((story, i) => {
          return <p key={ i }>{ story.id } - { story["story texts"] }</p>;
        }) };
      </div>
    </Container>
  );
};

export default Demo;
