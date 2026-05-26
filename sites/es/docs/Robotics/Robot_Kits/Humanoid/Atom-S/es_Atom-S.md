---
description: Primeros pasos con Atom-S.
title: Primeros pasos con Atom-S
keywords:
  - Humanoide
  - Robótica
  - Atom S
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp
slug: /atom_s
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/es/atom_s/
---

# Primeros pasos con Atom-S

## Introducción
El Atom-S es un kit de robot humanoide bípedo de 10 GDL (Grados de Libertad) de código abierto, diseñado para desarrolladores, makers e instituciones educativas. El robot está impulsado por diez servos de bus Fashionstar RA8-U25H-M, cuenta con una estructura totalmente impresa en 3D y está equipado con un controlador principal Seeed Studio XIAO ESP32-S3 y una placa de expansión Grove. Viene con firmware de control completo preinstalado de fábrica. Su punto fuerte principal es el editor visual de movimiento basado en la web y sin instalación: puedes depurar servos en tiempo real, grabar movimientos por enseñanza y exportar JSON directamente a través de un navegador, lo que facilita su reproducción en plataformas como Arduino, STM32 y Raspberry Pi. La placa adaptadora RUC-01 incluida proporciona alimentación regulada de 5 V / 3,3 V y una interfaz UART, compatible con control remoto por Bluetooth y web. Listo para usar nada más sacarlo de la caja, es una plataforma ideal para el desarrollo de robótica de escritorio y la verificación de algoritmos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Atom-S-p-6711.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## 1. Introducción al producto

- **Distribución de GDL**: El robot cuenta con 10 grados de libertad que cubren los brazos, el torso y las piernas.
- **Estructura y apariencia**: Estructura totalmente impresa en 3D con archivos de modelo STP / STL oficialmente de código abierto, lo que facilita el reemplazo de piezas, el refuerzo estructural y el rediseño estético.
- **Actuadores de articulación**: Diez servos de bus Fashionstar RA8-U25H-M con comunicación por bus para un cableado limpio y simplificado.
- **Editor de movimiento web**: Panel de control basado en navegador que admite depuración de servos en tiempo real y programación en modo enseñanza. Los grupos de movimiento completados pueden exportarse como archivos `.json` estándar para un análisis sencillo en plataformas Arduino, STM32 y Raspberry Pi.
- **Listo para usar**: Se envía con el Seeed Studio XIAO ESP32-S3 como controlador principal predeterminado, con programas de demostración pregrabados de fábrica.
- **Expansión multimódulo**: En combinación con la placa de expansión Seeed Studio XIAO, la interfaz Grove integrada permite la conexión de sensores y controladores Seeed Grove.
- **Compatibilidad multiplataforma**: La placa adaptadora RUC-01 proporciona salida de alimentación de 5 V / 3,3 V y una interfaz UART; cualquier controlador con capacidad de puerto serie puede comunicarse con ella.
- **Extensibilidad del ecosistema**: Aprovechando las interfaces Grove de la placa de expansión Seeed Studio XIAO, se pueden integrar rápidamente visión, sensores ambientales y otros sensores y módulos de control del ecosistema Grove.
- **Compatibilidad multiplataforma**: La placa adaptadora de control estándar RUC-01 proporciona salida regulada de 5 V / 3,3 V y una interfaz de comunicación UART universal, lo que facilita la conexión de plataformas externas Raspberry Pi, STM32, Arduino, ESP32 o PC.

## 2. Especificaciones

| Parámetro | Valor |
| --------------- | ---------------------------------------------------------------- |
| Grados de Libertad (GDL) | 10 |
| Chasis | Impreso en 3D |
| Servos | Servo de bus RA8-U25H-M |
| Placa de alimentación / interfaz de servos | RUC-01, que proporciona 4 puertos de servos de bus, alimentación de controlador de 5 V / 3,3 V y serie (Grove) |
| Controlador principal | Seeed Studio XIAO ESP32-S3 + placa de expansión Seeed Studio XIAO |
| Comunicación | Comunicación serie asíncrona (UART) |
| Dimensiones | 154 × 105 × 283 mm |

## 3. Lista de materiales

| Ítem | Cantidad |
| ------------------------- | ---- |
| Robot de 10 GDL (ensamblado) | 1 |
| Tornillo KM M2 × 7 mm | 10 |
| Tornillo KB M2 × 7 mm | 10 |
| Tornillo PM M3 × 6 mm | 2 |
| Cable de servo 200 mm 3 pines | 2 |

