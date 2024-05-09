import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='page home-page m-0 p-0'>
      <section id='hero'>
        <div className='container hero-container'>
          <div className='row pt-5'>
            <div className='pt-5 col-xl-7 col-md-9 col-sm-12'>
              <h1>
                Elevate Life
                <br />
                with Style.
              </h1>
              <p>
                Explore a curated blend of style and purpose at THE LIFESTYLED,{' '}
                <br />
                where every post is a step towards a more inspired and elevated
                life.
              </p>
              <button className='btn btn-primary'>
                Read Blog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
