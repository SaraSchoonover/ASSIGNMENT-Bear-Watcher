import renderToDOM from '../helpers/data/renderToDom';

const bearForm = () => {
  // let formString = '';
  const formString = `
  <div class='jumbotron jumbotron-fluid header'>
  <div class="container">
    <h1 class="display-4 header-text">Katmai National Park</h1>
    <h2>Brown Bears</h2>
    <p class="lead header-text"></p>
  </div>
</div>

<div class="row justify-content-center">
    <form>
      <div class="form-group">
        <label for="bear-name">Bear Name</label>
        <input
          type="text"
          class="form-control form-style"
          id="bearName"
          aria-describedby="bear"
          required
        />

      </div>
      <div class="form-group">
        <label for="description">Bear Image</label>
        <input
          type="text"
          class="form-control form-style"
          id="imgUrl"
        />
      </div>
      <div class="form-check"></div>
      <button type="submit" class="btn btn-dark" id="create-bear">
        Bear Me!
      </button>
    </form>
  </div>
  </div>
  </div>
  `;

  renderToDOM('#bearForm', formString);
};

export default bearForm;
