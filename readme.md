# Scroll-spy 

![scroll-spy demo](/assets/scroll-spy-demo.webp)

Implementing scroll-spy using IntersectionObserver. This module is implemented in pure JavaScript with added exports for react using hook API.

This module is useful for implementing ScrollSpy menus.

## Limitations

Implementing scroll-spy using IntersectionObserver comes with benefits that all the heavy lifting is done by browser. All the modern browser supports this natively. But it has few caveats as well

- Behavior is unknown if the multiple headers shares the same title and ids
- If there is large gap between adjacent headers, then on page refresh initial state is undefined

