---
description: Xadow - BLE (Modelo Dual) v1.0
title: Xadow - BLE (Modelo Dual) v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_BLE_Dual_Model_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_PhotoBottom.jpg" alt="some_text"/>

Xadow - BLE (modelo dual) v1.0 utiliza el chip Bluetooth de modo dual CSR, con la arquitectura ARM de chip único que soporta instrucciones AT. Los usuarios pueden desarrollar de manera flexible según la velocidad de baudios serie, nombre del equipo, contraseña de emparejamiento.

<a href="https://www.seeedstudio.com/Xadow-BLE-(dual-model)-p-2405.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>

## Características

---

- Versión BT: Especificación Bluetooth V4.0 & BLE
- Envío y recepción UART máximo de bytes es 512
- Otro dispositivo al módulo en modo SPP: 90 Bytes por paquete
- Otro dispositivo al módulo en modo BLE: 20 Bytes por paquete
- Dos modos de transmisión de datos, modo equilibrado y modo de alta velocidad
- Frecuencia de trabajo: banda ISM de 2.4GHz
- Método de modulación: GFSK(Gaussian Frequency Shift Keying)
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

---
<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/600px-Xadow_-_BLE_(dual_model)_v1.0.png" alt="some_text"/>

- **K2**: Durante el estado conectado, se desconectaría presionando K2 más de 100ms. Durante el modelo de suspensión, podría restaurarse a través de presionar K2 configuraciones de fábrica.
- **D1**: El led muestra dos modelos de trabajo: suspensión con parpadeo lento; estado conectado con iluminación continua.
- **J1&J2**: El conector Xadow estándar.

:::caution
    El voltaje de alimentación de este módulo es 2.5V ~ 3.7V, mayor que esto puede causar daño permanente al dispositivo. La velocidad de transmisión BLE es más lenta que la transmisión SPP, por lo que seleccionamos la menor en el diseño, de acuerdo con la velocidad de una planificación de producto de modo dual BLE.
:::

## Instalación de Hardware

---
**Conectando Bluetooth a PC a través de Uart Bee**

