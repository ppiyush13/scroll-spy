/**
 * exporting instance of IntersectionObserver if window is defined, in case of browser execution
 * otherwise return dummy IntersectionObserver function with needed functions
 * This is done to support SSR
 */

export default (() => {
    if (typeof window === 'undefined') {
        return function () {
            return {
                observe: () => { },
                disconnect: () => { },
            }
        };
    }
    else {
        return window.IntersectionObserver;
    }
})();
