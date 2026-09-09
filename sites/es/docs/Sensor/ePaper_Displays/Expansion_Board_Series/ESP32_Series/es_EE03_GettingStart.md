---
description: Primeros pasos con la placa controladora EE03 de tinta electrónica de 10,3 pulgadas
title: Primeros pasos con EE03
keywords:
  - E-ink
  - Driver Board
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.webp
slug: /getting_started_with_ee03
sidebar_position: 2
sku: 100080566
last_update:
  date: 9/2/2026
  author: Nemo
createdAt: '2026-03-02'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/es/getting_started_with_ee03/
---

# Primeros pasos con la XIAO ePaper Display Board - EE03

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE03</th>
        <th>Pantalla ePaper monocroma de 10,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por **XIAO ESP32-S3 Plus**, la placa controladora de ePaper EE03 es compatible con la **pantalla ePaper monocroma de 10,3"**. Incorpora un conector de batería JST de 2,0 mm con interruptor de encendido, un CI de carga integrado y viene con un botón de reinicio y tres botones de usuario. Es ideal para proyectos de ePaper de bajo consumo, como marcos de fotos digitales y paneles de información.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **XIAO ESP32-S3 Plus integrado:** Funciona inmediatamente al conectarse a una pantalla ePaper compatible.
- **Compatibilidad dedicada con pantalla ePaper monocroma de 10,3":** Diseñada específicamente para pantallas ePaper de 10,3" con refresco de alta velocidad, lo que garantiza una configuración rápida y un funcionamiento estable.
- **Refresco de alta velocidad habilitado:** El control de temporización T-CON integrado garantiza un accionamiento de alta velocidad preciso, mientras que el SHT40 integrado proporciona medición de temperatura en tiempo real para la compensación de la forma de onda.
- **Conector BAT con interruptor:** Ofrece una conexión sencilla de la batería e integra un interruptor, lo que permite una gestión eficiente de la energía y ahorro de consumo.
- **Botones fáciles de usar:** Incluye 1 botón de reinicio y 3 botones programables por el usuario, lo que proporciona flexibilidad para acelerar proyectos y funciones personalizables.
- **Firmware SenseCraft HMI precargado:** Simplemente conéctalo y empieza a usarlo de inmediato con SenseCraft HMI, nuestra plataforma de diseño de interfaces sin código impulsada por IA. Elige entre plantillas variadas o crea interfaces mediante arrastrar y soltar (con asistencia opcional de IA) y despliega en la pantalla ePaper con solo unos clics.

### Especificaciones

| Parámetro | Descripción |
| :--- | :--- |
| **Procesador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | FPC de 40 pines 0,5 mm |
| **Conector de batería** | JST 2,0 mm |
| **Interruptor** | Encendido/Apagado de alimentación por batería |
| **Alimentación** | - Batería de litio de 3,7 V<br/>- USB Type-C |
| **Botón** | - 1x Botón de reinicio<br/>- 3x Botón de usuario |

### Aplicaciones

- **Lectores de libros electrónicos digitales:** Ofrecen una experiencia de lectura monocroma similar al papel con 16 niveles de escala de grises y un refresco rápido para cambios de página más fluidos y actualizaciones más receptivas.
- **Panel de control en tiempo real:** Muestra información en vivo como actualizaciones meteorológicas, calendarios, notificaciones clave y widgets de datos como consumo de energía, estado de sensores o KPIs.
- **Alertas de seguridad:** Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Panel de llegadas de transporte público:** Muestra de un vistazo horarios de llegada en tiempo real de autobuses/trenes, estado de rutas y avisos de servicio para el desplazamiento diario.

## Descripción general del hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentación y flasheo de firmware.
- **Conector FPC**: Para conectar la pantalla ePaper.
- **Botón de reinicio**: Para reiniciar la placa.
- **Botones de usuario**: Botones programables para la interacción del usuario.
- **Interruptor de encendido**: Controla el encendido/apagado de la batería.
- **Botón de arranque (Boot)**: Se utiliza para entrar en el modo bootloader.
- **LED indicadores**: Indicadores de estado para alimentación y carga.
- **Conector JST**: Conector JST de 2 pines y 2,0 mm para conectar la batería.

## Primeros pasos con SenseCraft HMI

Esta sección te guiará para conectar tu EE03 a la plataforma SenseCraft HMI, lo que te permitirá actualizar fácilmente el contenido de la pantalla de forma inalámbrica.

### Instalación del equipo

**Paso 1. Conectar la pantalla y la placa**
Conecta con cuidado el cable FPC de tu pantalla ePaper al conector de la placa controladora EE03. Asegúrate de que el mecanismo de bloqueo esté bien asegurado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.gif" style={{width:800, height:'auto'}}/></div>

