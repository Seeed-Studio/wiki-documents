---
description: Usa SenseCraft HMI para diseñar y desplegar paneles sin código para dispositivos de pantalla de papel electrónico compatibles de Seeed.
title: Trabajar con SenseCraft HMI
keywords:
  - pantalla de papel electrónico
  - SenseCraft HMI
  - panel sin código
  - reTerminal
  - XIAO ePaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 06/15/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/EE04_with_hmi/
updatedAt: '2026-06-15'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la plataforma de diseño de interfaces sin código de Seeed Studio para dispositivos de pantalla de papel electrónico. Puedes diseñar paneles, galerías de imágenes, calendarios, páginas RSS, páginas de contenido web y otras pantallas de información siempre encendidas en un navegador, y luego desplegarlas en un dispositivo compatible a través de Wi‑Fi.

Este Wiki es una guía de aplicaciones de pantalla de papel electrónico. Explica el camino más corto desde un dispositivo de papel electrónico de Seeed hasta una página funcional de SenseCraft HMI, y usa una placa de pantalla de papel electrónico más una pantalla de papel electrónico como ejemplo de configuración de hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Abrir SenseCraft HMI</font></span></strong>
    </a>
</div><br />

## Cuándo usar esta guía

Usa esta guía cuando quieras usar SenseCraft HMI con un producto de papel electrónico compatible de Seeed y completar rápidamente el siguiente flujo de trabajo:

1. Confirmar o flashear el firmware de SenseCraft HMI.
2. Conectar el dispositivo a Wi‑Fi.
3. Añadir el dispositivo a tu espacio de trabajo de SenseCraft HMI.
4. Desplegar tu primera página en la pantalla de papel electrónico.

Para el manual completo de la plataforma, incluyendo configuración de cuenta, detalles del editor, plantillas, widgets de datos y notas de versión, consulta la [documentación oficial de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/overview/).

## Antes de empezar

Prepara los siguientes elementos antes de usar SenseCraft HMI:

