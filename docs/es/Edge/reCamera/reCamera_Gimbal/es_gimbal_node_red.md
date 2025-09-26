---
description: Introduciendo nodos y flujo de Node-RED creados para reCamera Gimbal. Si estás desarrollando Gimbal con Node-RED, esta documentación te guiará para entender cómo puedes usar nodos para controlar tu Gimbal.
title: Nodos y Flujo de Node-RED para Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /es/recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 04/09/2025
  author: Dawn Yao
---

# Introducción a Node-RED para Gimbal

Esta wiki proporciona orientación paso a paso sobre cómo usar nodos de Node-RED para operar y controlar los motores en el gimbal. El flujo predeterminado en el Dispositivo es un ejemplo más completo de cómo puedes usar nodos de UI con nodos de gimbal, pero vamos a desglosar los nodos uno por uno para explicar cómo puedes usarlo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

Si eres nuevo en Node-RED, o si estás interesado en aprender cómo integrar Vision AI con control de gimbal, por favor consulta [esta página](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/).

Por favor también ten en cuenta el rango de ejes para Gimbal como se muestra en la imagen a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## Nodos

### Establecer ángulo del motor

Este nodo te permite establecer el gimbal a un ángulo específico pasando valores objetivo para los motores. Cuando se proporciona un ángulo, el gimbal se moverá en consecuencia para realizar el posicionamiento deseado.

Ejemplo: Usar un nodo inject para mover el motor yaw a 50°

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### Configuración

- Nombre: Nomenclatura personalizada para el nodo.
- Entrada: Analizar libremente el valor del ángulo por variable msg, flow, o global.
- Unidad: Formato del valor de entrada:
  - Entrada en decimal: Los valores de entrada están en grados decimales (ej., 180.23°)
  - Entrada en entero: Los valores de entrada están en formato entero representando centésimas de grado (ej., 18023 = 180.23°)
- Selección de Motor: Elegir qué motor controlar y el modo de control:
  - Eje Yaw (Izquierda y Derecha): Movimiento horizontal

  - Eje Pitch (Arriba y Abajo): Movimiento vertical

  - Posición Absoluta: Establecer el motor a un ángulo específico
  - Desplazamiento Relativo: Mover el motor por una cantidad relativa
- Establecer eje dual al mismo tiempo: Controlar ambos motores con un solo comando
  - Posición Absoluta: Establecer ambos motores a ángulos específicos
  - Desplazamiento Relativo: Mover ambos motores por cantidades relativas

#### Entrada

Para control de un solo eje, la entrada es un número que representa el valor del ángulo.

Para control de eje dual, la entrada debe ser un objeto JSON con esta estructura:

```json
{
    "yaw_angle": value,           // Horizontal angle in degrees
    "yaw_speed": speed_value,     // Optional: 0-720
    "pitch_angle": value,         // Vertical angle in degrees
    "pitch_speed": speed_value    // Optional: 0-720
}
```

#### Salida

Este nodo no produce ningún mensaje de salida. Solo establece el ángulo del motor y actualiza su visualización de estado para reflejar el resultado de la operación.

#### Visualización de Estado

El nodo muestra la operación actual en su estado:

- **Procesando**: Punto azul con texto `Processing` cuando se está enviando el comando
- **Éxito**: Punto verde con detalles sobre la operación cuando se completa exitosamente:
  - Ejemplo para un solo eje: `Set Yaw: 90°` o `Offset Pitch: 10°`
  - Ejemplo para doble eje: `Set Yaw: 90°, Pitch: 45°` o `Offset Yaw: 5°, Pitch: 10°`
- **Error**: Anillo rojo con mensaje de error si falla la configuración
- **Ocupado**: Anillo amarillo con texto `Busy` si el nodo ya está procesando un comando

### Establecer velocidad del motor

El nodo establece el valor de velocidad para el motor yaw (horizontal) o pitch (vertical). Esta configuración de velocidad se almacena en el contexto global y es utilizada por otros nodos de control de motor al enviar comandos de movimiento usando SocketCAN.

