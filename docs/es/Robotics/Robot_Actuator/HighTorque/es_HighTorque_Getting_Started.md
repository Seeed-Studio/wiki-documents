---
description: Introducción a Motores de Alto Torque
title: Introducción a Motores de Alto Torque
keywords:
- actuator
- motor
- arm
- robotics
image:   https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /es/hightorque_getting_started
last_update:
  date: 12/04/2025
  author: Tienjuiwong
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note Compatibilidad de Versión

Este manual se aplica al **Asistente de Puesta en Marcha de Alto Torque v0.11.1** y versiones superiores.
El Asistente de Puesta en Marcha de Alto Torque es aplicable para firmware de motor **v3.1.0** y versiones superiores.

:::

## 1. Pautas de Uso del Motor

### 🔌 Cableado de Hardware del Motor

:::warning Aviso Importante de Seguridad
Siempre asegúrese de que la alimentación esté desconectada antes de realizar cualquier conexión.
:::

| **Especificación** | **Valor** |
|---|---|
| **Voltaje Nominal** | 24VDC |
| **Comunicación** | FDCAN (vía módulo USB-C) |
| **Modelos de Motor** | 5047, 4438, etc. |

#### Pasos de Conexión

1. **Conexión de Alimentación** 🔌
   Conecte la fuente de alimentación de 24V al módulo FDCAN

2. **Interfaz del Motor** 🔌
   Conecte la interfaz XT30 (2+2) del Motor al módulo FDCAN usando **cable GH1.25-3P**

3. **Conexión a PC** 💻
   Conecte el módulo FDCAN a la computadora vía **USB-C**

![Resumen de Conexión del Motor](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_1.png)

![Guía Detallada de Cableado](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_2.png)

## 2. Uso e Instrucciones del Asistente de Puesta en Marcha de Motor de Alto Torque

### 🎛️ Funciones Comunes

| **Función** | **Descripción** |
|---|---|
| **🔄 Reconectar Dispositivo USBCAN** | Escanea y conecta el dispositivo USBCAN y detecta motores conectados |
| **🆔 ID del Motor** | Selector desplegable para el motor actualmente conectado |
| **⚙️ Calibración del Motor** | Re-calibra el motor (⚠️ **El motor debe estar sin carga**) |
| **🎯 Restablecer Cero del Motor Actual** | Establece la posición actual como referencia cero |
| **💾 Actualizar Firmware del Motor** | Descarga e instala nuevo firmware al motor |
| **📊 Información de Salida** | Consola de registro en tiempo real para eventos y errores |

:::danger ⚠️ Advertencia Crítica
**La Calibración del Motor** debe realizarse **SIN CARGA** conectada al motor. No hacerlo resultará en un cálculo inexacto del offset del encoder.
:::

![Interfaz de Funciones Comunes](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_1.png)

:::info Guía de Operación
Use **Read Parameters** para obtener la configuración actual y **Write Parameters** para guardar cambios en el motor.
:::

| **Grupo de Parámetros** | **Descripción** |
|---|---|
| **📋 Información Básica** | Muestra Modelo, Pares de Polos, Relación de Reducción, Versión de Firmware |
| **🛡️ Protección del Motor** | Límites de sobre-voltaje (V) y sobre-temperatura (°C) |
| **⚖️ Ajuste PID** | Coeficientes Kp, Ki, Kd + i_limit (límite integral) |
| **🆔 Modificar ID del Motor** | Cambia el ID del motor (requiere re-identificación) |
| **📍 Rango de Posición del Motor** | Límites de posición MAX/MIN (establecer a `nan` para infinito) |
| **🚀 Límites de Rotación** | Límites de velocidad (rev/s), aceleración (rev/s²), corriente (A) |

:::warning Nota
Establezca valores a `nan` para operación ilimitada en las secciones de Rango de Posición y Límites de Rotación.
:::

![Configuración de Parámetros - Básica](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_1.png)

![Configuración de Parámetros - Avanzada](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_2.png)

### 🔧 Depuración del Motor

