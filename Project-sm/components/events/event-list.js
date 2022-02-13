import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => {
        const { id, title, location, date, image } = event;
        return (
          <EventItem
            key={id}
            id={id}
            title={title}
            location={location}
            date={date}
            image={image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
