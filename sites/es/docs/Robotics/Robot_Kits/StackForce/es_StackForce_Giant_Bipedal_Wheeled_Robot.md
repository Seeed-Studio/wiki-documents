---
description: Guía de Desarrollo Profesional del Robot Bípedo con Ruedas Gigante StackForce, incluyendo características avanzadas, tutoriales de desarrollo en profundidad, documentación de API y casos de aplicación práctica
title: Robot Bípedo con Ruedas Gigante StackForce
keywords:
- StackForce
- Robot con Patas y Ruedas
- Desarrollo Profesional
- Robótica Avanzada
- Inteligencia Artificial
- Navegación Autónoma
slug: /es/stackforce_giant_bipedal_wheeled_robot
last_update:
  date: 12/12/2025
  author: TienjuiWong
translation:
    skip: [zh-CN]
---

# Guía de Desarrollo del Robot Bípedo con Ruedas Gigante StackForce

:::tip
Esta guía está diseñada para desarrolladores profesionales e investigadores, proporcionando una solución completa desde la configuración básica hasta el desarrollo de aplicaciones avanzadas. Si eres principiante, recomendamos comenzar con la versión Mini.
:::

## 📋 Tabla de Contenidos

- [Descripción del Producto](#descripción-del-producto)
- [Lista de Materiales BOM](#lista-de-materiales-BOM)
- [Características Principales](#características-principales)
- [Inicio Rápido](#inicio-rápido)
- [Guía de Operación del Control Remoto](#guía-de-operación-del-control-remoto)
- [Guía de Depuración del Sistema](#guía-de-depuración-del-sistema)
- [Ensamblaje de Hardware](#ensamblaje-de-hardware)

## Descripción del Producto

### Posicionamiento del Producto

El Robot Bípedo con Ruedas Gigante StackForce es un sistema de robot con patas y ruedas de grado profesional construido sobre la plataforma de desarrollo de robots ligeros StackForce. Comparado con la versión Mini, la versión completa tiene mejoras significativas en configuración de hardware, funcionalidad de software y capacidades de expansión, específicamente diseñado para desarrollo profesional, investigación académica y aplicaciones comerciales.

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114001333722578&bvid=BV1MhKKeBEJX&cid=28481814826&p=1"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>

### Arquitectura Técnica Principal

#### Sistema de Control Colaborativo de Doble Chip
- **Chip de Control Principal S1**: Responsable del control de motores, ejecución de algoritmos FOC y control de movimiento
- **Chip Coprocesador S3**: Responsable del control de servos, fusión de sensores y comunicación inalámbrica

#### Modelo Cinemático Omnidireccional
- Algoritmo de cálculo de actitud basado en cuaterniones
- Solución de cinemática inversa en tiempo real

#### Algoritmo de Balance Inteligente
- Control PID adaptativo
- Ajuste dinámico del centro de gravedad
- Estabilización adaptativa para terrenos complejos

## Lista de Materiales BOM

### Lista de Materiales de la Estructura de Pata-Rueda Grande

| Nombre del Artículo | Cantidad | Notas |
|-----------|----------|-------|
| **Componentes Electrónicos** | | |
| Placa de Control Principal StackForce | 1 | |
| Placa de Alta Corriente A StackForce | 1 | |
| Placa de Alta Corriente B StackForce | 1 | |
| Placa de Servo StackForce | 1 | |
| Placa CAN StackForce | 1 | |
| Placa de Expansión IO StackForce | 1 | |
| Placa Hall StackForce | 1 | |
| **Partes Estructurales de Fibra de Carbono** | | |
| Panel Lateral | 2 | 5mm de espesor |
| Marco Base del Panel Lateral | 2 | 3mm de espesor |
| Guía Frontal | 4 | 5mm de espesor |
| Deflector | 2 | 3mm de espesor |
| **Partes Impresas en 3D PLA** | | |
| Pata Superior | 4 | |
| Pata Inferior | 4 | |
| Panel Frontal/Trasero | 4 | |
| Conector del Panel Frontal/Trasero | 4 | |
| Conector del Deflector | 4 | |
| Base de Control Principal | 1 | |
| Cubierta del Motor | 4 | |
| Placa de Cubierta V1 | 2 | |
| Placa de Cubierta V2 | 2 | |
| Compartimento de Batería | 1 | |
| Cubierta de Batería | 1 | |
| **Partes Mecanizadas CNC** | | |
| Conector de Pata 30 | 2 | |
| Conector de Pata 40 | 2 | |
| **Perfil de Aluminio** | | |
| 40*30*100 1mm de espesor | 4 | Requiere perforación |
| 60*20*320mm 1mm de espesor | 2 | Requiere perforación |
| **Sujetadores** | | |
| M2*10 | 1 | Cabeza redonda negra |
| M3*8 | 4 | Cabeza redonda |
| M3*8 | 32 | Negro, hexagonal |
| M3*10 | 12 | Negro, hexagonal |
| M3*14 | 16 | Negro, hexagonal |
| M3*20 | 12 | Negro, hexagonal |
| M3*25 | 24 | Negro, hexagonal |
| M3*40 | 16 | Negro, hexagonal |
| M3*45 | 8 | Negro, hexagonal |
| M3*50 | 8 | Negro, hexagonal |
| M3*50 | 8 | Negro, cabeza plana |
| M4*30 | 44 | Negro, hexagonal |
| M4*30 | 2 | Cabeza redonda negra |
| Pilar de Cobre | 22 | M3*8+4 |
| Tornillo de Fijación | 4 | 10*M8*30 |
| Tuerca M3 | 10 | Negra |
| Tuerca de Seguridad M3 | 54 | Negra |
| Tuerca de Seguridad M4 | 20 | Negra |
| Tuerca de Seguridad M6 | 4 | |
| Tuerca de Seguridad M8 | 4 | |
| Rodamiento de Rosca Externa | 4 | 9C2L15M6 |
| Rodamiento F6000ZZ | 8 | 10*26*8 |
| **Motores** | | |
| Motor de Cubo 5.5 pulgadas 24v | 2 | |
| GIM6010-8-Versión Estándar | 4 | |

## Características Principales

### 1. 🚀 Plataforma de Hardware de Alto Rendimiento

#### Sistema de Control Principal
- **Arquitectura de Doble Chip**: Procesamiento colaborativo S1 + S3
- **Rendimiento en Tiempo Real**: Tiempo de respuesta a nivel de microsegundos
- **Interfaces de Expansión**: Interfaces ricas I2C, SPI, PWM

#### Sistema de Control de Movimiento
- **Control Vectorial FOC**: Control preciso de torque

### 2. 🧠 Sistema de Percepción Inteligente

#### Configuración de Sensores
- **IMU de Alta Precisión**: Fusión de sensores de 9 ejes
- **Codificador Magnético**: Retroalimentación de posición de precisión de 14 bits

### 3. 🌐 Capacidades de Comunicación Potentes

#### Comunicación Inalámbrica
- **WiFi 6**: Transmisión de datos de alta velocidad
- **Bluetooth 5.2**: Conexión de bajo consumo
- **Protocolo Personalizado**: Pila de protocolos de comunicación eficiente para conexión de control remoto

#### Interfaces Cableadas
- **USB Type-C**: Depuración serial
- **Bus CAN**: Accionamiento de motores

### 4. 🔧 Soporte de Desarrollo Flexible

#### Cadena de Herramientas de Desarrollo
- **PlatformIO**: Entorno de desarrollo embebido profesional
- **ROS/ROS2**: Compatibilidad con Sistema Operativo de Robots

#### Ecosistema de Código Abierto
- **Completamente de Código Abierto**: El código de control es de código abierto
- **Diseño Modular**: Facilita la expansión de características

## Inicio Rápido

### Requisitos del Sistema

#### Requisitos de Hardware
- Kit de Robot StackForce Versión Completa
- Computadora con Ubuntu 20.04+ o Windows 10+ instalado
- Al menos 8GB de RAM, 100GB de espacio de almacenamiento disponible

#### Requisitos de Software
- Visual Studio Code
- Extensión PlatformIO IDE


## Guía de Operación del Control Remoto

### 1. Cableado del Receptor

El diagrama a continuación muestra la secuencia de cableado de salida del receptor; solo se necesitan los siguientes tres cables: **CH1/PPM**, **GND**, **VCC**.

El receptor emite en orden: **CH1/PPM**, **GND**, **VCC**

La placa de expansión tiene 40 pines, con GND y 3V3 en la fila del medio, como se muestra en el diagrama a continuación.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_01.png" />
</div>

### 2. Emparejamiento de Frecuencia del Receptor y Control Remoto

Antes del emparejamiento de frecuencias, primero apaga el control remoto, luego enciende y apaga el receptor tres veces en 10 segundos para entrar en modo de emparejamiento. La luz indicadora del receptor se encenderá y se apagará después de un segundo.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_02.png" />
</div>

Luego voltea el interruptor de habilitación del control remoto hacia abajo para habilitar la transmisión de señal, voltea el joystick izquierdo del control remoto hacia abajo a la posición más baja, y luego enciende el control remoto. El emparejamiento de frecuencia es exitoso. Después del emparejamiento exitoso de frecuencia, la luz indicadora del receptor se apagará.

### 3. Instrucciones de Uso Básico del Control Remoto

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_03.png" />
</div>

#### Funciones del Joystick y Interruptores

| Controlador | Función | Descripción |
|------------|----------|-------------|
| **Joystick de Habilitación** | Si el control remoto envía señal | Debe voltearse antes de controlar el robot |
| **Joystick Izquierdo (arriba/abajo)** | Controlar altura del robot | Subir arriba, bajar abajo |
| **Joystick Izquierdo (izquierda/derecha)** | Controlar altura de ambos lados de las patas del robot | Necesita habilitar función de balanceo de hombros |
| **Joystick Derecho (arriba/abajo)** | Controlar movimiento adelante/atrás del robot | Arriba para avanzar, abajo para retroceder |
| **Joystick Derecho (izquierda/derecha)** | Controlar giro izquierda/derecha del robot | Girar izquierda, girar derecha |

#### Uso del Joystick Izquierdo con Perilla Izquierda

- **Cuando la perilla izquierda se gira en sentido horario hacia arriba**: Voltea el joystick izquierdo hacia abajo para habilitar la función de balanceo de hombros; voltea hacia arriba para deshabilitar
- **Cuando la perilla izquierda se gira en sentido antihorario hacia abajo**: Voltea hacia abajo para hacer que el robot salte, voltea hacia arriba para deshabilitar el salto

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_04.png" />
</div>

#### Joystick Derecho y Perilla Derecha

- **El joystick derecho tiene tres posiciones**:
  - Posición superior: Deshabilitar motor de cubo
  - Posición media: Habilitar motor de cubo
  - Posición inferior: Activar mecanismo de auto-estabilización

- **Perilla derecha**: Ajustar desviación de balance

### 4. Pasos de Operación de Encendido del Robot

#### Proceso de Operación Detallado

1. **Preparación del Control Remoto**
   - Voltea el joystick izquierdo del control remoto a la posición más baja, luego enciende el control remoto
   - Asegúrate de que las patas del robot estén suspendidas y paralelas al suelo
   - Las patas del robot deben colgar naturalmente, asegurando una rotación suave de las ruedas para calibración

2. **Encendido del Robot**
   - Enciende el interruptor de alimentación del robot
   - Espera a que se complete la calibración del motor de cubo

3. **Reinicio de la Placa de Control Principal**
   - Voltea el joystick izquierdo completamente hacia arriba para reiniciar el chip S3 en la placa de control principal
   - Espera a que se complete la calibración

4. **Retracción de Patas**
   - Voltea el joystick izquierdo completamente hacia abajo para retraer las patas del robot
   - Coloca el robot en el suelo

5. **Activación del Motor de Cubo**
   - Voltea el joystick derecho a la posición media para iniciar el motor de cubo
   - Si el robot no puede mantener el equilibrio, ajusta finamente la perilla derecha en el control remoto hasta que el robot mantenga el equilibrio

:::warning
**Recordatorios Importantes**:
- No sobre-descargar la batería del control remoto
- Puedes usar un multímetro para medir el voltaje de la batería
- El rango normal de descarga es generalmente 25-21V
- Si el voltaje cae por debajo de 21V, por favor carga a tiempo
- Si no entiendes los pasos anteriores, puedes contactar al personal técnico para ver el video de operación de encendido del robot!
:::

## Guía de Depuración del Sistema

:::tip
Esta sección usa el número ID de la placa del motor de articulación como etiqueta para la explicación. Por favor conecta estrictamente según el diagrama de cableado.
:::

### 1. Guía de Cableado

:::tip
**Diagrama de Cableado** - Cablea estrictamente según el diagrama para asegurar que cada conexión sea correcta
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_01.png" alt="Diagrama de cableado general" />
</div>

#### 1. Cableado del Motor Hub

**Cableado de la línea trifásica del motor hub y la línea trifásica Hall:**
- Secuencia de soldadura del cable trifásico del motor hub (de izquierda a derecha): **Verde, Amarillo, Azul**
- Secuencia del cable del encoder (de izquierda a derecha): **Amarillo, Verde, Azul, Negro, Rojo**

**Diagrama de Cableado Detallado:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_02.png" alt="Motor wiring detail image 1" />
        <p>Figura 1: Cableado de la línea trifásica del motor</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_03.png" alt="Motor wiring detail image 2" />
        <p>Figura 2: Detalles del cableado del encoder</p>
      </td>
    </tr>
  </table>
</div>

**Asignación del cableado de los motores hub izquierdo y derecho:**
- **Motor hub izquierdo**:
  - Línea trifásica → Placa de Alta Corriente B
  - Línea del encoder Hall → Puerto M0 de la Placa Hall

**Esquema detallado de cableado de las ruedas izquierda y derecha:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_04.png" alt="Left hub motor wiring" />
        <p>Esquema de cableado del motor hub izquierdo</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_05.png" alt="Right hub motor wiring" />
        <p>Esquema de cableado del motor hub derecho</p>
      </td>
    </tr>
  </table>
</div>

### 2. Flasheo del Firmware S1

#### Preparación Previa al Flasheo

:::warning
**Recordatorio Importante** - La dirección de inserción del cable USB es crucial, una inserción incorrecta puede causar daños al dispositivo
:::

1. Inserta la cabeza tipo-c del cable USB **con el lado de la costura hacia abajo** en la interfaz tipo-c de la placa de control principal
2. Verifica la luz indicadora de la placa de control principal:
   - Si la placa de control principal **se ilumina en amarillo** → Normal, puede flashear directamente
   - Si la placa de control principal **se ilumina en verde** → Presiona el botón blanco de auto-bloqueo al lado para cambiar a luz amarilla

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_06.png" alt="USB cable insertion direction diagram"  />
  <p>⚠️ Nota la dirección de inserción del cable USB</p>
</div>

#### Pasos de Flasheo

**Paso 1: Abrir la herramienta de flasheo**
1. Haz doble clic para abrir la herramienta `flash_download_tool_3.9.2.exe`
2. Después de que se abra la herramienta, aparecerá un diálogo, selecciona **ESP32**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_07.png" alt="Flashing tool startup interface"  />
</div>

**Paso 2: Seleccionar archivo de firmware**
1. Haz clic en los tres puntos (icono 📁) en la primera fila
2. En la carpeta emergente, selecciona el archivo `target.bin`

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_08.png" alt="Firmware file selection interface"  />
</div>

**Paso 3: Configurar parámetros de flasheo**

:::info
**Lista de Verificación de Configuración de Parámetros** - Por favor configura según los siguientes parámetros para asegurar un flasheo exitoso
:::

Configura los siguientes parámetros:
1. ✅ **Seleccionar ruta del archivo** (se muestra automáticamente)
2. ✅ **Marcar selección**
3. ✅ **Dirección de escritura**: `0x00`
4. ✅ **Frecuencia de reloj**: `80MHz`
5. ✅ **Modo flash**: `QIO`
6. ✅ **Selección de puerto serie**: Ver puerto correspondiente CH340 a través del Administrador de Dispositivos
7. ✅ **Velocidad de baudios**: `921600`

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_09.png" alt="Flashing parameter configuration 1"  />
        <p>📋 Configuración de parámetros paso 1</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_10.png" alt="Flashing parameter configuration 2"  />
        <p>📋 Configuración de parámetros paso 2</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_11.png" alt="Flashing parameter configuration 3"  />
        <p>📋 Configuración de parámetros paso 3</p>
      </td>
    </tr>
  </table>
</div>

**Paso 4: Verificar resultados del flasheo**
Después del flasheo exitoso:
1. Ensambla la placa y conecta los cables
2. Abre el asistente serie (VOFA) y selecciona el puerto correspondiente
3. Enciende el robot:
   - Primero enciende el control remoto
   - Mueve el joystick izquierdo del control remoto hacia arriba
   - Mueve la palanca superior derecha hacia arriba (posición L)
4. Presiona el botón de reset del chip S1 (posición marcada con cuadro rojo)

:::success
**Pasos de Verificación** - Por favor verifica según los siguientes pasos después de completar el flasheo
:::

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_12.png" alt="S1 chip reset button position"  />
        <p>✅ Posición del botón de reset del chip S1</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_14.png" alt="Serial debugging assistant interface"  />
        <p>📊 Interfaz del asistente de depuración serie</p>
      </td>
    </tr>
  </table>
</div>

Si la información de impresión serie es como se muestra en la figura a continuación, significa que el cableado del motor hub es correcto y el firmware S1 se flasheó exitosamente.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_13.png" alt="Flashing success verification information"  />
  <p>🎉 ¡Flasheo exitoso! Ver este mensaje indica que todo está normal</p>
</div>


### 3. Verificación de la Resistencia Terminal

#### Números ID de las Placas Controladoras de Motores de Articulación

Las placas controladoras de motores de articulación tienen firmware flasheado antes del envío y están etiquetadas con etiquetas que son los números de ID CAN:

| Posición de la Articulación | Número ID CAN |
|----------------------------|---------------|
| Placa Controladora del Motor de Articulación Frontal Izquierda | 0x04 |
| Placa Controladora del Motor de Articulación Frontal Derecha | 0x03 |
| Placa Controladora del Motor de Articulación Trasera Izquierda | 0x02 |
| Placa Controladora del Motor de Articulación Trasera Derecha | 0x01 |

#### Conexión y Configuración de Resistencia Terminal

1. **Usar conexión de cable XT30 (2+2)**:
   - Conectar las cuatro placas controladoras de motores de articulación en serie
   - Solo necesitas **abrir la resistencia terminal de una de las placas controladoras de motor** en el cableado
   - Las otras tres no necesitan abrir la resistencia terminal

2. **Verificación de Resistencia Terminal de la Placa CAN**:
   - Verificar si la resistencia terminal en la placa CAN está abierta
   - Usar un multímetro en modo resistencia para medir la resistencia de los terminales H y L de la placa CAN
   - La resistencia normal debería ser **alrededor de 60Ω**

3. **Solución de Problemas**:
   - Si la resistencia es incorrecta, verificar si los interruptores de resistencia terminal en la parte posterior de las otras tres placas controladoras de motores de articulación están cerrados
   - Asegurar que solo una resistencia terminal esté en estado abierto


### 4. Calibración de la Posición Cero

#### Paso 1: Modificar Configuraciones del Código

**En el archivo can.cpp:**
1. Desplázate hacia abajo para encontrar la función `CAN_control()`

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_15.png" alt="CAN_control function in can.cpp file"  />
  <p>📝 Ubicación clave del código en can.cpp</p>
</div>

**En el archivo main.cpp:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_16.png" alt="posInit function in main.cpp file"  />
  <p>📝 Ubicación clave del código en main.cpp</p>
</div>

#### Paso 2: Preparación del Hardware y Flasheo

1. **Preparación del Robot**:
   - Primero deja que las patas de los motores de articulación cuelguen naturalmente hacia abajo verticalmente
   - Inserta el cable USB en la placa de control principal (nota que el lado de la interfaz tipo-c con la costura está hacia abajo, el lado sin costura está hacia arriba)
   - Después de la inserción, el puerto serie S3 de la placa de control principal debería encender **luz verde**
   - Si se enciende en amarillo, presiona el botón blanco en la placa de control principal para cambiar al chip S3

2. **Flasheo del Programa**:
   - Flashea el programa modificado

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_17.png" alt="Hardware preparation completed diagram"  />
  <p>🔧 Estado de preparación del hardware completado</p>
</div>

3. **Prueba de Encendido**:
   - Abre el asistente serie después de flashear el programa
   - Enciende el robot (mueve la palanca superior derecha del control remoto hacia arriba (L))
   - Reinicia el chip S3
   - Observa que los ángulos iniciales de los motores de articulación impresos por el puerto serie están todos cerca de 0

4. **Verificar Datos de Ángulo**:
   - Agita uno de los brazos grandes del robot
   - Qué datos cambian corresponde a los datos de ángulo de esa posición del brazo grande

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_18.png" alt="Serial output angle data verification"  />
  <p>📊 Salida serie - verificación de datos de ángulo</p>
</div>

#### Paso 3: Completar Configuraciones de Posición Cero

**En el archivo main.cpp:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_19.png" alt="main.cpp zero position setting completed"  />
  <p>✅ Configuración de posición cero en main.cpp completada</p>
</div>

**En el archivo can.cpp:**
1. Después de comentar `posInit()`, necesitas **descomentar** el envío de comandos CAN en la función `CAN_Control()` en el archivo can.cpp
2. **Comentar** la impresión del ángulo eléctrico del motor de articulación

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_20.png" alt="can.cpp final configuration"  />
  <p>✅ Configuración final de can.cpp completada</p>
</div>

#### Paso 4: Ajuste Final

1. **Volver a flashear el programa** al chip S3
2. **Prueba de Control**:
   - Encender el robot
   - Controlar el joystick de altura de la pata
   - Observar si los cambios de altura de la pata siguen el control del joystick izquierdo
3. **Ajuste de Balance de Altura**:
   - Colocar el robot en el suelo
   - Retraer las patas del robot al mínimo
   - Observar si las alturas en ambos lados del plano del robot son consistentes
   - Si no son consistentes, ajustar los valores `leftY` y `rightY` en el archivo robot.cpp

**Diagrama de Ajuste de Balance de Altura:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_21.png" alt="Height adjustment before and after comparison 1"  />
        <p>⚖️ Diagrama de ajuste de altura - antes del ajuste</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_22.png" alt="Height adjustment before and after comparison 2"  />
        <p>⚖️ Diagrama de ajuste de altura - después del ajuste</p>
      </td>
    </tr>
  </table>
</div>

### 5. Depuración de Valores de Parámetros PID

#### Preparación para la Depuración

**Interfaz de Depuración de Parámetros PID:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_23.png" alt="PID parameter debugging step 1"  />
        <p>🔧 Pasos de depuración PID - comentarios de función</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_24.png" alt="PID parameter debugging step 2"  />
        <p>🔧 Pasos de depuración PID - impresión de parámetros</p>
      </td>
    </tr>
  </table>
</div>

#### Pasos de Depuración

**Depurar parámetros PID en tres valores de altura:**

| Valor de Altura | Posición Correspondiente | Llenar Parámetros |
|-----------------|--------------------------|-------------------|
| 0 | Punto más bajo | pid0 |
| 100 | Punto medio | pid1 |
| 200 | Punto más alto | pid2 |

**Cada parámetro pid incluye:**
- Bucle de velocidad Kp
- Bucle vertical Kp
- Bucle vertical Kd
- Eje X del robot Kp

#### Proceso de Depuración

1. **Depurar cada altura individualmente**:
   - Depurar los valores de parámetros PID para tres valores de altura diferentes por separado
   - Asegurar que el robot pueda mantener el equilibrio en cada altura

2. **Llenar parámetros**:
   - Llenar los parámetros PID depurados de los tres valores de altura en la función de ajuste lineal PID en orden
   - Llenar los valores de parámetros PID del punto más bajo en pid0
   - Llenar los valores de parámetros PID del punto medio en pid1
   - Llenar los valores de parámetros PID del punto más alto en pid2

3. **Verificación final**:
   - Después de completar la depuración, **descomentar** la función de ajuste lineal PID
   - Flashear el programa en el programa S3
   - Encender el robot según los pasos de encendido del robot
   - Verificar en tierra que los parámetros PID cumplan con los requisitos de equilibrio de movimiento y operación del robot

:::tip
Si necesitas consultar videos de operación, puedes contactar al personal técnico en el grupo para obtener el video de operación de encendido del robot!
:::

## Ensamblaje de Hardware

### Guía de Ensamblaje Detallada

#### Documentos y Videos de Ensamblaje

##### 📄 Documentos de Ensamblaje
- [📗 Manual de Ensamblaje Detallado (Versión en Inglés)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLegRobot_NewVersion_Controller_Instructions.en.docx)
- [📘 Manual de Ensamblaje Detallado (Versión en Chino)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/LargeWheelLegRobot_NewVersion_Controller_Instructions.zh.docx)
- [📋 Lista de Materiales BOM (Versión en Chino)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_Chinese.xlsx)
- [📋 Lista de Materiales BOM (Versión en Inglés)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_English.xlsx)

##### 🔧 Herramientas de Desarrollo
- [⚙️ Tutorial de Configuración del Entorno VSCode + PIO](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/Environment%20Configuration%20Tutorial.docx)
- [📦 Kit de Herramientas MingW64](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/mingw64.7z)
- [🔌 Guía de Instalación del Driver CH340](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH340_install.docx)
- [💾 Paquete del Driver CH340](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH341SER.ZIP)

##### 💻 Firmware y Programas
- [⚡ Herramienta de Flasheo de Firmware S1](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/S1_Firmware_Flashing_Tool.zip)
- [🔧 Programa de Controlador Más Reciente](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_New_version.zip)
- [🔧 Programa de Depuración de Articulaciones](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_lagency.zip)
- [🖼️ Capturas de Pantalla de Depuración del Programa](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/picture/)

##### 📚 Documentación Técnica
- [🔩 Descripción del Control del Motor de Articulación](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF-MOTOR_CONTROL.md)
- [📦 Paquete de Documentación del Motor de Articulación](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF_Motor.zip)

##### 🗂️ Modelos 3D y Esquemas
- [📐 Modelo 3D del Robot (Formato STP)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/large_wheel_leg_robot_model_files/stackforce000_asm.stp)
- [🔌 Esquema de la Placa de Control Principal](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/StackForce_Main_Control_Board.pdf)
- [🔌 Esquema de la Placa de Expansión CAN/485](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/SCH_StackForce_CAN_485.pdf)
- [🔌 Esquema del Módulo IMU del Servo](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/Multi_Servo_IMU_Module.pdf)

##### 🎥 Tutoriales en Video

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114124914695505&bvid=BV12c9RYuEzw&cid=28754184592&p=2"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>


### Pasos de Ensamblaje Detallados

#### Fase 1: Construcción del Marco Mecánico
- Ensamblar estructura base
- Instalar componentes de rueda-pata
- Conectar marco del cuerpo principal

#### Fase 2: Integración del Sistema Electrónico
- Instalar sistema de control principal (placas S1/S3)
- Configurar módulos de sensores
- Configurar interfaces de comunicación

#### Fase 3: Depuración del Sistema
- Ejecutar autocomprobación de hardware
- Verificar funcionalidad del sistema

## Conclusión

El Robot Bípedo con Ruedas Gigante StackForce representa el último nivel de desarrollo de la tecnología de robots con ruedas y patas. Estamos comprometidos a proporcionar a los desarrolladores las herramientas más potentes y el soporte más completo para avanzar juntos en el desarrollo de la tecnología robótica.

Ya seas estudiante, investigador o ingeniero, StackForce puede proporcionarte una plataforma innovadora con posibilidades ilimitadas. ¡Esperamos ver las aplicaciones increíbles que crees!

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
