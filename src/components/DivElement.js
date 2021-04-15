import HTMLElement from './HTMLElement';

export default class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
}
