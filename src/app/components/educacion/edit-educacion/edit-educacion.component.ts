import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionSService } from 'src/app/service/educacion-s.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educ : Educacion = null;

  constructor(private educacionS: EducacionSService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(data =>{
      this.educ = data;
    }, err =>{
      alert('Error al modificar educacion');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educ).subscribe(data =>{
      alert('Educacion actualizada')
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar educacion');
      this.router.navigate(['']);
    })
  }

}
