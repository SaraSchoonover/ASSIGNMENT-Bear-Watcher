import bearBuilder from '../../components/bearBuilder';
import bears from './bearsData';

// const bears = [];

const getBear = (e) => {
  e.preventDefault();

  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#imgUrl').value;

  const obj = {
    name,
    imageUrl,
  };

  bears.push(obj);
  bearBuilder(bears);

  document.querySelector('form').reset();
};

export default getBear;
