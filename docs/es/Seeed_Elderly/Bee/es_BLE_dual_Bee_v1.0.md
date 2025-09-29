---
description: BLE (dual) Bee v1.0
title: BLE (dual) Bee v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE_dual_Bee_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg)

BLE (dual) Bee v1.0 utiliza un chip Bluetooth de modo dual CSR, con arquitectura ARM de un solo chip que soporta instrucciones AT. Los usuarios pueden desarrollar de manera flexible según la velocidad de baudios serie, nombre del equipo y contraseña de emparejamiento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html)

## Características

- Versión BT: Especificación Bluetooth V4.0 y BLE
- Máximo de bytes de envío y recepción UART es 512
- Otro dispositivo al módulo en modo SPP: 90 Bytes por paquete
- Otro dispositivo al módulo en modo BLE: 20 Bytes por paquete
- Dos modos de transmisión de datos, modo balanceado y modo de alta velocidad
- Frecuencia de trabajo: banda ISM de 2.4GHz
- Método de modulación: GFSK (Gaussian Frequency Shift Keying)
- Potencia RF: -23dbm, -6dbm, 0dbm, 6dbm.
- Velocidad: Asíncrono: 3K Bytes
- Síncrono: 3K Bytes
- Seguridad: Autenticación y encriptación
- Servicio: Esclavo SPP, Periférico BLE, UUID FFE0,FFE1
- Alimentación: +3.3VDC 50mA
- Largo alcance: SPP 30 metros, BLE 60 metros
- Potencia: SPP 13.5mA, BLE 9.5mA
- Temperatura de trabajo: –5 ~ +65 Centígrados

## Especificación

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/BLE-dual-Bee_v1.0.png)

- **U1**: U1 es el módulo inalámbrico, incluye circuito automático de reinicio al encender.
- **D3**: El led muestra dos modelos de trabajo: durmiendo con parpadeo lento; estado conectado con iluminación continua.
- **JP1&JP3**: El conector Bee estándar.

## Precauciones

El voltaje de alimentación de este módulo es 2.5V ~ 3.7V, valores superiores pueden causar daño permanente al dispositivo. La velocidad de transmisión BLE es más lenta que la transmisión SPP, por lo que seleccionamos la menor en el diseño, de acuerdo con la velocidad de planificación de un producto de modo dual BLE.

## Instalación de Hardware

### Conectando Bluetooth a PC a través de Uart Bee

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPCSet.jpg)|
|---|---|

### Conectando Bluetooth a Arduino

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduinoSet.jpg)|
|---|---|

## Instrucciones de Software

### Convenciones

- En modo EDR, solo se puede configurar esclavo mientras que tanto maestro como esclavo pueden estar en modo BLE.
- Configuración predeterminada de fábrica:
  - Nombre EDR HMSoft, rol Esclavo, PinCode 1234
  - Nombre BLE HMSoft, rol Esclavo, PinCode 000000
  - Baudios: 115200, N, 8, 1;
- Formato de comando AT:
  - Formato de comando AT en mayúsculas. formato de cadena, sin ningún otro símbolo. (ej. \r o \n).
  - Cualquier comando incorrecto no tendría respuesta.

### Comandos AT

**1. Comando de Prueba**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK/ER/Disconnect link</td>
<td width="300">Ninguno</td>
</tr>
</table>

Si el módulo no está conectado al dispositivo remoto recibirá: "OK"

Si el módulo tiene un error, recibirá: "ER"

Si el módulo se ha conectado, el módulo se desconectará del dispositivo remoto, si "AT + NOTI" está configurado en 1, recibirá cadena de información

**2. Consultar dirección EDR del módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+ADDE?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">Ninguno</td>
</tr>
</table>

**3. Consultar dirección BLE del módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+ADDB?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">Ninguno</td>
</tr>
</table>

**4. Consultar/Configurar modo de autenticación**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+AUTH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0 – Sin autenticación<br/>1 – Debe autenticar</td>
</tr>
<tr>
<td width="300">S: AT+AUTH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+AUTH0: permite realizar una conexión insegura.

AT+AUTH1: cada conexión debe tener autenticación.