El Xadow - BLE tiene una interfaz Xadow estándar con paso de pines, usamos un [Xadow - Breakout](https://wiki.seeedstudio.com/es/Xadow_Breakout) para convertirlo a socket Grove.

Como la interfaz Xadow es un puerto de simetría axial, es necesario cumplir con la dirección de ensamblaje, por favor refiérase a la imagen de abajo.

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPC.jpg" alt="some_text"/>

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPCConnect.jpg" alt="some_text"/>

**Conectando Bluetooth a Xadow - Main Board**

Conecte el Xadow BLE Slave a [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board) y conecte Main Board a PC con un cable USB.

Nota: cuando conecte Xadow - BLE a Xadow Main Board, debe preocuparse por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo xadow necesita conectarse al ángulo recto de otro módulo (vea las cuatro esquinas de cada módulo xadow).

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToArduino.jpg" alt="some_text"/>

## Instrucciones del Software

---
**Convenciones**

- En modo EDR, solo el esclavo puede ser configurado mientras que tanto el maestro como el esclavo pueden estar en modo BLE.
- Configuración predeterminada de fábrica:
  - Nombre EDR HMSoft, rol Esclavo, Código PIN 1234
  - Nombre BLE HMSoft, rol Esclavo, Código PIN 000000
  - Baudios: 115200, N, 8, 1;
- Formato de comando AT:
  - Formato de comando AT en mayúsculas. formato de cadena, sin ningún otro símbolo. (ej. \r o \n).
  - Cualquier comando incorrecto no tendrá respuesta.

**Comandos AT**

**1. Comando de Prueba**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT |OK/ER/Desconectar enlace |Ninguno|

- Si el módulo no está conectado al dispositivo remoto recibirá: "OK"
- Si el módulo tiene un error, recibirá: "ER"
- Si el módulo se ha conectado, el módulo se desconectará del dispositivo remoto, si "AT + NOTI" está configurado en 1, recibirá cadena de información.

**2. Consultar dirección EDR del módulo**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+ADDE? |OK+ Get: MAC| Ninguno|

**3. Consultar dirección BLE del módulo**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+ADDB?| OK+ Get: MAC |Ninguno|

**4. Consultar/Configurar modo de autenticación**

|Enviar| Recibir| Parámetro|
|---|---|---|
|Q: AT+AUTH? |OK+ Get:[P1] |P1: 0, 1, (Por defecto: 0) / 0 – Sin autenticación / 1 – Debe autenticar|
|S: AT+AUTH[P1] |OK+ Set:[P1]|P1: 0, 1, (Por defecto: 0)/ 0 – Sin autenticación / 1 – Debe autenticar|

- AT+AUTH0: permite realizar una conexión insegura.
- AT+AUTH1: cada conexión debe tener autenticación.

**5. Consultar/Configurar modo A a B**

|Enviar| Recibir| Parámetro|
|---|---|---|
|Q: AT+ATOB? |OK+ Get:[P1] |P1: 0, 1, (Por defecto: 0)/ 0 – No abrir ATOB/ 1 – Abrir modo ATOB|
|S: AT+ATOB[P1] |OK+ Set:[P1]|P1: 0, 1, (Por defecto: 0)/ 0 – No abrir ATOB/ 1 – Abrir modo ATOB|

Este comando debe funcionar con el comando AT+MODE0. Cuando el dispositivo A (modo SPP) se conecta al módulo y el dispositivo B (modo BLE) también se conecta al módulo, la cadena de datos del dispositivo A enviada al módulo se enviará al dispositivo B. La cadena de datos del dispositivo B enviada al módulo también se envía al dispositivo A.

**6. Consultar/Configurar velocidad de baudios**

|Enviar| Recibir| Parámetro|
|---|---|---|
|Q: AT+BAUD?| OK+ Get:[P1] |P1: 1~7, (Por defecto: 6)./  1 - 4800  / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400 |
|S: AT+BAUD[P1]| OK+ Set:[P1]|P1: 1~7, (Por defecto: 6). / 1 - 4800 / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400|

**7. Limpiar información de enlace**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+BONDE| OK+BONDE |Limpiar información de enlace EDR|
|AT+BONDB| OK+BONDB |Limpiar información de enlace BLE|

El modo BLE aún no lo soporta.

**8. Limpiar Dirección del Último Dispositivo EDR Conectado**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+CLEAE| OK+CLEAE |Ninguno|

**9. Limpiar Dirección del Último Dispositivo BLE Conectado**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+CLEAB| OK+CLEAB| Ninguno|

**10. Consultar/Configurar Modo de Trabajo DUAL del Módulo**

|Enviar| Recibir| Parámetro|
|---|---|---|
|Q: AT+DUAL? |OK+ Get:[P1]| P1: 0, 1, (Por defecto: 0) / 0 – Permitir conexión dual. / 1 – Permitir una conexión.|
|S: AT+DUAL[P1] |OK+ Set:[P1]|P1: 0, 1, (Por defecto: 0) / 0 – Permitir conexión dual.  / 1 – Permitir una conexión.|

- AT+DUAL0: permite dos conexiones al mismo tiempo (SPP y BLE).
- AT+DUAL1: Solo permite una conexión al mismo tiempo (SPP o BLE)

**11. Consultar/Configurar interruptor de control de flujo de hardware**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+FIOW?| OK+ Get:[P1] |P1: 0, 1,(Por defecto: 0) / 0: Control de flujo de hardware desactivado / 1: Control de flujo de hardware activado|
|AT+FIOW[P1]| OK+ Set:[P1]|P1: 0, 1,(Por defecto: 0) / 0: Control de flujo de hardware desactivado / 1: Control de flujo de hardware activado|

**12. Consultar/Configurar modo de velocidad de transmisión de datos del módulo**

|Enviar| Recibir| Parámetro|
|---|---|---|
|AT+HIGH? |OK+ Get:[P1]| P1: 0, 1,(Por defecto: 0)/ 0: Modo equilibrado / 1: Modo alta velocidad|
|AT+HIGH[P1]| OK+ Set:[P1]|P1: 0, 1,(Por defecto: 0) / 0: Modo equilibrado / 1: Modo alta velocidad|

- En modo balanceado, equilibramos SPP y BLE con una velocidad constante.
- En modo alta velocidad, no controlamos la velocidad, por lo que el modo SPP obtendrá alta velocidad.
- En modo alta velocidad, el módulo pierde la función del pin RESETB, pero aún puedes usar
- el comando "AT+RESET" para reiniciar el módulo.

**13. Información de Ayuda del Sistema**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+HELP? |Información de Ayuda| Ninguno|

**14. Consultar/Configurar notificación de módulo cargado**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+INIT? |OK+ Get:[P1] |P1: 0, 1,?, (Por defecto: 0) / 0: Notificación de carga desactivada / 1: Notificación de carga activada|
|AT+INIT[P1]| OK+ Set:[P1]|P1: 0, 1,?, (Por defecto: 0) / 0: Notificación de carga desactivada / 1: Notificación de carga activada|

Cuando se configura "AT+INIT1", después de que el módulo se carga, el módulo enviará la cadena "OK+INIT" a través de UART.

**15. Consultar/Configurar Modo de Trabajo del Módulo**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+MODE? |OK+ Get:[P1] |P1: 0, 1, (Por defecto: 0) / 0 – Transmisión de datos. / 1 – Control remoto.|
|S: AT+MODE[P1]| OK+ Set:[ P1]|P1: 0, 1, (Por defecto: 0) / 0 – Transmisión de datos. / 1 – Control remoto.|

- AT+MODE0: Solo transfiere datos cuando se establece la conexión.
- AT+MODE1: Transfiere datos y responde comandos AT.

**16. Consultar/Configurar información de Notificación**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+NOTI? |OK+ Get:[P1]| P1: 0, 1, (Por defecto: 0) / 0: No Notificar / 1: Notificar|
|S: AT+NOTI[P1]| OK+ Set:[ P1]|P1: 0, 1, (Por defecto: 0) / 0: No Notificar / 1: Notificar|

- Después de AT+NOTI1, el módulo enviará una cadena de conexión o desconexión a través de
- UART cuando el estado del módulo cambie:
- OK+CONE ======== conexión EDR
- OK+LSTE ========= desconexión EDR
- OK+CONB========= conexión BLE
- OK+LSTB ========= desconexión BLE
- OK+LSTA ========= excepto desconexión, el módulo se reiniciará después de 500 ms.

**17. Consultar/Configurar modo de notificación**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+NOTP? |OK+ Get:[P1] |P1: 0, 1; predeterminado: 0 / 0: sin dirección / 1: con dirección|
|Q: AT+NOTP[P1] |OK+ Set:[ P1]|P1: 0, 1; predeterminado: 0 / 0: sin dirección / 1: con dirección|

Este comando debe funcionar con "AT+NOTI1", si este interruptor está abierto, cuando el módulo se conecte para desconectar, la cadena de aviso incluirá la dirección remota.

**18. Consultar/Configurar nombre EDR del módulo**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+NAME?| OK+ Get:[P1] |P1: nombre EDR del módulo, / Longitud máxima es 12. / Por defecto: HMSoft|
|Q: AT+NAME[P1] |OK+ Set:[ P1]|P1: nombre EDR del módulo, / Longitud máxima es 12. / Por defecto: HMSoft|

**19. Consultar/Configurar nombre BLE del módulo**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+NAMB? |OK+ Get:[P1]| P1: nombre BLE del módulo,  / Longitud máxima es 12. / Por defecto: HMSoft|
|S: AT+NAMB[P1] |OK+ Set:[ P1]|P1: nombre BLE del módulo, / Longitud máxima es 12. / Por defecto: HMSoft|

**20. Consultar/Configurar estado de salida PIO1 (LED del Sistema)**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+PIO1?| OK+ Get:[P1]| P1: 0, 1 / 0: Desconectado Salida 500ms Alto 500ms Bajo, Conectado salida Alto. / 1: Desconectado salida Bajo, Conectado salida Alto. / Por defecto: 0|
|S: AT+ PIO1 [P1]| OK+ Set:[ P1]|P1: 0, 1 / 0: Desconectado Salida 500ms Alto 500ms Bajo, Conectado salida Alto. / 1: Desconectado salida Bajo, Conectado salida Alto. / Por defecto: 0|

**21. Consultar/Configurar estado de salida PIO**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+PIO[P1]? |OK+ Get:[P1][P2]| P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: Salida Bajo / 1: Salida Alto / ?: Consultar|
|S: AT+ PIO[P1][P2]| OK+ Set:[P1][P2]|P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: Salida Bajo / 1: Salida Alto / ?: Consultar|

**22. Consultar/Configurar Código PIN EDR**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+PINE? |OK+ Get:[P1]| P1: Código EDR del módulo / Longitud máxima: 6 / Por defecto: 1234|
|S: AT+PINE[P1] |OK+ Set:[P1]|P1: Código EDR del módulo / Longitud máxima: 6 / Por defecto: 1234|

**23. Consultar/Configurar Código PIN BLE**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+PINB? |OK+ Get:[P1]| P1: Código BLE del módulo / 000000~999999 / Por defecto: 000000|
|S: AT+PINB[P1] |OK+ Set:[P1]|P1: Código BLE del módulo / 000000~999999 / Por defecto: 000000|

**24. Consultar/Configurar bit de paridad UART**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+PARI? |OK+ Get:[P1]| P1: 0, 1, 2, (Por defecto: 0) / 0: Sin paridad / 1: Paridad par / 2: Paridad impar|
|S: AT+PARI[P1] |OK+ Set:[P1]|P1: 0, 1, 2, (Por defecto: 0) / 0: Sin paridad / 1: Paridad par / 2: Paridad impar|

**25. Restaurar todos los valores de configuración a la configuración de fábrica**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RENEW |OK+RENEW| Ninguno|

**26. Reiniciar módulo**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RESET| OK+RESET| Ninguno|

**27. Consultar valor RSSI de BLE**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RSSB?| OK+RSSB: [P1]| P1: Valor RSSI / 9999: Sin conexión / 9998: Intentar más tarde / 9997: Error de lectura / Xxxx: Valor RSSI|

Este comando debe usarse después de configurar "AT+MODE1". Este comando solo es usado por dispositivo Bluetooth remoto.

**28. Consultar valor RSSI de EDR**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RSSE? |OK+RSSE: |[P1] P1: Valor RSSI / 9999: Sin conexión / 9998: Intentar más tarde / 9997: Error de lectura / Xxxx: Valor RSSI|

**29. Consultar Dirección del Último Dispositivo EDR Conectado**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RADE? |OK+Get:MAC Address |Ninguno|

**30. Consultar Dirección del Último Dispositivo BLE Conectado**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+RADB? |OK+Get:MAC Address |Ninguno|

**31. Consultar/Configurar Rol Maestro y Esclavo**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+ROLB?| OK+ Get:[P1] |P1: 0, 1 (predeterminado: 0) /0: Periférico / 1: Central|
|AT+ROLB[P1] |OK+ Set:[P1]|P1: 0, 1 (predeterminado: 0) / 0: Periférico /1: Central|

Este comando tendrá efecto después del próximo encendido o reinicio del módulo.

**32. Consultar/Configurar modo de trabajo EDR**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+SCAN? |OK+ Get:[P1] |P1: 0, 1, (Predeterminado: 0) / 0: Descubrible y conectable / 1: Solo conectable|
|S: AT+SCAN[P1] |OK+ Set:[P1]|1: 0, 1, (Predeterminado: 0) / 0: Descubrible y conectable / 1: Solo conectable|

**33. Consultar/Configurar bit de parada UART**

|Enviar| Recibir |Parámetro|
|---|---|---|
|Q: AT+STOP? |OK+ Get:[P1] |P1: 0, 1, (Por defecto: 0) / 0: 1 bit de parada / 1: 2 bits de parada|
|S: AT+STOP[P1] |OK+ Set:[P1]|P1: 0, 1, (Por defecto: 0) / 0: 1 bit de parada / 1: 2 bits de parada|

**34. Consultar Versión de Software**

|Enviar| Recibir |Parámetro|
|---|---|---|
|AT+VERR? |Información de Versión |Ninguno|
|AT+VERS?|Información de Versión |Ninguno|

## Programación

---
Configurar el módulo Bluetooth con Serial bajo Windows

Esta sección muestra cómo configurar Bluetooth con PC, se pueden aprender algunos métodos básicos de configuración. Para configurar la conexión de hardware consulte la sección "Instalación de Hardware". Encontrará que el LED azul en el módulo parpadea indicando que no se ha establecido conexión.

Abra un terminal serie y configure Velocidad de Baudios: 115200, Bits de datos: 8, Bits de parada: 1 y Sin Control de Flujo. Envíe "AT" al Bluetooth con el terminal serie y se devolverá "OK" si todo va bien. El
Bluetooth solo responde comandos AT cuando no se ha establecido conexión, o todos los comandos se ven como cadena y se envían. Puede distinguir el estado a través de las indicaciones del LED.
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-AT.png)

