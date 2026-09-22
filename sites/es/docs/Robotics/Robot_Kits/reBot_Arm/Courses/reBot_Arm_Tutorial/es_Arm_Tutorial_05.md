---
description: "Capítulo 5 del Curso para Principiantes en Inteligencia Incorporada de Seeed: conceptos básicos del bus CAN, tramas de datos estándar vs extendidas, la capa de enlace de datos CAN y SocketCAN."
title: Capítulo 5 - Bus CAN y Comunicación con el Motor
keywords:
  - reBot
  - CAN Bus
  - CAN Protocol
  - SocketCAN
  - DM Motor
  - RS Motor
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_5
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_embodied_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 5 · Teoría</span>
    <h2>5. Bus CAN y Comunicación con el Motor</h2>
    <p>
      Capítulo 5 del Curso para Principiantes en Inteligencia Incorporada de Seeed: conceptos básicos del bus CAN, tramas de datos estándar frente a
      extendidas, la capa de enlace de datos CAN y SocketCAN.
    </p>
    <div className="hero-actions">
      <a href="#principles">Principios de CAN</a>
      <a href="#protocol">Protocolo CAN</a>
      <a href="#socketcan">SocketCAN</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>5.1 Principios Básicos de CAN</span>
    <span>5.2 Protocolo CAN</span>
    <span>5.3 SocketCAN</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>Después de completar esta sección, deberías ser capaz de comprender las siguientes preguntas:</p>

- Cómo se envía un dato en el bus CAN;
- De qué partes se compone una trama de datos CAN;
- Qué representan respectivamente CAN ID, DLC y Data;
- Cuál es la diferencia entre tramas estándar y tramas extendidas;
- Cuáles son las funciones de campos como CRC y ACK.

Para el desarrollo práctico, no es necesario memorizar desde el principio cada bit de una trama CAN.

:::tip
Lo más importante en la etapa inicial es entender primero: **ID, DLC, Data**.
:::

</section>

## 5.1 Principios Básicos de CAN

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Principios</span>
    <h2>5.1 Principios Básicos de CAN</h2>
  </div>

CAN es la abreviatura de Controller Area Network y es un protocolo de comunicación serie estandarizado internacionalmente por ISO. La estructura de red del bus CAN tiene dos formas: lazo cerrado y lazo abierto.

Generalmente, la estructura de red del bus CAN utilizada por brazos robóticos o robots emplea un bus CAN de lazo cerrado, es decir, se conecta una resistencia de 120 ohmios en cada extremo del bus y las dos líneas de señal forman un bucle. Este bus CAN está definido por la norma ISO 11898 y es una red CAN de alta velocidad y corta distancia con una velocidad de comunicación de 125 kbit/s a 1 Mbit/s. A una velocidad de comunicación de 1 Mbit/s, la longitud máxima del bus es de 40 m.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-01.png" alt="Red de bus CAN" />
</div>

El bus consta de dos líneas de señal, CAN_L y CAN_H. CAN transmite señales diferenciales, representando el nivel del bus mediante la diferencia de voltaje entre las dos líneas de señal, es decir, CAN_H - CAN_L. Al nivel correspondiente al 1 lógico se le llama nivel recesivo, y al correspondiente al 0 lógico se le llama nivel dominante. En ISO 11898, el nivel recesivo está cerca de una diferencia de voltaje de 0, y el nivel dominante está principalmente cerca de una diferencia de voltaje de 2 V.

</section>

## 5.2 Protocolo CAN

<section id="protocol" className="section-card">
  <div className="section-title">
    <span>Protocolo</span>
    <h2>5.2 Protocolo CAN</h2>
  </div>

| Tipo de trama | Propósito de la trama |
| :--- | :--- |
| Trama de datos | Envía datos |
| Trama remota | Solicita datos |
| Trama de error | Informa errores del bus |
| Trama de sobrecarga | Solicita retraso |
| Espacio entre tramas | Separa tramas consecutivas |

:::note
Dado que los motores DM utilizan tramas de datos estándar CAN 2.0 y los motores RS utilizan el formato de trama de datos extendida CAN 2.0, a continuación solo se presentan estos dos formatos de trama de datos. Se recomienda leer la siguiente introducción junto con la sección de protocolo en la hoja de datos del motor.
:::

### 5.2.1 Trama de Datos Estándar reBot DM (11 bytes en total)

