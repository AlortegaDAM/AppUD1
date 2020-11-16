import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedorForm:FormGroup;
  proveedor:any;
  nombre:any;
  cif:any;
  direccion:any;
  cp:any;
  localidad:any;
  provincia:any;
  telefono:any;
  email:any;
  contacto:any;

  constructor(private pf:FormBuilder, private ProveedorService:ProveedoresService) { }

  ngOnInit() {
    this.proveedorForm= this.pf.group({
      nombre:['', Validators.required],
      cif:['', Validators.required],
      direccion:['', [Validators.required, Validators.minLength(10)]],
      cp:['', Validators.required],
      localidad:['', Validators.required],
      provincia:['', Validators.required],
      telefono:['', Validators.required],
      email:['', Validators.required],
      contacto:['', Validators.required],
    });
    this.onChanges();
  }
  onChanges():void{
      this.proveedorForm.valueChanges.subscribe(valor=>{
      this.nombre=valor.nombre;
      this.cif=valor.cif;
      this.direccion= valor.direccion;
      this.cp= valor.cp;
      this.localidad=valor.localidad;
      this.provincia=valor.provincia;
      this.telefono= valor.telefono;
      this.email= valor.email;
      this.contacto= valor.contacto;

    });

  }

  onSubmit() {
    this.proveedor= this.saveProveedor();
    this.ProveedorService.postProveedores(this.proveedor).subscribe(newpres =>{})
    this.proveedorForm.reset();
  }
  saveProveedor(){
    const saveProveedor= {
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value, 
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value, 
      contacto: this.proveedorForm.get('contacto').value };
      return saveProveedor;
}

}