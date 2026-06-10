---
description: Primeros pasos con Atom-X.
title: Primeros pasos con Atom-X
keywords:
  - Humanoid
  - Robotics
  - Atom X
  - XIAO ESP32-S3
  - Servo
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp
slug: /atom_x
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/es/atom_x/
---

import Link from '@docusaurus/Link';

# Primeros pasos con Atom-X
## Introducción
Atom X es un kit de robot humanoide bípedo de código abierto con 17 grados de libertad (DOF), diseñado para desarrolladores de robótica, makers e instituciones educativas. El robot está impulsado por 17 servomotores de bus Fashionstar RA8-U25H-M y cuenta con una estructura totalmente impresa en 3D y de código abierto. Está equipado con un controlador principal Seeed Studio XIAO ESP32-S3 y una placa de expansión Grove, con firmware de control completo preinstalado de fábrica. Su editor visual de movimiento basado en la Web admite depuración en tiempo real en el navegador, programación por enseñanza y exportación JSON, lo que facilita el desarrollo secundario multiplataforma. La placa adaptadora RUC-01 incluida proporciona una fuente de alimentación regulada e interfaces UART, y admite control remoto por Bluetooth/Web. Listo para usar nada más sacarlo de la caja, es una plataforma ideal para la verificación de algoritmos de movimiento y el desarrollo de robots de escritorio.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Atom-X-17-DOF-Open-Source-Robot-Kit-p-6712.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## 1. Introducción al producto

- **Configuración de DOF**: 17 DOF en total, que cubren las articulaciones de brazos, torso y piernas.
- **Estructura y apariencia**: Estructura totalmente impresa en 3D con archivos de modelo STP/STL oficialmente de código abierto, lo que facilita el reemplazo de piezas, el refuerzo estructural y el rediseño exterior.
- **Actuadores de articulación**: Servomotores de bus Fashionstar RA8-U25H-M × 17 (admiten comunicación por bus con cableado simplificado).
- **Editor visual de movimiento Web**: Proporciona una plataforma de control basada en navegador que no requiere instalación, y admite depuración de servos en tiempo real y programación en modo de enseñanza. Los grupos de movimiento completados se pueden exportar como archivos en formato estándar `.json` para facilitar el análisis e integración por diversos controladores principales (como Arduino, STM32, Raspberry Pi).
- **Listo para usar nada más sacarlo de la caja**: Preconfigurado con el Seeed Studio XIAO ESP32-S3 como controlador principal, con programas de demostración de fábrica proporcionados.
- **Expansión multimódulo**: Emparejado con la placa de expansión Seeed Studio XIAO que incorpora interfaces Grove para conectar sensores/módulos de control de la serie Seeed Grove.
- **Capacidad de expansión del ecosistema**: A través de las interfaces Grove de la placa de expansión Seeed Studio XIAO, se pueden integrar rápidamente sensores y módulos de control del ecosistema Grove para visión, percepción ambiental y otros.
- **Compatibilidad multiplataforma**: Para reducir el umbral de desarrollo, proporcionamos la placa adaptadora RUC-01 con salida de alimentación integrada de 5V/3.3V e interfaces UART. ¡Cualquier controlador con funcionalidad de puerto serie puede comunicarse con ella!

## 2. Especificaciones

| Parámetro | Valor |
|---|---|
| Grados de libertad (DOF) | 17 |
| Chasis | Impreso en 3D |
| Servomotores | Servomotores de bus RA8-U25H-M |
| Placa de interfaz de alimentación de servos | RUC-01 proporciona 4 interfaces de servo, fuente de alimentación de 5V/3.3V para la placa de control, interfaz de comunicación serie (interfaz Grove) |
| Controlador principal | Seeedstudio XIAO ESP32-S3 + placa de expansión Seeed Studio XIAO |
| Protocolo de comunicación | Comunicación serie asíncrona (UART) |
| Dimensiones | 200×122×389 mm |

## 3. Lista de piezas

| Ítem | Cantidad |
| ---------------------- | ---- |
| Conjunto de robot de 17 DOF | 1 |
| Tornillos KM M2*7mm | 10 |
| Tornillos KB M2*7mm | 10 |
| Tornillos PM M3*6mm | 2 |
| Cable de servo 200mm 3 pines | 2 |

:::tip
**El conjunto de robot de 17 DOF incluye**

