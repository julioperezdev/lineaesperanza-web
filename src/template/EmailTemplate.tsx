import * as React from 'react';
import { FormData } from '@/model/FormData';

export const EmailTemplate: React.FC<Readonly<FormData>> = (form) => (
  <div>
    <br />
    <p>nombre: {form.name }</p>
    <p>email: {form.email }</p>
    <p>edad: {form.age }</p>
    <p>género: {form.gender }</p>
    <p>teléfono: {form.phoneAreaCode} {form.phoneNumber}</p>
    <p>país: {form.country }</p>
    <p>motivo: {form.motive }</p>
    <p>hábitos: {form.habits }</p>
    
  </div>
);
