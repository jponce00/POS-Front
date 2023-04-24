import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Alertas para tipo satisfactorio:
  success(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonColor: 'rgb(210, 155, 253)',
      width: 430
    });
  }

  // Alerta para advertencias:
  warn(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonColor: 'rgb(210, 155, 253)',
      width: 430
    });
  }

  // Alerta para errores:
  error(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonColor: 'rgb(210, 155, 253)',
      width: 430
    });
  }
}
