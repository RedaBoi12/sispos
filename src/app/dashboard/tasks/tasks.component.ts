import { AddtaskComponent } from './addtask/addtask.component';
import { ApiService } from 'src/app/services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/interfaces/task';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})


export class TasksComponent implements OnInit {
  @Input('cdkDragData') data: any;

  completeTasks: any;
  incompleteTasks: any;

  constructor(public API: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.API.getcompleteTasks().subscribe((res) => { this.completeTasks = res });
    this.API.getincompleteTasks().subscribe((res) => { this.incompleteTasks = res });
  }

  drop(event: CdkDragDrop<Task[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    if (event.previousContainer.id != event.container.id) {
      this.API.editTaskCompletion(event.container.data[event.currentIndex]['id']).subscribe((res) => { console.log('Change Affected!') });
    }
  }

  deleteIncomplete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.API.deleteCompleteTasks().subscribe(() => { });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Incomplete tasks were deleted!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  // CREATES CATEGS
  openCreate() {
    this.dialog.open(AddtaskComponent, {
      width: '50%',
      height: '40%'
    });
  }

  changeCompletion(id: number, completion: boolean) {
    if (completion) {
      this.API.editTaskCompletion(id);
    }
    else this.API.editTaskCompletion(id);
  }
}
