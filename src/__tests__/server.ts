// src/server.js
import { createServer } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = 'investment';
      this.post(
        '/questions/submit',
        () => {
          return require('./fixtures/questionSubmitResponse.json');
        },
        { timing: 1000 }
      );
    }
  });
}
