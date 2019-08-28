import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Card } from '../../../shared/models/card.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  form: FormGroup;
  @Input() searchReasult: Card[];
  @Output() query = new EventEmitter<any>();
  @Output() card = new EventEmitter<any>();
  selectedPreviewCard: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      query: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    });
  }

  onAddCard(card: Card) {
    this.card.emit(card);
  }

  onSubmit() {
    this.query.emit(this.form.getRawValue());
    this.selectedPreviewCard = null;
  }

  selectedCard(code: string) {
    this.selectedPreviewCard = code;
  }
}
