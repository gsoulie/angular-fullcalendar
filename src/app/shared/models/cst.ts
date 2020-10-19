import { Injectable } from '@angular/core';
@Injectable()

export class Cst {
  public static WebServices = {
    url: 'https://toto',
    method: {
      getFavorites: '/GetFavorites',
      getActivity: '/GetActivity'
    }
  };
}