:::tip
**El ensamblaje del robot de 10 GDL incluye**

- RA8-U25H-M × 10
- Piezas estructurales (kit) × 1
- Placa adaptadora RUC-01 × 1
- Seeed XIAO ESP32-S3 × 1
- Placa de expansión Seeed XIAO × 1

:::

## 4. Dimensiones externas

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/dimensions.png" />
</div>

---

## 5. Arquitectura de hardware

### Accionamiento y alimentación (placa de interfaz RUC-01)

Sirviendo como el centro de alimentación y comunicación de todo el robot, se encarga de la gestión del bus y la distribución de energía:

- **Bus de servos**: Cuatro puertos de servos de bus integrados que admiten expansión en cadena, transportando tanto señal como alimentación.
- **Interfaz de configuración para PC**: USB Type-C, que permite la conexión directa a un host PC para configuración.
- **Alimentación del sistema**: Gestiona la conversión de voltaje para proporcionar energía estable a la placa controladora principal.
- **Interfaz de comunicación**: Puerto serie UART estándar para recibir comandos del controlador principal de nivel superior.

### Controlador lógico y expansión (MCU + placa de expansión Grove)

El "cerebro" del robot, responsable de ejecutar algoritmos de control y procesar datos de sensores:

- **MCU central**: Placa de desarrollo de la serie Seeed Studio XIAO, compacta pero potente.
- **Expansión del ecosistema**: La placa de expansión Grove expone un conjunto rico de interfaces de E/S.
- **Funciones principales**: Ejecuta programas de cinemática del robot y conecta sensores (ultrasónicos, de visión, de voz, etc.) a través de interfaces Grove para lograr capacidades interactivas.

### Flujo de datos

**Modo de depuración / edición**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

*Descripción: Los ángulos de los servos se ajustan y los grupos de movimiento se guardan directamente mediante el software de PC sin pasar por el controlador principal XIAO.*

**Modo de ejecución autónoma**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

*Descripción: El XIAO controla el robot de forma autónoma en función de la retroalimentación de los sensores o del código prealmacenado.*

### Referencia de interfaz de comunicación universal (lectura obligatoria para desarrollo multiplataforma)

Aunque el kit utiliza el XIAO ESP32S3 como controlador principal predeterminado, la placa de interfaz RUC-01 está abierta a cualquier controlador externo. Solo se requieren cuatro cables entre el controlador principal y la RUC-01 para la comunicación básica:

- **5 V / 3,3 V**: La RUC-01 puede retroalimentar energía estable al controlador principal.
- **GND**: Tierra común.
- **RX / TX**: Comunicación serie asíncrona estándar (UART) para enviar/recibir comandos de control y leer la retroalimentación de los servos.


| Nº | Descripción de la interfaz | Nº | Descripción de la interfaz |
| ---- | ------------------------------------ | ---- | ----------------------------------------------------- |
| ① | Interruptor principal de alimentación | ⑤ | UART de comunicación de la placa adaptadora / Interfaz Grove (se conecta al controlador principal ⑧) |
| ② | Puerto de entrada de alimentación | ⑥ | Puerto de datos Type-C del controlador principal ESP32S3 (descarga de firmware) |
| ③ | Puerto de servos × 4 | ⑦ | Placa controladora principal Seeed XIAO ESP32S3 |
| ④ | Puerto de datos Type-C (depuración de servos, se conecta al PC) | ⑧ | UART de comunicación del controlador principal / Interfaz Grove (se conecta a la placa de interfaz RUC-01 ⑤) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/hardware_interface.webp" />
</div>

:::warning
El interruptor de palanca cerca del puerto Type-C ④ en la placa de interfaz RUC-01, así como los dos puertos Type-C que se muestran en el lado izquierdo del diagrama, están reservados para otros fines y **no** se utilizan en este proyecto. Evita operarlos por error.
:::

## 6. Estructura mecánica

- Visión general de la estructura e IDs de servos predeterminados

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/servo_id_mapping.webp" />
</div>

- Posición de cero grados de todos los servos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/zero_pose.png" />
</div>

---

## 7. Planos y descargas de modelos

