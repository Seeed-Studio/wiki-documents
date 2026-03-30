---
description: Cómo crear una nueva aplicación en SenseCraft AI.
title: Crear una nueva aplicación
keywords:
  - create application
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/application/create-new-application/
---

# Crear una nueva aplicación en SenseCraft AI

## Crear la aplicación

Vaya a la página **Mis aplicaciones** y haga clic en **Crear aplicación** > **Subir**.

Para proteger su trabajo, al entrar en la página de edición los cambios se **guardan automáticamente** y la barra de navegación muestra el estado del guardado en tiempo real.

## Construir la aplicación

El proceso consta de cuatro pasos claros que puede cambiar en cualquier momento desde la barra superior.

### Paso 1: Información de la aplicación

Es la primera impresión para quien descubra su app; revísela con cuidado para que resulte atractiva.

- **Nombre de la aplicación:** Un nombre claro para que se entienda de un vistazo qué hace.

- **Resumen:** Sintetice el escenario, tecnologías, dispositivos, etc., con lenguaje conciso.

- **Escena:** Elija la etiqueta de categoría más adecuada; influye en el descubrimiento y la promoción.

- **Licencia:** Defina si otros pueden copiar o modificar el trabajo y si se permite uso comercial.

:::caution
Si más adelante cambia la licencia, las acciones previas al cambio (como duplicar) y sus resultados no se ven afectadas.
:::

- **Imágenes:** Deciden en gran parte el atractivo. La primera es la portada por defecto. Hasta **16** archivos, cada uno **≤ 2 MB**; se recomienda relación **4:3**.

### Paso 2: Documentación

Es el núcleo: redacte la **introducción** y el flujo de **implementación**. Use el botón superior derecho para mostrar u ocultar la vista previa y revisar el proceso como otro usuario.

#### Editar con Markdown

El editor usa Markdown. Mientras escribe, pulse `/` para el menú rápido de encabezados o bloques de herramientas (próximamente).

#### Introducción a la aplicación

Describa libremente el contexto, principios y diseño. En esta sección no puede añadir bloques de herramientas que invoquen capacidades de SenseCraft.

#### Implementación de la aplicación

Explique el despliegue paso a paso, con requisitos previos. Use `+` para nuevos pasos. Mantenga el orden lógico y compruebe con la vista previa que otros puedan reproducirlo.

#### Uso de bloques de herramientas

En el flujo puede insertar con un clic las integraciones de SenseCraft AI y simplificar tanto la creación como el despliegue del usuario final.

##### Visión por IA

Despliegue modelos de visión para reconocimiento, detección, clasificación, etc., en hardware compatible. Los resultados pueden enviarse en tiempo real por MQTT, GPIO o serie, según la configuración.

El bloque admite actualmente **detección** y **clasificación**. Segmentación y estimación de pose llegarán más adelante.

**Dispositivos compatibles:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

**Modelo SenseCraft AI:** Elija modelos de calidad compartidos por la comunidad en la biblioteca.

**Mi modelo:** Seleccione uno de su lista privada.

:::caution
Al publicar en la comunidad una aplicación que incluya este modelo, el modelo privado pasará automáticamente a ser público.
:::

- **Subir modelo:** Sube archivos entrenados en plataformas externas. Indique nombre, tipo de tarea (Task), categorías (Class ID y Class Name), el archivo y los dispositivos admitidos. Tras subirlo aparecerá en **Mi modelo**.

- **Entrenar modelo:** Para entrenar o reentrenar, siga el asistente y luego, en **Modelos históricos**, use **Enviar a SenseCraft**, complete la subida y guárdelo en **Mi modelo**.

**Seleccionar dispositivo:** En el desplegable elija el hardware real entre los admitidos por el modelo.

**Ajustar parámetros recomendados:** Afine inferencia y dispositivo. Los valores se escriben como predeterminados al desplegar.

- **Umbral de confianza:** Criterio para emitir una predicción final. Subirlo suele reducir falsos positivos; bajarlo, falsos negativos.

- **Umbral IOU:** En detección, el IoU mide la superposición entre caja predicha y referencia. Demasiado alto puede duplicar cajas en un mismo objeto; demasiado bajo puede fusionar objetos cercanos.

