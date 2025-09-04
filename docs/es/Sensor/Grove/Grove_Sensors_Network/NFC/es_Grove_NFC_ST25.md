---
description: Este Wiki trata sobre el uso del Grove - NFC (ST25DV64).
title: Grove - NFC(ST25DV64)
keywords:
- NFC
- ST25DV64
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove-nfc-st25dv64
last_update:
  date: 5/16/2023
  author: Stephen Lo
---

# Grove - NFC (ST25DV64)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={450} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-NFC-ST25DV64KC-p-5688.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - NFC (ST25DV64) es una placa de etiqueta NFC/RFID innovadora y versátil basada en el chip avanzado ST25DV64K de STMicroelectronics. Este chip dinámico soporta los estándares ISO/IEC 15693 y NFC Forum Type 5 tag, haciéndolo compatible con una amplia gama de dispositivos habilitados para NFC.

Diseñado para makers, entusiastas del bricolaje y cualquier persona interesada en experimentar con la tecnología NFC, el Grove - NFC (ST25DV64) ofrece una solución simple y rentable para agregar funcionalidad NFC a tus proyectos. Con su naturaleza de código abierto, no solo puedes usar esta placa tal como está, sino también modificarla para que se adapte mejor a tus necesidades específicas, ya sea que estés construyendo un sistema de hogar inteligente, un dispositivo de control de acceso seguro, una solución de pago sin contacto o un sistema de seguimiento de inventario.

El Grove - NFC (ST25DV64) es más que solo una etiqueta NFC. También es una herramienta poderosa que puedes usar para aprender sobre la tecnología NFC y sus aplicaciones. Con sus características ricas, puedes explorar varios aspectos del NFC, desde la transferencia de datos y la recolección de energía hasta la protección de datos y la salida de propósito general.

Esta placa está diseñada pensando en la conveniencia. Cuenta con el conector estándar Grove (HY2.0 - 4Pin), haciéndola fácilmente compatible con otros módulos Grove. Además, funciona con sistemas de 3.3V y 5V, convirtiéndola en una solución flexible para tus necesidades de NFC.

A pesar de su pequeño tamaño, el Grove - NFC (ST25DV64) es potente cuando se trata de almacenamiento. Ofrece 64 Kbits de EEPROM, organizados en 2048 bloques de 32 bits cada uno, proporcionando amplio espacio para tus datos.

Nota: Por favor recuerda que el Grove - NFC (ST25DV64) no viene con una antena NFC. Necesitarás comprar una antena NFC de 13.56MHz por separado para usar con este producto. También puedes comprar esta antena en Seeedstudio.

Ya seas nuevo en NFC o un desarrollador experimentado buscando una solución NFC fácil de usar, el Grove - NFC (ST25DV64) es una excelente opción. Su software y hardware de código abierto, combinado con su facilidad de uso y versatilidad, lo convierten en una herramienta invaluable para cualquier proyecto NFC.

