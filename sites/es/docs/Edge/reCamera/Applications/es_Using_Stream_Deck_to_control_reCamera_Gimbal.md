---
title: Uso de Stream Deck para controlar el gimbal de reCamera
description: Este wiki muestra cómo controlar el gimbal de reCamera usando un Stream Deck.
keywords:
  - reCamera Gimbal
  - Control sensorial
slug: /using_stream_deck_to_control_recamera_gimbal
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif
sidebar_position: 1
last_update:
  date: 2026-05-22T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-05-22'
updatedAt: '2026-05-28'
url: https://wiki.seeedstudio.com/es/using_stream_deck_to_control_recamera_gimbal/
---

## Introducción

Este wiki muestra cómo controlar el gimbal de reCamera usando un Stream Deck. Al enviar comandos mediante el protocolo HTTP desde el Stream Deck, puedes controlar el gimbal de reCamera para que gire a ángulos específicos, encender/apagar la luz de relleno, reproducir audio y realizar otras operaciones.

---

## Demostración

Gira el dial en el Stream Deck para controlar el eje X del gimbal de reCamera para la rotación hacia la izquierda y derecha, y presiona el dial para alternar el LED.

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif" alt="demo" />
</div>

---

## Preparación de hardware

- un gimbal de reCamera
- un Stream Deck

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tr>
      <table align="center">
        <tr>
          <th>reCamera Gimbal</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign:'center'}}>
              <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
              <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
              </a>
            </div>
          </td>
        </tr>
      </table>
    </tr>
  </table>
</div>

## Configuración de reCamera

Introduce la dirección IP del gimbal de reCamera en tu navegador para iniciar sesión en el Dashboard. A continuación, configura los nodos de comunicación HTTP para recibir los comandos enviados desde el Stream Deck.

### 1. Manejo de eventos del dial (Webhook de reCamera)

#### Procesamiento del eje de guiñada (Process Yaw)

- **Tipo de nodo**: `http in` -> `function` -> `set-motor-angle`

- **Resumen de la lógica**:
  - El ángulo predeterminado se establece en `180°`.
  - Incrementa o decrementa el ángulo en **pasos de 10°** al recibir acciones en sentido horario (cw) o antihorario (ccw).
  - Restablece el ángulo a cero cuando se recibe un disparador de reinicio.
  - Restringe el rango de movimiento seguro entre **0° ~ 345°**.

#### Procesamiento del eje de cabeceo (Process Pitch)

- **Tipo de nodo**: `http in` -> `function` -> `set-motor-angle`

- **Resumen de la lógica**:
  - El ángulo predeterminado se establece en `90°`.
  - Incrementa o decrementa el ángulo en **pasos de 10°** al recibir acciones en sentido horario (cw) o antihorario (ccw).
  - Restablece el ángulo a cero cuando se recibe un disparador de reinicio.
  - Restringe el rango de movimiento seguro entre **0° ~ 180°**.

#### Procesamiento del zoom digital (Process Zoom)

- **Tipo de nodo**: `http in` -> `function` -> `ui-template`

- **Resumen de la lógica**:
  - La relación de zoom predeterminada es `1.0`.
  - Ajusta el nivel de zoom en **pasos de 0.1** durante la rotación (incremento para cw / decremento para ccw), y lo restaura a `1.0` cuando se presiona para reiniciar.
  - Limita el rango de zoom entre **0.5x ~ 5.0x**.
  - Pasa el coeficiente de zoom final a la plantilla Vue del front-end para escalar dinámicamente el lienzo SVG en el Dashboard mediante `scale()` de CSS.

#### El diagrama final de nodos de configuración de Node-RED se muestra a continuación:

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-node_red-config.png" alt="node-red" />
</div>

### 2. Manejo básico de eventos de botones

