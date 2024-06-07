import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>({});
  dataInfo: Observable<any>;

  getData(): any {
    this.http
      .get('https://api.github.com/users/Onur-Ardic')
      .subscribe((data) => {
        this.dataSubject.next(data);
      });
  }

  constructor(private http: HttpClient) {
    this.dataInfo = this.dataSubject.asObservable();
  }
}