Depure con diferentes modos de funcionamiento (vista detallada en [Modos de Funcionamiento del Motor](#modos-de-funcionamiento-del-motor)).

| **Característica** | **Descripción** |
|---|---|
| **📈 Modo de Funcionamiento del Motor** | Haga clic en **"Add Waveform"** para visualizar Posición, Velocidad, Torque, Temperatura en tiempo real |
| **📊 Estado del Motor** | Información de trama FDCAN (float, int16, int32, trama CAN) |
| **🛠️ Generar Trama** | Crear tramas CAN personalizadas para desarrollo |
| **🛑 Parar y Frenar** | Controlar el comportamiento de parada del motor |

#### Tipos de Generación de Tramas

<Tabs>
  <TabItem value="numeric" label="Tipos Numéricos">
    **float, int16, int32**

    Para ejemplos de implementación y manejo de tipos de datos, consulte los ejemplos del protocolo FDCAN en esta sección
  </TabItem>
  <TabItem value="can" label="Trama CAN">
    **Trama CAN**

    Para ejemplos de generación y manejo de tramas CAN, consulte las guías de implementación del protocolo
  </TabItem>
</Tabs>

#### Control de Parada y Frenado

| **Control** | **Comportamiento** |
|---|---|
| **🛑 Parar** | Desconecta las tres fases - el motor se detiene por inercia |
| **⚡ Frenar** | Cortocircuita las tres fases a tierra - el motor se detiene **inmediatamente** |

![Depuración - Vista de Forma de Onda](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_1.png)

![Depuración - Monitoreo de Estado](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_2.png)

### 🎮 Modos de Funcionamiento del Motor

<Tabs>
  <TabItem value="position" label="1️⃣ Modo de Posición">
    **Modo de Posición** 🎯

    Proporciona control angular preciso para el eje del motor. Ingrese la posición objetivo en revoluciones y haga clic en enviar. El motor se moverá a la posición exacta especificada usando control PID de bucle de posición.

    **Ideal para:** Articulaciones robóticas, máquinas CNC, sistemas actuadores

    ![Interfaz del Modo de Posición](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_1.png)
  </TabItem>

  <TabItem value="velocity" label="2️⃣ Modo de Velocidad">
    **Modo de Velocidad** 🔄

    Mantiene una velocidad de rotación constante independientemente de las variaciones de carga (dentro de la capacidad). Ingrese la velocidad objetivo en rev/s y haga clic en enviar. El motor acelerará a la velocidad especificada usando el límite de aceleración configurado.

    **Ideal para:** Cintas transportadoras, ventiladores, mesas rotatorias

    ![Interfaz del Modo de Velocidad](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_2.png)
  </TabItem>

  <TabItem value="torque" label="3️⃣ Modo de Torque">
    **Modo de Torque** 💪

    Controla el torque de salida directamente. El motor intentará mantener el valor de torque especificado independientemente de la velocidad. Si la resistencia externa excede el torque establecido, el motor se detendrá para proteger el sistema.

    **Unidades:** Newton-metros (Nm)

    **Ideal para:** Sistemas de tensión, operaciones de ajuste por presión, sujeción de carga

    ![Interfaz del Modo de Torque](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_3.png)
  </TabItem>

  <TabItem value="voltage" label="4️⃣ Modo de Voltaje">
    **Modo de Voltaje** ⚡

    Proporciona control directo sobre el voltaje del eje Q aplicado al motor. Este modo avanzado permite algoritmos de control personalizados y se usa típicamente en aplicaciones de investigación o sistemas de control especializados.

    **Unidades:** Voltios (V)

    ![Interfaz del Modo de Voltaje](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_4.png)
  </TabItem>

  <TabItem value="current" label="5️⃣ Modo de Corriente">
    **Modo de Corriente** 🔋

    Controla la corriente del eje Q que fluye a través de los devanados del motor. Este modo proporciona un control más directo sobre la generación de torque que el modo de torque, ya que la corriente es el impulsor fundamental de la intensidad del campo magnético.

    **Unidades:** Amperios (A)

    **Ideal para:** Aplicaciones de control de torque preciso

    ![Interfaz del Modo de Corriente](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_5.png)
  </TabItem>

  <TabItem value="position-speed-torque" label="6️⃣ Posición+Velocidad+Torque">
    **Posición, Velocidad, Torque Máximo** 🎛️

    Modo híbrido que combina control de posición con limitación de velocidad y torque para movimiento seguro y controlado. El motor se moverá a la posición especificada a la velocidad objetivo mientras asegura que el torque de salida nunca exceda el límite máximo.

    **Ideal para:** Pinzas robóticas, actuadores de puertas, aplicaciones con límite de fuerza

    Establezca el torque máximo a `nan` si no se desea limitación de torque.

    ![Interfaz del Modo Posición+Velocidad+Torque](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_6.png)
  </TabItem>

  <TabItem value="trapezoidal" label="7️⃣ Control Trapezoidal">
    **Control Trapezoidal** 📈

    Genera trayectorias suaves de curva S con fases controladas de aceleración y desaceleración. El motor: 1) acelerará uniformemente a velocidad máxima, 2) mantendrá velocidad constante, luego 3) desacelerará uniformemente para detenerse precisamente en la posición objetivo.

    **Ideal para:** Operaciones de pick-and-place, posicionamiento CNC, automatización de precisión

    ![Interfaz de Control Trapezoidal](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_7.png)
  </TabItem>

  <TabItem value="motion-control" label="8️⃣ Control de Movimiento">
    **Modo de Control de Movimiento** 🤖

    Modo de control avanzado basado en PID usando la fórmula:

    **Torque de Salida del Motor = Kp × Error_Posición + Kd × Error_Velocidad + Torque_FeedForward**

    Este modo combina error de posición (término P) y error de velocidad (término D) para control de movimiento sofisticado.

    **Ideal para:** Aplicaciones de alta precisión, prensas servo, ensamblaje controlado por fuerza

    ![Interfaz del Modo de Control de Movimiento](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_8.png)
  </TabItem>
