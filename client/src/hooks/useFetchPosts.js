import { useEffect, useState } from "react";
import fetchUtil from "../utils/fetch";

async function getEventDetails(eventId, fields) {
  const eventURL = new URL(`/api/event/${eventId}`, window.location.origin);
  eventURL.search = fields
    .map(function (el, idx) {
      return "fields[]=" + el;
    })
    .join("&");
  const val = await fetchUtil.getRequest(eventURL);
  return val.data;
}

const useFetchPosts = (club_username) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedEvents = [];
      const clubEventsURL = new URL(
        `/api/events/${club_username}`,
        window.location.origin
      );
      const eventList = (await fetchUtil.getRequest(clubEventsURL)).data;
      for (const eventId of eventList) {
        const eventDetails = await getEventDetails(eventId, [
          "title",
          "body_preview",
        ]);
        fetchedEvents.push({ ...eventDetails, id: eventId });
      }
      setEvents(fetchedEvents);
    })();
  }, []);
  return events;
};

export default useFetchPosts;
