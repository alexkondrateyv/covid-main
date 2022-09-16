import React from 'react';
import './modal.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useActions } from '../../hooks/useAction';

import icon_confirmed from '../../images/confirmed.svg';
import icon_death from '../../images/death.svg';
import icon_recovered from '../../images/recovered.svg';

export const Modal: React.FC = () => {
  const { isActive, country, confirmed, death, recovered } = useTypedSelector(state => state.modal)
  const { turnOffModal } = useActions()

  if (isActive) {
    return (
      <div className='bg'>
        <div className="modal">
          <div className="modal__head">
            {country}
          </div>
          <div className="modal__row">
            <div className="modal__row-info">
              <img src={icon_confirmed} alt="confirmed" width="30" height="30" className="modal__row-info-img" />
              <p className="modal__row-info-text">Total Confirmed</p>
            </div>
            <p className="modal__row-num">{confirmed}</p>
          </div>
          <div className="modal__row">
            <div className="modal__row-info">
              <img src={icon_death} alt="death" width="30" height="30" className="modal__row-info-img" />
              <p className="modal__row-info-text">Total Deaths</p>
            </div>
            <p className="modal__row-num">{death}</p>
          </div>
          <div className="modal__row">
            <div className="modal__row-info">
              <img src={icon_recovered} alt="recovered" width="30" height="30" className="modal__row-info-img" />
              <p className="modal__row-info-text">Total Recovered</p>
            </div>
            <p className="modal__row-num">{recovered}</p>
          </div>
          <button type="button" onClick={() => turnOffModal()} className="modal__btn">Ok</button>
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  };
}