Promise.all([
  customElements.whenDefined('{{ WEB_COMPONENTS_PREFIX }}button')
  , customElements.whenDefined('{{ WEB_COMPONENTS_PREFIX }}input')
]).then(() => {
{% if WEB_COMPONENTS_PREFIX == 'wa-' %}
  document.body.classList.add('ready');
{% else %}
  document.querySelector('#nav-toggle-button').addEventListener('click', event => {
    document.querySelector('#nav-toggle-button').classList.toggle('hide-mobile');
    document.querySelector('#site-aside-left').classList.toggle('hide-mobile');
  });
  document.querySelector('#site-aside-left-close-button').addEventListener('click', event => {
    document.querySelector('#nav-toggle-button').classList.toggle('hide-mobile');
    document.querySelector('#site-aside-left').classList.toggle('hide-mobile');
  });
{% endif %}
});
