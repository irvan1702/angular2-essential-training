import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopUpComponent {
  @Input() mediaItem;
  @Output() close = new EventEmitter();

  isShow() {
    return this.mediaItem ? "" : "hidden";
  }

  onClose() {
    this.close.emit();
  }
  navigate(forward) {
    var index = this.mediaItem.imagePath[0] + (forward ? 1 : -1);
    //if(index >= 0 && index < this.mediaItem.imagePath.length){
    //this.selectedImage = this.datasource[index];	
    // }
  }
}
