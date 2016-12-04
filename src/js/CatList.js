import CatList from '../components/CatList.html';

const CatListComponent = new CatList({
  target: document.querySelector('.cat-list'),
  data: {
    cats: [
      {
        name: 'Bella',
      },
      {
        name: 'Tiger',
      },
      {
        name: 'Chloe',
      },
      {
        name: 'Shadow',
      },
      {
        name: 'Luna',
      },
      {
        name: 'Oreo',
      },
    ],
  },
});

export default CatListComponent;
