import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import css from './Event.module.css';

import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.small} />
        {location}
      </p>

      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.small} />
        {speaker}
      </p>

      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.small} />
        {formattedStart}
      </p>

      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.small} />
        {duration}
      </p>

      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
