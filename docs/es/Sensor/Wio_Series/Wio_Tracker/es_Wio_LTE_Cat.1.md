---
title: Wio LTE Cat.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_LTE_Cat.1/
slug: /es/Wio_LTE_Cat.1
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_lte_v1.3.jpg)

Wio Tracker (Entrada y Salida Inalámbrica) es una puerta de enlace de código abierto que permite soluciones IoT GPS más rápidas. Es una placa de desarrollo compatible con Arduino y Grove que te ayuda a rastrear casi cualquier objeto en movimiento en el planeta y luego cargar esos datos de forma inalámbrica. El Wio LTE es la versión LTE del Wio Tracker, así que ahora tenemos 2 versiones del Wio Tracker y la versión LTE (4G) marcará algunas diferencias.

Hay tres actualizaciones principales comparando el Wio LTE con la versión 2G. Primero, por su nombre sabemos que el Wio LTE soporta comunicación LTE (4G) que es mucho más rápida y popular que 2G. Segundo, el Wio LTE soporta en total 4 GNSS diferentes – GPS, Beidou, GLONSS y Galileo, el QZSS también está soportado como bonus. Con más soporte GNSS, el posicionamiento será más preciso. Tercero, el MCU del Wio LTE está actualizado a STM32, que está basado en Cortex-M4, hace que el Wio LTE sea 5 veces más rápido que la versión 2G. Además, la memoria flash y RAM también se han aumentado a 1Mbytes y 192+4k bytes.

Aparte de las tres actualizaciones principales, la versión LTE es casi igual que la versión 2G. **Si tu proyecto está usando la versión 2G, sería muy fácil actualizar a la versión LTE porque hemos preparado una librería de comandos AT transplantable y expansible.** La compatibilidad con Arduino y Grove permite un desarrollo más rápido a través de numerosas librerías y una comunidad de apoyo. La librería GPS que estará disponible con la placa no está limitada solo a Arduino – puede funcionar igual de bien si eliges desarrollar en C/C++. Con las 6 conexiones Grove integradas, los desarrolladores pueden crear cualquier combinación de nuestros más de 180 sensores y actuadores para construir proyectos y resolver cualquier problema. Simplificar la fase de prototipado y desarrollo es nuestro objetivo.

El Wio LTE es muy adecuado para proyectos al aire libre donde el dispositivo puede conectarse a los satélites GPS y proporcionar una ubicación en tiempo real del elemento al que está conectado. El LTE proporciona un ancho de banda amplio que permite una interacción mucho más rápida entre el usuario y el dispositivo. Si vas a construir proyectos como un servicio de bicicletas compartidas, rastrear mascotas o ganado, localizar un vehículo, o incluso hacer seguimiento de un niño, el Wio LTE es la mejor solución.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/D6DX5P9ncrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution
    Por favor, siempre conecta una batería Lipo de 3.7V en caso de que la alimentación USB no sea suficiente.
:::

|Nombre del Producto | Cómo Comprar|
|----------------|-----------|
|Wio LTE Versión JP|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-JP-Version-v1-3-4G-Cat-1-p-3044.html)|
|Wio LTE Versión AU|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-AU-Version-v1-3-4G-Cat-1-GNSS-p-2947.html)|
|Wio LTE Versión EU|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-EU-Version-v1-3-4G-Cat-1-GNSS-p-3212.html)|
|Wio LTE Versión US|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-US-Version-v1-3-4G-Cat-1-p-4523.html)|

## Versión

| Versión del Producto | Cambios                                  | Fecha de Lanzamiento |
|-----------------|------------------------------------------|---------------|
| Wio Lte v1.0    | Inicial                                  | Jul 24, 2017  |
| Wio Lte v1.1    | Optimización de métodos de producción   | Oct 18, 2017  |
| Wio Lte v1.3    | Cambio de hardware con mejor fuente de alimentación | March 9, 2018 |
| Wio Lte v1.3b   | Ajustar el diseño                        | March 29, 2018|

**Notas de Lanzamiento Wio Lte v1.3**

Desde el lanzamiento de este producto, hemos recibido mucha retroalimentación y sugerencias de los usuarios. Decidimos mejorar aún más este producto basándonos en la retroalimentación de los usuarios, así que aquí lo ves, sale el Wio Lte v1.3.

Hicimos algunos cambios en el circuito de alimentación:

