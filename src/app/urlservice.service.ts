import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlserviceService {

  url: any = "http://localhost/8000"
  

  noothan: any = [
                      {'fname': 'Noothan', 'lname': 'dbasbddjh', 'empid': '456', 'num': 23423 },
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'fdsf', 'lname': 'sh', 'empid': '897', 'num': 23423 }];
  constructor() { }

}