- **Modo de salida**

  - **Ninguno:** Tras encender, la inferencia no arranca hasta otro disparador; útil para bajo consumo.

  - **MQTT:** Inicia la inferencia al encender y envía resultados por Wi‑Fi con MQTT.

    - **Servicio oficial SenseCraft (recomendado):** Seleccione o cree un Dev Kit para su aplicación y MQTT se configura solo. Vea los datos en la [plataforma SenseCraft Data](https://sensecap.seeed.cc).

    - **Servicio de terceros:** Use un bróker MQTT propio o externo y configure a mano.

  - **GPIO:** Señales de nivel en los pines.

    - **Condiciones de disparo:** Reglas con objeto, condición y umbral de confianza.

    - **Acciones de disparo:** Si se cumplen, el dispositivo puede fijar un nivel, guardar en tarjeta SD, encender un LED, etc.

  - **Serie:** Use la [biblioteca SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) para exportar datos por UART (GPIO), I2C o SPI.

  ```text
    **UART (GPIO)**
    Baud Rate Value: 921600
    Data Format: 8N1
    TX: GPIO43
    RX: GPIO44

    **I2C**
    Slave Address: 0x62
    SDA: GPIO5 (PULLUP)
    SCL: GPIO6 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06

    **SPI**
    Slave CPOL0 CPHA0
    MOSI GPIO9 (PULLUP)
    MISO GPIO8,
    SCLK GPIO7 (PULLUP)
    CS GPIO4 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06
  ```

##### Audio IA

Despliegue modelos de reconocimiento de voz en hardware compatible. Los resultados pueden ir por MQTT, GPIO o serie.

**Dispositivos compatibles:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

**Modelo SenseCraft AI:** Modelos compartidos en la biblioteca.

**Mi modelo:** Desde su lista privada.

:::caution
Al publicar, el modelo privado pasa a ser público automáticamente.
:::

- **Subir modelo:** Nombre y categorías (Class ID y Class Name). Queda en **Mi modelo**.

- **Entrenar modelo:** Igual que en visión: **Modelos históricos** → **Enviar a SenseCraft**.

**Seleccionar dispositivo:** Por ahora solo XIAO ESP32S3 Sense.

**Ajustar parámetros recomendados:** Afine según su caso.

- **Umbral de confianza:** Mismo equilibrio que en visión.

- **Modo de salida:** Ruta de salida predeterminada del modelo de audio.

##### Vibración IA

Detección de anomalías vibratorias aprendiendo la vibración «normal».

**Dispositivos compatibles:**

- XIAO ESP32S3 Sense (con [acelerómetro de 3 ejes](https://seeedstudio.feishu.cn/record/QFIprpQsmesStwcOpZWc98Ccn9n))

**Ajustar parámetros recomendados:** Muestreo, inferencia al arranque, GPIO y salida.

- **Ventana de muestreo:** Muestras por unidad de tiempo; demasiado grande ralentiza y demasiado pequeña puede no aprender bien.

- **Habilitar inferencia al encender por defecto:** Si está desactivada, hace falta un disparador externo (bajo consumo).

- **GPIO:** Acciones ante vibración anómala (nivel, LED, etc.).

- **Modo de salida:** Salida predeterminada del modelo de vibración.

##### Node-RED

Construya flujos visuales para reCamera.

**Preparar el flujo:** Tras añadir el bloque Node-RED:

1. **Crear flujo nuevo:** Conecte reCamera (cable o Wi‑Fi), abra el Dashboard y edite en línea.

2. **Subir archivo local:** Suba un JSON ya preparado; el sistema valida el tipo.

**Seleccionar modelo de visión IA:** El JSON no incluye el binario del modelo; indique cuál usa el flujo.

1. **Incluido en el dispositivo:** Modelos preinstalados en reCamera (familia YOLO11n: clasificación, detección, segmentación, pose).

2. **Modelos públicos:** Catálogo SenseCraft para reCamera compartido por otros.

3. **Mi modelo:** Desde su biblioteca privada.

:::caution
**Al publicar:** Si usa un modelo privado en **Mi modelo** y publica en la comunidad, ese modelo también se hará público. Se le avisará antes.
:::

##### Aily Blockly

Entorno de programación visual. Permite grabar en un paso los programas hechos en Aily Blockly en dispositivos edge.

**Productos compatibles:**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

**Vincular ID de proyecto:** Introduzca el código que apunta a su plantilla pública de Aily Blockly.

- **¿Cómo obtener el Project ID?** Abra el escritorio de Aily Blockly; en **CLOUD SPACE** a la derecha localice la tarjeta del proyecto. La cadena bajo la tarjeta (p. ej. `prj_be881f`) es su Project ID.

![](https://seeedstudio.feishu.cn/space/api/box/stream/download/asynccode/?code=YjczYzljYmQ3NjhlNDg4NzhlNDBiZmM1YjZlNTYzOWRfa1VaTU5hNEFRN2g3WFF6a1g1c0VMNGFkcDNxcWoyTjVfVG9rZW46WWFmSmJER09yb3JVaUh4RmZITGNueFlSbmNlXzE3NzQ4NTczMzg6MTc3NDg2MDkzOF9WNA)

**Dispositivo de despliegue:** Elija el hardware en el menú desplegable.

##### Desplegar aplicación en contenedor (próximamente)

##### Flashear firmware (próximamente)

##### Configurar MQTT (próximamente)

##### Herramientas de depuración (próximamente)

### Paso 3: Lista de materiales (BOM)

Enumere todo lo necesario para reproducir la aplicación.

#### Desde Seeed Studio

Busque y añada hardware oficial Seeed directamente.

#### Otros materiales

Tornillería, cables especiales, piezas impresas en 3D, etc.: nombre, breve descripción y cantidad; enlaces de compra ayudan.

#### Software y plataformas (próximamente)

Por ejemplo Arduino IDE, Home Assistant o Edge Impulse.

### Paso 4: Vista previa y publicación

Revise como un usuario final. Antes de **Publicar**, compruebe campos obligatorios, derechos sobre código y activos, y que no haya contenido confidencial o ilegal.

Tras publicar, la app entra en revisión y no podrá seguir editando ese borrador hasta que cambie el estado. Si no desea publicar aún, salga del editor: el progreso sigue guardándose solo.

## Publicar la aplicación

:::caution
Si usa modelos aún no públicos (p. ej. entrenados por usted), publicar la app también los hará públicos. Se le recordará antes.
:::

:::caution
Si depende del modelo de otra persona y ese modelo se retira, recibirá un aviso. La app puede seguir publicada, pero ya no podrá desplegarse con ese modelo.
:::

### Revisión de la aplicación

:::tip
Tras enviar a revisión puede retirar la solicitud en cualquier momento si necesita seguir editando.
:::

Los administradores revisan principalmente:

1. **Contenido y seguridad**

   - **Copyright y licencias de código abierto:** Debe tener derechos sobre código, modelos, imágenes y activos o cumplir licencias de origen (MIT, Apache, etc.).

   - **Privacidad y seguridad de datos:** No debe haber exfiltración oculta, cargas no autorizadas ni puertas traseras, sobre todo con cámara o micrófono.

   - **Legalidad y normas comunitarias:** Sin secretos empresariales, material ilegal, malware ni contenido violento, sexual u odioso.

2. **Calidad del modelo y ajuste al hardware**

   - **Usabilidad:** Los modelos personalizados deben cargarse y analizarse correctamente.

   - **Precisión:** El rendimiento real debe coincidir con la descripción.

   - **Ajuste al hardware:** Tamaño del modelo y lógica acordes con las placas indicadas.

3. **Documentación y reproducibilidad**

   - **Datos básicos claros:** Nombre, resumen, etiquetas e imagen de portada correctos y no engañosos.

   - **BOM exacta:** El hardware listado coincide con los pasos de despliegue.

   - **Despliegue reproducible:** Pasos coherentes; conexiones de pines, umbrales, MQTT, etc., explícitos.

4. **Normas de la comunidad**

   - **Sin spam:** No se admiten duplicados sin sentido ni contenido solo publicitario sin valor técnico.

:::caution
Para una comunidad SenseCraft AI segura y de calidad, la plataforma tiene la última palabra en la revisión. Los proyectos que infrinjan leyes, políticas o seguridad pueden ser rechazados o retirados.
:::

## Gestión de aplicaciones

### Gestionar aplicaciones públicas en la tienda

Al abrir **su propia aplicación publicada** desde la tienda puede administrar la **revisión publicada actualmente**.

- **Duplicar:** Copia la versión estable publicada como proyecto nuevo.

- **Editar:** Abre el borrador (igual que **Mis aplicaciones** > **Editar**).

- **Dejar de publicar:** Oculta temporalmente la app al público; el estado pasa a privado.

### Gestionar en Mis aplicaciones

- **Editar:** Abre el editor; los cambios solo afectan al **borrador**, no a la versión publicada.

- **Duplicar:** Copia el borrador actual en un proyecto nuevo.

- **Publicar / Publicar actualización:** Envía a revisión; tras aprobarse actualiza la ficha y sustituye la versión pública si aplica.

- **Dejar de publicar:** Si la app es pública, puede volver a privado aquí.

:::tip
Si el borrador y la versión publicada difieren, al dejar de publicar puede perder acceso fácil al estado publicado. **Duplique** la versión publicada antes si debe seguir trabajando desde ella.
:::

- **Eliminar:** Borra la aplicación por completo.

:::caution
Si está publicada, la eliminación la retira de la tienda y luego la borra de forma permanente. Proceda con cuidado.
:::
