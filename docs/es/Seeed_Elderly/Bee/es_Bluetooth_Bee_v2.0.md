---
description: Bluetooth Bee v2.0
title: Bluetooth Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
sku: 113050013
type: gettingstarted
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Bee es un módulo Bluetooth SPP fácil de usar compatible con sockets Xbee existentes, diseñado para configuración de conexión serie inalámbrica transparente.

El módulo Bluetooth de puerto serie está completamente calificado con Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation con transceptor de radio completo de 2.4GHz y banda base.

Utiliza CSR Bluecore 04-External sistema Bluetooth de chip único con tecnología CMOS y con AFH(Adaptive Frequency Hopping Feature). Incluso tiene la huella más pequeña de tan solo 12.7mmx27mm. Esperamos que simplifique su ciclo general de diseño/desarrollo.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

## Características

---

### Características de Hardware

- Sensibilidad típica de -80dBm.

- Hasta +4dBm de potencia de transmisión RF.

- Bluetooth V2.0+EDR 3Mbps Modulation completamente calificado.

- Operación de bajo consumo 1.8V, 1.8 a 3.6V I/O.

- Control PIO.

- Interfaz UART con velocidad de baudios programable.

- Antena PCB integrada.

- Conectores compatibles con Bee.

### Características de Software

- Velocidad de baudios por defecto: 38400, Bits de datos:8, Bit de parada:1, Paridad:Sin paridad, Control de datos: tiene.

- Velocidades de baudios soportadas: 9600,19200,38400,57600,115200,230400,460800.

- Usa CTS y RTS para controlar el flujo de datos.

- Cuando se detecta un pulso ascendente en PIO0, el dispositivo se desconectará.

- Puerto de instrucción de estado PIO1: bajo-desconectado, alto-conectado;

- PIO10 está conectado al led rojo, PIO11 está conectado al led verde. Cuando maestro y esclavo están emparejados, los leds rojo y verde parpadean 1 vez / 2s en intervalo, mientras que desconectado solo el led verde parpadea 2 veces/ s.

- Auto-conectar al último dispositivo al encender por defecto.

- Permitir conexión de dispositivo emparejado por defecto.

- PINCODE por defecto:0000.

- Auto-reconectar en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión.

:::caution
    El voltaje de alimentación de este módulo es 3.3V, mayor que esto puede causar daño permanente al dispositivo.
:::

## Instalación de Hardware

---

### Conectando Bluetooth a PC a través de Uart Bee

<!-- El Bluetooth proporciona un socket XBee estándar. Aquí usamos un [UartSBee V5](/es/UartSBee_v5) para conectar Bluetooth y PC, asegurar que el voltaje de alimentación fue seleccionado como 3.3V por el deslizador. -->

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|

### Conectando Bluetooth a Arduino

<!-- Aquí usamos [XBee Shield](/es/XBee_Shield_V2.0) como puente entre Bluetooth y [Seeeduino Lotus](/es/Seeeduino_Lotus). -->

Dado que el UART de hardware de Seeedino fue usado como depuración con PC, elegimos D2 y D3 para simular UART de software para comunicarse con Bluetooth. por favor refiérase a la configuración del jumper en la imagen de abajo

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

## Instrucciones del Software

---

### Convenciones

- Configuración predeterminada de fábrica:

  - Nombre: HMSoft;

    - Baud: 9600, N, 8, 1;

    - Código pin: 1234;

    - transmitir Versión.

- Formato de comando AT:
  - Formato de comando AT en mayúsculas. formato de cadena, sin ningún otro símbolo. (ej. \r o \n).

    - Cualquier comando incorrecto no tendría respuesta.

### Comandos AT(continuará...)

**1. Comando de Prueba**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK</td>
<td width="300">Ninguno</td>
</tr>
</table>

**2. Consultar/Establecer velocidad de baudios**

<!-- <table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+BAUD?</td>
<td width="300">OK+Set:[para1]</td>
<td rowspan="2" width="300">Para1: Número de velocidad de baudios

