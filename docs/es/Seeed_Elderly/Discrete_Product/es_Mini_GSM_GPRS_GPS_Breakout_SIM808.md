---
description: Mini GSM/GPRS GPS Breakout SIM808
title: Mini GSM/GPRS GPS Breakout SIM808
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mini_GSM_GPRS_GPS_Breakout_SIM808
last_update:
  date: 1/13/2023
  author: shuxu hu
---


##   Descripción General  

Esta placa está basada en el último módulo GSM/GPS SIMCOM SIM808, ofrece datos celulares GSM y GPRS junto con tecnología GPS para navegación satelital.

La placa presenta un consumo de energía ultra bajo en modo de suspensión, proporcionando al proyecto tiempos de espera increíblemente largos. Además, hay un circuito de carga de batería integrado que puede usarse con baterías LiPo.

El receptor GPS es increíblemente sensible con 22 canales de seguimiento y 66 de adquisición, y también soporta GPS asistido (A-GPS) para localización en interiores. La placa es controlada por comandos AT vía UART y soporta niveles lógicos de 3.3V y 5V. Viene con una mini antena GPS y GSM, sin embargo la batería es opcional.

La placa utiliza las redes GSM 2G (no 3G o LTE).

##   Características

*   Cuatro bandas 850/900/1800/1900MHz

*   Conectividad GPRS multi-slot clase 12: máx. 85.6kbps(descarga/subida)

*   Estación móvil GPRS clase B

*   Controlado por Comandos AT (3GPP TS 27.007, 27.005 y Comandos AT mejorados de SIMCOM)

*   Soporta control de carga para batería Li-Ion

*   Soporta Reloj de Tiempo Real

*   Rango de voltaje de alimentación 3.4V ~ 4.4V

*   GPS/CNSS integrado y soporta A-GPS

*   Soporta nivel lógico de 3.0V a 5.0V

*   Bajo consumo de energía, 1mA en modo de suspensión

*   Soporta protocolo GPS NMEA

*   Tamaño compacto 27mm x 46mm x 10mm

*   Tarjeta SIM estándar

##   Especificaciones GPS   

*   Canales del receptor: 22 seguimiento / 66 adquisición

*   Código Coarse/Adquisición: GPS L1

*   Sensibilidad de seguimiento: -165dBm

*   Tiempo de arranque en frío: 30s (típ.)

*   Tiempo de arranque en caliente: 1s (típ.)

*   Tiempo de arranque tibio: 28s (típ.)

*   Precisión de posición horizontal: &lt; 2.5m CEP

*   Consumo de energía - Adquisición: 42mA

*   Consumo de energía - Seguimiento continuo: 24mA

*   Tasa de actualización: 5Hz

##   Bloque Funcional  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Lonet_pcb_top.jpg)

*   Antena GPS: este es un conector de antena GPS uFL. Puedes conectar una antena GPS pasiva o activa a él. La antena GPS activa funciona a 2.8V de voltaje.

*   MicroUSB: la interfaz de carga para batería Li-Ion, con rango de voltaje de entrada de 5V a 7V.

*   Botón de Encendido: este es el interruptor de encendido físico para el módulo. Cuando el módulo está encendido, puedes encender o apagar el módulo presionando el botón por 2s.

*   Indicador de Red: LED Rojo, te dirá cuál es el estado del módulo conectándose a la red. Puede apagarse mediante la almohadilla de puente LEDs_EN.

*   Indicador de Estado: LED Verde, te dirá si el módulo está encendido, se ilumina cuando el módulo está funcionando. Puede apagarse mediante la almohadilla de puente LEDs_EN.

*   Batería Li-ion: esta es la fuente de alimentación para el módulo, el voltaje de entrada es de 3.4V a 4.4V. Utiliza el conector JST-2.0mm, que hace conveniente conectar a una Batería Li-Po de 3.7V.

