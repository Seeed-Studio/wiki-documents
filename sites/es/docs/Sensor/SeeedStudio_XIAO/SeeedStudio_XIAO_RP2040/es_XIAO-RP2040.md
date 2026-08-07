---
description: Descripción general
title: Primeros pasos con Seeed Studio XIAO RP2040
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/XIAO-RP2040/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO RP2040

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.jpg" alt="pir" width={400} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Descripción general

La serie Seeed Studio XIAO RP2040 incluye la **XIAO RP2040** y la **XIAO RP2040 Plus**. Ambas placas están impulsadas por el mismo microcontrolador Raspberry Pi RP2040, que incorpora un procesador Arm Cortex-M0+ de doble núcleo funcionando hasta 133 MHz y 264 KB de SRAM. Cada placa también incluye 2 MB de memoria Flash integrada. Como resultado, ofrecen el mismo rendimiento de procesamiento básico y comparten el mismo ecosistema de software RP2040.

Las principales diferencias entre las dos placas son el número de GPIO expuestos, las conexiones periféricas disponibles y las funciones de gestión de energía integradas.

La XIAO RP2040 estándar utiliza la huella XIAO común de 14 pines, que consta de 11 pines GPIO y tres pines de alimentación. Sus 11 pines de E/S digitales son compatibles con PWM, y cuatro de ellos también admiten entrada analógica. La placa proporciona interfaces I2C, UART, SPI y SWD en un factor de forma compacto de 21 × 17,8 mm.

La XIAO RP2040 Plus mantiene el mismo diseño XIAO común de 14 pines y añade 15 pads GPIO soldados en la parte posterior y los laterales de la placa. Esto aumenta el número total de pines de E/S digitales expuestos de 11 a 26. También añade una segunda interfaz I2C, pads dedicados para USB D+/D− y conexiones relacionadas con la batería, incluidas BAT+, BAT− y BAT_EN.

Para aplicaciones alimentadas por batería, la XIAO RP2040 Plus integra un PMIC a bordo, un indicador de carga de batería y protección contra retroceso de BAT a 3V3. Estas funciones adicionales hacen que la versión Plus sea más adecuada para placas portadoras personalizadas, montaje SMD, dispositivos alimentados por batería y proyectos que requieren más recursos de E/S.

Seeed Studio XIAO RP2040 es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Potente MCU RP2040:** Procesador Arm Cortex-M0+ de doble núcleo funcionando hasta 133 MHz
- **Amplios recursos de memoria:** 264 KB de SRAM y 2 MB de memoria Flash integrada
- **Amplia compatibilidad de software:** Compatible con Arduino, PlatformIO, MicroPython, CircuitPython, TinyGo, Rust, Zephyr y más
- **Huella XIAO común:** Ambas versiones mantienen el diseño estándar XIAO de 14 pines, incluidos 11 pines GPIO y tres pines de alimentación
- **Factor de forma compacto:** Diseño del tamaño de un pulgar de 21 × 17,8 mm para dispositivos vestibles y aplicaciones con espacio limitado
- **Interfaces estándar de XIAO RP2040:** 11 pines de E/S digitales, cuatro pines de entrada analógica, 11 pines compatibles con PWM, I2C, UART, SPI y SWD
- **E/S ampliada en XIAO RP2040 Plus:** Añade 15 pads GPIO para un total de 26 pines de E/S digitales, junto con una segunda interfaz I2C y pads dedicados para USB D+/D−
- **Gestión de batería integrada:** La XIAO RP2040 Plus incluye un PMIC integrado, indicación de carga de batería, conexiones dedicadas para batería y protección contra retroceso de BAT a 3V3
- **Opciones de montaje flexibles:** Pines comunes compatibles con protoboard combinados con bordes metalizados y pads compatibles con SMD para placas portadoras personalizadas

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Nombre del producto</th>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio XIAO RP2040 Plus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Chipset</strong></td>
      <td colspan="2">
        <a href="https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040">
          Raspberry Pi RP2040
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>Procesador</strong></td>
      <td colspan="2">Dual Cortex-M0+ hasta 133 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">264 KB SRAM</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB Flash integrada</td>
    </tr>
    <tr>
      <td><strong>Interfaz</strong></td>
      <td>
        Pin GPIO x14<br/>
        Pin digital × 11<br/>
        Pin analógico × 4<br/>
        Pin PWM × 11<br/>
        I2C × 1<br/>
        UART × 1<br/>
        SPI × 1
      </td>
      <td>
        Pin GPIO x29<br/>
        Pad GPIO adicional × 15<br/>
        Pin digital x26<br/>
        Pin analógico × 4<br/>
        PWM × 26<br/>
        I2C × 2<br/>
        UART × 1<br/>
        SPI × 1
      </td>
    </tr>
    <tr>
      <td><strong>Integrado en placa</strong></td>
      <td>
        LED de usuario × 1<br/>
        LED de encendido × 1<br/>
        LED verde × 1<br/>
        LED azul × 1<br/>
        LED rojo × 1<br/>
        LED RGB × 1<br/>
        Botón de reinicio × 1<br/>
        Botón de arranque × 1
      </td>
      <td>
        LED de usuario × 1<br/>
        LED de encendido × 1<br/>
        LED de carga (indicador de carga de batería) × 1<br/>
        LED RGB × 1<br/>
        Botón de reinicio × 1<br/>
        Botón de arranque × 1
      </td>
    </tr>
    <tr>
      <td><strong>Gestión de batería (PMIC)</strong></td>
      <td>Ninguno</td>
      <td>PMIC integrado</td>
    </tr>
    <tr>
      <td><strong>Alimentación</strong></td>
      <td colspan="2">
        Tensión de entrada (Type-C): 5V<br/>
        Tensión de entrada (BAT): 5V
      </td>
    </tr>
    <tr>
      <td><strong>Protección contra retroceso de BAT a 3V3</strong></td>
      <td>No</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td><strong>Compatibilidad de software</strong></td>
      <td colspan="2">
        Arduino, PlatformIO, MicroPython, CircuitPython, TinyGo, Rust, Zephyr y
        <a href="https://wiki.seeedstudio.com/es/xiao_topic_page/">más próximamente</a>
      </td>
    </tr>
    <tr>
      <td><strong>Temperatura de trabajo</strong></td>
      <td colspan="2">-40°C a 85°C</td>
    </tr>
    <tr>
      <td><strong>Dimensiones</strong></td>
      <td colspan="2">21 x 17,8 mm</td>
    </tr>
    <tr>
      <td><strong>Variantes</strong></td>
      <td>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html">
          Pack de 3 unidades Seeed Studio XIAO RP2040
        </a>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html">
          Seeed Studio XIAO RP2040 pre-soldado
        </a>
      </td>
      <td>Seeed Studio XIAO RP2040 Plus</td>
    </tr>
  </tbody>