- Cambiar el PMIC (IC de gestión de energía) por MP2617, que es más estable.
- Eliminar el módulo DC-DC que alimenta el módulo Lte, en su lugar, en esta versión alimentamos el módulo Lte por el circuito principal o la batería Lipo.
- Agregar dos capacitores de 100uf para hacer la alimentación más estable.

Como puedes ver en las imágenes a continuación.

                      v1.3                                  v1.0

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver1.jpg)
![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver2.jpg)

Como el circuito de alimentación cambia, la lógica del indicador de alimentación también ha cambiado.

Estados del LED | Estados de la Batería
-----|----
LED ENCENDIDO| Cargando
LED apagado | Carga terminada
LED Parpadeando | Error de batería.(Incluyendo estados sin batería)

Además, la lógica del **Botón de Reset** también cambió.

Operación | Rango de Reset
---|---
Mantener el botón de reset por un tiempo corto(dentro de 2 segundos) | Reset del MCU/ El módulo Lte no se reseteará
Mantener el botón de reset por un tiempo corto(Más de 10 segundos)| Toda la placa se reseteará

## Características

- Conectividad LTE de bajo costo y bajo consumo optimizada para aplicaciones IoT de banda ancha
- LTE mundial y UMTS/HSPA+
- Unidad de gestión de energía (PMU) integrada con consumo de corriente ultra-bajo en modo de sueño profundo
- GPS/BeiDou/GLONASS/Galileo y QZSS
- Librería de comandos AT transplantable y expansible para Wio Tracker
- Compatible con Arduino IDE
- 6 conectores Grove
- Socket 2 en 1 para Nano SIM y tarjeta TF

## Especificaciones

| Elemento        | Función                | Valor                                                                           |
| --------------- | ---------------------- | ------------------------------------------------------------------------------- |
| Microcontrolador | Procesador             | STM32F405RG, ARM 32-bit Cortex-M4, 168MHZ                                       |
|                 | Memoria Flash          | 1MB                                                                             |
|                 | SRAM                   | 192+4KB                                                                         |
|                 | Voltaje de Operación   | 3.3V                                                                            |
|                 | Corriente DC por Pin I/O | 7 mA                                                                            |
| LTE             | LTE Cat.1              | Comando AT: 3GPP TS27.007 y comandos AT mejorados                              |
|                 | Datos                  | LTE-FDD Max 10Mbps(DL) Max 5Mbps (UL)                                           |
|                 |                        | Protocolo: TCP/UDP/PPP/FTP/HTTP/NTP/PING/QMI/HTTPS*/SMTP*/MMS*/FTPS*/SMTPS*/SSL* |
|                 | SMS                    | Mensaje Peer to Peer, difusión SMS, modo Texto y PDU                          |
|                 | Audio                  | Cancelación de eco, Eliminación de ruido                                            |
| GNSS            | Sistema                | GPS/BeiDou/GLONASS/Galileo/QZSS                                                 |
|                 | Precisión              | &lt;2.5 m CEP                                                                      |
| Periférico      | Grove                  | 2 x Puerto Digital                                                                |
|                 |                        | 2 x Puerto Analógico                                                                 |
|                 |                        | 1 x UART                                                                        |
|                 |                        | 1 x I2C                                                                         |
|                 | Antena                 | 2 x Antena LTE                                                                 |
|                 |                        | 1 x Antena GPS                                                                 |
|                 | Otros                  | USB: Fuente de alimentación y carga de programa                                            |
|                 |                        | Conector JST 1.0 para batería                                                   |
|                 |                        | Jack de Audio de 3.5mm                                                                |
|                 |                        | Botón de Reset MCU, Botón Boot(DFU) MCU，Botón de Encendido EC21                       |
|                 |                        | 1 x LED RGB de Usuario SK6812                                                         |
|                 |                        | Socket 2 en 1 para Nano SIM y tarjeta TF                                              |
| Tamaño          | Longitud               | 54.7mm                                                                          |
|                 | Ancho                  | 48.2mm                                                                          |
| Peso                    |                 | 18g                                                                                |  |

## Consumo de Energía

| Estado                                                                                 | Corriente                        |Voltaje                         |
| -------------------------------------------------------------------------------------- | -------------------------------- |--------------------------------|
| Arranque normal(momento de arranque)                                                   | 700mA                            |5V                              |
| Después del arranque(modo IDLE)                                                       | 300mA                            |5V                              |  
| Después del arranque, estado de comunicación normal (función de transmisión de red)   | 600mA aproximadamente, el pico alcanza 2A |5V                              |  
| Llamada y SMS(señal mejor)                                                            | 100-300mA                        |5V                              |  
| Modo de sueño profundo, apagar todas las funciones, requiere despertar externo (despertar solo por Reset) | 300uA                            |4.2V                            |  
| Modo de sueño profundo MCU, pin de despertar conectado al módulo, despertar vía módulo               | más de 300uA (requiere pruebas)    |4.2V                            |


