---
description: Primeros pasos con XIAO ePaper Display Board(nRF52840) - EN05
sku: 100085486
title: Primeros pasos con EN05
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 10/20/2026
  author: Nemo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/es/epaper_en05/
updatedAt: '2026-10-20'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Primeros pasos con XIAO ePaper Display Board - EN05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por **XIAO nRF52840 Plus**, la placa de visualización EN05 es compatible con una amplia gama de pantallas ePaper de 24 pines. Incorpora un puerto de extensión de IO para conectar sensores adicionales, conector de batería JST de 2,0 mm con interruptor de alimentación, CI de carga integrado y viene con tres botones de usuario. Es ideal para proyectos ePaper de ultra bajo consumo, como credenciales inteligentes con nombre, etiquetas de precio electrónicas, señalización de salas de reuniones y paneles de información portátiles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Impulsada por XIAO nRF52840 Plus:** Funciona inmediatamente al conectarse a una pantalla ePaper compatible, con interfaz NFC integrada para configurar con un toque, emparejar o activar actualizaciones de contenido.
- **Compatibilidad versátil de pantallas:** Compatible con una amplia gama de pantallas ePaper de 24 pines, admitiendo pantallas ePaper de 24 pines para diversos requisitos de proyecto.
- **Puerto de extensión IO:** Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para una funcionalidad mejorada.
- **Conector BAT con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión eficiente de la energía y ahorro de consumo.
- **Amplia compatibilidad de software:** Tanto si prefieres programar con Arduino como con PlatformIO, esta placa controladora te cubre, proporcionando la máxima flexibilidad para tus proyectos.

### Especificaciones

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Procesador</th>
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>Inalámbrico</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>Conector ePaper</th>
      <td>SPI FPC 24-Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Conector de batería</th>
      <td>JST 2.0mm (batería Li de 3,7V)</td>
    </tr>
    <tr>
      <th>Interruptor</th>
      <td>Interruptor deslizante de alimentación por hardware</td>
    </tr>
    <tr>
      <th>Botones</th>
      <td>1x botón de reinicio (montado lateralmente)<br />3x botón de usuario (montado lateralmente)</td>
    </tr>
    <tr>
      <th>Grosor de PCB</th>
      <td>1.2mm</td>
    </tr>
  </tbody>
</table>

### Guía de selección de placas ePaper

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>ePaper Display Board EN05</th>
<th><a href="https://wiki.seeedstudio.com/es/epaper_EN04/">ePaper Display Board EN04</a></th>
<th><a href="https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO Serie</td>
            <td>XIAO Serie</td>
        </tr>
        <tr>
            <th>Pantallas ePaper compatibles</th>
            <td>ePaper de 24 pines</td>
            <td>ePaper de 24 pines<br />ePaper de 50 pines</td>
            <td>ePaper de 24 pines</td>
            <td>ePaper de 24 pines</td>
        </tr>
        <tr>
            <th>Conector ePaper</th>
            <td>FPC 24 pines, 0.5mm</td>
            <td>FPC 24 pines, 0.5mm<br />FPC 50 pines, 0.5mm</td>
            <td>FPC 24 pines 0.5mm</td>
            <td>FPC 24 pines 0.5mm</td>
        </tr>
        <tr>
            <th>Conector de batería</th>
            <td>JST 2.0mm</td>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Interruptor</th>
            <td>Alimentación de batería ON/OFF</td>
            <td>Alimentación de batería ON/OFF</td>
            <td>/</td>
            <td>Alimentación de batería ON/OFF</td>
        </tr>
        <tr>
            <th>Botón</th>
            <td>1x botón de reinicio<br />3x botón de usuario</td>
            <td>1x botón de reinicio<br />3x botón de usuario</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Puerto de extensión IO</th>
            <td>conexión de sensores adicionales</td>
            <td>/</td>
            <td>conexión de otros controladores</td>
            <td>conexión de sensores adicionales</td>
        </tr>
    </tbody>
</table>

### Aplicación

