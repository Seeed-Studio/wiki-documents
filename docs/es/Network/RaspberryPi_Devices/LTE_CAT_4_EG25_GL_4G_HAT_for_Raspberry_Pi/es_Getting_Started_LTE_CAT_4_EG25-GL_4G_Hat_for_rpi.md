---
description: El HAT 4G LTE para Raspberry Pi con Quectel EG25-GL ofrece conectividad de alta velocidad y posicionamiento GNSS preciso, siendo perfecto para aplicaciones IoT y M2M. Compatible con Raspberry Pi y PCs, soporta bandas de frecuencia globales, seguimiento en tiempo real y comunicación confiable para uso versátil en diversas industrias.

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
  date: 12/10/2024
  author: Kasun Thushara
---

## Descripción General

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

El HAT 4G para Raspberry Pi es un complemento potente y versátil diseñado para integración perfecta con modelos de Raspberry Pi, incluyendo A+, B+, Pi 2, Pi 3, Pi 4, Pi 5 y Zero, así como PCs. Equipado con un conector GPIO de 40 pines, asegura compatibilidad plug-and-play fácil. El HAT cuenta con el módulo Quectel EG25-GL CAT4 LTE, proporcionando comunicación 4G de alta velocidad, funcionalidad SMS e integración con plataformas en la nube para aplicaciones IoT y M2M. Además, ofrece posicionamiento GNSS preciso con tecnología Qualcomm® IZat, haciéndolo ideal para routers industriales, tablets rugosas, transmisión de video y señalización digital. El HAT soporta comunicación a través de UART y USB, con herramientas de software incluidas para configuración fácil y depuración mediante comandos AT.

En su núcleo, el módulo EG25-GL asegura rendimiento robusto con soporte de bandas de frecuencia globales, ofreciendo conectividad confiable a través de redes LTE, UMTS/HSPA+ y GSM/GPRS/EDGE. Compatible hacia atrás con 4G, 3G y 2G, soporta múltiples protocolos de comunicación como MIMO, DFOTA y DTMF. Su receptor GNSS multi-constelación asegura posicionamiento preciso y rápido.

## Contenido del Paquete

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg"
    style={{ width: 600}}
  />
</div>

El paquete del HAT 4G LTE incluye todo lo necesario para instalación y operación:

- **Tornillos y Soportes** Todo el hardware requerido para montar y fijar el HAT de forma segura.
- **Destornillador** Una herramienta para instalación fácil.
- **2x Antena 4G** Asegura conectividad LTE confiable.
- **Adaptador USB-A a USB-C** Permite conexión entre el HAT y el puerto USB 3.0 del Raspberry Pi.
- **Header de Apilamiento de 2x20 Pines** Proporciona la altura necesaria para alineación adecuada y espacio libre durante la instalación.
- **Cable de Datos Type-C de 0.3M** Soporta tanto suministro de energía como transmisión de datos.

## Preparación del Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>Antena GPS</th>
        <th>HAT CAT4 4G LTE para Raspberry Pi</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Características

- Soporta bandas de frecuencia globales sin restricciones regionales.
- Plug-and-play con Raspberry Pi, no requiere instalación de controladores.
- Incluye 2x Antenas LTE y todos los accesorios de montaje necesarios, no se necesitan compras adicionales.
- Comunicación LTE CAT4 de alta velocidad, soportando Máx. 150 Mbps (DL) y Máx. 50 Mbps (UL).
- Soporta marcación, SMS, TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE.
- Soporta GNSS: GPS, GLONASS, BDS, Galileo, QZSS.
- Permite comunicación 4G de alta velocidad con Raspberry Pi/PC a través de interfaz USB 2.0.
- Interfaz de alimentación USB-C adicional que soporta protocolo PD puede proporcionar hasta 27W de potencia por separado para el hat 4G y Raspberry Pi, ofreciendo mayor capacidad de carga.
- Luces de estado LED PWR/NET integradas para monitoreo fácil del estado de red y operación del módulo.
- Botón RST PWR integrado para reinicio manual rápido y control de encendido/apagado del módulo.
- Pines RST/PWR/RX/TX conectados a Raspberry Pi a través de GPIO de 40 pines, permitiendo control de Reset, encendido/apagado del módulo, y comunicación UART cuando está habilitado por DIP Switch.

