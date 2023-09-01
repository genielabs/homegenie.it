const template = `<span class="material-icons mdl-color-text--accent" style="vertical-align: middle">{{ content }}</span>`;

module.exports = (render, content) => {
  return render(template, {content});
};
