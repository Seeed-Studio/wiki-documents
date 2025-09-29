---
description: Este documento presentará cómo comenzar rápidamente con los motores de la serie HighTorque.
title: Motor de la Serie HighTorque
keywords:
- Joint Module
- Motor
- Robotics
- Robotic Arm
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /es/hightorque_series
last_update:
  date: 06/24/2025
  author: ZhuYaoHui
---

# Manual de Usuario del Motor de la Serie HighTorque

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a className="nav-item">
      <img width={100}  src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png" className="nav-icon" alt="4438-32"/>
      <span className="text">4438-32</span>
      <div className="hover-effect"></div>
    </a>
    <a className="nav-item">
      <img width={100} src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png" className="nav-icon" alt="5047-36"/>
      <span className="text">5047-36</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

# Guía de Inicio Rápido del Motor de la Serie HighTorque

Este documento presentará cómo comenzar rápidamente con los motores de la serie HighTorque.

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png" />
</div>

## Especificaciones Técnicas

### Tabla de Comparación de Parámetros del Módulo de Articulación Planetaria

| **Descarga de Especificaciones Técnicas** | **[HTDW-5047-36-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf)** |  **[HTDW-4438-32-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf)** |  
|------------------------|------------------|---------------------|
| **Relación de Reducción**    | 36               | 30                  |
| **Torque Máximo (Nm)**   | 16               | 6                   |
| **Torque Nominal (Nm)**  | 4                | 1.5                 |
| **Torque de Bloqueo (Nm)**  | 24               | 10                  |
| **Velocidad Nominal (RPM)**  | 40               | 36                  |
| **Velocidad sin Carga (RPM)**| 60               | 75                  |
| **Potencia Nominal (W)**    | 17               | 13                  |
| **Constante de Torque (Nm/A)** | 0.062        | 0.039               |
| **Pares de Polos**         | 14               | -                   |
| **Voltaje Nominal (V)**  | 12-48            | 12-48               |
| **Corriente Nominal (A)**  | 2                | 1                   |
| **Corriente Máxima (A)**   | 10               | 5                   |
| **Precisión de Control de Torque** | ±10%         | ±20%                |
| **Precisión de Control de Velocidad** | ±8%           | ±10%                |
| **Tiempo de Respuesta (μs)** | ≤200             | ≤200                |
| **Resolución del Codificador de Alta Velocidad** | 14bit | 14bit               |
| **Resolución del Codificador de Baja Velocidad** | 12bit  | 12bit               |
| **Velocidad de Comunicación (Mbps)** | 5 | 5                   |
| **Frecuencia de Control (Hz)** | 3k      | 3k                  |

### Dimensiones de Instalación del Motor

- **HTDM-4438-32**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png" />
</div>

- **HTDM-5047-36**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png" />
</div>

**Preparación de PC con Windows**

- Descargar [Asistente de Depuración de Motor v1.2.1](https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip)
- Descargar [Manual de Depuración de PC](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/Hightorque_Motor_Debugging_Manual_EN.pdf)
- Comprar Placa de Controlador CAN-USB

<details>
<summary>Análisis de Protocolo</summary>

# Análisis de Protocolo

## 1.1 Instrucciones Relacionadas con CAN

1. Velocidad de transmisión CAN:
   - Segmento de arbitraje: 1 Mbps
   - Segmento de datos: 1 Mbps
2. ID: Consiste en 16 bits, donde 0x7F es la dirección de difusión.
   - 8 bits altos: Representan la dirección de origen:
     - El bit más alto es 1: Requiere una respuesta, actuando como un interruptor maestro. Habilitarlo sin enviar un comando de consulta devolverá una trama con una longitud de segmento de datos de 0.
     - El bit más alto es 0: No se necesita respuesta.
     - Los 7 bits restantes: Dirección de origen de la señal.
   - 8 bits bajos: Representan la dirección de destino:
     - El bit más alto es 0.
     - Los 7 bits restantes representan la dirección de destino.

Por ejemplo:

1. ID: 0x8001
   - La dirección de origen de la señal es 0.
   - La dirección de destino es 1.
   - El bit más alto es 1, indicando que se requiere una respuesta, es decir, el interruptor maestro de respuesta está activado.
2. ID: 0x100
   - La dirección de origen de la señal es 1.
   - La dirección de destino es 0.
   - El bit más alto es 0, indicando que no se necesita respuesta, es decir, el interruptor maestro de respuesta está desactivado.

## 1.2 Instrucciones de Modo

