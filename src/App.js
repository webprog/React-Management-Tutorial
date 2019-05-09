import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
    {
      'id' : 1,
      'image' : 'https://placeimg.com/64/64/1',
      'name' : '홍길동',
      'birthday' : '910222',
      'gender' : '남자',
      'job' : '대학생'
    },
    {
      'id' : 2,
      'image' : 'https://placeimg.com/64/64/2',
      'name' : '홍길동',
      'birthday' : '910222',
      'gender' : '남자',
      'job' : '대학생'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' : '홍길동',
      'birthday' : '910222',
      'gender' : '남자',
      'job' : '대학생'
    }
];

function App() {
  return (
    {
      customers.(c => {
        return (
          <Customer data={c}/>
        );
      });
    }
    
  );
}

export default App;
