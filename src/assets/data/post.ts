import {IPost, IUser, IComment} from '../../types/interfaces';

const user: IUser = {
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  username: 'vadimnotjustdev',
  id: '',
  name: '',
};

const comment: IComment = {
  id: '1',
  comment: 'Hello there',
  user: {
    username: 'another_user',
  },
};

const comment2: IComment = {
  id: '2',
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
  user: {
    username: 'another_user_2',
  },
};

const post: IPost = {
  id: '1',
  createdAt: '19 December 2021',
  location: 'Helsinki, Finland',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: user,
  nofComments: 11,
  nofLikes: 33,
  comments: [comment, comment2],
};
export default post;
