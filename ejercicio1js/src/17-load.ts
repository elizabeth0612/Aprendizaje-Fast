import __ from 'lodash';
const data =[
  {
    username: 'nico',
    role:'admin'
  },
  {
    username: 'valentina',
    role:'seller'
  },
  {
    username: 'santiago',
    role:'customer'
  },
  {
    username: 'paula',
    role:'customer'
  }

  ];
  const rta = __.groupBy(data,(item)=>item.role);
  console.log(rta);
