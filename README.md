![NPM version](https://img.shields.io/npm/v/emitter.svg?style=flat)

## emitter 

Fork of [Will Wen Gunn's emitter](https://github.com/iwillwen/node-emitter) built with latest build tools.

### Installation
```bash
$ npm install emitter
```

### Example
```js
import { EventEmitter, Promise } from 'emitter'

// Extend a object
let obj = { /* ... */ }
EventEmitter.extend(obj)

// Create a new emitter
let emitter = new EventEmitter()

// Define a class extend from Promise or EventEmitter
class Machine extends Promise {
  // ...
}
```

### API

- emitter.Promise()
- emitter.EventEmitter()



---