Ejemplo: usar un nodo deslizador para tener un control deslizante de UI para ajustar la velocidad del motor Yaw.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

El tablero se crea con el siguiente flujo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

En este ejemplo, queremos asegurarnos de establecer el rango a 1-720, que es el rango de velocidad del motor. También hay que asegurarse de qué mensaje estás analizando al siguiente nodo. Aquí elegimos `msg.topic`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

Dado que en el nodo deslizador elegimos `msg.topic`, tenemos que asegurarnos de que estamos recibiendo desde `msg.topic` para responder con el deslizador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### Configuración

Puedes especificar de dónde obtener el valor de entrada:

- msg: Una propiedad del mensaje entrante (ej., payload)
- flow: Una variable de contexto de flujo
- global: Una variable de contexto global

Selección de Motor:

- Eje Yaw (Izquierda y Derecha): Establece la velocidad para el motor de movimiento horizontal
- Eje Pitch (Arriba y Abajo): Establece la velocidad para el motor de movimiento vertical

#### Entrada

La entrada debe ser un valor numérico que represente la velocidad deseada del motor. El valor de velocidad predeterminado es `90` si no se ha establecido una velocidad personalizada. El valor puede proporcionarse en los siguientes formatos:

- Número: 90
- Cadena que contiene un número: "45"

**Unidades de Velocidad**: El valor de velocidad se mide en `dps/LSB` (grados por segundo / Bit Menos Significativo), que es la resolución del control de velocidad del motor. El rango válido es de 0 a 65535, con valores típicos entre 50 y 720 para gimbal.

**Valores de referencia de velocidad**:

- Movimiento lento: 1-120
- Movimiento medio: 120-360
- Movimiento rápido: 360-720

#### Salida

Este nodo no produce ningún mensaje de salida. Solo actualiza las siguientes variables de contexto global:

- Motor Yaw: can$$currentYawSpeed
- Motor Pitch: can$$currentPitchSpeed

El valor de velocidad se almacena en formato hexadecimal (ej., `5A.00` para velocidad 90) en el contexto global.

Los nodos de control de motor recuperan estos valores al enviar comandos a través del bus CAN.

#### Visualización de Estado

El nodo muestra la configuración de velocidad actual en su estado:

- Punto verde con `Yaw Speed: X` o `Pitch Speed: X` cuando se establece exitosamente
- Anillo rojo con mensaje de error si falla la configuración. El nodo reportará errores en los siguientes casos:

  - Valor de entrada inválido (no es un número)
  - Valor de entrada vacío

### Obtener ángulo del motor

El nodo recupera la posición actual del motor yaw (horizontal) o pitch (vertical) y devuelve el ángulo. Esto es útil para monitorear la orientación actual de la cámara o para implementar lógica basada en posición en tus flujos.

Ejemplo: Usar un botón para obtener la posición del ángulo actual del motor yaw

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

El tablero se crea con el siguiente flujo:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

El `nodo UI de botón` activará el `nodo obtener ángulo del motor`, luego analizará el resultado para el `nodo UI de texto`.
También puedes importar el siguiente json en un flujo vacío para obtener este ejemplo:

```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### Configuración

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

Selección de Motor:

- **Eje Yaw (Izquierda y Derecha)**: Obtiene el ángulo del motor de movimiento horizontal
- **Eje Pitch (Arriba y Abajo)**: Obtiene el ángulo del motor de movimiento vertical

Unidad:

- **Salida en decimal**: Emite el valor del ángulo en grados decimales (ej., 180.23°)
- **Salida en entero**: Emite el valor del ángulo en formato entero representando centésimas de grado (ej., 18023 = 180.23°)

#### Entrada

Cualquier mensaje de entrada activará el nodo para leer el ángulo actual del motor. El contenido del mensaje de entrada no se utiliza.

#### Salida

El nodo emite el valor del ángulo actual en la propiedad `msg.payload`:

```json
// With "Output in decimal" selected
{
    "payload": 90.5
}

