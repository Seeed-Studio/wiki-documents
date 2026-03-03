---
description: reTerminal E1004 es una pantalla de tinta electrónica a color de 13,3 pulgadas, de código abierto, impulsada por ESP32-S3, que incorpora la tecnología E Ink® Spectra™ 6 y compatibilidad con SenseCraft HMI.
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

reTerminal E1004 es una pantalla de tinta electrónica a color de 13,3 pulgadas y código abierto, con una duración de batería de hasta 6 meses. Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz sin código SenseCraft HMI para crear paneles de control fácilmente, y además es compatible con Home Assistant, Arduino y ESP-IDF para desarrollos adicionales. Con la pantalla de tinta electrónica a todo color E Ink® Spectra™ 6, es perfecta como marco digital y para la visualización de paneles de control a color.

### Características

- **Pantalla a color de alta definición:** Pantalla de tinta electrónica a todo color E Ink® Spectra™ 6 de 13,3 pulgadas con una alta resolución de 1200x1600 píxeles.
- **Procesamiento potente:** Impulsada por ESP32-S3 con 8MB de PSRAM y 32MB de Flash para un rendimiento robusto.
- **Consumo de energía ultrabajo:** Batería integrada de 5000mAh que admite hasta 6 meses de uso con una sola carga (actualización cada 6 horas).
- **Desarrollo de interfaz sin código:** El firmware predeterminado es compatible con SenseCraft HMI para crear paneles de control mediante arrastrar y soltar y diseño asistido por IA.
- **Amplia compatibilidad:** Compatible con Home Assistant (ESPHome), Arduino, PlatformIO y ESP-IDF.
- **Conectividad rica:** Wi-Fi de 2,4GHz (802.11 b/g/n) y Bluetooth 5.0 integrados.
- **Sensores y audio integrados:** Sensores de temperatura y humedad integrados, y un zumbador para alertas.
- **Almacenamiento listo para usar:** Incluye una tarjeta Micro SD de 16GB (admite hasta 32GB).

## Especificaciones

| Elemento | Descripción |
| :--- | :--- |
| **Nombre del producto** | reTerminal E1004 |
| **Procesador** | ESP32-S3 con 8MB PSRAM |
| **Almacenamiento** | 32MB Flash, compatible con tarjeta Micro SD (hasta 32GB, incluye 16GB) |
| **Pantalla** | 13.3" Spectra™ 6 Full Color ePaper |
| **Resolución** | 1200 x 1600 píxeles |
| **Conectividad inalámbrica** | Wi-Fi 2.4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de temperatura y humedad |
| **Audio** | Zumbador (alerta sonora) |
| **Batería** | 5000mAh |
| **Entrada de alimentación** | USB-C 5V/1A |
| **Compatibilidad de software** | SenseCraft HMI (predeterminado), ESPHome, Arduino, PlatformIO, ESP-IDF |
| **Temperatura de funcionamiento** | 0-40°C |
| **Dimensiones** | 376mm x 311mm x 40mm |

## Aplicaciones

- **Marco de fotos electrónico de bajo consumo:** Muestra fotos familiares o arte en alta resolución con una calidad similar al papel sin preocuparte por la carga diaria.
- **Tablón de información familiar:** Mantén al día calendarios, notificaciones, clima y noticias en un formato elegante y siempre visible.
- **Panel de control para automatización del hogar:** Visualiza datos en tiempo real del hogar inteligente (temperatura, humedad, calidad del aire) mediante Home Assistant.
- **Pantalla inteligente para oficina:** Muestra horarios de salas de reuniones, disponibilidad o señalización direccional.
- **Cartelería para comercios y espacios públicos:** Menús, horarios o indicadores de ocupación de bajo consumo energético.
- **Educación y prototipado:** Una plataforma ideal para aprender IoT, sistemas embebidos y diseño de interfaces.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/specification.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Botón de avance y retroceso de página:** Se utiliza para navegar y pasar páginas.
2. **Botón de actualización de pantalla:** Se utiliza para actualizar manualmente la pantalla de tinta electrónica.
3. **LED de encendido rojo:** Indica el estado de alimentación del dispositivo.
4. **Puerto USB-C de datos y carga:** Para cargar el dispositivo y la transmisión de datos.
5. **Interruptor de encendido:** Para encender o apagar el dispositivo.
6. **LED de estado verde:** Indica el estado operativo o del sistema actual.
7. **Boot:** Se utiliza para el arranque del sistema o para entrar en modo de arranque.
8. **Reset:** Para restablecer los componentes de hardware.
9. **Puerto de expansión:** Para conectar módulos de expansión o periféricos externos.
10. **Tornillos de montaje del soporte:** Se utilizan para fijar el dispositivo a su soporte.
11. **Soporte metálico:** Proporciona soporte físico y estabilidad al dispositivo.

## Introducción a SenseCraft HMI

El reTerminal E1004 viene preinstalado con firmware que es compatible con **SenseCraft HMI**, una plataforma sin código que te permite diseñar y desplegar paneles de control personalizados sin esfuerzo.

### Paso 1. Encendido y configuración de red

1. Enciende el **Power Button** para encender el reTerminal E1004.
2. Usa tu smartphone para conectarte al punto de acceso del dispositivo (modo AP) y configurar las credenciales de Wi-Fi.
3. La pantalla mostrará un código QR de "Network Configuration" o utiliza el navegador para abrir la página 192.168.4.1.
4. Una vez conectado a Internet, el dispositivo mostrará un **Device Code** o un **Binding QR Code**.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/4.jpg" style={{ width: '49%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/code2.jpg" style={{ width: '49%', height: 'auto' }} />
</div>
### Paso 2. Vincular el dispositivo

1. Visita la [plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) en el navegador de tu ordenador.
2. Inicia sesión en tu cuenta (o crea una si aún no la tienes).
3. Ve a la sección **Device Management** y haz clic en **Add Device**.
4. Introduce el **Device Code** que aparece en la pantalla de tu reTerminal E1004 para completar el proceso de vinculación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Crear contenido en la plataforma

1. Ve a la **Home Page**, selecciona una plantilla que desees o **Wrokspace** para crear tu trabajo desde cero.
2. [Haz clic en este enlace para aprender a usar la plataforma HMI si tienes alguna pregunta.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Desplegar contenido en el dispositivo

1. Cuando tu diseño esté listo, haz clic en el botón **Preview** para comprobar su apariencia.
2. Haz clic en el botón **Save** o **deploy**.
3. Selecciona tu reTerminal E1004 vinculado de la lista.
4. La plataforma enviará los datos a tu dispositivo a través de Wi-Fi. La pantalla de tinta electrónica se actualizará para mostrar tu nuevo panel de control.

:::note
Debido a la naturaleza de la tecnología E Ink, la actualización de la pantalla puede tardar unos segundos en completar la imagen y eliminar cualquier efecto fantasma.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/10.jpg" style={{width:1000, height:'auto'}}/></div>

## Recursos

- [Esquemático de reTerminal E1004 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

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
