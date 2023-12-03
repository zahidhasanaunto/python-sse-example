const axios = require('axios');

// const URL = 'http://localhost:5000/create-completion';
const URL = 'https://ersa-stg.programming-hero.com/create-completion';

const requestsData = [
  {
    url: URL,
    body: {
      question: 'give me a java async example',
      userId: '123',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a python async example',
      userId: '1234',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a ruby async example',
      userId: '12345',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a java async example',
      userId: '123456',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a python async example',
      userId: '1234567',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a ruby async example',
      userId: '12345678',
    },
  },
  {
    url: URL,
    body: {
      question: 'give me a ruby async example',
      userId: '123456789',
    },
  },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a bash loop example',
  //       userId: '123456',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'hi',
  //       userId: 'aaaaa',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'hello',
  //       userId: 'bbbbb',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a php async example',
  //       userId: '1234',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a java async example',
  //       userId: '123',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a php async example',
  //       userId: '1234',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a java async example',
  //       userId: '123',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a php async example',
  //       userId: '1234',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a java async example',
  //       userId: '123',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a php async example',
  //       userId: '1234',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a java async example',
  //       userId: '123',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a php async example',
  //       userId: '1234',
  //     },
  //   },
  //   {
  //     url: URL,
  //     body: {
  //       question: 'give me a java async example',
  //       userId: '123',
  //     },
  //   },
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
//   //   {
//   //     url: 'http://localhost:5000/test',
//   //     body: {
//   //       question: 'give me a php async example',
//   //       userId: '12',
//   //     },
//   //   },
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