Para obtener los datos completos de impresión 3D, visita: [MakerWorld - Atom S](https://makerworld.com/zh/models/2394805-atom-s#profileId-2624069)

:::tip
Iremos proporcionando gradualmente vídeos de montaje más completos e instrucciones ilustradas; permanece atento a las actualizaciones de esta página.
:::

## 8. Ejecutar tu primera demostración

### Guía rápida de inicio listo para usar

:::tip
El Atom S sale de fábrica con el programa de control base grabado y el montaje inicial completado. Simplemente prepara una fuente de alimentación y un teléfono inteligente para experimentar rápidamente los movimientos del robot y las funciones de control remoto.
:::

### Preparación de la alimentación de hardware

Debido a las restricciones de envío, el kit no incluye una batería de forma predeterminada. Antes de comenzar, prepara una batería compatible y conéctala al puerto de alimentación en la parte posterior del robot:

- **Especificación de la batería**: Batería Li-Po (polímero de litio) 3S 12,6 V
- **Tipo de conector de la batería**: T-Plug
- **Comprobación de encendido**: Después de conectar la alimentación, el LED indicador en la placa controladora principal (XIAO ESP32S3) se encenderá, indicando que el sistema se ha iniciado.

### Conexión del controlador remoto web

Activa Bluetooth en tu teléfono inteligente o PC con Bluetooth y elige un navegador compatible según tu sistema operativo. Dado que el control remoto web se basa en la API Web Bluetooth subyacente, la compatibilidad del navegador es fundamental:

- **PC (Windows / macOS)**: Utiliza Google Chrome o Microsoft Edge.
- **Android**: Utiliza Google Chrome; no uses el navegador predeterminado del sistema ni abras mediante el escaneo de WeChat.
- **iOS**: Safari, Chrome y Edge no admiten Web Bluetooth. Descarga desde la App Store un navegador de terceros que admita el protocolo WebBLE, como Bluefy.

**URL de acceso**: [Remote Controller](https://wiki.fashionrobo.com/ps2v2/)

- Desconectado:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_disconnected.png" />
</div>

- Toca el botón **SYSTEM LINK** en la parte superior de la interfaz para buscar y conectarte al dispositivo:
- En la lista de dispositivos Bluetooth que aparece, selecciona el dispositivo llamado **ESP32_Pro_Remote** y toca Emparejar.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_pairing.png" />
</div>

- Conectado: Una vez conectado, el robot realizará automáticamente un movimiento de "reverencia" y volverá a la postura de pie predeterminada, indicando que el sistema está listo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_connected.png" />
</div>

### Comienza tu primera secuencia de enseñanza de movimiento continuo

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_layout.webp" />
</div>

Usando el gamepad virtual web, puedes enseñar rápidamente al robot una secuencia de movimiento continuo sin escribir ningún código:

- **Preparación**: Toca el botón **HOME** en la esquina superior izquierda para asegurarte de que el robot esté en la postura inicial estándar de pie.
- **Desbloquear articulaciones**: Toca el botón **RELAX** en la esquina superior izquierda para poner el robot en modo de amortiguación. En este punto, todos los servos están desenergizados, lo que te permite mover manualmente cada articulación.
- **Registrar el primer fotograma**: Coloca manualmente al robot y luego toca la tecla direccional **Izquierda ◀** para registrar la postura actual.
- **Registrar fotogramas posteriores**: Continúa cambiando la postura del robot y toca **Izquierda ◀** de nuevo. Repite este proceso para registrar una secuencia de fotogramas de movimiento; se admiten hasta 100 fotogramas por defecto.
- **Reproducir la secuencia de movimiento**: Después de registrar todas las posturas, toca la tecla direccional **Derecha ▶**, y el robot reproducirá suavemente todos los movimientos registrados.
- **Ajustar la velocidad de reproducción**: Si la reproducción es demasiado rápida o demasiado lenta, toca **Arriba ▲** (acelerar) o **Abajo ▼** (ralentizar) para ajustar la velocidad del movimiento.
- **Demostración con una tecla**: Toca el botón **Cuadrado □** a la derecha para reproducir directamente el movimiento de demostración predeterminado de fábrica.

:::tip
Si has completado la experiencia rápida y deseas exportar aún más el JSON de movimiento, modificar la lógica del controlador principal o conectar otros controladores, continúa leyendo las siguientes secciones.
:::

## 9. Flujo de trabajo principal para el desarrollo de movimientos personalizados

### Diseño de posturas y exportación de datos (Editor de movimiento web)

- **Conectar y leer**: Conéctate a la placa de interfaz RUC-01 a través de un navegador de PC para leer en tiempo real los estados de los servos del robot.

  [Motion Editor](https://wiki.fashionrobo.com/uartbasic/robotstudiopro/)
- **Desbloquear y enseñar**: Desenergiza los servos al modo de amortiguación con un clic, mueve manualmente el robot y registra la postura de cada fotograma.
- **Organizar y ajustar**: Ajusta el tiempo de ejecución y el intervalo entre fotogramas clave, y reproduce en tiempo real dentro del software para optimizar la fluidez del movimiento.
- **Exportar JSON**: Después de confirmar que el movimiento es correcto, exporta todo el grupo de movimiento como un archivo `.json` estándar.

### Integración de datos y flasheo de firmware (Controlador principal ESP32)

- **Código abierto**: Abre el código fuente del proyecto del controlador principal ESP32 incluido en Arduino IDE.
- **Reemplazar código**: Copia por completo los datos `.json` exportados y reemplaza el contenido de la variable `jsonData` existente en el archivo `Robot.ino`.
- **Compilar y flashear**: Vuelve a compilar el proyecto y flashea el firmware actualizado en la placa del controlador principal ESP32S3.

### Control remoto inalámbrico y ejecución disparada (Terminal remota web)

- **Conexión inalámbrica**: Abre el control remoto web del teléfono en [Remote Controller](https://wiki.fashionrobo.com/ps2v2/) y empareja con el robot.
- **Disparo con una tecla**: Toca el botón **Cuadrado □** en la interfaz (comando `0x10`), y el robot ejecutará de forma autónoma y continua la secuencia de movimiento recién diseñada sin el cable de datos.

### Guía del Editor de movimiento

#### Diseño del editor

Tres módulos principales:

1. Conexión/desconexión del puerto serie y estado de mensajes
2. Consulta y control del estado/ángulo de los servos
3. Optimización del grupo de movimiento e importación/exportación

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_layout.webp" />
</div>

#### Referencia de control

Conectar / desconectar puerto serie

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_connect.png" />
</div>

Página de postura en tiempo real

- **Diseño**: Arrastra cada control de servo en el lienzo para organizar las partes del robot; los ID se corresponden uno a uno; haz clic para bloquear el diseño.
- **Escanear**: Volver a escanear todos los servos en línea.
- **Comprobar**: Protección de sobrevoltaje / bajo voltaje, bloqueo y otros estados anormales.
- **Leer una vez**: Leer el ángulo actual una vez.
- **Color de estado**: Verde = control de ángulo; Rojo = liberado / amortiguación.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_realtime_posture.png" />
</div>

Control de ángulo mediante arrastre:

- **Lectura en tiempo real**: Leer continuamente los ángulos de los servos.
- **Velocidad**: Limitar la velocidad durante el arrastre para evitar movimientos excesivos.
- **Modo de desbloqueo**: Liberar los servos para la enseñanza (liberación por corte de energía / liberación por amortiguación).

<div align="center">
    <img width={800}
    src="C:\Users\seeed\Desktop\Atom-S-Final\images2\servo_angle_control.webp" />
</div>

Página de grupo de movimiento

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_1.png" />
</div>

A continuación se explica cada botón:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_2.png" />
</div>


#### Del editor al movimiento offline (XIAO ESP32S3 Sense)

- **1.** Haz clic en "Connect" para abrir el puerto serie.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/connect_serial_port.png" />
</div>

- **2.** Selecciona el puerto serie de destino.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/select_serial_port.webp" />
</div>

- **3.** Escanea todos los servos del robot.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/scan_all_servos.webp" />
</div>

- **4.** Haz clic en "Release All" para desenergizar todos los servos para el posicionamiento manual, o desbloquea solo los servos que necesites.
- **5.** Configura "Time" e "Interval".
- **6.** Después de cada edición, haz clic en "Add Current" para añadirla al grupo.
- **7.** Reproduce para verificar.

:::info
**Nota**

Cada fotograma de movimiento puede editarse individualmente (ángulo, tiempo, intervalo) y verificarse.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/edit_action_frame.webp" />
</div>

- **8.** Haz clic en "Export (JSON)" para exportar el grupo de movimiento.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/export_action_group.webp" />
</div>

- **9.** Abre el JSON exportado y copia el contenido de `frames` (incluyendo los corchetes externos `[]`).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/copy_json_frames.webp" />
</div>

- **10.** Reemplaza el `jsonData` en el programa con el contenido copiado; después de compilar y flashear, el robot puede controlarse mediante el gamepad Bluetooth (consulta "Parámetros de control del robot" para más detalles).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/replace_jsondata_code.png" />
</div>

### Parámetros de control del robot (ajustar según sea necesario)

#### Valores predeterminados

- `BAUDRATE`: Velocidad en baudios de UART.
- `SERVO_NUM`: Número de servos.

```
#define BAUDRATE               115200     /* Baud rate */
#define SERVO_NUM              10         /* Total number of servos */
```

#### Bluetooth (si se usa)

- `BLE_NAME`: Nombre del gamepad.
- `BLE_UUID`: UUID del gamepad.

```
/* Bluetooth settings -- modify according to actual conditions */
#define BLE_NAME               "LOOKBON"  /* Bluetooth name */
#define BLE_UUID               "AE02"     /* ID for Bluetooth data reception */
```

#### Control remoto web (si se usa)

- `SERVICE_UUID`: ID de servicio.
- `CHARACTERSTIC_UUID`: ID de característica.

```
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID           "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID    "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

#### Modo de enseñanza

- `MAX_ACTIONNUM`: Número máximo de fotogramas de movimiento permitidos en el modo de enseñanza.
- `Default_RobotRunSpeed_Demonstration`: Velocidad de ejecución predeterminada.
- `MIN_RobotRunSpeed_Demonstration`: Velocidad de ejecución más lenta.
- `MAX_RobotRunSpeed_Demonstration`: Velocidad de ejecución más rápida.
- `Adjust_RobotRunSpeed_Step`: Valor de paso de ajuste de velocidad en modo de enseñanza (±200 por paso).

```
#define MAX_ACTIONNUM                         100   /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration   1000  /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration       5000  /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration       500   /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step             200   /* Step value for adjusting teaching run speed */
```

#### Campos de datos (personalizar según sea necesario)

- `RemoteControl_DefaultDemoAction`: Movimiento de demostración predeterminado (exportado desde el editor).
- `RemoteControl_Exe`: Comando de ejecución en modo de enseñanza.
- `RemoteControl_Record`: Comando de grabación en modo de enseñanza.
- `RemoteControl_Damping`: Comando de modo de amortiguación.
- `RemoteControl_Reset`: Comando de reinicio.
- `RemoteControl_ReduceRunSpeed`: Disminuir la velocidad de ejecución en modo de enseñanza.
- `RemoteControl_AddRunSpeed`: Aumentar la velocidad de ejecución en modo de enseñanza.

Nota sobre Bluetooth: Los datos reales del controlador dependen de tu dispositivo; define los botones en el código según sea necesario.

```
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0xA1   /* Default demonstration motion */
#define RemoteControl_Exe                     0xA2   /* Teaching mode execution command */
#define RemoteControl_Record                  0xA3   /* Record motion command */
#define RemoteControl_Damping                 0xA4   /* Damping mode command */
#define RemoteControl_Reset                   0xA5   /* Robot reset command */
#define RemoteControl_ReduceRunSpeed          0xA6   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0xA7   /* Increase teaching run speed */
```

Nota sobre el control remoto web: Del mismo modo, confirma los datos y las asignaciones de botones antes de la integración.

```
/* Web remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0x10   /* Default demonstration motion */
#define RemoteControl_Exe                     0x08   /* Teaching mode execution command */
#define RemoteControl_Record                  0x04   /* Record motion command */
#define RemoteControl_ReduceRunSpeed          0x02   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0x01   /* Increase teaching run speed */

#define RemoteControl_Damping                 0x04   /* Damping mode command */
#define RemoteControl_Reset                   0x08   /* Robot reset command */
```

#### Restablecer ángulos

- `ROBOT_RESET_POSITION_0` ~ `ROBOT_RESET_POSITION_9`: Posiciones cero para los servos con ID 0–9 (pose de reinicio del robot).

Nota: Modifica estos valores según la pose de reinicio de tu robot.

```
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 0;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = 0;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

### Referencia de control remoto

#### Gamepad Bluetooth

1. Mantén pulsado el botón de encendido del gamepad para encenderlo y emparejarlo con la MCU (XIAO_ESP32S3).
2. Tras el emparejamiento correcto, el robot hará una reverencia y se reiniciará.

Funciones de movimiento:

- "Run Motion": Ejecuta el movimiento integrado.
- "Reset Robot": Vuelve a la pose de reinicio.
- "Damping Mode": Entra en el estado de enseñanza donde las articulaciones se pueden mover libremente.
- "Record Teaching Motion": Registra el movimiento actual.
- "Execute Teaching Motion": Ejecuta el movimiento grabado (no se borra por defecto).
- "Decrease Teaching Speed": Reduce la velocidad de ejecución (el servo del brazo derecho con ID 6 oscila para indicar la velocidad).
- "Increase Teaching Speed": Aumenta la velocidad de ejecución (el servo del brazo derecho con ID 6 oscila para indicar la velocidad).

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_1.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_2.webp" />
</div>

## 10. Guía de flasheo del firmware del controlador principal estándar (basado en Seeed Studio XIAO ESP32S3)

:::tip
Esta sección solo se aplica al entorno estándar del controlador principal XIAO ESP32S3. Si tu proyecto usa STM32 o Raspberry Pi, consulta directamente el SDK de control de servos Fashionstar multiplataforma en el apéndice.
:::

### Configuración del entorno de desarrollo (Arduino IDE)

Descarga e instala la última versión de Arduino IDE desde la web oficial de Arduino; se recomienda Arduino IDE 2.x.

### Importar el paquete de soporte de hardware ESP32

Primero, abre las preferencias de Arduino IDE:

- Windows: `File > Preferences`
- macOS: `Arduino IDE > Settings...` o `Preferences...`

Introduce la siguiente URL en "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduino_preferences.png" />
</div>

### Despliegue del entorno de compilación ESP32 (requisito estricto de versión)

- Abre `Tools > Board > Boards Manager`
- Busca `esp32`
- Localiza el paquete proporcionado por `Espressif Systems`
- **Selecciona e instala manualmente la versión 3.3.5**

:::warning
**No** instales directamente la última versión. La combinación actual de Bluetooth y controlador de bus del proyecto requiere la versión 3.3.5; de lo contrario, la comunicación Bluetooth o por bus puede no compilar o funcionar de forma anómala.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/esp32_board_manager.webp" />
</div>

### Instalación de las bibliotecas necesarias (ArduinoJson y ArduinoBLE)

El sistema depende de las siguientes bibliotecas de terceros para el análisis JSON y los servicios Bluetooth:

- `ArduinoJson`
- `ArduinoBLE`

Método de instalación:

- Abre `Sketch > Include Library > Manage Libraries...`
- Busca e instala `ArduinoJson`
- Busca e instala `ArduinoBLE`

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinojson_library.png" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinoble_library.png" />
</div>

### Despliegue del SDK del controlador central de servos Fashion Star

Para garantizar la invocación correcta del controlador subyacente, el SDK oficial debe instalarse manualmente:

- Localiza `fashionstar-uart-servo-arduino-sdk-V2.rar` en el paquete de materiales incluido
- Extrae el archivo comprimido
- Copia la carpeta completa del SDK en el directorio de bibliotecas predeterminado de Arduino

**Ruta de biblioteca predeterminada**:

- Windows: `C:\Users\Username\Documents\Arduino\libraries`
- macOS: `~/Documents/Arduino/libraries`

Después de copiar, cierra por completo y vuelve a abrir Arduino IDE para que recargue las bibliotecas locales.

### Selección de la placa y compilación / flasheo

- Conecta la XIAO ESP32S3 a tu ordenador con un cable de datos Type-C
- Abre `Tools > Board > esp32` y selecciona `XIAO_ESP32S3`
- Abre `Tools > Port` y selecciona el puerto correspondiente a la placa del controlador principal

Los nombres de los puertos suelen aparecer como:

- Windows: `COM3`, `COM5`, etc.
- macOS: `/dev/cu.usbmodem...` o `/dev/cu.usbserial...`

Por último, abre el código fuente del proyecto (`.ino`) en Arduino IDE, haz clic en el botón Upload en la esquina superior izquierda y espera a que la consola muestre "Upload successful".

---

## 11. Especificación de configuración de parámetros de control de bajo nivel (basado en el controlador principal estándar Seeed Studio XIAO ESP32S3)

Después de abrir el código fuente del proyecto en Arduino IDE, se pueden modificar las siguientes definiciones de macros y constantes según los requisitos reales del proyecto. Confirma en qué archivo se encuentra cada parámetro para evitar cambios accidentales.

### Parámetros básicos de hardware
Ubicado en `Control.h`

- `BAUDRATE`: Velocidad en baudios del puerto serie para la comunicación entre el controlador principal y el RUC-01
- `SERVO_NUM`: Número total de servos del robot

```cpp
/* User-modifiable robot data area */
/* define */
#define BAUDRATE 115200 /* Baud rate */
#define SERVO_NUM 10    /* Total number of servos */
```

### Remapeo de pines físicos UART
Ubicado en `Robot.ino`

- `TX_PIN` / `RX_PIN`: Pines serie usados para la comunicación entre el ESP32S3 y la placa adaptadora RUC-01

```cpp
/* Serial1 -- GPIO D6 = GPIO43 D7 = GPIO44 */
#define TX_PIN 43
#define RX_PIN 44
```

### Parámetros de comunicación Bluetooth del control remoto web
Ubicado en `Robot.ino` y `Control.h`

- `BLE_NAME`: Nombre de difusión Bluetooth
- `SERVICE_UUID` / `CHARACTERISTIC_UUID`: UUID de servicio y UUID de característica de los que dependen el control remoto web y el controlador principal para establecer la comunicación

```cpp
/* Set Bluetooth name */
BLE.setLocalName("ESP32_Pro_Remote");
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

### Referencia de parámetros del modo de enseñanza
Ubicado en `Control.h`

- `MAX_ACTIONNUM`: Número máximo de fotogramas de movimiento que se pueden registrar en el modo de enseñanza
- `Default_RobotRunSpeed_Demonstration`: Velocidad de ejecución predeterminada
- `MIN / MAX_RobotRunSpeed_Demonstration`: Límites superior e inferior para el ajuste de velocidad
- `Adjust_RobotRunSpeed_Step`: Valor de paso para cada aumento o disminución de velocidad

```cpp
#define MAX_ACTIONNUM 100                        /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration 1000 /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration 5000     /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration 500      /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step 200            /* Step value for adjusting teaching run speed */
```

### Definiciones de macros de datos de botones y comandos
Ubicado en `Control.h`

En la comunicación remota inalámbrica, el control remoto web empaqueta los estados de los botones en dos variables independientes:

- `btn_Main`: Botones del área de operación principal
- `btn_border`: Botones del área de control del sistema

Por lo tanto, algunos comandos hexadecimales pueden aparecer en ambas áreas, pero corresponden a variables diferentes y no entrarán en conflicto.

```cpp
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
/* The following commands correspond to btn_Main (red hexadecimal labels in the mapping diagram) */
#define RemoteControl_DefaultDemoAction 0x10 /* Default demonstration motion command (Square button) */
#define RemoteControl_Exe               0x08 /* Teaching mode execution command (D-pad Right) */
#define RemoteControl_Record            0x04 /* Record motion frame command (D-pad Left) */
#define RemoteControl_ReduceRunSpeed    0x02 /* Decrease teaching run speed (D-pad Down) */
#define RemoteControl_AddRunSpeed       0x01 /* Increase teaching run speed (D-pad Up) */

/* The following commands correspond to btn_border (yellow hexadecimal labels in the mapping diagram) */
#define RemoteControl_Damping           0x04 /* Damping / release mode command (RELAX button) */
#define RemoteControl_Reset             0x08 /* Robot reset command (HOME button) */
```

### Área de montaje de datos de grupos de movimiento
Ubicado en `Robot.ino`

Copia los datos `.json` exportados desde el editor de movimientos en la variable `jsonData`, manteniendo `R(` y `)`;`:

```cpp
/* Default demonstration motion */
const char* jsonData = R"(
[
  // Paste the JSON data exported from the motion editor here, completely replacing this section
  {"angles":[{"id":0,"angle":0},{"id":1,"angle":0} ... ],"time":2000,"delay":500}
]
)";
```

### Tamaño de asignación del búfer JSON
Ubicado en `Control.cpp`

Si la secuencia de movimiento es demasiado larga, puede causar memoria de ejecución insuficiente o fallo en el análisis JSON. En este caso, la capacidad de `DynamicJsonDocument` se puede aumentar adecuadamente:

```cpp
/* Create a JSON document object with sufficient space allocated */
DynamicJsonDocument doc(4096);
```

Auméntalo a `8192` o más según sea necesario, dependiendo de la complejidad del movimiento.

### Parámetros de ángulo de reinicio del robot y compensación de punto cero
Ubicado en `Control.h`

`ROBOT_RESET_POSITION_0 ~ 9`: Corresponden respectivamente a los ángulos iniciales cero de los servos con ID del 0 al 9

:::tip
Debido a las tolerancias de montaje mecánico, la posición cero absoluta de cada robot puede variar ligeramente. Se recomienda ajustar y compensar finamente estos parámetros después de verificar la postura de pie del robot.
:::

```cpp
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 90;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = -90;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

## 12. Diccionario de funciones del terminal web remoto y mapeo de bajo nivel

:::tip
Para la compatibilidad del navegador y los pasos básicos de emparejamiento Bluetooth, consulta primero el Capítulo 2 de este documento. Este capítulo explica principalmente la distribución de botones en la interfaz de control y las relaciones de mapeo hexadecimal subyacentes para facilitar el desarrollo secundario posterior.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_keys.webp" />
</div>

### Área de control del sistema
Variable de código correspondiente: `btn_border`

Esta área se encuentra principalmente en la parte superior y los bordes de la interfaz, y se utiliza para controlar el estado global del robot:

- **HOME** (`0x08`): Interrumpe el movimiento actual, restaura el robot a la postura de pie calibrada por defecto y borra los datos de enseñanza actualmente en memoria
- **RELAX** (`0x04`): Entra en modo de amortiguación / liberación, liberando el par de sujeción de todos los servos para facilitar la enseñanza manual
- **Otros botones con etiqueta amarilla**: Como `L1`, `L2`, `R1`, `R2`, `L3`, `R3`, etc. No tienen ningún movimiento asignado en la demostración de fábrica actual y pueden ser ampliados por los desarrolladores según sea necesario

### Área de operación principal
Variable de código correspondiente: `btn_Main`

El área de operación principal contiene las teclas direccionales y las teclas de función del lado derecho, y es principalmente responsable de la coreografía y ejecución de movimientos:

- **D-pad Izquierda ◀** (`0x04`): Registra el fotograma de movimiento actual
- **D-pad Derecha ▶** (`0x08`): Reproduce la secuencia de movimiento actualmente grabada
- **D-pad Arriba ▲** (`0x01`): Aumenta la velocidad de ejecución
- **D-pad Abajo ▼** (`0x02`): Disminuye la velocidad de ejecución
- **Cuadrado □** (`0x10`): Ejecuta el movimiento `jsonData` por defecto prealmacenado en la Flash del controlador principal
- **Otros botones con etiqueta roja**: Como `△`, `○`, `×`, etc. Están sin definir en el firmware actual y se pueden mapear en el código de bajo nivel según sea necesario

## Preguntas frecuentes (FAQ)

> La página web de origen está en construcción; el contenido se añadirá cuando esté disponible.

### Preguntas frecuentes

**P1: ¿Qué batería se debe usar para el Atom-S?**

R: Se recomienda una batería Li-Po (polímero de litio) estándar 2S o 3S con conector XT60.

**P2: ¿Se puede reemplazar el XIAO ESP32-S3 por otro controlador principal?**

R: Este diseño está optimizado para el XIAO ESP32-S3, pero cualquier placa de desarrollo ESP32 con suficientes GPIO se puede utilizar con solo modificaciones menores.

**P3: ¿Cómo actualizo el firmware?**

R: Conecta el XIAO ESP32-S3 a tu ordenador mediante USB, abre Arduino IDE o PlatformIO y sube el nuevo programa.

**P4: ¿Dónde está el editor de movimientos?**

R: Se puede acceder al editor de movimientos web a través de un navegador. Para la operación detallada, consulta el Capítulo 7.1.

---

### Resolución de problemas comunes

#### Flasheo de firmware sin respuesta / estado bloqueado

- **Síntoma**: Arduino IDE informa `A fatal error occurred: Failed to connect`, o el proceso de carga se queda colgado
- **Solución**:
  - Mantén conectado el cable USB
  - Mantén pulsado el botón BOOT en la placa de desarrollo
  - Haz clic en el botón **Upload** en el IDE
  - Suelta el botón BOOT cuando la consola muestre `Connecting...` o comience a mostrar el progreso de la transferencia

#### El terminal web no puede enumerar dispositivos Bluetooth

- **Síntoma**: Después de hacer clic en "Find Device", la lista de dispositivos Bluetooth aparece vacía
- **Diagnóstico**:
  - Verifica que estés usando un navegador que admita la `Web Bluetooth API`
  - Usuarios de Windows: confirma que la versión del SO sea al menos Win10 (1703+)
  - Usuarios de macOS: revisa los ajustes de "Privacy & Security" del sistema para asegurarte de que el permiso de Bluetooth del navegador esté concedido

#### Articulaciones débiles / incapaces de mantener la posición

- **Síntoma**: El firmware se ejecuta con normalidad y la comunicación está establecida, pero el robot no puede soportar eficazmente una carga
- **Diagnóstico**:
  - Comprueba si la capacidad de carga y descarga de la batería 3S es suficiente
  - Comprueba si el cableado del bus está suelto o invertido
  - Si se han reemplazado servos, confirma que los 10 IDs de servo (0–9) coincidan con las definiciones del proyecto para evitar conflictos de ID
