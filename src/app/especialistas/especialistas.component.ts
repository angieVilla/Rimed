import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router'; //indica que route esta activa
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; //activa el dialog
import { DialogEspecialistasComponent } from '../dialog-especialistas/dialog-especialistas.component';



@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.less']
})
export class EspecialistasComponent {

  //PARA LA TABLA DE ESPECIALISTAS
  displayedColumns = ['id', 'name', 'title','specialty','progress','color'];
  dataSource: MatTableDataSource<UserData>;
  name : string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //FIN TABLA DE ESPECIALISTAS

  //DIALOG PERFIL ESP.
  animal: string;
  nameSp: string;


  constructor(private route: ActivatedRoute,public dialog: MatDialog) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    
    //Asignar el valor de name para que muestre en que ruta estamos
  
    this.route.params.subscribe(
      (params)=>{
        this.name = params.name; 
      }
    )     

   }

    /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }  

  //DIALOG
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEspecialistasComponent, {
     maxWidth: '60%',
     maxHeight:'560px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    title: TITLES[Math.round(Math.random() * (TITLES.length - 1))],
    specialty: SPECIALTIES[Math.round(Math.random() * (SPECIALTIES.length - 1))],
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const SPECIALTIES = ['Fisioterapia','Fisiatria','Terapia Ocupacional'];
const TITLES = ['Fisioterapeuta','Especialista en fisiatria','Especialista en Terapia Ocupacional'];

export interface UserData {
  id: string;
  name: string;
  title: string;
  specialty: string;
  progress: string;
  color: string;
}






