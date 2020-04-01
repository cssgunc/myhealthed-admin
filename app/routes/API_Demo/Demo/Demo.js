import React, { useState, useEffect } from "react";
import {Container} from './../../../components';

const Demo = () => {
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    let  url = `http://localhost:` + location.port + `/api/stories?page=${page}`;
    console.log(url);
    const res = await fetch(url);
    res
      .json()
      .then(res => setStories(stories.concat(res)))
      .then(()=> setPage(page+1))
      .catch(err => console.log(err));
  }

  const loadMore = () =>{
      fetchData();
  }

  return (
    <Container>
      <div>API TEST PAGE</div>
      <button onClick={loadMore}>Load More</button>
      <div>
        {stories.map((story, i) => {
          return <p key={i}>{story.id} - {story["story texts"]}</p>;
        })};
      </div>
    </Container>
  );
};

export default Demo;
