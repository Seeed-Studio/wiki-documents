---
description: 4WD Driver Platform V1.0
title: 4WD Driver Platform V1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/4WD_Driver_Platform_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD Driver Platform V1.0 (No incluye chip Intel Edison) es una placa controladora de motores que soporta tracción de 4 ruedas con control bidireccional y completo para cada motor. La característica más importante de esta placa controladora es su expandibilidad lograda mediante interfaces grove que pueden hacer tu proyecto más versátil. También cuenta con un SDK (kit de desarrollo de software) detallado y simple que hará tu proceso de desarrollo más rápido y fácil. Con Edison instalado, puedes construir un sistema potente para satisfacer tus diferentes necesidades.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

## Características

---
- Soporta puente UART de USB a dispositivo
- Soporta OTG(On The Go)
- Soporta puerto de programación SPI
- Soporta interfaz Grove: puerto UART*1, puerto I2C*3
- Soporta conducción de motor encoder de 4 ruedas con bidireccional(Corriente Pico: 3A)
- Soporta función de protección contra sobrecorriente, sobrecarga y cortocircuito.
- SDK detallado y simple
- Diseñado para plataforma Intel Edison.

## Especificaciones

---

<table>
  <tr>
      <td>Parámetros básicos</td>
  </tr>
  <tr>
      <td>Voltaje de entrada</td>
      <td>6-16V</td>
  </tr>
  <tr>
      <td>Voltaje de salida</td>
      <td>5V/4V/3.3V/1.8V</td>
  </tr>
  <tr>
      <td>Corriente en reposo</td>
      <td>Menos de 150mA</td>
  </tr>
  <tr>
      <td>Dimensiones</td>
      <td>130*110mm</td>
  </tr>
  <tr>
      <td>Controlador de motor</td>
  </tr>
  <tr>
      <td>Chip controlador</td>
      <td>MC33931(Freescale) * 4, independiente</td>
  </tr>
  <tr>
      <td>Voltaje de entrada</td>
      <td>5-30V</td>
  </tr>
  <tr>
      <td>Corriente de salida</td>
      <td>3A(MAX)</td>
  </tr>
  <tr>
      <td>Protección</td>
      <td>Corte automático de salida por sobretemperatura, bajo voltaje y ocurrencias de cortocircuito</td>
  </tr>
  <tr>
      <td>Expandibilidad</td>
  </tr>
  <tr>
      <td>Interfaz I2C</td>
      <td>3</td>
  </tr>
  <tr>
      <td>Interfaz SPI</td>
      <td>1</td>
  </tr>
  <tr>
      <td>Interfaz UART</td>
      <td>2</td>
  </tr>
  <tr>
      <td>Interfaz USB OTG</td>
      <td>1</td>
  </tr>
</table>

## Ideas de aplicación

---

- Varios tipos de robots

- Controlador de motor

- Coche de juguete

- Control Industrial

## Descripción general del hardware

---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**Tenga en cuenta que solo el voltaje de 3.3 V es válido para aplicar en TODAS las interfaces de motor y módulos grove.**

## Primeros pasos

---

:::note
    Esta sección solo le muestra cómo construir un entorno de desarrollo básico.
Puede construir un entorno de desarrollo para su proyecto con las siguientes guías:
:::

### Ensamblar Edison en la placa 4WD Driver

**Material requerido**

- 4WD Driver Platform V1.0 *1

- Intel Edison *1

- 2 cables USB Micro B a Tipo A

**Trabajo de software ***

- [Descargar paquete de herramientas integradas de Intel (instalado junto con el controlador)](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

- [Descargar Arduino IDE si desarrolla sus proyectos en placa Arduino](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

Regla general: Recomendamos que solo seleccione controladores y herramienta de flash para instalar primero si su velocidad de conexión al servidor de Intel no es lo suficientemente rápida. Descargar otras herramientas por separado será mucho más rápido.

:::note
    4WD Driver Platform V1.0 no es compatible con Windows 10 en este momento.
:::
**Verificar su IDE**

[Descargar un putty para comunicación serial](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

1.Abrir administrador de dispositivos.

2.Encontrar puerto serial USB. Bajo Puertos(COM &amp; LPT), encontrar _Puerto Serial USB(COMx)_(Ejemplo: Puerto Serial USB(COM3))

3.Iniciar putty y configurarlo como muestra la siguiente figura (marcado con rectángulo rojo)

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg)configuraciones de putty

4.Hacer clic en Abrir para entrar al terminal serial

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png)

inicio de sesión de putty

5.Presionar la tecla Enter para ingresar nombre de usuario y contraseña para iniciar sesión en el sistema en Edison.

:::note
    - No existe contraseña si es la primera vez que usa su chip Edison.
    -  Puede flashear la imagen de firmware más reciente a Edison con Intel Flash Tool.
:::
6.Ahora su IDE está bien instalado.

## Demo

---
:::note
    - Esta sección le mostrará una demostración que implementó algunas funciones simples.
    - asegúrese de haber construido un entorno de desarrollo exitoso mediante las secciones anteriores y asumimos que tiene conocimiento básico para la plataforma Arduino.
:::
Puede consultar [Edison 4WD Auto Robotic Platform 2.0](https://wiki.seeedstudio.com/es/Edison_4WD_Auto_Robotic_Platform_2.0/) para una aplicación práctica con 4WD Driver Platform V1.0.

## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Archivos de esquemas](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

- [Archivos de biblioteca Git (SDK)](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

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
