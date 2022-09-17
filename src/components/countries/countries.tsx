import React, { useEffect } from 'react';

import './countries.scss';

import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Loading } from '../loading/loading';

import sad from '../../images/sad.png';

export const Countries: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.countries);
  const { value } = useTypedSelector(state => state.liveSearch);

  const { fetchCountries } = useActions()
  const { turnOnModal } = useActions()

  const filteredCountries = data.filter(country => {
    return country.Country.toLowerCase().includes(value.toLowerCase());
  })

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
        <img src={sad} alt="sad" className="countries__error-sad" />
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
      {filteredCountries.map(country =>
        <div key={country.ID} className="countries__item" onClick={() => {
          turnOnModal(
            country.Country,
            country.TotalConfirmed,
            country.TotalDeaths,
            country.TotalRecovered,
          )
        }}>
          <p className="countries__item-num">{filteredCountries.indexOf(country) + 1}</p>
          <p className="countries__item-name">{country.Country}</p>
          <p className="countries__item-confirmed">{country.TotalConfirmed}</p>
        </div>
      )}
    </div>
  );
}