:::note
    Hay dos condiciones de funcionamiento. Una es alimentación desde fuente USB de 5V. La otra es desde fuente de batería de 4.2v.   
:::

## Ideas de Aplicación

- Podómetro
- Esquí inteligente
- Vehículo de dos ruedas inteligente
- Bicicleta compartida
- Máquina de seguimiento de mascotas
- Reloj de localización para niños
- Reloj inteligente
- Sistema de localización de transporte
- Sistema de localización de vehículos
- Seguridad de propiedades

:::tip
    Usa módulos Grove para expandir tu aplicación. Hay 6 conectores Grove en la placa. Si es la primera vez que escuchas sobre Grove, por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/) para más detalles. En resumen, Grove son cientos de sensores en estilo estándar, que consisten en sensores, actuadores, pantallas así como comunicación.
:::

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1._top.png)

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1_buttom.png)

:::tip
    Si quieres usar el conector Grove integrado, por favor usa digitalWrite(B10, HIGH) para abrir 3V3_B. excepto D38 que se enciende por defecto. De lo contrario no podrás proporcionar energía a los módulos Grove.
:::
**Módulo EC21**

EC21 contiene 9 variantes: EC21-E, EC21-A, EC21-V, EC21-AUT, EC21-AUV, EC21-AU, EC21-KL, EC21-J y EC21-CEL. Esto lo hace compatible hacia atrás con las redes EDGE y GSM/GPRS existentes, asegurando que pueda migrar fácilmente de LTE a redes 2G o 3G.

Y **EC21-A** es lo que estamos usando en WIO Tracker - LTE, que soporta tarjetas SIM de AT&T y T-mobile. Si quieres personalizar el Módulo EC21 para otra región, no dudes en enviarnos un email: fae@seeed.cc

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>Frecuencia</th>
        <th className="tg-yw4l">EC21-E</th>
        <th className="tg-yw4l">EC21-A</th>
        <th className="tg-yw4l">EC21-V</th>
        <th className="tg-yw4l">EC21-AUT</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8／B20</td>
        <td className="tg-yw4l">B2／B4／B12</td>
        <td className="tg-yw4l">B4／B13</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B28</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B2／B4／B5</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l">B1／B5</td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l">B3／B8</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GNSS Integrado</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Interfaz Wi-Fi</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Región</td>
        <td className="tg-yw4l">EMEA, Corea, Tailandia, India</td>
        <td className="tg-yw4l">América del Norte</td>
        <td className="tg-yw4l">América del Norte</td>
        <td className="tg-yw4l">Australia</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Certificación</td>
        <td className="tg-yw4l">CE/ GCF/ Vodafone</td>
        <td className="tg-yw4l">FCC/ PTCRB/ AT&amp;T/ IC/ ROGERS</td>
        <td className="tg-yw4l">FCC/ GCF/ Verizon</td>
        <td className="tg-yw4l">RCM/ Telstra</td>
      </tr>
    </tbody></table>
  <br />
</div>

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>Frecuencia</th>
        <th className="tg-yw4l">EC21-AUV</th>
        <th className="tg-yw4l">EC21-AU</th>
        <th className="tg-yw4l">EC21-KL</th>
        <th className="tg-yw4l">EC21-J</th>
        <th className="tg-yw4l">EC20-CEL</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B8／B28</td>
        <td className="tg-yw4l">B1／B2①／B3／B4／B5／B7／B8／B28</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8</td>
        <td className="tg-yw4l">B1／B3／B8／B18／B19／B26</td>
        <td className="tg-yw4l">B1／B3／B5</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B40</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B1／B2／B5／B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">Cuatro bandas</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GNSS Integrado</td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">Opcional<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Interfaz Wi-Fi</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Región</td>
        <td className="tg-yw4l">Vodafone Australia</td>
        <td className="tg-yw4l">América del Sur, ANZ, Taiwán</td>
        <td className="tg-yw4l">Corea</td>
        <td className="tg-yw4l">Japón</td>
        <td className="tg-yw4l">China Telecom</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Certificación</td>
        <td className="tg-yw4l">RCM</td>
        <td className="tg-yw4l">RCM/ Anatel/ NCC</td>
        <td className="tg-yw4l">KC/ SKT/KT＊/ LGU+＊</td>
        <td className="tg-yw4l">JATE/ TELEC/ DOCOMO＊</td>
        <td className="tg-yw4l">CCC/ SRRC/ NAL</td>
      </tr>
    </tbody></table>
