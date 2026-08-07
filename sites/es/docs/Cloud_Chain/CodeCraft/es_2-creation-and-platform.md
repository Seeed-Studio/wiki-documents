---
description: Crea proyectos de hardware sin código con CodeCraft, selecciona el hardware, describe los requisitos y flashea y depura con ejemplos de proyectos.
title: Creación y Plataforma de CodeCraft
keywords:
  - CodeCraft
  - Creation
sidebar_label: 2. Creación y Plataforma
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/es/codecraft/creation-and-platform/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Creación y Plataforma de CodeCraft

## 2.1 Desarrollo práctico: práctica sin código

### 2.1.1 Comprender el espacio de trabajo conversacional

CodeCraft es una plataforma de programación conversacional basada en la web. No necesitas descargar software ni instalar controladores complejos. Simplemente selecciona tu hardware en la página web y describe tus requisitos en lenguaje natural para crear rápidamente proyectos de hardware.

![Ilustración de conexión y flasheo](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

El flujo de trabajo básico es el siguiente:

1. Visita [https://codecraft.seeed.cc](https://codecraft.seeed.cc/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_home)
2. Inicia sesión en tu cuenta
3. Selecciona tu placa de desarrollo
4. Describe la funcionalidad que quieres implementar
5. Espera a que CodeCraft genere el programa
6. Revisa el código, flashea al hardware y depura

![Ilustración de flasheo y depuración](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-EN.png)

---

### 2.1.2 Seleccionar hardware

En el espacio de trabajo, selecciona tu dispositivo. El hardware de nivel inicial recomendado incluye:

- Wio Terminal  
- XIAO ESP32S3 Sense  
- Grove Beginner Kit  

Además de lo anterior, CodeCraft también es compatible con una gama más amplia de dispositivos en el ecosistema de hardware de Seeed Studio. Puedes elegir placas de desarrollo, sensores o módulos de expansión según las necesidades de tu proyecto. Después de seleccionar el hardware, CodeCraft genera código y documentación optimizados y adaptados a las capacidades del dispositivo.

![Ilustración de la página de selección de hardware](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-EN.png)

---

## 2.2 Ejemplos de proyectos

Esta sección proporciona tres ejemplos de proyectos para ayudarte a comprender cómo crear programas para diferentes plataformas de hardware usando CodeCraft. Cada ejemplo incluye objetivos del proyecto, prompts de ejemplo, instrucciones de flasheo y guía de iteración.

---

### 2.2.1 Temporizador Pomodoro

#### 2.2.1.1 Objetivo del proyecto

Este ejemplo te guía para crear un temporizador Pomodoro basado en Wio Terminal. El proyecto muestra una cuenta regresiva en tiempo real en la pantalla y utiliza botones para controlar el inicio, la pausa, el reinicio y el cambio de modo.

![Ilustración del temporizador Pomodoro con Wio Terminal](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-EN.png)

---

#### 2.2.1.2 Prompt de ejemplo

Puedes introducir:

> Please create a Pomodoro timer program for Wio Terminal. Requirements:
> 1. Display a real-time countdown in mm:ss format.
> 2. Set focus time to 25 minutes and break time to 5 minutes.
> 3. Button A starts or pauses the timer.
> 4. Button B resets the timer.
> 5. Button C switches between focus and break modes.
> 6. Show a reminder message when the timer ends.

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 Flashear al hardware

1. Conecta el Wio Terminal a tu ordenador usando un cable USB.  
2. Sigue las instrucciones en pantalla para entrar en modo de flasheo.  
3. Haz clic en el botón “Connect and Flash” en CodeCraft.  
4. Espera a que la carga se complete.

![Ilustración de la página de flasheo de Wio Terminal](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 Iteración

Si quieres modificar el proyecto, puedes seguir diciéndole a CodeCraft:

> Please change the focus time to 45 minutes and the break time to 10 minutes.

CodeCraft actualizará el código y generará una nueva versión según tu solicitud.

---

### 2.2.2 Parpadeo de LED con ESP32

#### 2.2.2.1 Objetivo del proyecto

Este ejemplo te guía para crear un proyecto de parpadeo de LED basado en ESP32. El LED integrado conmuta cada 0,2 segundos para lograr un parpadeo rápido. Al mismo tiempo, el programa envía mensajes de estado del LED mediante salida serie: cuando el LED está ON, envía “LED ON”; cuando está OFF, envía “LED OFF”.

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 Prompt de ejemplo

Puedes introducir:

> Please create an LED blinking program for ESP32. Requirements:
> 1. Use the onboard LED.
> 2. Toggle the LED every 0.2 seconds.
> 3. When LED is ON, send “LED ON” via serial.
> 4. When LED is OFF, send “LED OFF” via serial.
> 5. Set serial baud rate to 115200.
> 6. Run continuously.

<!--![ESP32 Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-EN.png)-->

---

#### 2.2.2.3 Flashear al hardware

1. Conecta la placa de desarrollo ESP32 a tu ordenador mediante USB.  
2. Selecciona el puerto serie ESP32 correcto en CodeCraft.  
3. Haz clic en el botón “Connect and Flash”.  
4. Espera a que la carga se complete.  
5. Abre el monitor serie y verifica que “LED ON” y “LED OFF” aparezcan de forma alternada.

![Ilustración de la página de flasheo de ESP32](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-EN.png)

<!--![ESP32 Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-EN.png)-->

---

#### 2.2.2.4 Iteración

Si quieres modificar el proyecto, puedes seguir diciéndole a CodeCraft:

> Please change the LED blinking interval to 1 second and display the blink count in the serial output.

CodeCraft actualizará el código y generará una nueva versión.

---

### 2.2.3 Grove Beginner Kit LED controlado por botón

#### 2.2.3.1 Objetivo del proyecto

Este ejemplo te guía para crear un proyecto de LED controlado por botón usando Grove Beginner Kit. El botón integrado controla el LED: cuando se pulsa, el LED se enciende; cuando se suelta, se apaga. El programa también imprime el estado del botón en tiempo real mediante salida serie: “Pressed” cuando se pulsa y “Released” cuando se suelta.

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 Prompt de ejemplo

Puedes introducir:

> Please create a “button-controlled LED switch” using Grove Beginner Kit. Requirements:
> 1. Use the onboard button to control the onboard LED.
> 2. Turn on the LED when the button is pressed.
> 3. Turn off the LED when the button is released.
> 4. Print button status via serial in real time.
> 5. Send “Pressed” when the button is pressed.
> 6. Send “Released” when the button is released.

<!--![Grove Beginner Kit Prompt Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-EN.png)-->

---

#### 2.2.3.3 Flashear al hardware

Antes de flashear, comprueba si se requieren controladores:

- En Windows, primero debes instalar el controlador de Grove Beginner Kit, de lo contrario es posible que el dispositivo o el puerto serie no se reconozcan.  
- En macOS, normalmente no se requieren controladores adicionales.

![Consejo 1 sobre el controlador de Windows para Grove Beginner Kit](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-EN.png)

![Consejo 2 sobre el controlador de Windows para Grove Beginner Kit](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-EN.png)

1. Conecta el Grove Beginner Kit a tu ordenador mediante USB.  
2. Selecciona el dispositivo y el puerto serie correctos en CodeCraft.  
3. Haz clic en el botón “Connect and Flash”.  
4. Espera a que la carga se complete.  
5. Pulsa y suelta el botón integrado y observa el comportamiento del LED.  
6. Abre el monitor serie y confirma que aparecen “Pressed” y “Released”.  
   (Nota: Asegúrate de que la velocidad en baudios del código coincida con la de la herramienta de depuración).

![Salida del monitor serie de Grove Beginner Kit](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 Iteración

Si quieres modificar el proyecto, puedes seguir diciéndole a CodeCraft:

> Please make the buzzer sound once when the button is pressed and display the number of button presses in the serial output.

CodeCraft actualizará el código y generará una nueva versión.

---

## 2.3 Preguntas frecuentes

**P: ¿Por qué falla el flasheo?**  
R: Comprueba si el cable USB admite transmisión de datos y asegúrate de que la placa de desarrollo esté en el modo de flasheo correcto.

**P: ¿Qué debo hacer si se producen errores de compilación?**  
R: Revisa la información de depuración del espacio de trabajo y asegúrate de que la velocidad en baudios, el modelo de hardware y la configuración de los sensores sean correctos.

**P: ¿Dónde puedo encontrar más ejemplos de proyectos?**  
R: Visita la Galería de Aplicaciones de SenseCraft AI: [https://sensecraft.seeed.cc/ai/application](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square)
