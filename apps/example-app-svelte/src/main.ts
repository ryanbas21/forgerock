import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'example-app-svelte',
  },
});

export default app;
