import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  placeholderSearch: string = 'Search';
  statusSearch: boolean = false;
  keyword: string = '';
  constructor() { }


}
