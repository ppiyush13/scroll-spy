import { useEffect, useState } from 'react';
import createScrollSpy from '.';

export default (options) => {
    const { observe, onIntersectionChange, disconnect } = createScrollSpy(options);
    return [
        url => {
            const [isActive, setActive] = useState(false);

            useEffect(() => {
                observe(url);

                onIntersectionChange(url, (isActive) => setActive(isActive));
            }, [url]);

            return isActive;
        },

        /* cleanup function */
        disconnect
    ];
};
