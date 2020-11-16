import { Component, OnInit } from '@angular/core';
import { PresupuestosService} from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos:any[]=[];

  public load:Boolean=false;

  constructor(private presupuestosService:PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(presupuestos=>{

      for(const id$ in presupuestos){
        const p=presupuestos[id$];
        p.id$=id$;
        this.presupuestos.push(presupuestos[id$]);
      }
    })

   }

  ngOnInit(): void {setTimeout(()=>{
    this.load=true;

    }, 500);
  }

  eliminarPresupuesto(id$){
    var x = confirm("¿Seguro que desea eliminar el presupuesto?"); if (x){
    this.presupuestosService.delPresupuesto(id$).subscribe(res=>{
      this.presupuestos = [];
      this.presupuestosService.getPresupuestos().subscribe(presupuestos=>{
        for(const id$ in presupuestos){
          const p=presupuestos[id$];
          p.id$=id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      })
    })
      ;}else{return false;}

  }
}

