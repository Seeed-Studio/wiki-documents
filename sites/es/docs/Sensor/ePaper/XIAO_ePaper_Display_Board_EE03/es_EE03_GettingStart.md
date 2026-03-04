---
description: Primeros pasos con la placa controladora E-ink EE03 de 10,3 pulgadas
title: Primeros pasos con la placa XIAO ePaper Display - EE03
keywords:
  - E-ink
  - Driver Board
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.jpg
slug: /getting_started_with_ee03
last_update:
  date: 2026-02-28
  author: Jackson.Li
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

## Introducción

Impulsada por **XIAO ESP32-S3 Plus**, la placa controladora ePaper EE03 es compatible con una **pantalla ePaper monocroma de 10,3"**. Incorpora un conector de batería JST de 2,0 mm con interruptor de encendido, CI de carga integrado y viene con un botón de reinicio y tres botones de usuario. Es ideal para proyectos ePaper de bajo consumo, como marcos de fotos digitales y paneles de información.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **XIAO ESP32-S3 Plus integrado:** Funciona inmediatamente al conectarse a una pantalla ePaper compatible.
- **Compatibilidad dedicada con pantalla ePaper monocroma de 10,3":** Diseñada específicamente para pantallas ePaper de 10,3" con refresco de alta velocidad, lo que garantiza una configuración rápida y un funcionamiento estable.
- **Refresco de alta velocidad habilitado:** El control de temporización T-CON integrado garantiza un accionamiento de alta velocidad preciso, mientras que el SHT40 integrado proporciona medición de temperatura en tiempo real para la compensación de la forma de onda.
- **Conector BAT con interruptor:** Ofrece una conexión sencilla de la batería e integra un interruptor, lo que permite una gestión eficiente de la energía y ahorro de consumo.
- **Botones fáciles de usar:** Incluye 1 botón de reinicio y 3 botones programables por el usuario, lo que ofrece flexibilidad para acelerar proyectos y funciones personalizables.
- **Firmware SenseCraft HMI pregrabado:** Solo tienes que conectarla y empezar a usar inmediatamente SenseCraft HMI, nuestra plataforma de diseño de interfaces sin código impulsada por IA. Elige entre abundantes plantillas o crea interfaces mediante arrastrar y soltar (con asistencia opcional de IA) y despliega en la pantalla ePaper con solo unos clics.

### Especificación

| Parámetro | Descripción |
| :--- | :--- |
| **Procesador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | FPC 40 pines 0,5 mm |
| **Conector de batería** | JST 2,0 mm |
| **Interruptor** | Encendido/Apagado de alimentación por batería |
| **Alimentación** | - Batería de litio 3,7 V<br/>- USB Type-C |
| **Botón** | - 1x botón de reinicio<br/>- 3x botón de usuario |

### Aplicaciones

- **Lectores de libros electrónicos digitales:** Ofrecen una experiencia de lectura monocroma similar al papel con escala de grises de 16 niveles y refresco rápido para cambios de página más fluidos y actualizaciones más receptivas.
- **Panel de control en tiempo real:** Muestra información en vivo como actualizaciones meteorológicas, calendarios, notificaciones clave y widgets de datos como consumo de energía, estado de sensores o KPI.
- **Alertas de seguridad:** Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puerta/ventana.
- **Panel de llegadas de transporte público:** Muestra en un vistazo horarios de llegada en tiempo real de autobuses/trenes, estado de rutas y avisos de servicio para el desplazamiento diario.

## Descripción general del hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentación y grabación de firmware.
- **Conector FPC**: Para conectar la pantalla ePaper.
- **Botón de reinicio**: Para reiniciar la placa.
- **Botones de usuario**: Botones programables para la interacción del usuario.
- **Interruptor de encendido**: Controla el encendido/apagado de la batería.
- **Botón Boot**: Se utiliza para entrar en modo bootloader.
- **LED indicadores**: Indicadores de estado para alimentación y carga.
- **Conector JST**: Conector JST de 2 pines y 2,0 mm para conectar la batería.

## Primeros pasos con SenseCraft HMI

Esta sección te guiará para conectar tu EE03 a la plataforma SenseCraft HMI, lo que te permitirá actualizar fácilmente el contenido de la pantalla de forma inalámbrica.
:::tip
Ten en cuenta que debes grabar primero el **firmware SenseCraft HMI EE03** antes de poder usar la plataforma SenseCraft HMI.
:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_0.jpg" style={{width:800,height:'auto'}}/></div>
### Instalación del equipo

