import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personas: Persona[] = [];
  @ViewChild('personaForm') personaForm?: NgForm;

  agregarPersona() {
    if (this.personaForm?.valid) {
      const nombre = this.personaForm.value.nombre.charAt(0).toUpperCase() + this.personaForm.value.nombre.slice(1);
      const apellido = this.personaForm.value.apellido.charAt(0).toUpperCase() + this.personaForm.value.apellido.slice(1);
      this.personas.push({ nombre, apellido });
      this.personas.sort((a, b) => a.apellido.localeCompare(b.apellido)); 
      this.personaForm.resetForm();
    }
  }
}