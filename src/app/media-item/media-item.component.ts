import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();

  onWatch() {
    console.log("watching...");
  }

  onRemove() {
    console.log("Removing...");
    this.delete.emit(this.mediaItem);
  }

  onFavourite() {

  }
}
