import { Injectable } from '@angular/core';

interface IWord {
  key: string,
  meaning: string
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provider', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'},
  ];
  constructor() { }

  search(word: string): string{
    if(!word){
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if(w){
      return w.meaning;
    }
    return 'Không tìm thấy kết quả!!!';
  }
}