**5. Consultar/Configurar modo A a B**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+ATOB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0 – No abrir ATOB<br/>1 – Abrir modo ATOB</td>
</tr>
<tr>
<td width="300">S: AT+ATOB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Este comando debe funcionar con el comando AT+MODE0. Cuando un dispositivo A (modo SPP) se conecta al módulo y un dispositivo B (modo BLE) también se conecta al módulo, la cadena de datos del dispositivo A enviada al módulo se enviará al dispositivo B. La cadena de datos del dispositivo B enviada al módulo también se envía al dispositivo A.

**6. Consultar/Configurar velocidad de baudios**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+BAUD?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 1~7, (Por defecto: 6).<br/>1 - 4800<br/>2 – 9600<br/>3 – 19200<br/>4 – 38400<br/>5 – 57600<br/>6 – 115200<br/>7 - 230400</td>
</tr>
<tr>
<td width="300">S: AT+BAUD[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**7. Borrar información de enlace**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+BONDE</td>
<td width="300">OK+BONDE</td>
<td width="300">Borrar información de enlace EDR</td>
</tr>
<tr>
<td width="300">AT+BONDB</td>
<td width="300">OK+BONDB</td>
<td width="300">Borrar información de enlace BLE</td>
</tr>
</table>

El modo BLE aún no lo soporta.

**8. Borrar Dirección del Último Dispositivo EDR Conectado**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+CLEAE</td>
<td width="300">OK+CLEAE</td>
<td width="300">Ninguno</td>
</tr>
</table>

**9. Borrar Dirección del Último Dispositivo BLE Conectado**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+CLEAB</td>
<td width="300">OK+CLEAB</td>
<td width="300">Ninguno</td>
</tr>
</table>

**10. Consultar/Configurar Modo de Trabajo DUAL del Módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+DUAL?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0 – Permitir conexión dual.<br/>1 – Permitir una conexión.</td>
</tr>
<tr>
<td width="300">S: AT+DUAL[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+DUAL0: permite dos conexiones al mismo tiempo (SPP y BLE).

AT+DUAL1: Solo permite una conexión al mismo tiempo (SPP o BLE)

**11. Consultar/Configurar interruptor de control de flujo por hardware**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+FIOW?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(Por defecto: 0)<br/>0: Control de flujo por hardware desactivado<br/>1: Control de flujo por hardware activado</td>
</tr>
<tr>
<td width="300">AT+FIOW[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**12. Consultar/Configurar modo de velocidad de transmisión de datos del módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+HIGH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(Por defecto: 0)<br/>0: Modo equilibrado<br/>1: Modo alta velocidad</td>
</tr>
<tr>
<td width="300">AT+HIGH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

En modo equilibrado, equilibramos SPP y BLE con una velocidad estable.

En modo alta velocidad, no controlamos la velocidad, por lo que el modo SPP obtendrá alta velocidad.

En modo alta velocidad, el módulo pierde la función del pin RESETB, pero aún puedes usar el comando "AT+RESET" para reiniciar el módulo.

**13. Información de Ayuda del Sistema**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">Información de Ayuda</td>
<td width="300">Ninguno</td>
</tr>
</table>

**14. Consultar/Configurar notificación de módulo cargado**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+INIT?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,?, (Por defecto: 0)<br/>0: Notificación de carga desactivada<br/>1: Notificación de carga activada</td>
</tr>
<tr>
<td width="300">AT+INIT[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Cuando se configura "AT+INIT1", después de que el módulo se carga, el módulo enviará la cadena "OK+INIT" a través de UART.

**15. Consultar/Configurar Modo de Trabajo del Módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+MODE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0 – Transmisión de datos.<br/>1 – Control remoto.</td>
</tr>
<tr>
<td width="300">S: AT+MODE[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

AT+MODE0: Solo transferir datos cuando se establece la conexión.

AT+MODE1: Transferir datos y responder comandos AT.

**16. Consultar/Configurar información de notificación**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+NOTI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0: No notificar<br/>1: Notificar</td>
</tr>
<tr>
<td width="300">S: AT+NOTI[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

Después de AT+NOTI1, el módulo enviará cadenas de conexión o desconexión a través de

UART cuando el estado del módulo cambie:

OK+CONE ======== Conexión EDR

OK+LSTE ========= Desconexión EDR

OK+CONB========= Conexión BLE

OK+LSTB ========= Desconexión BLE

OK+LSTA ========= excepto desconexión, el módulo se reiniciará después de 500 ms.

**17. Consultar/Configurar modo de notificación**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+NOTP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1; por defecto: 0<br/>0: sin dirección<br/>1: con dirección</td>
</tr>
<tr>
<td width="300">Q: AT+NOTP[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

Este comando debe funcionar con "AT+NOTI1", si este interruptor está abierto, cuando el módulo se conecte para desconectar, la cadena de aviso incluirá la dirección remota.

**18. Consultar/Configurar nombre EDR del módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+NAME?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: nombre EDR del módulo,<br/>Longitud máxima es 12.<br/>Por defecto: HMSoft</td>
</tr>
<tr>
<td width="300">Q: AT+NAME[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**19. Consultar/Configurar nombre BLE del módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+NAMB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: nombre BLE del módulo,<br/>Longitud máxima es 12.<br/>Por defecto: HMSoft</td>
</tr>
<tr>
<td width="300">S: AT+NAMB[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**20. Consultar/Configurar estado de salida PIO1 (LED del sistema)**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+PIO1?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1<br/>0: Desconectado Salida 500ms Alto 500ms Bajo, Conectado salida Alto.<br/>1: Desconectado salida Bajo, Conectado salida Alto.<br/>Por defecto: 0</td>
</tr>
<tr>
<td width="300">S: AT+ PIO1 [P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**21. Consultar/Establecer estado de salida PIO**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+PIO[P1]?</td>
<td width="300">OK+ Get:[P1][P2]</td>
<td rowspan="2" width="300">P1: 2~B (HM-12)<br/>P2: 2~3 (HM-13)<br/>0: Salida Baja<br/>1: Salida Alta<br/>?: Consulta</td>
</tr>
<tr>
<td width="300">S: AT+ PIO[P1][P2]</td>
<td width="300">OK+ Set:[P1][P2]</td>
</tr>
</table>

**22. Consultar/Establecer Código PIN EDR**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+PINE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: Código EDR del módulo<br/>Longitud máxima: 6<br/>Por defecto: 1234</td>
</tr>
<tr>
<td width="300">S: AT+PINE[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**23. Consultar/Configurar Código PIN BLE**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+PINB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: código BLE del módulo<br/>000000~999999<br/>Por defecto: 000000</td>
</tr>
<tr>
<td width="300">S: AT+PINB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**24. Consultar/Configurar bit de paridad UART**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+PARI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, 2, (Por defecto: 0)<br/>0: Sin paridad<br/>1: Paridad par<br/>2: Paridad impar</td>
</tr>
<tr>
<td width="300">S: AT+PARI[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**25. Restaurar todos los valores de configuración a la configuración de fábrica**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RENEW</td>
<td width="300">OK+RENEW</td>
<td width="300">Ninguno</td>
</tr>
</table>

**26. Reiniciar módulo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RESET</td>
<td width="300">OK+RESET</td>
<td width="300">Ninguno</td>
</tr>
</table>

**27. Consultar valor RSSI de BLE**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RSSB?</td>
<td width="300">OK+RSSB: [P1]</td>
<td width="300">P1: Valor RSSI<br/>9999: Sin conexión<br/>9998: Intentar más tarde<br/>9997: Error de lectura<br/>Xxxx: Valor RSSI</td>
</tr>
</table>

Este comando debe usarse después de configurar "AT+MODE1".
Este comando solo es usado por dispositivo Bluetooth remoto.
**28. Consultar valor RSSI EDR**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RSSE?</td>
<td width="300">OK+RSSE: [P1]</td>
<td width="300">P1: Valor RSSI<br/>9999: Sin conexión<br/>9998: Intentar más tarde<br/>9997: Error de lectura<br/>Xxxx: Valor RSSI</td>
</tr>
</table>

**29. Consultar Dirección del Último Dispositivo EDR Conectado**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RADE?</td>
<td width="300">OK+Get:MAC Address</td>
<td width="300">Ninguno</td>
</tr>
</table>

**30. Consultar Dirección del Último Dispositivo BLE Conectado**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+RADB?</td>
<td width="300">OK+Get:Dirección MAC</td>
<td width="300">Ninguno</td>
</tr>
</table>

**31. Consultar/Configurar Rol Maestro y Esclavo**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+ROLB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1 (predeterminado: 0)<br/>0: Periférico<br/>1: Central</td>
</tr>
<tr>
<td width="300">AT+ROLB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

Este comando tendrá efecto después del próximo encendido o reinicio del módulo.
**32. Consultar/Configurar modo de trabajo EDR**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+SCAN?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0: Descubrible y conectable<br/>1: Solo conectable</td>
</tr>
<tr>
<td width="300">S: AT+SCAN[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**33. Consultar/Configurar bit de parada UART**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">Q: AT+STOP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (Por defecto: 0)<br/>0: 1 bit de parada<br/>1: 2 bits de parada</td>
</tr>
<tr>
<td width="300">S: AT+STOP[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**34. Consultar Versión del Software**

<table>
<tr>
<th>Enviar</th>
<th>Recibir</th>
<th>Parámetro</th>
</tr>
<tr>
<td width="300">AT+VERR?<br/>AT+VERS?</td>
<td width="300">Información de Versión</td>
<td width="300">Ninguno</td>
</tr>
</table>

## Programación

### Configurar el módulo Bluetooth con Serial bajo Windows

Esta sección muestra cómo configurar Bluetooth con PC, se pueden aprender algunos métodos básicos de configuración.
Configure la conexión de hardware consultando la sección "Instalación de Hardware". Encontrará que el LED azul en el módulo parpadea indicando que no se ha establecido conexión.

Abra una terminal serial y configure Velocidad de Baudios: 115200, Bits de datos: 8, Bits de parada: 1 y Sin Control de Flujo. Envíe "AT" al Bluetooth con la terminal serial y se devolverá "OK" si todo va bien. El Bluetooth solo responde comandos AT cuando no se ha establecido conexión, o todos los comandos se ven como cadena y se envían. Puede distinguir el estado a través de las indicaciones del LED.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-AT.png)

Luego se pueden enviar algunas configuraciones útiles. Aquí hay algunas muestras de comandos y respuestas.

1. Probar conexión serial, enviar "AT", devolverá "OK".

2. Restaurar configuraciones de fábrica, enviar "AT+RENEW", devuelve "OK+RENEW".

3. Restablecer velocidad de baudios del puerto serial, enviar "AT+BAUD2", devuelve "OK+Set:2".

4. Habilitar autenticación, enviar "AT+AUTH1", devuelve "OK+Set:1".

5. Restablecer el Bluetooth, enviar "AT+RESET", devuelve "OK+RESET".

6. Consultar versión del firmware, enviar "AT+VERS?", devuelve "OK+Get:HMSoftV217".

7. Consultar MAC de EDR, enviar "AT+ADDE?", devuelve "OK+Get:000E0E002074".

8. Consultar MAC de BLE, enviar "AT+ADDB?", devuelve "OK+Get:000E0B002074".

9. Establecer el nombre de EDR, enviar "AT+NAMEHM-13-EDR", devuelve "OK+Set:HM-13-EDR".

10. Establecer el nombre de BLE, enviar "AT+NAMEHM-13-BLE", devuelve "OK+Set:HM-13-BLE".

11. Establecer la contraseña de EDR, enviar "AT+PINE123451", devuelve "OK+Set:123451".

12. Establecer la contraseña de BLE, enviar "AT+PINB123451", devuelve "OK+Set:123451".

13. Habilitar descubrimiento y conectable, enviar "AT+SCAN0", devuelve "OK+Set:0".

14. Habilitar información de notificación de conexión, enviar "AT+NOTI1", devuelve "OK+Set:1".

15. La información de notificación incluye dirección, enviar "AT+NOTP1", devuelve "OK+Set:1".

16. Habilitar tecla de usuario, enviar "AT+PIO01", devuelve "OK+Set:1".

17. Establecer en modo Central, enviar "AT+ROLB1", devuelve "AT+ROLB1".

O Establecer en modo Periférico, enviar "AT+ROLB0", devuelve "AT+ROLB0".

Usamos dos Bluetooth conectados con PC, uno se configuró como Central mientras el otro es Periférico. Varios segundos después se encuentran entre sí y el LED deja de parpadear, ¡conectados!

### Comunicarse con iPhone

Este tipo de módulo Bluetooth tiene dos protocolos: Bluetooth EDR (Enhanced Data Rate) y Bluetooth Low Energy. Puede comunicarse con cualquier dispositivo que tenga uno de estos protocolos. Algunos teléfonos Android con OS superior a 4.3 e iPhone4 o posterior tienen capacidad BLE. Usamos un iPhone para demostrar cómo usar un teléfono celular para interactuar con Bluetooth.

Encienda el Bluetooth y configúrelo como rol Periférico. Busque LightBlue en Apple Store e instálelo. Lance la aplicación, puede encontrar "HM-13-BLE" que acabamos de renombrar. Tóquelo para conectar, luego toque "Properties" para controlarlo. La tecla "Hex" en la parte superior derecha es para cambiar el formato de datos, tal vez String sea fácil de ver. Presione "Listen for notifications" para habilitar la recepción de datos. Luego podemos enviar datos a PC a través de BLE, presione "Write new value" y escriba algunas palabras. También PC puede transferir datos a iPhone con terminal serial.

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0108.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0109.PNG)|
|---|---|
|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0111.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0114.PNG)|

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-DialogWithIOS.png)

### Transmisión de datos entre dos Arduinos

¿Estás listo para programar? Es hora de hacer algo después de la práctica. Prepara un par de Bluetooth y Arduino u otra plataforma para controlarlos. Aquí usamos dos Arduino Uno.
Configura la conexión como se menciona en la sección "Instalación de Hardware".

El programa del Central y Periférico usa el mismo código, la única diferencia es la definición de macro al comienzo del programa. Para asignar el Bluetooth al rol Central, solo necesitas modificar el texto a "#define MASTER 1", o "#define MASTER 1" si se asignó el rol Periférico.

El flujo del programa de inicialización por favor consulta el siguiente diagrama de flujo. Primero que todo necesitamos distinguir la velocidad de baudios preestablecida del Bluetooth. Después de esto, enviar comandos para restaurar la configuración de fábrica, y cambiar la velocidad de baudios de 115200 a 9600 ya que el puerto serie por software no funcionará bien a alta velocidad de baudios. Luego otros parámetros fueron configurados al Bluetooth con el comando Reset al final.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Init-flowchat.png)

Después de la inicialización, el Central y Periférico harán cosas diferentes, el Central enviará mensaje al Periférico por intervalos e imprimirá lo que recibió del Periférico mientras que el Periférico solo responde al Central.

<!-- Haz clic [aquí](https://github.com/Seeed-Studio/HM-13_SW) para descargar el código de prueba y abrir HM-13_SW.ino con Arduino IDE, compilar y descargar a Arduino Uno. Recuerda configurar el Bluetooth a diferente rol modificando la macro al comienzo. Si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic [aquí](/es/Getting_Started_with_Seeeduino) para obtener ayuda. -->

Después de descargar el programa, abre dos ventanas de terminal serie, los LEDs en el Bluetooth parpadearán, varios segundos después, dejan de parpadear y se mantienen encendidos, esto indica que se conectaron entre sí. Según está escrito el programa, el Central envía mensaje al Periférico continuamente y obtiene retroalimentación cada vez.

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Slave.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Hoja de Datos Bluetooth HM-13](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/Bluetooth_HM-13_en.pdf)

- [Código Arduino](https://github.com/Seeed-Studio/HM-13_SW)

- [Eagle_BLE(dual)_Bee_V1.0_sch_pcb](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip)

- [PDF_BLE(dual)_bee_v1.0](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-bee_v1.0.pdf)

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
