import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { suscripcionData } from '../interface';
import { BackendConexionService } from '../backend-conexion.service';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {

  suscriptores!: suscripcionData[];

  inputIDEliminar: string = "";
  inputIDBuscar: string = "";

  suscripcionForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,3}')]],
    emailCheck: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,3}')]],
    telefono: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['', [Validators.required, Validators.minLength(8)]],
    notificacionesOp: [false],
    terminosYcondiciones: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder,
              private servicio: ServicioService,
              private servicioBackend: BackendConexionService){

  }

  get verificacionEmails(){
    return (this.suscripcionForm.controls.emailCheck.invalid && this.suscripcionForm.controls.emailCheck.touched) || this.checkEmails();
  }

  checkEmails(){
    if(this.suscripcionForm.get('email')?.value !== this.suscripcionForm.get('emailCheck')?.value)
      return true
    return false;
  }

  buscarSuscriptores(){

    this.servicioBackend.buscarSuscripciones().subscribe(
      {
        next: (resp: suscripcionData[]) => {
          console.log("buscarSuscripciones", resp);
          this.suscriptores = resp;
        },
        error: err => {
          console.log("erro:", err);
        }
      }
    );
  }

  buscarSuscriptor(id: string){
    let itTonumber = Number(id);
    this.servicioBackend.buscarSuscripcionPorId(itTonumber)
      .subscribe({
        next: (resp: suscripcionData) => {
          console.log("Se encontró el suscriptor en DB!",resp);
          alert(`EXITO!: El suscriptor cuyo ID es ${id} se llama ${resp.nombre} ${resp.apellido}`);
        },
        error: err => {
          alert(`ERROR: No se ha podido encontrar la suscripción o el usuario con el ID ${id} no existe o no es válido.`);
          console.log(err)
        },
      });
  }

  eliminarSuscriptor(id: string){
    let itTonumber = Number(id);
    this.servicioBackend.borrarUnaSuscripcion(itTonumber)
      .subscribe({
        next: (resp: suscripcionData) => {
          console.log("Se eliminó el suscriptor exitosamente",resp);
          alert("Se eliminó la suscripción correctamente!");
        },
        error: err => {
          alert(`ERROR: No se ha podido eliminar la suscripción o el usuario con el ID ${id} no existe o no es válido.`);
          console.log(err)
        },
      });
  }

  enviarDatos(){

    if(this.suscripcionForm.invalid){
      return Object.values(this.suscripcionForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }

    //crea un objeto con propiedades predefinidas en caso que alguna de las propiedades tenga valor null para pasar un objeto de tipo suscripcionData
    let obj:suscripcionData = Object.assign({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      emailCheck: "",
      pass: "",
      notificacionesOp: false,
      terminosYcondiciones: false
    },this.suscripcionForm.value);

    this.servicio.recepcionSuscripcion(obj);  //servicio de Ejercicio "crear formulario reactivo"

    this.servicioBackend.crearSuscripcion(obj)
                      .subscribe(
                        {
                          next: (resp: suscripcionData) => { 
                            console.log("next:", resp);
                            if(resp.id)
                              alert(`Se ha suscripto exitosamente!`);
                          },
                          error: err => {
                            console.log("Ha ocurrido un problema en el sistema, por favor vuelva a intentar suscribirse.", err);
                            alert("ERROR: Ha ocurrido un problema en el sistema, por favor vuelva a intentar suscribirse.");
                          },
                          complete: () => console.log("finalizó la suscripción de 'crearSuscripcion'")
                        }
                      );
  }


}
