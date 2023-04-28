import upcomingEvents from '../upcoming-events.json';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';

export const App = () => {
  return (
    <>
      <PageTitle text="Title" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
