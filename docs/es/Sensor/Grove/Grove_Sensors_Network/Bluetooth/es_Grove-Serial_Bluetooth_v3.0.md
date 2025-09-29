---
title: Grove - Serial Bluetooth v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Serial_Bluetooth_v3.0/
slug: /es/Grove-Serial_Bluetooth_v3.0
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove-Serial_Bluetooth_v3.0.jpg)

Grove - Serial Bluetooth es un módulo fácil de usar compatible con el Grove Base Shield existente, y diseñado para configuración de conexión serial inalámbrica transparente. El módulo Bluetooth de puerto serial es completamente calificado Bluetooth V2.0+EDR(Enhanced Data Rate) 2Mbps Modulación con transceptor de radio completo de 2.4GHz y banda base. Utiliza CSR Bluecore 04-External sistema Bluetooth de chip único con tecnología CMOS y con AFH(Adaptive Frequency Hopping Feature). Tiene la huella más pequeña de 12.7mm x 27mm. Esperamos que simplifique su ciclo general de diseño/desarrollo.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)

Especificaciones
--------------

- Voltaje de Operación: 5.0VDC
- Velocidad de Datos: 2Mbps
- Potencia de Transmisión RF (Máx)：+4dBm
- Sensibilidad：-80dBm
- Bluetooth V2.0+EDR 3Mbps Modulación Completamente Calificado
- Velocidad de baudios seleccionable
- Auto-reconexión en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Demostración
-------------

Dos módulos Bluetooth funcionan como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt5.JPG)

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt6.JPG)

### Instalación de Hardware

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_3_.jpg.png)

### Descargar Código y Cargar

1. Puedes descargar el código en github, haz clic [aquí](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), luego extráelo a la carpeta libraries de Arduino.
2. Abre Arduino IDE, abre File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Button, entonces abres el código de Master, modifica el código como sigue:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_4_.jpg.png)

1. Abre Arduino IDE, abre File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_led, entonces abres el código de Slave y modifica el código también como arriba.
2. Guarda la modificación y haz clic en Upload para Cargar el código, si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic <a href="/es/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}> aquí </font></span></a> para obtener ayuda.

### Verificar El Resultado

1. Después de terminar de Cargar el código a ambos Master y Slave, reinicia los dos dispositivos simultáneamente
2. Puedes ver el led parpadear, indicando que los dispositivos se estaban inicializando y conectando.
3. Después de varios segundos, led encendido, indica que Master y Slave se habían conectado.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Si no se observa el fenómeno anterior, intenta desconectar la alimentación y volver a conectar.
</div>

Referencia
---------

### Comandos para cambiar la configuración predeterminada

**1. Establecer MODE de trabajo**

| Comando  | Descripción                                      |
|----------|--------------------------------------------------|
| AT+ROLES | Establecer modo de trabajo del dispositivo como cliente (esclavo).  |
| AT+ROLEM | Establecer modo de trabajo del dispositivo como servidor (maestro). |

**2.Configurar BAUDRATE**

| Comando  | Descripción                                 |
|----------|---------------------------------------------|
| AT+BAUD4 | Configurar baudrate 9600. Guardar y Reiniciar.  |
| AT+BAUD5 | Configurar baudrate 19200. Guardar y Reiniciar.  |
| AT+BAUD6 | Configurar baudrate 38400. Guardar y Reiniciar.  |
| AT+BAUD7 | Configurar baudrate 57600. Guardar y Reiniciar.  |
| AT+BAUD8 | Configurar baudrate 115200. Guardar y Reiniciar.  |
| AT+BAUD9 | Configurar baudrate 230400. Guardar y Reiniciar.  |
| AT+BAUDA | Configurar baudrate 460800. Guardar y Reiniciar.  |

**3. Establecer NOMBRE del dispositivo**

| Comando        | Descripción                                           |
|----------------|-------------------------------------------------------|
| AT+NMAEabcdefg | Establecer nombre del dispositivo como "abcdefg". Longitud máxima es 12. |


**4. Establecer CÓDIGO PIN**

| Comando    | Descripción                                    |
|------------|------------------------------------------------|
| AT+PIN2222 | Establecer código pin "2222", longitud máxima es 12. |


**5. Restaurar todos los valores de configuración a la configuración de fábrica**

| Comando    | Descripción                                              |
|------------|----------------------------------------------------------|
| AT+DEFAULT | Restaurar todos los valores de configuración a la configuración de fábrica |

**6. Consultar dirección del módulo**

| Comando | Descripción                |
|---------|----------------------------|
| AT+ADDR | Consultar dirección del módulo |


**7. Consultar dirección del último dispositivo conectado**

| Comando | Descripción                |
|---------|----------------------------|
| AT+RADD | Consultar dirección del módulo |


<!-- ## Schematic Online Viewer -->

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} -&gt; < div>
</div> -->
## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle de Serial Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Instrucciones de software Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)
- [Hoja de datos del módulo Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Bluetooth_module.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth_v3.0 -->

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
