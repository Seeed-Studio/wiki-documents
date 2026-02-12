---
description: reTerminal E1004 es una pantalla ePaper a todo color de código abierto de 13.3 pulgadas alimentada por ESP32-S3, con tecnología E Ink® Spectra™ 6 y soporte para SenseCraft HMI.
title: Introducción a reTerminal E1004
sidebar_position: 4
keywords:
  - reTerminal E1004
  - ePaper Display
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Smart Home Dashboard
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /es/getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 1/28/2026
  author: Allen
---

# Introducción a reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:1000, height:'auto'}}/></div>

## Introducción

reTerminal E1004 es una pantalla ePaper a todo color de código abierto de 13.3 pulgadas con hasta 3 meses de duración de batería. Alimentado por ESP32-S3, soporta nativamente nuestra plataforma de interfaz sin código SenseCraft HMI para la creación sin esfuerzo de paneles de control, mientras que también soporta Home Assistant, Arduino y ESP-IDF para desarrollo adicional. Con la pantalla ePaper a todo color E Ink® Spectra™ 6, es perfecto para marcos digitales y visualización colorida de paneles de control.

### Características

-   **Pantalla a Color de Alta Definición:** Pantalla ePaper a Todo Color E Ink® Spectra™ 6 de 13.3 pulgadas con una alta resolución de 1200x1600 píxeles.
-   **Procesamiento Potente:** Alimentado por ESP32-S3 con 8MB PSRAM y 32MB Flash para un rendimiento robusto.
-   **Consumo de Energía Ultra Bajo:** Batería integrada de 5000mAh soporta hasta 3 meses de uso con una sola carga (modo de sueño profundo).
-   **Desarrollo de Interfaz Sin Código:** El firmware predeterminado soporta SenseCraft HMI para creación de paneles de control por arrastrar y soltar y diseño asistido por IA.
-   **Amplia Compatibilidad:** Soporta Home Assistant (ESPHome), Arduino, PlatformIO y ESP-IDF.
-   **Conectividad Rica:** Wi-Fi integrado de 2.4GHz (802.11 b/g/n) y Bluetooth 5.0.
-   **Sensores y Audio Integrados:** Sensores de temperatura y humedad integrados, un zumbador para alertas
-   **Almacenamiento Listo para Usar:** Incluye una tarjeta Micro SD de 16GB (soporta hasta 32GB).

## Especificaciones

| Elemento | Descripción |
| :--- | :--- |
| **Nombre del Producto** | reTerminal E1004 |
| **Procesador** | ESP32-S3 con 8MB PSRAM |
| **Almacenamiento** | 32MB Flash, soporta tarjeta Micro SD (Hasta 32GB, 16GB incluidos) |
| **Pantalla** | 13.3" Spectra™ 6 ePaper a Todo Color |
| **Resolución** | 1200 x 1600 Píxeles |
| **Conectividad Inalámbrica** | Wi-Fi 2.4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de Temperatura, Humedad |
| **Audio** | Zumbador (Alerta sonora) |
| **Batería** | 5000mAh |
| **Entrada de Energía** | USB-C 5V/1A |
| **Soporte de Software** | SenseCraft HMI (Predeterminado), ESPHome, Arduino, PlatformIO, ESP-IDF |
| **Temperatura de Funcionamiento** | 0-40°C |
| **Dimensiones** | 376mm x 311mm x 40mm |

## Aplicaciones

-   **Marco de Fotos Electrónico de Bajo Consumo:** Muestra fotos familiares o arte de alta resolución con calidad similar al papel sin preocuparse por la carga diaria.
-   **Tablero de Información Familiar:** Mantén un seguimiento de calendarios, notificaciones, clima y noticias en un formato elegante y siempre encendido.
-   **Panel de Control de Automatización del Hogar:** Visualiza datos de hogar inteligente en tiempo real (temperatura, humedad, calidad del aire) a través de Home Assistant.
-   **Pantalla de Oficina Inteligente:** Muestra horarios de salas de reuniones, disponibilidad o orientación direccional.
-   **Señalización Comercial y Pública:** Menús eficientes en energía, horarios o indicadores de ocupación.
-   **Educación y Prototipado:** Una plataforma ideal para aprender IoT, sistemas embebidos y diseño de interfaz.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Botón de Página Arriba y Abajo:** Usado para navegar y cambiar páginas.
2. **Botón de Actualización de Pantalla:** Usado para actualizar manualmente la pantalla E-ink.
3. **LED de Energía Rojo:** Indica el estado de energía del dispositivo.
4. **Puerto de Datos y Carga USB-C:** Para cargar el dispositivo y transmisión de datos.
5. **Interruptor de Energía:** Para encender o apagar la energía del dispositivo.
6. **LED de Estado Verde:** Indica el estado operacional o del sistema actual.
7. **Boot:** Usado para el arranque del sistema o entrar en modo de arranque.
8. **Reset:** Para reiniciar los componentes de hardware.
9. **Puerto de Expansión:** Para conectar módulos de expansión externos o periféricos.
10. **Tornillos de Montaje del Soporte:** Usados para asegurar el dispositivo en su soporte.
11. **Soporte Metálico:** Proporciona soporte físico y estabilidad para el dispositivo.

## Introducción a SenseCraft HMI

El reTerminal E1004 viene precargado con firmware que soporta **SenseCraft HMI**, una plataforma sin código que te permite diseñar y desplegar paneles de control personalizados sin esfuerzo.

### Paso 1. Encendido y Configuración de Red

1.  Enciende el **Botón de Energía** para encender el reTerminal E1004.
2.  Usa tu smartphone para conectarte al punto de acceso del dispositivo (modo AP) para configurar las credenciales de Wi-Fi.
3.  La pantalla mostrará un código QR de "Network Configuration" o usa el navegador para abrir la página 192.168.4.1.
4.  Una vez conectado a internet, el dispositivo mostrará un **Código de Dispositivo** o **Código QR de Vinculación**.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### Paso 2. Vincular el Dispositivo

1.  Visita la [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) en el navegador de tu computadora.
2.  Inicia sesión en tu cuenta (o crea una si no tienes).
3.  Navega a la sección **Device Management** y haz clic en **Add Device**.
4.  Ingresa el **Código de Dispositivo** mostrado en la pantalla de tu reTerminal E1004 para completar el proceso de vinculación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Crear Contenido en la Plataforma

1.  Ve a la **Home Page** selecciona una plantilla que desees o **Wrokspace** para crear tu trabajo desde cero.
2.  [Haz clic en este enlace para aprender cómo usar la Plataforma HMI si tienes preguntas.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Desplegar Contenido al Dispositivo

1.  Una vez que tu diseño esté listo, haz clic en el botón **Preview** para verificar cómo se ve.
2.  Haz clic en el botón **Save** o **deploy**.
3.  Selecciona tu reTerminal E1004 vinculado de la lista.
4.  La plataforma enviará los datos a tu dispositivo vía Wi-Fi. La pantalla ePaper se actualizará para mostrar tu nuevo panel de control.

:::note
Debido a la naturaleza de la tecnología E Ink, la actualización de la pantalla puede tomar unos segundos para actualizar completamente la imagen y eliminar cualquier imagen fantasma.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

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