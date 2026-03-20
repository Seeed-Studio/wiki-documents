---
description: reTerminal E1003 es una pantalla de papel electrónico monocromático de 10,3 pulgadas con soporte táctil y de código abierto, que ofrece 16 niveles de escala de grises y una alta resolución de 1404×1872 píxeles, con una duración de batería de hasta 6 meses.
sku: 100090602
title: Introducción a reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
last_update:
  date: 3/19/2026
  author: Jackson.Li
---

# Introducción a reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

reTerminal E1003 es una pantalla de papel electrónico monocromático de 10,3 pulgadas con soporte táctil y de código abierto, que ofrece 16 niveles de escala de grises y una alta resolución de 1404×1872 píxeles, con una duración de batería de hasta 6 meses. Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz HMI SenseCraft sin código para una creación de paneles de control sin esfuerzo, y al mismo tiempo es compatible con Home Assistant (a través de ESPHome y Open Display), Arduino y PlatformIO para un desarrollo adicional. Ya sea para visualización y control de paneles de hogar inteligente, pantallas de información para oficina o proyectos educativos, este dispositivo listo para usar con pantalla táctil ofrece imágenes impresionantes y una personalización flexible para satisfacer todas tus necesidades.

## Características

- **Claridad de hasta 16 niveles de escala de grises:** Con 16 niveles de escala de grises de gran calidad, cada detalle de texto y gráficos se representa con una nitidez y claridad excepcionales.
- **Consumo de energía ultrabajo:** La pantalla de papel electrónico consume energía solo durante las actualizaciones, lo que se traduce en una mayor duración de la batería y una mayor eficiencia energética.
- **Compatibilidad con SenseCraft HMI:** La pantalla reTerminal E Serie es compatible con SenseCraft HMI mediante el firmware predeterminado.
- **Amplia gama de aplicaciones:** Admite refresco de alta velocidad para actualizaciones de baja latencia con una interfaz paralela TTL (multilínea, alto rendimiento), lo que la convierte en una opción ideal para paneles de control de hogar inteligente.
- **Pantalla de papel electrónico táctil de alta resolución:** La pantalla de papel electrónico monocromático de 10,3 pulgadas y 1404×1872 se combina con una pantalla táctil integrada y receptiva para una interacción intuitiva a pantalla completa.
- **Adaptación a necesidades de decoración:** Sin cables para una mayor libertad; admite montaje en pared y colocación sobre escritorio, con cambio flexible entre orientación vertical y horizontal.

:::note
La plataforma SenseCraft HMI se encuentra ahora en fase de prueba beta y las funciones se mejorarán continuamente. En la actualidad, existe un límite en el número de generaciones de IA y de generación de interfaces. En el futuro, el lienzo de SenseCraft HMI admitirá gradualmente la configuración de interacción táctil. Mantente atento.
:::

## Especificación

| Elemento | Descripción |
| :--- | :--- |
| **Nombre del producto** | reTerminal E1003 |
| **Procesador** | ESP32-S3 con 8MB PSRAM |
| **Almacenamiento** | 32MB Flash, compatible con tarjeta Micro SD |
| **Pantalla** | 10,3" Monocromática/ 16 niveles de escala de grises |
| **Resolución** | 1404x1872 píxeles |
| **Tarjeta Micro SD** | Soporta como máximo tarjeta SD de 32GB, formato FAT32 |
| **Conectividad inalámbrica** | Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0 |
| **Sensores** | Sensores de temperatura y humedad |
| **Micrófono** | Reservado para aplicaciones de interacción por voz |
| **Audio** | Zumbador para alerta sonora |
| **Batería** | 3000mAh |
| **Entrada de alimentación** | USB-C 5V/1A |
| **Compatibilidad de software** | El firmware predeterminado es compatible con SenseCraft HMI(https://sensecraft.seeed.cc/hmi/)<br />Compatible con la plataforma de desarrollo Arduino/PlatformIO |
| **Temperatura de trabajo** | 0-40°C |
| **Dimensiones** | 224mm*187mm*18.6mm |

## Descripción del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2.jpg" style={{width:1000, height:'auto'}}/></div>

1. **Botón de refresco de pantalla**
2. **Botón de subir y bajar página**
3. **Área de antena Wi-Fi**
4. **Puerto para tarjeta MicroSD/TF**
5. **Interruptor de encendido**
6. **LED rojo de alimentación**
7. **LED verde de estado**
8. **Puerto USB-C de datos y carga**
9. **Puerto de expansión**
10. **Orificio de tornillo para montaje del soporte**
11. **Soporte**
12. **Tornillo de montaje del soporte**

## Aplicaciones

- **Paneles de automatización del hogar:** Muestra datos en tiempo real del hogar inteligente como temperatura, humedad y calidad del aire mediante Home Assistant.
- **Marco de fotos electrónico monocromático de bajo consumo:** Con SenseCraft HMI o la App, puedes subir fácilmente una serie de fotos desde tu álbum de forma remota en línea. Combinado con una gran pantalla de tinta electrónica monocromática de alta resolución, logra una visualización de imágenes de ultra bajo consumo, sin tener que preocuparte más por la duración de la batería.
- **Pantallas inteligentes para oficina:** Muestra la disponibilidad de salas de reuniones, horarios de oficina o indicaciones de dirección en pantallas de papel electrónico de bajo consumo y siempre encendidas.
- **Pantallas de información para comercios y espacios públicos:** Señalización de papel electrónico de bajo consumo para menús, horarios o indicadores de ocupación con larga duración de batería.

## Introducción a SenseCraft HMI

El reTerminal E1003 viene preinstalado con firmware que es compatible con **SenseCraft HMI**, una plataforma sin código que te permite diseñar y desplegar paneles personalizados sin esfuerzo.

### Paso 1. Encendido y configuración de red

1. Enciende el **Botón de encendido** para encender el reTerminal E1003.
2. Usa tu smartphone para conectarte al punto de acceso del dispositivo (modo AP) para configurar las credenciales de Wi-Fi.
3. La pantalla mostrará un código QR de "Network Configuration" o utiliza el navegador para abrir la página 192.168.4.1.
4. Una vez conectado a Internet, el dispositivo mostrará un **Device Code** o **Binding QR Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/3.jpg" style={{width:800, height:'auto'}}/></div>

### Paso 2. Vincular el dispositivo

1. Visita la [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/) en el navegador de tu ordenador.
2. Inicia sesión en tu cuenta (o crea una si aún no la tienes).
3. Ve a la sección **Device Management** y haz clic en **Add Device**.
4. Introduce el **Device Code** que se muestra en la pantalla de tu reTerminal E1003 para completar el proceso de vinculación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/5.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Crear contenido en la plataforma

1. Ve a la **Home Page** selecciona una plantilla que quieras o a **Workspace** para crear tu trabajo desde cero.
2. [Haz clic en este enlace para aprender a usar la plataforma HMI si tienes alguna pregunta.](https://sensecraft-hmi-docs.seeed.cc/en/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2.jpg" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Desplegar contenido en el dispositivo

1. Una vez que tu diseño esté listo, haz clic en el botón **Preview** para comprobar cómo se ve.
2. Haz clic en el botón **Save** o **deploy**.
3. Selecciona tu reTerminal E1003 vinculado de la lista.
4. La plataforma enviará los datos a tu dispositivo a través de Wi-Fi. La pantalla de papel electrónico se actualizará para mostrar tu nuevo panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/6.jpg" style={{width:1000, height:'auto'}}/></div>

## Recursos

- [Esquemático de reTerminal E1003 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
