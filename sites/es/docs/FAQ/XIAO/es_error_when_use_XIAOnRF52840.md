---
description: Seeed Studio Round Display para XIAO-FAQ
title: ¿Por qué obtengo un error cuando uso XIAO nRF52840 (Sense)?
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/error_when_use_XIAOnRF52840
last_update:
  date: 6/30/2023
  author: cheng.tang
---
Al usar el contenido de este tutorial, pueden ocurrir dos tipos diferentes de problemas para el XIAO nRF52840.

1. Problemas de compatibilidad entre nRF52840 y la biblioteca TFT.

  Si estás usando la biblioteca TFT, compilas y subes sin ningún error, muy fluido. Pero cuando lo estás mostrando, encuentras que no hay imagen. Entonces puedes haber encontrado un problema de compatibilidad entre nRF52840 y la biblioteca TFT. Esto significa que solo puedes reemplazar XIAO o usar la biblioteca Arduino GFX para terminar la imagen.

2. Error de compilación causado por elegir la placa de desarrollo incorrecta.

Si estás teniendo problemas con el proceso de compilación. El mensaje de error usualmente es sobre un error de SPI, por ejemplo `'SPI_X' was not declared in this scope`
. Entonces significa que estás eligiendo el tipo incorrecto de placa de desarrollo. Para usar todo este tutorial, necesitas usar la versión **no-mbed** del XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>