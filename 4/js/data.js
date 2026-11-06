
import { getRandomInteger, getRandomArrayElement } from './util.js';

const DESCRIPTIONS = [
  'Красивый закат за городом.',
  'Прогулка по улицам любимого города.',
  'Незабываемый день с друзьями.',
  'Прекрасный вид на природу.',
  'Маленькие моменты большого счастья.',
  'Отличное настроение и солнечная погода.',
  'Вечерняя прогулка у моря.',
  'Новая фотография из путешествия.',
  'Красота в самых простых вещах.',
  'Выходные, которые хочется повторить.'
];

const MESSAGE_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов, это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота, и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Анна',
  'Валерий',
  'Мария',
  'Дмитрий',
  'Екатерина',
  'Александр',
  'Ольга'
];

let commentId = 1;

const createMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);
  const selectedSentences = [];

  while (selectedSentences.length < sentencesCount) {
    const sentence = getRandomArrayElement(MESSAGE_SENTENCES);

    if (!selectedSentences.includes(sentence)) {
      selectedSentences.push(sentence);
    }
  }

  return selectedSentences.join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };

  commentId += 1;
  return comment;
};

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i += 1) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const photos = Array.from(
  { length: 25 },
  (_, index) => createPhoto(index + 1)
);

export { photos };
