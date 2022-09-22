// requires
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "hlnicks",
        email: "leo@lorem.com",
        password: bcrypt.hashSync("password102", 10)
    },
    {
        username: "pjnelson",
        email: "amet@gravida.com",
        password: bcrypt.hashSync("password394", 10)
    },
    {
        username: "bailrio",
        email: "blandit@viverra.com",
        password: bcrypt.hashSync("password586", 10)
    },
    {
        username: "juno22",
        email: "lacus@lectus.com",
        password: bcrypt.hashSync("password701", 10)
    },
    {
        username: "k8mose",
        email: "odio@ipsum.com",
        password: bcrypt.hashSync("password815", 10)
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
