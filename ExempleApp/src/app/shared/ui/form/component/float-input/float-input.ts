import {Component, EventEmitter, Input, Output} from '@angular/core';
import {config} from 'rxjs';
import {FloatInputConfig} from '../../model/float-input.config';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-float-input',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './float-input.html',
  standalone: true,
  styleUrl: './float-input.scss',
})
export class FloatInput {
  @Input({required:true}) config!: FloatInputConfig;
}
