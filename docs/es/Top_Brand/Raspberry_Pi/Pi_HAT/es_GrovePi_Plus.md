---
description: GrovePi Plus
title: GrovePi Plus
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GrovePi_Plus
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/110060049%2010_02.jpg)

[GrovePi](http://www.dexterindustries.com/GrovePi/) es una placa complementaria que lleva los [Sensores Grove](#/Grove_System "Sistema Grove") a la [Raspberry Pi](https://www.seeedstudio.com/depot/s/Raspberry%2520Pi.html?search_in_description=0). Como nueva versión del [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html).
Añade soporte para los nuevos RaspberryPi Model B+ y Model A+.
Hay tres orificios de montaje que pueden coincidir perfectamente con todas las versiones de Raspberry Pi. Orificio de salida del cable de la cámara.
También mejora los subcircuitos de conversión de nivel de voltaje.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/GrovePi-p-2241.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

---

* 7 puertos digitales

* 3 puertos analógicos

* 3 puertos I2C

* 1 puerto serie conectado a GrovePi

* 1 puerto serie conectado a Raspberry Pi

* Voltaje de salida Vcc del conector Grove: 5Vdc

## Comenzar

---

**<big>Bienvenido a la Guía de Inicio Rápido del GrovePi+.</big>**

Si quieres saber más sobre cómo funciona, puedes encontrar todos los archivos de diseño en el [Repositorio Github](https://github.com/DexterInd/GrovePi) del diseñador.

**GrovePi Plus para Raspberry Pi Vs. GrovePi+**

| Parámetro                   | [GrovePi Plus para Raspberry Pi](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/es/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Voltaje de Funcionamiento             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Puertos Grove                 | 6 Digital(3.3V)   4 Analógico(3.3V)   3 I2C(3.3V)   1 PWM(3.3V)  1 RPISER(UART) conecta a Raspberry Pi(3.3V)  1 SWD | 7 Digital(5V)  3 Analógico(5V)  3 I2C(5V)  1 SERIAL: Conecta a ATMEGA328P D0/1(5V)  1 RPISER: Conecta a Raspberry Pi(3.3V)  1 ISP |
| Grove-Digital               | Conecta a Raspberry Pi directamente                                                                                  | Conecta a pines digitales ATMEGA328P y transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi                      |
| Grove-Analógico                | Conecta a STM32F030F4P6(12bit ADC) y luego transfiere a señal I2C, enruta a Raspberry Pi directamente                | Conecta a pines analógicos ATMEGA328P(10bit ADC) y luego transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi       |
| Grove-I2C                   | Conecta a Raspberry Pi directamente                                                                                  | Conecta a través de convertidor de nivel a Raspberry Pi                                                                                  |
| Grove-PWM                   | Conecta a Raspberry Pi directamente                                                                                  | NA                                                                                                                               |
| RPISER                      | Conecta a Raspberry Pi directamente                                                                                  | Conecta a Raspberry Pi directamente                                                                                                 |
| SERIAL                      | NA                                                                                                                | Conecta a pines digitales ATMEGA328P D0/D1 y transfiere a señal I2C, luego a través de convertidor de nivel a Raspberry Pi                |
| SWD                         | Graba firmware a STM32F030F4P6                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | Graba firmware a ATMEGA328P                                                                                                      |
| Pines del Conector Raspberry Pi | 40                                                                                                                | 26                                                                                                                               |

### Conectar el GrovePi al Raspberry Pi

Primero, monta tu GrovePi en el Raspberry Pi. El GrovePi se desliza sobre la parte superior del Raspberry Pi como se muestra en la imagen a continuación.

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePiPlus_wiki_3.jpg)

![](https://files.seeedstudio.com/wiki/GrovePi_Plus/img/GrovePi_Wiki_1.JPG)

Asegúrate de que los pines estén correctamente alineados al apilar el GrovePi.

### Configurar el Software en el Raspberry Pi

A continuación instalaremos el software en el Raspberry Pi. Hay dos opciones para la instalación:

* Puedes usar nuestra Imagen BrickPi.

* Usar tu propia imagen. Si ya tienes tu propia versión de linux ejecutándose en el Raspberry Pi, puedes usar nuestro script bash para configurar el GrovePi.

**Usando la Imagen BrickPi**

* Descarga la Imagen Brick Pi e instala la imagen en tu tarjeta SD. [Aquí está el enlace a la Página BrickPi con pasos para configurar la tarjeta SD](http://www.dexterindustries.com/BrickPi/getting-started/pi-prep/). Necesitarás una tarjeta SD de mínimo 4GB para esta instalación.

* Clona el repositorio Github en una ubicación apropiada en Raspbian

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Ejecuta el script bash en la carpeta Scripts para configurar el Raspbian. [Aquí está el tutorial para configurar con el Script.](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)

* Reinicia tu Raspberry Pi.

**Configurando tu propia imagen**

* Clona el repositorio de Github en una ubicación apropiada

```
git clone https://github.com/DexterInd/GrovePi.git
```

* Ejecuta el script bash en la carpeta Scripts para configurar el Raspbian. [aquí](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) está el tutorial para configurar con el Script.

* Reinicia la Raspberry Pi y comienza a usar el Grove Pi.

### Probando el GrovePi

Una vez que tengas tu Raspberry Pi configurada para trabajar con el GrovePi, es hora de verla en acción.

Hemos desarrollado tres proyectos simples para ilustrar cómo funciona el GrovePi.

## Productos Compatibles

---

### Lista de Grove

* [1. Grove - Button](https://wiki.seeedstudio.com/es/Grove-Button#With_Raspberry_Pi)

* [2. Light Sensor](https://wiki.seeedstudio.com/es/Grove-Light_Sensor#With_Raspberry_Pi)

* [3. Buzzer](https://wiki.seeedstudio.com/es/Grove-Buzzer#With_Raspberry_Pi)

* [4. Sound Sensor](https://wiki.seeedstudio.com/es/Grove-Sound_Sensor#With_Raspberry_Pi)

* [5. Grove - Red LED](https://wiki.seeedstudio.com/es/Grove-Red_LED#With_Raspberry_Pi)

* [6. LCD RGB Backlight](https://wiki.seeedstudio.com/es/Grove-LCD_RGB_Backlight#With_Raspberry_Pi)

* [7. Rotary Angle Sensor](https://wiki.seeedstudio.com/es/Grove-Rotary_Angle_Sensor#With_Raspberry_Pi)

* [8. Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/es/Grove-Temperature_and_Humidity_Sensor_Pro/#With_Raspberry_Pi)

* [9. Ultrasonic Ranger Sensor](https://wiki.seeedstudio.com/es/Grove-Ultrasonic_Ranger#With_Raspberry_Pi)

* [10. Relay](https://wiki.seeedstudio.com/es/Grove-Relay#With_Raspberry_Pi)

* [11. Grove-4-Digit Display](https://wiki.seeedstudio.com/es/Grove-4-Digit-Display#With_Raspberry_Pi)

* [12. Grove-6-Axis_AccelerometerAndCompass_V2.0](https://wiki.seeedstudio.com/es/Grove-6-Axis_AccelerometerAndCompass_V2.0#With_Raspberry_Pi)

* [13. Grove - Barometer (High-Accuracy)](https://wiki.seeedstudio.com/es/Grove-Barometer(High-Accuracy)#With_Raspberry_Pi)

* [14. Grove-Barometer_Sensor-BMP180](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BMP180#With_Raspberry_Pi)

* [15. Grove-Dust_Sensor](https://wiki.seeedstudio.com/es/Grove-Dust_Sensor#With_Raspberry_Pi)

* [16. Grove-Electricity_Sensor](https://wiki.seeedstudio.com/es/Grove-Electricity_Sensor#With_Raspberry_Pi)

* [17. Grove-Electromagnet](https://wiki.seeedstudio.com/es/Grove-Electromagnet#With_Raspberry_Pi)

* [18. Grove-Flame_Sensor](https://wiki.seeedstudio.com/es/Grove-Flame_Sensor#With_Raspberry_Pi)
* [19. Grove-Gas_Sensor-MQ2](https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ2#With_Raspberry_Pi)
* [20. Grove-Gesture_v1.0](https://wiki.seeedstudio.com/es/Grove-Gesture_v1.0#With_Raspberry_Pi)
* [21. Grove-GPS](https://wiki.seeedstudio.com/es/Grove-GPS#With_Raspberry_Pi)
* [22. Grove-High_Temperature_Sensor](https://wiki.seeedstudio.com/es/Grove-High_Temperature_Sensor#With_Raspberry_Pi)
* [23. Grove-Infrared_Reflective_Sensor](https://wiki.seeedstudio.com/es/Grove-Infrared_Reflective_Sensor#With_Raspberry_Pi)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* **[Eagle]** [Archivo eagle GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2BEagle%20FIle.zip)
* **[PDF]** [Archivo pdf de esquemáticos GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20Sch.pdf)
* **[PDF]** [Archivo pdf de PCB GrovePi_Plus V3.0](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/GrovePi%2B%20v3.0%20PCB.pdf)
* **[Documento]** [Configuración_de_Software_para_GrovePi](https://files.seeedstudio.com/wiki/GrovePi_Plus/res/Setting_Up_Software_for_GrovePi.pdf)

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

