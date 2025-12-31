---
description: Introducción al EE02 Placa Controladora de Pantalla E-ink de 13.3 pulgadas
title: Introducción al EE02
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /es/getting_started_with_ee02
last_update:
  date: 2025-12-20
  author: Allen
---

## Introducción

El **EE02** es una placa controladora de pantalla E-ink de alto rendimiento diseñada específicamente para pantallas de papel electrónico de **13.3 pulgadas**. Alimentado por el chip ESP32-S3, soporta conectividad Wi-Fi y Bluetooth, convirtiéndolo en una solución ideal para aplicaciones de pantalla inalámbrica.

Similar a su hermano, el EE04 (diseñado para pantallas más pequeñas), el EE02 ofrece una experiencia perfecta para desarrolladores que buscan integrar pantallas E-ink de gran formato en sus proyectos IoT. Simplifica el proceso de control y soporta la plataforma SenseCraft HMI para una gestión fácil del contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Controlador Potente**: Construido alrededor del ESP32-S3, ofreciendo potencia de procesamiento robusta y capacidades inalámbricas.
- **Dedicado para Pantallas Grandes**: Específicamente optimizado para controlar pantallas E-ink de 13.3 pulgadas con alta estabilidad y claridad.
- **Conectividad Inalámbrica**: Soporta Wi-Fi y Bluetooth 5.0 (LE), permitiendo actualizaciones remotas de datos e integración en la nube.
- **Bajo Consumo de Energía**: Diseñado para eficiencia energética, adecuado para aplicaciones alimentadas por batería.
- **Integración Fácil**: Compatible con SenseCraft HMI para diseño de interfaz de arrastrar y soltar y gestión remota.
- **Interfaces Versátiles**: Incluye Type-C para alimentación/programación y conectores estándar para pantallas E-ink.

### Especificaciones

| Elemento | Descripción |
| :--- | :--- |
| **Controlador** | ESP32-S3 |
| **Tamaño de Pantalla Soportado** | Pantalla E-ink de 13.3 pulgadas |
| **Conectividad** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **Fuente de Alimentación** | 5V vía USB Type-C |
| **Voltaje de Operación** | 3.3V |
| **Interfaz** | USB Type-C, conector FPC para E-ink |
| **Dimensiones** | 80x40 mm |
| **Temperatura de Operación** | -20°C a 70°C |

### Aplicaciones

- **Señalización Digital**: Ideal para menús de restaurantes, letreros de salas de conferencias y etiquetas de precios minoristas.
- **Hogar Inteligente**: Paneles de información para clima, calendario y estado de automatización del hogar.
- **HMI Industrial**: Pantallas de estado de bajo consumo para maquinaria y gestión de almacenes.
- **Educación**: Lectores de libros electrónicos o tableros de información de aulas.
- **Oficina**: Placas de identificación de escritorio o tableros de anuncios.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para suministro de energía y flasheo de firmware.
- **Conector FPC**: Para conectar la pantalla E-ink de 13.3 pulgadas.
- **Botón de Reset**: Para reiniciar la placa.
- **Botones**: Son "actualizar la página", "cambiar página anterior" y "cambiar página siguiente"
- **Interruptor**: Controla el encendido/apagado de la batería.
- **Botón Boot**: Usado para entrar en modo bootloader.
- **Indicadores LED**: El parpadeo significa que no hay conexión de batería. La luz verde encendida significa que la batería se está cargando.
- **Conector JST**: Conector JST 2.0mm de 2 pines para conectar la batería.

## Introducción con SenseCraft HMI

Esta sección te guiará a través de la conexión de tu EE02 a la plataforma SenseCraft HMI, permitiéndote actualizar fácilmente el contenido de la pantalla de forma inalámbrica.

### Instalación del Equipo

**Paso 1. Conectar la Pantalla y la Placa**
Conecta cuidadosamente el cable FPC de la pantalla E-ink de 13.3 pulgadas al conector en la placa controladora EE02. Asegúrate de que el mecanismo de bloqueo esté seguro.

**Paso 2. Encender**
Conecta la placa EE02 a una fuente de alimentación (computadora o adaptador USB) usando un cable USB Type-C. Al encenderse, la pantalla se actualizará y mostrará una imagen de bienvenida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**Paso 3. Entrar en Modo de Configuración de Red**
Después de la imagen de bienvenida, la pantalla se actualizará automáticamente para mostrar la interfaz de Configuración de Red. Esto indica que el dispositivo está listo para conectarse a Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### Configuración de Red

**Paso 4. Configurar Wi-Fi vía Teléfono Móvil**
Usa tu teléfono móvil para escanear el código QR mostrado en la pantalla (o conectarte al hotspot indicado). Sigue las indicaciones en tu teléfono para ingresar tu SSID de Wi-Fi local y contraseña para conectar el EE02 a internet.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**Paso 5. Obtener Código de Emparejamiento**
Una vez que la configuración de red sea exitosa, la pantalla se actualizará nuevamente y mostrará un **Código de Emparejamiento** único (o ID del Dispositivo). Necesitarás este código para el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.JPG" style={{width:300,height:'auto'}}/></div>

### Vinculación de Plataforma y Actualización

**Paso 6. Vincular Dispositivo en SenseCraft HMI**
Ve a la [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona "Add Device". Ingresa el Código de Emparejamiento mostrado en tu pantalla E-ink para vincular el dispositivo a tu cuenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 7. Crear y Enviar Nueva Interfaz**
En la plataforma SenseCraft HMI, usa el editor para crear una nueva interfaz (por ejemplo, subir una imagen o diseñar un panel de control).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 8. Aplicar tus imágenes**
Una vez terminado, haz clic en el botón "Apply" en la esquina superior derecha, y luego selecciona el dispositivo que quieres que reciba la imagen. El EE02 recibirá los datos y actualizará la pantalla de 13.3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 9. Mostrar en la pantalla**

Finalmente el EE02 recibirá los datos y actualizará la pantalla de 13.3 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Solución de Problemas

**P1: La pantalla no se actualiza después de encender.**
*   Verifica si el cable FPC está correctamente insertado y bloqueado.
*   Asegúrate de que el cable USB Type-C proporcione suficiente energía.
*   Presiona el botón Reset para reiniciar la placa.

**P2: La configuración de Wi-Fi falla.**
*   Asegúrate de que tu red Wi-Fi sea de 2.4GHz (5GHz no es compatible).
*   Verifica si la contraseña de Wi-Fi fue ingresada correctamente.
*   Acércate más al router para asegurar una señal fuerte.

**P3: La pantalla se ve borrosa o tiene imágenes fantasma.**
*   Esto puede suceder si la pantalla no se ha actualizado por mucho tiempo o si el suministro de energía es inestable. Intenta actualizar la pantalla nuevamente vía la plataforma HMI.

## Recursos
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

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