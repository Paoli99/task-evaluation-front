import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Task {
  id: number;
  name: string;
  dueDate: Date;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log('Fetching tasks...');
    return this.http.get<Task[]>('http://localhost:3000/tasks');
    
  }
}