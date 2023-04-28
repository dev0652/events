import {PageTitle} from "components/PageTitle/PageTitle";
import { EventBoard } from "components/EventBoard/EventBoard";
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="Title" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
