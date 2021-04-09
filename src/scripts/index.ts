import App from "./app";




const init = () => {
const app = new App('items');
app.renderView()
};

window.addEventListener('load', init.bind(this));
  





