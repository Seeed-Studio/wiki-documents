---
description: 4A_Motor_Shield
title: 4A Motor Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/4A_Motor_Shield
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg" alt="pir" width={600} height="auto" /></p>

El 4A Motor Shield está basado en el IC de potencia Freescale MC33932 dual H-Bridge, que puede controlar cargas inductivas con corrientes de hasta 5.0A pico por puente individual. Te permite controlar dos motores DC con tu placa Arduino/Seeeduino, controlando la velocidad y dirección de cada uno independientemente. También puedes medir la absorción de corriente de cada motor, entre otras características.  
El convertidor DC/DC integrado soporta un rango muy amplio de voltaje de entrada, y puede proporcionar una fuente de alimentación de 5V para la placa del microcontrolador con una corriente máxima de 100mA. Así que solo necesitas una fuente de alimentación para mover los motores y alimentar el circuito lógico.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones

- Voltaje de Operación: 6V ~ 28V  
- Salida DC/DC: 5V 100mA @ pin "5V"  
- Corriente de Salida (Para Cada Canal): 2A (operación continua) / 5A (pico)  
- Rango de Ciclo de Trabajo de Salida: 0%~100%  
- Protección contra cortocircuito de salida (cortocircuito a VPWR o GND)  
- Limitación de sobrecorriente (regulación) vía PWM interno de tiempo de apagado constante  
- Reducción del umbral de límite de corriente dependiente de la temperatura  

## Interfaz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg" alt="pir" width={600} height="auto" /></p>

**①：J1:** Conector de entrada DC.  
**②：J2:** Conector de salida del controlador de motor.  
**③：EN,FT:** Jumpers para control EN y detección de bandera de falla. Si cortocircuitas el jumper EN, la señal EN se mapea al pin D4, puedes controlar la deshabilitación de salida del H-Bridge o resetear la bandera de falla por el pin D4. Si cortocircuitas el jumper FT, la señal de bandera de falla se mapea al pin D3, también puedes leer la bandera de falla desde el pin D3.  
**④: IO:** Jumper de Selección de Nivel de Voltaje Lógico. Puedes elegir el nivel de voltaje lógico de control desde este jumper.  
**⑤：IA,IB:** Jumper del sensor de corriente. Si necesitas detectar la corriente del motor, tienes que cortocircuitar estos jumpers. La corriente del motor se convertirá en señal de voltaje y puede leerse desde los pines A0, A1.  

**Fuente de Alimentación:** Tienes que alimentar el shield desde J1 (conector de entrada DC). El rango de voltaje de entrada puede configurarse de 6Vdc ~ 28Vdc. El convertidor DC/DC integrado puede convertir el voltaje de entrada DC a voltaje de salida de 5Vdc para alimentar el circuito lógico. El convertidor DC/DC también puede alimentar la placa del microcontrolador (Arduino/Seeeduino) desde el pin "5V" para una corriente máxima de 100mA.  
**Interfaz del Motor：** Out 1 y Out 2 (Out 3 y Out 4) conectan el Motor A(B) para Motor DC.  

## Precaución

<span style={{color: 'red'}}>No toques el IC H-bridge o la placa PCB durante el funcionamiento. Su temperatura puede alcanzar hasta 100 grados en el caso de operación a carga completa.</span>

## Demostración

### Controlar Motor DC

Conecta el motor DC a los pines de salida del motor shield OUT1& OUT2(OUT3& OUT4). Y conecta el voltaje de control a las terminales de la fuente de alimentación. La placa controladora de motor puede generar voltaje de alimentación de 5V para seeeduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png" alt="pir" width={600} height="auto" /></p>

Instala la librería que proporcionamos en la sección de Recursos en el archivo de librerías de Arduino y encuentra el ejemplo "DCMotorDemo" por la ruta: File->Example->MotorDrive->DCMotorDemo.  

Esta demostración permite que el motor gire en una dirección por 2 seg, tome un descanso por 1 seg y gire en la dirección inversa por 2 seg.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemático pdf](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf)  
- [Archivo Eagle](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip)  
- [Librería Motor Shield](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip)
- [Hoja de Datos MC33932](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf)  

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