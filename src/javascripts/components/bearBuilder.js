import renderToDOM from '../helpers/data/renderToDom';

const bearBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class='card m-1" style="width: 18rem;'>
    <p class='card-text'>${item.name}</p>
    <div class='card-body'>
<img src='${item.imageUrl}' class='card-img-top' alt='bearImg'>
<button type="submit"  class="btn btn-primary" id="caught">Caught Fish</button>
      <button type="submit"  class="btn btn-primary" id="missed">Missed Fish</button>
</div>
</div>`;
  });
  renderToDOM('#bearCard', domString);
};

export default bearBuilder;
