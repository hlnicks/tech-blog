// requires
const { Post } = require('../models');

const postData = [
    {
        title: "Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.",
        user_id: 1,
    },
    {
        title: "Auctor urna nunc id cursus? Luctus accumsan tortor posuere ac ut consequat.",
        text: "Lobortis elementum nibh tellus molestie nunc non blandit. ",
        user_id: 3,
    },
    {
        title: "Ornare aenean euismod elementum nisi quis eleifend..",
        text: "Amet commodo nulla facilisi nullam vehicula!",
        user_id: 2,
    },
    {
        title: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus?",
        text: "Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi?",
        user_id: 4,
    },
    {
        title: "Neque laoreet suspendisse interdum consectetur libero id faucibus.",
        text: "Eleifend quam adipiscing vitae proin sagittis nisl!",
        user_id: 5,
    },
    {
        title: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
        text: "Velit dignissim sodales ut eu sem integer...?",
        user_id: 1,
    },
    {
        title: "Quis risus sed vulputate odio ut enim blandit volutpat!!",
        text: "Lorem sed risus ultricies tristique nulla aliquet enim tortor at.",
        user_id: 2,
    },
    {
        title: "Vitae elementum curabitur vitae nunc sed.",
        text: "Ut enim blandit volutpat maecenas volutpat blandit.",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;