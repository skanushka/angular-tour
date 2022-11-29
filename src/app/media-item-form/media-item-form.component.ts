import {Component, Inject, OnInit} from '@angular/core';
import {MediaItemsService} from "../media-items.service";
import {lookupListToken} from "../providers";

@Component({
  selector: 'app-media-item-form',
  templateUrl: '../media-item-form/media-item-form.component.html',
  styleUrls: ['../media-item-form/media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  constructor(private mediaItemService: MediaItemsService,
              @Inject(lookupListToken) private lookupLists: any) {
    console.log(lookupLists);
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.mediaItemService.add(value);
  }
}
