import bearForm from './components/bearForm';
import buttonEvents from './helpers/data/buttonEvents';
// import bearsData from './helpers/data/bearsData';

import '../styles/main.scss';

const init = () => {
  bearForm();
  buttonEvents();
  // bearsData();
};

init();