// With "Output in integer" selected
{
    "payload": 9050
}
```

Unidades:

- **Valor Entero Crudo**: Unidades del motor (centésimas de grado, 0-36000 para yaw, 0-18000 para pitch)
- **Valor decimal Convertido**: Grados (0° a 360° para yaw, 0° a 180° para pitch)

#### Visualización de Estado

El nodo muestra el ángulo actual en su estado:

- Punto azul con `Reading` mientras consulta el motor
- Punto verde con `Yaw: X°` o `Pitch: X°` cuando se recupera exitosamente
- Anillo amarillo con `Busy` si otra consulta ya está en progreso
- Anillo rojo con mensaje de error si la recuperación falla
  - Error de comunicación con el motor
  - Respuesta inválida del motor
  - Solicitudes concurrentes (mostrará estado `Busy`)

### Obtener velocidad del motor

El nodo lee el valor de velocidad actual almacenado en el contexto global para el motor yaw (horizontal) o pitch (vertical). Este valor de velocidad es usado por otros nodos de control del motor cuando envían comandos de movimiento usando SocketCAN.

Ejemplo: Usar un `nodo de inyección` para obtener la velocidad del motor y analizarla en la ventana de depuración

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

Al hacer clic en el nodo de inyección, verás la velocidad actual del motor yaw en la ventana de depuración.

#### Configuración

- Eje Yaw (Izquierda y Derecha): Recupera la configuración de velocidad para el motor de movimiento horizontal
- Eje Pitch (Arriba y Abajo): Recupera la configuración de velocidad para el motor de movimiento vertical
- El valor de velocidad se mide en `dps/LSB` (grados por segundo / Bit Menos Significativo), que es la resolución del control de velocidad del motor. El rango válido es de 0 a 65535, con valores típicos entre 50 y 720 para el gimbal.

#### Entrada

Cualquier mensaje de entrada activará el nodo para leer la velocidad actual del motor desde el contexto global. El contenido del mensaje de entrada no se utiliza.

#### Salida

El nodo envía el valor de velocidad actual en la propiedad msg.payload:

```json
{
  "payload": 90
}
```

#### Visualización de Estado

El nodo muestra el valor de velocidad actual en su estado:

- Punto verde con `Speed: X` cuando se recupera exitosamente
- Anillo rojo con mensaje de error si falla la recuperación

### Angle to CAN

El nodo toma un valor de ángulo numérico como entrada y genera un objeto de mensaje CAN que puede enviarse directamente a una interfaz de bus CAN o a un nodo CAN Write.

Ejemplo: Use `inject nodes` para permitir que el eje yaw rote 30 grados en sentido horario o antihorario. El nodo `angle to CAN` convertirá el número en comando CAN, y use `CAN Write` para operar el comando.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

Puede configurar la carga útil del mensaje en el nodo inject como se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

y configure el nodo angle to CAN para desplazamiento relativo:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

Para `CAN write`, simplemente agregue el cliente predeterminado y seleccione el cliente.

#### Configuración

- Selección de Motor: Elija qué motor controlar y el modo de control:
  - Eje Yaw (Izquierda y Derecha): Movimiento horizontal

  - Eje Pitch (Arriba y Abajo): Movimiento vertical

  - Posición Absoluta: Establece el motor a un ángulo específico
  - Desplazamiento Relativo: Mueve el motor por una cantidad relativa
- Unidad: Formato del valor de entrada:
  - Entrada en decimal: Los valores de entrada están en grados decimales (ej., 180.23°)
  - Entrada en entero: Los valores de entrada están en formato entero representando centésimas de grado (ej., 18023 = 180.23°)

#### Entrada

Especifique la fuente del valor del ángulo:

- msg.xxx: Use el valor en el msg
- flow.xxx: Use un valor del contexto de flujo
- global.xxx: Use un valor del contexto global

La entrada debe ser un valor numérico que represente el ángulo objetivo (para posicionamiento absoluto) o desplazamiento angular (para movimiento angular relativo).

Ejemplos:

    90.5 - Mover a 90.5 grados (cuando se usan grados decimales)
    9050 - Mover a 90.5 grados (cuando se usan unidades de motor)
    -10 - Mover 10 grados en sentido antihorario (cuando se usa desplazamiento relativo)
    10 - Mover 10 grados en sentido horario (cuando se usa desplazamiento relativo)

#### Salida

El nodo produce un objeto de mensaje CAN que puede enviarse directamente a un bus CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // Command data as byte array
  }
}
```