</table>

## Descripción del hardware

<Tabs>
<TabItem value="XIAO RP2040" label="XIAO RP2040" default>

### Parte frontal de XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO RP2040 Plus" label="XIAO RP2040 Plus">

### Parte frontal de XIAO RP2040 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO RP2040 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
Para los pines de E/S generales:
La tensión de trabajo del MCU es de 3,3 V. Una tensión de entrada conectada a los pines de E/S generales puede causar daños al chip si es superior a 3,3 V.

Para los pines de alimentación:
El circuito convertidor DC-DC integrado capaz de convertir 5 V en 3,3 V permite alimentar el dispositivo con una fuente de 5 V a través de VIN-PIN y 5V-PIN.

XIAO RP2040 actualmente solo admite alimentación por batería y no puede conectarse a Type-C mientras hay una batería conectada, ya que puede suponer un riesgo de seguridad.

Por favor, presta atención al usarlo, no levantes la cubierta de blindaje.
:::

## **Mapa de pines**

| Pin XIAO   | Función               | XIAO RP2040  | XIAO RP2040 Plus | Descripción                                                  |
| :--------- | :--------------------- | :----------- | :---------------- | :----------------------------------------------------------- |
| 5V         | VBUS                   | VBUS         | VBUS              | Entrada/salida de alimentación USB de 5 V                    |
| GND        | GND                    | GND          | GND               | Tierra                                                       |
| 3V3        | 3V3_OUT                | 3V3_OUT      | 3V3_OUT           | Salida de alimentación de 3,3 V                              |
| D0         | A0                     | GPIO26       | GPIO26            | GPIO, ADC0                                                   |
| D1         | A1                     | GPIO27       | GPIO27            | GPIO, ADC1                                                   |
| D2         | A2                     | GPIO28       | GPIO28            | GPIO, ADC2                                                   |
| D3         | A3                     | GPIO29       | GPIO29            | GPIO, ADC3                                                   |
| D4         | SDA0                   | GPIO6        | GPIO6             | GPIO, datos I2C0                                             |
| D5         | SCL0                   | GPIO7        | GPIO7             | GPIO, reloj I2C0                                             |
| D6         | TX                     | GPIO0        | GPIO0             | GPIO, transmisión UART                                       |
| D7         | RX                     | GPIO1        | GPIO1             | GPIO, recepción UART                                         |
| D8         | SCK                    | GPIO2        | GPIO2             | GPIO, reloj SPI                                              |
| D9         | MISO                   | GPIO4        | GPIO4             | GPIO, entrada de datos SPI                                   |
| D10        | MOSI                   | GPIO3        | GPIO3             | GPIO, salida de datos SPI                                    |
| D11        | —                      | —            | —                 | No disponible como pin externo                               |
| D12        | GPIO                   | —            | GPIO18            | GPIO de expansión solo en Plus                               |
| D13        | SCL1                   | —            | GPIO21            | Reloj I2C1 solo en Plus                                      |
| D14        | SDA1                   | —            | GPIO20            | Datos I2C1 solo en Plus                                      |
| D15        | GPIO                   | —            | GPIO19            | GPIO de expansión solo en Plus                               |
| D16        | GPIO                   | —            | GPIO22            | GPIO de expansión solo en Plus                               |
| D17        | GPIO                   | —            | GPIO23            | GPIO de expansión solo en Plus                               |
| D18        | —                      | —            | —                 | No disponible como pin externo                               |
| D19        | GPIO                   | —            | GPIO5             | GPIO de expansión solo en Plus                               |
| D20        | GPIO                   | —            | GPIO13            | GPIO de expansión solo en Plus                               |
| D21        | GPIO                   | —            | GPIO14            | GPIO de expansión solo en Plus                               |
| D22        | GPIO                   | —            | GPIO15            | GPIO de expansión solo en Plus                               |
| D23        | GPIO                   | —            | GPIO16            | GPIO de expansión solo en Plus                               |
| D24        | GPIO                   | —            | GPIO17            | GPIO de expansión solo en Plus                               |
| D25        | GPIO                   | —            | GPIO10            | GPIO de expansión solo en Plus                               |
| D26        | GPIO                   | —            | GPIO9             | GPIO de expansión solo en Plus                               |
| D27        | GPIO                   | —            | GPIO8             | GPIO de expansión solo en Plus                               |
| Reset      | RUN                    | RUN          | RUN               | Entrada de reinicio                                          |
| Boot       | RP2040_BOOT            | RP2040_BOOT  | RP2040_BOOT       | Entrar en modo bootloader                                    |
| USER_LED_R | Canal rojo             | GPIO17       | —                 | Control directo del canal rojo del LED RGB en XIAO RP2040    |
| USER_LED_G | Canal verde            | GPIO16       | —                 | Control directo del canal verde del LED RGB en XIAO RP2040   |
| USER_LED_G | Canal azul             | GPIO25       | —                 | Control directo del canal azul del LED RGB en XIAO RP2040    |
| RGB_LED    | Datos WS2812B          | —            | GPIO12/NEOPIX     | Control de datos de color WS2812B de un solo hilo            |
| RGB_EN     | Habilitación WS2812B   | —            | GPIO11            | Habilita la alimentación del WS2812B; no es un pin de datos de color |
| User LED   | LED controlado por el usuario | —            | GPIO25            | LED de usuario independiente en XIAO RP2040 Plus             |
| BAT_EN     | Habilitación de batería | —            | GPIO24            | Control de alimentación de batería en Plus                   |
| CHARGE_LED | Indicador de carga     | —            | —                 | LED de estado de carga controlado por hardware; no es un GPIO de usuario |
| SWDIO      | Depuración SWD         | SWDIO        | RP2040_SWDIO      | Datos de Serial Wire Debug                                   |
| SWCLK      | Depuración SWD         | SWCLK        | RP2040_SWCLK      | Reloj de Serial Wire Debug                                   |
| USB_D+     | USB                    | -            | USB_DP      | Datos positivos USB 1.1 Full-Speed                           |
| USB_D-     | USB                    | -            | USB_DM      | Datos negativos USB 1.1 Full-Speed                           |

