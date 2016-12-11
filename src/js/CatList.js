import CatList from '../components/CatList.html';

const CatListComponent = new CatList({
  target: document.querySelector('.cat-list'),

  data: {
    count: 0,
    newCat: '',
    cats: [
      {
        name: 'Tom',
      },
      {
        name: 'Oggy',
      },
      {
        name: 'Sylvester',
      },
      {
        name: 'Garfield',
      },
    ],
  },
});

export default CatListComponent;