Nota: el 321 es el formato hexadecimal del motor de guiñada (ID 141), 322 es el formato hexadecimal del motor de cabeceo (ID 142).

##### Formato de Comando

El mensaje CAN de salida sigue este formato, para más detalles, por favor visita [manual del motor más reciente](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf):

##### Comando de Posición Absoluta

- **Byte 0**: Tipo de comando (0xA4)
- **Byte 1**: Dirección (0x00)
- **Byte 2-3**: Velocidad (2 bytes, little-endian)
- **Byte 4-7**: Ángulo (4 bytes, little-endian)

##### Comando de Desplazamiento Relativo

- **Byte 0**: Tipo de comando (0xA8)
- **Byte 1**: Dirección (0x00)
- **Byte 2-3**: Velocidad (2 bytes, little-endian)
- **Byte 4-7**: Desplazamiento (4 bytes, little-endian)

##### Límites de Ángulo

- **Guiñada**: -180° a +180°
- **Cabeceo**: -90° a +90°

Los valores fuera de estos rangos serán automáticamente limitados al rango permitido.

#### Visualización de Estado

El nodo muestra el ángulo actual en su estado:

- Punto verde con `ID de comando` + `ID de motor` + `grados de movimiento`

### Can Write

El nodo CAN Write te permite enviar tramas de comando a dispositivos del bus CAN y recibir sus tramas de respuesta. Es particularmente útil para consultar el estado del dispositivo, enviar comandos de control y monitorear respuestas de dispositivos del bus CAN.

El ejemplo de uso se muestra arriba con el nodo `angle to CAN`.

#### Configuración

- Nombre: Nombre opcional para el nodo
- Cliente: Selecciona la configuración del bus CAN a usar (debe estar configurada en un nodo CAN-config)

#### Entrada

La entrada soporta dos formatos:

##### Formato 1: Formato de Cadena (Recomendado)

Una cadena en el formato: `ID#DATA` donde ID es el identificador CAN en hexadecimal y DATA son bytes hexadecimales separados por puntos.

Ejemplo: `141#c1.0a.64.00.00.00.00.00`

##### Formato 2: Formato de Objeto

Un objeto con la siguiente estructura:

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

Donde:

- **id**: El identificador CAN como una cadena (en hexadecimal sin prefijo 0x)
- **data**: Array de bytes de datos en hexadecimal (sin prefijo 0x)

#### Salida

El nodo produce un objeto con la siguiente estructura: (Para detalles de cada comando CAN, por favor visita [manual del motor más reciente](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf))

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

Donde:

- **payload**: Cadena en el formato `ID#DATA`
- **details**: Objeto que contiene información detallada:
  - **ID**: El identificador CAN (igual que la solicitud)
  - **data**: Array de bytes de respuesta en hexadecimal
  - **raw**: Cadena separada por puntos de los bytes de respuesta
- **timestamp**: Hora cuando se recibió la respuesta
- **topic**: Establecido como "can-response"

#### Ejemplo

Solicitud (Cadena de entrada):

```
141#90.00.00.00.00.00.00.00
```

Respuesta (Salida):

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

##### Manejo de Respuestas

El nodo espera una respuesta del dispositivo CAN y filtra automáticamente las tramas de respuesta para asegurar que recibas la respuesta relevante a tu comando específico.

##### Tiempo de Espera

Si no se recibe respuesta dentro del período de tiempo de espera configurado, el nodo generará un mensaje de error.

##### Manejo de Errores

El nodo reportará errores en los siguientes casos:

- Formato de entrada inválido
- Error de comunicación del bus CAN
- Tiempo de espera de respuesta agotado

### CAN to Angle

