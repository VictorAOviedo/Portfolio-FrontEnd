import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoSService } from 'src/app/service/proyecto-s.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  pro : Proyecto = null;

  constructor(private proyectoS: ProyectoSService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data =>{
      this.pro = data;
    }, err =>{
      alert('Error al modificar proyecto');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.pro).subscribe(data =>{
      alert("Proyecto actualizado")
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar proyecto');
      this.router.navigate(['']);
    })
  }

}