| **Byte** | **Campo**         | **Asignación de bits**                                   |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | Información de trama | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | ID de trama 1      | Bits 7–0: ID10–ID3                                       |
| Byte 3   | ID de trama 2      | Bits 7–5: ID2–ID0, Bits 4–0: X                           |
| Byte 4   | Datos 1            | DATA1                                                    |
| Byte 5   | Datos 2            | DATA2                                                    |
| Byte 6   | Datos 3            | DATA3                                                    |
| Byte 7   | Datos 4            | DATA4                                                    |
| Byte 8   | Datos 5            | DATA5                                                    |
| Byte 9   | Datos 6            | DATA6                                                    |
| Byte 10  | Datos 7            | DATA7                                                    |
| Byte 11  | Datos 8            | DATA8                                                    |


**Parte de descripción de la trama (primeros 3 bytes):**

- **El Byte 1 es la información de la trama.** El bit 7 (FF) indica el formato de la trama. En una trama estándar, FF es 0. El bit 6 (RTR) indica el tipo de trama. RTR=0 indica una trama de datos y RTR=1 indica una trama remota. DLC indica la longitud real de los datos cuando se trata de una trama de datos.
- **Los Bytes 2 a 5 son el ID de la trama.** El ID de una trama de datos estándar tiene 11 bits. Enviados secuencialmente de ID10 a ID0, puede haber 2<sup>11</sup> tipos de mensajes. El rango de ID de trama es: 000-7FF.

:::warning
Está prohibido que los 7 bits superiores sean todos recesivos (configuración prohibida: ID=1111111XXXX).
:::

**Parte de datos de la trama (últimos 8 bytes):**

- **Los Bytes 4~11 son los datos reales de la trama de datos.**

### 5.2.2 Trama de Datos Extendida reBot RS (13 bytes)

| **Byte** | **Campo**         | **Asignación de bits**                                   |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | Información de trama | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | ID de trama 1      | Bits 7–0: ID28–ID21                                      |
| Byte 3   | ID de trama 2      | Bits 7–0: ID20–ID13                                      |
| Byte 4   | ID de trama 3      | Bits 7–0: ID12–ID5                                       |
| Byte 5   | ID de trama 4      | Bits 7–3: ID4–ID0, Bits 2–0: X                           |
| Byte 6   | Datos 1            | DATA1                                                    |
| Byte 7   | Datos 2            | DATA2                                                    |
| Byte 8   | Datos 3            | DATA3                                                    |
| Byte 9   | Datos 4            | DATA4                                                    |
| Byte 10  | Datos 5            | DATA5                                                    |
| Byte 11  | Datos 6            | DATA6                                                    |
| Byte 12  | Datos 7            | DATA7                                                    |
| Byte 13  | Datos 8            | DATA8                                                    |

**Parte de descripción de la trama (primeros 5 bytes):**

- **El Byte 1 es la información de la trama.** El bit 7 (FF) indica el formato de la trama. En una trama extendida, FF es 1. El bit 6 (RTR) indica el tipo de trama. RTR=0 indica una trama de datos y RTR=1 indica una trama remota. DLC indica la longitud real de los datos cuando se trata de una trama de datos.
- **Los Bytes 2 a 5 son el ID de la trama.** El ID en formato extendido tiene 29 bits. El ID básico va de ID28 a ID18, y el ID extendido está representado por ID17 a ID0. El ID básico es el mismo que el ID en formato estándar. Puede haber 2<sup>29</sup> tipos de mensajes y hay huecos en el enlace de datos (transparentes para el operador). El rango de ID de trama es 0000 0000-1FFF FFFF.

:::warning
Está prohibido que los 7 bits superiores sean todos recesivos (configuración prohibida: ID básico=1111111XXXX).
:::

**Parte de datos de la trama (últimos 8 bytes):**

- **Los Bytes 6~13 son los datos reales de la trama de datos.**

### 5.2.3 Capa de Enlace de Datos CAN

El bus CAN puede entenderse como un "chat grupal". Muchos dispositivos están conectados al bus, por ejemplo:

- Controlador principal;
- Motores;
- Sensores;
- Sistema de gestión de baterías;
- Otros módulos de control.

Todos los dispositivos comparten el mismo bus CAN. Cuando un dispositivo quiere enviar datos, no puede simplemente enviarlos arbitrariamente; en su lugar, debe empaquetar los datos en una **trama de datos CAN** completa de acuerdo con el formato especificado por el protocolo CAN.

Una trama CAN puede entenderse de forma sencilla como:

**Inicio de envío → Número de mensaje → Longitud de datos → Datos reales → Comprobación de datos → Confirmación de recepción → Fin de envío**