*   Antena GSM: este es un conector de antena GSM uFL, solo conéctalo a una antena GSM para recibir señal GSM.

*   SIM - Portador de Tarjeta: Portador de tarjeta SIM para tarjeta SIM estándar

###   Definiciones de Pines

<table>
<tr>
<th scope="col">Nombre</th>
<th scope="col">E/S</th>
<th scope="col">Descripción</th>
<th scope="col">Nota</th>
</tr>
<tr>
<td>BAT</td>
<td></td>
<td>Entrada / salida de energía</td>
<td>3.4V - 4.4V DC</td>
</tr>
<tr>
<td>GND</td>
<td></td>
<td>Tierra de energía / tierra lógica</td>
<td></td>
</tr>
<tr>
<td>VIO</td>
<td>E</td>
<td>Referencia de nivel lógico</td>
<td>3.0V - 5.0V DC</td>
</tr>
<tr>
<td>DTR</td>
<td>E</td>
<td>Pin de despertar para módulo en modo de suspensión</td>
<td></td>
</tr>
<tr>
<td>PWR</td>
<td>S</td>
<td>Interruptor de encendido</td>
<td>Pulso de nivel bajo</td>
</tr>
<tr>
<td>RI</td>
<td>S</td>
<td>Pin de evento/ mensaje</td>
<td></td>
</tr>
<tr>
<td>TXD</td>
<td>S</td>
<td>Transmitir datos</td>
<td>Salida UART desde SIM808</td>
</tr>
<tr>
<td>RXD</td>
<td>E</td>
<td>Recibir datos</td>
<td>Entrada UART a SIM808</td>
</tr>
<tr>
<td>RST</td>
<td>E</td>
<td>Reinicio del módulo</td>
<td></td>
</tr>
</table>

###   LEDs Indicadores

<table>
<tr>
<th scope="col">LEDs Indicadores</th>
<th scope="col">Estado</th>
<th scope="col">Comportamiento</th>
</tr>
<tr>
<td>Estado de Funcionamiento (Verde)</td>
<td>Apagado</td>
<td>SIM808 no está funcionando</td>
</tr>
<tr>
<td></td>
<td>Encendido</td>
<td>SIM808 está funcionando</td>
</tr>
<tr>
<td>Estado de Red (Rojo)</td>
<td>Apagado</td>
<td>SIM808 no está funcionando</td>
</tr>
<tr>
<td></td>
<td>64ms encendido/ 800ms Apagado</td>
<td>SIM808 no registrado en la red</td>
</tr>
<tr>
<td></td>
<td>64ms Encendido/ 3000ms Apagado</td>
<td>SIM808 registrado en la red</td>
</tr>
<tr>
<td></td>
<td>64ms Encendido/ 300ms Apagado</td>
<td>Comunicación PPP GPRS establecida</td>
</tr>
</table>

##   Uso  

###   Producto Relacionado

El módulo viene con una mini antena GPS y GSM, pero no incluye batería Li-Po. Además, para usar este módulo, aún necesitas una tarjeta SIM desbloqueada que soporte servicio GPRS.

*   Batería Li-ion de 3.7 V
*   Tarjeta SIM
*   Herramienta USB a UART

###   Circuito de Referencia

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Rerfer_Circuit_SIM808.png)

###   Comenzando con Comandos AT