- **Credencial inteligente con nombre**: Crea una credencial para conferencias o empleados de ultra bajo consumo que muestre nombres, horarios o códigos QR, con actualizaciones de contenido configurables mediante un toque NFC.
- **Etiqueta electrónica de estantería**: Construye etiquetas de precio alimentadas por batería que puedan funcionar durante meses con una sola carga y se actualicen solo cuando cambie el precio.
- **Señalización de salas de reuniones**: Muestra el estado de la sala, información de reservas y próximos eventos fuera de las salas de reuniones con un consumo mínimo de energía.
- **Panel de sensores ambientales**: Combina el puerto de extensión IO con sensores de temperatura y humedad para mostrar datos ambientales en vivo en una pantalla ePaper siempre visible.
- **Panel de información portátil**: Lleva una pantalla ligera alimentada por batería para listas de tareas, notas o información de referencia que permanece legible incluso cuando está apagada.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/HardwareOverview_EN05.png" style={{width:900, height:'auto'}}/></div>

### Pantallas ePaper compatibles

La EN05 es compatible con las siguientes pantallas ePaper SPI de 24 pines:

- [Pantalla ePaper de 1,54 pulgadas - Monocroma 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Pantalla ePaper de 2,13 pulgadas - Monocroma 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [Pantalla ePaper de 2,13 pulgadas - Cuádruple color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Pantalla ePaper de 2,9 pulgadas - Cuádruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Pantalla ePaper de 4,2 pulgadas - Monocroma 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Pantalla ePaper de 4,26 pulgadas - Monocroma 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Pantalla ePaper de 5,83 pulgadas - Monocroma 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Pantalla ePaper de 7,5 pulgadas - Monocroma 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### Botones de usuario

La EN05 incorpora tres botones programables por el usuario que pueden utilizarse para diversos fines de control. Todos los botones son activos en nivel bajo: leen LOW cuando se pulsan y HIGH cuando se sueltan.

En la EN05, los tres botones están conectados al XIAO nRF52840 Plus de la siguiente manera:

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D9</td>
    </tr>
  </tbody>
</table>

:::note
Los botones de usuario son programables y pueden configurarse para diversas funciones, como cambio de página, selección de modo o activación de acciones específicas en tu proyecto ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/EN05_Buttons.png" style={{width:700, height:'auto'}}/></div>

### Conector de batería

La EN05 está equipada con un conector de batería JST de 2,0 mm y un CI de carga integrado, lo que la hace adecuada para proyectos ePaper de bajo consumo alimentados por batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/battery.png" style={{width:700, height:'auto'}}/></div>

## Primeros pasos con Arduino

### Instalar la librería Seeed GFX2

Todos los ejemplos de ePaper para la EN05 se basan en la librería de Arduino **Seeed_GFX2**, que es compatible con todas las pantallas ePaper enumeradas en la sección [Supported ePaper Displays](#Pantallas-ePaper-compatibles). Los ejemplos siguientes utilizan como ejemplo la **pantalla ePaper monocroma de 7,5 pulgadas (800 x 480)**.

**Paso 1. Descargar la librería Seeed_GFX2**

Visita el [repositorio de Seeed_GFX2 en GitHub](https://github.com/Seeed-Studio/Seeed_GFX2), haz clic en el botón verde **Code** y selecciona **Download ZIP** para guardar la librería en tu ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Añadir la librería al IDE de Arduino**

Abre el IDE de Arduino, navega a **Sketch → Include Library → Add .ZIP Library...** y selecciona el archivo ZIP que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### Configurar y grabar el programa

1. Navega a **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. Si aún no has configurado el soporte de placa XIAO nRF52840, abre **Tools → Board → Boards Manager...**, busca **Seeed nRF52 Boards** e instálalo; ten en cuenta que se trata del paquete **Seeed nRF52 Boards** normal, **no** de *Seeed nRF52 mbed-enabled Boards*. Para obtener instrucciones de configuración detalladas, consulta la [guía de configuración de software de XIAO BLE](https://wiki.seeedstudio.com/es/XIAO_BLE/#configuración-de-software).

3. En **Tools → Board**, selecciona **Seeed XIAO nRF52840 Plus**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

4. Conecta la placa mediante USB Type-C, selecciona el puerto serie correspondiente y haz clic en **Upload**. Una vez que la carga se complete, el ePaper se actualizará y mostrará la demostración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.png" style={{width:300, height:'auto'}}/></div>

:::note
Las rutas de ejemplo anteriores usan la pantalla monocroma de 7,5 pulgadas como ejemplo. Para otras pantallas compatibles, simplemente elige la carpeta que coincida con el modelo de tu pantalla en **XIAO ePaper Display Board - EN05**: cada pantalla se entrega con ejemplos de **HelloWorld**, **Bitmap_&lt;screen_model&gt;** (por ejemplo, `Bitmap_7_5_inch_Monochrome`) y **Custom_Demo**.
:::

## Descripción general del software

#### Ejemplo básico de lectura de botones

Este ejemplo muestra cómo detectar las pulsaciones de los tres botones e imprimir mensajes en el monitor serie.

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (from the EN05 schematic V1.11)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D9
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 9;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

## Recursos
- **[PDF]** [Esquemático de la XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN05/XIAO_ePaper_Display_Board_EN05_V1.11_SCH&PCB_260420.zip)

## Solución de problemas

**P1: La pantalla ePaper no muestra nada después de encenderla.**

- **Comprueba la orientación del cable FPC.** Asegúrate de que el cable FPC del ePaper esté insertado en la dirección correcta. Invertir el conector puede provocar una pantalla en blanco y puede dañar la pantalla.
- **Pulsa el botón RESET.** Después de cargar el firmware o conectar la alimentación, pulsa el botón de reset una vez para forzar una actualización de la pantalla.

**P2: La pantalla muestra contenido ilegible o una actualización parcial.**

- **Confirma la selección del modelo de pantalla.** En tu ejemplo de Arduino, asegúrate de haber seleccionado exactamente el modelo de pantalla (tamaño y tipo de color). Elegir el modelo incorrecto provocará un renderizado erróneo.
- **Espera a una actualización completa.** Las pantallas ePaper utilizan un ciclo de actualización completo: los efectos parciales o de ghosting durante la actualización son normales y desaparecerán una vez que el ciclo se complete.

**P3: La placa no se enciende cuando se usa batería.**

- **Comprueba el interruptor de alimentación.** Desliza el interruptor de alimentación de la batería a la posición ON: la placa no tomará energía de la batería cuando el interruptor esté apagado.
- **Verifica la polaridad del conector JST.** Asegúrate de que el conector de batería JST de 2,0 mm esté conectado con la polaridad correcta. Invertir la polaridad de la batería puede dañar el hardware. Verifica las marcas +/− del conector antes de conectarlo.
- **Carga la batería.** Si la batería está completamente descargada, la placa puede no arrancar. Conecta USB Type-C para cargar la batería e inténtalo de nuevo.

**P4: El ordenador no detecta la placa o no aparece ningún puerto serie.**

- **Pulsa el botón RESET.** Con la placa conectada por USB, pulsa y suelta el botón RESET para volver a enumerar el puerto USB y luego inténtalo de nuevo.
- **Usa un cable USB con capacidad de datos.** Algunos cables USB solo proporcionan alimentación y no admiten transferencia de datos. Cambia a un cable de datos que sepas que funciona correctamente.
- **Comprueba el puerto USB.** Prueba con otro puerto USB de tu ordenador: algunos puertos pueden tener problemas de alimentación o de controladores.

**P5: La carga desde Arduino IDE falla.**

- **Selecciona la placa correcta.** Ve a **Tools** → **Board** y asegúrate de que **Seeed XIAO nRF52840 Plus** esté seleccionada. No elijas otras variantes de placas XIAO.
- **Selecciona el puerto correcto.** Ve a **Tools** → **Port** y elige el puerto serie correspondiente a tu placa. Si no aparece ningún puerto, comprueba tu cable USB y la conexión.
- **Entra en modo bootloader si es necesario.** Si la carga falla de forma constante, pulsa dos veces el botón RESET para entrar en modo bootloader, luego vuelve a seleccionar el puerto e intenta cargar de nuevo.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