<dl>1---------1200</dl>
<dl>2---------2400</dl>
<dl>3---------4800</dl>
<dl>4---------9600</dl>
<dl>5---------19200</dl>
<dl>6---------38400</dl>
<dl>7---------57600</dl>
<dl>8---------115200</dl>
<dl>9---------230400</dl>
<dl>A---------460800</dl>
<dl>B---------921600</dl>
<dl>C---------1382400</dl>

Por defecto: 4(9600)
</td>
</tr>
<tr>
<td width="300">AT+BAUD[para1]</td>
<td width="300">OK+Set:[para1]</td>
</tr>
</table> -->

**3. Consultar/Configurar bit de paridad**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> Consulta: AT+CHK?
</td>
<td width="300"> OK+CHK:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0:Ninguno

<dl>1:IMPAR

<dl>2:PAR

<dl>Por defecto: 0 (Ninguno)

</td></tr>
<tr>
<td width="300"> Configurar: AT+CHK[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**4. Consultar/Configurar bit de parada**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+STOP?
</td>
<td width="300"> OK+STOP:[para1]
</td>
<td rowspan="2" width="300"> Para1:1, 2

<dl>1: Un bit de parada

<dl>2: Dos bits de parada

<dl>Por defecto: 1 (Un bit de parada)

</td></tr>
<tr>
<td width="300"> AT+STOP[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**5. Consultar/Configurar velocidad de baudios, bit de paridad, bit de parada**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+UART?
</td>
<td width="300"> OK+UART:[para1],[para2],[para3]
</td>
<td rowspan="2" width="300"> Para1: Velocidad de baudios

<dl>Valor: 1~C

<dl>Por defecto: 4(9600)

<dl>Para2: Bit de paridad

<dl>Valor: 0,1,2

<dl>Por defecto: 0 (Ninguno)

<dl>Para3: Bit de parada

<dl>Valor: 1, 2

<dl>Por defecto: 1(Un Bit)

</td></tr>
<tr>
<td width="300"> AT+UART[para1][para2][para3]
</td>
<td width="300"> OK+Set:[para1] [para2] [para3]
</td></tr></table> -->

**6. Comando de autocomprobación del módulo**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+SECH?
</td>
<td width="300"> OK+SECH:OKAY o

OK+SECH:FAIL

</td>
<td width="300"> Ninguno
</td></tr></table>

**7. Comando de comprobación de sectores de aplicación del módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+APCH?
</td>
<td width="300"> OK+APCH:OKAY o

OK+APCH:FAIL

</td>
<td width="300"> Ninguno
</td></tr></table> -->

**8. Comando para consultar la temperatura del módulo**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+TEMP?
</td>
<td width="300"> OK+TEMP:[valor temp]
</td>
<td width="300"> Ninguno
</td></tr></table>

**9. Consultar/Configurar el estado de detectabilidad del módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+DISC?
</td>
<td width="300"> OK+DISC:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0,1,2

<dl>0: detectable y conectable

<dl>1: solo detectable, no conectable

<dl>2: solo conectable

<dl>Por defecto: 0

</td></tr>
<tr>
<td width="300"> AT+DISC [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**10. Consultar/Configurar función PIO0 (KEY del Sistema)**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+KEY?
</td>
<td width="300"> OK+KEY:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: Cancelar estado actual.

<dl>1: Cancelar estado actual y restaurar configuración de fábrica.

<dl>Por defecto: 0

</td></tr>
<tr>
<td width="300"> AT+ KEY[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**11. Consultar/Configurar estado de salida PIO1 (LED del Sistema)**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+LED?
</td>
<td width="300"> OK+LED:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0:Desconectado Salida 500ms Alto 500ms Bajo, Conectado salida Alto.

<dl>1:Desconectado salida Bajo, Conectado salida Alto.

<dl>Por defecto: 0

</td></tr>
<tr>
<td width="300"> AT+ LED [para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table> -->

**12. Consultar/Configurar el estado de salida de los pines PIO del módulo**

<!-- <table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+PIO?
</td>
<td width="300"> OK+PIO:[para1]
</td>
<td rowspan="2" width="300"> Para1: Longitud 10, cada valor de bit es 1 o 0.

<dl>0: salida baja; 1: salida alta

<dl>Por defecto: 0000000000

</td></tr>
<tr>
<td width="300"> AT+PIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**13. Consultar/Configurar pines PIO salida alta o baja**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+PIO[para1]?
</td>
<td width="300"> OK+PIO:[para1][para2]
</td>
<td rowspan="2" width="300"> Para1: 2~B Para2: 0, 1

<dl>Para1 es qué pin PIO deseas Consultar/Configurar Valor: 2,3,4,5,6,7,8,9,A,B.

<dl>Para2 es el valor de consulta o configuración. 0 es bajo y 1 es alto

</td></tr>
<tr>
<td width="300"> AT+PIO[para1][para2]
</td>
<td width="300"> OK+Set:[para1][para2]
</td></tr></table>

**14. Consultar/Establecer nombre del módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+NAME?
</td>
<td width="300"> OK+NAME[para1]
</td>
<td rowspan="2" width="300"> Para1: nombre del módulo, longitud máxima es 12.

Por defecto: HMSoft

</td></tr>
<tr>
<td width="300"> AT+NAME[para1]
</td>
<td width="300"> OK+Set[para1]
</td></tr></table>

**15. Restaurar todos los valores de configuración a la configuración de fábrica**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+DEFAULT
</td>
<td width="300"> OK+DEFAULT
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**16. Reiniciar módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+RESTART
</td>
<td width="300"> OK+RESTART
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**17. Consultar/Configurar Rol Maestro y Esclavo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+ROLE?
</td>
<td width="300"> OK+ROLE:[para1]
</td>
<td rowspan="2" width="300"> Para1: M, S

<dl>M: Maestro

<dl>S: Esclavo

<dl>Por defecto: S

</td></tr>
<tr>
<td width="300"> AT+ROLE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**18. Consultar/Establecer Código PIN**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+PIN?
</td>
<td width="300"> OK+PIN:[para1]
</td>
<td rowspan="2" width="300"> Para1 es el Código PIN, longitud máxima es 12, permite A~Z, a~z, 0~9

Por defecto: 1234

</td></tr>
<tr>
<td width="300"> AT+PIN[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**19. Limpiar dirección de dispositivo conectado**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+CLEAR
</td>
<td width="300"> OK+CLEAR
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**20. Escanear dispositivo esclavo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+SCAN?
</td>
<td width="300"> OK+SCANS

OK+SCAN[MAC]

……………

OK+SCANE

</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**21. Conectar a una dirección MAC de dispositivo esclavo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+LNK[para1]
</td>
<td width="300"> OK+CONNS(start conn)

<dl>OK+CONN(conn ok)

<dl>OK+CONNF(conn failed)

</td>
<td rowspan="2" width="300"> Para1 es una cadena de dirección MAC.
</td></tr></table>

**22.Consultar Versión del Software**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+VERSION

AT+VERSION?

</td>
<td width="300"> Información de Versión
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**23.Información de Ayuda del Sistema**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+HELP?
</td>
<td width="300"> Información de Ayuda
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**24. Consultar Dirección del Último Dispositivo Conectado**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+RADD?
</td>
<td width="300"> OK+ADDR:Dirección MAC
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**25. Consultar dirección del módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+LADD?

<dl>AT+ADDR?

</td>
<td width="300"> OK+LADD:Dirección MAC
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**26. Consultar/Configurar tipo de trabajo del módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+IMME?
</td>
<td width="300"> OOK+IMME:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0, 1

<dl>0: Cuando el módulo se enciende, solo responde al Comando AT, no hace nada. hasta que se recibe AT + WORK

<dl>1: Cuando se enciende, trabaja inmediatamente

<dl>Por defecto: 1

</td></tr>
<tr>
<td width="300"> AT+IMME[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Trabajar inmediatamente**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**28. Consultar/Configurar valor de tiempo de espera de conexión del módulo a dispositivo remoto**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+TCON?
</td>
<td width="300"> OK+TCON:[para1]
</td>
<td rowspan="2" width="300"> Para1 es el valor de tiempo de espera. cuando el tiempo se agota el módulo no se conectará más a esta dirección, luego entrará en modo de búsqueda.

<dl>Valor permitido para Para1: 0000~9999 La unidad es segundo.

<dl>Por defecto: 0000 Conectar para siempre

</td></tr>
<tr>
<td width="300"> AT+TCON[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**27. Trabajar inmediatamente**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+WORK
</td>
<td width="300"> OK+WORK
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**29. Consultar/Configurar Modo de Trabajo del Módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+TYPE?
</td>
<td width="300"> OK+TYPE:[para1]
</td>
<td rowspan="2" width="300"> Para1: 0~2

<dl>0:Modo de Transmisión

<dl>1:Modo de Control Remoto

<dl>2:Modo de Recolección PIO
Por defecto: 0

</td></tr>
<tr>
<td width="300"> AT+TYPE[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**30. Consultar/Configurar tiempo de retardo de cadena de estados PIO de reporte (unidad ms)**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+TPIO?
</td>
<td width="300"> OK+TPIO:[para1]
</td>
<td rowspan="2" width="300"> El valor Para1 está entre 0000 y 9999 ms. Si el valor >0, cuando el estado PIO cambie, el módulo enviará la cadena de estados PIO al dispositivo remoto con este valor de retardo.

<dl>Por defecto: 0 enviar una vez

</td></tr>
<tr>
<td width="300"> AT+TPIO[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**31. Cambiar Modo de Control Remoto a Modo de Transmisión (Solo esta vez)**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+START
</td>
<td width="300"> OK+START
</td>
<td rowspan="2" width="300"> Ninguno
</td></tr></table>

**32. Consultar/Configurar parámetro de guardado en Buffer**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+BUFF?
</td>
<td width="300"> OK+BUFF:[para1]
</td>
<td width="300"> Ninguno
</td></tr>
<tr>
<td width="300"> AT+BUFF[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Para1: 0~1

<dl>0: No guardar

<dl>1: Guardar

<dl>Por defecto: 0

</td></tr></table>

**33. Consultar/Configurar Filtro de Búsqueda**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+FILT?
</td>
<td width="300"> OK+FILT:[para1]
</td>
<td rowspan="2" width="300"> Para1: Tipo Permitido

<dl>Valor: 0~C

<dl>Por defecto: C (Todos)

</td></tr>
<tr>
<td width="300"> AT+FILT[para1]
</td>
<td width="300"> OK+Set:[para1]
</td></tr></table>

**34. Consultar/Configurar Notificación del Módulo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+NOTI?
</td>
<td width="300"> OK+NOTI:[para1]
</td>
<td width="300"> Ninguno
</td></tr>
<tr>
<td width="300"> AT+NOTI[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> El valor de Par1 es 0, 1.

<dl>0: No notificar (por defecto)

<dl>1: Notificar cuando se conecte o desconecte

</td></tr></table>

**35.Consultar/Establecer Clase de Módulo del Dispositivo**

<table >
<tr>
<th> Enviar
</th>
<th> Recibir
</th>
<th> Parámetro
</th></tr>
<tr>
<td width="300"> AT+COD?
</td>
<td width="300"> OK+COD:[para1]
</td>
<td width="300"> Ninguno
</td></tr>
<tr>
<td width="300"> AT+COD[para1]
</td>
<td width="300"> OK+Set:[para1]
</td>
<td width="300"> Par1 es el valor COD.

<dl>Valor: 0000~0xFFFF

<dl>Por defecto: 0x1F00 (dispositivo desconocido)

</td></tr></table> -->

## Programación

### Configurar el módulo Bluetooth con Puerto Serie bajo Windows

Esta sección muestra cómo configurar Bluetooth con PC, se pueden aprender algunos métodos básicos de configuración.

Configure la conexión de hardware consultando la sección "Instalación de Hardware". Encontrará que el LED azul en el módulo parpadea indicando que no se ha establecido conexión.
