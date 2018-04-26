const mongoose = require('mongoose');

const { User } = require('./db/user');
const { Question } = require('./db/question');

mongoose
  .connect('mongodb://localhost:3001/mongoose-test')
  .then(() => console.log('Connection successful!'))
  .catch(error => console.log(`Error connection: ${error}`));

const userDoc = {
  email: 'yurakruhlyk@test.ua',
  profile: {
    fullName: 'Yura Kruhlyk',
    post: 'Admin'
  },
  services: {
    password: {
      bcrypt: '$2a$04$1euBaJbjDUM3iIAjiYYOQuF7raEoANWM.zhM/KRMiyoG.Be2vJ/hm'
    },
    google: {
      fullName: 'Yura Kruhlyk',
      accessToken: 'M3iIAjiYYOQuF7ra',
      refreshToken: '43SFHGSVBM3iIAjiYYOQuF7ra'
    }
  }
};

const questionDoc = {
  title: 'Mongoose test add question3',
  description: 'testtesttesttesttesttesttest',
  tags: ['test', 'test2'],
  createById: mongoose.Types.ObjectId('5ae0f34e76e6f333781b8a86')
};

const addUser = async () => {
  try {
    const newUser = await User.create(userDoc);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

const addQuestion = async () => {
  try {
    const newQuestion = await Question.create(questionDoc);
    console.log(newQuestion);
  } catch (error) {
    console.log(error);
  }
};

addUser();
addQuestion();
