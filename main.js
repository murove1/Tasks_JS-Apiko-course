const url = 'https://jsonplaceholder.typicode.com';
const app = document.getElementById('app');

const handlePostClick = id => {
  event.preventDefault();
  window.history.pushState(null, '', `?postId=${id}`);
  getPost(id);
};

const handleUserClick = id => {
  event.preventDefault();
  window.history.pushState(null, '', `?userId=${id}`);
  getUser(id);
};

const userPostHtml = post => {
  const { id, title } = post;

  return `<div class="post">
          <a href="?postId=${id}" onclick="handlePostClick(${id})">
          <h3>${title}</h3></a></div>`;
};

const userInfoHtml = user => {
  const {
    name,
    email,
    address: { street, suite, city },
    phone,
    website,
    company
  } = user;

  return `<h1>${name}</h1>
          <div><b>Email:</b> ${email}</div>
          <div><b>Address:</b> ${street},${suite},${city}</div>
          <div><b>Phone:</b> ${phone}</div>
          <div><b>Site:</b>${website}</div>
          <div><b>Company:</b>${company.name}</div>
          <h2>User Posts:</h2>`;
};

const commentsHtml = comment => {
  const { email, name, body } = comment;

  return `<div class="comment">
            <div>${email}</div>
            <div>${name}</div>
            <div>${body}</div>
          </div>`;
};

const postHtml = (post, authorName) => {
  const { userId, title, body } = post;

  return `<h1>${title}</h1>
          <a href="?userId=${userId}" onclick="handleUserClick(${userId})">${authorName}</a>
          <p>${body}</p></a>`;
};

const postsHtml = post => {
  const { title, id } = post;

  return `<h1>${title}</h1>
          <a href="?postId=${id}" onclick="handlePostClick(${id})">Read full version</a>`;
};

const printUserPosts = (postsContainer, posts) => {
  posts.forEach(post => {
    postsContainer.innerHTML += userPostHtml(post);
  });
};

const printUserInfo = (user, posts) => {
  const postsContainer = document.createElement('div');

  app.innerHTML = userInfoHtml(user);
  app.appendChild(postsContainer);
  printUserPosts(postsContainer, posts);
};

const printComments = (commentsContainer, comments) => {
  comments.forEach(comment => {
    commentsContainer.innerHTML += commentsHtml(comment);
  });
};

const printPost = (post, comments) => {
  const { userId } = post;

  getAuthorName(userId).then(authorName => {
    const commentsContainer = document.createElement('div');
    const postContainer = document.getElementById('postContainer');

    app.innerHTML = postHtml(post, authorName);
    app.appendChild(commentsContainer);
    printComments(commentsContainer, comments);
  });
};

const printPosts = posts => {
  app.innerHTML = '';

  posts.forEach(post => {
    const postContainer = document.createElement('div');
    postContainer.setAttribute('class', 'post');

    postContainer.innerHTML = postsHtml(post);
    app.appendChild(postContainer);
  });
};

async function getAuthorName(id) {
  try {
    const response = await fetch(`${url}/users/${id}`);
    const data = await response.json();

    return data.name;
  } catch (error) {
    console.log(error);
  }
}

async function getUser(id) {
  try {
    const response = await fetch(`${url}/users/${id}`);
    const data = await response.json();

    getUserPosts(data);
  } catch (error) {
    console.log(error);
  }
}

const getComments = async post => {
  try {
    const { id } = post;
    const response = await fetch(`${url}/posts/${id}/comments`);
    const data = await response.json();

    printPost(post, data);
  } catch (error) {
    console.log(error);
  }
};

async function getPost(id) {
  try {
    const response = await fetch(`${url}/posts/${id}`);
    const data = await response.json();

    getComments(data);
  } catch (error) {
    console.log(error);
  }
}

async function getUserPosts(user) {
  try {
    const { id } = user;
    const response = await fetch(`${url}/posts?userId=${id}`);
    const data = await response.json();

    printUserInfo(user, data);
  } catch (error) {
    console.log(error);
  }
}

async function getPosts() {
  try {
    const response = await fetch(`${url}/posts`);
    const data = await response.json();

    printPosts(data);
  } catch (error) {
    console.log(error);
  }
}

const routingEvent = () => {
  if (window.location.search.includes('postId')) {
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('postId');

    return getPost(id);
  }

  if (window.location.search.includes('userId')) {
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('userId');

    return getUser(id);
  }

  return getPosts();
};

window.addEventListener('popstate', routingEvent);
window.addEventListener('load', routingEvent);
