---
description: "Creación de un sitio de monitoreo de suelo y aire con LoRaWAN que se integra en Home Assistant: qué dispositivos necesitas, cómo desplegar cada una de las tres rutas de ingesta, qué interfaces MQTT están disponibles"
title: 'Monitoreo Ambiental Agrícola con LoRaWAN: Hardware, Despliegue e Interfaces'
keywords:
  - monitoreo ambiental agrícola
  - humedad del suelo LoRaWAN
  - monitoreo de CE del suelo
  - sistema de monitoreo de invernaderos
  - SenseCAP S210x
  - ChirpStack
  - The Things Stack
  - Home Assistant
  - descubrimiento MQTT
  - gateway LoRaWAN
  - SenseCAP M2
  - reComputer R12 Serie
image: https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg
slug: /solutions/agri-env-monitoring
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/agri-env-monitoring/
generated_from: sensecraft-solutions@agri_env_monitor
---

:::caution[Aviso de uso]
Este es un panel de operaciones, no un sistema de medición certificado: el valor mostrado es el valor bruto que reportó el nodo, con una unidad asociada.
:::

## Qué hace esta solución

La humedad y la CE del suelo en un invernadero determinan cuándo regar y cuándo fertilizar; la lluvia y la temperatura del suelo en un campo abierto deciden lo mismo para otro cultivo. Los nodos LoRaWAN SenseCAP miden esos valores y los reportan por el aire. Los uplinks se convierten en entidades de Home Assistant con la unidad, clase de dispositivo y clase de estado correctas: aparecen en un panel, acumulan historial y generan una notificación cuando un valor cruza un umbral.

Está pensada para invernaderos, parcelas a cielo abierto, sitios sin internet utilizable y despliegues SenseCAP existentes que quieren un panel local sin mover nada.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/agri_env_monitor)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Los nodos SenseCAP funcionan desde el primer momento</h3>
                <p>Los nodos S210x reportan según el ciclo configurado en el nodo, sin necesidad de enviarles nada. Las entidades se crean mediante descubrimiento MQTT con unidades y clases configuradas; no hay que escribir YAML.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Las sondas de terceros se conectan de la misma forma</h3>
                <p>Las sondas RS485 o analógicas existentes entran a través del registrador de datos S2100 y usan el mismo mapeo de mediciones. El mapeo, los archivos compose, el panel y las automatizaciones se entregan en el paquete público de la solución; añadir una magnitud es una fila en un archivo de configuración.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Puede funcionar sin internet en absoluto</h3>
                <p>ChirpStack se ejecuta en el gateway M2, el bridge y Home Assistant en un host local. Sin cuenta en la nube, sin conexión saliente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Cambia el servidor de red, conserva el panel</h3>
                <p>Los nombres de las entidades son idénticos en la nube SenseCAP, en un The Things Stack autoalojado y en un ChirpStack local, por lo que cambiar de ruta deja los paneles, automatizaciones y exportaciones intactos.</p>
            </div>
        </li>
    </ul>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg" alt="Panel de Home Assistant que muestra entidades de humedad del suelo, ambiente y sensor de CE"/>
</div>

## Qué hardware necesitas

Cuatro elementos en el sitio: los nodos LoRaWAN, un gateway que los escuche, un servidor de red y un host Linux con Docker.

**① Los nodos**: los sensores SenseCAP S210x miden directamente; un registrador de datos S2100 incorpora las sondas RS485 o analógicas de terceros existentes a la misma red LoRaWAN. No se despliega nada en ninguno de los dos: miden y reportan periódicamente según un ciclo configurado en el nodo.

**② El gateway y el servidor de red**: las tres rutas solo difieren aquí, y la elección determina si el sitio necesita internet.

