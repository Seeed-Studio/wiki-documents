---
description: Primeros pasos con la placa controladora E-ink EE02 de 13,3 pulgadas
title: Primeros pasos con la XIAO ePaper Display Board - EE02
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 2025-12-20
  author: Allen
---

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE02</th>
        <th>Pantalla E-Ink spectra™ 6 de 13,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-xiao-epaper-display-board-ee02.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE02-p-6639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100088646-13.3-elnk-spectra-6-color-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/13-3inch-Six-Color-eInk-ePaper-Display-with-1200x1600-Pixels-p-6569.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

La **EE02** es una placa controladora de pantalla E-ink de alto rendimiento diseñada específicamente para pantallas de papel electrónico de **13,3 pulgadas**. Impulsada por el chip ESP32-S3, es compatible con conectividad Wi-Fi y Bluetooth, lo que la convierte en una solución ideal para aplicaciones de visualización inalámbrica.

Similar a su hermana, la EE04 (diseñada para pantallas más pequeñas), la EE02 ofrece una experiencia fluida para los desarrolladores que buscan integrar pantallas E-ink de gran formato en sus proyectos de IoT. Simplifica el proceso de control y es compatible con la plataforma SenseCraft HMI para una fácil gestión de contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Controlador potente**: Basado en el ESP32-S3, que ofrece una capacidad de procesamiento robusta y funciones inalámbricas.
- **Dedicada a pantallas grandes**: Específicamente optimizada para controlar pantallas E-ink de 13,3 pulgadas con alta estabilidad y claridad.
- **Conectividad inalámbrica**: Compatible con Wi-Fi y Bluetooth 5.0 (LE), lo que permite actualizaciones remotas de datos e integración con la nube.
- **Bajo consumo de energía**: Diseñada para la eficiencia energética, adecuada para aplicaciones alimentadas por batería.
- **Fácil integración**: Compatible con SenseCraft HMI para diseño de interfaces mediante arrastrar y soltar y gestión remota.
- **Interfaces versátiles**: Incluye Type-C para alimentación/programación y conectores estándar para pantallas E-ink.

### Especificación

| Elemento | Descripción |
| :--- | :--- |
| **Controlador** | ESP32-S3 |
| **Tamaño de pantalla compatible** | Pantalla E-ink de 13,3 pulgadas |
| **Conectividad** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **Alimentación** | 5V mediante USB Type-C |
| **Voltaje de funcionamiento** | 3,3V |
| **Interfaz** | USB Type-C, conector FPC para E-ink |
| **Dimensiones** | 80x40 mm |
| **Temperatura de funcionamiento** | -20°C a 70°C |

### Aplicación

- **Cartelería digital**: Ideal para menús de restaurantes, rótulos de salas de reuniones y etiquetas de precios en comercios.
- **Hogar inteligente**: Paneles de información para clima, calendario y estado de la automatización del hogar.
- **HMI industrial**: Pantallas de estado de bajo consumo para maquinaria y gestión de almacenes.
- **Educación**: Lectores de libros electrónicos o paneles de información en aulas.
- **Oficina**: Placas de escritorio con nombres o tablones de anuncios.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentación y grabación de firmware.
- **Conector FPC**: Para conectar la pantalla E-ink de 13,3 pulgadas.
- **Botón de reinicio**: Para reiniciar la placa.
- **Botones**: Son "refresh the page","switch previous page" y "switch next page"
- **Interruptor**: Controla el encendido/apagado de la batería.
- **Botón Boot**: Se utiliza para entrar en modo bootloader.
- **Indicadores LED**: Parpadeando significa que no hay conexión de batería. Luz verde encendida significa que la batería se está cargando.
- **Conector JST**: Conector JST de 2 pines y 2,0 mm para conectar la batería.

## Primeros pasos con SenseCraft HMI

Esta sección te guiará para conectar tu EE02 a la plataforma SenseCraft HMI, lo que te permitirá actualizar fácilmente el contenido de la pantalla de forma inalámbrica.

