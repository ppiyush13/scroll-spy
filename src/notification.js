class Notifier {
    constructor(handler) {
        this.handler = handler;
        this.previousValue = undefined;
        this.currentValue = false;
    }

    update(value) {
        this.previousValue = this.currentValue;
        this.currentValue = value;
    }

    notify() {
        if(this.previousValue !== this.currentValue) {
            this.handler(this.currentValue);
        }
    }
}

export default class Notification {
    notifierMap = {};

    /* register notifier for given id */
    for(id, handler) {
        this.notifierMap[id] = new Notifier(handler);
    }

    update(id, value) {
        const notifier = this.notifierMap[id];
        notifier.update(value);
    }

    reset() {
        Object.values(this.notifierMap)
            .forEach(notifier => notifier.update(false))
    }

    flush() {
        Object.values(this.notifierMap)
            .forEach(notifier => notifier.notify())
    }

    destroy() {
        this.notifierMap = null;
    }
}
