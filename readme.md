# Scroll Spy

Scroll Spy is a "technique" that's used to keep track of the content of the user's viewport and highlight the corresponding navigation item.

## Demo

https://ppiyush13.github.io/scroll-spy/

## Features

- Scroll Spy is a headless low level utility which provides currently visible section of the web page.
- Zero dependency. Implemented using **IntersectionObserver**.
- Can be consumed in Vanilla JS and React.
- This module can be used to facilitate many use cases including:
  - Highlighting currently visible webpage section in the menu.
  - Capturing analytics about the section which the user is currently accessing.

## Install

Try on your machine by first installing all the dependencies

```shell
npm install
```

and then start local server

```shell
npm start
```

## Limitations

Implementing Scroll Spy using IntersectionObserver comes with the benefit that all the heavy lifting is done by the browser. All modern browsers support this natively. But this comes with a few caveats:

- The behavior is unknown if multiple headers share same title and id.
- If there is a large gap between adjacent headers, then on page refresh initial state is undefined.

## License

Zero BSD © Piyush Lodaya
