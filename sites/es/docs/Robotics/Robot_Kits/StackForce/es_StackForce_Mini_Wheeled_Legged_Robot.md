---
description: Este wiki proporciona tutoriales de ensamblaje y puesta en marcha para el Robot Bípedo con Ruedas Mini StackForce, así como materiales de aprendizaje y enlaces necesarios para su desarrollo.
title: Robot Bípedo con Ruedas Mini StackForce
keywords:
  - StackForce
  - Robótica
image: https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp
slug: /stackforce_mini_wheeled_legged_robot
last_update:
  date: 12/8/2025
  author: LiShanghang
translation:
  skip:
    - zh-CN
createdAt: '2025-12-10'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/es/stackforce_mini_wheeled_legged_robot/
---

# Introducción al Robot Bípedo de Dos Ruedas Basado en la Plataforma de Desarrollo StackForce

:::tip
Este tutorial solo proporciona instrucciones de ensamblaje y depuración para ayudar a los desarrolladores a construir un robot de patas con ruedas completo lo más rápido posible. Si necesitas aprender los principios subyacentes de los robots de patas con ruedas, puedes consultar el [**video tutorial de Bilibili por DengGe**](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc). Para desarrollo secundario, puedes buscar tutoriales en otros sitios web o foros.
:::

<div class="video-container">
<iframe width="900" height="500" src="https://www.youtube.com/embed/8e2Q981ezBs?si=1n8j0nSHaYcwFrgX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introducción

El robot bípedo de dos ruedas StackForce está desarrollado basado en la plataforma de desarrollo de robótica ligera StackForce. Su hardware central está compuesto por la placa de control principal de la serie StackForce, la placa controladora de motor y la placa controladora de servo.

El robot incluye un modelo cinemático de cuerpo completo y un algoritmo de auto-estabilización adaptativo al estado. Con el poder de cómputo en tiempo real de la plataforma StackForce, soporta control multi-postura, auto-estabilización en terreno complejo, descenso de escaleras y movimiento estable en varias pendientes. La plataforma soporta transmisores RC, Bluetooth, comunicación serial y control inalámbrico. Los usuarios pueden programar y ajustar el sistema según sea necesario. El producto proporciona tutoriales de instalación completos y cursos en video, convirtiéndolo en un robot bípedo de dos ruedas de escritorio rentable.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/StackForce-Mini-Wheeled-Legged-Robot-p-6710.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Enlaces técnicos

- **Video tutorial de código abierto de DengGe en Bilibili:** [https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc)

