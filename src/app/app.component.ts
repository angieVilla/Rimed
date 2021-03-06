//import { Component } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export class LinkGroup {
  label: string
  links: Link[]
}

export class Link {
  label: string
  path: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})



export class AppComponent {
  title = 'Rimed';
  public groups: LinkGroup[] = [{       
    label: 'Especialidades',
    links: [{
      label: 'Fisioterapia',
      path: '/especialistas/Fisioterapia',
    }, 
    {
      label: 'Fisiatria',
      path: '/especialistas/Fisiatria',
    }, {
      label: 'Terapia Ocupacional',
      path: '/especialistas/Terapia Ocupacional',
    }],
  }]
}