### Instalación del equipo

**Paso 1. Conectar la pantalla y la placa**
Conecta con cuidado el cable FPC de la pantalla E-ink de 13,3 pulgadas al conector de la placa controladora EE02. Asegúrate de que el mecanismo de bloqueo esté bien asegurado.

**Paso 2. Encender**
Conecta la placa EE02 a una fuente de alimentación (ordenador o adaptador USB) utilizando un cable USB Type-C. Al encenderla, la pantalla se actualizará y mostrará una imagen de bienvenida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**Paso 3. Entrar en modo de configuración de red**
Después de la imagen de bienvenida, la pantalla se actualizará automáticamente para mostrar la interfaz de configuración de red. Esto indica que el dispositivo está listo para conectarse a Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### Configuración de red

**Paso 4. Configurar Wi-Fi mediante el teléfono móvil**
Utiliza tu teléfono móvil para escanear el código QR que se muestra en la pantalla (o conéctate al punto de acceso indicado). Sigue las indicaciones en tu teléfono para introducir el SSID y la contraseña de tu red Wi-Fi local y conectar la EE02 a Internet.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**Paso 5. Obtener el código de vinculación**
Una vez que la configuración de red sea correcta, la pantalla se actualizará de nuevo y mostrará un **Pairing Code** (o ID de dispositivo) único. Necesitarás este código para el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### Vinculación con la plataforma y actualización

**Paso 6. Vincular el dispositivo en SenseCraft HMI**
Ve a la [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona "Add Device". Introduce el Pairing Code que se muestra en tu pantalla E-ink para vincular el dispositivo a tu cuenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 7. Crear y enviar una nueva interfaz**
En la plataforma SenseCraft HMI, utiliza el editor para crear una nueva interfaz (por ejemplo, subir una imagen o diseñar un panel de control). 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 8. Aplicar tus imágenes**
Una vez terminado, haz clic en el botón "Apply" en la esquina superior derecha y luego selecciona el dispositivo que quieres que reciba la imagen. La EE02 recibirá los datos y actualizará la pantalla de 13,3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 9. Mostrar en la pantalla**

Finalmente, la EE02 recibirá los datos y actualizará la pantalla de 13,3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

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

Selecciona el tipo de tu dispositivo y se generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces una elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate del tipo de tus dispositivos o componentes.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### Configurar y grabar el programa

Selecciona el ejemplo que se muestra en la figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

Crea un nuevo archivo "driver.h" y pega ese código en él. El código debería ser como:
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3 Plus** y **Tools** -> **Port** -> **Select the port your board is connected to**. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

Ten en cuenta que PSAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en **Upload** para cargar el código.
¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación se muestran los resultados de los ejemplos de mapa de bits.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## Solución de problemas

**P1: La pantalla no se actualiza después de encenderla.**
*   Comprueba si el cable FPC está correctamente insertado y bloqueado.
*   Asegúrate de que el cable USB Type-C proporciona suficiente energía.
*   Pulsa el botón Reset para reiniciar la placa.

**P2: La configuración de Wi-Fi falla.**
*   Asegúrate de que tu red Wi-Fi sea de 2.4GHz (5GHz no es compatible).
*   Comprueba si la contraseña de Wi-Fi se introdujo correctamente.
*   Acércate más al router para garantizar una señal fuerte.

**P3: La pantalla se ve borrosa o tiene efecto fantasma.**
*   Esto puede ocurrir si la pantalla no se ha actualizado durante mucho tiempo o si la fuente de alimentación es inestable. Intenta actualizar la pantalla de nuevo a través de la plataforma HMI.

## Recursos
- **[PDF]** [Hoja de datos del módulo de pantalla de tinta electrónica 13.3 E6](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Esquemático de Seeed Studio XIAO ePaper Display EE02](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [PCBA y SCH de Seeed Studio XIAO ePaper Display EE02](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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