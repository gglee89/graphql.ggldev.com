const { faker } = require("faker");

// Projects
const projects = [
  {
    id: "1",
    clientId: "1",
    name: "ReactJS Website",
    description: faker.lorem.sentences(),
  },
  {
    id: "2",
    clientId: "2",
    name: "AngularJS Website",
    description: faker.lorem.sentences(),
  },
  {
    id: "3",
    clientId: "3",
    name: "VueJS Website",
    description: faker.lorem.sentences(),
  },
];

// Clients
const clients = [
  {
    id: "1",
    name: `${faker.user.firstName()} ${faker.user.lastName()}`,
    email: faker.internet.email(),
    phone: faker.internet.phone(),
  },
  {
    id: "2",
    name: `${faker.user.firstName()} ${faker.user.lastName()}`,
    email: faker.internet.email(),
    phone: faker.internet.phone(),
  },
  {
    id: "3",
    name: `${faker.user.firstName()} ${faker.user.lastName()}`,
    email: faker.internet.email(),
    phone: faker.internet.phone(),
  },
];

module.exports = { projects, clients };
