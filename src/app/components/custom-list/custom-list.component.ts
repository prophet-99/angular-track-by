import { Component, OnInit } from '@angular/core';

import { TaskItemType, getTasks$, storeTask$ } from '../../store/tasks.store';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styles: ``,
})
export class CustomListComponent implements OnInit {
  public taskItems: TaskItemType[] = [];

  ngOnInit(): void {
    getTasks$().subscribe((tasks) => (this.taskItems = tasks));
  }

  private _getLastId(): number {
    const lastId =
      this.taskItems.length > 0
        ? this.taskItems[this.taskItems.length - 1].id
        : 0;
    return lastId;
  }

  public addItem(inputRef: HTMLInputElement): void {
    storeTask$({
      id: this._getLastId() + 1,
      name: inputRef.value,
    }).subscribe((tasks) => (this.taskItems = tasks));

    inputRef.value = '';
  }

  public fnTrack(idx: number, item: TaskItemType): number {
    return item.id;
  }
}
