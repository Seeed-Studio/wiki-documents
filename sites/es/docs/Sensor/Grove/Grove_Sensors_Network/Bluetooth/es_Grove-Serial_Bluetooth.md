---
title: Grove Serial Bluetooth
nointro:
keywords:
  - docs
  - docusaurus
image:  https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/Grove-Serial_Bluetooth
last_update:
  date: 01/29/2022
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Twigbt00.jpg)

Grove - Serial Bluetooth es un módulo fácil de usar compatible con el Grove Base Shield existente, y diseñado para configuración de conexión serial inalámbrica transparente. El módulo Bluetooth de puerto serial está completamente calificado como Bluetooth V2.0+EDR(Enhanced Data Rate) 2Mbps Modulation con transceptor de radio completo de 2.4GHz y banda base. Utiliza CSR Bluecore 04-External single chip Bluetooth system con tecnología CMOS y con AFH(Adaptive Frequency Hopping Feature). Tiene la huella más pequeña de 12.7mm x 27mm. Esperamos que simplifique su ciclo general de diseño/desarrollo.

Modelo:[WLS31746P](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

## Especificaciones ##

- Voltaje de Operación: 5.0VDC

- Velocidad de Datos: 2Mbps

- Potencia de Transmisión RF (Máx): +4dBm

- Sensibilidad: -80dBm

- Bluetooth V2.0+EDR 3Mbps Modulation completamente calificado

- Velocidad de baudios seleccionable

- Auto-reconexión en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión

## Demostración ##

En esta librería empaquetamos dos demos para que su proyecto funcione en modo Maestro y modo Esclavo.
Dos módulos Bluetooth funcionan como se muestra a continuación:
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-1.jpg)

Conecte el módulo al Puerto D6 del [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) :
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Grove-Serial-Bluetooth.JPG)

Instale la librería en la sección "Resources". Si desea ejecutar el proyecto en modo Maestro, encuentre el demo por la ruta: File - Examples - Bluetooth_demo_code - Master. Y puede encontrar el demo para modo Esclavo en la misma ruta.

Cuando el módulo Grove - Serial Bluetooth está en estado de emparejamiento, los LEDs verde y rojo parpadean en intervalos. Si la conexión tiene éxito, el LED verde parpadeará cada 2s. Si la conexión falla, el LED rojo parpadeará cada 0.5s.

## Referencia ##

#### Diagrama de Flujo ####

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-2.jpg)

### Comandos para cambiar la configuración predeterminada ###

**1.Establecer MODO de trabajo**

|||
|---|
 |\r\n+STWMOD=0\r\n|Establecer modo de trabajo del dispositivo como cliente (esclavo). Guardar y Reiniciar.|
 |\r\n+STWMOD=1\r\n|Establecer modo de trabajo del dispositivo como servidor (maestro). Guardar y Reiniciar.|

**Nota:** **\r\n** es necesario para la operación y el valor son **0x0D 0x0A** en Hex. **\r** y **\n** representan **retorno de carro** y **salto de línea**(o siguiente línea),

**2.Establecer VELOCIDAD DE BAUDIOS**

|||
|---|
 |\r\n+STBD=115200\r\n|Establecer velocidad de baudios 115200. Guardar y Reiniciar.|
 |Velocidades de baudios soportadas:9600,19200,38400,57600,115200,230400,460800.|

**3.Establecer NOMBRE del Dispositivo**

|||
|---|
 |\r\n+STNA=abcdefg\r\n|Establecer nombre del dispositivo como "abcdefg". Guardar y Reiniciar.|

**4.Auto-conectar el último dispositivo emparejado al encender**

|||
|---|
 |\r\n+STAUTO=0\r\n|Auto-conexión prohibida. Guardar y Reiniciar.|
 |\r\n+STAUTO=1\r\n|Permitir Auto-conexión. Guardar y Reiniciar.|

**5.Permitir que dispositivo emparejado se conecte a mí**

|||
|---|
 |\r\n+STOAUT=0\r\n|Prohibido. Guardar y Reiniciar.|
 |\r\n+STOAUT=1\r\n|Permitir. Guardar y Reiniciar.|

**6.Establecer CÓDIGO PIN**

|||
|---|
 |\r\n+STPIN=2222\r\n|Establecer código pin "2222", Guardar y Reiniciar.|

**7.Eliminar CÓDIGO PIN(ingresar CÓDIGO PIN por MCU)**

|||
|---|
 |\r\n+DLPIN\r\n|Eliminar código pin. Guardar y Reiniciar.|

**8.Leer CÓDIGO DE DIRECCIÓN local**

|||
|---|
 |\r\n+RTADDR\r\n|Devolver dirección del dispositivo.|

**9.Auto-reconexión cuando el dispositivo maestro está fuera del rango válido (el dispositivo esclavo se auto-reconectará en 30 min cuando esté fuera del rango válido)**

|||
|---|
 |\r\n+LOSSRECONN=0\r\n|Prohibir auto-reconexión.|
 |\r\n+LOSSRECONN=1\r\n|Permitir auto-reconexión.|

###  Comandos para Operación Normal ###

#### 1.Consultar

**a) Maestro**

|||
|---|
 |\r\n+INQ=0\r\n|Detener Consulta|
 |\r\n+INQ=1\r\n|Comenzar/Reiniciar Consulta|

**b) Esclavo**

|||
|---|
|\r\n+INQ=0\r\n |Deshabilitar ser consultado|
|\r\n+INQ=1\r\n| Habilitar ser consultado|

Cuando el comando **+INQ=1** es exitoso, los LEDs **rojo** y **verde** parpadean alternativamente.

**2.El módulo Bluetooth devuelve el resultado de la consulta**

|||
|---|
 |\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n|
 |Se consulta un dispositivo Bluetooth serie con la dirección "aa,bb,cc,dd,ee,ff" y el nombre "name"|

**3.Conectar dispositivo**

|||
|---|
 |\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n|Conectar a un dispositivo con dirección "aa,bb,cc,dd,ee,ff"|

**4.El módulo Bluetooth solicita ingresar PINCODE**

\r\n+INPIN\r\n

**5.Ingresar PINCODE**

|||
|---|
 |\r\n+RTPIN=code\r\n||
 |Ejemplo: RTPIN=0000| Ingresar PINCODE que son cuatro ceros|

**6.Desconectar dispositivo** Poner PIO0 en alto desconectará el dispositivo Bluetooth que esté funcionando actualmente.

**7.Devolver estado** \r\n+BTSTA:**xx**\r\n
**xx** estado:

- 0 - Inicializando

- 1 - Listo

- 2 - Consultando

- 3 - Conectando

- 4 - Conectado

(**Nota:** Esto no es un comando, sino la información devuelta por el módulo después de cada comando)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="res/Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- [Biblioteca Serial Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_demo_code.zip)
- [Archivo Eagle Serial Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Instrucciones de Software Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_Software_Instruction.pdf)
- [Hoja de Datos del módulo Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_module.pdf)

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