**Paso 2. Encender**
Conecta la placa EE03 a una fuente de alimentación (ordenador o adaptador USB) utilizando un cable USB Type-C. Al encenderla, la pantalla se actualizará y mostrará una imagen de bienvenida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300,height:'auto'}}/></div>

**Paso 3. Entrar en el modo de configuración de red**
Después de la imagen de bienvenida, la pantalla se actualizará automáticamente para mostrar la interfaz de configuración de red. Esto indica que el dispositivo está listo para conectarse a Wi-Fi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.png" style={{width:300,height:'auto'}}/></div>


### Configuración de red

**Paso 4. Configurar Wi-Fi mediante el teléfono móvil**
Utiliza tu teléfono móvil para escanear el código QR que se muestra en la pantalla. Sigue las indicaciones en tu teléfono para introducir el SSID y la contraseña de tu red Wi-Fi local y conectar el EE03 a Internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Paso 5. Obtener el código de emparejamiento**
Una vez que la configuración de red se haya realizado correctamente, la pantalla se actualizará de nuevo y mostrará un **código de emparejamiento** único. Necesitarás este código para el siguiente paso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculación con la plataforma y actualización

**Paso 6. Vincular el dispositivo en SenseCraft HMI**
Ve a la [plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona "New Device". Introduce el código de emparejamiento que se muestra en tu pantalla de tinta electrónica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Paso 7. Crear y enviar una nueva interfaz**     
En la plataforma SenseCraft HMI, selecciona la plantilla adecuada para la pantalla de 10,3 pulgadas para crear una nueva interfaz o subir una imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.png" style={{width:500, height:'auto'}}/></div>

**Paso 8. Aplicar tus imágenes**
Una vez terminado, haz clic en el botón "Apply" y selecciona tu dispositivo EE03.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.png" style={{width:800, height:'auto'}}/></div>

**Paso 9. Mostrar en la pantalla**
Finalmente, el EE03 recibirá los datos y actualizará la pantalla de 10,3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.png" style={{width:300, height:'auto'}}/></div>


## Primeros pasos con Arduino

### Instalar la librería Seeed GFX2

:::tip
Esta librería tiene la misma función que la librería TFT y **no** es compatible con ella. Si has instalado la librería TFT u otras librerías de pantalla similares, desinstálalas primero.
:::

Descarga e instala la librería Seeed GFX2 desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

Después de descargar la librería, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la librería descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configurar y grabar el programa

Como se muestra en la imagen, navega hasta el ejemplo mediante este menú:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE03 → 10.3 Monochrome ePaper Display → 10_3_inch_Monochrome_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/8.png" style={{width:800, height:'auto'}}/></div>

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3 Plus** y **Tools** -> **Port** -> **Select the port your board is connected to**. 

Ten en cuenta que PSRAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Luego haz clic en **Upload** para cargar el código.
Ahora verás la respuesta en tu pantalla de epaper. A continuación se muestra el resultado del ejemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.png" style={{width:500, height:'auto'}}/></div>


## Solución de problemas

**P1: La pantalla no se actualiza después de encenderla.**
*   Comprueba si el cable FPC está correctamente insertado y bloqueado.
*   Asegúrate de que el cable USB Type-C proporciona suficiente energía.
*   Pulsa el botón Reset para reiniciar la placa.
*   Para usuarios de Arduino: asegúrate de que PSRAM está habilitado en **Tools** → **PSRAM** → **OPI PSRAM**.

**P2: La configuración de Wi-Fi falla.**
*   Asegúrate de que tu red Wi-Fi es de 2,4 GHz.
*   Comprueba si la contraseña de Wi-Fi se introdujo correctamente.

**P3: La pantalla se ve borrosa o tiene efecto fantasma.**
*   Esto puede ocurrir si la pantalla no se ha actualizado durante mucho tiempo o si la fuente de alimentación es inestable. Intenta actualizar la pantalla de nuevo a través de la plataforma HMI.

**P4: La pantalla emite un zumbido de alta frecuencia durante la actualización.**
*   Esto es normal en las pantallas ePaper. El circuito de accionamiento de alto voltaje produce un sonido audible durante el ciclo de actualización, especialmente en pantallas más grandes. No indica un fallo de hardware y se detendrá una vez que la actualización se haya completado.

**P5: El enlace del dispositivo SenseCraft HMI falla.**
*   Verifica que el Pair Code se haya introducido correctamente (distingue mayúsculas y minúsculas).
*   Asegúrate de que tu teléfono y el dispositivo estén en la misma red Wi-Fi de 2,4 GHz durante el enlace del dispositivo.
*   Si el dispositivo aparece como desconectado, pulsa el botón Reset e intenta enlazar el dispositivo de nuevo.

## Recursos
- **[PDF]** [Esquemático de Seeed Studio XIAO ePaper Display EE03](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [PCBA y SCH de Seeed Studio XIAO ePaper Display EE03](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
