import React from 'react';

import axios from "axios";

import {
    EmptyLayout,
} from './../../../components';

let sampleStory = 
    {
        "id": 8,
        "perspective": "First\n",
        "age": 12,
        "lgbtq": "yes",
        "race": "white",
        "phone": "123-456-7890",
        "topic": "bullying",
        "title": "This is the Title",
        "published": "2017-08-09T14:00:00.000Z",
        "like": 2,
        "cringey": 3,
        "haha": 4,
        "me too": 5,
        "interesting": 6,
        "story texts": "ABC 123",
        "link url": "link.com\n",
        "link photo": "Link photo",
        "link title": "link title",
        "link site name": "Link website",
        "link body": "this is the link body ",
      }

// Sample post request
axios.post("http://localhost:3001/stories/",sampleStory).then(data => console.log(data));

const ComingSoon = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
           <div>API TEST PAGE</div>
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default ComingSoon;
