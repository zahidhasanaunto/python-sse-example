const axios = require('axios');

const requestsData = [
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a php async example',
      userId: '1234',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a java async example',
      userId: '123',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '12',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '123111',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a php async example',
      userId: '123466',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a java async example',
      userId: '123cfgg',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '1gfg2',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '123cggccg111',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '123111',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a php async example',
      userId: '123466',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a java async example',
      userId: '123cfgg',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '1gfg2',
    },
  },
  {
    url: 'http://localhost:5000/create-completion',
    body: {
      question: 'give me a javascript async example',
      userId: '123cggccg111',
    },
  },
];

// const requestsData = [
//   {
//     url: 'http://localhost:5000/test',
//     body: {
//       question: 'give me a php async example',
//       userId: '1234',
//     },
//   },
//   {
//     url: 'http://localhost:5000/test',
//     body: {
//       question: 'give me a php async example',
//       userId: '123',
//     },
//   },
//   {
//     url: 'http://localhost:5000/test',
//     body: {
//       question: 'give me a php async example',
//       userId: '12',
//     },
//   },
// ];

const requests = requestsData.map((requestData) =>
  axios.post(requestData.url, requestData.body)
);

Promise.all(requests)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.data);
    });
  })
  .catch((error) => {
    console.error(error);
  });
