import React, { useEffect } from 'react';
import './PhasesOfCollege.css';

function PhasesOfCollege() {
  const itemList = [
    {
      title: 'brewbakes',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/brewbakes.jpeg',
    },
    {
      title: 'dandiya',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/library.jpeg',
    },
    {
      title: 'holi',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/holi.jpeg',
    },
    {
      title: 'library',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/library.jpeg',
    },
    {
      title: 'seminar',
      img:
        'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/kshitij/src/Assets/college_phases/seminar.jpeg',
    },
  ];

  return (
    <div className='college-phases'>
      <div className='items'>
        {itemList.map((item, index) => {
          console.log(index);
          if (index === Math.floor(itemList.length / 2))
            return (
              <>
                <h1 className='textCard'>Phases of College Life</h1>
                <div className='item'>
                  <img
                    className='phases-image'
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </>
            );
          return (
            <div className='item'>
              <img className='phases-image' src={item.img} alt={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhasesOfCollege;
