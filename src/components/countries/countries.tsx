import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActon';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import Loading from '../loading/loading';

import './countries.scss';
import sad from '../../images/sad.png';
 
const Countries: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.countries);
  const { fetchCountries } = useActions()

  useEffect(() => {
    fetchCountries()
  }, [])

  if (loading) {
    return (
      <div className="countries">
        <Loading />
      </div>
    )
  }
  if (error) {
    return (
      <div className="countries">
        <img src={sad} alt="sad" className="countries__error-sad"/>
        <p className="countries__error">{error}</p>
      </div>
    )
  }

  return (
    <div className="countries">
      <div className="countries__item countries__item_head">
        <p className="countries__item-num">№</p>
        <p className="countries__item-name">Country</p>
        <p className="countries__item-confirmed">Total Confirmed</p>
      </div>
      {data.map(country =>
        <div key={country.ID} className="countries__item">
          <p className="countries__item-num">{data.indexOf(country) + 1}</p>
          <p className="countries__item-name">{country.Country}</p>
          <p className="countries__item-confirmed">{country.TotalConfirmed}</p>
        </div>
      )}
    </div>
  );
}

export default Countries;