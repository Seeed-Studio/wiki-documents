---
description: Introducción al sensor SenseCAP Combo 5 en 1 con 4G
title: Introducción
keywords:
  - SenseCAP Combo
  - Registrador de datos
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /sensecap_combo_introduction
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/es/sensecap_combo_introduction/
---

# Introducción al sensor SenseCAP Combo 5 en 1 con 4G

## Descripción general

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo-intro.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>

<br />

[**SenseCAP Combo 5-in-1 Sensor with 4G**](https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html) es un dispositivo de bajo consumo, estable y fácil de usar, diseñado para la monitorización ambiental multiparámetro. Mide la temperatura del aire, la humedad, la presión atmosférica, la intensidad de la luz y el CO₂. 

Además, puede conectar hasta 10 sensores externos Modbus-RTU RS485 con un [Splitter](https://www.seeedstudio.com/RS485-p-4880.html), ofreciendo una alta compatibilidad con la mayoría de los sensores del mercado. 

Para la transmisión de datos, el dispositivo utiliza conectividad 4G Cat.1 y el protocolo MQTT para cargar los datos a tu servidor de usuario. Está equipado con un panel solar y una batería recargable de ion-litio de 5200mAh, lo que garantiza más de 2 semanas de funcionamiento continuo durante cortes de energía o tiempo lluvioso. También admite alimentación directa por CC. 

Para evitar la pérdida de datos, el dispositivo puede almacenar en caché hasta 500.000 registros de datos localmente cuando la señal es débil o se interrumpe. Una vez que se restablece la comunicación, los datos se cargan automáticamente. Los usuarios también pueden exportar datos históricos directamente mediante una conexión local. 

Diseñado para un despliegue plug-and-play, el dispositivo admite tanto la instalación colgante como en poste, lo que hace que el despliegue sea sencillo incluso para principiantes. Construido con materiales resistentes al agua y a los rayos UV, cumple estrictas normas de durabilidad y es ideal para entornos hostiles como los invernaderos.

## Características

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo.jpg" alt="Software Platform" width={800} height="auto" /></p>

- **Sensores múltiples integrados:** El dispositivo incluye sensores integrados para temperatura del aire, humedad, presión atmosférica, intensidad de la luz y CO₂, etc. (las opciones disponibles varían según la personalización).

- **Alta escalabilidad:** Proporciona una interfaz RS485 que puede conectar hasta 10 sensores externos mediante un [Splitter](https://www.seeedstudio.com/RS485-p-4880.html). Y admite sensores estándar Modbus-RTU RS485 y proporciona salidas de alimentación de 5V y 12V para alimentar dispositivos externos.

- **Almacenamiento en caché de datos fiable:** Cuando las señales 4G son débiles o no están disponibles, el registrador puede almacenar localmente hasta 500.000 registros de datos. Los datos se cargan automáticamente una vez que se restablece la conectividad, y los archivos históricos se pueden exportar a Excel.

- **Opciones de alimentación flexibles:** El dispositivo se alimenta principalmente mediante un panel solar integrado y una batería incorporada, pero también admite una fuente de alimentación externa de CC.

- **Bajo consumo de energía:** Con una batería integrada de 5200mAh, el dispositivo puede funcionar durante más de dos semanas sin carga solar o durante cortes de energía.

- **Mantenimiento sencillo:** Admite actualizaciones remotas de firmware OTA (Over-the-Air), lo que reduce la necesidad de mantenimiento in situ.

- **Funcionamiento en invernadero:** Diseñado para entornos de invernadero y agricultura interior, funciona de forma fiable de 0°C a 40°C.

- **Diseño resistente a la intemperie:** Con un grado de protección IPX5 y materiales resistentes a los rayos UV, el dispositivo está protegido contra la lluvia y el envejecimiento, lo que lo hace adecuado para diversos entornos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance.png" alt="Software Platform" width={800} height="auto" /></p>

## Arquitectura del sistema

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/System Architecture.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

SenseCAP Combo 5-in-1 Sensor with 4G carga los datos a la plataforma en la nube SenseCAP a través de la red 4G Cat.1. Los usuarios pueden ver datos en tiempo real, gestionar dispositivos y recuperar datos históricos a través del [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) o la APP SenseCraft. La plataforma también proporciona HTTP API, MQTT API y WebSocket API para un mayor desarrollo e integración.

## Plataforma de software todo en uno para la gestión

Integrado perfectamente con la [plataforma en la nube SenseCAP](https://sensecap.seeed.cc/portal/#/login) y la APP SenseCraft, proporciona una solución de extremo a extremo desde la vinculación del dispositivo mediante código QR y la monitorización de datos en tiempo real hasta la configuración remota de parámetros, el almacenamiento en caché de datos y el acceso a la API para la integración con terceros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/system.png" alt="Software Platform" width={800} height="auto" /></p>

## Métodos de instalación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Installation Methods.png" alt="Software Platform" width={800} height="auto" /></p>

SenseCAP Combo admite dos métodos de instalación para adaptarse a diferentes escenarios de despliegue.

### Instalación colgante

El dispositivo se puede colgar utilizando un cable a través del orificio de montaje en la parte superior. Este método es adecuado para entornos interiores como invernaderos donde hay estructuras superiores disponibles.

### Instalación en poste

El dispositivo se puede montar en un poste utilizando soportes (no incluidos en el paquete). Este método es ideal para despliegues en campo abierto en exteriores.

## Aplicaciones

SenseCAP Combo 5-in-1 Sensor with 4G es la solución ideal para la monitorización ambiental multiparámetro en diversos escenarios. Se utiliza ampliamente en:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Applications.png" alt="Software Platform" width={800} height="auto" /></p>

- **Invernadero inteligente**: Monitorización en tiempo real de la temperatura, la humedad, el CO₂, la intensidad de la luz y la presión atmosférica para optimizar las condiciones de crecimiento de los cultivos; conexión de sensores de suelo externos mediante RS485 para una recopilación integral de datos ambientales.
- **Agricultura inteligente**: Monitorización ambiental en exteriores para cultivos en campo abierto, huertos y viñedos; seguimiento de los cambios de microclima para apoyar decisiones de agricultura de precisión.
- **Monitorización ambiental**: Monitorización de parámetros meteorológicos y de calidad del aire para estaciones de investigación, sitios industriales y entornos urbanos; registro de datos a largo plazo con almacenamiento en caché fiable de datos para áreas con cobertura celular débil.

## Especificaciones

### Parámetros generales

| Parámetro | Especificación |
|-----------|---------------|
| Tipo de fuente de alimentación | Interfaz Type-C, entrada 5V / 2A |
| Interfaz de expansión | 1x RS485 (Modbus-RTU) |
| Número de sensores conectables | Admite hasta 10 sensores externos usando un Splitter |
| Salida de alimentación para sensor externo | 12V / 0.35A, 5V / 0.35A |
| Protocolo | Protocolo MQTT; admite servidores configurados por el usuario mediante Sensor Hub Configuration Tool NG |
| 4G Cat.1 | Bandas de frecuencia globales / APN configurable; tarjeta Micro SIM / 3FF<br />LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/B18/B19/B20/B25/B26/B28<br />LTE-TDD: B34/B38/B39/B40/B41/B66/B71 |
| Almacenamiento en caché de datos | Almacenamiento local de hasta 500.000 registros en caché / Admite exportación local |
| Antena | Antena integrada |
| Interruptor / indicadores LED | 1x interruptor de encendido, 2x indicadores LED |
| Grado de protección IP | IPX5, tratamiento impermeable de la PCBA |
| Clasificación de resistencia a los rayos UV | F1 |
| Material de la carcasa | PC/ASA |
| Temperatura de funcionamiento | 0°C ~ 40°C <br />**Nota:** La temperatura de funcionamiento del dispositivo está limitada por el adaptador de corriente incluido, que admite un rango de temperatura de funcionamiento de 0°C a 40°C. <br />El adaptador de corriente está diseñado solo para uso en interiores. No expongas el adaptador de corriente directamente a entornos exteriores. El adaptador de corriente debe instalarse dentro de una caja estanca o un armario eléctrico para garantizar una protección adecuada.|
| Temperatura de carga | 0°C ~ 40°C |
| Humedad de funcionamiento | 0 ~ 100 % HR (sin condensación) |
| Batería | Batería recargable de ion-litio de 5200mAh, 3.7V |
| Panel solar | Potencia máxima 1W |
| Instalación | Colgante o en poste (requiere cable para colgar; soportes para montaje en poste. No incluidos en el paquete) |
| Dimensiones | 202 * 202 * 175 mm |
| Peso neto | 0.8 kg |

### Especificaciones de los sensores

| Parámetro | Rango | Precisión | Resolución |
|-----------|-------|----------|------------|
| Temperatura del aire | -40°C ~ +85°C | ±0.2°C | 0.01°C |
| Humedad del aire | 0 ~ 100% HR (sin condensación) | ±2% HR | 0.01% HR |
| Punto de rocío (calculado por algoritmo T/H) | -100°C ~ 80°C | ±2°C | 0.01°C |
| Presión barométrica | 300 ~ 1200 hPa | 1 hPa | 10 Pa |
| Intensidad de la luz | 0 ~ 200,000 Lux | ±5% | 5 Lux |
| CO₂ | 0 - 10,000 ppm | ±50 ppm ±3% \* lectura (0 - 5,000 ppm); <br /> ±5% (5,000 - 10,000 ppm) | 1 ppm |

:::note
Para proyectos que requieran parámetros ambientales adicionales, también están disponibles configuraciones personalizadas con opciones de sensores ampliadas. Para consultas sobre personalización, ponte en contacto con techsupport@seeed.io.
:::

## Descripción del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-2.png" alt="Software Platform" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-3.png" alt="Software Platform" width={800} height="auto" /></p>

## Lista de partes

|  Nombre | Cantidad |
|------|----------|
| SenseCAP Combo 5-in-1 Sensor with 4G | 1 |
| Cable USB Type-C | 1 |
| Adaptador de corriente | 1 |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