El módulo se controla mediante comandos AT a través del puerto serie, aquí usamos Arduino como herramienta USB a serie. Sube el siguiente código a Arduino y abre el monitor serie. Si usas otras herramientas USB a serie, puedes usar [AT Command Tester](https://seeeddoc.github.io/AT_Command_Tester_Application/) o [SSCOM32](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/Sscom32E.zip) para probar comandos AT.

```c
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

####   Configurar Baudios y Habilitar Función de Carga

Se recomienda ejecutar este proceso cuando se use el módulo por primera vez. En las columnas del Monitor Serie de las siguientes tablas, las entradas de comandos AT están en negro, los valores de retorno del módulo están en naranja.

<table cellPadding="0">
<tr>
<th scope="col" width="50"> Monitor Serie</th>
<th scope="col" width="100"> Descripción</th>
</tr>
<tr>
<td> AT <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> Enviar comando "AT" para sincronizar la velocidad de baudios. El puerto serie del módulo está configurado por defecto en modo auto-baud, y en este modo, no mostrará ninguna indicación cuando el módulo esté encendido.</td>
</tr>
<tr>
<td> AT+IPR=9600 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Configurar velocidad de baudios a 9600bps, soporta velocidades de baudios desde 1200bps hasta 115200bps.</td>
</tr>
<tr>
<td> AT+ECHARGE=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Enviar comando "AT+ECHARGE=1" para habilitar la función de carga de batería. Por defecto la función de carga está deshabilitada.</td>
</tr>
<tr>
<td> AT&amp;W <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Guardar configuración de parámetros.</td>
</tr>
<tr>
<td> AT+CPOWD=1 <span style={{color: 'rgb(242,133,0)'}}>NORMAL POWER DOWN</span></td>
<td>Apagar el módulo.</td>
</tr>
<tr>
<td> 
<span style={{color: 'rgb(242,133,0)'}}>RDY
+CFUN: 1
GPS Ready
+CPIN: READY
Call Ready
SMS Ready</span>
</td>
<td>Encender el módulo nuevamente con el botón de encendido, responderá con el estado sobre GPS y GSM.</td>
</tr>
<tr>
<td> AT+CBC <span style={{color: 'rgb(242,133,0)'}}> +CBC: 1,96,4175 OK</span></td>
<td>Consultar estado de carga y capacidad restante de la batería.</td>
</tr>
<tr>
<td> AT+CSQ <span style={{color: 'rgb(242,133,0)'}}> +CSQ: 14,0 OK</span></td>
<td>Consultar calidad de señal GSM.</td>
</tr>
</table>

####   Obtener ubicación con GPS

<table cellPadding="0">
<tr>
<th scope="col" width="11"> Monitor Serie</th>
<th scope="col" width="700"> Descripción</th>
</tr>
<tr>
<td> AT+CGPSPWR=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> Abrir GPS</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location Not FixOK</span></td>
<td> Leer estado de fijación GPS, "Location Not Fix" significa que el posicionamiento no fue exitoso. Para el primer inicio, tomará al menos 30s. _**El GPS debe ser probado junto a la ventana o al aire libre.**_</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location 3D Fix OK</span></td>
<td> El GPS se ha fijado con estado 3D.</td>
</tr>
<tr>
<td> AT+CGPSINF=0 <span style={{color: 'rgb(242,133,0)'}}> +CGPSINF: 0,2234.931817,11357.122485,92.461185,20141031041141.000,88,12,0.000000,0.000000 </span></td>
<td> Obtener la información de ubicación GPS actual. Formato de parámetros: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;</td>
</tr>
<tr>
<td>
AT+CGPSOUT=32
<span style={{color: 'rgb(242,133,0)'}}>OK
\$GPRMC,043326.000,A,
2234.9414,N,11357.1187,E,
0.000,143.69,311014,,,A*50 </span>
</td>
<td> Leer datos NMEA \$GPRMC, de los cuales, "2234.9414 N, 11357.1187 E" son las coordenadas de ubicación. Para más detalles sobre las sentencias NMEA, [consulta este sitio](http://www.gpsinformation.org/dale/nmea.htm).</td>
</tr>
<tr>
<td>
AT+CGPSRST=0
<span style={{color: 'rgb(242,133,0)'}}> OK</span>
</td>
<td>Reiniciar GPS en Modo de Inicio en Frío.</td>
</tr>
<tr>
<td> AT+CGPSRST=1 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>Reiniciar GPS en Modo de Inicio en Caliente.</td>
</tr>
<tr>
<td> AT+CGPSPWR=0 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>Cerrar GPS.</td>
</tr>
</table>

##   Recursos  

- **[PDF]**   [LoNet_DesignSchematic](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/LoNet_DesignSchematic.pdf)

- **[PDF]**    [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM800_ATCommand_Manual_V1.02.pdf)

- **[PDF]**   [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_Hardware_Design_V1.00.pdf)

- **[PDF]**   [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_GPS_Application_Note_V1.00.pdf)

- **[Librería]**    [Librería GPRS_Shield en gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

- **[Librería]**   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

##   Proyectos Relacionados

Es una lástima que aún no tengamos ninguna demostración sobre LoNet-GSM/GPRS/GPS Breakout en [Recipe](https://www.seeedstudio.com/recipe/).

¡Publica tu increíble proyecto sobre LoNet-GSM/GPRS/GPS Breakout para <span style={{color: '#FF0000'}}>ganar un Cupón de $100!</span> No dudes en contactarnos: **recipe@seeed.cc**

Aquí presentamos algunos proyectos sobre [GPRS Shield](https://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html) como referencia.

###  Qué es GPRS shield

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/113030009_1.jpg)

Características:

*   Compatible con Arduino estándar y Arduino Mega

*   Soporte de cuatro bandas: 850/900/1800/1900MHz

*   Control completo mediante conjunto de comandos AT: Estándar - GSM 07.07 &amp; 07.05 y Mejorado - Comandos AT SIMCOM

*   Soporte para protocolos TCP/UDP

###   Control Remoto por SMS

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/54c720959dae7.JPG)

Este proyecto describe cómo encender y apagar tu calentador de agua mediante SMS y verificar si está encendido o apagado.

Es confiable, seguro, fácil y flexible por las siguientes razones:

*   Los comandos siempre reciben respuesta y los mensajes perdidos se vuelven a solicitar

*   Utiliza protección con contraseña de 128 bits

*   El pfodDesigner genera todo el código, y puedes usarlo para crear tu propio menú personalizado.

*   Todas las pantallas pfod están disponibles mediante SMS, como submenús, listas de selección múltiple y única, entrada de texto, registro de datos y gráficos.

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/98-sms-remote-control.html)

###   Teléfono Arduino

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Recipe-arduinophone.png)

El teléfono Arduino es un teléfono celular hecho por nosotros mismos mediante la combinación de Arduino y otros módulos shield.

Este proyecto nos dice qué necesitas hacer cuando las aplicaciones del Teléfono Arduino no pueden satisfacer tus necesidades.

Este Teléfono Arduino contiene las siguientes funciones principales.

*   recibir y enviar mensajes, entrada de texto

*   marcar y contestar llamadas

*   visualización de reloj en tiempo real

*   Una interfaz de usuario conveniente y concisa

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/37-arduinophone.html)

[**Más Proyectos Increíbles con GPRS**](https://www.seeedstudio.com/recipe/index.php?query=GPRS)

###   Comparte Tus Proyectos Increíbles con Nosotros

Nacidos con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como lo es hoy.

No importa quién eres y qué has hecho, hacker, maker, artista o ingeniero.

Mientras comiences a compartir tus trabajos con otros, estarás siendo parte de la comunidad de código abierto y estarás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

*   Los Usuarios Principales, son aquellos que muestran gran interés en los productos Seeed y hacen contribuciones significativas en Recipe.
*   Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos cuando nuestros Usuarios Principales tienen algunas buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios de PCBA así como soporte técnico. Además, es muy posible una mayor cooperación comercial con los Usuarios Principales.

<span style={{color: '#FF0000'}}>Obtén más información sobre Usuario Principal, por favor envía un correo a:</span> **recipe@seeed.cc**

##   Soporte

Para cualquier soporte técnico, por favor contacta [_support@deegou.com_](http://www.deegou.com)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
