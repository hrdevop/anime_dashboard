import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnime } from '../dashboard.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({ required: true }) animeData!: IAnime
  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();

  onView(url: string) {
    this.redirect.emit(url)
  }
}