- **Código de fuente abierta para el curso de robot de patas con ruedas:** [https://gitee.com/StackForce/bipedal_wheeled_robot](https://gitee.com/StackForce/bipedal_wheeled_robot)

- **Documentación para la plataforma de desarrollo de robótica ligera StackForce:** [http://stackforce.cc/#/](http://stackforce.cc/#/)

- **Proyectos de robots de código abierto para la plataforma de desarrollo de robótica ligera StackForce:** [https://gitee.com/StackForce](https://gitee.com/StackForce)

- **Aprendizaje de teoría y código del robot con ruedas y patas StackForce Mini** [https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_Mini_Wheeled_Legged_Robot/English/README.md](https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_Mini_Wheeled_Legged_Robot/English/README.md)

## Características Principales

1. **Código abierto y bajo costo**: Sigue una licencia de código abierto; todo el código fuente y archivos de diseño están completamente disponibles, permitiendo a los desarrolladores estudiar, modificar y realizar desarrollo secundario libremente.
2. **Control de motor de alto rendimiento**: Equipado con tecnología FOC (Control Orientado al Campo), soportando control de velocidad, posición y torque en bucle abierto/cerrado para control de movimiento preciso.
3. **Soporte de hardware potente**: Utiliza un controlador principal ESP32 con interfaces ricas como I2C, SPI y PWM, permitiendo expansión flexible de características.
4. **Capacidades integrales**: Soporta auto-equilibrio, movimiento de alta velocidad, estabilización de postura y control inalámbrico, adaptándose a varios terrenos complejos.
5. **Fácil de aprender y usar**: Viene con código de ejemplo completo y tutoriales en video, reduciendo significativamente la barrera de aprendizaje para principiantes.

## Especificaciones

| Especificación     | Detalles                                                  |
|--------------------|-----------------------------------------------------------|
| Placa de Control Principal | Placa de control principal StackForce                    |
| Placa Controladora de Motor | Controlador de motor sin escobillas de doble canal 5A (baja potencia) |
| Motores            | Motores sin escobillas de cardán 2208                     |
| Placa Controladora de Servo | Controlador de servo multicanal con IMU integrado         |
| Fuente de Alimentación | Batería de polímero de litio 12.6V                        |
| Codificador        | Codificador magnético de alta precisión MT6701 de 14 bits |
| Control Inalámbrico | Control remoto WiFi + controlador inalámbrico Bluetooth PS4 |
| Peso Total         | 540 g                                                     |
| Dimensiones        | 10.5 × 21.0 cm (L × A), Altura 12.0–21.0 cm               |

## BOM

[Descarga de BOM](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

| Nombre del Artículo | Cantidad | Unidad | Especificaciones | Notas/Estándares |
|---------------------|----------|--------|------------------|------------------|
| | | | | |
| **Componentes Electrónicos** | | | | |
| Placa de Control Principal StackForce | 1 | pc | StackForce | |
| Placa Controladora de Baja Potencia 5A StackForce | 1 | pc | StackForce | |
| Placa de Servo StackForce | 1 | pc | StackForce | |
| Codificador MT6701 | 2 | pc | StackForce | |
| Motor de Cardán 2208 | 2 | pc | | |
| Servo DS041MG 500–2500 | 4 | pc | | |
| Controlador Remoto MC6C-MINI | 1 | pc | | |
| Receptor MC7RBv2 | 1 | pc | | |
| Batería Li-Polímero 12V | 1 | pc | 19×34×42mm | |
| Conector de Motor MR30-U | 2 | pc | | Para motor |
| Cable de Codificador SH1.0-5P | 2 | set | | Para codificador |
| Cable Dupont 3P (Hembra-Hembra) | 1 | set | | Para receptor |
| | | | | |
| **Hardware Mecánico** | | | | |
| Tuerca de Seguridad M3 | 4 | pc | M3 | GB889.1-86 |
| Tuerca M3 | 4 | pc | M3 | DIN934 |
| Separador de Nylon | 4 | pc | 5×3.2×9mm | ABS |
| Arandela M3 | 4 | pc | M3 | 304 Inoxidable |
| Imán Radial | 2 | pc | 6×2.5mm | |
| Tornillo de Cabeza Redonda M2×4 | 24 | pc | M2×4 | GB/T845 |
| Tornillo de Cabeza Redonda M2×10 | 12 | pc | M2×10 | GB/T845 |
| Tornillo de Cabeza Redonda M3×6 | 4 | pc | M3×6 | GB/T845 |
| Tornillo de Cabeza Redonda M3×8 | 4 | pc | M3×8 | GB/T845 |
| Tornillo de Cabeza Redonda M3×16 | 4 | pc | M3×16 | GB/T845 |
| Tornillo de Cabeza Redonda M4×18 | 2 | pc | M4×18 | GB/T845 |
| Tornillo Autorroscante M2×6 | 16 | pc | M2×6 | GB/T845 |
| Tornillo de Cabeza Plana M2×6 | 46 | pc | M2×6 | 304 Inoxidable |
| Tornillo de Cabeza Plana M3×6 | 16 | pc | M3×6 | 304 Inoxidable |
| Separador de Cobre M3×7+4 | 4 | pc | M3×7+4 | Cobre / GB |
| Rodamiento 6704ZZ | 4 | pc | Ø27×Ø20×4mm | |
| Rodamiento 6701ZZ | 6 | pc | Ø18×Ø12×4mm | |
| | | | | |
| **Componentes Estructurales** | | | | |
| Piezas Impresas en 3D | 29 | pc | | |
| Neumáticos Resistentes al Desgaste 1:10 6030-6085 | 2 | pc | | |

## Tabla de Contenidos

- [Tutorial de Versión Ensamblada](https://wiki.seeedstudio.com/es/stackforce_mini_wheeled_legged_robot/#Tutorial-de-Versión-Ensamblada)
- [Tutorial de Versión Kit 1 - Ensamblaje](https://wiki.seeedstudio.com/es/stackforce_mini_wheeled_legged_robot/#Tutorial-de-Versión-Kit-1---Ensamblaje)
- [Tutorial de Versión Kit 2 - Calibración](https://wiki.seeedstudio.com/es/stackforce_mini_wheeled_legged_robot/#Tutorial-de-Versión-Kit-2---Calibración)

## Tutorial de Versión Ensamblada

[Manual de Operación Básica del Robot de Patas con Ruedas StackForce (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Wheeled_Legged_Robot_Operation_Manual.pdf)

Puedes controlar remotamente el robot simplemente iniciándolo en el orden especificado en el documento PDF.

## Tutorial de Versión Kit 1 - Ensamblaje

[Documento de instalación del robot mini de patas con ruedas.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

:::tip
El ensamblaje tiene muchos pasos, así que por favor sigue la guía cuidadosamente. Algunos agujeros están hechos para tornillos autorroscantes, y es normal si los tornillos en el paquete difieren de los del tutorial. Esto no afectará el ensamblaje, y puedes usar tornillos de reemplazo adecuados si es necesario.
:::

:::caution
Durante el ensamblaje, presta atención al apriete de los tornillos. No los aprietes demasiado para evitar dañar o estropear las roscas.
:::

## Tutorial de Versión Kit 2 - Calibración

Por favor, primero descarga los [archivos de código requeridos para la calibración](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Calibration_code.7z).

### Configuración del Entorno

**Paso 1:** Descarga [Visual Studio Code](https://code.visualstudio.com/download).

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/1_1.png" />
</div>

**Paso 2:** Abre Visual Studio Code, luego busca e instala la extensión **PlatformIO IDE** desde el Marketplace de Extensiones.

Después de hacer clic en instalar, PlatformIO descargará automáticamente los componentes adicionales requeridos.
En algunos casos, MinGW puede estar faltando, lo que te impedirá crear nuevas carpetas.
Si esto sucede, necesitarás instalar **MinGW-w64** manualmente.

<details>

<summary> Paso 3：Descargar MinGW-w64 </summary>

[**Enlace de Descarga del Paquete de Herramientas del Robot de Patas con Ruedas**](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)（Incluyendo MinGW-w64）

Después de descargar el archivo, extráelo y encuentra la `carpeta mingw64` dentro del paquete de herramientas.
Extráela, luego instálala en un directorio que use solo caracteres en inglés.
Abre la `carpeta extraída` → abre la `carpeta bin` → copia la `ruta del directorio bin`
(por ejemplo: D:\ming\mingw64\bin).

Configuración del entorno:
Busca y abre `Configuración Avanzada del Sistema` en tu computadora → `Variables de Entorno` → `Variables del sistema` → `Path` → `Nuevo` → pega la `ruta bin` copiada anteriormente → haz clic en `OK`.

- 1: Busca y abre `Configuración Avanzada del Sistema`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_1.png" />
</div>

- 2: Haz clic en `Variables de Entorno`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_2.png" />
</div>

- 3: Haz doble clic en `Path` bajo Variables del sistema.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_3.png" />
</div>

- 4: Crea una nueva entrada de variable de entorno.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_4.png" />
</div>

</details>

Paso 4: Instrucciones de los Botones de Compilar y Cargar

(**√**: Compilar el programa →: Cargar el programa al hardware&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Auto**: Seleccionar el puerto serie)

:::tip
Lo siguiente explica los botones de carga. No cargues el programa todavía. Los desarrolladores pueden revisar el proceso de carga aquí primero.
:::

Después de conectar la computadora al hardware, haz clic en `Auto` (opcional).
El sistema detectará automáticamente y recomendará un puerto serie.
Después de seleccionar el puerto serie, haz clic en `Compile` (opcional) y `Upload` para flashear el programa al hardware.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/4_1.png" />
</div>

### Flasheo y Depuración del S1

#### Conectando el Chip S1

Conecta el cable USB. `El lado con el hueco` del conector USB debe mirar hacia arriba, y `el lado sin el hueco` debe mirar hacia abajo. `Suelta el botón blanco` para cambiar al chip S1 (la `luz amarilla` se encenderá).

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/烧录1.png" />
</div>

:::tip
**Nota: ¿Por qué hay un lado superior e inferior?**

Porque la placa tiene dos chips—S1 para el programa del motor y S3 para el programa de control del servo—el conector Type-C usa dos filas de pines separadas para la comunicación. Cada chip usa una fila diferente para el flasheo. El botón blanco cambia qué chip flasheará la computadora.
:::

#### Flasheando el Programa S1

Método 1: Según el programa de control de motor S1 pre-grabado, puedes saltar adelante a `Guía de Descarga y Uso del Asistente Serie Vofa`.

<details>
<summary>Método 2: Reflashear el programa de control de motor S1 (no recomendado)</summary>

Abre el proyecto `BLDC_Control` en VS Code.

Esto permite que PlatformIO instale automáticamente las librerías requeridas, así que **no arrastres la carpeta del proyecto directamente a VS Code**. En su lugar, abre una nueva ventana de VS Code y usa `File` → `Open Folder`.

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/1.png" />
</div>

Localiza la carpeta donde está almacenado el `programa S1`, luego haz clic en Select Folder.  

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/2.png" />
</div>

Antes del flasheo, necesitas modificar el `código de registro` y el `modo de comunicación`:

**Modificar el código de registro:**

Cada placa tiene un código de registro único.  
Tu código de registro está impreso en la `etiqueta` adjunta al `paquete de la placa de control principal`.  
Ingresa ese código en el `campo correspondiente`.  
También puedes leer el `código de registro` desde la `salida serie S1` (explicado anteriormente en la guía de instalación).

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3.png" />
</div>

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/4.png" />
</div>

**Modificar el modo de comunicación:**

Cambia el valor en la ubicación mostrada en la imagen a `ONBOARD`. (`USB` = comunicación serie entre el chip S1 y la computadora,  `ONBOARD` = comunicación entre los chips S1 y S3.)

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/5.png" />
</div>

Después de hacer los cambios, haz clic en el ícono `→` en la esquina inferior izquierda para flashear el programa.

:::tip
**Problemas comunes durante el flasheo y cómo resolverlos:**

1. Resultado de flasheo exitoso

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_1.png" />
</div>

2. Este es el chip S3, que no coincide con el programa S1

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_2.png" />
</div>

Solución:  
Verifica si el cable USB está conectado al revés — el lado `sin el hueco debe mirar hacia arriba`.  
Verifica si el botón blanco está suelto. Cuando está suelto, el `LED amarillo` se enciende, indicando que la placa está en `modo de flasheo S1`.

3. Puerto serie ocupado

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_3.png" />
</div>

Solución:  
Verifica si otro programa está usando el puerto serie.  
Asegúrate de que el monitor serie Vofa esté `cerrado`.  
Verifica que todos los otros asistentes serie hayan liberado el puerto.
:::

</details>

**Guía de Descarga y Uso del Asistente Serie Vofa**

A continuación, abre el asistente serie y establece la velocidad de baudios a `115200` para verificar la salida serie. Enlace de descarga del Asistente Serie Vofa: [Download Center | VOFA-Plus](https://www.vofa.plus/)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/vofa.png" />
</div>

**Depuración del Programa de Control de Motor S1 – Calibración de Pares de Polos**

Sostén el robot para que las ruedas estén fuera del suelo, luego presiona el `botón de reset S1`.  
La información de pares de polos aparecerá en Vofa. Espera a que las ruedas terminen la rotación de auto-prueba.  
Si el valor de par de polos detectado es `7`, la calibración es exitosa, como se muestra a continuación:

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/极对数校准.png" />
</div>

:::tip
Si el valor de par de polos muestra `inf` u otro texto, verifica si la energía está encendida, verifica el cableado, y asegúrate de que el imán esté instalado correctamente.

Si el valor detectado es 6, 8, o cualquier cosa diferente a 7, la rueda puede estar montada muy apretada  
(consulta la guía de instalación de rueda-pierna y busca `instalación de rodamiento del motor` para reinstalar).  

La rueda también puede estar tocando el suelo u otro objeto.  
Cada vez que el robot se enciende o S1 se reinicia, las ruedas deben estar fuera del suelo para que la auto-prueba funcione correctamente.

Repite el proceso y presiona el `botón de reset S1` hasta que el par de polos muestre **7**.
:::

### Adquisición de Valor de Offset S3

Después de terminar el flasheo S1, cambia al `chip S3` y flashea el programa S3. (Asegúrate de que el hueco del puerto USB mire hacia abajo. Presiona el botón mostrado en la imagen—cuando la luz se vuelve `verde`, indica que el sistema ha cambiado a S3.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/切换.png" />
</div>

:::caution
Asegúrate de remover el ensamblaje del muslo antes de flashear el programa.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/拆大腿.png" />
</div>
:::

- 1. En VSCode, abre la **carpeta bipedal_calibrate (programa de calibración de valor de offset)**, flashea el programa directamente, luego abre Vofa y establece la velocidad de baudios a `115200`.  
  Verás salida serie como `0,0,0,0`, que representa los valores de offset de los `servos 1, 2, 3, y 4`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_1.png" />
</div>

- 2. Enciende la batería. Después de que los servos terminen de rotar, instala las piernas para que estén lo más verticales posible al suelo.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_2.png" />
</div>

- 3. En el terminal serie, ingresa comandos como `1,2,3,4` para controlar los servos hasta que las piernas estén perfectamente verticales.  
  **Guía de dirección:** Cuando la pierna está mirando hacia ti, sentido horario es negativo, sentido antihorario es positivo.

Por ejemplo: En la imagen de arriba, el servo 1 está inclinado ligeramente a la izquierda, y el servo 2 está inclinado ligeramente a la derecha.  
Ingresa `5,-6,0,0` para corregir los servos 1 y 2 de vuelta a vertical. (`5` significa rotar el servo 1 en sentido antihorario por 5 unidades; `-6` significa rotar el servo 2 en sentido horario por 6 unidades.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_3.png" />
</div>

Ajusta los servos 3 y 4 usando el mismo método:  
Usa `0,0,x,0` para controlar el servo 3, y `0,0,0,x` para controlar el servo 4.  
Después de terminar todos los ajustes de offset, aprieta los tornillos negros dentro de la carcasa del servo para asegurar las piernas.

:::tip
*Registra los valores de offset actuales — necesitan ser escritos en el programa de control de servo S3 a continuación.*
:::

### Calibración y Depuración S3

[Manual de Operación Básica del Robot de Ruedas y Piernas StackForce (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/遥控器.png" />
</div>

#### 1. Modificar Valores de Offset

Abre la carpeta `bipedal` (programa de control de servo) en VS Code.  
En el archivo `bipedal_data.h`, actualiza los valores de offset bajo `OFFSET`.  
Ingresa los valores de offset obtenidos del programa anterior en las posiciones correspondientes mostradas a continuación.

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_01.png" />
</div>

#### 2. Depuración de Servo

- Después de flashear el programa, desconecta el USB.  
  `Mantén presionado 5` para encender el control remoto.  
  Configura los interruptores: `A (arriba-izquierda) al medio`, `B (abajo-izquierda) hacia abajo`, `C (arriba-derecha) hacia abajo`.
- Sostén el robot y mantenlo nivelado para que la calibración del giroscopio y la calibración del motor puedan proceder.  
  Presiona el botón de encendido para encender el robot.
- Espera aproximadamente 10 segundos para que se complete la auto-verificación.  
  Configura `A al medio` para habilitar los servos. Regresarán a la posición inicial.  
  Configura `C al medio` para salir de la calibración del servo.  
  Desliza **B** para ajustar la altura de la pierna (coordenada **Y** de la rueda).  
  Desliza **D** para mover las ruedas hacia adelante/atrás (coordenada **X** de la rueda).
- Nota de movimiento del robot rueda-pata:  
  Cuando **D** se empuja **hacia adelante**, los servos rotan para mover la coordenada **X** de la rueda **hacia atrás**. El robot rueda-pata se inclina hacia adelante, causando que el **robot se mueva hacia adelante**.

#### 3. Configurar SpdDir

Establece una dirección de rotación fija para los motores. En el archivo **main**, busca `motors.setTargets` y establece el `torque` del `motor 0` y `motor 1` a `2`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir01.png" />
</div>

Usa Vofa para ver las velocidades del motor. Establece la velocidad de baudios de Vofa a `921600` y conéctate a `S3`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir02.png" />
</div>

Carga el programa a S3, abre Vofa (velocidad de baudios `921600`), establece el `interruptor A del control remoto hacia arriba` para habilitar los motores, enciende, y sostén el robot mientras completa la **auto-verificación**. (Puedes primero verificar con Vofa–S1 para confirmar si la auto-verificación pasó.)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/设置SpdDir03.png" />
</div>

Verifica la rotación del motor:

- Motor izquierdo: la rotación hacia adelante debe mostrar velocidad **positiva**.  
  Si el tercer valor (velocidad M1) es negativo, invierte `motorStatus.M1SpdDir`. Si es positivo, no se necesita cambio.

- Motor derecho: la rotación hacia atrás debe mostrar velocidad **negativa**.  
  Si el segundo valor (velocidad M0) es negativo, no se necesita cambio. Si es positivo, invierte `motorStatus.M0SpdDir`.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir04.png" />
</div>

:::tip
Si la explicación anterior aún no está clara, consulta las reglas simplificadas a continuación:

Si la rueda gira **hacia adelante** y Vofa muestra un valor **negativo**, `invierte` la **dir** de retroalimentación.

Si la rueda gira **hacia adelante** y Vofa muestra un valor **positivo**, `no` cambies la **dir** de retroalimentación.

Si la rueda gira **hacia atrás** y Vofa muestra un valor **positivo**, `invierte` la **dir** de retroalimentación.

Si la rueda gira **hacia atrás** y Vofa muestra un valor **negativo**, `no` cambies la **dir** de retroalimentación.
:::

#### 4. Configurar Control de Motor `dir` (buscar `motors.setTargets`)

Descomenta la línea de control del motor como se muestra en la imagen y comenta la línea debajo de ella, luego carga el programa.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir01.png" />
</div>

Enciende el robot. Después de que se complete el reinicio, inclina el robot hacia adelante mientras lo sostienes. Si ambas ruedas rotan hacia adelante, la dirección de equilibrio es correcta.  
Si la rueda izquierda gira hacia atrás, `invierte M1Dir`. La rueda derecha se ajusta de la misma manera.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir02.png" />
</div>

Después de completar estos pasos, el robot ahora puede ser controlado. Lo siguiente describe cómo operarlo. También puedes consultar el documento [Manual de Operación Básica del Robot Rueda-Pata StackForce (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf).

Joysticks del lado frontal:

- **Paso 1:**
  Establece el interruptor superior izquierdo en `medio`, el interruptor superior derecho en `abajo`, y el stick inferior izquierdo en `más bajo`. Sostén el robot, deja que las patas cuelguen naturalmente, mantén las ruedas fuera del suelo, y mantén el cuerpo nivelado.

  Enciende, espera aproximadamente `10 segundos`, luego coloca el robot en el suelo y manténlo erguido.

- **Paso 2:**
  Establece el interruptor superior derecho en `medio`, empuja el stick inferior izquierdo `ligeramente hacia arriba`, y establece el interruptor superior izquierdo en `arriba`. El robot entra en modo de auto-equilibrio.

  Usa el stick inferior derecho `adelante/atrás` para moverse hacia adelante/atrás y `izquierda/derecha` para girar a la izquierda/derecha.

  Usa el stick inferior izquierdo `arriba/abajo` para ajustar la altura de las patas.

  Cuando el interruptor superior derecho está en `arriba`, mueve el stick inferior izquierdo `izquierda/derecha` para controlar el balanceo. Apaga para salir del modo de balanceo.

## Demostración en Vivo

(Video de demostración real por agregar)

## Cita

[中文文档](https://wiki.seeedstudio.com/cn/stackforce_mini_wheeled_legged_robot)

[gitee](https://gitee.com/StackForce/bipedal_wheeled_robot)

[Manual de Operación Básica del Robot Rueda-Pata StackForce (PDF)](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Wheeled_Legged_Robot_Operation_Manual.pdf)

[Documento de instalación del robot mini rueda-pata.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

[Conjunto completo de esquemas de la placa de control](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Schematic_diagram.7z)

[Proyectos de ejemplo para el kit de desarrollo](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Sample_Code_Documentation.7z)

[Adquisición de código de registro del cliente](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Registration_code.7z)

[urdf & stl](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/SF_bipedalWheel.zip)

[BOM](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

[Paquete de Herramientas del Robot Rueda-Pata](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