## Especificaciones

### Especificaciones del Módulo 4G EG25-GL

| **Atributo**                   | **Detalles**                                                                |
|--------------------------------|-----------------------------------------------------------------------------|
| **Región/Operador**            | Global                                                                      |
| **Dimensiones (mm)**           | 29.0 × 32.0 × 2.4                                                          |
| **Peso (g)**                   | Aprox. 4.9                                                                 |
| **Temperatura de Operación**   | -35°C a +75°C                                                              |
| **Temperatura Extendida**      | -40°C a +85°C                                                              |
| **Bandas de Frecuencia**       |                                                                             |
| - LTE-FDD                      | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                                   |
| - LTE-TDD                      | B34/38/39/40/41                                                            |
| - WCDMA                        | B1/2/4/5/6/8/19                                                            |
| - TD-SCDMA                     | No soportado                                                               |
| - GSM/EDGE                     | B2/3/5/8                                                                   |
| **GNSS**                       | GPS/GLONASS/BDS/Galileo/QZSS                                               |
| **Características Mejoradas**  |                                                                             |
| - DTMF                         | Soportado                                                                  |
| - DFOTA                        | Soportado                                                                  |
| - QMI/RmNet                    | Soportado                                                                  |
| - QuecFile®                    | Soportado                                                                  |
| - Detección de Tarjeta (U)SIM  | Soportado                                                                  |
| **Velocidades Máx. de Datos**  |                                                                             |
| - LTE-FDD (Mbps)               | 150 (DL)/50 (UL)                                                           |
| - LTE-TDD (Mbps)               | 130 (DL)/30 (UL)                                                           |
| - DC-HSPA+ (Mbps)              | 42 (DL)/5.76 (UL)                                                          |
| - WCDMA (kbps)                 | 384 (DL)/384 (UL)                                                          |
| - EDGE (kbps)                  | 296 (DL)/236.8 (UL)                                                        |
| - GPRS (kbps)                  | 107 (DL)/85.6 (UL)                                                         |
| **Protocolos Soportados**      | TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE |
| **Características Eléctricas** |                                                                             |
| - Rango de Voltaje de Alimentación | 3.3–4.3 V, típico 3.8 V                                               |
| - Consumo de Energía (Apagado) | 7 µA                                                                       |
| - Consumo de Energía (Suspensión) | 1.3 mA                                                                  |
| - Consumo de Energía (Inactivo) | 15.7 mA                                                                   |

## Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### Conexión del HAT 4G LTE y Raspberry Pi GPIO

El HAT 4G LTE se conecta a la Raspberry Pi a través de su interfaz estándar de 40 pines GPIO, permitiendo una integración perfecta. Las conexiones GPIO clave y sus funciones son las siguientes:

- **Suministro de Energía (5V)**: El HAT recibe energía de la Raspberry Pi a través de los pines de 5V en el conector GPIO. Después de conectar el Jumper del Interruptor PowerMode, la Raspberry Pi puede ser alimentada a través de estos pines en reversa
  
- **Comunicación UART (RX/TX)**: Los pines GPIO 8 (TXD) y 10 (RXD) de la Raspberry Pi están conectados al HAT, sirviendo como la interfaz UART principal para la comunicación con el módulo 4G. Es importante tener en cuenta que los interruptores DIP en la PCB necesitan ser ajustados. Las configuraciones futuras se discutirán en detalle en la sección de interruptores DIP más adelante.

- **Reset (RST)**: El pin GPIO 29 está conectado al pin de reset del módulo 4G, permitiendo que la Raspberry Pi reinicie el módulo 4G alternando la señal (por defecto es bajo, alto activa el reset). Es importante tener en cuenta que los interruptores DIP en la PCB necesitan ser ajustados. Las configuraciones futuras se discutirán en detalle en la sección de interruptores DIP más adelante.

- **Control de Energía (PWR)**: El pin GPIO 31 se conecta al pin de control de energía del módulo 4G, permitiendo que la Raspberry Pi encienda el módulo con una señal alta o lo apague con una señal baja.
Estas conexiones aseguran que la Raspberry Pi pueda alimentar, comunicarse y controlar el HAT 4G LTE efectivamente. Es importante tener en cuenta que los interruptores DIP en la PCB necesitan ser ajustados. Las configuraciones futuras se discutirán en detalle en la sección de interruptores DIP más adelante.

