// 2694. Event Emitter
// Solved
// Medium
// Companies
// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

// Example 1:

// Input:
// actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"],
// values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
// Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
// Explanation:
// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
// Example 2:

// Input:
// actions = ["EventEmitter", "subscribe", "emit", "emit"],
// values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
// Output: [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]
// Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.

// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const eventListener = { callback };
    this.events[eventName].push(eventListener);

    return {
      unsubscribe: () => {
        const index = this.events[eventName].indexOf(eventListener);
        if (index > -1) {
          this.events[eventName].splice(index, 1);
          return undefined;
        }
      },
    };
  }

  emit(eventName, args = []) {
    const eventListeners = this.events[eventName];
    if (!eventListeners) {
      return [];
    }

    return eventListeners.map((eventListener) => {
      return eventListener.callback(...args);
    });
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