El nodo toma un objeto de mensaje CAN como entrada y extrae el ID del motor, tipo de comando y valor de ángulo/desplazamiento. Soporta comandos de posición absoluta (A4), comandos de desplazamiento relativo (A8) y comandos de consulta de estado (94).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### Configuración

El campo de Entrada te permite especificar la propiedad del mensaje, contexto de flujo o variable de contexto global que contiene el objeto de mensaje CAN. Por defecto, usa `msg.payload`.

#### Entrada

La entrada debe ser un objeto de mensaje CAN con la siguiente estructura:

```json
{
  "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
  "data": [...]  // Byte array containing the command data (8 bytes)
}
```

No has proporcionado ningún contenido para traducir. Por favor, comparte el documento técnico en Markdown que necesitas traducir al español.

```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### Validación de Comandos

El nodo incluye validación avanzada para asegurar que solo se procesen comandos de datos significativos:

- **Comandos 94**: NO deben tener todos los bytes restantes como cero (lo que indicaría una consulta, no una respuesta)
- **Comandos A4/A6**: El segundo byte debe ser 0x00 o 0x01 para ser considerado válido (excluye respuestas ACK como 0x2F)
- **Comandos A8**: El segundo byte debe ser 0x00 para ser considerado válido

Estas reglas de validación previenen el procesamiento de respuestas ACK y comandos de consulta que resultarían en cálculos de ángulo incorrectos.

##### Unidad

- **Salida en decimal**: Produce valores de ángulo en grados decimales (ej., 180.23°)
- **Salida en entero**: Produce valores de ángulo en formato entero representando centésimas de grado (ej., 18023 = 180.23°)

#### Salida

El nodo produce un objeto JSON con la información decodificada:

Para comandos de posición absoluta (A4) con "Salida en decimal" seleccionada:

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

Para comandos de posición absoluta (A4) con "Salida en entero" seleccionado:

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

Para comandos de desplazamiento relativo (A8) con "Salida en decimal" seleccionado:

```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

Para comandos de consulta de estado (94) con "Salida en decimal" seleccionado:

```json
{
    "payload": {
        "motorId": 0x141,
        "status": true,
        "angle": 90.5
    }
}
```

##### IDs de Motor

- Motor Yaw (horizontal): `0x141`
- Motor Pitch (vertical): `0x142`

##### Tipos de Comando

- `0xA4`: Comando de posición absoluta
- `0xA8`: Comando de desplazamiento relativo
- `0x94`: Comando de consulta de estado

## Explicación del Flujo Predeterminado

El flujo predeterminado es un ejemplo de cómo puedes usar la paleta de UI del dashboard, la paleta de vision AI y la paleta de reCamera para formar un dashboard que puede previsualizar la cámara, rastrear objetos específicos y controlar motores. El dashboard se ve así:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

Desglosaremos cada función individual para ayudarte a entender mejor este flujo.

### Seguimiento Automático

Esta sección del flujo maneja la funcionalidad de seguimiento automático.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `Nodo Model`: ejecuta el modelo YOLO y produce resultados de detección como x, y, w, h, ID del objeto de la caja de detección.

- `Nodo Function get_target_box`: el nodo de función extrae solo la información de las cajas delimitadoras para el objeto deseado. El algoritmo selecciona la caja delimitadora más grande, típicamente el objetivo más cercano o más relevante para rastrear.

- `Nodo Function control_motor`: calcula el desplazamiento entre el centro de esta caja delimitadora y el centro del marco de la cámara.

- `Nodo Set motor offset`: recibe el valor de desplazamiento, luego analiza el comando CAN a los motores para mantener el objetivo centrado en el marco.

- `Nodo Function get_track_target`: Coincide el ID del objeto en el algoritmo Yolo con el nombre real del objeto y actualiza la variable global `trackTarget`.

- `Nodo Dropdown List UI:` Proporciona la UI de lista desplegable en el dashboard. Los usuarios pueden seleccionar TrackTarget en tiempo real.

- `Nodo Function save_track_target`: Actualiza el TrackTarget desde la interacción de la lista desplegable.

