---
description: Crea proyectos de hardware sin código con CodeCraft, selecciona el hardware, describe los requisitos y flashea y depura con ejemplos de proyectos.
title: Creación y Plataforma de CodeCraft
keywords:
  - CodeCraft
  - Creación
sidebar_label: 2. Creación y Plataforma
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/es/codecraft/creation-and-platform/
createdAt: '2026-06-30'
updatedAt: '2026-06-30'
---

# Creación y Plataforma de CodeCraft

## 2.1 Desarrollo práctico: práctica sin código

### 2.1.1 Comprender el espacio de trabajo conversacional

CodeCraft es una plataforma de programación conversacional basada en la web. No necesitas descargar software ni instalar controladores complejos. Simplemente selecciona tu hardware en la página web y describe tus requisitos en lenguaje natural para crear rápidamente proyectos de hardware.

![Ilustración de conexión y flasheo](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

El flujo de trabajo básico es el siguiente:

1. Visita https://codecraft.seeed.cc
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

Además de lo anterior, CodeCraft también es compatible con una gama más amplia de dispositivos en el ecosistema de hardware de Seeed Studio. Puedes elegir placas de desarrollo, sensores o módulos de expansión según las necesidades de tu proyecto. Después de seleccionar el hardware, CodeCraft genera código y documentación optimizados adaptados a las capacidades del dispositivo.

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

> Crea un programa de temporizador Pomodoro para Wio Terminal. Requisitos:
> 1. Mostrar una cuenta regresiva en tiempo real en formato mm:ss.
> 2. Establecer el tiempo de enfoque en 25 minutos y el tiempo de descanso en 5 minutos.
> 3. El botón A inicia o pausa el temporizador.
> 4. El botón B reinicia el temporizador.
> 5. El botón C cambia entre los modos de enfoque y descanso.
> 6. Mostrar un mensaje de recordatorio cuando el temporizador termine.

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 Flashear al hardware

1. Conecta el Wio Terminal a tu ordenador usando un cable USB.  
2. Sigue las instrucciones en pantalla para entrar en el modo de flasheo.  
3. Haz clic en el botón “Connect and Flash” en CodeCraft.  
4. Espera a que la carga se complete.

![Ilustración de la página de flasheo de Wio Terminal](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 Iteración

Si quieres modificar el proyecto, puedes seguir diciéndole a CodeCraft:

> Cambia el tiempo de enfoque a 45 minutos y el tiempo de descanso a 10 minutos.

CodeCraft actualizará el código y generará una nueva versión según tu solicitud.

---

### 2.2.2 Parpadeo de LED con ESP32

#### 2.2.2.1 Objetivo del proyecto

Este ejemplo te guía para crear un proyecto de parpadeo de LED basado en ESP32. El LED integrado conmuta cada 0,2 segundos para lograr un parpadeo rápido. Al mismo tiempo, el programa envía mensajes de estado del LED mediante salida serie: cuando el LED está ON, envía “LED ON”; cuando está OFF, envía “LED OFF”.

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 Prompt de ejemplo

Puedes introducir:

> Crea un programa de parpadeo de LED para ESP32. Requisitos:
> 1. Usar el LED integrado.
> 2. Conmutar el LED cada 0,2 segundos.
> 3. Cuando el LED esté ON, enviar “LED ON” por serie.
> 4. Cuando el LED esté OFF, enviar “LED OFF” por serie.
> 5. Establecer la velocidad en baudios de la serie en 115200.
> 6. Ejecutarse de forma continua.

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

> Cambia el intervalo de parpadeo del LED a 1 segundo y muestra el conteo de parpadeos en la salida serie.

CodeCraft actualizará el código y generará una nueva versión.

---

### 2.2.3 Grove Beginner Kit LED controlado por botón

#### 2.2.3.1 Objetivo del proyecto

Este ejemplo te guía para crear un proyecto de LED controlado por botón usando Grove Beginner Kit. El botón integrado controla el LED: cuando se pulsa, el LED se enciende; cuando se suelta, se apaga. El programa también imprime el estado del botón en tiempo real mediante salida serie: “Pressed” cuando se pulsa y “Released” cuando se suelta.

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 Prompt de ejemplo

Puedes introducir:

> Crea un “interruptor de LED controlado por botón” usando Grove Beginner Kit. Requisitos:
> 1. Usar el botón integrado para controlar el LED integrado.
> 2. Encender el LED cuando se pulse el botón.
> 3. Apagar el LED cuando se suelte el botón.
> 4. Imprimir el estado del botón por serie en tiempo real.
> 5. Enviar “Pressed” cuando se pulse el botón.
> 6. Enviar “Released” cuando se suelte el botón.

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
6. Abre el monitor serie y confirma que aparezcan “Pressed” y “Released”.  
   (Nota: Asegúrate de que la velocidad en baudios del código coincida con la de la herramienta de depuración).

![Salida del monitor serie de Grove Beginner Kit](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 Iteración

Si quieres modificar el proyecto, puedes seguir diciéndole a CodeCraft:

> Haz que el zumbador suene una vez cuando se pulse el botón y muestra el número de pulsaciones del botón en la salida serie.

CodeCraft actualizará el código y generará una nueva versión.

---

## 2.3 Preguntas frecuentes

**P: ¿Por qué falla el flasheo?**  
R: Comprueba si el cable USB admite transmisión de datos y asegúrate de que la placa de desarrollo esté en el modo de flasheo correcto.

**P: ¿Qué debo hacer si se producen errores de compilación?**  
R: Revisa la información de depuración del espacio de trabajo y asegúrate de que la velocidad en baudios, el modelo de hardware y la configuración del sensor sean correctos.

**P: ¿Dónde puedo encontrar más ejemplos de proyectos?**  
R: Visita la SenseCraft AI Application Gallery: https://sensecraft.seeed.cc/ai/application
