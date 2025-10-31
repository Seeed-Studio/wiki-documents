---
description: Grove Base Shield para Photon
title: Grove Base Shield para Photon
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Base_Shield_for_Photon
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_product_view_1200_s.jpg)

<!-- **Grove Base Shield para Photon** es una placa shield de expansión que incorpora puerto [Grove](/es/Grove_System) sobre el cual puedes construir aplicaciones más potentes e inteligentes con módulos funcionales Grove mucho más ricos y rentables. Tiene tres puertos digitales, dos puertos analógicos, dos puertos I<sup>2</sup>C y un puerto UART. Es un tipo de placa plug-and-play que acelerará dramáticamente tu proceso de prototipado. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57)

##  Características
---
*   Interfaz Grove

*   Conecta a módulos Grove masivos y de bajo costo

*   Puertos I<sup>2</sup>C, UART integrados

##  Ideas de aplicación
---
*   Aplicaciones IoT compactas como router inteligente.

##  Especificaciones
---
<table>
<tr>
<td>Puertos Grove</td>
<td>3 puertos digitales<br/>2 puertos analógicos<br/>2 puertos I<sup>2</sup>C<br/>1 puerto UART.</td>
</tr>
<tr>
<td>Dimensiones</td>
<td>53 × 53 mm</td>
</tr>
<tr>
<td>Peso</td>
<td>18g</td>
</tr>
</table>

##  Descripción del Hardware
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_component_diagram_annotated_1200_s.jpg)

###  **Lista de partes**

<table>
<tr>
<th>Nombre de las partes</th>
<th>Cantidad</th>
</tr>
<tr>
<td>Grove Base Shield para Photon</td>
<td>1PC</td>
</tr>
</table>

##  Primeros Pasos
---
**Nota:** En este caso te mostramos un entorno de desarrollo general.

<!-- ###  Material requerido

*   [Particle Photon](https://www.seeedstudio.com/depot/Particle-Photon-p-2527.html) × 1

*   Cable USB (tipo A a micro tipo-B) × 1
*   Una PC o Mac

*   Grove Base Shield para Photon × 1

*   [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38) × 1 -->

###  Zumbando

1. Consulta [aquí](https://docs.particle.io/guide/getting-started/connect/core/) para conectar a un dispositivo (PC o Mac).

:::note
1. Recomendamos que elijas **node.js v4.2.3 LTS** especialmente para usuarios de Windows 10.
2. Puede que necesites un paso más después de ejecutar el comando **particle setup**, que es, conectar tu dispositivo (PC o Mac) a un AP wi-fi cuyo nombre contenga **Photon**, especialmente en Windows 10.
:::

2. Usa [Web IDE](https://build.particle.io/) para tu proyecto. Inicia sesión con tu cuenta y elige tu dispositivo (haz clic en el penúltimo icono en la columna izquierda).

:::note
Recomendamos que elijas [Web IDE](https://build.particle.io/) para compilar o flashear tu código a Photon, lo cual es mucho más rápido que usar Particle Dev, si tu conectividad a internet no es tan buena.
:::

3. Conéctalos como sigue:

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_demo_conneciton_1200_S.jpg)

4. Ahora puedes copiar el siguiente código al Web IDE y flashearlo a Photon haciendo clic en un icono similar a un rayo (el 1er icono en la columna izquierda).

:::note
Copia el código solo a la pestaña llamada _**filename.ino**_.
:::

```
/*
   Buzzing
   Use digital pin D4
   This example code is in the public domain.
   by xiaohe
  */
int led1 = D4; //set D4 as output

void setup() {
    pinMode(led1, OUTPUT);
}

void loop() {
    // enable buzzing
    digitalWrite(led1, HIGH);

    // We'll leave it on for 1 second...
    delay(1000);

    // Then we'll turn it off...
    digitalWrite(led1, LOW);

    // Wait 1 second...
    delay(1000);

    // And it will repeat!
}
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Archivos de esquemas](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip)

<!-- *   [Grove_System](/es/Grove_System) -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>