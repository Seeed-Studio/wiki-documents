---
title: Preguntas frecuentes sobre reSpeaker XVF3800 USB 4-Mic Array
description: Preguntas frecuentes sobre configuración, conectividad USB, firmware, audio y ajuste para el reSpeaker XVF3800 USB 4-Mic Array.
slug: /respeaker_xvf3800_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker XVF3800 FAQ
  - reSpeaker XVF3800 troubleshooting
  - reSpeaker XVF3800 firmware
---

<div class="respeaker-faq-page">

# Preguntas frecuentes sobre reSpeaker XVF3800 USB 4-Mic Array

Esta página contiene respuestas verificadas para el reSpeaker XVF3800 USB 4-Mic Array. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez con las fuentes oficiales actuales.

## Antes de comenzar

- Confirma la variante exacta del producto y el modo de firmware (USB o I2S) en el que se está ejecutando el dispositivo.
- Comprueba la versión actual del firmware antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-08-31; vuelve a comprobar las fuentes oficiales enlazadas si estás leyendo esto más tarde.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentación y uso {#documentation-and-usage}

### ¿Cómo abro la carcasa del XVF3800 sin dañarla? {#open-casing-safely}

**Se aplica a:** ReSpeaker XVF3800 USB 4-Mic Array suministrado con la carcasa de encaje con clip

**Última verificación:** 2026-09-01

Primero apaga y desconecta el dispositivo, luego levanta suavemente a lo largo de un borde de la carcasa con una uña. Libera uno de los tres clips de bloqueo antes de trabajar alrededor de los clips restantes; no fuerces la tapa ni uses una herramienta metálica afilada.

**Requisitos previos:**

- El dispositivo está completamente desconectado de USB, del cableado de altavoces y de todas las demás fuentes de alimentación
- Una superficie de trabajo limpia donde la placa y la carcasa no se rayen

1. Desconecta todos los cables y coloca la carcasa sobre una superficie limpia.
2. Usa una uña para levantar suavemente a lo largo de un borde hasta que se libere el primer clip de bloqueo.
3. Continúa alrededor del borde y libera los otros dos clips sin torcer la tapa.
4. Detente si un clip no se mueve con una presión suave; vuelve a colocarte en el clip en lugar de forzar la carcasa.

**Criterios de éxito:**

- La tapa se separa con los tres clips intactos
- La PCB, los conectores y la carcasa no muestran daños por herramientas o palanca

**Notas:**

- La Wiki oficial identifica tres clips de bloqueo y recomienda levantar los bordes suavemente con las uñas.
- Abrir la carcasa es independiente de cualquier modificación no admitida de la PCB.

**Referencias:**

- [Guía de resolución de problemas de la carcasa del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#how-can-i-open-the-casing-without-damaging-it)

### ¿Dónde puedo obtener archivos mecánicos del XVF3800 para un diseño de carcasa? {#mechanical-design-files}

**Se aplica a:** Integración mecánica del ReSpeaker XVF3800 USB 4-Mic Array y su carcasa publicada

**Última verificación:** 2026-09-01

Utiliza la sección de Recursos de la Wiki oficial. Publica un dibujo mecánico 2D, un modelo 3D STEP a nivel de placa y archivos STEP separados para la parte superior e inferior de la carcasa. Estos son las referencias mecánicas públicas; la página no publica una lista de materiales (BOM) de componentes ni garantiza que se incluya cada número de parte de componente.

**Requisitos previos:**

- Un visor de PDF para el dibujo 2D o software CAD compatible con STEP para los archivos 3D
- Confirmación de la variante exacta de placa y carcasa que se va a integrar

1. Abre la sección de Recursos de la página actual de introducción del XVF3800.
2. Descarga el dibujo mecánico 2D y los archivos STEP relevantes de la placa o la carcasa.
3. Importa los archivos en la herramienta CAD y verifica los orificios de montaje, los espacios libres de conectores y las dos mitades de la carcasa con respecto a la variante de producto prevista.
4. Solicita aclaraciones antes de la liberación si el diseño depende de un número de parte de componente o una tolerancia que no aparece en los archivos públicos.

**Criterios de éxito:**

- El archivo 2D oficial o STEP se abre en el visor o herramienta CAD seleccionados
- El diseño de la carcasa se basa solo en dimensiones que están realmente presentes en el archivo publicado

**Notas:**

- La sección pública de Recursos es la autoridad para los archivos 2D y 3D disponibles.
- No declares números de parte de componentes no publicados, tolerancias acústicas ni límites de distancia placa-tapa.

**Referencias:**

- [Recursos mecánicos oficiales del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#resources)

### ¿Dónde está la lista de comandos I2C del XVF3800 y cómo verifico el control I2C? {#i2c-command-reference}

**Se aplica a:** ReSpeaker XVF3800 conectado a XIAO ESP32S3 u otro host I2C embebido compatible

**Última verificación:** 2026-09-01

Utiliza la referencia oficial de comandos I2C del XVF3800. El host es el maestro I2C, el XVF3800 es el esclavo en la dirección de 7 bits `0x2C`, y las lecturas usan un byte de comando con el bit 7 activado seguido de una respuesta cuyo primer byte es el estado. Comienza con la lectura documentada de `VERSION` antes de enviar escrituras de ajuste o encaminamiento.

**Requisitos previos:**

- Firmware y cableado para el modo de funcionamiento I2S o embebido previsto
- Un maestro I2C configurado para los pines SDA y SCL documentados de la placa
- La referencia oficial actual de comandos I2C

1. Configura el host para la dirección I2C de 7 bits `0x2C` del XVF3800.
2. Usa la trama de escritura documentada `[resid] [cmd] [write_byte_num] [data...]`; para lecturas, envía `[resid] [cmd | 0x80] [read_len + 1]` antes de solicitar la respuesta.
3. Implementa el ejemplo de `VERSION` con ID de recurso 48, ID de comando 0 y una carga útil de tres bytes.
4. Trata el estado de respuesta `0` como éxito y el estado `64` como reintento; no analices los datos de la carga útil como válidos cuando el estado no sea satisfactorio.
5. Después de que `VERSION` funcione, copia solo el ID de recurso, ID de comando, tipo, número de valores y dirección del comando requerido desde la tabla de comandos actual.

**Criterios de éxito:**

- La transacción I2C devuelve el estado 0 y una versión de firmware de tres bytes
- La versión reportada es plausible para la imagen de firmware instalada en el XVF3800

**Notas:**

- I2C es el plano de control; el audio PCM usa I2S en el modo embebido y no se transporta como tráfico de parámetros I2C.
- El número de bytes de parámetros, el tipo y el rango de valores son específicos de cada comando y deben obtenerse de la tabla oficial actual.

**Referencias:**

- [Referencia oficial de comandos I2C del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf_3800_i2c_list/)
- [Introducción al XVF3800 con XIAO ESP32S3](https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/)

## Conectividad y detección {#connectivity-and-detection}

### ¿Por qué mi XVF3800 no se detecta por USB en Raspberry Pi 5 o Linux? {#usb-not-detected-pi5-linux}

**Se aplica a:** ReSpeaker XVF3800 USB 4-Mic Array conectado a Raspberry Pi 5 u otro host Linux

**Última verificación:** 2026-08-31

Primero verifica el cable de datos, el puerto USB-C XMOS y la enumeración del host. Si el dispositivo está ejecutando firmware I2S o su firmware normal ya no responde, entra en Modo Seguro y flashea una imagen oficial de firmware USB mediante DFU por USB.

**Requisitos previos:**

- Un cable de datos USB en buen estado conectado al puerto USB-C XMOS cerca del conector de 3,5 mm
- dfu-util instalado en el host Linux
- El repositorio completo de firmware oficial descargado o clonado

1. Ejecuta `lsusb` y `arecord -l`. Si ninguno de los dos comandos muestra el dispositivo, prueba con un cable de datos en buen estado y un puerto USB directo del host antes de cambiar el firmware.
2. Apaga el XVF3800. Mantén pulsado el botón Mute mientras vuelves a conectar la alimentación. Un LED rojo parpadeante confirma el Modo Seguro.
3. Ejecuta `sudo dfu-util -l`. El Modo Seguro debería exponer las particiones DFU Upgrade y Factory.
4. Flashea una imagen USB oficial con `sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware.bin`.
5. Después del reinicio automático, repite `lsusb` y `arecord -l`, luego lee `VERSION` con la herramienta oficial de control del host.

**Criterios de éxito:**

- Linux enumera el XVF3800 como un dispositivo USB y lo lista como un dispositivo de captura ALSA
- La herramienta oficial de control del host puede leer la versión del firmware

**Notas:**

- El firmware I2S está destinado a un host I2S y no proporciona la enumeración normal de audio USB.
- Si el Modo Seguro tampoco aparece en `dfu-util -l`, continúa aislando cable, alimentación y puerto del host; no supongas que la recuperación de firmware puede arreglar un dispositivo que nunca se enumera.

**Referencias:**

- [Introducción al reSpeaker XVF3800 USB Mic Array](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/)
- [Guía oficial de DFU del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

## Firmware y software {#firmware-and-software}

### ¿Cómo recupero un XVF3800 después de flashear el firmware equivocado? {#recover-wrong-firmware}

**Se aplica a:** ReSpeaker XVF3800 USB 4-Mic Array que ya no arranca ni se enumera normalmente después de un cambio de firmware o de configuración guardada

**Última verificación:** 2026-08-31

Utiliza el Modo Seguro de fábrica y luego vuelve a flashear la imagen oficial correcta mediante el método de actualización admitido por ese modo. Para la recuperación de vuelta a audio USB, usa DFU por USB desde el Modo Seguro.

**Requisitos previos:**

- Un cable de datos USB en buen estado conectado al puerto USB-C XMOS cerca del conector de 3,5 mm
- dfu-util instalado
- La imagen oficial de firmware correcta para el modo de funcionamiento USB o I2S previsto

1. Desconecta completamente la alimentación.
2. Mantén pulsado el botón Mute y vuelve a conectar la alimentación. Mantén pulsado hasta que el LED rojo parpadee; esto indica que el Modo Seguro de fábrica está activo.
3. Ejecuta `dfu-util -l` en Windows o macOS, o `sudo dfu-util -l` en Linux. Confirma que las interfaces DFU Upgrade y DFU Factory están presentes.
4. Para restaurar el funcionamiento USB, flashea la imagen USB oficial seleccionada con `dfu-util -R -e -a 1 -D /path/to/firmware.bin` (usa `sudo` en Linux).
5. Deja que la placa se reinicie y luego verifica la enumeración de audio USB y lee `VERSION` con la herramienta oficial de control del host.

**Criterios de éxito:**

- La placa sale del Modo Seguro y se enumera en su modo de funcionamiento previsto
- La versión de firmware reportada coincide con la imagen que se flasheó

**Notas:**

- El firmware USB admite DFU por USB; el firmware I2S admite DFU por I2C; el Modo Seguro de fábrica admite ambos.
- Descarga el repositorio oficial completo o clónalo. No guardes una página HTML de GitHub como un binario de firmware.

**Referencias:**

- [Guía del Modo Seguro y actualización de firmware del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/)
- [Repositorio oficial de firmware del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)

### ¿Por qué `LED_EFFECT 5` devuelve un error fuera de rango en el XVF3800? {#led-effect-5-out-of-range}

**Se aplica a:** ReSpeaker XVF3800 USB 4-Mic Array que usa firmware USB y la herramienta oficial de control del host en Python

**Última verificación:** 2026-08-31

El modo de anillo (`LED_EFFECT = 5`) y `LED_RING_COLOR` requieren firmware USB v2.0.7 o posterior, además de un mapa de comandos de control de host actualizado. El firmware antiguo o una herramienta antigua solo reconocen los efectos del 0 al 4.

**Requisitos previos:**

- Firmware USB v2.0.7 o posterior; v2.1.0 es la versión actual del changelog en el momento de la verificación
- El `python_control/xvf_host.py` actual del repositorio oficial

1. Ejecuta `python xvf_host.py VERSION` y confirma que el firmware USB es v2.0.7 o posterior.
2. Si es más antiguo, flashea una imagen USB oficial actual y reinicia el dispositivo.
3. Establece los 12 colores del anillo con `python xvf_host.py LED_RING_COLOR --values` seguido de exactamente 12 valores de color.
4. Activa el modo de anillo con `python xvf_host.py LED_EFFECT --values 5`.

**Criterios de éxito:**

- La herramienta acepta el valor de efecto 5 sin un error de fuera de rango
- Los 12 LED muestran los colores de anillo proporcionados

**Notas:**

- `LED_RING_COLOR` requiere exactamente 12 valores, uno por LED.
- Actualizar solo el script no añade el comando al firmware antiguo; tanto el firmware como el mapa de comandos deben soportarlo.

**Referencias:**

- [Registro de cambios del firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Herramienta oficial de control por host XVF3800 en Python](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/xvf_host.py)
- [Guía oficial de uso del control por host](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/readme.md)

### ¿Debo entrar en Modo Seguro antes de actualizar el firmware USB del XVF3800? {#usb-dfu-without-safe-mode}

**Aplicable a:** ReSpeaker XVF3800 USB 4-Mic Array que se actualiza desde un firmware USB receptivo en Windows, macOS o Linux

**Última verificación:** 2026-09-01

No, no cuando el firmware USB que se está ejecutando expone la interfaz normal DFU Upgrade. Ejecuta `dfu-util -l`; si lista el objetivo XVF3800 DFU Upgrade, flashea directamente la imagen USB oficial seleccionada. Usa el Modo Seguro cuando el dispositivo esté ejecutando firmware I2S, el firmware normal no responda o se requiera recuperación por cualquier otro motivo.

**Requisitos previos:**

- Un cable de datos en buen estado conectado al puerto XMOS USB-C cerca del conector de 3,5 mm
- `dfu-util` instalado y con permiso para acceder al dispositivo
- El repositorio oficial completo y la imagen USB exacta seleccionada para el perfil requerido

1. Ejecuta `dfu-util -l` (`sudo dfu-util -l` en Linux cuando sea necesario).
2. Si `reSpeaker DFU Upgrade` aparece como configuración alternativa 1, flashea con `dfu-util -R -e -a 1 -D /path/to/official_usb_firmware.bin`.
3. Espera al reinicio automático provocado por `-R`, luego ejecuta `dfu-util -l` y el comando oficial `VERSION` para verificar el dispositivo.
4. Si la interfaz DFU Upgrade está ausente porque el firmware I2S está activo o el firmware normal no responde, detente y sigue en su lugar el procedimiento publicado de recuperación en Modo Seguro.

**Criterios de éxito:**

- La transferencia DFU se completa sin errores y la placa se reinicia
- El dispositivo informa la versión de firmware prevista y se enumera en su perfil USB previsto

**Notas:**

- El Modo Seguro es una vía de recuperación, no un paso previo obligatorio para cada actualización de firmware USB receptivo.
- El firmware I2S no expone DFU USB normal; el Modo Seguro de fábrica soporta tanto DFU USB como DFU I2C.
- No uses la operación 'Guardar como' del navegador en una página de archivo de GitHub; clona o descarga el repositorio completo.

**Referencias:**

- [Guía oficial DFU del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)
- [Guía de Modo Seguro y actualización de firmware del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#modo-seguro)
- [Directorio actual del firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

## Problemas de audio {#audio-issues}

### ¿Por qué algunas entradas están en silencio con el firmware USB de seis canales del XVF3800? {#six-channel-silent-inputs}

**Aplicable a:** ReSpeaker XVF3800 USB 4-Mic Array ejecutando un perfil oficial de firmware USB de seis canales en Linux

**Última verificación:** 2026-09-01

En Linux, los seis controles de captura pueden estar silenciados o establecidos en cero incluso cuando el firmware está funcionando. Usa la imagen USB actual de seis canales, habilita todos los interruptores de captura en ALSA, establece niveles de captura distintos de cero y guarda el estado del mezclador. El registro de cambios actual del firmware define los canales USB del 3 al 6 como encaminables de forma independiente y documenta el mapeo de micrófonos en bruto del perfil antiguo de seis canales.

**Requisitos previos:**

- El repositorio oficial actual y una imagen USB de seis canales seleccionada deliberadamente
- Utilidades ALSA incluyendo `arecord`, `amixer` y `alsactl`
- El número real de tarjeta ALSA asignado al XVF3800

1. Ejecuta `arecord -l` y anota el número de tarjeta ALSA del XVF3800 como `N`.
2. Ejecuta `amixer -c N cset numid=8 on,on,on,on,on,on` para habilitar los seis interruptores de captura.
3. Ejecuta `amixer -c N cset numid=10 60,60,60,60,60,60`, ajustando el nivel distinto de cero si es necesario.
4. Ejecuta `sudo alsactl store N`, luego realiza una nueva grabación de seis canales y revisa cada canal.
5. Si el silencio regresa después de un reinicio USB, verifica que la imagen flasheada sea actual; el registro de cambios oficial documenta correcciones de recuperación tras reinicio USB en la v2.0.10 y las imágenes más recientes sustituyen a esa versión.

**Criterios de éxito:**

- Una nueva grabación de seis canales contiene muestras distintas de cero en cada canal habilitado que tenga una fuente activa
- Los controles del mezclador permanecen habilitados después de reconectar o reiniciar el host Linux

**Notas:**

- La numeración de canales puede mostrarse como números de canal basados en 1 o como índices de software basados en 0; indica la convención al inspeccionar una grabación.
- No uses la afirmación obsoleta de que un perfil estándar de seis canales expone un canal de referencia de reproducción: el registro de cambios oficial actual documenta señales de micrófono en bruto en los canales del 3 al 6 del perfil antiguo de seis canales.
- El FAQ no prescribe valores personalizados de enrutamiento `AUDIO_MGR_OP_CH3` a `AUDIO_MGR_OP_CH6` porque el registro de cambios público anuncia los comandos pero no publica una receta completa de valores de origen.

**Referencias:**

- [Solución de problemas de seis canales del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#por-qué-algunos-canales-están-silenciosos-con-el-firmware-de-6-canales-del-xvf3800)
- [Registro de cambios actual del firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Directorio actual del firmware USB XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

### ¿Cómo aumento el volumen de reproducción bajo del XVF3800 en Linux? {#linux-speaker-volume-low}

**Aplicable a:** ReSpeaker XVF3800 USB 4-Mic Array usado como dispositivo de reproducción en un host Linux basado en ALSA

**Última verificación:** 2026-09-01

Selecciona la tarjeta de sonido XVF3800 en `alsamixer`, sube su control `PCM-1` al 100% y guarda el estado de ALSA antes de desconectar el dispositivo. Si la salida sigue siendo demasiado baja, verifica primero el dispositivo de salida externo y luego usa el control documentado de PulseAudio como ajuste opcional del lado del host.

**Requisitos previos:**

- Unos auriculares externos, altavoz activo o altavoz compatible conectado a una salida XVF3800 documentada
- Utilidades del mezclador ALSA instaladas
- El XVF3800 visible como tarjeta de sonido de reproducción en Linux

1. Ejecuta `alsamixer`, pulsa F6 y selecciona la tarjeta de sonido XVF3800.
2. Ve a `PCM-1` y súbelo al 100% mientras reproduces una muestra de prueba conocida.
3. Pulsa Esc, luego ejecuta `sudo alsactl store` antes de desconectar el XVF3800.
4. Si la salida sigue siendo baja, verifica el dispositivo de salida conectado y el cable; opcionalmente instala `pavucontrol` e inspecciona el nivel de reproducción del host.

**Criterios de éxito:**

- La muestra de prueba conocida se oye a un nivel adecuado a través del dispositivo de salida externo
- El nivel ALSA `PCM-1` permanece establecido después de reiniciar el host o el dispositivo

**Notas:**

- Este procedimiento es para reproducción USB en Linux; no es un procedimiento de ajuste de registros de códec I2S.
- Aumentar el volumen de software por encima del 100% puede recortar el audio; úsalo solo después de confirmar el mezclador normal y la ruta de hardware.

**Referencias:**

- [Solución de problemas de volumen de altavoz en Linux para el XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#does-playback-sound-from-speaker-output-not-enough-)

## Problemas de hardware {#hardware-issues}

### ¿El XVF3800 tiene un altavoz integrado? {#external-speaker-required}

**Aplicable a:** ReSpeaker XVF3800 USB 4-Mic Array, con o sin XIAO ESP32S3

**Última verificación:** 2026-09-01

No. El XVF3800 es una matriz de micrófonos y un dispositivo de procesamiento de audio; requiere un dispositivo de salida externo. Usa el conector de auriculares de 3,5 mm para auriculares o altavoces activos, o la interfaz de altavoz JST integrada para un altavoz amplificado compatible.

**Requisitos previos:**

- Unos auriculares externos, altavoz activo o altavoz compatible para la salida JST documentada
- Una fuente de reproducción configurada para el modo de funcionamiento USB o I2S activo

1. Elige la salida de auriculares de 3,5 mm o la interfaz de altavoz JST integrada que se muestra en la vista general oficial de hardware.
2. Conecta el dispositivo de salida externo antes de iniciar la reproducción.
3. Reproduce una muestra de audio conocida y selecciona la salida XVF3800 en el host cuando se use el modo USB.

**Criterios de éxito:**

- Se oye audio desde el dispositivo de salida externo conectado
- No se espera sonido alguno del propio encapsulado de la matriz de micrófonos

**Notas:**

- La vista general pública de hardware documenta un conector de auriculares de 3,5 mm y una interfaz de altavoz JST, pero ningún altavoz integrado.
- No infieras un pinout específico del conector ni un modelo de altavoz de terceros más allá de la documentación oficial de hardware actual.

**Referencias:**

- [Primeros pasos con ReSpeaker XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/)

## Producto y negocio {#product-and-business}

### ¿El XVF3800 USB 4-Mic Array soporta 48 kHz por USB? {#usb-48-khz-support}

**Aplicable a:** ReSpeaker XVF3800 USB 4-Mic Array usado para captura USB en Windows, Linux o macOS

**Última verificación:** 2026-08-31

Sí. Usa la imagen oficial dedicada `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin`. Su nombre de archivo identifica el perfil USB previsto de 48 kHz y dos canales; no infieras compatibilidad con 48 kHz a partir de la imagen genérica v2.1.0.

**Requisitos previos:**

- El repositorio completo del firmware oficial actual, incluida la imagen exacta `_v2.1.0_48k2ch.bin`
- Una conexión de datos USB conocida y funcional al puerto XMOS USB-C y `dfu-util` instalado en el host
- Una aplicación de grabación que pueda mostrar y seleccionar los formatos expuestos por el dispositivo USB activo

1. Clona o descarga el repositorio oficial completo y selecciona `xmos_firmwares/usb/respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin`.
2. Flashea esa imagen mediante DFU por USB con el procedimiento oficial de actualización del XVF3800 y luego permite que el dispositivo se reinicie.
3. Inspecciona los formatos informados por el dispositivo de audio USB reiniciado. Selecciona 48 000 Hz y dos canales de captura solo si el host expone esa combinación.
4. Inicia una breve grabación de prueba y confirma que la captura comienza sin un error de negociación de formato.

**Criterios de éxito:**

- El host informa un modo de captura de 48 000 Hz y dos canales para la imagen del XVF3800 flasheada
- Una grabación de dos canales se inicia a 48 000 Hz sin un error de negociación de formato

**Notas:**

- El registro de cambios oficial de USB marca la v2.1.0 como la versión actual, y el directorio actual también contiene imágenes dedicadas `v2.1.0_16k6ch` y `v2.1.0_48k2ch`.
- El directorio del repositorio y el registro de cambios no publican un volcado del descriptor de USB Audio Class para estos binarios. Por lo tanto, este FAQ no declara un ancho de muestra USB ni ninguna combinación adicional de frecuencia de muestreo/canales.
- La sección de firmware/frecuencia de muestreo del Wiki del XVF3800 debe corregirse antes o al mismo tiempo que la publicación de este FAQ, porque su declaración anterior de todo a 16 kHz entra en conflicto con el directorio de firmware actual.

**Referencias:**

- [Directorio actual del firmware USB oficial del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)
- [Registro de cambios oficial del firmware USB del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Commit oficial que añade compatibilidad USB a 48 kHz](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/commit/8b0967aef554c2d270e70d428ed4e19f4ab811b8)

### ¿El XVF3800 expone un número de serie de dispositivo único? {#unique-device-serial}

**Se aplica a:** ReSpeaker XVF3800 USB 4-Mic Array enumerado por un host USB compatible

**Última verificación:** 2026-09-01

Sí. La descripción general de hardware oficial actual describe un número de serie de dispositivo único integrado para identificación y gestión de múltiples dispositivos. En la enumeración USB o DFU, utiliza el campo de número de serie del dispositivo informado por el host en lugar del SKU del producto cuando asocies una unidad física con un registro de aplicación.

**Requisitos previos:**

- Un host compatible con Windows, macOS o Linux
- Una conexión con capacidad de datos al puerto XMOS USB-C
- Una herramienta de enumeración del host como `dfu-util -l` cuando la interfaz DFU está disponible

1. Conecta un XVF3800 al host a través del puerto XMOS USB-C.
2. Ejecuta la herramienta de enumeración USB del host; `dfu-util -l` muestra un campo `serial=` cuando la interfaz DFU es visible.
3. Almacena el número de serie informado como el identificador del dispositivo, no como una versión de firmware o SKU.
4. Para un despliegue con múltiples dispositivos, enumera cada unidad por separado y verifica que la aplicación asocie la unidad física prevista con su número de serie informado.

**Criterios de éxito:**

- El host informa un número de serie de dispositivo no vacío para el XVF3800 conectado
- La aplicación puede distinguir la unidad prevista usando el número de serie informado en lugar de la posición en el bus USB

**Notas:**

- La página oficial del producto denomina a esto un número de serie de dispositivo único y lo presenta como una función de gestión de múltiples dispositivos.
- Este FAQ no declara compatibilidad con Android ni comportamiento dúplex completo; esos eran partes separadas y no admitidas de la pregunta original.

**Referencias:**

- [Descripción general del hardware del XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#hardware-overview)
- [Guía oficial de DFU del XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

<!-- RESPEAKER_FAQ_AUTO_END -->

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