### Entrar en modo Bootloader

A veces el puerto de Seeed Studio XIAO RP2040 puede desaparecer cuando falla el proceso de programación del usuario. Podemos resolver este problema mediante la siguiente operación:

- Mantén pulsado el botón **B**.
- Conecta el Seeed Studio XIAO PR2040 a tu ordenador.
- En el ordenador aparecerá una unidad de disco.

En este punto, el chip entra en modo Bootloader y el puerto de grabación vuelve a aparecer. Debido a que el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa de usuario. El producto graba un código de bootloader en la memoria del sistema cuando sale de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

### Reinicio

Si quieres reiniciar el Seeed Studio XIAO RP2040, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO RP2040 a tu ordenador.
- Pulsa los pines **R** **una vez**.

Ten en cuenta: El comportamiento de los LED monocromos programables integrados (son rojo, azul y verde) es el inverso al de un Arduino. En el Seeed Studio XIAO RP2040, el pin debe ponerse en nivel bajo para habilitarlos.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.png" alt="pir" width={800} height="auto" /></p>

## Uso de la batería

:::note

Solo el XIAO RP2040 Plus incorpora un conector de batería BAT en su parte posterior, por favor tenlo en cuenta.

:::

El XIAO RP2040 Plus es capaz de utilizar una batería de litio de 3,7 V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

Ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar. Si la batería tiene carga, nunca la sueldes a la placa, ya que esto puede quemar la placa de circuito. Un cortocircuito mientras el circuito está alimentado supone un riesgo significativo; se recomienda utilizar un adaptador.

