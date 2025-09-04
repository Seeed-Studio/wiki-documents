---
description: Construye un temporizador Pomodoro compacto y potenciado por CircuitPython usando comandos de voz y Seeed Studio XIAO ESP32S3 Sense con una pantalla LCD redonda.
title: Construye un Temporizador Pomodoro Activado por Voz con XIAO ESP32S3 y CircuitPython
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiao_esp32s3_voice_pomodoro
last_update:
  date: 04/17/2025
  author: Peter Machona
---

# Temporizador Pomodoro AskLou.io

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> ¡Un temporizador Pomodoro controlado por voz construido con el Seeed Studio XIAO ESP32S3 Sense y la Pantalla Redonda para XIAO. ¡Mantente productivo con gestión de tiempo sin usar las manos!

## Descripción del Proyecto

El Temporizador Pomodoro AskLou.io es una herramienta de productividad compacta y activada por voz que te ayuda a implementar la popular Técnica Pomodoro para la gestión del tiempo. Usando comandos de voz simples, puedes iniciar sesiones de trabajo, tomar descansos y gestionar tu productividad sin tocar tu computadora o teléfono.

## ¿Por qué el Temporizador Pomodoro AskLou.io?

Los temporizadores Pomodoro tradicionales requieren interacción manual, interrumpiendo tu flujo y concentración. AskLou.io resuelve este problema con comandos de voz, permitiéndote gestionar tu tiempo sin levantar un dedo. La elegante pantalla circular proporciona un estado de un vistazo de tu sesión actual, ayudándote a mantenerte enfocado y productivo.

## Características

- **Control por Voz**: Inicia y pausa tu temporizador con comandos de voz simples
- **Múltiples Tipos de Sesión**: Sesiones de trabajo estándar (25 min), descansos cortos (5 min) y descansos largos (15 min)
- **Seguimiento Visual del Progreso**: Indicador de progreso circular intuitivo muestra el tiempo restante
- **Libre de Distracciones**: Sin aplicaciones, sin notificaciones, solo productividad enfocada
- **Personalizable**: Fácil de modificar las duraciones de sesión para coincidir con tu flujo de trabajo personal
- **Bajo Consumo**: Diseñado para uso durante todo el día en tu escritorio
- **Operación Independiente**: No requiere smartphone o computadora una vez configurado

## Hardware

### Componentes Requeridos

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio Pantalla Redonda para XIAO (1.28" 240x240 GC9A01 LCD)](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Cable USB-C para alimentación
- Opcional: Carcasa impresa en 3D (archivos incluidos en el proyecto)

### Por qué Elegimos Este Hardware

El XIAO ESP32S3 Sense incluye un micrófono integrado, haciéndolo perfecto para aplicaciones de control por voz. Su factor de forma compacto emparejado con la impresionante pantalla redonda crea un compañero de escritorio elegante que no distrae de la estética de tu espacio de trabajo.

## Proceso de Construcción

### 1. Ensamblaje del Hardware

- Conecta la Pantalla Redonda a la placa XIAO ESP32S3 Sense
- La pantalla se conecta directamente a los pines del XIAO - ¡no se requiere soldadura!
- Opcional: Instala en la carcasa impresa en 3D para un aspecto terminado

### 2. Configuración del Software

**Configurar CircuitPython**

- Descarga CircuitPython 8.x o más reciente desde [CircuitPython.org](https://circuitpython.org/)
- Pon tu placa en modo bootloader (haz doble clic en el botón de reset)
- Arrastra y suelta el archivo UF2 de CircuitPython en la unidad de la placa

**Instalar Librerías Requeridas**

- Descarga estas librerías del [paquete de CircuitPython](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases):
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio (para funcionalidad del micrófono)
- Cópialas a la carpeta lib en tu dispositivo CircuitPython.

### 3. Despliegue del Código

¡Simplemente copia el archivo code.py de este [repositorio](https://github.com/AskLou-io/Pomodoro_Circuit_Python) a tu dispositivo CircuitPython, y el temporizador comenzará a funcionar automáticamente!

## Cómo Funciona

- **Detección de Voz**: El micrófono integrado escucha sonidos por encima de un umbral
- **Simulación de Comandos**: Para la versión de demostración, los comandos ciclan a través de una lista preestablecida
- **Lógica del Temporizador**: Rastrea sesiones de trabajo, descansos cortos y descansos largos
- **Retroalimentación Visual**: La pantalla circular muestra el tipo de sesión y el tiempo restante
- **Indicador de Progreso**: Un arco iluminado muestra el progreso a través de la sesión actual

El Temporizador Pomodoro AskLou.io responde a estos comandos de voz:

- "Start timer" - Comenzar una sesión de trabajo de 25 minutos
- "Pause timer" - Pausar la sesión actual
- "Start short break" - Comenzar un descanso de 5 minutos
- "Start long break" - Comenzar un descanso de 15 minutos

## Opciones de Personalización

Puedes personalizar tu Temporizador Pomodoro AskLou.io de varias maneras:

- **Duraciones de Sesión**: Modifica el diccionario session_durations para cambiar las duraciones de trabajo o descanso
- **Sensibilidad de Voz**: Ajusta el valor LOUD_THRESHOLD basado en tu entorno
- **Tema Visual**: Cambia los colores del arco para diferentes tipos de sesión
- **Palabras de Comando**: Actualiza la lista voice_commands para usar diferentes frases

## Mejoras Futuras

Mejoras potenciales para versiones futuras:

- Reconocimiento de voz mejorado para detección de comandos más confiable
- Retroalimentación háptica o de audio cuando las sesiones terminen
- Conectividad con aplicaciones de productividad para registro de sesiones
- Altavoz pequeño para notificaciones de audio
- Energía de batería para portabilidad

## Recursos

- [Repositorio GitHub](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)
- [Proyecto Hackster.io](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)
- [Documentación XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/)
- [Documentación Round Display](https://wiki.seeedstudio.com/es/get_start_round_display/)

## Créditos

- Plataforma de hardware por Seeed Studio
- Técnica Pomodoro por Francesco Cirillo
- [Proyecto por Peter Machona](https://github.com/AskLou-io/Pomodoro_Circuit_Python)

## Licencia

Este proyecto se publica bajo la licencia Creative Commons Attribution-NonCommercial (CC BY-NC). Esto significa que eres libre de:

- **Compartir** — copiar y redistribuir el material en cualquier medio o formato
- **Adaptar** — remezclar, transformar y construir sobre el material

Bajo los siguientes términos:

- **Atribución** — Debes dar el crédito apropiado, proporcionar un enlace a la licencia e indicar si se hicieron cambios. Puedes hacerlo de cualquier manera razonable, pero no de ninguna manera que sugiera que el licenciante te respalda a ti o a tu uso.
- **No Comercial** — No puedes usar el material para propósitos comerciales.

---

Temporizador Pomodoro AskLou.io - Productividad enfocada, solo pídela.

## ✨ Proyecto Colaborador

- Este proyecto está respaldado por el [Proyecto Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074) por sus esfuerzos dedicados. Tu trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

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
