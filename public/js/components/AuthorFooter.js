export class AuthorFooter {
  constructor() {}

  mount($element) {
    return $element.append(`<footer>
      Built with <span class="hearth">❤</span> by 
      <a href="https://github.com/matteo-minerva" target="_blank" class="author">Matteo Minerva</a>
    </footer>`);
  }
}
