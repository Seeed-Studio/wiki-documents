---
description: El HAT 4G LTE para Raspberry Pi con tecnología Quectel EG25-GL ofrece conectividad de alta velocidad y posicionamiento GNSS preciso, lo que lo hace ideal para aplicaciones IoT y M2M. Compatible con Raspberry Pi y PCs, admite bandas de frecuencia globales, seguimiento en tiempo real y comunicación confiable para un uso versátil en diversas industrias.

title: Primeros Pasos con el HAT 4G LTE para Raspberry Pi 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - M2M
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /es/getting_started_raspberry_pi_4g_lte_hat
last_update:
  date: 06/05/2025
  author: Guillermo
---

## Visión General

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

El HAT 4G para Raspberry Pi es un complemento potente y versátil diseñado para una integración fluida con modelos Raspberry Pi, incluyendo A+, B+, Pi 2, Pi 3, Pi 4, Pi 5 y Zero, así como con PCs. Equipado con un conector GPIO de 40 pines, garantiza compatibilidad plug-and-play sencilla. Este HAT incorpora el módulo Quectel EG25-GL CAT4 LTE, que proporciona comunicación 4G de alta velocidad, funcionalidad SMS e integración con plataformas en la nube para aplicaciones IoT y M2M. Además, ofrece posicionamiento GNSS preciso con la tecnología Qualcomm® IZat, siendo ideal para routers industriales, tabletas robustas, transmisión de video y señalización digital. El HAT permite comunicación a través de UART y USB, con herramientas de software incluidas para configuración y depuración mediante comandos AT.

En su núcleo, el módulo EG25-GL garantiza un rendimiento robusto con soporte para bandas de frecuencia globales, ofreciendo conectividad confiable en redes LTE, UMTS/HSPA+ y GSM/GPRS/EDGE. Compatible hacia atrás con 4G, 3G y 2G, admite múltiples protocolos de comunicación como MIMO, DFOTA y DTMF. Su receptor GNSS multiconstelación asegura posicionamiento preciso y rápido.

## Contenido del Paquete

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" 
    style={{ width: 600}} 
  />
</div>

El paquete del HAT 4G LTE incluye todo lo necesario para su instalación y operación:

- **Tornillos y espaciadores**: Todo el hardware necesario para montar y fijar el HAT de forma segura.  
- **Destornillador**: Herramienta para facilitar la instalación.  
- **2 antenas 4G**: Aseguran conectividad LTE confiable.  
- **Adaptador USB-A a USB-C**: Permite la conexión entre el HAT y el puerto USB 3.0 de la Raspberry Pi.  
- **Encabezado de pines apilables 2x20**: Proporciona la altura necesaria para una alineación y separación adecuadas durante la instalación.  
- **Cable de datos Tipo-C de 0.3 m**: Compatible tanto con la alimentación como con la transmisión de datos.

## Preparación del Hardware
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>Antena GPS</th>
        <th>HAT Raspberry Pi 4G LTE CAT4</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Características

- Soporta bandas de frecuencia globales sin restricciones regionales.
- Plug-and-play con Raspberry Pi, no requiere instalación de drivers.
- Incluye 2 antenas LTE y todos los accesorios de montaje necesarios, sin compras adicionales.
- Comunicación LTE CAT4 de alta velocidad, soporta hasta 150 Mbps (descarga) y 50 Mbps (subida).
- Soporta dial-up, SMS, TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE.
- Soporta GNSS: GPS, GLONASS, BDS, Galileo, QZSS.
- Permite comunicación 4G de alta velocidad con Raspberry Pi/PC vía interfaz USB 2.0.
- Interfaz de alimentación USB-C adicional que soporta protocolo PD y puede suministrar hasta 27W de potencia para el módulo 4G y Raspberry Pi, ofreciendo mayor capacidad de carga.
- LEDs a bordo para estado PWR/NET, facilitando el monitoreo del estado de red y operación del módulo.
- Botón RST PWR integrado para reset manual rápido y control de encendido/apagado del módulo.
- Pines RST/PWR/RX/TX conectados a Raspberry Pi vía GPIO de 40 pines, permitiendo control de reset, encendido/apagado del módulo y comunicación UART activable por DIP Switch.