- `Nodo Function get_track_enable`: Obtiene el estado de la variable global `trackEnabled`.

- `Nodo Track Enable Button Group`: Proporciona la UI del botón de alternancia en el dashboard para que los usuarios habiliten o deshabiliten el seguimiento automático.

- `Nodo Function save_track_enabled`: Actualiza si la variable global `trackEnabled` está habilitada o no.

### Control manual

El flujo de control manual permite a los usuarios mover los motores del gimbal interactuando con deslizadores de UI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `Nodo Joystick`: Usa el nodo de UI de plantilla para dibujar un joystick de interacción, que analizará los datos de movimiento al siguiente nodo.

- `Nodo Set dual motor anle`: Selecciona la configuración *establecer eje dual al mismo tiempo*. Usa el json analizado desde Joystick para controlar el movimiento del motor al mismo tiempo. Ten en cuenta que esto controla el movimiento de la imagen en lugar de la orientación real del gimbal físico.

- `Nodo Get motor angle`: Recupera las posiciones iniciales del motor yaw y pitch cuando el dispositivo se enciende y sincroniza con el nodo de UI del deslizador.

-`Nodo Get motor speed`: Recupera la velocidad inicial del motor yaw cuando el dispositivo se enciende y sincroniza con el nodo de UI del deslizador.

- `Nodo Slider UI`: Proporciona una UI de deslizador en el dashboard para que el usuario interactúe con los motores. Ten en cuenta que solo usamos un deslizador de velocidad aquí para controlar la velocidad de ambos motores al mismo tiempo. Puedes usar 2 nodos para asignar diferentes velocidades para dos motores.

- `Nodo Set motor angle`: Recibe datos del nodo de UI del deslizador, y analiza el comando CAN para ejecutar el motor a cierta posición.

- `Nodo Set motor speed`: Recibe datos del nodo de UI del deslizador, y actualiza la variable global para la velocidad del motor para estar listo para enviar con un comando de posición.

### Botones de acceso directo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `Nodo Button UI`: Proporciona UI de botón en el dashboard para que el usuario interactúe con el gimbal. Al hacer clic, el nodo enviará el valor asignado:
  - Sleep:

    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```

  - Standby:

    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```

  - Calibrate: activa el nodo exec
  - Emergency Stop: activa el nodo exec

Al hacer clic en estos botones, el `trackEnabled` también se actualizará para deshabilitar y detener el seguimiento automático (si está activado).

- `Nodo Exec`: Ejecuta un comando del sistema y devuelve su salida. Puedes ejecutar cualquier script bash para gimbal para este nodo:
  - Calibrate:

    ```bash
    gimbal cali
    ```

  - Emergency Stop:

    ```bash
    gimbal stop 1; gimbal stop 2
    ```

    Puedes ver todos los scripts disponibles si ingresas `gimbal` en la terminal.

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### Nodos CAN

Este ejemplo no se muestra en el dashboard ya que no tiene ningún nodo de UI. Es un ejemplo en el espacio de trabajo para demostrar cómo usar los siguientes nodos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `Nodo CAN read`: Escucha continuamente mensajes CAN en la interfaz configurada y los produce en un formato estandarizado.

- `CAN to angle`: Decodifica y convierte los datos en bruto leídos del CANbus a valores angulares.

- `Nodo Inject`: analiza `30` grados para el nodo `angle to CAN` para mover el motor.

- `angle to CAN`: Toma un valor de ángulo numérico (30 en este caso) como entrada y genera un objeto de mensaje CAN que puede enviarse directamente a una interfaz de bus CAN o a un nodo CAN Write.

- `CAN Write`: Envía marcos de comando a dispositivos de bus CAN y recibe sus marcos de respuesta. En este caso analizará

    ```json
    "payload": {
        "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // Command data as byte array
    }

    ```

    al comando CAN para rotar 30 grados en sentido antihorario.

### Control PID

Por favor, consulte el documento [aquí](https://wiki.seeedstudio.com/es/recamera_pid_adjustment/#adjust-pid-with-node-red) sobre nodos PID.

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
