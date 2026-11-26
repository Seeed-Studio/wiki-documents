---
description: Instala y usa la skill oficial de desarrollo en C++ para reCamera 2002 con agentes de codificación con IA para crear andamiajes, convertir modelos, compilar de forma cruzada, desplegar y verificar aplicaciones SG200X.
title: Usar la Skill
keywords:
  - reCamera
  - reCamera 2002
  - AI coding agent
  - Agent Skills
  - SG200X
  - RISC-V
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_2002_development_cpp_skill
sidebar_position: 6
last_update:
  date: '2026-11-20'
  author: Go
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/es/recamera_2002_development_cpp_skill/
---

# Usa la Skill para desarrollar aplicaciones para reCamera 2002

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp" alt="reCamera 2002 AI coding agent skill" /></div>

## Introducción

El [reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev) empaqueta un flujo de trabajo reproducible en C++ para la reCamera 2002 (SG200X) dentro de una Agent Skill. Después de la instalación, tu agente de codificación puede generar un espacio de trabajo de demostración, preparar modelos, compilar binarios RISC-V de forma cruzada, ejecutar pruebas rápidas en el host, empaquetar artefactos, desplegar por SSH y recopilar evidencias.

La skill está impulsada por configuración: `demo.json` describe lo que debe hacer la demo, cada etapa es un comando y las etapas offline deben pasar antes de involucrar un dispositivo.

:::note
Esta skill está dirigida a **reCamera 2002 con el SoC SG200X** (OS >= 0.2.4). **No** es para reCamera Pro / RV1126B / RKNN. Para reCamera Pro, usa la [skill de reCamera Pro](/es/recamera_pro_development_cpp_skill/).
:::

## Lo que puede hacer la skill

- **Generar un espacio de trabajo de demostración** a partir de `demo.json`: estructura de directorios, scripts de compilación y código inicial
- **Obtener o convertir modelos**: modelos alojados por Seeed u ONNX → `.cvimodel` con TPU-MLIR
- **Compilar de forma cruzada** demos en C/C++ para RISC-V con la toolchain Xuantie y el SDK SG200X
- **Ejecutar pruebas rápidas en el host** sin un dispositivo, de modo que los errores lógicos fallen antes del despliegue
- **Empaquetar** artefactos deterministas con hashes para una entrega reproducible
- **Desplegar por SSH**, sondear el dispositivo y diagnosticar fallos
- **Lanzar un visor en vivo** con vídeo UDP H.264, superposiciones de detección y ajuste de parámetros
- **Capturar evidencias** y puntuar la salida frente a una línea base

## Entorno compatible

| Elemento | Configuración compatible |
| --- | --- |
| Dispositivo | Seeed reCamera 2002 (SG200X), OS >= 0.2.4 |
| SoC | SG200X |
| Arquitectura objetivo | riscv64 Linux |
| Formato de modelo | `.cvimodel` (TPU-MLIR / CVI) |
| Host | Linux x86_64 (macOS para validación en el host; Windows vía WSL2) |
| Agentes compatibles | Claude Code, Codex, Gemini CLI |
| No compatible | reCamera Pro / RV1126B / RKNN |

## Instalar la Skill

Clona el repositorio del toolkit y luego copia el directorio de la skill en el directorio de skills de tu agente:

```bash
git clone https://github.com/Seeed-Projects/recamera-2002-cpp-dev.git ~/src/recamera-2002-cpp-dev

# Claude Code
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.claude/skills/

# OpenAI Codex
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.codex/skills/

# Gemini CLI
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.gemini/skills/
```

Después de la instalación, mantén el nombre del directorio de la skill como `recamera-2002-cpp-dev`. El mismo directorio puede servir a varios agentes. Si la skill no aparece en tu sesión actual, reinicia el agente.

## Usar la Skill: guía paso a paso de conteo de personas

Después de instalar la skill, no necesitas ejecutar cada script a mano. Describe el objetivo a tu agente de codificación y este seguirá el flujo de trabajo de la skill. A continuación se muestra una sesión real de desarrollo secundario de conteo de personas.

### 1. Describe la tarea

Introduce esto en Claude Code / Codex:

```text
Use the recamera-2002-cpp-dev skill to implement people counting in the camera view.
```

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera-people-counter-status-en.png" alt="Starting a people counting task with the recamera-2002-cpp-dev skill" />
  <p><em>El agente gestiona automáticamente la validación, compilación cruzada, empaquetado, despliegue y el visor en vivo</em></p>
</div>

A partir de aquí no necesitas ejecutar ningún script a mano. El agente sigue la skill desde la generación del espacio de trabajo hasta la vista en vivo en el dispositivo y luego imprime `LIVE_URL`.

### 2. Despliega y abre la página en vivo