### Suministro de Energía

El HAT 4G LTE soporta múltiples modos de suministro de energía para asegurar flexibilidad y compatibilidad:

1. **Suministro de Energía 5V de 40 pines de Raspberry Pi**: El HAT puede obtener energía directamente de los pines de 5V en el conector GPIO de 40 pines de la Raspberry Pi. Este método es adecuado para aplicaciones de pequeña escala pero puede ser insuficiente para demandas de energía mayores, requiriendo pruebas para confiabilidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Suministro de Energía USB-A o USB-C de Raspberry Pi**: El HAT puede ser alimentado a través del puerto USB-A o USB-C integrado de la Raspberry Pi. Un adaptador incluido en el kit simplifica esta configuración, permitiendo una conexión directa al HAT.

`Alimentado por Raspberry PI.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`Alimentado por PC`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **Suministro de Energía USB-C Externo**: Una fuente de energía USB-C independiente, que puede proporcionar un suministro de energía PD de 5-15V y entregar hasta 27W de potencia, puede ser conectada al HAT para aplicaciones de alta potencia. Usando un cable jumper, el HAT también puede suministrar energía directamente a la Raspberry Pi a través del conector GPIO de 40 pines.
Estas opciones proporcionan flexibilidad para acomodar diferentes requisitos de aplicación y necesidades de energía. Es importante tener en cuenta que los interruptores DIP en la PCB necesitan ser ajustados. Las configuraciones futuras se discutirán en detalle en la sección de interruptores DIP más adelante.

`Alimentar el HAT 4G por separado`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`Alimentar tanto el HAT 4G como la Raspberry Pi.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### Ranura para Tarjeta SIM

El HAT 4G LTE incluye una ranura para tarjeta SIM para el módulo CAT4, soportando tarjetas Nano SIM con voltaje de 3V o 1.8V. Para una instalación adecuada, la ranura de la tarjeta SIM debe estar alineada verticalmente con el puerto de red de la Raspberry Pi ubicado debajo de ella. Esto asegura una conexión segura y rendimiento óptimo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png"
    style={{ width: 200}}
  />
</div>

### Conectividad de Antena

El HAT 4G LTE soporta tres conexiones de antena, cada una usando conectores IPEX 1:

1. **Conector de Antena LTE PRINCIPAL**: Usado para conectividad LTE primaria.
2. **Conector de Antena LTE AUXILIAR**: Proporciona soporte LTE auxiliar para rendimiento mejorado.
3. **Conector de Antena GPS/GNSS**: Dedicado para funcionalidad GPS y GNSS, asegurando posicionamiento preciso.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png"
    style={{ width: 200}}
  />
</div>

Estas opciones de antena aseguran conectividad robusta y confiable para aplicaciones LTE y basadas en ubicación.

### Indicadores LED

El HAT 4G LTE cuenta con dos indicadores LED para monitoreo de estado:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG"
    style={{ width: 200}}
  />
</div>

- **LED PWR (Rojo)**: Se enciende para indicar el estado de energía del HAT.
- **LED NET (Azul)**: Indica el estado de conexión de red. Parpadea a intervalos específicos durante conexiones activas y transferencia de datos, mientras permanece apagado si no se establece conexión.

**Estados del Indicador de Red y Estado de Red Correspondiente**

| **Indicador**    | **Estado del Indicador**            | **Estado de Red Correspondiente**    |
|------------------|-------------------------------------|---------------------------------------|
| **NET_STATUS**   | Parpadeando (200 ms encendido / 1800 ms apagado)  | Registrado en red 2G             |
|                  | Parpadeando (1800 ms encendido / 200 ms apagado)  | Registrado en red 4G             |
|                  | Siempre encendido                   | Transmisión de datos en progreso    |
|                  | Apagado                             | Sin conexión de red                  |

Estos LEDs proporcionan retroalimentación visual rápida sobre la energía y actividad de red del HAT.

### Interfaces USB-C

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg"
    style={{ width: 600}}
  />
</div>

