import {Component, OnInit} from '@angular/core';
import {MediaItemsService} from "../media-items.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{

  mediaItems : any[] = [];

  constructor(private mediaItemService: MediaItemsService,
              private activatedRoute: ActivatedRoute) {
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem);
    this.mediaItems = this.mediaItemService.get();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramMap => {
      // do mapping
    });
    this.mediaItems = this.mediaItemService.get();
  }

}
