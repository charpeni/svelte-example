import Counter from '../components/Counter.html';

const CounterComponent = new Counter({
  target: document.querySelector('.counter'),
});

CounterComponent.observe('count', (count) => {
  console.log(`the actual count is ${count}`);
});

export default CounterComponent;