</div>

## Primeros Pasos

### Instalar controlador USB

- **Usuarios de Windows**: La mayoría de las versiones de Windows no cargarán automáticamente el controlador integrado para puertos com USB. Tendrás que descargar el controlador USB de ST [Controlador de Puerto COM Virtual STM32](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software).

- **Usuarios de Mac OS X y Chromebook**: ¡La placa simplemente se conectará y funcionará, sin controladores!

### Cambiar controlador DFU

**Para usuarios de Windows**:

- Paso 1. Mantén presionado el botón BOOT y conecta a la computadora, verás **Dispositivo STM32 en Modo DFU** en el administrador de dispositivos como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- Paso 2. Esto indica que necesitas usar [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) para cambiar el controlador DFU de **STTub30** a **WinUSB** como se muestra a continuación. Si no podemos ver ninguna información en Zadig, por favor haz clic en Opciones--> Listar Todos los Dispositivos, luego selecciona Puertos COM Virtuales STM32.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- Paso 3. Verás el "Puerto COM Virtual STMicroelectronics" en el administrador de dispositivos como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Jugar con Arduino

**1. Configuración de Software**

- Paso 1. Instala Arduino IDE, se recomienda versión de IDE superior a 1.8.0.
- Paso 2. Sigue [Cómo Agregar placas Seeed a Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para agregar Wio_LTE al administrador de placas de Arduino.

Copia y pega la URL json a las preferencias de Arduino

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio_LTE/img/boardManager_stm32.png" style={{width:800, height:'auto'}}/></div>


- Paso 3. Descarga la [Librería Wio_LTE](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library) desde Github.
- Paso 4. Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

**2. Jugar con Envío de SMS**

- Paso 1. Conecta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.

- Paso 2. Selecciona File--> Examples-->Wio_LTE_Arduino_Library-->SMSSend sketch.
- Paso 3. Cambia el número de teléfono y la información.
- Paso 4. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 5. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 6. Selecciona Tools-->Boards-->Wio_Tracker_LTE.
- Paso 7. Deja el Puerto COM en blanco.
- Paso 8. Selecciona Sketch-->Upload para subir el código al Wio_LTE.
- Paso 9. Presiona el botón **RST** para habilitar el puerto COM.

```cpp
#include "wio_tracker.h"

char message[128] = "Hello from Wio Traker!";

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }

  // Change xxxxxxxxxxx to your test phone number
  if(wio.sendSMS("185XXX26402", message))
  {
    SerialUSB.println("Send OK!");
  }
  else
  {
    SerialUSB.println("Send Error!");
  }

}

void loop() {
  AT_bypass();
}
```

- Paso 10. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.
- Paso 11. El propietario del número de teléfono recibirá el mensaje.

```cpp
Power On!


Network ready!


Send OK!
```

**3. Jugar con Lectura de SMS**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.
- Paso 2. Selecciona File--> Examples-->Wio_LTE_Arduino_Library-->SMSRead sketch.
- Paso 3. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 4. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 5. Selecciona Tools-->Boards-->Wio_Tracker_LTE.
- Paso 6. Deja el Puerto COM en blanco.
- Paso 7. Selecciona Sketch-->Upload para subir el código al Wio_LTE.
- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.

```cpp
#include "wio_tracker.h"

uint16_t newSMSNumber = -1;
char message[128];
char phone[32];
char dateTime[32];


WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");
  SerialUSB.println("Wait for network registered...");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }
  wio.readAllRecUnreadSMS();  // Set all "REC UNREAD SMS" to "REC READ SMS"
}

void loop() {
  int id = wio.detectRecUnreadSMS();
  if(-1 != id){
    newSMSNumber = id;
    wio.readSMS(newSMSNumber, message, 128, phone, dateTime);
    SerialUSB.println("++++++++++++++ Start +++++++++++++++++");
    SerialUSB.print("From: ");
    SerialUSB.println(phone);
    SerialUSB.print("Date: ");
    SerialUSB.println(dateTime);
    SerialUSB.println(message);
    SerialUSB.println("++++++++++++++++ End +++++++++++++++");
  } else {
    SerialUSB.println("Waiting for new SMS!");
  }

  delay(1000);
}

```

- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.
- Paso 10. Abre el monitor serial, cuando veas **Waitting for new SMS!**, envía un mensaje a la placa, el nuevo mensaje se mostrará pronto con el número de teléfono, hora y contenido.

```cpp
Power On!
Wait for network registered...


Network ready!


Waiting for new SMS!
Waiting for new SMS!
Waiting for new SMS!

++++++++++++++ Start +++++++++++++++++
From: 1375002xxxx
Date: 17/12/20,17:40:38+32
Hello tracker
++++++++++++++++ End +++++++++++++++
Waiting for new SMS!
Waiting for new SMS!
```

**4. Jugar con GPS**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.
- Paso 2. Selecciona File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_Show_Coordinate sketch.
- Paso 3. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 4. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 5. Selecciona Tools-->Boards-->Wio_Tracker_LTE.
- Paso 6. Deja el Puerto COM en blanco.
- Paso 7. Selecciona Sketch-->Upload para subir el código al Wio_LTE.
- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.

```cpp
#include "gnss.h"


GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }

  SerialUSB.println("Open GNSS OK.");
  delay(2000);
}

void loop() {
  if(gnss.getCoordinate()){
    SerialUSB.println();
    SerialUSB.print("GNSS: \r\n");

    // Output double type
    SerialUSB.print("Data type in double: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);

    // Output char* type
    SerialUSB.print("Data type in string: ");
    SerialUSB.print(gnss.str_longitude);
    SerialUSB.print(",");
    SerialUSB.println(gnss.str_latitude);
  } else{
    SerialUSB.print("...");
  }
}

```

- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.
- Paso 10. Veremos información de lat, lon impresa en pantalla.

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...

RDY
AT

OK


Power On!


Open GNSS OK.
.................................
GNSS:
Data type in double: 113.966255,22.583820
Data type in string: 113.966255,22.583819

GNSS:
Data type in double: 113.966248,22.583818
Data type in string: 113.966248,22.583818

GNSS:
Data type in double: 113.966248,22.583817
Data type in string: 113.966248,22.583816

GNSS:
Data type in double: 113.966248,22.583820
Data type in string: 113.966248,22.583819
```

**5. Jugar con GPS en modo NMEA**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.
- Paso 2. Selecciona File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_NMEA sketch.
- Paso 3. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 4. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 5. Selecciona Tools-->Boards-->Wio_Tracker_LTE.
- Paso 6. Deja el Puerto COM en blanco.
- Paso 7. Selecciona Sketch-->Upload para subir el código al Wio_LTE.
- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.

```cpp
#include "gnss.h"


char nmea_sentence[192];
char nmea_GSV_sentence[512];
GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }
  SerialUSB.println("Open GNSS OK.");
  gnss.enable_NMEA_mode();  // Set output sentence in NMEA mode
}

