import React from 'react';

const List = ({data}) => {
  const Birthdays = data.map(birthday=>{
    return <article key={birthday.id} className='person'>
      <img src={birthday.image} alt='' />
    <div>
      <h4>name:{birthday.name}</h4>
      <p>age:{birthday.age} years</p>
    </div>
    </article>
  })
  return (
    <>
      {Birthdays}
    </>
  );
};

export default List;
