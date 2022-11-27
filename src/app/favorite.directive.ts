import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  @HostBinding('class.is-favourite') isFavourite = true;
  @HostBinding('class.is-favourite-hovering') isHovering = false;

  @HostListener('mouseenter') onMouseEnter (){
    this.isHovering = true;
  }
  @HostListener('mouseleave') onMouseLeave (){
    this.isHovering = false;
  }

  @Input() set appFavorite(value: boolean) {
    this.isFavourite = value;
  }

  constructor() { }

}
