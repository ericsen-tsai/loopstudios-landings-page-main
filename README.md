# Loop Studios Landings Page

## Table of contents

- [Loop Studios Landings Page](#loop-studios-landings-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [Observer API](#observer-api)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- [Heroku](https://agile-woodland-89332.herokuapp.com)

## Process

### Built with

- Semantic HTML5 markup
- Flexbox
- Gridbox
- Sass
- Block-Element-Modifier (BEM) for Sass
- Vanilla JS

### Note

#### Observer API

> Observer API is good for trigger animation when element is in screen.

```js
const displayObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const displayImage = entry.target.querySelector(
      ".section-box"
    )

    if (entry.isIntersecting) {
      displayImage.classList.add("section-box--animated")
    }

    displayImage.classList.remove("section-box--animated")
  })
})

displayObserver.observe(document.querySelector(".section"))
```

### Continued development

- [ ] Use invisible check box to handle the navigation on mobile instead of JS.
- [ ] Use FullPage.js to make full page scrolling.
- [ ] Remodel index.html in content and footer.

### Useful resources

- [Kevin Powell (youtube channel)](https://www.youtube.com/kepowob) - Let me learn a lot of details of CSS, which really make CSS easier.
- [MDN](https://developer.mozilla.org/en-US/) - Updated contents not only CSS but also JavaScript and HTML.

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)