void loop() {  
  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GGA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(RMC, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GSA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(VTG, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_GSV_sentence, 512);
  gnss.read_NMEA_GSV(nmea_sentence);
  SerialUSB.print(nmea_sentence);

  SerialUSB.println("\r\n");

  delay(1000);
}

```

- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.
- Paso 10. Veremos los siguientes registros.

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Power On!


Open GNSS OK.

$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,16,60,324,40,27,54,171,40,03,19,253,,08,21,198,*7B
$GPGSV,3,2,12,09,02,322,,14,32,147,,21,04,080,,22,17,233,*7E
$GPGSV,3,3,12,23,32,314,,26,45,018,,31,35,073,,32,10,149,*7C


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,03,19,253,38,08,21,198,34,14,32,147,37,16,60,324,42*70
$GPGSV,3,2,12,22,17,233,37,23,32,314,38,26,45,018,40,27,54,171,44*7D
$GPGSV,3,3,12,31,35,073,40,09,02,322,,21,04,080,,32,10,149,*75


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,13,03,19,253,40,04,,,37,08,21,198,36,09,02,322,33*43
$GPGSV,4,2,13,14,32,147,37,16,60,324,41,22,17,233,40,23,32,314,39*72
$GPGSV,4,3,13,26,45,018,41,27,54,171,41,31,35,073,40,21,04,080,*78
$GPGSV,4,4,13,32,10,149,*47


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,14,03,19,253,39,04,,,37,08,21,198,36,09,02,322,34*4D
$GPGSV,4,2,14,14,32,147,36,16,60,324,41,22,17,233,37,23,32,314,39*74
$GPGSV,4,3,14,26,45,018,41,27,54,171,41,31,35,073,41,21,04,080,*7E
$GPGSV,4,4,14,32,10,149,,33,,,34*47
$GPVTG,,T,,M,,N,,K,N*2C


$GPGGA,110917.30,2235.028403,N,11357.974736,E,1,10,0.9,52.2,M,-1.0,M,,*43
$GPRMC,110917.30,A,2235.028403,N,11357.974736,E,0.0,,050118,2.3,W,A*0B
$GPGSA,A,3,03,08,09,14,16,22,23,26,27,31,,,1.8,0.9,1.6*37
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C
$GPGSV,4,1,15,03,19,253,38,04,,,36,08,21,198,34,09,02,322,33*49
$GPGSV,4,2,15,14,32,147,36,16,60,324,40,22,17,233,36,23,32,314,38*74
$GPGSV,4,3,15,26,45,018,40,27,54,171,40,31,35,073,40,21,04,080,*7E
$GPGSV,4,4,15,32,10,149,,33,,,34,46,,,34*43
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C

```

**6. Jugar con Llamada saliente**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.
- Paso 2. Selecciona File--> Examples-->Wio_LTE_Arduino_Library-->Callup sketch.
- Paso 3. Cambia el número de teléfono.
- Paso 4. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 5. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 6. Selecciona Tools-->Boards-->Wio_Tracker_LTE.
- Paso 7. Deja el Puerto COM en blanco.
- Paso 8. Selecciona Sketch-->Upload para subir el código al Wio_LTE.
- Paso 9. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 10. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.
- Paso 11. El propietario del número de teléfono recibirá la llamada.


```cpp
#include "wio_tracker.h"

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  while(!wio.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  bool ret = wio.waitForNetworkRegister();
  if(true == ret){
      SerialUSB.println("Network accessed!");
  }else {
      SerialUSB.println("Network failed!");
      return;
  }

  // Make a phone call
  wio.callUp("185XXX26402");
  SerialUSB.println("Calling...");

}

void loop() {
  /* Debug */
  AT_bypass();
}

```

**7. Jugar con cliente Socket TCP/UDP**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del lado de la placa PCB.
- Paso 2. Selecciona Archivo--> Ejemplos-->Wio_LTE_Arduino_Library-->TCPConnect.
- Paso 3. Cambia el número de teléfono.
- Paso 4. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 5. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 6. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 7. Deja el Puerto COM en blanco.
- Paso 8. Selecciona Sketch-->Subir para cargar el código al Wio_LTE.

```cpp
#include "ethernet.h"

Ethernet eth = Ethernet();


// const char apn[10] = "CMNET";
const char apn[10] = "UNINET";
const char URL[100] = "mbed.org";
char http_cmd[100] = "GET /media/uploads/mbed_official/hello.txt HTTP/1.0\n\r\n\r";
int port = 80;

int ret = 0;


void setup() {
  SerialUSB.println("Begin...");
  eth.Power_On();
  while(false == eth.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }

  while(!eth.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  eth.join(apn);
  SerialUSB.print("\n\rIP: ");
  SerialUSB.print(eth.ip_string);

  if(eth.connect(URL, port, TCP))
  {
    eth.write(http_cmd);
    while(MODULE_PORT.available()){
        serialDebug.write(MODULE_PORT.read());
    }    
    eth.close(1);
  }
  else {
    SerialUSB.println("Connect Error!");
  }

}

void loop() {
  /* Debug */
  AT_bypass();
}
```

- Paso 9. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 10. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.

```
Begin...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Initialize done...


IP: 10.229.226.108


+QIURC: "recv",0,389
HTTP/1.1 200 OK
Server: nginx/1.11.12
Date: Mon, 25 Dec 2017 04:45:01 GMT
Content-Type: text/plain
Content-Length: 14
Connection: close
Last-Modified: Fri, 27 Jul 2012 13:30:34 GMT
Accept-Ranges: bytes
Cache-Control: max-age=36000
Expires: Mon, 25 Dec 2017 14:44:58 GMT
X-Upstream-L1-next-hop: 217.140.101.22:8080
X-Upstream-L1: developer-sjc-cyan-border-nginx

Hello world!


+QIURC: "closed",0
```

**8. Jugar con tarjeta SD**

:::note
    El firmware Epruino v1.94 no soporta la unidad de tarjeta SD, por favor usa v1.96 o posterior, la versión más reciente es v1.99.
:::

- Paso 1. Inserta la tarjeta micro SD en la ranura de tarjeta SD.
- Paso 2. Selecciona Archivo--> Ejemplos-->Wio_LTE_Arduino_Library-->SDCard->CardInfo.
- Paso 3. Cambia el número de teléfono.
- Paso 4. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 5. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 6. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 7. Deja el Puerto COM en blanco.
- Paso 8. Selecciona Sketch-->Subir para cargar el código al Wio_LTE.

```cpp
 // include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

const int chipSelect = 43;

void setup()
{

  SerialUSB.print("\nInitializing SD card...");
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  }

  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);

  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}
```

- Paso 9. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 10. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.

```cpp

Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):

```

**9. Jugar con módulo Grove**

**9.1 Jugar con módulo Grove Digital**  

Usamos [Grove-TemperatureAndHumidity_Sensor](https://wiki.seeedstudio.com/es/Grove-TemperatureAndHumidity_Sensor/) como entrada digital y lo conectamos a D20 del Wio LTE.

- Paso 1. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 2. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 3. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 4. Deja el Puerto COM en blanco.
- Paso 5. Descarga [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) y [Grove-TemperatureAndHumidity_Sensor Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip) desde Github. Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar biblioteca para Arduino.
- Paso 6. Copia el código de abajo al Sketch.
- Paso 7. Haz clic en Subir para cargar el código al Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include "DHT.h"
#define DHTPIN  (WIOLTE_D20)
#define INTERVAL    (100)

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11 
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

WioLTE Wio;
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Initial temperature and humidity sensor.");
  dht.begin();
}

void loop()
{
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) 
    {
        SerialUSB.println("Failed to read from DHT");
    } 
    else 
    {
        SerialUSB.print("Humidity: "); 
        SerialUSB.print(h);
        SerialUSB.print(" %\t");
        SerialUSB.print("Temperature: "); 
        SerialUSB.print(t);
        SerialUSB.println(" *C");
    }
}
```

- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.

```
### I/O Initialize.
### Power supply ON.
### Initial temperature and humidity sensor.
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 39.00 % Temperature: 27.00 *C
```

**9.2 Jugar con módulo Grove Analógico**  

Usamos [Grove-Light Sensor](https://wiki.seeedstudio.com/es/Grove-Light_Sensor/) como entrada analógica y lo conectamos a A4 del Wio LTE(ADC de 12 bits).

- Paso 1. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 2. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 3. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 4. Deja el Puerto COM en blanco.
- Paso 5. Descarga [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) desde Github. Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar biblioteca para Arduino.
- Paso 6. Copia el código de abajo al Sketch.
- Paso 7. Haz clic en Subir para cargar el código al Wio_LTE.

```c
#include <WioLTEforArduino.h>
#define LIGHT_PIN  (WIOLTE_A4)
WioLTE Wio;

