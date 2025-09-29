---
description: Xadow - GSM&#43;BLE
title: Xadow - GSM&#43;BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_GSMPlusBLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_shangjiatu.JPG)

Ya sea realizando y recibiendo llamadas telefónicas a través de un enlace de radio usando altavoces y micrófono externos o intercambiando datos a cortas distancias con Bluetooth, puedes hacerlo con Xadow GSM+BLE.

<!-- As the heart of RePhone kit Create, the Xadow GSM+BLE is built around the powerful System-On-Chip (SOC) MT2502, offering a rich range of communication protocols - GSM, GPRS and Bluetooth (v4.0 and 2.1 dual mode). It supports quad-band 850/900/1800/1900MHz that covers any GSM network in the world. Just insert a 2G Nano SIM card, and then you can enchant things with cellular connectivity. -->


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/depot/Xadow-GSM-BLE-p-2560.html?cPath=84_120)  


##Características  

- Basado en el Sistema-en-Chip comercial más pequeño  
- (5.4mm x 6.2mm) actualmente en el mercado  
- Diseño de código abierto y modular  
- Delgado y pequeño  
- Conectores Xadow integrados para cables FPC enchufables fáciles  
- Apilable, encadenable y cosible con otros Módulos Xadow  
- Módulo central para la mayoría de los Kits RePhone  
- Elección perfecta para comunicación de larga distancia y corto alcance  

##Especificaciones  

|Microcontrolador	|MT2502                                                                                  |
|-------------------|----------------------------------------------------------------------------------------|
|Núcleo MCU	        |Procesador RISC ARM7EJ-STM de 32 bits                                                   |
|RAM	            |4 MB                                                                                    |
|Memoria Flash	    |16 MB                                                                                   |
|Fuente de Alimentación	    |3.3 ~ 4.2V(sin SIM)/3.5 ~ 4.2V(con SIM)                                                 |
|Consumo de Energía	|20mW/30mW/52mW @ reposo(sin radio)/reposo(GSM)/reposo(BT)                             |
|Cuatro bandas	        |850/900/1800/1900 MHz                                                                   |
|GPRS	            |Módem Clase 12                                                                          |
|Velocidad de Reloj	    |260 MHz                                                                                 |
|Conectores     	|Conector de 35 PINES y Conector de 11 PINES para Módulos Xadow; Conector JST 1.0 para la batería|
|Interfaces	        |LCD, Audio, I2C, SPI, UART, y GPIOs etc                                               |
|Dimensiones       	|25.37mm × 20.30mm / 1" × 0.8"                                                           |

##Descripción General del Hardware  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_Overview.png) 

 
La imagen a continuación ilustra las Definiciones de Pines del Conector Xadow de 11 Pines, Pines de Conexión Soldables y el Conector Xadow de 35 Pines en una secuencia de **Izquierda a Derecha**.  

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow-connector-Pin-definitions-06.jpg)  

##Encendido  
Enciende el RePhone/Xadow GSM+BLE con una batería de **3,5V ~ 4,2V** y **conector macho JST 1.0**, o enciéndelo a través del **PIN 3(VCC)** de conexión y el **PIN 6(GND)** de conexión como se ilustra en la vista de hardware anterior.  

##Carga de la Batería  
El Xadow GSM+BLE utiliza el [conector hembra JST 1.0](https://www.seeedstudio.com/depot/index.php?main_page=opl_info&opl_id=555) para la batería, puedes cargar la batería simplemente conectando tu placa con un cable USB.  

##Modo de Operación  
El Xadow GSM+BLE tiene dos modos de operación cuando lo enciendes y lo conectas con la PC - **mantén presionada la tecla de encendido durante 2 segundos** para **ENCENDER** o **APAGAR** el módulo para acceder al **Modo de Almacenamiento Masivo** o **Modo Flash/Debug.**  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Operating_mode.png)  

##Modo de Almacenamiento Masivo  
Cuando el Xadow GSM+BLE está **APAGADO**, conecta la placa (con batería conectada) a la PC vía cable Micro USB, puedes acceder al 'Modo de Almacenamiento Masivo' de 5MB en la PC. Todas las aplicaciones (archivos vxp) y configuraciones del sistema se almacenan en este disco de 5MB.  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Mass_Storage_Mode.png)  

##Modo Flash/Debug  
Cuando el Xadow GSM+BLE está **ENCENDIDO**, conecta la placa (con batería conectada) a la PC vía cable Micro USB, puedes encontrar dos **puertos COM** en tu **'Administrador de Dispositivos'**： 

- **MTK USB Debug Port(COM4)**  
- **MTK USB Modem Port(COM5)**  

El número COM podría ser diferente en tu PC. Cada puerto COM tiene una función diferente según el entorno de desarrollo que uses, por favor consulta la sección Primeros Pasos para más detalles.  

Abre el **Administrador de Dispositivos** haciendo clic en el botón **Inicio**, haciendo clic en **Panel de Control**, haciendo clic en **Sistema y Seguridad**, y luego, bajo **Sistema**, haciendo clic en **Administrador de Dispositivos**. Si se te solicita una contraseña de administrador o confirmación, escribe la contraseña o proporciona la confirmación. Ve la siguiente imagen:  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Check_ports.png)  


##Primeros Pasos  
Hemos desarrollado bibliotecas ricas que se conectan al IDE de Arduino, Lua y JavaScript, con ejemplos detallados para ayudar a programadores de nivel básico a desarrollar con módulos RePhone de manera fácil y rápida.

También proporcionamos un SDK poderoso basado en el IDE Eclipse para desarrolladores de C/C++ para trabajar con aplicaciones más inteligentes.  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Arduino_IDE-17.png)  ]
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Eclipse_IDE-13.png) ](https://www.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit)   
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Lua-14.png)](https://www.seeedstudio.com/wiki/Lua_for_RePhone#Use_Lua_Shellt)  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/JS-15.png) ](https://www.seeedstudio.com/wiki/JavaScript_for_RePhone) 

Para más información puedes consultar el Entorno de Desarrollo RePhone en la Página Principal de RePhone:  

[
Entorno de Desarrollo RePhone](https://wiki.seeedstudio.com/es/RePhone/#development-environment)

##Proyectos Relacionados  
Consulta proyectos increíbles de RePhone que se han logrado con RePhone.  
**Un Collar Rastreable para Perros**  
5 pasos para hacer un collar rastreable para tu adorable cachorro.   
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/450px-Dog_Collar.png.jpeg)  ](https://www.seeedstudio.com/recipe/424-rephone-traceable-dog-collar.html)

##Comunidad RePhone  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/300px-RePhone_Community-2.png) ](http://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)   
Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=rephone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.

###Preguntas Frecuentes  
Algunas preguntas frecuentes en la Comunidad RePhone son recopiladas y respondidas en el tema "[Preguntas Frecuentes de RePhone (FAQ)](https://community.seeedstudio.com/topic_detail.html?id=5170#p23753)" , el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.  

##Recursos  
El diagrama esquemático del Xadow GSM+BLE se proporciona en el siguiente enlace:  
[- Archivos eagle de Xadow_GSM+BLE ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Xadow_GSM%2BBLE.rar)  
Consulta más información sobre el chipset MT2502:  
[- Hoja de datos para archivos eagle](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Datasheet_for_MT2502.rar)  
Consulta este excel para la compatibilidad con módulos Xadow 1.0:  
[- Compatibilidad entre GSM+BLE y módulos Xadow 1.0  ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Compatibility_between_GSM%2BBLE_and_Xadow_1.0_modules.xlsx)
 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