El agente ejecuta automáticamente probe → install → start, abre el visor en el host e imprime `LIVE_URL`.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_count.png" alt="People counting count" />
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_result.png" alt="People counting result in the reCamera Live page" />
  <p><em>reCamera Live: vista en vivo, recuadros de personas, línea de conteo, panel de parámetros y registro del dispositivo</em></p>
</div>

La página muestra la vista en vivo, los recuadros de personas y los conteos de entrada/salida; los cambios en la línea de conteo y la ROI surten efecto de inmediato.

### 3. Iterar

Continúa la conversación:

```text
Move the counting line up and shrink the ROI to the lower half of the frame.
```

```text
Increase the track confirmation frames from 2 to 3 to reduce false counts.
```

```text
Publish the current count and in/out totals to Home Assistant over MQTT.
```

El agente modifica el proyecto, recompila, vuelve a desplegar y reutiliza el mismo flujo de verificación.

## Referencia de comandos

Aquí solo se mantienen los dos puntos de entrada más comunes. Para el conjunto completo de comandos, parámetros y advertencias, consulta el repositorio oficial:

- [README.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/README.md)
- [SKILL.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/SKILL.md)

```bash
# Create a workspace with the live transport skeleton
python3 scripts/new_demo.py --name my_live --task detection --live udp --out ~/reCamera_demo

# Deploy and open the live page
python3 scripts/launch_demo.py --demo-dir ~/reCamera_demo/my_live --host <device-ip>
```

## Flujo de trabajo de desarrollo

1. **Generar** el espacio de trabajo a partir de `demo.json`.
2. **Validar** la configuración del proyecto sin conexión.
3. **Compilar** el binario RISC-V y registrar el bloqueo de la toolchain.
4. **Realizar pruebas rápidas** de la lógica en el host sin un dispositivo.
5. **Empaquetar** un archivo determinista con hashes de artefactos.
6. **Desplegar** por SSH y sondear el dispositivo.
7. **Capturar evidencias** y puntuar el resultado frente a una línea base.

De forma predeterminada, la skill compila e inspecciona los artefactos localmente. La transferencia de archivos, los cambios de servicio y la ejecución en el dispositivo solo ocurren cuando los solicitas y autorizas explícitamente.

## Solución de problemas

| Problema | Posible causa | Solución |
| --- | --- | --- |
| La skill no aparece en la lista | El agente no ha recargado su directorio de skills | Reinicia el agente y verifica la ruta de instalación mostrada arriba |
| La compilación cruzada falla | Falta Xuantie GCC 10.2.0, el SDK SG200X o `SG200X_SDK_PATH` | Usa un host Linux/WSL2 y vuelve a ejecutar la comprobación del entorno |
| La conversión del modelo falla | Falta TPU-MLIR o el paquete `onnx`, o el contrato del modelo es incompatible | Instala las dependencias opcionales e inspecciona primero la entrada/salida del modelo |
| El despliegue por SSH falla | El dispositivo no es accesible o la contraseña no está configurada | Comprueba la conexión USB/RNDIS y establece `RECAMERA_PASSWORD` |
| El binario se ejecuta en el host pero no en el dispositivo | Arquitectura incorrecta o biblioteca C incompatible | Verifica que el ELF sea riscv64 y coincida con el sysroot SG200X |
| La vista en vivo no muestra detecciones | La sección `live` está incompleta o la detección no está implementada | Corrige la demo antes de declarar éxito; informa `placeholder` o `degraded` con honestidad |

## Recursos

- [Repositorio del reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev)
- [Desarrollar en reCamera con C/C++](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp/)
- [Especificaciones de hardware de reCamera 2002](https://wiki.seeedstudio.com/es/recamera_2002_series_hardware_and_specs/)
- [Skill de desarrollo de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_development_cpp_skill/)

## Preguntas y respuestas

### ¿Puedo usar esta skill con reCamera Pro?

No. Esta skill está dirigida solo a **reCamera 2002 (SG200X)**. Para reCamera Pro (RV1126B / RKNN), usa la [Skill de desarrollo de reCamera Pro](/es/recamera_pro_development_cpp_skill/).

### ¿Cómo exporto registros para la solución de problemas?

Si el despliegue o la vista en vivo fallan, recopila los registros de la demo en el host y los registros del dispositivo en un único archivo:

```bash
# On the host: pack the demo workspace logs and evidence
cd ~/reCamera_demo/my_live
tar -czf recamera-2002-host-logs.tar.gz logs/ evidence/ 2>/dev/null || true

# Collect device-side logs over SSH
ssh recamera@<device-ip> "dmesg > /tmp/dmesg.log; tar -czf /tmp/recamera-2002-device-logs.tar.gz -C /var/log . /tmp/dmesg.log 2>/dev/null" || true
scp recamera@<device-ip>:/tmp/recamera-2002-device-logs.tar.gz .
```

Envía los archivos junto con una descripción del problema, el modelo de tu hardware y la versión del sistema operativo de reCamera a **techsupport@seeed.io**.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
