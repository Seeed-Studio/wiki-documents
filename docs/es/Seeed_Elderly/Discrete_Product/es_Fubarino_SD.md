---
description: Fubarino SD
title: Fubarino SD
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Fubarino_SD
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Fubarino_SD/img/Fubarinosd.jpg)

Fubarino SD es una placa microcontroladora pequeña y fácil de usar en protoboard. Es compatible con chipKIT y MPIDE, lo que significa que puedes escribir sketches para ella en MPIDE, que es el fork del IDE de Arduino para placas compatibles con chipKIT. El microcontrolador en la placa es un Microchip PIC32MX440F256H.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Fubarino-SD-p-1265.html)

##   Características
---
*   Conector USB conectado al periférico USB del PIC32.
*   Conector microSD conectado al periférico SPI por hardware en PIC32.
*   Integración completa y compatibilidad con MPIDE - de hecho, las versiones actuales de MPIDE soportan Fubarino SD como placa objetivo.
*   Todos los pines de E/S y alimentación en factor de forma "DIP" estándar para uso fácil con protoboard.
*   Alimentado desde conector USB, 3.3V externo o fuente de alimentación externa de 2.8V a 13.2V.
*   15 entradas analógicas (10 bits)
*   45 pines de E/S digitales
*   Pines de cabecera ICSP si quieres usar un programador o depurador por hardware bajo los IDEs MPLAB o MPAB X. (ambos gratuitos de Microchip)
*   Como todas las placas compatibles con chipKIT, la Fubarino SD puede ejecutar cualquier sketch o librería de Arduino siempre que no accedan directamente a registros nativos AVR.
*   Todas las E/S operan a 3.3V, pero muchos pines de E/S toleran 5V.
*   PIC32MX440F256H es un procesador de 32 bits funcionando a 80 MHz con 256K de Flash y 32K RAM
*   Puede usar USB (5V), 3.3V o entrada de 2.3V a 15V para alimentación
*   Incluye 4 canales DMA, 1 SPI (usado para microSD pero llevado a pines), 2 puertos I2C, USB (host, función, OTG), 15 canales A/D (10 bit), 5 temporizadores de 16-bit, 5 PWM por hardware, PMP, etc. como parte del procesador PIC32


##   Soporte

Por favor usa el [rastreador de problemas](https://github.com/fubarino/fubarino.github.com/issues) de Github para cualquier error relacionado con el hardware de Fubarino SD. Para errores en MPIDE, software o librerías, por favor consulta el [foro chipKIT/MPIDE](http://www.chipkit.org/forum/index.php) o el [rastreador de problemas](https://github.com/organizations/chipKIT32/dashboard/issues/) de Github de chipKIT/MPIDE.

Ten en cuenta que las primeras 100 placas Fubarino SD fueron construidas por error con partes PIC32MX795F512. Esto no debería impactar sketches construidos desde MPIDE. Sin embargo, sí significa que [RetroBSD](http://retrobsd.org/) es una opción para estas primeras 100 placas.

##   Recursos
---
*   Placa y esquemático Fubarino SD v1.4 (formato Eagle 6) - [Directorio Github](https://github.com/fubarino/fubarino.github.com/tree/master/sd/v1.4)

*   [Esquemático](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_sch.pdf) Fubarino SD v1.4 (PDF)
*   [Diseño de placa](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_brd.pdf) Fubarino SD v1.4 (PDF)
*   [BOM](https://github.com/fubarino/fubarino.github.com/raw/master/sd/v1.4/Fubarino_SD_v14_BOM_SeeedFormat.xlsx) Fubarino SD v1.4 (Excel)
*   [Manual de Referencia](https://github.com/fubarino/fubarino.github.com/raw/master/sd/docs/FubarinoSDURefManual.docx) Fubarino SD (Word)
*   Bootloader USB (compatible con avrdude) [archivo HEX](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/BL_1_1_6_FuncTest_1_0.hex) nota: haz clic derecho y selecciona 'guardar como' para obtener el archivo .HEX - la placa ya viene con este bootloader pre-programado
*   [Sketch de Prueba de Fábrica](https://github.com/fubarino/fubarino.github.com/raw/master/sd/files/FubarinoSD_ManufactureTest.pde) Este sketch es lo que la fábrica usa para probar la placa Fubarino SD - haz clic derecho y selecciona 'guardar como'.


##   Autores

Fubarino SD fue diseñada por Brian Schmalz (de [Schmalz Haus LLC](http://www.schmalzhaus.com)) y Rick Anderson (de [Fubar Labs](http://fubarlabs.org)). Ambos también están en el equipo de desarrollo chipKIT/MPIDE.

##   Enlaces Externos

Enlaces a páginas web externas que proporcionan más ideas de aplicación, documentos/hojas de datos o librerías de software

*   [Descarga](http://www.chipkit.org/forum) de MPIDE (Multi Platform Integrated Development Environment)

*   [Sitio web de Fubarino](http://fubarino.org/) (incluye archivos más recientes, FAQ, tutoriales, ejemplos, etc.)
*   [Foros chipKIT y MPIDE](http://www.chipkit.org/forum/index.php)

*   [Wiki chipKIT/MPIDE](http://chipkit.org/wiki/index.php?title=Main_Page "Main_Page")

*   [Digilent Inc](http://www.digilentinc.com) Diseñadores de las placas chipKIT
*   [PIC32MX440F256H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en534168) Procesador PIC32 de Microchip

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>