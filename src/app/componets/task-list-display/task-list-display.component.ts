import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list-display.component.html',
  styleUrl: './task-list-display.component.css'
})
export class TaskListDisplayComponent {
  tasks: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe(
      (data) => {
        console.log('Data received from API:', data);
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}
