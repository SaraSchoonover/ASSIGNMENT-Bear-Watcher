import renderToDOM from '../helpers/data/renderToDom';

const bearBuilder = (array) => {
  let card = '';
  array.forEach((item) => {
    card += `<div class='card'>
    <p class='card-text'>${item.name}</p>
    <div class='card-body'>
<img src='${item.imageUrl}' class='card-img-top' alt='bearImg'>
<button type="submit"  class="btn btn-dark" id="caught">Caught Fish</button>
      <button type="submit"  class="btn btn-dark" id="missed">Missed Fish</button>
</div>
</div>`;
  });
  renderToDOM('#bearFun', card);
};

export default bearBuilder;
