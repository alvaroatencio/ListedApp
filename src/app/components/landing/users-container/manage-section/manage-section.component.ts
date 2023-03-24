import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.css']
})
export class ManageSectionComponent {
  @Output() registerClicked = new EventEmitter<void>();

  onClick() {
    this.registerClicked.emit();
  }
}
