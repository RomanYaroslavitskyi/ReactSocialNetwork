import { renderEntireTree } from "../../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "I learn IT-kamasutra", likeCount: 10 },
      { id: 2, message: "My friend learn great IT-course", likeCount: 13 },
      { id: 3, message: "Buy your pig", likeCount: 4 },
      {
        id: 4,
        message: "Sell Books. Secon in bill for free!!!",
        likeCount: 144,
      },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Wahat`s up?" },
      { id: 4, message: "What did you do?" },
      { id: 5, message: "It`s you?" },
    ],
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Nina" },
      { id: 3, name: "Andrew" },
      { id: 4, name: "Shasha" },
      { id: 5, name: "Artem" },
      { id: 6, name: "Kostya" },
      { id: 7, name: "Roman" },
    ],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 10000,
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
