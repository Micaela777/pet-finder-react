import React from "react";
import { HowItWorksArrowImg } from "ui/images/how-it-works-arrow";
import * as css from "./how-it-works.css"

function HowItWorksPage(){

    return(
        <div className={css.style}>
            <HowItWorksArrowImg />
            <div className={css.container}>
                <h2 className={css.text}>
                    Pet Finder App es una WebApp para mascotas perdidas que permite a los dueños reportar la 
                    desaparición de su mascota llenando un formulario con su nombre, foto y ubicación. Cuando alguien ve una 
                    mascota que coincide con la información, puede reportar el avistamiento indicando lugar y detalles. La webapp 
                    envía notificaciones automáticas al dueño cuando se registra un avistamiento cercano, permitiéndoles seguir la 
                    posible ubicación de su mascota.
                </h2>
            </div>
        </div>
    )
}

export { HowItWorksPage }