import getBear from './getBear';

const buttonEvents = () => {
  document.querySelector('#create-bear').addEventListener('click', getBear);
};

export default buttonEvents;
