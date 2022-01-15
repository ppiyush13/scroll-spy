import { ScrollWindow } from './scroll-window';
import { Notification } from './notification';
import { IntersectionObserver } from './intersection-observer';

/**
 * createScrollSpy is hook-factory which returns useScrollSpy hook and cleanup functions
 */

export const createScrollSpy = (options: IntersectionObserverInit) => {
  /* create getSelector utility */
  const refList: string[] = [];
  const getSelector = (element: Element) => {
    for (let idx = 0; idx < refList.length; idx++) {
      if (element.matches(refList[idx])) return refList[idx];
    }
  };

  /* create scrollWindow and notification instances */
  const scrollWindow = new ScrollWindow();
  const notification = new Notification();

  /* create intersection observer instance */
  const observer = new IntersectionObserver((entries) => {
    /* update scrollWindow with new entries */
    entries.forEach((entry) => {
      const id = getSelector(entry.target);
      id && scrollWindow.update(id, entry.isIntersecting);
    });

    /* reset notification */
    notification.reset();

    /* get active id from scroll window and update notification */
    const currentActive = scrollWindow.getActive();
    currentActive && notification.update(currentActive, true);

    /* flush all notifications */
    notification.flush();
  }, options);

  return {
    /* add url to local refList, scrollWindow and observe */
    observe(url: string) {
      refList.push(url);
      scrollWindow.add(url);

      const element = document.querySelector(url);
      element && observer.observe(element);
    },

    /* on intersection change for element */
    onIntersectionChange(url: string, fn: (isActive: boolean) => void) {
      notification.for(url, (isActive) => fn(isActive));
    },

    /* cleanup function */
    clean() {
      observer.disconnect();
      scrollWindow.clean();
      notification.clean();
    },
  };
};

/*
Two reasons why implementing scrollSpy using intersection observer is a bad idea

1. What if two adjacent sections has large gap between them ? We should use intersectionRatios as compared to isIntersecting
2. What if two headers have same ids ? Use of intersection observer is based on configuring correct unique ids.

*/
