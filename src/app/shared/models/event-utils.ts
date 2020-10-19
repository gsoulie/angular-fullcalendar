import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

/**
 *
 * JEU DE DONNEES INITIAL DU SCHEDULER
 *
 * TODO : L'initialiser avec les données provenant
 * des webservices
 *
 * Les events "display: 'background'" sont les events permettant de "griser" une plage horaire (ex : plage de midi)
 */
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: '20RC01',
    start: TODAY_STR + 'T09:00:00',
    end: TODAY_STR + 'T11:30:00',
    extendedProps: { client: 'Royal Canin'}
  },
  {
    id: createEventId(),
    title: '20RC01',
    start: new Date('2020-09-28T14:30:00'),
    end: new Date('2020-09-28T15:30:00')
  },
  {
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T14:00:00',
    display: 'background'
  },
  {
    start: new Date('2020-09-21T12:00:00'),
    end: new Date('2020-09-21T14:00:00'),
    display: 'background'
  },
  {
    start: new Date('2020-09-22T12:00:00'),
    end: new Date('2020-09-22T14:00:00'),
    display: 'background'
  },
  {
    start: new Date('2020-09-23T12:00:00'),
    end: new Date('2020-09-23T14:00:00'),
    display: 'background'
  },
  {
    start: new Date('2020-09-24T12:00:00'),
    end: new Date('2020-09-24T14:00:00'),
    display: 'background'
  },
  {
    start: new Date('2020-09-25T12:00:00'),
    end: new Date('2020-09-25T14:00:00'),
    display: 'background'
  },
];

export function createEventId() {
  return String(eventGuid++);
}
