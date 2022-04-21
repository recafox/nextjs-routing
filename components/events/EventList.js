import EventItem from "./EventItem";
import styles from "./event-list.module.css";

const EventList = ({ events, ...props }) => {
  return (
    <ul className={styles.list}>
      {events.map((event, id) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
