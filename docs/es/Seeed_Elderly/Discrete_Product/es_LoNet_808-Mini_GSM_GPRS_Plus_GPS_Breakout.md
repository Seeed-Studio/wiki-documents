---
description: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
title: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/113990107%200.jpg)

Esta placa está basada en el último módulo GSM/GPS SIMCOM SIM808, ofrece datos celulares GSM y GPRS junto con tecnología GPS para navegación satelital.

La placa presenta un consumo de energía ultra bajo en modo de suspensión, proporcionando al proyecto tiempos de espera increíblemente largos. Además, hay un circuito de carga de batería integrado que puede usarse con baterías LiPo.

El receptor GPS es increíblemente sensible con 22 canales de seguimiento y 66 de adquisición, y también soporta GPS asistido (A-GPS) para localización en interiores. La placa se controla mediante comandos AT vía UART y soporta niveles lógicos de 3.3V y 5V. Viene con una mini antena GPS y GSM, sin embargo la batería es opcional.

La placa utiliza las redes GSM 2G (no 3G o LTE).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

## Características

- Cuatro bandas 850/900/1800/1900MHz
- Conectividad GPRS multi-slot clase 12: máx. 85.6kbps(descarga/subida)
- Estación móvil GPRS clase B
- Controlado por Comando AT (3GPP TS 27.007, 27.005 y Comandos AT mejorados de SIMCOM)
- Soporta control de carga para batería Li-Ion
- Soporta Reloj de Tiempo Real
- Rango de voltaje de alimentación 3.4V ~ 4.4V
- GPS/CNSS integrado y soporta A-GPS
- Soporta nivel lógico de 3.0V a 5.0V
- Bajo consumo de energía, 1mA en modo de suspensión
- Soporta protocolo GPS NMEA
- Tamaño compacto 27mm × 46mm × 10mm
- Tarjeta SIM estándar

## Especificaciones GPS

- Canales del receptor: 22 seguimiento / 66 adquisición
- Código grueso/de adquisición: GPS L1
- Sensibilidad de seguimiento: -165dBm
- Tiempo de arranque en frío: 30s (típ.)
- Tiempo de arranque en caliente: 1s (típ.)
- Tiempo de arranque tibio: 28s (típ.)
- Precisión de posición horizontal: &lt;2.5m CEP
- Consumo de energía - Adquisición: 42mA
- Consumo de energía - Seguimiento continuo: 24mA
- Tasa de actualización: 5Hz

## Interfaces

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Mappings-01.png)

1. Botón de Encendido: este es el interruptor de encendido físico para el módulo. Cuando el módulo está encendido, puedes encender o apagar el módulo presionando el botón por 2s.
2. Batería Li-ion: esta es la fuente de alimentación para el módulo, el voltaje de entrada es de 3.4V a 4.4V. Utiliza el conector JST-2.0mm, que hace conveniente conectar a una Batería Li-Po de 3.7V.
3. MicroUSB: la interfaz de carga para batería Li-Ion, con rango de voltaje de entrada de 5V a 7V.
4. Antena GSM: este es un conector de antena GSM uFL, solo conéctalo a una antena GSM para recibir señal GSM.
5. Antena GPS: este es un conector de antena GPS uFL. Puedes conectar una antena GPS pasiva o activa a él. La antena GPS activa funciona a 2.8V de voltaje.
6. Indicador de Red: LED rojo, te dirá cuál es el estado sobre la conexión del módulo a la red.
7. Indicador de Estado: LED verde, te dirá si el módulo está encendido, se ilumina cuando el módulo está funcionando.
8. Pin de Conexión: ver Definiciones de Pines para más detalles.
9. SIM - Portador de Tarjeta: portador de tarjeta SIM para tarjeta SIM estándar
10. Pin de Fuente de Alimentación: usado para soldadura de energía y pruebas.

### Definiciones de Pines

| Nombre | E/S | Descripción | Nota |
|--------|-----|-------------|------|
| BAT | E/S | Entrada / salida de energía | 3.4V - 4.4V DC |
| GND | E/S | Tierra de energía / tierra lógica | |
| VIO | E | Referencia de nivel lógico | 2.8V - 5.0V DC |
| DTR | E | Pin de control de modo de suspensión | Poner en alto para modo de suspensión |
| PWR | S | Interruptor de encendido | Activo bajo en 2s |
| RI | S | Pin de evento/mensaje | |
| TXD | S | Transmitir datos | Salida UART del SIM808 |
| RXD | E | Recibir datos | Entrada UART al SIM808 |
| RST | E | Pin de reinicio | Activo bajo |

### LEDs Indicadores

| LEDs Indicadores | Estado | Comportamiento |
|----------------|---------|-----------|
| Estado de Funcionamiento (Verde) | Apagado | SIM808 no está funcionando |
| | Encendido | SIM808 está funcionando |
| Estado de Red (Rojo) | Apagado | SIM808 no está funcionando |
| | 64ms encendido/ 800ms Apagado | SIM808 no registrado en la red |
| | 64ms Encendido/ 3000ms Apagado | SIM808 registrado en la red |
| | 64ms Encendido/ 300ms Apagado | Comunicación PPP GPRS establecida |

## Accesorios

Además de la antena, puede necesitar los siguientes accesorios para usar con LoNet 808:

| Accesorio | Descripción |
|-----------|-------------|
| ![SIM-Card](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Simcard.jpg) | **Tarjeta SIM**<br/>para Comunicación GSM/GPRS |
| [![3.7V Li-ion Battery](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Battery_2200ma.jpg)](https://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3) | **Batería Li-ion 3.7V**<br/>para suministro de energía |
| [![DC/DC Voltage Regulator](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Power_Converter.jpg)](https://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4) | **Regulador de Voltaje DC/DC**<br/>para suministro de energía |
| [![MicroUSB Cable](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/100cmUSBc.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **Cable MicroUSB**<br/>para cargar la batería |
| [![USB to UART Tool](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/USB_To_Uart_5V3V3.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **Herramienta USB a UART**<br/>para probar comandos AT en PC |
| [![Solar Panel](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/3wsp.JPG)](https://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118) | **Panel Solar**<br/>para cargar la batería |

## Uso

### Circuito de Referencia

**Conectar al MCU**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C1-01.png)

**Conectar al PC**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C2-01.png)

### Comenzando con Comandos AT

El módulo se controla mediante comandos AT a través del puerto serie, aquí usamos Arduino como herramienta USB a serie. Sube el siguiente código a Arduino y abre el monitor serie. Si usas otras herramientas USB a serie, puedes usar [AT Command Tester](/es/AT_Command_Tester_Application) o [SSCOM32](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/Sscom32E.zip) para probar comandos AT.

```arduino
// this sketch is used for testing LoNet with Arduino

// Connect VIO to +5V
// Connect GND to Ground
// Connect RX (data into SIM808) to Digital 11
// Connect TX (data out from SIM808) to Digital 10

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    mySerial.begin(9600);
}

void loop() // run over and over
{
    if (mySerial.available())
        Serial.write(mySerial.read());

    if (Serial.available())
    {
        while(Serial.available())
        {
            mySerial.write(Serial.read());
        }
        mySerial.println();
    }
}
```

#### Configurar Baudios y Habilitar Función de Carga

Se recomienda ejecutar este proceso cuando se use el módulo por primera vez. En las columnas del Monitor Serie de las siguientes tablas, la entrada de comandos AT está en negro, los valores de retorno del módulo están en naranja.

| Monitor Serie | Descripción |
|---------------|-------------|
| AT<br/>OK | Enviar comando "AT" para sincronizar la velocidad de baudios. El puerto serie del módulo está configurado por defecto en modo auto-baud, y en este modo, no mostrará ninguna indicación cuando el módulo esté encendido. |
| AT+IPR=9600<br/>OK | Configurar velocidad de baudios a 9600bps, soporta velocidades de baudios desde 1200bps hasta 115200bps. |
| AT+ECHARGE=1<br/>OK | Enviar comando "AT+ECHARGE=1" para habilitar la función de carga de batería. Por defecto la función de carga está cerrada. |
| AT&W<br/>OK | Guardar configuración de parámetros. |
| AT+CPOWD=1<br/>NORMAL POWER DOWN | Apagar el módulo. |
| RDY<br/>+CFUN: 1<br/>GPS Ready<br/>+CPIN: READY<br/>Call Ready<br/>SMS Ready | Encender el módulo nuevamente con el botón de encendido, responderá con el estado sobre GPS y GSM. |
| AT+CBC<br/>+CBC: 1,96,4175<br/>OK | Consultar estado de carga y capacidad restante de batería. |
| AT+CSQ<br/>+CSQ: 14,0<br/>OK | Consultar calidad de señal GSM. |

#### Obtener ubicación con GPS

| Monitor Serie | Descripción |
|---------------|-------------|
| AT+CGPSPWR=1<br/>OK | Abrir GPS |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location Not Fix<br/>OK | Leer estado de fijación GPS, "Location Not Fix" significa que el posicionamiento no fue exitoso. Para la primera vez al iniciar, tomará al menos 30s. _**GPS debe ser probado junto a la ventana o al aire libre.**_ |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location 3D Fix<br/>OK | GPS se ha fijado con estado 3D. |
| AT+CGPSINF=0<br/> +CGPSINF:<br/> 0,2234.931817,11357.122485,<br/>92.461185,20141031041141.000,<br/>88,12,0.000000,0.000000 | Obtener la información de ubicación GPS actual. Formato de parámetros: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt; |
| AT+CGPSOUT=32<br/>OK<br/>$GPRMC,043326.000,A,<br/>2234.9414,N,11357.1187,E,<br/>0.000,143.69,311014,,,A*50 | Leer datos NMEA $GPRMC, de los cuales, "2234.9414 N, 11357.1187 E" son las coordenadas de ubicación. Para más detalles sobre sentencias NMEA, [consulta este sitio](http://www.gpsinformation.org/dale/nmea.htm). |
| AT+CGPSRST=0<br/>OK | Reiniciar GPS en Modo de Inicio en Frío. |
| AT+CGPSRST=1<br/>OK | Reiniciar GPS en Modo de Inicio en Caliente. |
| AT+CGPSPWR=0<br/>OK | Cerrar GPS. |

## Descargas

- [LoNet_808_Schematic](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/LoNet_808_Schematic.pdf)
- [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM800_ATCommand_Manual_V1.02.pdf)
- [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_Hardware_Design_V1.00.pdf)
- [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_GPS_Application_Note_V1.00.pdf)

## Recursos

- [Librería GPRS_Shield en gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

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
