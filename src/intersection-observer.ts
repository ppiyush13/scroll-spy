/**
 * exporting instance of IntersectionObserver if window is defined, in case of browser execution
 * otherwise return dummy IntersectionObserver function with needed functions
 * This is done to support SSR
 */

export const IntersectionObserver = (() => {
  if (typeof window === 'undefined') {
    return class {
      observe() {}
      disconnect() {}
    };
  } else {
    return window.IntersectionObserver;
  }
})();
