'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/model/FormData";
import { countryList } from "./CountryList"
import styles from './Form.module.css'
import { useState } from "react";


export default function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);
  const [gender, setGender] = useState<string | null>(null);

  function selectGender(gender: string) {

  }
  async function onSubmitFunctionality(e: Event) {
    e.preventDefault();
    //se debe obtener el objeto del formulario
    //se envia al servidor
    const response = await fetch('http://localhost:3001/api/form', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);

    //validar que da OK
    //si es OK, mostrar algun popup o alternativa interesante
  }

  return (
    <div className={styles.formComponent}>
      <h1>Formulario para obtener consulta psicológica</h1>
      <p>¡Queremos escucharte y ayudarte, <strong>hablando tu mismo lenguaje</strong> de manera online con servicio terapéutico de calidad!</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBase}>
        <div className={styles.principalFields}>
          <div className={styles.requiredFields}>
            <input type="text" placeholder='nombre' {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="email" placeholder='email' {...register("email")} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="text" placeholder='edad' {...register("age", { required: true, pattern: /^[0-9]{1,3}/i })} />
          </div>
          <div className={styles.principalOptionalFields}>
            <div className={styles.genderBase}>
              <p onClick={() => setGender('M')}>masculino</p>
              <p onClick={() => setGender('F')}>femenino</p>
            </div>
            <div>
              <input type="text" pattern="[0-9]{1,5}" placeholder='Cod. Area' {...register("phoneAreaCode")} />
              <input type="text" pattern="[0-9]{1,5}" placeholder='Telefono celular' {...register("phoneNumber")} />
            </div>
            <div>
              <select className={styles.countriesList} {...register("country")}>
                {countryList.map(country => (
                  <option value={country.name} key={country.name}>{country.name + country.emoji}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.textAreaBase}>
          <div>
            <p>¿Cúal es el motivo de su consulta?</p>
            <textarea placeholder='motivo de consulta' {...register("motive")} />
          </div>
          <div>
            <p> Describe cómo te sientes emocionalmente y los cambios importantes en los hábitos personales que has notado recientemente</p>
            <textarea placeholder='Ejemplo: Alimentación, Sueño, Aseo personal, Concentración, Vitalidad'{...register("habits")} />
          </div>
        </div>
        <button type="submit" className={styles.submitButton} >ENVIAR</button>
      </form>
    </div>
  )
}