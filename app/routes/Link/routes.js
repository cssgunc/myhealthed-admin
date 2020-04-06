
async function fetchData() {
  let url = `/api/stories/get?page=${page}`;
  console.log(`Fetching request with url ${url}`);
  fetch(url).then(async response => {
      console.log(`Received response with status ${response.status}`);
      let data = await response.json();
      console.log(data[0]);
      return data;
  }).then(data => setStories(stories.concat(data)))
    .then(()=> setPage(page+1))
    .catch(err => console.log(err));
}

module.exports = {
    fetchData: fetchData
}