void setup() {
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Setup pin mode.");
  pinMode(LIGHT_PIN, INPUT_ANALOG);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  SerialUSB.println(light);
  delay(1000);
}

```

- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.


```
### I/O Initialize.
### Power supply ON.
### Setup pin mode.
2531
2530
2530
2530
2531
2533
2532
2531
```

**9.3 Jugar con el Módulo Grove I2C**  

Usamos [Grove - Acelerómetro Digital de 3 Ejes(±16g)](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Accelerometer-16g/) como dispositivo I2C y lo conectamos al puerto I2C del Wio LTE.

- Paso 1. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 2. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 3. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 4. Mantén el Puerto COM en blanco.
- Paso 5. Descarga la [Librería WioLTEforArduino](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) y [ADXL345](https://github.com/Seeed-Studio/Accelerometer_ADXL345/archive/master.zip) desde Github. Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- Paso 6. Copia el código de abajo al Sketch.
- Paso 7. Haz clic en Subir para cargar el código al Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       

#define INTERVAL    (100)

WioLTE Wio;
ADXL345 Accel;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  Accel.powerOn();
  SerialUSB.println("### Setup completed.");
}

void loop()
{
  int x;
  int y;
  int z;
  Accel.readXYZ(&x, &y, &z);
  SerialUSB.print(x);
  SerialUSB.print(' ');
  SerialUSB.print(y);
  SerialUSB.print(' ');
  SerialUSB.println(z); 
  delay(INTERVAL);
}
```

- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.

```
### I/O Initialize.
### Power supply ON.
### Setup completed.
-224 -51 -82
-227 -40 -90
-231 -37 -91
-229 -37 -90
-227 -38 -90
-229 -39 -90
```

**9.4 Jugar con el Módulo Grove UART**  

Usamos [Grove-CO2](https://wiki.seeedstudio.com/es/Grove-CO2_Sensor/) como dispositivo UART y lo conectamos al puerto UART del Wio LTE.

- Paso 1. Mantén presionado el botón BOOT en la parte trasera del Wio LTE y conecta el USB a la PC.
- Paso 2. Veremos **STM BOOTLARDER** en el administrador de dispositivos.
- Paso 3. Selecciona Herramientas-->Placas-->Wio_Tracker_LTE.
- Paso 4. Mantén el Puerto COM en blanco.
- Paso 5. Descarga la [Librería WioLTEforArduino](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) desde Github. Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- Paso 6. Copia el código de abajo al Sketch.
- Paso 7. Haz clic en Subir para cargar el código al Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       
#define INTERVAL    (100)

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

WioLTE Wio;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("Initial UART.");
  Serial.begin(9600);
}

void loop() {
    if(dataRecieve())
    { 
        SerialUSB.print("Temperature: ");
        SerialUSB.print(temperature);
        SerialUSB.print("  CO2: ");
        SerialUSB.print(CO2PPM);
        SerialUSB.println("");
    }
    delay(1000); 
}


bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    //transmit command data
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        Serial.write(cmd_get_sensor[i]);
    }
    delay(10);
    //begin reveiceing data
    if(Serial.available())
    {
        while(Serial.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = Serial.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.
- Paso 9. Usa herramientas de monitor COM para imprimir el mensaje serial. **¡Por favor no uses el monitor COM del IDE de Arduino! Eso puede causar que la próxima descarga falle, pero reabrir el IDE de Arduino puede recuperar ese problema**.

```
### I/O Initialize.
### Power supply ON.
### Initial UART.
Temperature: 22  CO2: 410
Temperature: 22  CO2: 1031
Temperature: 22  CO2: 2699
Temperature: 22  CO2: 2579
Temperature: 22  CO2: 2972
```

## FAQ

**P1: Fallamos al usar el IDE de Arduino para descargar el programa y vemos la siguiente información de error en la parte inferior del IDE de Arduino.**

R3: Es un error. Cuando se usa el puerto serial de Arduino para imprimir información, el IDE de Arduino recuerda el número del puerto serial. Así que no hay puerto serial disponible para descargar un nuevo programa. Podemos reiniciar el IDE de Arduino para resolver el problema como solución temporal. Para la solución preventiva, por favor usa otro software de monitor COM, como SSCOM. Por favor asegúrate de que vemos la barra de progreso durante la descarga del programa. De lo contrario, veremos la siguiente información y el programa no se descarga.

```
Sketch uses 23068 bytes (2%) of program storage space. Maximum is 1048576 bytes.
Global variables use 13864 bytes of dynamic memory.
DFU begin
dfu-util 0.8

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2014 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to dfu-util@lists.gnumonks.org

Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release!!!
No DFU capable USB device available
DFU end
```

**P2: No podemos ver el puerto COM en el administrador de dispositivos después de cambiar el controlador dfu.**

R5: Por favor presiona el botón RST y veremos el puerto COM en el administrador de dispositivos.

**P3: No podemos ver ninguna información en el software Zadig.**

R6: Por favor haz clic en Opciones--> Listar Todos los Dispositivos, luego selecciona STM32 Virtual COM Ports.

## Visor Online del Esquemático Wio LTE AU Versión v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor Online del Esquemático Wio LTE EU Versión v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor Online del Esquemático Wio LTE JP Versión v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor Online del Esquemático Wio LTE US Versión v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Wio LTE AU Versión v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE EU Versión v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE JP Versión v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE US Versión v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Librería]** [Wio_LTE_Arduino_Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)

- **[Hoja de Datos]** [Comando AT](https://files.seeedstudio.com/wiki/Wio_LTE/res/AT_Command.zip)

## Proyectos

**Visualización de datos de transporte con Google Map**：Usamos el Wio LTE cat.1 para monitorear el GPS de transporte y otra información. Para la cadena de frío, podemos monitorear la ubicación GPS junto con la temperatura y humedad. Para el ciclismo, podemos monitorear la ubicación GPS junto con la frecuencia cardíaca.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>

**Visualización de Contaminación Atmosférica**：El problema de la contaminación del aire atrae cada vez más atención. Esta vez intentamos monitorear PM2.5 con Wio LTE y el nuevo Sensor Láser PM2.5.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## Soporte Técnico y Discusión del Producto

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
