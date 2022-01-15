import { useEffect, useState } from 'react';
import { createScrollSpy } from './create-scroll-spy';

export const createScrollSpyFactory = (options: IntersectionObserverInit) => {
  const { observe, onIntersectionChange, clean } = createScrollSpy(options);

  return (url: string) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
      observe(url);

      onIntersectionChange(url, (isActive: boolean) => setActive(isActive));
      return () => clean();
    }, [url]);

    return isActive;
  };
};
