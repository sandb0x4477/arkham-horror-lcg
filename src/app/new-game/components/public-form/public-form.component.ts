import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-public-form',
  templateUrl: './public-form.component.html',
  styleUrls: ['./public-form.component.scss']
})
export class PublicFormComponent implements OnInit {
  form: FormGroup;
  @Input() id: number;
  @Output() command = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      deckNo: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
    });
  }

  onSubmit() {
    const payload = {
      commandId: 'fetchPublicDeck',
      value: this.form.value.deckNo,
      id: this.id,
    };
    this.command.emit(payload);
    // this.selectedPreviewCard = null;
    // this.selectedCard = '';
  }

}
