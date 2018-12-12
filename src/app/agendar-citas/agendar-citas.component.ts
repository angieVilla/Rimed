import { Component, OnInit } from '@angular/core';

export interface SelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.less']
})
export class AgendarCitasComponent implements OnInit {

  documentos: SelectOption[] = [
    {value: 'Cedula de ciudadania-0', viewValue: 'Cedula de ciudadania'},
    {value: 'Pasaporte-1', viewValue: 'Pasaporte'},
    {value: 'Tarjeta de identidad-2', viewValue: 'Tarjeta de identidad'},
    {value: 'Cedula de extranjeria-3', viewValue: 'Cedula de extranjeria'},
  ];

  
  especialistas: SelectOption[] = [
    {value: 'Fisioterapeuta-0', viewValue: 'Fisioterapeuta'},
    {value: 'Oncologo-1', viewValue: 'Oncologo'},
    {value: 'Terapia fisica-2', viewValue: 'Terapia fisica'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
