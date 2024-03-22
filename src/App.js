import React from 'react';
import Image from './photo.webp';

const IndexPage = (props) => {
  const { adventureText, routineText, imageAlt, imageSource, followText, ignoreText } = props;

  return (
    <div>
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '2px auto', backgroundColor: '#fff', borderRadius: '8px', padding: '0px' }}>
        <p style={{ marginLeft: '150px' }}>{adventureText}</p>
        <p style={{ marginLeft: '150px' }}>{routineText}</p>

        <img src={imageSource} alt={imageAlt} style={{ marginLeft:'150px', width: '500px', height: '250px', display: 'block', margin: '0px auto', borderRadius: '8px' }} />

        <div style={{ float: 'right', margin: '70px', marginTop: '10px',marginRight:'150px'}}>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgb(999, 100, 300)', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>{followText}</a>
          <a href="#" style={{ display: 'inline-block', padding: '10px 20px', marginRight: '10px', backgroundColor: 'rgb(219, 219, 238)', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>{ignoreText}</a>
        </div>
      </div>
    </div>
  );
};


export default IndexPage;