| | Dispositivo | Función | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/f/i/first_page_all-31.jpg" alt="SenseCAP S2101" width="110" /> | [SenseCAP S210x](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)<br/>Nodos de sensores de suelo y aire | Medir y reportar | Siempre. Elige la variante por la magnitud que necesitas y la banda por tu región |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992872-application-10.png" alt="SenseCAP S2100" width="110" /> | [SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)<br/>Registrador de datos LoRaWAN | Sonda de terceros a LoRaWAN | Ya tienes sondas RS485 o analógicas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/_/__front-05.png" alt="S-Soil MTEC-02B" width="110" /> | [S-Soil MTEC-02B](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)<br/>Sonda RS485 de humedad, temperatura y CE del suelo | Se cablea al S2100 mediante RS485 (Modbus-RTU); el S2100 envía el uplink LoRaWAN | Necesitas humedad, temperatura y CE del suelo a través de la ruta S2100 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 gateway" width="110" /> | [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>Gateway LoRaWAN de interior | Reenvía a la nube SenseCAP o ejecuta ChirpStack por sí mismo | Quieres un sitio totalmente local: cambia al servidor de red integrado en la interfaz web del M2 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reComputer R1225" width="110" /> | [reComputer R12 Series](https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-EU868-p-6720.html)<br/>Gateway LoRaWAN y controlador industrial | Es el gateway y aloja The Things Stack en la misma máquina | Estás autoalojando The Things Stack y no tienes gateway |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>Host reRouter CM4 | Ejecuta el servidor de red o ejecuta el panel | Necesitas un host y aún no tienes una máquina Linux con Docker |

**③ El host del panel**: cualquier máquina Linux con Docker. Ejecuta Home Assistant, el broker MQTT y `agri-env-bridge`, y no necesita acceso entrante a internet.

**Pide nodos, gateway y concentrador para la misma banda** (EU868 / US915 / AS923, etc.). La banda se fija en fábrica y no puede cambiarse por software. Para las dos rutas autoalojadas también necesitas el DevEUI, JoinEUI y AppKey de cada nodo para registrarlo en el servidor de red.

### Límites de selección negativa

- **Transmisión de alta velocidad**: LoRaWAN está diseñado para telemetría periódica (intervalos de 5–60 min); para monitoreo de video continuo o control de subsegundo, usa 4G o Ethernet industrial cableado.
- **Recintos y silos metálicos**: Los silos metálicos gruesos o las obstrucciones pesadas subterráneas causan una atenuación de RF severa; usa antenas externas o sensores cableados RS-485.

## Cómo se despliega un sitio

### 1. Monta los nodos

:::tip[Fija la profundidad de la sonda según la zona radicular y luego deja la sonda en su lugar]
Las sondas de suelo leen la capa en la que se encuentran. Las lecturas a 10 cm y a 40 cm son entidades separadas (`soil_moisture_10cm` … `soil_moisture_40cm`). Decide la profundidad según la zona radicular del cultivo antes de cavar el primer hoyo; mover una sonda más tarde hace que el historial ya registrado en esa entidad no sea comparable.
:::

La cobertura de radio tiene que medirse en el sitio; no se da aquí ninguna cifra de alcance. Antes de fijar las posiciones de los sensores, confirma en el sitio que el gateway recibe los uplinks de cada nodo.

### 2. Instala el software: de 3 a 6 pasos según la ruta

Los pasos por dispositivo y los paquetes de aplicación están en la página de diseño de referencia; elige una configuración para tu sitio y descárgala.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/agri_env_monitor" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descárgala 🖱️</font></span></strong>
    </a>
</div><br />

Esquema:

1. **Desplegar Home Assistant y el broker** en el host Linux (los tres recorridos, un único despliegue con Docker compose).
2. **Levantar el servidor de red**: nada que hacer en el recorrido de la nube; en el recorrido con ChirpStack cambia el M2 a su servidor de red local integrado en la interfaz web, o levanta un stack de ChirpStack con compose en un host Linux; en el recorrido con The Things Stack levanta el stack con su Postgres y Redis en la pasarela reComputer R12 Serie.
3. **Instalar el decodificador** (solo recorridos autoalojados): el formateador de payload en The Things Stack, o el códec del perfil de dispositivo en ChirpStack. Sin él, no aparece ninguna entidad.
4. **Unir los nodos** (solo recorridos autoalojados): registra cada DevEUI, JoinEUI y AppKey en el servidor de red.
5. **Desplegar el bridge** con la fuente configurada para el recorrido y las credenciales del broker rellenadas.
6. **Importar el panel y las automatizaciones** y confirmar que las entidades llevan valores.

Tiempo estimado **45 minutos**, dificultad **intermedia**. El recorrido con The Things Stack lleva más tiempo: hay que montar físicamente el concentrador y el stack levanta su propia base de datos y caché.

**La verificación es la misma en los tres recorridos**: el panel Lovelace importado en el último paso muestra las entidades con valores.

## Interfaces disponibles

Todo sale por un único broker MQTT en el puerto **1883**, ejecutándose en el host del panel. Tres topics retenidos transportan toda la interfaz.

- **Home Assistant**: cero configuración. El bridge publica configuraciones de descubrimiento, así que las entidades aparecen por sí solas con la unidad, clase de dispositivo y clase de estado correctas; no se escribe YAML a mano.
- **Un sistema de riego o de gestión agrícola**: suscríbete a `agri_env/sensecap_<deveui>/<entity_key>/state` para el valor y a `agri_env/sensecap_<deveui>/availability` para saber si el nodo sigue activo. Ambos son retenidos, así que un suscriptor que se conecte tarde sigue recibiendo la situación actual de inmediato.
- **Tu propio servicio**: la configuración de descubrimiento en `homeassistant/…` lleva todos los metadatos de la entidad (unidad, clase de dispositivo, clase de estado, identificadores del dispositivo), lo cual basta para construir un esquema.

### Topics y payloads

| Topic / puerto | Payload | Retenido |
|---|---|---|
| `homeassistant/sensor/sensecap_<deveui>/<entity_key>/config` (1883) | Configuración de descubrimiento, una por entidad: `name`, `unique_id`, `object_id`, `state_topic`, `availability_topic`, `unit_of_measurement`, `state_class`, `device.identifiers` | Sí |
| `agri_env/sensecap_<deveui>/<entity_key>/state` (1883) | El valor de una medición, p. ej. `33.8` | Sí |
| `agri_env/sensecap_<deveui>/availability` (1883) | `online` o `offline` | Sí |

**Nombrado de entidades**: el id de la entidad es `sensor.sensecap_<deveui>_<entity_key>`, con el DevEUI completo en minúsculas; una forma abreviada colisiona entre nodos cuyas direcciones comparten un sufijo. Cambiar la regla más tarde implica vaciar juntos los mensajes retenidos del broker y el registro de entidades de Home Assistant; de lo contrario, los topics antiguos vuelven tras un reinicio.

**Mantén el broker en una LAN de confianza; no lo expongas a internet.** Sus credenciales están en archivos `.env` en el host, y en el recorrido con ChirpStack el broker del lado LNS se ejecuta sin autenticación en la red de compose.

## Rendimiento y datos medidos

### Tiempo de ejecución y parámetros clave

Un servicio, `agri-env-bridge`, se sitúa detrás de los tres recorridos y se ejecuta en el host del panel junto a Home Assistant y el broker MQTT.

| Recorrido | Qué lee el bridge |
|---|---|
| Nube SenseCAP | El SenseCAP OpenAPI más el flujo MQTT de la nube; rellena el historial mes a mes en el primer arranque |
| The Things Stack | La integración MQTT del stack, después de que el formateador de payload haya decodificado el uplink |
| ChirpStack | La integración MQTT de ChirpStack, después de que el códec del perfil de dispositivo haya decodificado el uplink |

- **Mapeo de mediciones**: `assets/config/measurements.yaml`. Cubre temperatura y humedad del suelo a cuatro profundidades, tensión del suelo, flujo de calor y contenido volumétrico de agua; temperatura del aire, humedad, CO2, presión barométrica, PM2.5 y PM10, ruido; pH, oxígeno disuelto, turbidez, TDS, salinidad y temperatura del agua; velocidad y dirección del viento, radiación solar, duración de la insolación, PAR y cuántica de luz; caudal, flujo total, nivel de líquido y fuga de agua. Añadir una magnitud es una fila nueva, sin cambio de código; los valores nunca se escalan, solo se les asigna una unidad.
- **Umbral de desconexión**: por defecto dos ciclos de reporte S210x más margen. Al expirar, las entidades del nodo pasan a no disponibles en Home Assistant, conservando el último valor.
- **Desduplicación**: las lecturas se indexan por `(DevEUI, measurementId, timestamp)`, de modo que un relleno histórico desde la nube y el flujo en vivo nunca cuentan doble la misma lectura; cuando una entidad tiene dos valores, prevalece el más reciente.
- **Comprobación funcional**: uplinks registrados reproducidos en el broker en los tres formatos de origen crearon 15 entidades.
- **Reproducción**: las pruebas de reproducción se encuentran en el repositorio `tests/replay_bench.py`; ejecuta `python3 tests/replay_bench.py --fixtures tests/data/` para verificar tres tipos de uplink y el registro automático de 15 entidades.

### Degradación conocida

- **El broker es un único punto de fallo**: mientras está caído, ninguno de los tres recorridos se actualiza. Los topics de estado son retenidos, así que Home Assistant recupera el último valor tras un reinicio.

## Procedencia de datos y recursos

- **La tabla de `measurementId` a magnitud física** en `assets/config/measurements.yaml` se extrajo de las fuentes del decodificador SenseCAP en [Seeed-Solution/SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder), commit `d0a2342`: `third_party/SenseCAP-Decoder/S210X/Helium/SenseCAP_S210X_Helium_Decoder.js` para la serie S210X y `third_party/SenseCAP-Decoder/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js` para la T1000. Cada entrada en el YAML lleva el archivo fuente y la línea de la que procede.
- **La licencia de ese repositorio no está confirmada**: no tiene archivo LICENSE ni sección de licencias en su README; la única declaración de licencia que contiene es un encabezado de archivo aportado por terceros que dice `Unlicensed for internal use`. **El paquete de la solución no redistribuye el decodificador.** Solo utiliza la correspondencia `id -> quantity`; la guía de despliegue para los dos recorridos autoalojados enlaza al repositorio original. Confirma la licencia con Seeed antes de distribuir el propio decodificador.
- **Las columnas `device_class`, `unit_of_measurement` y `state_class`** no proceden del decodificador: esa información no existe allí. Se derivaron de la documentación de sensores de Home Assistant.
- **Los diagramas de arquitectura** en la página de diseño de referencia se dibujan a partir de un IR de Arquitectura; el arte de producto procede del catálogo revisado de pegatinas de producto de Seeed.