Entonces se pueden enviar algunas configuraciones útiles. Aquí hay algunos ejemplos de comandos y respuestas.

1. Probar conexión serie, enviar "AT", devolverá "OK".
2. Restaurar configuraciones de fábrica, enviar "AT+RENEW", devuelve "OK+RENEW".
3. Restablecer velocidad de baudios del puerto serie, enviar "AT+BAUD2", devuelve "OK+Set:2".
4. Habilitar autenticación, enviar "AT+AUTH1", devuelve "OK+Set:1".
5. Restablecer el Bluetooth, enviar "AT+RESET", devuelve "OK+RESET".
6. Consultar versión de firmware, enviar "AT+VERS?", devuelve "OK+Get:HMSoftV217".
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
17. Establecer a modo Central, enviar "AT+ROLB1", devuelve "AT+ROLB1".
O Establecer a modo Periférico, enviar "AT+ROLB0", devuelve "AT+ROLB0".

Usamos dos Bluetooth conectados con PC, uno se configuró como Central mientras el otro es Periférico. Varios segundos después se encuentran entre sí y el LED deja de parpadear, ¡conectados!

**Comunicarse con iPhone**

Este tipo de módulo Bluetooth tiene dos protocolos: Bluetooth EDR (Enhanced Data Rate) y Bluetooth Low Energy. Puede comunicarse con cualquier dispositivo que tenga uno de estos protocolos. Algunos teléfonos Android con OS superior a 4.3 e iPhone4 o posterior tienen capacidad BLE. Usamos un iPhone para demostrar cómo usar un teléfono celular para interactuar con Bluetooth.

