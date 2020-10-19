import { IEventData } from './../interfaces/event';
import { Cst } from '../models/cst';
import { ApiHelperService } from './api-helper.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  public quickEvents: IEventData[] = [
    {id: '20RC02', title: '20RC02', duration: 60, extendedProps: { client: 'Royal Canin'},
    data: '{"title": "20RC02", "duration": "01:00", "extendedProps": { "client": "Royal Canin"}}'},
    {id: 'MAPI',  title: 'MAPI', duration: 60, extendedProps: { client: ''},
     data: '{"title": "MAPI", "duration": "01:00", "extendedProps": { "client": ""}}'},
    {id: '20KAL02',  title: '20KAL02', duration: 180, extendedProps: { client: 'Kalya'},
    data: '{"title": "20KAL02", "duration": "03:00", "extendedProps": { "client": "Kalya"}}'},
    {id: 'INTER',  title: 'INTER', duration: 60, extendedProps: { client: ''},
    data: '{"title": "INTER", "duration": "01:00", "extendedProps": { "client": ""}}'}
  ];

  public advancedEvents: IEventData[] = [
    {id: '20RC02', title: '20RC02', duration: 60, extendedProps: { client: 'Royal Canin'},
    data: '{"title": "20RC02", "duration": "01:00", "extendedProps": { "client": "Royal Canin"}}'},
    {id: 'MAPI',  title: 'MAPI', duration: 60, extendedProps: { client: ''},
     data: '{"title": "MAPI", "duration": "01:00", "extendedProps": { "client": ""}}'},
    {id: '20KAL02',  title: '20KAL02', duration: 180, extendedProps: { client: 'Kalya'},
    data: '{"title": "20KAL02", "duration": "03:00", "extendedProps": { "client": "Kalya"}}'},
    {id: 'INTER',  title: 'INTER', duration: 60, extendedProps: { client: ''},
    data: '{"title": "INTER", "duration": "01:00", "extendedProps": { "client": ""}}'},
    {id: '20RC02', title: '20RC02', duration: 60, extendedProps: { client: 'Royal Canin'},
    data: '{"title": "20RC02", "duration": "01:00", "extendedProps": { "client": "Royal Canin"}}'},
    {id: 'MAPI',  title: 'MAPI', duration: 60, extendedProps: { client: ''},
     data: '{"title": "MAPI", "duration": "01:00", "extendedProps": { "client": ""}}'},
    {id: '20KAL02',  title: '20KAL02', duration: 180, extendedProps: { client: 'Kalya'},
    data: '{"title": "20KAL02", "duration": "03:00", "extendedProps": { "client": "Kalya"}}'},
    {id: 'INTER',  title: 'INTER', duration: 60, extendedProps: { client: ''},
    data: '{"title": "INTER", "duration": "01:00", "extendedProps": { "client": ""}}'}
  ];
  constructor(private apiHelper: ApiHelperService) { }

  /**
   * Exemple de listing de données
   */
  fetchData(userId = '') {
    const parameters = {
      UserId: userId
    };

    return this.apiHelper.requestApi({ action: Cst.WebServices.method.getActivity, method: 'get', datas: parameters});
  }
}