</Tabs>

---

## 3. 🔌 Análisis del Protocolo FDCAN

:::info Referencia del Protocolo
Esta sección cubre la información esencial del protocolo FDCAN para operaciones básicas de control de motor. Para mapeo completo de registros y detalles avanzados del protocolo, consulte la documentación de control de motor.
:::

### Ejemplo: Modo de Velocidad de Trama de Datos int32

Tome el **Modo de Velocidad de Trama de Datos int32** como ejemplo:

```hex
01000a0a2000000080204e0000
```

---

### **1️⃣ Sub-trama 1** - Configuración del Modo del Motor

Esta sub-trama configura el modo de operación del motor.

| **Campo** | **Valor** | **Descripción** |
|---|---|---|
| **0x01** | Encabezado | Inicio de la primera sub-trama |
| **Bits 7-4** | `0000` | Operación de escritura a registros del motor |
| **Bits 3-0** | `0001` | Tipo de datos **int8_t**, 1 unidad de datos |
| **0x00** | Dirección de Registro | Registro de **Configuración del Modo del Motor** |
| **0x0a** | Datos | Establece el motor al **Modo de Velocidad** |

---

### **2️⃣ Sub-trama 2** - Parámetros de Movimiento

Esta sub-trama configura los parámetros de movimiento (objetivos de posición y velocidad).

| **Campo** | **Valor** | **Descripción** |
|---|---|---|
| **0x02** | Encabezado | Inicio del segundo sub-frame |
| **Bits 7-4** | `0000` | Operación de escritura |
| **Bits 3-0** | `0010` | Tipo de datos **int32_t**, 2 unidades de datos |
| **0x20** | Inicio de Registro | Registro objetivo de posición (0x20) |
| **0x00 0x00 0x00 0x80** | Datos de Posición | **0x80000000** = Posición **ilimitada/NaN** |
| **0x20 0x4e 0x00 0x00** | Datos de Velocidad | **0x00004e20** = **20000** (decimal) |

:::success Conversión de Unidades
**Cálculo de Velocidad:**
- **Valor Decimal:** 20000
- **Peso LSB:** 0.00001 rev/s por unidad
- **Velocidad Objetivo:** 20000 × 0.00001 = **0.2 rev/s**
:::

---

## 📚 Apéndice

### ⚠️ Referencia de Códigos de Error del Motor

:::info Código de Estado 0 = Operación Normal
Un valor distinto de cero indica un error. Consulte la tabla a continuación para causas específicas y soluciones.
:::

| **Código** | **Nombre del Error** | **Descripción** | **Solución** |
|---|---|---|---|
| **32** | 🔧 Falla de Calibración | El encoder no puede detectar el imán durante la calibración | Asegúrese de que el imán esté instalado correctamente; recalibre sin carga |
| **33** | ⚡ Falla del Driver del Motor | Bajo voltaje o corriente insuficiente | Verifique el voltaje de la fuente de alimentación y la capacidad de corriente |
| **34** | 🔺 Sobre Voltaje | El voltaje del bus excedió el límite | Verifique la clasificación de voltaje de la fuente de alimentación |
| **35** | 📡 Falla del Encoder | Error de lectura del encoder | Verifique las conexiones y el cableado del encoder |
| **36** | 🚫 Motor No Calibrado | El motor no ha sido calibrado | Ejecute el procedimiento de calibración sin carga |
| **37** | 📊 Límite de Ciclo PWM Excedido | Error interno del firmware | Contacte al soporte técnico |
| **38** | 🌡️ Sobre Temperatura | La temperatura excedió el límite máximo | Permita que el motor se enfríe; verifique la refrigeración |
| **39** | 🎯 Fuera de Límites | Control de posición fuera de los límites definidos | Ajuste los parámetros del rango de posición |
| **40** | 🔋 Voltaje Bajo | Voltaje de suministro demasiado bajo | Verifique la fuente de alimentación y las conexiones |
| **41** | ⚙️ Configuración Cambiada | Configuración crítica cambiada durante la operación | Detenga el motor antes de cambiar parámetros |
| **42** | 🔄 Ángulo Inválido | No hay encoder de conmutación válido | Verifique la funcionalidad y conexiones del encoder |
| **43** | 📍 Posición Inválida | No hay encoder de salida válido | Verifique las conexiones del encoder de salida |

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