Alimente el Bluetooth y configúrelo como rol Periférico. Busque LightBlue en Apple Store e instálelo. Lance la aplicación, puede encontrar "HM-13-BLE" que acabamos de renombrar. Tóquelo para conectar, luego toque "Properties" para controlarlo. La tecla "Hex" en la parte superior derecha es para cambiar el formato de datos, tal vez String sea fácil de ver. Presione "Listen for notifications" para habilitar la recepción de datos. Entonces podemos enviar datos a PC a través de BLE, presione "Write new value" y escriba algunas palabras. También PC puede transferir datos a iPhone con terminal serie.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-080911.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-14AT.png)

**Transmisión de datos entre dos Arduinos**

¿Está listo para codificar? Es hora de hacer algo después de la práctica. Prepare un par de Bluetooth, y Arduino u otra plataforma para controlarlos. Aquí usamos dos Arduino Uno. Configure la conexión como se menciona en la sección "Instalación de Hardware".

El programa de Central y Periférico usan el mismo código, la única diferencia es la definición de macro al comienzo del programa. Para asignar el Bluetooth al rol Central, solo necesita modificar el texto a "#define MASTER 1", o "#define MASTER 1" si se asignó el rol Periférico.

El flujo del programa de inicialización consulte el siguiente diagrama de flujo. Primero que todo necesitamos distinguir la velocidad de baudios preestablecida del Bluetooth. Después de esto, enviar comandos para restaurar configuraciones de fábrica, y cambiar velocidad de baudios de 115200 a 9600 ya que el puerto serie por software no funcionará bien a alta velocidad de baudios. Entonces otros parámetros se configuraron al Bluetooth con comando Reset al final.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Init-flowchat.png)

