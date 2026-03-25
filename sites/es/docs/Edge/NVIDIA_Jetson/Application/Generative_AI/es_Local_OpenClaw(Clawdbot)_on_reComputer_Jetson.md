---
description: Este wiki muestra cómo implementar y usar Clawdbot en reComputer Jetson.
title: OpenClaw(Clawdbot) Local en reComputer Jetson con Ollama
keywords:
  - reComputer
  - Jetson
  - LLM
  - Clawdbot
  - Qwen
  - Ollama
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops_homepage.webp
slug: /local_openclaw_on_recomputer_jetson
sku: 114110314, 114090066
last_update:
  date: 02/3/2026
  author: Youjiang
createdAt: '2026-02-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/local_openclaw_on_recomputer_jetson/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## Descripción General

OpenClaw es un framework de agentes que puede trabajar con LLMs en la nube o modelos locales, dependiendo de tus necesidades de implementación. Los modelos en la nube son convenientes para comenzar: no requieren configuración local, ofrecen una amplia gama de opciones de modelos y son fáciles de escalar. Las desventajas son los costos continuos de tokens, la dependencia de servicios externos y restricciones más estrictas en cuanto a residencia de datos y conectividad. Los modelos locales evitan las tarifas recurrentes de API, mantienen los datos en el dispositivo y continúan operando en redes sin conexión o restringidas. Las desventajas son el esfuerzo adicional de configuración y la necesidad de ajustar el tamaño del modelo a los límites de cómputo y almacenamiento del dispositivo. Para robótica de borde y asistentes de larga duración, estas ventajas hacen que la implementación local sea una opción práctica por defecto. Este wiki muestra cómo ejecutar OpenClaw en reComputer Jetson con Ollama para construir un centro de control de IA autónomo.

## Lo Que Construirás

- Un runtime local de Ollama en Jetson
- OpenClaw Gateway y WebUI ejecutándose en Jetson
- OpenClaw configurado para usar un modelo de Ollama como LLM por defecto

## Hardware Soportado

- reComputer Jetson Serie (ej., reComputer Robotics J501X)
- Se recomienda SSD NVMe para una carga más rápida de modelos

:::note
Este wiki usa [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html) para la demostración, pero otros modelos Jetson también son compatibles.
Asegúrate de que el dispositivo Jetson tenga al menos 16GB de memoria.
:::

## Prerrequisitos

- reComputer Robotics J5011 con Jetpack6.2 preinstalado
- Un Token de Bot de Discord

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::info
Ten en cuenta que el `Discord Bot Token` no es obligatorio; también puedes usar otro software social como WhatsApp.
:::

## Conexión de Hardware

:::note
Antes de comenzar, conecta el dispositivo Jetson a la red y al suministro de energía, y asegúrate de que la conexión de red permanezca estable.
:::


## Paso 1: Instalar Ollama

Abre una ventana de terminal en el dispositivo Jetson, ejecuta el siguiente comando para instalar Ollama en Jetson:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Verifica que la API local sea accesible:

```bash
curl http://localhost:11434/api/tags
```

Si la salida no muestra errores, significa que Ollama se ha instalado correctamente.

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/install_ollama.png" />
</div>

## Paso 2: Descargar un Modelo Local

Descarga al menos un modelo de Ollama. Ejemplo:

```bash
ollama pull qwen3-vl:2b
```

Lista los modelos instalados:

```bash
ollama list
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/ollama_list.png" />
</div>

## Paso 3: Instalar OpenClaw (Clawdbot)

OpenClaw requiere Node.js 22 o más reciente. Instálalo globalmente con npm:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## Paso 4: Configurar OpenClaw

Después de que se complete la descarga de OpenClaw, automáticamente entrará a la página de configuración. Sigue las instrucciones mostradas en la ventana de terminal para configurar OpenClaw.

:::danger
La página del asistente de configuración puede no incluir una opción para configurar un modelo local. No te preocupes — podemos modificar directamente el archivo de configuración más tarde. En el asistente de configuración, puedes elegir omitir la configuración del modelo o configurar temporalmente un modelo basado en la nube.
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/config.png" />
</div>

Si ves la página anterior, significa que OpenClaw se ha instalado y configurado exitosamente. A continuación, procederemos a configurar el modelo local.

Abre el archivo `~/.openclaw/openclaw.json` y agrega o modifica la siguiente configuración.

```json
{
  "agents": {
    "defaults": {
      "models": {"ollama":{}},
      "model": {"primary": "ollama/qwen3-vl:2b"}
    }
  },
  "models": {
    "providers": {
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
}
```

El archivo de configuración completo es el siguiente:

<details>

<summary> ~/.openclaw/openclaw.json </summary>

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "agents": {
    "defaults": {
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "/home/seeed/.openclaw",
      "models": {
        "qwen-portal/coder-model": {
          "alias": "qwen"
        },
        "qwen-portal/vision-model": {},
        "ollama":{}
      },
      "model": {
        "primary": "ollama/qwen3-vl:2b"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "plugins": {
    "entries": {
      "qwen-portal-auth": {
        "enabled": true
      },
      "discord": {
        "enabled": true
      }
    }
  },
  "models": {
    "providers": {
      "qwen-portal": {
        "baseUrl": "https://portal.qwen.ai/v1",
        "apiKey": "qwen-oauth",
        "api": "openai-completions",
        "models": [
          {
            "id": "coder-model",
            "name": "Qwen Coder",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          },
          {
            "id": "vision-model",
            "name": "Qwen Vision",
            "reasoning": false,
            "input": [
              "text",
              "image"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      },
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "auth": {
    "profiles": {
      "qwen-portal:default": {
        "provider": "qwen-portal",
        "mode": "oauth"
      }
    }
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "groupPolicy": "open"
    }
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  },
  "wizard": {
    "lastRunAt": "2026-02-02T06:19:11.256Z",
    "lastRunVersion": "2026.1.30",
    "lastRunCommand": "onboard",
    "lastRunMode": "local"
  },
  "meta": {
    "lastTouchedVersion": "2026.1.30",
    "lastTouchedAt": "2026-02-02T06:19:11.282Z"
  }
}
```

</details>

## Paso 5: Reiniciar los Servicios de OpenClaw

Ejecuta el comando de reinicio:

```bash
openclaw gateway restart
```

## Paso 6: Abrir WebUI y Verificar

Abre la WebUI en el navegador de jetson:

```
http://127.0.0.1:18789/
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/web_ui.png" />
</div>

Si la página no carga, verifica que el Gateway esté ejecutándose.

:::danger
Si sigues viendo un error de "unable to access" al abrir la WebUI, puede ser porque el token de acceso está habilitado. Puedes encontrar el token de WebUI en el archivo de configuración y agregarlo a la URL de WebUI al acceder.
`http://127.0.0.1:18789/?token=...`
::: 

## Demostración de Efectos

La buena noticia es que hemos ejecutado exitosamente OpenClaw usando computación local de bajo consumo (Jetson). 
La mala noticia es que el rendimiento del modelo local no ha cumplido las expectativas.

Esto puede deberse a que mis parámetros de configuración o configuraciones de prompt no están ajustados correctamente. Creo que ajustando los parámetros de trabajo de OpenClaw, podemos optimizar aún más el rendimiento del modelo local.

Si también estás interesado en este proyecto, ¡intenta implementarlo ahora! 

<iframe width="800" height="450" src="https://www.youtube.com/embed/kZbWuK7YFuc" title="Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referencias

- https://docs.openclaw.ai/
- https://docs.openclaw.ai/providers/ollama
- https://ollama.com/
- https://wiki.seeedstudio.com/es/ai_robotics_recomputer_j501_robotics_getting_started/




## Recursos

<JetsonLeadQuote
  buttonText="Solicitar presupuesto personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