:::

### Ejemplo de lectura del voltaje de la batería

Según el esquema, el XIAO RP2040 Plus utiliza el circuito integrado cargador de baterías de iones de litio **SGM40567-4.2XG/TR** para proporcionar carga de corriente constante y voltaje constante para una batería de iones de litio de una sola celda. El estado de carga se indica mediante el parpadeo de **Charge_LED**.<br/>

El circuito de medición del voltaje de la batería utiliza un interruptor de carga **TPS22916CNYFPR** para habilitar o deshabilitar la ruta de medición. Cuando es necesario medir el voltaje de la batería, el MCU habilita la ruta de medición a través de **BAT_EN (GPIO24)**, reduciendo así el consumo de la batería mientras el dispositivo está en modo de espera.<br/>

Además, se utiliza un interruptor analógico **SGM4875XXDM6G/TR** para cambiar el canal de entrada del ADC. Controlado por **GPIO24/BAT_EN**, selecciona si la señal de medición de la batería u otra señal de entrada analógica se conecta al pin **A3 (GPIO29) ADC**, lo que permite multiplexar el pin del ADC.

:::tip

Cuando el pin A3 se utiliza como entrada ADC para medir el voltaje de la batería, no puede utilizarse al mismo tiempo como pin de E/S de propósito general. Asegúrate de tener esto en cuenta al asignar los pines.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_charge.png" style={{width:800, height:'auto'}}/></div>
<br/>

El voltaje de la batería se mide utilizando un circuito divisor de resistencias. El voltaje leído por el ADC es la mitad del voltaje real de la batería, por lo que el software debe multiplicar la medición del ADC por 2 para obtener el voltaje real de la batería.

<details>

<summary>Ejemplo de lectura de la batería</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX  = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // 10k / 10k voltage divider

float readBatteryVoltage() {
  // Enable voltage divider circuit and analog switch simultaneously
  digitalWrite(BAT_EN, HIGH);

  // Wait for U2 output, RC filter and ADC input to stabilize
  delay(10);

  // Discard one possibly stale ADC reading
  analogRead(A3);

  // Multiple sampling and averaging to reduce noise
  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(A3);
    delay(2);
  }

  // Turn off immediately after measurement to avoid continuous power consumption by divider resistors
  digitalWrite(BAT_EN, LOW);

  float adcRaw = sum / (float)samples;
  float a3Voltage = adcRaw * ADC_VREF / ADC_MAX;

  return a3Voltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(BAT_EN, OUTPUT);
  digitalWrite(BAT_EN, LOW);  // Disable detection circuit by default

  analogReadResolution(12);   // RP2040 Plus ADC: 0~4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

Para aplicaciones de bajo consumo, desactiva **BAT_EN** después de que se complete la medición del voltaje de la batería para reducir el consumo de energía en reposo causado por las resistencias del divisor de voltaje.

:::

- **Charge_LED** parpadea mientras la batería se está cargando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- Resultado de la medición del voltaje de la batería: El voltaje medido de una batería de iones de litio puede diferir del valor nominal impreso en la batería. Consulta siempre el valor medido real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_detection.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Visor de esquemáticos en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

### XIAO RP2040

**Diseño de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [Esquemático de XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[PCB Design Files]** 
  - [ Proyecto KiCad de XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [Proyecto Eagle de XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[PCB Design Libraries]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [Hoja de pinout de XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[2D Dimensions]** [Dimensiones 2D de XIAO RP2040 en DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[3D Model]** [ Modelo 3D de XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

### XIAO RP2040 Plus

**Diseño de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [Esquemático de XIAO RP2040 Plus](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_SCH.pdf )
- **🗃️[PCB Design Files]** 
  - [ Proyecto KiCad de XIAO RP2040 Plus](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
  - [Proyecto Eagle de XIAO RP2040 Plus](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
- **🗃️[PCB Design Libraries]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [Hoja de pinout de XIAO RP2040 Plus](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Plus-pinout.xlsx)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
