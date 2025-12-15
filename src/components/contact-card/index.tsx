import React, { useState } from "react";
import { ContactButton } from "ui/buttons/contact-button";
import * as css from "./index.css"

function ContactCard(){

  return (
    <form className={css.style}>
      <div className={css.container}>
        <input  className={css.name} type="text" name="name" autoComplete="name" placeholder="Nombre"/>
        <input className={css.email}  type="text" name="email" autoComplete="email" placeholder="Email"/>
        <textarea className={css.message} name="message" placeholder="Mensaje"></textarea>
      </div>
      <ContactButton>Enviar</ContactButton>
    </form>
  )
}

export { ContactCard }
