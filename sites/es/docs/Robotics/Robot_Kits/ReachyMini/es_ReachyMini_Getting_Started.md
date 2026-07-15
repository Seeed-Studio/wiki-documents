---
description: Construye y controla ReachyMini, un robot humanoide de escritorio compacto y de código abierto para aprender IA y robótica.
title: Introducción a ReachyMini
keywords:
  - Lerobot
  - Huggingface
  - ReachyMini
  - Robotics
  - 3D Printing
  - Open Source
  - Humanoid Robot
  - Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /reachymini_getting_started
sku: null
translation:
  skip:
    - zh-CN
last_update:
  date: 1/7/2026
  author: TienjuiWong
createdAt: '2026-01-07'
updatedAt: '2026-01-12'
url: https://wiki.seeedstudio.com/es/reachymini_getting_started/
---

<div style={{maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'}}>
  <video
    width="100%"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style={{display: 'block'}}
    ref={(video) => { if (video) video.play().catch(() => {}); }}>
    <source src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🤖</font></span></strong>
</a>
</div>

El **Reachy Mini** es el primer robot de escritorio de código abierto diseñado para explorar la interacción humano-robot y aplicaciones creativas personalizadas. Desarrollado en colaboración por **Pollen Robotics** y **Hugging Face**, este robot humanoide compacto lleva capacidades robóticas de nivel profesional a tu escritorio a un precio asequible.

Optimizado y fabricado por **Seeed Studio**, Reachy Mini combina interacción física expresiva con capacidades modernas de IA. Ya sea que estés creando asistentes de voz, aplicaciones de visión por computadora o herramientas educativas, Reachy Mini proporciona una plataforma completa para la experimentación con IA en el mundo real.

:::tip
Lo que aprenderás

- Las características clave y la arquitectura de Reachy Mini
- Especificaciones de hardware y diferencias entre las versiones Lite y Full
- Cómo ensamblar y configurar tu Reachy Mini
- Cómo controlar el robot usando el SDK de Python
- Cómo integrar modelos y aplicaciones de Hugging Face
- Dónde encontrar recursos y soporte de la comunidad

:::

## Características clave y especificaciones

Reachy Mini integra capacidades impresionantes en un formato compacto de escritorio.

| Característica | Reachy Mini Lite | Reachy Mini (Full) |
|:---|:---|:---|
| **Precio** | 299 $ + envío | 449 $ + envío |
| **Cómputo** | Externo (compatible con Mac/Linux) | Raspberry Pi 4 integrada |
| **Conectividad** | Solo por cable | WiFi + Ethernet (mediante adaptador USB-C) |
| **Alimentación** | Alimentación por cable | Batería + funcionamiento por cable |
| **Micrófonos** | 4 | 4 |
| **Altavoz** | 5 W | 5 W |
| **Cámara** | Gran angular | Gran angular |
| **Acelerómetro** | No | Sí |
| **Movimiento de la cabeza** | 6 GDL | 6 GDL |
| **Rotación del cuerpo** | Sí | Sí |
| **Antenas animadas** | 2 | 2 |
| **Altura** | 28 cm (11") | 28 cm (11") |
| **Peso** | 1,5 kg (3,3 lb) | 1,5 kg (3,3 lb) |

### Dimensiones físicas

- **Altura:** 28 cm / 11 pulgadas (aproximadamente 23 cm / 9 pulgadas en modo reposo)
- **Anchura:** 16 cm / 6,3 pulgadas
- **Peso:** 1,5 kg / 3,3 lb

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini Dimensions" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Dimensiones físicas</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="Degrees of Freedom Table" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Especificaciones de GDL</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="Degrees of Freedom Diagram" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Rango de movimiento</p>
  </div>
</div>

## Diseñado para la interacción humano-robot

Reachy Mini está específicamente diseñado para una interacción humano-robot expresiva y atractiva:

### Movimiento expresivo

- **Cabeza con 6 grados de libertad:** Movimientos de paneo, inclinación y giro de aspecto natural
- **Rotación completa del cuerpo:** Rotación de 360 grados para posicionamiento dinámico
- **Antenas animadas:** Dos antenas expresivas que aportan personalidad y retroalimentación

### Sensado multimodal

- **Matriz de 4 micrófonos:** Captura de audio avanzada para reconocimiento de voz y localización de sonido
- **Cámara gran angular:** Capacidades de visión por computadora para detección de rostros, reconocimiento de objetos y más
- **Altavoz de 5 W:** Salida de audio clara para síntesis de voz y efectos de sonido

### Abierto y extensible

- **Totalmente de código abierto:** Diseño de hardware, SDK de software y entorno de simulación
- **SDK de Python:** Interfaz de programación intuitiva con compatibilidad con JavaScript y Scratch próximamente
- **Integración con Hugging Face:** Acceso directo a modelos de IA de última generación para voz, visión y más

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/wLftEz-QF1E"
      title="Reachy Mini Demo 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/JvdBJZ-qR18"
      title="Reachy Mini Demo 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/vRh8G46Nc5k"
      title="Reachy Mini Demo 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/dMpLCGvE2A0"
      title="Reachy Mini Demo 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## Versiones de hardware

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini Plumber" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite (299 $)

La versión Lite es ideal para desarrolladores que prefieren cómputo externo o que ya cuentan con un entorno de desarrollo preferido.

**Ideal para:**

- Desarrolladores con sistemas Mac/Linux
- Usuarios que desean el máximo control sobre los recursos de cómputo
- Entornos educativos con laboratorios de computación existentes
- Proyectos que requieren integración con infraestructura existente

**Limitaciones:**

- Requiere conexión por cable al ordenador host
- Sin capacidad WiFi
- Sin acelerómetro
- Debe alimentarse mediante toma de corriente

### Reachy Mini Full (449 $)

La versión Full incluye cómputo integrado para completa autonomía y funcionamiento inalámbrico.

**Ideal para:**

- Aplicaciones de robot autónomo
- Investigación y desarrollo inalámbricos
- Proyectos que requieren datos de acelerómetro
- Demostraciones y despliegues portátiles

**Características adicionales:**

- Ordenador integrado Raspberry Pi 4
- Conectividad WiFi
- Batería para funcionamiento inalámbrico
- Acelerómetro integrado

## Guía de ensamblaje

Reachy Mini se vende como un kit que tarda aproximadamente **2-3 horas** en ensamblarse. El proceso de ensamblaje está diseñado para ser accesible para constructores de todos los niveles de experiencia.

### Recursos de ensamblaje

- **Guía de ensamblaje interactiva:** [Instrucciones en línea paso a paso](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)

:::warning[Consejos de ensamblaje]

- Reserva de 2 a 3 horas en un espacio de trabajo limpio y bien iluminado
- Se requiere un juego de destornilladores pequeños (incluido en el kit)
- Sigue la guía en línea paso a paso para obtener los mejores resultados
- Prueba cada subsistema a medida que lo ensamblas (cámara, micrófonos, servos)

:::

## Primeros pasos con el software

### Requisitos previos

Según tu versión, necesitarás:

**Reachy Mini Lite:**

- Ordenador Mac o Linux (compatibilidad con Windows próximamente)
- Python 3.8 o superior
- Conexión USB

**Reachy Mini Full:**

- Red WiFi o conexión Ethernet
- Navegador web para acceder al panel de control

### Instalación rápida

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini Cowboy" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Instala el SDK de Reachy Mini con el siguiente comando:

```bash
pip install reachy-mini
```

> **Consejo profesional:** Instala [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalaciones de aplicaciones entre 10 y 100 veces más rápidas (se detecta automáticamente y, si no está disponible, se recurre a `pip`).

### Ejemplo Hola Mundo

Controla tu robot con solo unas pocas líneas de código:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## Control mediante panel de control

Un panel de control basado en la web proporciona una interfaz intuitiva para probar y controlar Reachy Mini sin escribir código.

**Funciones:**

- Control de motores en tiempo real
- Visualización de la señal de la cámara
- Prueba de micrófonos
- Gestión de aplicaciones
- Diagnóstico del sistema

Descarga el panel de control desde el [repositorio oficial](https://github.com/pollen-robotics/reachy_mini) o accede a él directamente desde la red local de tu Reachy Mini Full.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Ecosistema de Apps de Hugging Face

Reachy Mini cuenta con un ecosistema en crecimiento de aplicaciones listas para usar impulsadas por Hugging Face Spaces. Instala estas apps directamente desde el panel de tu robot con un solo clic.

### Apps destacadas

**App de conversación**

- Interacción en lenguaje natural impulsada por modelos de lenguaje grandes
- Reconocimiento de voz y síntesis de voz
- Personalidad y base de conocimientos personalizables

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Seguimiento de mano de Reachy Mini" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**Rastreador de mano**

- Seguimiento de mano en tiempo real usando visión por computadora
- El robot sigue los movimientos de tu mano
- Ideal para demostraciones y experimentos de interacción

**Radio**

- Transmisión de radio controlada por voz
- Peticiones en lenguaje natural para canciones y emisoras
- Demuestra las capacidades de procesamiento de audio

**Y muchas más:**
Explora la colección completa de apps en [Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Ecosistema de Apps de Reachy Mini"/>
</div>

## Creación de aplicaciones personalizadas

### SDK de Python

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Conversación con Reachy Mini" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

El SDK de Python proporciona un control completo sobre todos los sistemas de Reachy Mini:

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Motor control
    mini.goto_target(head=pose, duration=1.0)

    # Camera access
    frame = mini.camera.get_frame()

    # Audio I/O
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # Accelerometer (Full version only)
    orientation = mini.imu.get_orientation()
```

### Integración de IA

Reachy Mini se integra perfectamente con el amplio ecosistema de modelos de Hugging Face:

- **Reconocimiento de voz:** Whisper, Wav2Vec2
- **Síntesis de voz:** Bark, SpeechT5
- **Visión:** ViT, CLIP, YOLO
- **Lenguaje:** modelos LLaMA, Mistral, GPT
- **Multimodal:** GPT-4V, LLaVA

### Publicación de apps

Comparte tus creaciones con la comunidad global de Reachy Mini:

1. Crea tu app usando el SDK
2. Crea un Space en Hugging Face
3. Añade la etiqueta `reachy-mini`
4. Publica y compártela con millones de usuarios de Hugging Face

## Desarrollo en simulación

Prototipa y desarrolla aplicaciones para Reachy Mini sin hardware usando el entorno de simulación MuJoCo:

```bash
pip install reachy-mini[simulation]
```

Prueba tu código, itera rápidamente y despliega en el hardware cuando esté listo.

## Análisis detallado de las especificaciones técnicas

### Sistema de motores

- **Grados de libertad:** movimiento de cabeza de 6 GDL
- **Control:** servomotores de alta precisión
- **Seguridad:** limitación de corriente y retroalimentación de posición
- **Movimiento suave:** trayectorias interpoladas para un movimiento natural

### Sistema de audio

- **Matriz de micrófonos:** 4 micrófonos dispuestos para una localización óptima del sonido
- **Formación de haz (beamforming):** procesamiento de audio a nivel de hardware
- **SNR:** alta relación señal-ruido para una captura de voz clara
- **Altavoz:** salida de 5 W con respuesta de frecuencia clara

### Sistema de visión

- **Sensor:** cámara gran angular
- **Resolución:** captura de vídeo en HD
- **FPS:** 30 fotogramas por segundo
- **Campo de visión:** optimizado para la interacción de escritorio

### Requisitos de alimentación

**Versión Lite:**

- Alimentado por USB desde el ordenador host o adaptador de pared
- Consumo típico: 5 V @ 2 A

**Versión Full:**

- Batería interna para funcionamiento inalámbrico
- Carga por USB-C
- Autonomía de la batería: 2-4 horas según el uso

## Privacidad y seguridad

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini Astronauta" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Reachy Mini está diseñado teniendo en cuenta la privacidad:

- **Sin recopilación de datos:** el robot no almacena, transmite ni procesa datos personales de forma predeterminada
- **Procesamiento local:** todo el procesamiento de IA puede realizarse localmente
- **Control del usuario:** las funciones de cámara y micrófono están completamente bajo el control del usuario
- **Código abierto:** total transparencia en software y hardware

Reachy Mini no envía ningún dato a Pollen Robotics ni a Hugging Face. Todo el procesamiento ocurre localmente a menos que configures explícitamente servicios en la nube.

## Comunidad y soporte

### Únete a la comunidad

- **Discord:** [Únete al Discord de Reachy Mini](https://discord.com/invite/2bAhWfXme9)
- **GitHub:** [Informa de problemas y contribuye](https://github.com/pollen-robotics/reachy_mini)
- **Sitio web oficial:** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### Documentación y recursos de aprendizaje

- **[Guía oficial de desarrollo](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md):** documentación oficial completa y recursos de desarrollo
- **[Instalación del SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md):** 5 minutos para configurar tu ordenador
- **[Guía de inicio rápido](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md):** ejecuta tu primer comportamiento en Reachy Mini
- **[SDK de Python](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md):** aprende a moverte, ver, hablar y oír
- **[Integraciones de IA](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md):** conecta LLMs, crea Apps y publícalas en Hugging Face
- **[Conceptos básicos](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md):** arquitectura, sistemas de coordenadas y límites de seguridad
- **[Desarrollo secundario](https://github.com/Seeed-Projects/reachy-mini-starter):** guía inicial de Seeed para el desarrollo de aplicaciones personalizadas
- **[Guía de montaje](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide):** instrucciones de montaje paso a paso
- 🤗[**Comparte tu app con la comunidad**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

## ¿Qué sigue?

### Hoja de ruta

La plataforma Reachy Mini está en constante evolución:

- **Compatibilidad con JavaScript:** próximamente para desarrollo basado en la web
- **Integración con Scratch:** programación por bloques para principiantes
- **Apps adicionales:** ecosistema en crecimiento de aplicaciones de la comunidad
- **Ampliaciones de hardware:** accesorios y actualizaciones modulares
- **Modelos de IA mejorados:** modelos optimizados para procesamiento a bordo

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
