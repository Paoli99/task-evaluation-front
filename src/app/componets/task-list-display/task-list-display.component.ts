import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list-display.component.html',
  styleUrls: ['./task-list-display.component.css']
})
export class TaskListDisplayComponent {
  tasks: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Error loading task list';
        this.isLoading = false;
      }
    );
  }
}
