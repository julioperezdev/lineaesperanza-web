'use client'
import { useForm } from "react-hook-form";
import { FormData } from "@/model/FormData";
import { countryList } from "./CountryList"
import styles from './Form.module.css'
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


export default function Form() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [gender, setGender] = useState<string | null>(null);

  async function sendForm(data: FormData) {
    try {
      return await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
  function converFormData(data: FormData): FormData {
    data.name = updateCharacterIfEmptyString(data.name);
    let newFormData: FormData = {
      name: updateCharacterIfEmptyString(data.name),
      email: updateCharacterIfEmptyString(data.email),
      age: updateCharacterIfEmptyString(data.age),
      gender: updateCharacterIfEmptyString(gender!),
      phoneAreaCode: updateCharacterIfEmptyString(data.phoneAreaCode),
      phoneNumber: updateCharacterIfEmptyString(data.phoneNumber),
      country: updateCharacterIfEmptyString(data.country),
      motive: updateCharacterIfEmptyString(data.motive),
      habits: updateCharacterIfEmptyString(data.habits),
    }
    return newFormData;
  }
  function updateCharacterIfEmptyString(value: string): string {
    return value === null || value.length === 0 || value.trim().length === 0 ? "-" : value;
  }
  const onSubmit = handleSubmit(async (data) => {
    const dataValidated = converFormData(data);
    const response = await sendForm(dataValidated);
    if (response.ok) {
      reset();
      toast.success('¡Nos comunicaremos con usted lo antes posible!')
    } else {
      toast.error('Ops... vuelve enviar el formulario mas tarde')
    }
  });

  return (
    <div className={styles.formComponent}>
      <Toaster />
      <h1>Formulario de atención psicológica gratuita</h1>
      <p>¡Somos Psicólogos/as cristianos/as y queremos escucharte, <strong>hablando tu mismo lenguaje</strong> de manera online!</p>
      <form onSubmit={onSubmit} className={styles.formBase}>
        <div className={styles.principalFields}>
          <div className={styles.requiredFields}>
            <input type="text" placeholder='Nombre' {...register("name", { required: true, pattern: /^[A-Za-z ]+$/i })} />
            {errors.name && <span>Es necesario el nombre</span>}
            <input type="email" placeholder='Email' {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i })} />
            {errors.email && <span>Tu email es necesario para comunicarnos</span>}
            <input type="text" placeholder='Edad' {...register("age", { required: true, minLength: 1, maxLength: 3, pattern: /^[0-9]/i })} />
            {errors.age && <span>Incluir la edad con un máximo de 3 dígitos</span>}
          </div>
          <div className={styles.principalOptionalFields}>
            <div className={styles.genderBase}>
              <p className={gender == 'Masculino' ? styles.genderSelected : styles.baseGender} onClick={() => setGender('Masculino')}>Masculino</p>
              <p className={gender == 'Femenino' ? styles.genderSelected : styles.baseGender} onClick={() => setGender('Femenino')}>Femenino</p>
            </div>
            <div>
              <input type="text" pattern="[0-9]{0,5}" placeholder='Cod. Área' {...register("phoneAreaCode")} />
              <input type="text" pattern="[0-9]{0,15}" placeholder='Teléfono celular' {...register("phoneNumber")} />
            </div>
            <div>
              <select className={styles.countriesList} {...register("country")}>
                {countryList.map(country => (
                  <option
                    value={country.name}
                    key={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.textAreaBase}>
          <div>
            <p>¿Cuál es el motivo de su consulta?</p>
            <textarea placeholder='Motivo de consulta' {...register("motive")} />
          </div>
          <div>
            <p> Describe cómo te sientes emocionalmente y los cambios importantes en los hábitos personales que has notado recientemente</p>
            <textarea placeholder='Ejemplo: Alimentación, Sueño, Aseo personal, Concentración, Vitalidad'{...register("habits")} />
          </div>
        </div>
        <button id="formSubmit" type="submit" className={styles.submitButton} >ENVIAR</button>
      </form>
    </div>
  )
}