**Paso 1. Conectar la pantalla y la placa**
Conecta con cuidado el cable FPC de tu pantalla ePaper al conector de la placa controladora EE03. Asegúrate de que el mecanismo de bloqueo esté bien fijado.

**Paso 2. Encender**
Conecta la placa EE03 a una fuente de alimentación (ordenador o adaptador USB) usando un cable USB Type-C. Al encenderla, la pantalla se actualizará y mostrará una imagen de bienvenida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_1.jpg" style={{width:300,height:'auto'}}/></div>

**Paso 3. Entrar en modo de configuración de red**
Después de la imagen de bienvenida, la pantalla se actualizará automáticamente para mostrar la interfaz de configuración de red. Esto indica que el dispositivo está listo para conectarse a Wi-Fi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.jpg" style={{width:300,height:'auto'}}/></div>


### Configuración de red

**Paso 4. Configurar Wi-Fi mediante el teléfono móvil**
Usa tu teléfono móvil para escanear el código QR que se muestra en la pantalla. Sigue las indicaciones en tu teléfono para introducir el SSID y la contraseña de tu red Wi-Fi local y conectar el EE03 a Internet.

**Paso 5. Obtener el código de vinculación**
Una vez que la configuración de red sea correcta, la pantalla se actualizará de nuevo y mostrará un **Pairing Code** único. Necesitarás este código para el siguiente paso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.jpg" style={{width:300,height:'auto'}}/></div>

### Vinculación con la plataforma y actualización

**Paso 6. Vincular el dispositivo en SenseCraft HMI**
Ve a la [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona "Add Device". Introduce el Pairing Code que se muestra en tu pantalla E-ink.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_4.jpg" style={{width:800, height:'auto'}}/></div>
**Paso 7. Crear y enviar una nueva interfaz**     
En la plataforma SenseCraft HMI, selecciona la plantilla adecuada para la pantalla de 10,3 pulgadas para crear una nueva interfaz o subir una imagen.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_8.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_5.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 8. Aplicar tus imágenes**
Cuando termines, haz clic en el botón "Apply" y selecciona tu dispositivo EE03.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_6.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 9. Mostrar en la pantalla**
Finalmente, el EE03 recibirá los datos y actualizará la pantalla de 10,3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300, height:'auto'}}/></div>


## Primeros pasos con Arduino

### Instalar la biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de pantalla similares, desinstálalas primero.
:::

Descarga e instala la biblioteca Seeed GFX desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>
Desplázate hacia abajo y abre este enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecciona tu tipo de dispositivo y se generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces una elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate de seleccionar el tipo correcto de dispositivo o componente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/3.png" style={{width:800, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>


### Configurar y grabar el programa
Selecciona el ejemplo que se muestra en la figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/4.png" style={{width:800, height:'auto'}}/></div>

Crea un nuevo archivo "driver.h" y pega ese código en él. El código debería ser como:
```cpp
#define BOARD_SCREEN_COMBO 511 // 10.3 inch monochrome ePaper Screen（ED103TC2）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE03
```


Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3 Plus** y **Tools** -> **Port** -> **Select the port your board is connected to**. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.jpg" style={{width:1000, height:'auto'}}/></div>

Ten en cuenta que PSAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en **Upload** para subir el código.
Ahora verás la respuesta en tu pantalla ePaper. A continuación se muestran los resultados de los ejemplos de mapa de bits.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.jpg" style={{width:500, height:'auto'}}/></div>


## Solución de problemas

**P1: La pantalla no se actualiza después de encender.**
*   Comprueba si el cable FPC está correctamente insertado y bloqueado.
*   Asegúrate de que el cable USB Type-C proporciona suficiente alimentación.
*   Pulsa el botón de reinicio para reiniciar la placa.

**P2: La configuración de Wi-Fi falla.**
*   Asegúrate de que tu red Wi-Fi sea de 2,4 GHz.
*   Comprueba si la contraseña de Wi-Fi se introdujo correctamente.

**P3: La pantalla se ve borrosa o tiene efecto fantasma.**
*   Esto puede suceder si la pantalla no se ha actualizado durante mucho tiempo o si la fuente de alimentación es inestable. Intenta actualizar la pantalla de nuevo a través de la plataforma HMI.

## Recursos
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

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
