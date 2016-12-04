import HelloWorld from '../components/HelloWorld.html';

const component = new HelloWorld({
  target: document.querySelector( '.hello-world' ),
  data: {
    name: 'World',
  },
});

export default component;