## Especificaciones

### Especificaciones del Módulo EG25-GL 4G

| **Atributo**                  | **Detalles**                                                                |
|------------------------------|-----------------------------------------------------------------------------|
| **Región/Operador**           | Global                                                                      |
| **Dimensiones (mm)**          | 29.0 × 32.0 × 2.4                                                          |
| **Peso (g)**                  | Aproximadamente 4.9                                                         |
| **Temperatura de operación** | -35°C a +75°C                                                              |
| **Temperatura extendida**     | -40°C a +85°C                                                              |
| **Bandas de frecuencia**      |                                                                             |
| - LTE-FDD                    | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                                  |
| - LTE-TDD                    | B34/38/39/40/41                                                             |
| - WCDMA                      | B1/2/4/5/6/8/19                                                             |
| - TD-SCDMA                   | No soportado                                                                |
| - GSM/EDGE                   | B2/3/5/8                                                                    |
| **GNSS**                     | GPS/GLONASS/BDS/Galileo/QZSS                                               |
| **Características mejoradas**|                                                                             |
| - DTMF                      | Soportado                                                                   |
| - DFOTA                     | Soportado                                                                   |
| - QMI/RmNet                 | Soportado                                                                   |
| - QuecFile®                 | Soportado                                                                   |
| - Detección de tarjeta (U)SIM| Soportado                                                                  |
| **Velocidades máximas de datos**|                                                                         |
| - LTE-FDD (Mbps)            | 150 (Descarga) / 50 (Subida)                                               |
| - LTE-TDD (Mbps)            | 130 (Descarga) / 30 (Subida)                                               |
| - DC-HSPA+ (Mbps)           | 42 (Descarga) / 5.76 (Subida)                                              |
| - WCDMA (kbps)              | 384 (Descarga) / 384 (Subida)                                              |
| - EDGE (kbps)               | 296 (Descarga) / 236.8 (Subida)                                            |
| - GPRS (kbps)               | 107 (Descarga) / 85.6 (Subida)                                             |
| **Protocolos soportados**    | TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE |
| **Características eléctricas**|                                                                           |
| - Rango de voltaje          | 3.3–4.3 V, típico 3.8 V                                                    |
| - Consumo en apagado        | 7 µA                                                                       |
| - Consumo en modo sleep     | 1.3 mA                                                                     |
| - Consumo en modo inactivo  | 15.7 mA                                                                    |

## Resumen de Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### Conexión del HAT 4G LTE y GPIO de Raspberry Pi


El HAT 4G LTE se conecta a la Raspberry Pi a través de su interfaz estándar GPIO de 40 pines, permitiendo una integración sin problemas. Las conexiones clave del GPIO y sus funciones son las siguientes:

- **Suministro de energía (5V)**: El HAT recibe energía de la Raspberry Pi a través de los pines de 5V del conector GPIO. Después de conectar el jumper del Interruptor PowerMode, la Raspberry Pi puede alimentarse a través de estos pines en sentido inverso.
  
- **Comunicación UART (RX/TX)**: Los pines GPIO 8 (TXD) y 10 (RXD) de la Raspberry Pi están conectados al HAT, sirviendo como la interfaz UART principal para comunicación con el módulo 4G. Es importante ajustar los DIP switches en la PCB. Las configuraciones futuras se explicarán detalladamente en la sección de DIP switches más adelante.

- **Reset (RST)**: El pin GPIO 29 está conectado al pin de reset del módulo 4G, permitiendo que la Raspberry Pi reinicie el módulo 4G activando la señal (por defecto es baja, un pulso alto provoca el reset). Es importante ajustar los DIP switches en la PCB; las configuraciones se discutirán en detalle posteriormente.

- **Control de energía (PWR)**: El pin GPIO 31 conecta al pin de control de energía del módulo 4G, permitiendo que la Raspberry Pi encienda el módulo con señal alta o lo apague con señal baja. Estas conexiones garantizan que la Raspberry Pi pueda alimentar, comunicarse y controlar el HAT 4G LTE de forma efectiva. Recuerda que los DIP switches en la PCB deben ajustarse, detalles en la sección dedicada más adelante.

### Suministro de energía

El HAT 4G LTE soporta múltiples modos de alimentación para garantizar flexibilidad y compatibilidad:

1. **Alimentación de 5V desde el conector GPIO de 40 pines de la Raspberry Pi**: El HAT puede tomar energía directamente de los pines de 5V del conector GPIO de la Raspberry Pi. Este método es adecuado para aplicaciones de pequeña escala, pero puede ser insuficiente para demandas de mayor potencia, por lo que se recomienda probar su fiabilidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Alimentación desde USB-A o USB-C de la Raspberry Pi**: El HAT puede alimentarse a través del puerto USB-A o USB-C integrado en la Raspberry Pi. Un adaptador incluido en el kit facilita esta configuración, permitiendo una conexión directa al HAT.

`Alimentado por Raspberry Pi.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`Alimentado por PC`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **Alimentación externa USB-C**: Una fuente de alimentación USB-C independiente, que puede proporcionar un suministro PD de 5-15V y entregar hasta 27W, puede conectarse al HAT para aplicaciones que requieran alta potencia. Usando un cable jumper, el HAT puede suministrar energía directamente a la Raspberry Pi a través del conector GPIO de 40 pines.
Estas opciones brindan flexibilidad para diferentes requerimientos de aplicaciones y potencia. Recuerda que los DIP switches en la PCB deben ajustarse; las configuraciones se explicarán más adelante.

`Alimenta el HAT 4G por separado`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`Alimenta tanto el HAT 4G como la Raspberry Pi.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### Ranura para tarjeta SIM

El HAT 4G LTE incluye una ranura para tarjeta SIM para el módulo CAT4, soportando tarjetas Nano SIM con voltaje de 3V o 1.8V. Para una instalación correcta, la ranura debe alinearse verticalmente con el puerto de red de la Raspberry Pi ubicado debajo, asegurando una conexión segura y rendimiento óptimo.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png" 
    style={{ width: 200}} 
  />
</div>

### Conectividad de antenas

El HAT 4G LTE soporta tres conexiones de antena, cada una con conectores IPEX 1:

1. **Conector antena principal LTE (MAIN)**: Usado para conectividad LTE primaria.
2. **Conector antena auxiliar LTE (AUX)**: Proporciona soporte LTE auxiliar para mejor rendimiento.
3. **Conector antena GPS/GNSS**: Dedicado para funcionalidad GPS y GNSS, asegurando posicionamiento preciso.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png" 
    style={{ width: 200}} 
  />
</div>

Estas opciones de antena aseguran una conectividad robusta y confiable para aplicaciones LTE y de localización.

### Indicadores LED

El HAT 4G LTE cuenta con dos indicadores LED para monitoreo del estado:

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG" 
    style={{ width: 200}} 
  />
</div>

- **LED PWR (Rojo)**: Se enciende para indicar el estado de alimentación del HAT.
- **LED NET (Azul)**: Indica el estado de conexión de red. Parpadea en intervalos específicos durante conexiones activas y transferencia de datos, y permanece apagado si no hay conexión establecida.

**Estados del indicador de red y estado correspondiente de la red**

| **Indicador**     | **Estado del Indicador**                | **Estado de red correspondiente**  |
|-------------------|---------------------------------------|-----------------------------------|
| **NET_STATUS**    | Parpadeo (200 ms encendido / 1800 ms apagado) | Registrado a red 2G               |
|                   | Parpadeo (1800 ms encendido / 200 ms apagado) | Registrado a red 4G               |
|                   | Siempre encendido                      | Transmisión de datos en progreso  |
|                   | Apagado                              | Sin conexión de red               |

Estos LEDs proporcionan una retroalimentación visual rápida sobre la alimentación y actividad de red del HAT.

### Interfaces USB-C

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg" 
    style={{ width: 600}} 
  />
</div>


El HAT 4G LTE incluye dos interfaces USB-C con funciones distintas:

1. **Interfaz USB-C 1**

  - Integrada con el módulo EC25, soporta funcionalidad USB 2.0.
  - Permite comunicación con comandos AT, transmisión de datos, salida GNSS NMEA, depuración de software y actualización de firmware.