- Un dispositivo de pantalla de papel electrónico compatible de Seeed.
- Una cuenta de SenseCraft. Puedes crear una desde la página de inicio de sesión de [SenseCraft HMI](https://sensecraft.seeed.cc/hmi).
- Una red Wi‑Fi de 2,4 GHz.
- Un cable de datos USB‑C si tu dispositivo necesita flasheo de firmware.
- Un ordenador que ejecute un navegador que admita el flasheo por puerto serie desde la herramienta web de SenseCraft HMI.

:::tip
Los diferentes productos de papel electrónico usan distintas compilaciones de firmware HMI. Siempre selecciona el firmware que coincida con tu dispositivo exacto y tamaño de pantalla.
:::

## Documentación oficial de SenseCraft HMI

SenseCraft HMI tiene un sitio de documentación dedicado. Usa este Wiki para el flujo de inicio rápido de pantalla de papel electrónico y usa la documentación oficial para las instrucciones completas de la plataforma.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Tema</th>
      <th>Úsalo cuando necesites</th>
      <th>Enlace</th>
    </tr>
    <tr>
      <td>Descripción general</td>
      <td>Comprender qué es SenseCraft HMI y qué puede hacer.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir descripción general</a></td>
    </tr>
    <tr>
      <td>Hardware compatible</td>
      <td>Comprobar la lista actual de compatibilidad de dispositivos y pantallas.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/" target="_blank" rel="noopener noreferrer">Abrir hardware compatible</a></td>
    </tr>
    <tr>
      <td>Primeros pasos</td>
      <td>Seguir el flujo oficial de cuenta, firmware, conexión y despliegue.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/" target="_blank" rel="noopener noreferrer">Abrir primeros pasos</a></td>
    </tr>
    <tr>
      <td>Espacio de trabajo y lienzo</td>
      <td>Aprender el diseño del editor, widgets, fuentes de datos y flujo de creación de páginas.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Abrir guía del espacio de trabajo</a></td>
    </tr>
    <tr>
      <td>Generación con IA</td>
      <td>Generar imágenes o diseños de página con indicaciones de texto.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Abrir generación con IA</a></td>
    </tr>
    <tr>
      <td>Notas de versión</td>
      <td>Comprobar las últimas actualizaciones de la plataforma y del firmware.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/release_note/" target="_blank" rel="noopener noreferrer">Abrir notas de versión</a></td>
    </tr>
  </table>
</div>

## Ejemplo de configuración de hardware

Los pasos siguientes usan la **XIAO ePaper Display Board (ESP32-S3) - EE04** con la **pantalla de papel electrónico Spectra 6 de 7,3"** como ejemplo. Otros dispositivos de papel electrónico compatibles de Seeed siguen el mismo flujo de plataforma, pero la compilación de firmware, el tamaño de pantalla y el montaje de hardware pueden ser diferentes.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board (ESP32-S3) - EE04</th>
      <th>Pantalla de papel electrónico Spectra 6 de 7,3"</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
Este ejemplo no es una lista de compatibilidad. Para la matriz actual de hardware y firmware compatibles, consulta siempre la [página de hardware compatible de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/).
:::

## Paso 1: confirmar o flashear el firmware HMI

El primer paso es asegurarte de que tu dispositivo de papel electrónico esté ejecutando el firmware de SenseCraft HMI.

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

La reTerminal E Serie está diseñada para funcionar con SenseCraft HMI desde fábrica. Enciende el dispositivo y continúa con el [Paso 2: Conectar el dispositivo a Wi‑Fi](#paso-2-conectar-el-dispositivo-a-wi-fi).

Si anteriormente flasheaste otro firmware, abre la [página de dispositivo de SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device), elige el modelo de tu dispositivo y sigue las instrucciones de firmware en pantalla.

:::tip
Usa **Full Flash** solo cuando quieras borrar la información de Wi‑Fi almacenada, los datos de emparejamiento y el contenido existente del dispositivo.
:::

</TabItem>
<TabItem value="display-board" label="Placa de pantalla de papel electrónico + pantalla">

Para una placa de pantalla más una pantalla de papel electrónico separada, flashea el firmware HMI que coincida con tu placa y panel.

**Paso 1.** Inicia sesión en [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) y luego abre **Tools** desde el menú superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/256.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Selecciona la entrada de firmware que coincida con tu pantalla. En este ejemplo, selecciona la entrada **7.3" Full-Color Display 800 x 480**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Selecciona la versión de firmware más reciente disponible para tu hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4.** Conecta la placa a tu ordenador con un cable de datos USB‑C y luego haz clic en **Flash**.

Después de hacer clic en **Flash**, el navegador mostrará una ventana de selección de puerto serie. Elige el puerto que pertenece a tu dispositivo.

:::tip
Si no aparece ningún puerto, pulsa el botón **RESET** de la placa e inténtalo de nuevo. Confirma también que tu cable USB‑C admite transferencia de datos.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5.** Espera a que la pantalla de papel electrónico se actualice y muestre el código QR de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Paso 2: conectar el dispositivo a Wi‑Fi

Después de que el dispositivo esté ejecutando el firmware HMI, conéctalo a tu red Wi‑Fi local.

**Paso 1.** Conecta tu teléfono u ordenador al punto de acceso Wi‑Fi que se muestra en la pantalla de papel electrónico. Este punto de acceso temporal no requiere contraseña.

El nombre del punto de acceso depende del tipo de dispositivo. Para una placa de pantalla de papel electrónico con una pantalla separada, el nombre puede aparecer como `ePaper DIY Kit-xxxx`. Para un dispositivo reTerminal E Serie, el nombre puede aparecer como `reTerminal E100x-xxxx`. En ambos casos, `xxxx` normalmente representa los últimos cuatro caracteres de la dirección MAC.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de pantalla de papel electrónico + pantalla</th>
      <th>reTerminal E Serie</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:360, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:360, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>Ejemplo de nombre de AP: <code>ePaper DIY Kit-xxxx</code></td>
      <td>Ejemplo de nombre de AP: <code>reTerminal E100x-xxxx</code></td>
    </tr>
  </table>
</div>

**Paso 2.** Escanea el código QR en la pantalla de papel electrónico. Si la página de configuración no se abre automáticamente, abre un navegador y visita `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Paso 3.** Selecciona tu red Wi‑Fi local, introduce la contraseña y haz clic en **Connect**.

:::tip
Utiliza una red Wi‑Fi de 2,4 GHz. Muchos dispositivos basados en ESP32-S3 no se conectan a redes Wi‑Fi de 5 GHz.
:::

**Paso 4.** Espera hasta que el dispositivo se una a la red y muestre un código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Paso 3: Añadir el dispositivo a SenseCraft HMI

Después de configurar el Wi‑Fi, añade el dispositivo a tu espacio de trabajo de SenseCraft HMI.

**Paso 1.** Abre la página **Device** y haz clic en **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Introduce un nombre de dispositivo y el código de emparejamiento que se muestra en la pantalla de ePaper, luego haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Confirma que el dispositivo aparece en tu Panel.

## Paso 4: Implementar tu primera página

Una vez que el dispositivo esté emparejado, puedes implementar contenido desde SenseCraft HMI a la pantalla de ePaper.

La forma más rápida de empezar es usar una plantilla existente o una de las herramientas de creación integradas. Para el flujo detallado del editor, sigue la [guía oficial de introducción](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/).

<div class="table-center">
  <table align="center">
    <tr>
      <th>Feature</th>
      <th>Para qué sirve</th>
      <th>Guía oficial</th>
    </tr>
    <tr>
      <td>Canvas</td>
      <td>Crear una página a partir de texto, imágenes, widgets, formas y fuentes de datos.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Abrir guía</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>Crear imágenes o diseños a partir de indicaciones de texto.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Abrir guía</a></td>
    </tr>
    <tr>
      <td>Gallery</td>
      <td>Mostrar imágenes cargadas o contenido tipo presentación de diapositivas.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir documentación</a></td>
    </tr>
    <tr>
      <td>RSS</td>
      <td>Mostrar titulares o contenido de artículos desde un feed RSS.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir documentación</a></td>
    </tr>
    <tr>
      <td>Web Content</td>
      <td>Renderizar una página web o un panel de información basado en web en la pantalla de ePaper.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir documentación</a></td>
    </tr>
  </table>
</div>

El siguiente ejemplo muestra una página de SenseCraft HMI implementada en una pantalla de ePaper de 7,3".

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="SenseCraft HMI page on a 7.3 inch ePaper display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado de ejemplo en una pantalla de ePaper de 7,3"</em></p>
</div>

## Solución de problemas

### P1: ¿Por qué mi ordenador no detecta el dispositivo durante el flasheo?

Esto normalmente significa que el navegador no puede acceder al puerto serie, que el cable solo admite carga o que la placa no ha entrado en el estado USB correcto.

- Utiliza un cable USB-C que admita transferencia de datos.
- Conecta el dispositivo directamente al ordenador en lugar de a través de un hub USB.
- Pulsa el botón **RESET** y vuelve a abrir la ventana de selección de puerto.
- Prueba con un navegador basado en Chromium si tu navegador actual no admite el flasheo serie vía web.

### P2: ¿Por qué el dispositivo no se conecta a la red Wi‑Fi?

La causa más común es usar una banda Wi‑Fi no compatible o introducir una contraseña incorrecta.

- Utiliza una red Wi‑Fi de 2,4 GHz.
- Vuelve a introducir cuidadosamente la contraseña de Wi‑Fi.
- Acerca el dispositivo al router durante la configuración.
- Si el dispositivo se configuró anteriormente, utiliza **Full Flash** solo cuando quieras borrar la configuración de red guardada y empezar de nuevo.

### P3: ¿Por qué la pantalla no muestra el código QR de configuración esperado después del flasheo?

Es posible que el firmware no coincida con la pantalla conectada o que la pantalla no esté conectada correctamente.

- Vuelve a comprobar el modelo del dispositivo, el tamaño de la pantalla y la entrada de firmware en la página de SenseCraft HMI Tools.
- Apaga la placa antes de volver a conectar el cable flexible de ePaper.
- Confirma que la dirección del cable flexible y el tipo de conector coinciden con tu hardware.
- Flashea de nuevo el firmware correspondiente y espera a que termine la actualización de la pantalla de ePaper.

### P4: ¿Por qué la página implementada se ve diferente a la vista previa del editor?

Los diferentes paneles de ePaper tienen distinta resolución, capacidad de color, comportamiento de escala de grises y características de actualización.

- Crea la página con la misma resolución que la pantalla de destino.
- Evita texto muy pequeño si la resolución de la pantalla es baja.
- Utiliza colores de alto contraste para pantallas monocromas o en escala de grises.
- Consulta la documentación oficial para obtener detalles sobre el editor y la implementación.

## Recursos

- [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi)
- [Documentación oficial de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/overview/)
- [Hardware compatible con SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)
- [Introducción a SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)
- [Notas de lanzamiento de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/release_note/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
