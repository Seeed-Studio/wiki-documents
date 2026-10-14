---
description: "Controla las luces y los electrodomésticos en Home Assistant por voz con reconocimiento de voz local: hardware, despliegue, interfaces y datos medidos en un reComputer J40"
title: Control de voz local en Home Assistant — Selección, despliegue y datos medidos
keywords:
  - voz local de Home Assistant
  - asistente de voz de Home Assistant
  - control por voz del hogar inteligente
  - reconocimiento de voz local
  - Wyoming
  - Home Assistant Voice
  - Zigbee
  - Jetson Orin NX
  - Qwen3-ASR
  - Matcha-TTS
image: https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg
slug: /solutions/home-assistant-local-voice
sidebar_position: 24
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/solutions/home-assistant-local-voice/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usarlo]
Comandos de voz en chino e inglés. La integración oficial de Xiaomi Home para Home Assistant tiene licencia solo para uso no comercial y no viene preinstalada; no la uses en proyectos comerciales.
:::

## Qué hace esta solución

Integra las luces, cortinas, aire acondicionado y sensores Zigbee de una casa en Home Assistant y los controla con una sola frase. Di "enciende la luz del salón" y Home Assistant lo ejecuta localmente y responde que la luz está encendida. El reconocimiento y la síntesis de voz se ejecutan en un reComputer J40 local, por lo que el audio hablado no se sube a un servicio de voz en la nube. Es adecuado para salones y dormitorios, y para integradores de domótica que entregan sistemas en casas de clientes.

- Paquete de despliegue (Docker Compose y plantilla de configuración de Home Assistant): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/home_assistant_whole_home)
- Código fuente del motor de voz: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sin audio en la nube</h3>
                <p>La comprensión del comando y la generación de la respuesta ocurren ambas en el reComputer J40; Home Assistant se ejecuta localmente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Texto 0,12 s después del habla</h3>
                <p>Mediana sobre 5 comandos en chino e inglés; consulta "Rendimiento y datos medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Integración nativa con Home Assistant</h3>
                <p>El servicio de voz se une al asistente de voz de Home Assistant a través de la integración Wyoming Protocol, sin cambios en Home Assistant.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Dispositivos Zigbee directamente</h3>
                <p>Conecta un Connect ZBT-2 y los sensores y conmutadores Zigbee se unen a Home Assistant sin gateways de marca.</p>
            </div>
        </li>
    </ul>
</div>

### En un dispositivo real

Un intercambio en el asistente de voz de Home Assistant: el "enciende la luz del salón" hablado (en chino) es reconocido por el servicio de voz local, Home Assistant lo ejecuta y responde que la luz está encendida, y la tarjeta de la luz del salón a la derecha se enciende.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg" alt="Asistente de voz de Home Assistant: enciende la luz del salón, la luz está encendida"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/dashboard-zh-20261008-53455231.jpg" alt="Panel de Home Assistant: luz del salón, cortinas, temperatura, humedad, aire acondicionado; luz del dormitorio y humidificador"/>
</div>

Las luces, cortinas, aire acondicionado y sensores de las capturas de pantalla son dispositivos de demostración simulados; la entrada de voz fue sintetizada por el mismo reComputer J40, no grabada de una persona.

## Hardware que necesitas

Cuatro elementos en el lugar: el host de Home Assistant, el host de voz, un coordinador Zigbee y un terminal de voz.

