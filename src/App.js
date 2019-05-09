import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'name' : '홍길동',
  'birthday' : '910222',
  'gender' : '남자',
  'job' : '대학생'
};

function App() {
  return (
    <Customer data={customer}/>
  );
}

export default App;
