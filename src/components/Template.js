export default class Template {
  constructor(html) {
    this.template = document.createElement('template');
    this.template.innerhtml = html;
    this.template.content = template.content;
  }

  render() {
    return this.template.content.cloneNode(true);
  }
}