El HAT 4G LTE incluye dos interfaces USB-C con funciones distintas:

1. **Interface USB-C 1**

- Integrada con el módulo EC25, soporta funcionalidad USB 2.0.
- Permite comunicación de comandos AT, transmisión de datos, salida NMEA GNSS, depuración de software y actualizaciones de firmware.

2. **Interface USB-C 2**

- Utilizada para proporcionar una fuente de alimentación de alta potencia de hasta 5V-15V al HAT LTE.
- La fuente de alimentación puede ser activada usando el interruptor DIP.
- Después de conectar el Jumper del Interruptor PowerMode, esta interface puede ser utilizada para alimentar directamente la Raspberry Pi.

Estas interfaces aseguran comunicación eficiente, depuración y entrega de energía para el HAT.
Estas interfaces facilitan comunicación y depuración eficientes para el HAT, con la interface USB-C 2 dedicada únicamente a la entrega de energía.

### Pads de Arranque

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG"
    style={{ width: 500}}
  />
</div>

- Proporciona acceso al pin **USB_BOOT** del módulo LTE y **1.8V VDD**.
- Cortocircuitar el pin USB_BOOT fuerza al módulo LTE a entrar en modo de arranque, habilitando la grabación de firmware a través de la interface **USB-C 1**.

### Botones RST/PWR

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG"
    style={{ width: 300}}
  />
</div>

- **Botón RST**: Realiza un reinicio de un clic del módulo LTE. El botón está montado horizontalmente y diseñado para operación fácil.
- **Botón PWR**: En estado apagado, presionar el botón enciende el HAT.
○Mientras está encendido, presionar y mantener el botón lo apaga.

### Interruptores DIP

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG"
    style={{ width: 150}}
  />
</div>

- **Interruptor de Auto-Inicio al Encender**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita el encendido automático del HAT LTE después de aplicar energía.
- **Interruptor de Alimentación Externa**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Permite fuente de alimentación externa a través de la interface USB-C 2.
- **Interruptor de Conexión RX**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita comunicación con el UART-RX de la Raspberry Pi.
- **Interruptor de Conexión TX**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita comunicación con el UART-TX de la Raspberry Pi.
- **Interruptor de Conexión RST**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Permite a la Raspberry Pi controlar reinicios del módulo LTE a través de GPIO.
- **Interruptor de Conexión PWR**:
  - **0 (Apagado)**: Deshabilitado.
  - **1 (Encendido)**: Habilita a la Raspberry Pi para controlar el estado de energía del módulo LTE a través de GPIO.

### Diseño

El HAT 4G LTE está diseñado con alineación y colocación cuidadosas para integración perfecta con la Raspberry Pi 5:

- **Conector USB-C 1**: Después de la instalación, se alinea verticalmente con la interface USB 3.0 de la Raspberry Pi 5.
- **Conector USB-C 2**: Se alinea verticalmente con el puerto de energía USB-C de la Raspberry Pi 5.
- **Ranura para Tarjeta Nano SIM**: Posicionada para alinearse verticalmente con el puerto Ethernet de la Raspberry Pi 5.
- **Luces de Estado (PWR/NET)**: Estas luces están alineadas verticalmente con los LEDs de estado de la Raspberry Pi 5 para visibilidad clara.
- **Conectores de Antena**: Tres conectores de antena espaciados uniformemente están ubicados en la parte trasera de la placa para fácil conexión.
- **Pads de Arranque**: Convenientemente ubicados en el borde exterior de la placa, permitiendo a los usuarios cortocircuitarlos fácilmente para operaciones de modo de arranque.

Este diseño cuidadoso asegura compatibilidad, facilidad de uso y una configuración organizada cuando se empareja con la Raspberry Pi 5.

## Estructura del HAT y Compatibilidad con Raspberry Pi

El HAT 4G LTE está diseñado para coincidir con el tamaño de la Raspberry Pi, asegurando una integración perfecta. Las características clave de compatibilidad y estructura incluyen:

- **Alineación de 40 Pines GPIO**: El HAT se conecta a través del conector GPIO de 40 pines y se alinea perfectamente con la Raspberry Pi. Se añade un conector apilable para mantener la compatibilidad con el disipador de calor oficial de Raspberry Pi.
  
