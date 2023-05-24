import React from 'react';
import ServicesImages from '../ServicesImages';
import '../../App.css';
import FooterContainer from '../../containers/footer';

export default function Services() {
  return (
    <>
      <div className="services">
        <h1 className="ser-2">
          SERVICES
        </h1>
        <h2 className="ser-1">
          Welcome to Ababil Yoga where we prioritize
          <br />
          on mental health and healthy living
        </h2>
      </div>

      <ServicesImages />
      <FooterContainer />
      <div className="rights">
        <p>
          COPYRIGHT © 2023 YOGA WITH ABABILYOGA, LLC ·
          TERMS & CONDITIONS ·
          PRIVACY POLICY ·
          NEWSLETTER ·
          SUPPORT
        </p>
      </div>
    </>
  );
}
