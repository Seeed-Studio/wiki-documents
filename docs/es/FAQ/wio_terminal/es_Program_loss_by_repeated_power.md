---
description: Wio Terminal - FAQ
title: Cómo evitar la pérdida del programa después de reiniciar Wio Terminal múltiples veces
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Program_loss_by_repeated_power
date: 1/31/2024
author: Seraphina
---


Si encuentras una situación donde el **Wio Terminal falla al arrancar correctamente después de múltiples reinicios**, por favor consulta el siguiente Wiki para una solución:

Durante el proceso de encendido/apagado, si el programa bootloader intenta acceder a la memoria flash antes de que el chip se haya estabilizado, puede resultar en una pérdida inesperada de datos. Esta situación puede prevenir que el programa de aplicación se inicie porque el bootloader falla al leer correctamente el código de aplicación o los datos almacenados en la memoria flash.

Para resolver este problema, recomendamos actualizar el bootloader a la siguiente versión para asegurar que solo acceda a la memoria flash después de que el chip se haya estabilizado. Por favor sigue los pasos a continuación para orientación:

**Paso 1:** Descarga el último Bootloader [aquí](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2)

**Paso 2:** Conecta el Seeeduino Wio Terminal a tu PC vía USB Type-C.

**Paso 3:** Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, por favor también ve [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#enter-bootloader)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Paso 4:** Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra el archivo descargado [`update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2) a la unidad `Arduino`.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/update-bootloader-version.png" /></div>


¡Ahora que has actualizado exitosamente tu Bootloader, siéntete libre de disfrutar usando tu Wio Terminal!