| Dispositivo | Función | Notas |
|---|---|---|
| Host ARM64 Linux (SO de 64 bits, 8 GB de RAM) | Ejecuta Home Assistant | Uno por hogar |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> [reComputer J40 Series (J4012, Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | Reconocimiento y síntesis de voz locales | Descarga los modelos de voz en el primer arranque; deja al menos 30 GB de disco libres |
| Home Assistant Connect ZBT-2 | Integra dispositivos Zigbee | Se conecta a un puerto USB del host de Home Assistant |
| Home Assistant Voice Preview Edition | Terminal de voz en la habitación: escucha y reproduce respuestas | Uno por habitación |
| Sensores Zigbee SONOFF SNZB (opcional) | Temperatura, humedad y otros estados | Se unen a través del ZBT-2 |

El host de Home Assistant, el reComputer J40 y los terminales de voz comparten una misma LAN. Para la app Apple Home, el iPhone debe estar en la misma LAN que el host de Home Assistant.

## Despliegue en el lugar

### 1. Coloca los dispositivos

:::tip[Mantén el host de voz separado de Home Assistant]
El reComputer J40 solo ejecuta el servicio de voz, por lo que puede estar en un armario o rack de red y comunicarse con Home Assistant a través de la LAN; coloca un terminal de voz en cada habitación donde la gente hable.
:::

### 2. Instala el software: tres pasos

Los pasos por dispositivo están en la página de diseño de referencia; esto es el esquema general.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Host de Home Assistant**: despliega Home Assistant con las frases de comando en chino, inglés y japonés incluidas y la plantilla de habitaciones/dispositivos.
2. **Host de voz**: despliega el servicio de voz en el reComputer J40; descarga los modelos en el primer arranque y después el reconocimiento y la síntesis se ejecutan en el dispositivo.
3. **Conecta y comprueba**: añade la integración Wyoming Protocol en Home Assistant apuntando a los dos puertos del reComputer J40, selecciónalo como reconocimiento de voz a texto y texto a voz del asistente, luego di "enciende la luz del salón" a un terminal de voz y confirma que la luz se enciende.

## Interfaces

El servicio de voz se ofrece a Home Assistant a través de Wyoming Protocol; toda la demás automatización permanece en Home Assistant.

- **Home Assistant**: añade la integración Wyoming Protocol; `seeed-local-voice` aparece como voz a texto y texto a voz en el asistente de voz.
- **Apple Home / Siri**: el puente HomeKit de Home Assistant sincroniza los dispositivos con el iPhone.
- **Tu propio sistema**: lee y escribe estados de dispositivos a través del propio API de Home Assistant.

| Puerto | Máquina | Contenido |
|---|---|---|
| HTTP 8123 | Host de Home Assistant | Interfaz web y API de Home Assistant |
| TCP 10300 | reComputer J40 | Servicio de voz a texto (Wyoming) |
| TCP 10200 | reComputer J40 | Servicio de texto a voz (Wyoming) |

## Rendimiento y datos medidos

### De extremo a extremo: del habla a la acción

Home Assistant se ejecutó en un host ARM64 Linux con 8 GB de RAM y el servicio de voz en un reComputer J40 Series (Orin NX 16GB); la entrada fue voz sintetizada enviada al asistente de voz de Home Assistant.

| Métrica | Resultado |
|---|---|
| Comandos de luz en chino e inglés | 5/5 ejecutados, todos gestionados localmente por Home Assistant (medido) |
| Del final del habla al texto reconocido | mediana 0,12 s, rango 0,11–0,95 s (medido) |

Reproducir: `sensecraft-solutions/solutions/home_assistant_whole_home` (paquete de despliegue)

### Servicio de voz por sí solo

Mismo reComputer J40 Series, servicio de voz llamado directamente, voz sintetizada mono de 16 kHz como entrada.

| Texto | Primer audio de respuesta | Reconocido | Transcripción tras el final del habla |
|---|---:|---|---:|
| 打开客厅灯 (turn on the living room light) | 0.122 s (medido) | 打开客厅灯。 | 0.383 s (medido) |
| 关闭卧室的灯 (turn off the bedroom light) | 0.049 s (medido) | 关闭卧室的灯。 | 0.421 s (medido) |
| Turn on the living room light | 0.115 s (medido) | Turn on the living room light. | 0.579 s (medido) |

A través de la ruta Wyoming, dos muestras se transcribieron en 0,13 s (medido).

Reproducir: `sensecraft-solutions/solutions/home_assistant_whole_home/assets/docker/docker-compose.jetson-voice.yml`

### Modelos y runtimes

| Dispositivo | Reconocimiento de voz | Síntesis de voz | Runtime |
|---|---|---|---|
| reComputer J40 Series | Qwen3-ASR | Matcha-TTS | TensorRT-Edge-LLM / TensorRT |

Ajustes que afectan a los resultados:

- Idioma del asistente: chino o inglés, cada uno con sus frases de comando incluidas.
- Nombres de dispositivos y habitaciones: los comandos coinciden con los nombres en Home Assistant, por lo que "living room light" debe coincidir con el nombre de la entidad.

### Degradaciones conocidas

- **Alias de entidad y divergencia en la formulación**: La coincidencia de intenciones se basa en los nombres y alias de las entidades. Si una frase hablada se desvía significativamente del alias de entidad de Home Assistant configurado, el texto puede transcribirse correctamente sin que se dispare una automatización.
- **Intenciones compuestas y secuenciales**: La canalización está ajustada para el control del hogar con una sola intención; las solicitudes compuestas (por ejemplo, "turn on AC and close the blinds halfway") deben emitirse como comandos separados.
- **Concurrencia de voz en múltiples clientes**: Un único host J4012 atiende cómodamente de 1 a 3 endpoints satélite de voz; entradas de voz largas y simultáneas desde varias habitaciones pueden causar un ligero aumento en el tiempo hasta el primer token.

## Fuentes de datos y recursos

- Las capturas de pantalla provienen de Home Assistant 2026.9.3 (Licencia Apache 2.0, [home-assistant.io](https://www.home-assistant.io)) con dispositivos simulados.
- La entrada de voz fue generada por la misma síntesis de voz del reComputer J40; no se utilizaron grabaciones humanas ni audio de terceros.