- **Soporte para Adaptador USB-A a USB-C**: Después de instalar el conector apilable, el puerto USB-C 1 se posiciona a una altura apropiada, permitiendo la conexión directa con un adaptador USB-A a USB-C.
  
- **Acceso al Conector de Cámara**: El diseño de la PCB reserva espacio alrededor del conector de cámara de Raspberry Pi 5, con orificios proporcionados para permitir que el cable de la cámara pase fácilmente.

- **Orificios de Montaje Fijos**: El HAT incluye cuatro orificios de montaje que se alinean con los puntos de montaje de Raspberry Pi 5, asegurando una fijación segura usando pilares de cobre y tornillos.
  
- **Ajuste de Altura**: El conector apilable eleva el HAT a una altura adecuada sobre la Raspberry Pi, proporcionando espacio libre para los componentes y asegurando que el puerto USB-C 1 sea accesible.
  
Estas consideraciones de diseño hacen que el HAT sea completamente compatible con la Raspberry Pi 5 mientras mantiene la facilidad de instalación y funcionalidad.

## Guía de Ensamblaje

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg"
    style={{ width: 900}}
  />
</div>

## Preparación del Software

### Para Windows

**Paso 1: Instalar Controladores**

Para usuarios de Windows, [descargue e instale](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/) el controlador requerido para su módulo.
Esto es obligatorio para la comunicación adecuada con el módulo.

**Paso 2: Conectar el Módulo**
Conecte el módulo a su PC usando el cable USB.
Asegúrese de que la tarjeta SIM esté insertada correctamente en el módulo.

**Paso 3: Encender el Módulo**
Presione el Botón de Encendido en el módulo para encenderlo.

**Paso 4: Acceder a los Puertos de Comunicación**
Una vez que el controlador esté instalado, verá tres puertos COM separados disponibles para la comunicación con el módulo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG"
    style={{ width: 400}}
  />
</div>

**Paso 5: Instalar Herramienta GUI (QCOM v1.6)**

[Descargue e instale](https://www.quectel.com/download/qcom_v1-6/ ) QCOM v1.6, una interfaz gráfica para interactuar con el módulo.
Abra la herramienta para comenzar a enviar comandos AT.

**Paso 6: Configurar y Probar el Puerto COM**

Abra la herramienta GUI y seleccione el puerto COM apropiado para el módulo.
Ajuste la configuración de comunicación según sea necesario (por ejemplo, velocidad de baudios).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

En la caja de escritura de comandos, escriba el siguiente comando de prueba:

```bash
AT
```

**Paso 7: Verificar la Salida**

El módulo responderá con la siguiente salida si la configuración es exitosa:

```bash
OK
```

### Raspberry Pi

**Paso 1: Instalar Controladores**

- **1.1. Verificar Compatibilidad del Kernel**
Asegúrate de que tu Raspberry Pi tenga el kernel más reciente instalado. Usa el siguiente comando para verificar la versión del kernel:

```bash
uname -r
```

Para esta guía, la versión del kernel es 6.6.xx (Bookworm). Instala el controlador USB de Quectel correspondiente.

- **1.2. Actualizar e Instalar Herramientas Requeridas**
Ejecuta los siguientes comandos para actualizar el sistema e instalar las herramientas necesarias:

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. Descargar e Instalar el Controlador USB de Quectel**
Clona el repositorio del controlador y compila el controlador:

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. Conectar y Verificar**

Conecta el módulo al Raspberry Pi a través de USB.
Presiona el botón de encendido en el módulo.
Verifica que el módulo sea detectado correctamente:

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

Para comandos AT, usa /dev/ttyUSB2 como puerto de comunicación.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG"
    style={{ width: 600}}
  />
</div>

**Paso 2: Instalar Minicom**

- **2.1. Instalar Minicom**
Instala la herramienta Minicom para enviar comandos AT:

```bash
sudo apt install minicom
```

- **2.2. Configurar Minicom**
Ejecutar Minicom en modo de configuración:

```bash
sudo minicom -s
```

Configura ajustes como:

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

**Paso 3: Probar con Comandos AT**

- **3.1 Abrir Minicom en el puerto configurado**

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

- **[DOC ]** [Manual de Comandos AT V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
