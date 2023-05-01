import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';
// import css from './Event.module.css';
import { Card, EventName, Info, Chip } from './Event.styled';

// #############################

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.small} />
        {location}
      </Info>

      <Info>
        <FaUserAlt size={iconSize.small} />
        {speaker}
      </Info>

      <Info>
        <FaCalendarAlt size={iconSize.small} />
        {formattedStart}
      </Info>

      <Info>
        <FaClock size={iconSize.small} />
        {duration}
      </Info>

      <Chip eventType={type}>{type}</Chip>
    </Card>

    // <div className={css.event}>
    //   <h2 className={css.title}>{name}</h2>
    //   <Info>
    //     <FaMapMarkerAlt size={iconSize.small} />
    //     {location}
    //   </p>

    //   <Info>
    //     <FaUserAlt size={iconSize.small} />
    //     {speaker}
    //   </p>

    //   <Info>
    //     <FaCalendarAlt size={iconSize.small} />
    //     {formattedStart}
    //   </p>

    //   <Info>
    //     <FaClock size={iconSize.small} />
    //     {duration}
    //   </p>

    //   <span className={`${css.chip} ${css[type]}`}>{type}</span>
    // </div>
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
