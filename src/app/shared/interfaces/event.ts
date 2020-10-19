export interface IEventData {
  id: string;
  title: string;
  duration: number;
  data: string; // reprend tous les attributs de EventData sous format chaîne pour les éléments drag and drop
  extendedProps: IExtendedProps;
}
export interface IExtendedProps {
  client: string;
}
