type Handler = (value: boolean) => void;

class Notifier {
  handler: Handler;
  previousValue: boolean | undefined;
  currentValue: boolean;

  constructor(handler: Handler) {
    this.handler = handler;
    this.previousValue = undefined;
    this.currentValue = false;
  }

  update(value: boolean) {
    this.previousValue = this.currentValue;
    this.currentValue = value;
  }

  notify() {
    if (this.previousValue !== this.currentValue) {
      this.handler(this.currentValue);
    }
  }
}

export class Notification {
  notifierMap: Record<string, Notifier> = {};

  /* register notifier for given id */
  for(id: string, handler: Handler) {
    this.notifierMap[id] = new Notifier(handler);
  }

  update(id: string, value: boolean) {
    const notifier = this.notifierMap[id];
    notifier.update(value);
  }

  reset() {
    Object.values(this.notifierMap).forEach((notifier) =>
      notifier.update(false),
    );
  }

  flush() {
    Object.values(this.notifierMap).forEach((notifier) => notifier.notify());
  }

  clean() {
    this.notifierMap = {};
  }
}