| Función del botón | Enlace de tipo de nodo | Descripción del resumen de la lógica |
| :--- | :--- | :--- |
| **Alternar LED** | `http in` -> `function` -> `exec` | Mantiene una variable interna `ledState` para **alternar entre 0 y 1**. Cuando el estado es 1, escribe en `brightness` mediante la línea de comandos de Linux para encender el LED blanco, y lo apaga cuando el estado es 0. |
| **Grabar audio** | `http in` -> `exec` | Invoca la herramienta de sistema `arecord` para **grabar 5 segundos de audio** a una frecuencia de muestreo de 16000Hz en formato mono, guardándolo localmente en `/home/recamera/test.wav`. |
| **Reproducir audio** | `http in` -> `exec` | Invoca la herramienta de sistema `aplay` para **reproducir directamente** el archivo de audio `test.wav` recién grabado. |

---

## Configuración de Stream Deck

Para garantizar un funcionamiento fluido en el Stream Deck sin abrir una nueva ventana del navegador cada vez que se activa una acción, utilizaremos la acción integrada **"System -> Website"** y habilitaremos la ejecución silenciosa en segundo plano.

> **⚠️ Requisito previo**: Asegúrate de que tu ordenador pueda hacer ping correctamente a la dirección IP del dispositivo: `192.168.31.198` (asegúrate de reemplazarla por la dirección IP real de tu dispositivo).

### 1. Configuración del área del dial (Stream Deck)

En la sección de diales del software de Stream Deck, arrastra **3 acciones independientes "System -> Website"** para cada dial y configúralas de la siguiente manera:

#### Dial 1: Control del eje de guiñada (Yaw)

- **Rotación en sentido horario (operación de dial):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=cw`
  - **Configuración:** Marca `GET request in background`

- **Rotación en sentido antihorario (operación de dial):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=ccw`
  - **Configuración:** Marca `GET request in background`
- **Pulsación (operación de pulsación):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=reset`
  - **Configuración:** Marca `GET request in background`

#### Dial 2: Control del eje de cabeceo (Pitch)

- **Rotación en sentido horario:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=cw`
  - **Configuración:** Marca `GET request in background`

- **Rotación en sentido antihorario:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=ccw`
  - **Configuración:** Marca `GET request in background`
- **Pulsación:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=reset`
  - **Configuración:** Marca `GET request in background`

#### Dial 3: Zoom digital (Zoom)
>
> **Nota**: El mecanismo de zoom controla la relación de la caja de visualización SVG en el Dashboard usando CSS.

- **Rotación en sentido horario:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=cw`
  - **Configuración:** Marca `GET request in background`
- **Rotación en sentido antihorario:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=ccw`
  - **Configuración:** Marca `GET request in background`
- **Pulsación (restaurar a valores predeterminados):**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=reset`
  - **Configuración:** Marca `GET request in background`

### 2. Configuración del área de botones (LED, grabar, reproducir)

En la sección básica de botones del Stream Deck, arrastra **3 acciones "System -> Website"** y configúralas de la siguiente manera:

| Función del botón | URL de solicitud | Configuraciones requeridas |
| :--- | :--- | :--- |
| **Alternar LED** | `http://192.168.31.198:1880/deck/led` | Marca `GET request in background` |
| **Grabar audio** *(pulsa para grabar durante 5s)* | `http://192.168.31.198:1880/deck/record` | Marca `GET request in background` |
| **Reproducir audio** | `http://192.168.31.198:1880/deck/play` | Marca `GET request in background` |

---

## Despliegue del flujo de Node-RED en reCamera

Primero, sigue esta guía para actualizar tu reCamera a la última versión 0.2.4: [Tutorial de actualización de reCamera OS](https://wiki.seeedstudio.com/cn/recamera_os_version_control/). Si tu dispositivo ya está ejecutando la versión 0.2.4, puedes omitir este paso. Luego, haz clic en el botón **"Deploy"** en la esquina superior derecha para desplegar nuestros nodos recién creados en la placa.

---

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Si necesitas orientación sobre objetivos de personalización específicos o deseas ampliar aún más tu flujo de trabajo, no dudes en ponerte en contacto con nosotros. Ofrecemos múltiples opciones de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Proporcionamos una variedad de canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
