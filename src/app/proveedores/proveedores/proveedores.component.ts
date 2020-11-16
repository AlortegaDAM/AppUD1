import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[]=[];

  public load:Boolean=false;

  constructor(private proveedoresService:ProveedoresService) { 
    this.proveedoresService.getProveedores().subscribe(proveedores=>{

      for(const id$ in proveedores){
        const p=proveedores[id$];
        p.id$=id$;
        this.proveedores.push(proveedores[id$]);
      }
    })

  }

  ngOnInit(): void {

    setTimeout(()=>{
    this.load=true;

    }, 500);
  }

  eliminarProveedor(id$){

    var x = confirm("¿Seguro que desea eliminar el proveedor?"); if (x){ this.proveedoresService.delProveedor(id$).subscribe(res=>{
      this.proveedores = [];
      this.proveedoresService.getProveedores().subscribe(proveedores=>{
        for(const id$ in proveedores){
          const p=proveedores[id$];
          p.id$=id$;
          this.proveedores.push(proveedores[id$]);
        }
      })
    }); }else return false; 
    
  }
      ;}