2. **Interfaz USB-C 2**

  - Se utiliza para proveer una fuente de alimentación de alta potencia de 5V a 15V al HAT LTE.
  - La alimentación puede activarse o desactivarse mediante el DIP switch.
  - Después de conectar el jumper del Interruptor PowerMode, esta interfaz puede usarse para alimentar directamente la Raspberry Pi.

Estas interfaces aseguran una comunicación eficiente, depuración y suministro de energía para el HAT, dedicando la USB-C 2 exclusivamente para alimentación.

### Pads de Arranque (Boot Pads)

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG" 
    style={{ width: 500}} 
  />
</div>

- Proporcionan acceso al pin **USB_BOOT** del módulo LTE y al **VDD 1.8V**.
- Cortocircuitar el pin USB_BOOT fuerza al módulo LTE a entrar en modo de arranque (boot mode), permitiendo la grabación de firmware vía la interfaz **USB-C 1**.

### Botones RST/PWR

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG" 
    style={{ width: 300}} 
  />
</div>

- **Botón RST**: Realiza un reinicio rápido del módulo LTE con un solo clic. Está montado horizontalmente para facilitar su uso.
- **Botón PWR**: En estado apagado, presionar el botón enciende el HAT. Mientras está encendido, mantener presionado el botón apaga el HAT.

### DIP Switches

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG" 
    style={{ width: 150}} 
  />
</div>

- **Interruptor de Autoarranque (Power-On Self-Start Switch)**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita el encendido automático del HAT LTE cuando se aplica energía.
- **Interruptor de Fuente de Poder Externa (External Power Switch)**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Permite alimentar el HAT vía la interfaz USB-C 2 con fuente externa.
- **Interruptor de Conexión RX**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita la comunicación con el UART-RX de la Raspberry Pi.
- **Interruptor de Conexión TX**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita la comunicación con el UART-TX de la Raspberry Pi.
- **Interruptor de Conexión RST**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Permite que la Raspberry Pi controle los reinicios del módulo LTE vía GPIO.
- **Interruptor de Conexión PWR**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Permite que la Raspberry Pi controle el estado de energía del módulo LTE vía GPIO.

### Diseño y Distribución (Layout)

El HAT 4G LTE está diseñado para una integración perfecta con la Raspberry Pi 5, con alineación cuidadosa de sus componentes:

- **Conector USB-C 1**: Después de instalar el HAT, se alinea verticalmente con la interfaz USB 3.0 de la Raspberry Pi 5.
- **Conector USB-C 2**: Se alinea verticalmente con el puerto de alimentación USB-C de la Raspberry Pi 5.
- **Ranura para Tarjeta Nano SIM**: Posicionada verticalmente alineada con el puerto Ethernet de la Raspberry Pi 5.
- **Luces de Estado (PWR/NET)**: Alineadas verticalmente con los LEDs de estado de la Raspberry Pi 5 para visibilidad clara.
- **Conectores de Antena**: Tres conectores de antena, espaciados uniformemente, ubicados en la parte trasera de la placa para fácil conexión.
- **Pads de Arranque (Boot Pads)**: Ubicados convenientemente en el borde externo de la placa, permitiendo a los usuarios cortocircuitarlos fácilmente para operaciones en modo boot.

Este diseño asegura compatibilidad, facilidad de uso y una configuración ordenada al usarlo con la Raspberry Pi 5.

## Estructura del HAT y Compatibilidad con Raspberry Pi

El HAT 4G LTE está diseñado para coincidir en tamaño con la Raspberry Pi, asegurando una integración sin problemas. Las características clave de compatibilidad y estructura incluyen:

- **Alineación del GPIO de 40 pines**: El HAT se conecta mediante el header GPIO de 40 pines, alineándose perfectamente con la Raspberry Pi. Se añade un conector tipo stacking para mantener la compatibilidad con el disipador oficial de Raspberry Pi.
  
- **Soporte para adaptador USB-A a USB-C**: Tras instalar el conector stacking, el puerto USB-C 1 queda a una altura adecuada, permitiendo la conexión directa con un adaptador USB-A a USB-C.
  
- **Acceso al conector de cámara**: El diseño de la PCB reserva espacio alrededor del conector de cámara de la Raspberry Pi 5, con orificios para que el cable de cámara pase sin dificultad.

