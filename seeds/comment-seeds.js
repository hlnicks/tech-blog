// requires
const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Venenatis cras sed felis eget velit aliquet sagittis id.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Vulputate ut pharetra sit amet aliquam!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Tristique risus nec feugiat in?",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "A condimentum vitae sapien pellentesque.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Leo integer malesuada nunc vel risus commodo viverra. ",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Orci nulla pellentesque dignissim enim sit amet?!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Egestas sed tempus urna et pharetra.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Ut tristique et egestas quis ipsum suspendisse ultrices gravida.",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: "Nulla pellentesque dignissim enim sit amet venenatis urna cursus.",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: "Vitae turpis massa sed elementum tempus?",
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: "Duis tristique sollicitudin nibh sit amet commodo nulla.",
    user_id: 3,
    post_id: 6,
  },
  {
    comment_text: "Sodales ut etiam sit amet. Sit amet justo donec enim diam!",
    user_id: 2,
    post_id: 7,
  },
  {
    comment_text: "Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. ",
    user_id: 1,
    post_id: 7,
  },
  {
    comment_text: "Ipsum dolor sit amet consectetur adipiscing elit.",
    user_id: 4,
    post_id: 8,
  },
  {
    comment_text: "Gravida in fermentum et sollicitudin ac orci phasellus?",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: "Sit amet commodo nulla facilisi nullam.",
    user_id: 2,
    post_id: 8,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;