import {Component, EventEmitter, Input, Output} from '@angular/core';
import {config} from 'rxjs';
import {FloatInputConfig} from '../../model/float-input.config';

@Component({
  selector: 'app-float-input',
  imports: [],
  templateUrl: './float-input.html',
  standalone: true,
  styleUrl: './float-input.scss',
})
export class FloatInput {
  @Input({required:false}) config: FloatInputConfig = {
    type:'text', defaultValue:'non défini', label:'default label'
  }

  @Output() onClickEvent: EventEmitter<FloatInputConfig> = new EventEmitter<FloatInputConfig>();

  protected data: any = {};

  // no usages

  onClick(data: MouseEvent): void {
    this.data = data;
  }
}