### 1.2.1 Modo Normal (La posición y la velocidad no se pueden controlar simultáneamente)

```bash
uint8_t cmd[] = {0x07, 0x07, pos1, pos2, val1, val2, tqe1, tqe2};
```

El protocolo normal está compuesto por: bits de comando (2 bytes) + posición (2 bytes) + velocidad (2 bytes) + torque (2 bytes), totalizando 8 bytes.

0x07 0x07: Modo normal, que puede controlar velocidad y torque, o posición y torque (ver [[#2.1-Modo-Normal]]).

Los datos de posición, velocidad y torque en el protocolo están en modo little-endian, lo que significa que el byte bajo se envía primero, seguido del byte alto. Por ejemplo, si pos = 0x1234, entonces pos1 = 0x34 y pos2 = 0x12.

Este modo se puede dividir en dos métodos de control:

- Control de posición y torque (en este momento, val = 0x8000, indicando sin límite).
- Control de velocidad y torque (en este momento, pos = 0x8000, indicando sin límite).

### 1.2.2 Modo de Torque

```bash
uint8_t cmd[] = {0x05, 0x13, tqe1, tqe2};
```

El protocolo del modo de torque consiste en: bits de comando (2 bytes) + torque (2 bytes).

0x05 0x13: Modo de torque puro, seguido de dos bytes de datos de torque (ver [[#2.3-Modo-de-Torque]]).

Los datos de torque en el protocolo están en modo little-endian, es decir, el byte bajo se envía primero, seguido del byte alto. Por ejemplo, si tqe = 0x1234, entonces tqe1 = 0x34 y tqe2 = 0x12.

### 1.2.3 Modo de Control Cooperativo (La posición, velocidad y torque se pueden controlar simultáneamente)

```bash
uint8_t cmd[] = {0x07, 0x35, val1, val2, tqe1, teq2, pos1, pos2};
```

El protocolo del modo de control cooperativo: bits de comando (2 bytes) + velocidad (2 bytes) + torque (2 bytes) + posición (2 bytes), totalizando 8 bytes.

0x07 0x35: Modo de control cooperativo, que especifica rotar a una velocidad especificada a una posición especificada y limitar el torque máximo.

En este modo, usar el parámetro 0x8000 indica sin límite (sin límite en velocidad y torque significa el valor máximo). Por ejemplo, val = 5000, tqe = 1000, pos = 0x8000: Significa que el motor rota a una velocidad de 0.5 rotaciones por segundo, con un torque máximo de 0.1 NM.

Los datos de posición, velocidad y torque en el protocolo están todos en modo little-endian, es decir, el byte bajo se envía primero, seguido del byte alto. Por ejemplo, si pos = 0x1234, entonces pos1 = 0x34 y pos2 = 0x12.

## 1.3 Lectura de Datos de Estado del Motor

1. El protocolo para leer la parte del estado del motor es el mismo que el protocolo en CAN-FD, con la única diferencia de que CAN está limitado por un segmento de datos de 8 bytes.
2. Para la dirección del registro e instrucciones de función, consulte el archivo "Register Function, Motor Operation Mode, Error Code Instructions.xlsx".
3. Debido a la limitación del segmento de datos de 8 bytes de CAN, una sola trama CAN puede devolver una cantidad limitada de información del motor:
   - Una información del motor de tipo float o int32_t en un registro.
   - Tres información del motor de tipo int16_t consecutivas.
   - Seis información del motor de tipo int8_t consecutivas.
4. El programa de ejemplo proporciona funciones de muestra para consultar información de posición, velocidad y torque del motor de tipo int16_t y análisis de información del motor (el programa de ejemplo usa una unión en lenguaje C para copiar directamente los datos del 3er al 8vo byte en CAN).

### 1.3.1 Instrucciones de Protocolo de Envío

```bash
uint8_t tdata[] = {cmd, addr, cmd1, addr1, cmd2, add2};
```

El significado general es: Leer cmd[0, 1] número de datos de tipo cmd[3, 2] desde addr.

cmd:

- Cuatro bits altos [7, 4]: 0001 indica lectura.
- Bits 2-3 [3, 2]: Indican el tipo.
  - 00: tipo int8_t.
  - 01: tipo int16_t.
  - 10: tipo int32_t.
  - 11: tipo float.
- 2 bits bajos [1, 0]: Indican la cantidad.
  - 01: Un dato.
  - 10: Dos datos.
  - 11: Tres datos.

addr: La dirección de inicio para adquirir.

Múltiples cmds y addrs se pueden concatenar para leer datos con direcciones discontinuas y diferentes tipos a la vez.

### 1.3.2 Instrucciones de Protocolo de Recepción

Suponga que los datos adquiridos son uint16_t.

```bash
uint8_t rdata[] = {cmd, addr, a1, a2, b1, b2, ..., cmd1, addr1, c1, c2, c3, c4}
```

cmd:

- Cuatro bits altos [7, 4]: 0010 indica respuesta.
- Bits 2-3 [3, 2]: Indican el tipo.
  - 00: tipo int8_t.
  - 01: tipo int16_t.
  - 10: tipo int32_t.
  - 11: tipo float.
- 2 bits bajos [1, 0]: Indican la cantidad.
  - 01: Un dato.
  - 10: Dos datos.
  - 11: Tres datos.

addr: La dirección de inicio para adquirir.

a1, a2: Dato 1, en modo little-endian.

b1, b2: Dato 2, en modo little-endian.

### 1.3.3 Ejemplo

1. Necesitamos leer datos de posición, velocidad y torque.
2. De la tabla excel de registros, sabemos que las direcciones de datos para posición, velocidad y torque son: 01, 02, 03.
3. De esto, podemos ver que podemos leer 3 datos consecutivos comenzando desde la dirección 01. Considerando que CAN puede transmitir un máximo de 8 bytes de datos a la vez, y cmd + addr ocupa dos bytes, el tipo de datos puede ser como máximo tipo int16_t.
4. De lo anterior, el binario de cmd es: 0001 0111, y el hexadecimal es: 0x17.
5. Es necesario comenzar a leer desde la dirección 01, por lo que addr es 0x01.
6. Los datos totales a enviar son uint8_t tdata[] = {0x17, 0x01}.

El código de muestra es el siguiente:

```c
/**
* @brief Read the motor
* @param id
*/
void motor_read(uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}

uint8_t cmd[] = {0x17, 0x01};
```
El significado general es: Comenzar desde la dirección 0x01 y leer 3 registros int16_t (según la tabla, los registros en las direcciones 0x01 a 0x03 representan posición, velocidad y torque respectivamente). Por lo tanto, este comando es para consultar la información de posición, velocidad y torque del motor.

0x17: El binario de 0x17[7:4] es 0001: indica lectura. El binario de 0x17[3:2] es 01: indica que el tipo de datos es int16_t. El binario de 0x17[1:0] es 11: indica que el número de datos es 3. 0x01: Comenzar desde la dirección 0x01.

Ejemplo de datos recibidos correspondientes:

```bash
uint8_t rdata[] = {0x27, 0x01, 0x38, 0xf6, 0x09, 0x00, 0x00, 0x00};
```

0x27: Corresponde al 0x17 enviado. 0x01: Comenzar desde la dirección 0x01. 0x38 0xf6: Datos de posición: 0xf638, es decir, -2505. 0x09 0x00: Datos de velocidad: 0x0009, es decir, 9. 0x00 0x00: Datos de torque: 0x0000, es decir, 0.

## 1.4 Parada del Motor

Instrucciones:

1. Detener el motor.
2. Corresponde a la instrucción d stop del ordenador host.

```c
/**
* @brief Stop the motor
*/
void motor_stop(uint8_t id)
{
uint8_t tdata[] = {0x01, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.5 Restablecer Posición Cero del Motor

Instrucciones:

1. Establecer la posición actual como la posición cero del motor.
2. Esta instrucción solo la modifica en RAM y necesita usarse con la instrucción conf write para guardarla en flash.
3. Se recomienda enviar la instrucción conf write aproximadamente 1s después de usar esta instrucción.

```c
void rezero_pos(uint8_t id)
{
uint8_t tdata[] = {0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
HAL_Delay(1000); // It is recommended to delay for 1s
conf_write(id); // Save the settings
}
```

## 1.6 Guardar Configuración del Motor (conf write)

Instrucciones:

1. Guardar la configuración del motor en RAM a flash.
2. Se recomienda reiniciar el motor después de usar esta instrucción.

```c
void conf_write(uint8_t id)
{
uint8_t tdata[] = {0x05, 0xb3, 0x02, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.7 Leer Estado del Motor

Instrucciones:

1. Leer datos de posición, velocidad y torque del motor una vez.
2. Para el análisis de los datos de información de estado de retroalimentación del motor, consulte el código en la función de interrupción HAL_FDCAN_RxFifo0Callback en el ejemplo.

```c
* @brief Instruction to read motor position, speed, and torque
* @param id Motor ID
*/
void motor_read(CAN_HandleTypeDef *hcan, uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
can_send(hcan, 0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.8 Retorno Periódico de Datos de Estado del Motor

Instrucciones:

1. Retornar periódicamente datos de posición, velocidad y torque del motor.
2. El formato de datos devuelto es el mismo que el obtenido usando la instrucción 0x17, 0x01 (es decir, 1.7 Lectura de Estado de Posición).
3. La unidad del período es ms.
4. El período mínimo es 1ms.
5. Para detener el retorno periódico de datos, establezca el período en 0 o apague el motor.
6. Para el análisis de los datos de información de estado de retroalimentación del motor, consulte el código en la función de interrupción HAL_FDCAN_RxFifo0Callback en el ejemplo.

```c
void timed_return_motor_status(uint8_t id, int16_t t_ms)
{
uint8_t tdata[] = {0x05, 0xb4, 0x02, 0x00, 0x00};
*(int16_t *)&tdata[3] = t_ms;
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 2. Funciones de Ejemplo

### 2.1 Modo Normal

#### 2.1.1 Control de Posición

```c
/**
* @brief Position control
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param torque
*/
void motor_control_Pos(uint8_t id,int32_t pos,int16_t tqe)
{
uint8_t tdata[8] = {0x07, 0x07, 0x0A, 0x05, 0x00, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = pos;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

#### 2.1.2 Control de Velocidad

```c
/**
* @brief Speed control
* @param id Motor ID
* @param vel Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Torque
*/
uint8_t tdata[8] = {0x07, 0x07, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[4] = vel;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

### 2.3 Modo de Torque

```c
/**
* @brief Torque mode
* @param id Motor ID
* @param tqe Torque
*/
void motor_control_tqe(uint8_t id,int32_t tqe)
{
uint8_t tdata[8] = {0x05, 0x13, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = tqe;
CAN_Send_Msg(0x8000 | id, tdata, 4);
}
```

### 2.4 Modo de Control Cooperativo

```c
/**
* @brief Motor position-speed-feedforward torque (maximum torque) control, int16 type
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param val Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Maximum torque
*/
void motor_control_pos_val_tqe(uint8_t id, int16_t pos, int16_t val, int16_t tqe)
{
static uint8_t tdata[8] = {0x07, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
*(int16_t *)&tdata[2] = val;
*(int16_t *)&tdata[4] = tqe;
*(int16_t *)&tdata[6] = pos;
CAN_Send_Msg(0x8000 | id, tdata, 8);
}
```

### 2.5 Modo de Voltaje DQ

Instrucciones:

1. Puede controlar el voltaje de fase Q, unidad: 0.1v, por ejemplo, vol = 10 significa que el voltaje de fase Q es 1V.

```c
void motor_control_volt(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t vol)
static uint8_t tdata[7] = {0x01, 0x00, 0x08, 0x05, 0x1b, 0x00, 0x00};
*(int16_t *)&tdata[5] = vol;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.6 Modo de Corriente DQ

Instrucciones:

1. Puede controlar la corriente de fase Q, unidad: 0.1A, por ejemplo, cur = 10 significa que el voltaje de fase Q es 1A.

```c
void motor_control_cur(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t cur)
{
static uint8_t tdata[7] = {0x01, 0x00, 0x09, 0x05, 0x1c, 0x00, 0x00};
*(int16_t *)&tdata[5] = cur;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.7 Freno

Instrucciones:

1. Frenado del motor, rotar el motor tendrá amortiguación.

```c
/**
* @brief Motor brake
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_brake(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
static uint8_t cmd[] = {0x01, 0x00, 0x0f};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

### 2.8 Parar

Instrucciones:

1. El motor se detiene y pierde la fuerza para mantener la posición.

```c
/**
* @brief Stop the motor. Note: The motor must be stopped before resetting the zero position, otherwise it will be invalid.
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_stop(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
{
static uint8_t cmd[] = {0x01, 0x00, 0x00};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

## 3. Instrucciones para Tipos Comunes (Unidades)

### 3.1 Corriente (A)

| Tipo de Datos | LSB | Real (A) |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.2 Voltaje (V)

| Tipo de Datos | LSB | Real (V) |
| --- | --- | --- |
| int8 | 1 | 0.5 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.3 Torque (Nm)

Torque verdadero = k * tqe + d

#### 3.3.1 5046 Torque (Nm)

| Tipo de Datos | Pendiente (k) | Desplazamiento (d) |
| --- | --- | --- |
| int16 | 0.005397 | -0.455107 |
| int32 | 0.000528 | -0.414526 |
| float | 0.533654 | -0.519366 |

#### 3.3.2 4538 Torque (Nm)

| Tipo de Datos | Pendiente (k) | Desplazamiento (d) |
| --- | --- | --- |
| int16 | 0.004587 | -0.290788 |
| int32 | 0.000445 | -0.234668 |
| float | 0.493835 | -0.473398 |

#### 3.3.2 5047/6056 (Bipolar, Relación de Engranaje 36) Torque (Nm)

| Tipo de Datos | Pendiente (k) | Desplazamiento (d) |
| --- | --- | --- |
| int16 | 0.004563 | -0.493257 |
| int32 | 0.000462 | -0.512253 |
| float | 0.465293 | -0.554848 |

#### 3.3.3 5047 (Unipolar, Relación de Engranaje 9) Torque (Nm)

| Tipo de Datos | Pendiente (k) | Desplazamiento (d) |
| --- | --- | --- |
| int16 | 0.005332 | -0.072956 |
| int32 | 0.000533 | -0.034809 |
| float | 0.547474 | -0.150232 |

### 3.4 Temperatura (℃)

| Tipo de Datos | LSB | Real (℃) |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.5 Tiempo (s)

| Tipo de Datos | LSB | Real (s) |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.000001 |
| float | 1 | 1 |

### 3.6 Posición (rotaciones)

| Tipo de Datos | LSB | Real (rotaciones) | Real (°) |
| --- | --- | --- | --- |
| int8 | 1 | 0.01 | 3.6 |
| int16 | 1 | 0.0001 | 0.036 |
| int32 | 1 | 0.00001 | 0.0036 |
| float | 1 | 1 | 360 |

### 3.7 Velocidad (rotaciones/segundo)

| Tipo de Datos | LSB | Real (rotaciones/segundo) |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.00025 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.8 Aceleración (rotaciones/segundo²)

| Tipo de Datos | LSB | Real (rotaciones/segundo²) |
| --- | --- | --- |
| int8 | 1 | 0.05 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.9 Escala PWM (sin unidades)

| Tipo de Datos | LSB | Real |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

### 3.10 Escala Kp, Kd (sin unidades)

| Tipo de Datos | LSB | Real |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

</details>

## Ejemplo en C++

El control en C++ requiere una placa controladora CAN-USB adicional. Consulte [livelybot_hardware_sdk](https://github.com/HighTorque-Robotics/livelybot_hardware_sdk)

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png" />
</div>

## Controlando Motores con [reComputer Mini Jetson Orin](/es/recomputer_jetson_mini_getting_started)

Actualmente, las interfaces de comunicación CAN más utilizadas para motores en el mercado son los conectores XT30(2+2) y JST. Nuestros dispositivos **reComputer Mini Jetson Orin** y **reComputer Robotics** están equipados con puertos duales XT30(2+2) e interfaces CAN basadas en JST, proporcionando compatibilidad perfecta.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>
**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para más detalles sobre el uso de CAN, consulte este [wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/#can).

### Habilitando la Interfaz CAN

**Paso 1:** Antes de usar CAN0 y CAN1, retire la cubierta inferior y configure ambas resistencias de terminación de 120Ω en la posición ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Paso 2:** Conecte el motor directamente al CAN0 del reComputer Mini a través de la interfaz XT30(2+2).

:::tip
Los pines H/L de la interfaz CAN del reComputer Mini son opuestos a los del motor, por lo que las conexiones H/L en el arnés XT30 2+2 deben invertirse.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
Esta solución de alimentación solo es adecuada para el aprendizaje y pruebas de un solo motor. Para aplicaciones de múltiples motores, diseñe una placa de alimentación independiente para aislar la fuente de alimentación del Jetson de la fuente de alimentación del motor para evitar que grandes corrientes pasen directamente a través del Jetson.
:::

#### Habilitando la Comunicación CAN del Jetson

Abra una terminal e ingrese el siguiente comando para poner el pin GPIO en alto y activar CAN0:

```bash
gpioset --mode=wait 0 43=0
```

Si usa CAN1 de la interfaz JST, ponga el pin 106 en alto:

```bash
gpioset --mode=wait 0 106=0
```

Mantenga esta terminal abierta y cree una nueva terminal para configurar CAN0:

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Control con Python

- **Instalar Entorno Python**  

```bash
pip install python-can numpy
```

- **Crear Directorio de Scripts**  

```bash
mkdir -p ~/hightorque/scripts
```

- **Crear Archivo hightorque_motor.py**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```

Copie el siguiente código en hightorque_motor.py.

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """Motor Type Enum"""
    HT5046 = 0  # 5046 Motor
    HT4538 = 1  # 4538 Motor
    HT5047_36 = 2  # 5047/6056 Dual-pole 36 Reduction Ratio
    HT5047_9 = 3  # 5047 Single-pole 9 Reduction Ratio

class ControlMode(IntEnum):
    """Control Mode Enum"""
    NORMAL = 0  # Normal Mode
    TORQUE = 1  # Torque Mode
    COOPERATIVE = 2  # Cooperative Control Mode

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        Initialize Motor Object
        :param motor_type: Motor Type
        :param slave_id: Slave ID
        :param master_id: Master ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0

        # Set Torque Conversion Parameters Based on Motor Type
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """Update Motor Status"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        Initialize Motor Controller
        :param channel: CAN Channel
        :param bitrate: CAN Baud Rate
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """Add Motor to Controller"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        Send CAN Data
        :param motor_id: Motor ID
        :param data: Data to Send
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """Enable Motor"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """Disable Motor"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """Set Motor Zero Position"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # Wait 1 second
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """Save Motor Settings to Flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        Position Control
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param torque: Torque Limit
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        Velocity Control
        :param motor: Motor Object
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        Torque Control
        :param motor: Motor Object
        :param torque: Target Torque
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        Cooperative Control (Position, Velocity, Torque Simultaneous Control)
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """Read Motor Status"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # Wait for Data Reception

        # Receive and Parse Data
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        Set Periodic Motor Status Reading
        :param motor: Motor Object
        :param period_ms: Period (milliseconds)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """Close CAN Bus"""
        self.bus.shutdown() 
```

</details>

- **Crear Archivo hightorque_test.py**

Copie el siguiente código en hightorque_test.py.

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# Configuration Parameters
NUM_MOTORS = 2  # Number of Motors to Control
CAN_INTERFACE = "can0"  # CAN Interface Name
CAN_BITRATE = 1000000  # CAN Baud Rate
MOTOR_TYPE = MotorType.HT5047_36  # Motor Type

# Sine Wave Parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 2500  # Amplitude (0.0001 turns)
OFFSET = 2500    # Offset to Ensure Positive Position
DURATION = 60.0  # Run Duration (s)

def main():
    # Create Motor Control Object
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)

    try:
        # Create and Add Motors
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)

            # Enable Motor
            print(f"Enabling Motor {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # Wait for Motor Enable

            # Set Zero Position
            print(f"Setting Motor {i+1} Zero Position...")
            controller.set_zero_position(motor)
            time.sleep(1)

            # Save Settings to Flash
            print(f"Saving Motor {i+1} Settings...")
            controller.save_settings(motor)
            time.sleep(1)

            # Read Initial Status
            controller.read_motor_status(motor)
            print(f"Motor {i+1} Initial Status:")
            print(f"Position: {motor.position * 0.0001:.4f} turns")
            print(f"Velocity: {motor.velocity * 0.00025:.4f} turns/second")
            print(f"Torque: {motor.torque * motor.torque_k + motor.torque_d:.4f} Nm")

        # Start Sine Wave Position Control
        print("\nStarting Sine Wave Position Control...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate Sine Wave Position with Offset to Ensure Positive
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET

            # Control All Motors
            for motor in motors:
                # Use Position Control Mode with Max Torque of 1000
                controller.control_position(motor, position=int(position), torque=1000)

            # Control Frequency
            time.sleep(0.001)  # 1kHz Control Frequency

    except KeyboardInterrupt:
        print("\nProgram Interrupted by User")
    finally:
        # Disable All Motors
        for motor in motors:
            print(f"Disabling Motor {motor.slave_id}...")
            controller.disable(motor)

        # Close CAN Bus
        controller.close()
        print("CAN Bus Closed")

if __name__ == "__main__":
    main() 
```

</details>

- **Ejecutar hightorque_test.py**

```bash
python hightorque_test.py
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/iwE-8klCB2Q?si=QYcVnxF8YpYSYxvl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Proporcionamos varios canales de soporte para asegurar que tengas la mejor experiencia.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* 关键属性 */
  justify-content: left; /* 可选居中 */
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(20% - 20px);
  margin-bottom: 20px;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

.nav-item img {
  pointer-events: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>

<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable {
  background: #e6f4ea;
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended {
  background: #fce8e6;
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>