- RA8-U25H-M × 17
- Piezas estructurales del robot (juego) × 1
- Placa adaptadora RUC-01 × 1
- Seeed XIAO ESP32-S3 × 1
- Placa de expansión Seeed XIAO × 1
  :::

## 4. Dimensiones

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/dimensions.png" />
</div>




## 5. Arquitectura de hardware

### Unidad y gestión de energía (placa de interfaz RUC-01)

Sirviendo como el centro de alimentación del robot, el módulo de Unidad y Gestión de Energía (placa de interfaz RUC-01) es responsable de la gestión de la comunicación por bus y la distribución de energía:

- **Comunicación de servos**: 4 interfaces de servos de bus integradas (admiten expansión en cadena) responsables de la transmisión de señal y alimentación a los 17 servomotores de bus.
- **Interfaz de depuración para PC**: Puerto USB Type-C integrado para conexión directa a un host PC para la edición y depuración de grupos de movimiento.
- **Fuente de alimentación del sistema**: Gestiona la conversión de voltaje y proporciona una entrada de alimentación estable a la placa controladora principal.
- **Interfaz de comunicación**: Proporciona un puerto serie UART estándar para recibir comandos de control de la placa controladora principal de nivel superior.

### Controlador lógico principal y expansión (MCU + Grove Shield)

Sirviendo como el "cerebro" del robot, el Controlador lógico principal y expansión (MCU + Grove Shield) es responsable de ejecutar algoritmos de control y procesar datos de sensores:

- **Controlador central**: Utiliza la placa de desarrollo de la serie Seeed Studio XIAO, compacta en tamaño pero potente en rendimiento.
- **Expansión del ecosistema**: Emparejada con una placa de expansión con interfaz Grove que proporciona abundantes interfaces de propósito general.
- **Funciones principales**: Ejecuta programas de cinemática del robot y se conecta sin problemas a varios sensores (como módulos ultrasónicos, de visión, de voz, etc.) a través de interfaces Grove para lograr funciones interactivas complejas.

### Descripción del flujo de datos

**Modo de depuración/edición (Debug Mode)**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

Descripción: Ajusta directamente los ángulos de los servos y guarda grupos de movimiento mediante el software de PC, omitiendo el controlador principal XIAO.

**Modo autónomo (Autonomous Mode)**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

Descripción: El controlador principal XIAO controla de forma autónoma las acciones del robot en función de la retroalimentación de los sensores o del código prealmacenado.



## 6. Estructura mecánica

- Visualización de la estructura del robot y numeración predeterminada de ID de servos

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/servo_id_layout.webp" />
</div>

- Postura del robot cuando todos los servomotores están a cero grados
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/zero_degree_pose.png" />
</div>


## 7. Planos y descargas de modelos

Para obtener los datos completos de impresión 3D, visita: [MakerWorld - Atom X](https://makerworld.com/zh/models/2534886-atom-x-robot#profileId-2790112)

:::tip
Más adelante proporcionaremos gradualmente videos de montaje más completos e instrucciones ilustradas. Mantente atento a las actualizaciones en esta página.
:::


## 8. Guía de conexión

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/board_connection_diagram.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/internal_wiring.webp" />
</div>


## 9. Instrucciones de uso
:::tip
Consulta el manual de usuario de Atom-S para el uso de Atom-X. Todas las operaciones son idénticas a las de Atom-S.
:::

<div style={{textAlign: 'center'}}>
    <Link to="/atom_s#8-running-your-first-demo" style={{display: 'inline-block', width: '200px', height: '40px', lineHeight: '40px', backgroundColor: '#007bff', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ Iniciar una demostración
    </Link>
</div>

## Preguntas frecuentes

## P1: ¿Qué batería se debe usar con el Atom-X?

R: Se recomienda una batería Li-Po 2S o 3S, utilizada con un conector XT60.

## P2: ¿Se pueden usar otras placas controladoras principales en lugar de la XIAO ESP32-S3?

R: El diseño está optimizado para la XIAO ESP32-S3, pero cualquier placa de desarrollo ESP32 con suficientes GPIO se puede adaptar modificando el código.

## P3: ¿Cómo actualizo el firmware?

R: Conecta la XIAO ESP32-S3 a tu ordenador mediante USB y sube el nuevo programa usando Arduino IDE o PlatformIO.
