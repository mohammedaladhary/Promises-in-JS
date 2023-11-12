import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  textInput: string = '';
  textSize: number = 16; // Default font size
  warningMessage: string = '';

  onInputChange() {
    this.warningMessage = ''; // Reset the warning message
  }

  increaseTextSize() {
    this.textSize = Math.min(this.textSize + 1, 30);
  }

  decreaseTextSize() {
    this.textSize = Math.max(this.textSize - 1, 1);
  }
}