- **Orificios fijos de montaje**: El HAT incluye cuatro orificios de montaje que se alinean con los puntos de fijación de la Raspberry Pi 5, permitiendo una sujeción segura con pilares de cobre y tornillos.
  
- **Ajuste de altura**: El header stacking eleva el HAT a una altura adecuada sobre la Raspberry Pi, proporcionando espacio para los componentes y asegurando que el puerto USB-C 1 sea accesible.

Estas consideraciones de diseño hacen que el HAT sea totalmente compatible con la Raspberry Pi 5, facilitando su instalación y funcionalidad.

## Guía de Ensamblaje 

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg" 
    style={{ width: 900}} 
  />
</div>

## Preparación del Software

### Para Windows

**Paso 1: Instalar los controladores**

Para usuarios de Windows, [descarga e instala](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/) el controlador necesario para tu módulo.  
Esto es obligatorio para una comunicación adecuada con el módulo.

**Paso 2: Conectar el módulo**  
Conecta el módulo a tu PC usando el cable USB.  
Asegúrate de que la tarjeta SIM esté correctamente insertada en el módulo.

**Paso 3: Encender el módulo**  
Presiona el botón de encendido (Power) en el módulo para prenderlo.

**Paso 4: Acceder a los puertos de comunicación**  
Una vez instalado el controlador, verás tres puertos COM diferentes disponibles para comunicarte con el módulo.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG" 
    style={{ width: 400}} 
  />
</div>

**Paso 5: Instalar la herramienta GUI (QCOM v1.6)**

[Descarga e instala](https://www.quectel.com/download/qcom_v1-6/) QCOM v1.6, una interfaz gráfica para interactuar con el módulo.  
Abre la herramienta para comenzar a enviar comandos AT.

**Paso 6: Configurar y probar el puerto COM**  
Abre la herramienta GUI y selecciona el puerto COM correcto para el módulo.  
Ajusta la configuración de comunicación según sea necesario (por ejemplo, la velocidad en baudios).

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG" 
    style={{ width: 600}} 
  />
</div>

En la caja de comandos, escribe el siguiente comando de prueba:

```bash
AT
```
**Paso 7: Verificar la respuesta**

Si la configuración es correcta, el módulo responderá con:

```bash
OK
```

### Raspberry Pi 

**Paso 1: Instalar los controladores**

- **1.1. Verificar compatibilidad del kernel**
 Asegúrate de que tu Raspberry Pi tenga el kernel más reciente instalado. Usa este comando para verificar la versión del kernel:

```bash
uname -r
```

Para esta guía, la versión del kernel es 6.6.xx (Bookworm). Instala el controlador USB de Quectel correspondiente.

- **1.2. Actualizar e instalar herramientas necesarias**
Ejecuta estos comandos para actualizar el sistema e instalar las herramientas requeridas:

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. Descargar e instalar el controlador USB de Quectel**
Clona el repositorio del controlador y compílalo:

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. Conectar y verificar**

Conecta el módulo al Raspberry Pi vía USB.
Presiona el botón de encendido del módulo.
Verifica que el módulo sea detectado correctamente con:

```bash
lsusb
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-rpi-small.PNG" 
    style={{ width: 600}} 
  />
</div>

```bash
ls /dev/ttyUSB*
```
Para comandos AT, usa el puerto /dev/ttyUSB2.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG" 
    style={{ width: 600}} 
  />
</div>

**Paso 2: Instalar Minicom**

 - **2.1. Instalar Minicom**
Minicom es una herramienta para enviar comandos AT:

```bash
sudo apt install minicom
```

- **2.2. Configurar Minicom**
Ejecuta Minicom en modo configuración:

```bash
sudo minicom -s
```

Configura los parámetros de comunicación:

```bash
Port: /dev/ttyUSB2
Baud Rate: 9600
Parity: N
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-settings.PNG" 
    style={{ width: 600}} 
  />
</div>

**Paso 3: Probar con comandos AT**

- **3.1. Abrir Minicom en el puerto configurado**
```bash
sudo minicom -D /dev/ttyUSB2
```
Escribe el siguiente comando para probar la comunicación:

```bash
AT
```
El módulo debería responder con:
```bash
OK
```
## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[DOC ]** [Manual de conados AT V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios medios de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