La estructura de trama CAN correspondiente puede simplificarse como:

**SOF → ID → Campo de control → DLC → Datos → CRC → ACK → EOF**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-02.png" alt="Estructura de la trama CAN" />
</div>

Consulta la siguiente tabla para una explicación detallada:

| Nombre | Función |
| :--- | :--- |
| Segmento inactivo (bus inactivo) | El bus está en nivel recesivo 1 y ningún nodo opera el bus. Cuando ningún dispositivo está enviando datos, el bus CAN está en estado inactivo. Actualmente ningún dispositivo está hablando y todos están esperando. |
| Inicio de trama (SOF) | SOF está fijado como un bit dominante `0`. Dado que el bus CAN está en `1` cuando está inactivo, cuando `0` aparece repentinamente en el bus, los demás dispositivos saben que: un dispositivo ha comenzado a enviar datos. Por lo tanto, SOF puede entenderse como: **"Estoy empezando a enviar."** |
| Segmento de arbitraje (ID de trama, RTR o SRR) | **ID**: puede entenderse como el número de este mensaje. Por ejemplo, en el control de motores, se puede usar `0x01`: comando de control del motor 1; `0x02`: comando de control del motor 2, etc. **El ID representa con mayor precisión "la identidad o el tipo del mensaje". Cuanto menor es el valor de ID, mayor es la prioridad.** <br/>**RTR**: se utiliza principalmente para distinguir: trama de datos ordinaria RTR=0 y trama de solicitud remota RTR=1. Al enviar datos CAN ordinarios a diario, RTR suele ser 0. <br/>**SRR**: un bit de arbitraje dedicado a tramas extendidas, fijado en 1. Se utiliza principalmente para garantizar que, bajo el mismo ID básico, las tramas estándar tengan prioridad sobre las tramas extendidas. |
| Segmento de control (IDE, bits reservados, DLC) | El bit IDE se utiliza para distinguir tramas estándar de tramas extendidas. **IDE = 1** trama extendida, ID de 29 bits. **IDE = 0** trama estándar, ID de 11 bits. La trama extendida tiene un rango de ID mayor y puede proporcionar más números de mensaje. <br/>**DLC**: indica al receptor cuántos datos hay. Por ejemplo: DLC = 1, indica 1 Byte de datos (8 bits); DLC = 4, indica 4 Bytes de datos (32 bits); DLC = 8, indica 8 Bytes de datos (64 bits). |
| Campo de datos | Este es el contenido de datos real, con una longitud correspondiente a DLC. Por ejemplo, el controlador principal necesita enviar al motor: posición objetivo; velocidad objetivo; par objetivo. **Consulta el protocolo de comunicación CAN proporcionado por el fabricante del dispositivo para confirmar qué representa cada byte.** |
| Segmento CRC | El "código de comprobación" de los datos CAN. Realiza el cálculo CRC sobre todos los bits de datos, incluido el inicio de trama, el segmento de arbitraje, el segmento de control y el segmento de datos. **Comprueba si se producen errores durante la transmisión de datos CAN.** El delimitador CRC debe estar en nivel recesivo. |
| Segmento ACK | ACK: le dice al emisor "Lo he recibido". Después de que el emisor termina de enviar, libera el bus al nivel recesivo 1. Si el receptor recibe correctamente, debe responder con nivel dominante 0 en este bit. En este momento, el emisor lee la ranura ACK como 0, lo que indica que se recibió ACK. El delimitador ACK es cuando el receptor libera el nivel, que es recesivo. |
| Fin de trama (EOF, **End Of Frame**) | Finaliza la transmisión de datos CAN actual. 7 unos recesivos. |

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-03.png" alt="Capa de enlace de datos CAN" />
</div>

</section>

## 5.3 SocketCAN

<section id="socketcan" className="section-card">
  <div className="section-title">
    <span>Herramientas</span>
    <h2>5.3 SocketCAN</h2>
  </div>

SocketCAN es una implementación principal del protocolo CAN en sistemas Linux. SocketCAN utiliza la API de sockets y la tecnología de la pila de red de Linux para implementar controladores de dispositivos CAN como interfaces de red, lo que lo hace fácil de usar y altamente compatible.

Documentación de referencia para un uso detallado: <a href="https://docs.linuxkernel.org.cn/networking/can.html" target="_blank" rel="noopener noreferrer">https://docs.linuxkernel.org.cn/networking/can.html</a>

</section>

</div>
