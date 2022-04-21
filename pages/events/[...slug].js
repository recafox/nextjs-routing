import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const checkIfFilterValid = (year, month) => {
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return false;
  }

  return true;
};

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (!checkIfFilterValid(numYear, numMonth)) {
    return <p>Invalid Filter</p>;
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || !events.length) {
    return <p>No event found</p>;
  }

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default FilteredEventsPage;