Después de la inicialización, el Central y Periférico harán cosas diferentes, el Central enviará mensaje al Periférico a intervalos e imprimirá lo que recibió del Periférico mientras el Periférico solo responde al Central.

Haga clic [aquí](https://github.com/Seeed-Studio/HM-13_SW) para descargar el código de prueba y abrir HM-13_SW.ino con Arduino IDE, compilar y descargar a Arduino Uno. Recuerde configurar el Bluetooth a diferente rol modificando la macro al comienzo. Si tiene algún problema sobre cómo iniciar Arduino, por favor haga clic [aquí](https://www.seeedstudio.com/wiki/Getting_Started_with_Seeeduino) para obtener ayuda.

Después de descargar el programa, abra dos ventanas de terminal serie, los LEDs en Bluetooth parpadearán, varios segundos después, dejan de parpadear y se mantienen encendidos, esto indica que se conectaron entre sí. Según está escrito el programa, el Central envía mensaje al Periférico continuamente y obtiene retroalimentación cada vez.

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Slave.png)

## Recursos

---

- [Hoja de datos Bluetooth HM-13](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Bluetooth_HM-13_en.pdf)
- [Código Arduino](https://github.com/Seeed-Studio/HM-13_SW)
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0_sch_pcb.zip">Eagle_Xadow-BLE_(dual_model)_v1.0_sch_pcb]</a>
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0.pdf"> PDF_Xadow-BLE_(dual_model)_v1.0</a>

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
