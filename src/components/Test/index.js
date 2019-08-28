import { useContext } from 'react';
import { Context } from '../../context';

const Test = () => {
  const tasks = useContext(Context);
  console.log('test ......!', tasks);
  return null;
};

export default Test;