:::tip
Hemos lanzado la [Guía de Selección de Sensores de Gas de Seeed](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Características

- Basado en el chip ST25DV64K, soporta los estándares ISO/IEC 15693 y NFC Forum Type 5 tag
- 64 Kbits de EEPROM, organizados en 2048 bloques de 32 bits cada uno
- Recolección de energía y GPO (Salida de Propósito General)
- Modo de transferencia rápida y múltiples niveles de protección de datos
- Compatible con sistemas de 3.3V y 5V
- Usa el conector estándar Grove (HY2.0 - 4Pin) para fácil integración con otros módulos Grove
- Software y hardware de código abierto

## Especificaciones

- Chip: ST25DV64K
- Frecuencia de operación: 13.56 MHz
- Protocolo: ISO/IEC 15693
- Interfaz de comunicación: I2C
- Conector Grove: 4 pines HY2.0
- Voltaje de operación: 3.3/5V

## En la Caja

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/2.jpg" alt="pir" width={500} height="auto" /></p>

- 1x Placa Grove - NFC(ST25DV64)
- 2x Cable Grove(20cm)

## Aplicaciones

- **Control de Acceso:** Usa el Grove - NFC (ST25DV64) como una tarjeta llave para sistemas de control de acceso.
- **Automatización del Hogar Inteligente:** Almacena datos de configuración en la etiqueta para controlar dispositivos domésticos inteligentes o activar acciones específicas.
- **Pagos sin Contacto:** Integra la etiqueta en un sistema de pago para transacciones sin contacto.
- **Emparejamiento de Dispositivos:** Simplifica el proceso de emparejamiento entre dispositivos almacenando información de conexión en la etiqueta NFC.
- **Seguimiento de Inventario:** Adjunta la etiqueta NFC a productos para almacenar información del producto y simplificar la gestión de inventario.

## Descripción General del Hardware

### Mapa de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/3.png" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Materiales requeridos

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Antena NFC</th>
      <th>Grove - NFC(ST25DV64)</th>
  </tr>
    <tr>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://raw.githubusercontent.com/Longan-Labs/NFC_ST25DV_RES/main/images/NFC_ANTENNA.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={250} height="auto" /></p></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/NFC-Antenna-p-1805.html?queryID=32009a01d3dd8bba3d47aacebce9f91d&objectID=1138&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::note
**1**. Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2**. Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - NFC (ST25DV64) al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

:::note
El Grove - NFC (ST25DV64) no viene con una antena NFC. Por lo tanto, necesitarás comprar una antena NFC de 13.56MHz por separado para usar con este producto. También puedes comprar esta antena en Seeedstudio.
:::

| Seeeduino     | Grove - NFC (ST25DV64) |
|---------------|-------------------------|
| 3.3/5V        | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

- **Paso 1.** Descarga la [Librería Arduino ST25DV](https://github.com/limengdu/ST25DV) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Después de descargar e instalar la librería correctamente, puedes encontrar un programa de ejemplo llamado `ST25DV_HelloWorld.ino` en la carpeta de ejemplos. Este programa está diseñado para el módulo ST25DV.

```cpp
#include "ST25DVSensor.h"

#define DEV_I2C         Wire
ST25DV st25dv(12, -1, &DEV_I2C);

void setup() {
  const char uri_write_message[] = "seeedstudio.com";       // Uri message to write in the tag
  const char uri_write_protocol[] = URI_ID_0x01_STRING; // Uri protocol to write in the tag
  String uri_write = String(uri_write_protocol) + String(uri_write_message);
  String uri_read;

  // Initialize serial for output.
  Serial.begin(115200);

  // The wire instance used can be omitted in case you use default Wire instance
  if(st25dv.begin() == 0) {
    Serial.println("System Init done!");
  } else {
    Serial.println("System Init failed!");
    while(1);
  }

  if(st25dv.writeURI(uri_write_protocol, uri_write_message, "")) {
    Serial.println("Write failed!");
    while(1);
  }

  delay(100);
  
  if(st25dv.readURI(&uri_read)) {
    Serial.println("Read failed!");
    while(1);
  }

  Serial.println(uri_read.c_str());

  if(strcmp(uri_read.c_str(), uri_write.c_str()) == 0) {
    Serial.println("Successfully written and read!");
  } else {
    Serial.println("Read bad string!");
  }
}

void loop() {  
  //empty loop
} 
```

- **Paso 4.** Sube la demostración.

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. Obtendrás el siguiente resultado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/5.png" alt="pir" width={700} height="auto" /></p>

Después de subir el programa proporcionado a tu Arduino, tu Grove - NFC (ST25DV64) se convierte en una etiqueta NFC completamente funcional, que puede operar de forma independiente. Puedes retirarlo de tu placa Arduino; no requiere ninguna configuración adicional para funcionar.

Para probar su funcionalidad, necesitarás un smartphone habilitado para NFC, ya sea Android o Apple. La antena NFC para este dispositivo está ubicada adyacente a la cámara. Sin embargo, si no estás seguro sobre la ubicación de la antena NFC en tu smartphone, sería beneficioso buscarlo en línea.

Coloca la antena NFC del teléfono cerca de la antena NFC del Grove - NFC (ST25DV64). Tu smartphone debería mostrar una solicitud pidiendo abrir una página web en st.com. Esta respuesta indica que tu Grove - NFC (ST25DV64) está funcionando correctamente como una etiqueta NFC y demuestra la funcionalidad de la demostración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/4.jpg" alt="pir" width={300} height="auto" /></p>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://github.com/Longan-Labs/NFC_ST25DV_RES/raw/main/Grove%20-%20NFC(ST25DV64).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - NFC(ST25DV64)](https://files.seeedstudio.com/wiki/Grove-NFCST25/Grove-NFC(ST25DV64).zip)
- **[PDF]** [Hoja de Datos ST25DV64K](https://files.seeedstudio.com/wiki/Grove-NFCST25/st25dv.pdf)

## Soporte Técnico y Discusión de Productos

.

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
