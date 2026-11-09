---
description: Amplía temporalmente tu ruta de comunicación MeshCore con SenseCAP Card Tracker T1000-E compartiendo contactos a través del Canal Público y permitiendo que un dispositivo Companion retransmita mensajes con el Modo Repeat.
title: Compartir contactos y repetición con Companion
keywords:
  - MeshCore
  - Card Tracker T1000-E
  - Companion Repeat
  - Contact Sharing
  - Public Channel
  - LoRa Mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png
slug: /t1000e_meshcore_contact_sharing_companion_repeat
sku: 114993369,114993649
sidebar_position: 3
last_update:
  date: 10/16/2026
  author: Advent Jiang
---

# Amplía tu red MeshCore con T1000-E: compartir contactos y repetición con Companion

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png" alt="Dispositivos SenseCAP T1000-E usados con la App MeshCore" width={900} height="auto" /></p>

## Introducción

Cuando dos usuarios de MeshCore están muy alejados, o los edificios y el terreno bloquean la ruta de radio, puede que no puedan recibir los mensajes del otro. Si ambos dispositivos pueden alcanzar un SenseCAP Card Tracker T1000-E situado entre ellos, puedes habilitar el Modo Companion Repeat en ese dispositivo intermedio y dejar que reenvíe mensajes temporalmente.

Esta guía utiliza tres dispositivos T1000-E ejecutando el firmware MeshCore. Muestra cómo compartir identidades de contacto a través del Canal Público, cómo configurar una retransmisión temporal con un dispositivo Companion y cómo se comparan los resultados de comunicación cuando el dispositivo de retransmisión está apagado y encendido.

## Características clave

- Intenta ampliar la ruta de comunicación temporalmente en condiciones de red adecuadas, sin desplegar de antemano un Repeater fijo dedicado.
- Realiza toda la configuración — compartir contactos y activar/desactivar la repetición — en la conocida App MeshCore, para que un equipo pequeño pueda configurarse rápidamente.
- Observa directamente qué aporta el nodo intermedio a esta comunicación entre nodos mediante una prueba comparativa con el dispositivo encendido y apagado.

## Cómo funciona

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-relay-topology.png" alt="Topología de tres nodos: Companion1 retransmite entre Companion2 y Companion3" width={900} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 funciona con el Modo Repeat habilitado, mientras que Companion2 y Companion3 permanecen en modo Companion normal.</i></p>

Compartir contactos y reenviar mensajes resuelven dos problemas diferentes:

- **Compartir contactos** permite que Companion2 y Companion3 obtengan la Identidad del otro y la guarden como contacto. Por sí solo, no crea ninguna cobertura de radio.
- **Modo Companion Repeat** permite que el dispositivo intermedio, Companion1, participe en el reenvío de paquetes cuando las condiciones lo permiten.

El Canal Público puede transportar mensajes antes de que se intercambie cualquier información de contacto; el intercambio de identidades prepara principalmente los dispositivos para la mensajería dirigida posterior.

## Requisitos de hardware y software

| Elemento | Usado en esta prueba |
| --- | --- |
| Dispositivos | SenseCAP Card Tracker T1000-E × 3 |
| Firmware / App | Firmware MeshCore V1.17.1; App MeshCore V1.47.0 |
| Roles | Companion1: Repeat Mode ON; Companion2 / Companion3: Repeat Mode OFF |
| Ajustes de radio | 869.495 MHz, ancho de banda 250 kHz, factor de dispersión 10, tasa de codificación 5, potencia de transmisión 22 dBm |

:::caution
Los parámetros anteriores son solo la configuración utilizada en esta prueba; no significan que esta frecuencia y potencia estén permitidas en todas las regiones. Elige los parámetros de radio de acuerdo con la normativa de radio local. Para la configuración inicial, sigue la guía [Get Started with MeshCore](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/) para el T1000-E.
:::

## Primeros pasos

### Paso 1: Configurar los dispositivos y los parámetros de LoRa

Configura los tres dispositivos T1000-E como dispositivos Companion que puedan conectarse a la App MeshCore, y asegúrate de que la versión de firmware y los ajustes de LoRa sean idénticos en todos ellos. Este ejemplo utiliza parámetros de radio personalizados. Después de guardar la configuración, confirma que cada dispositivo esté funcionando con la nueva configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-radio-settings.png" alt="Ajustes de radio LoRa utilizados en la prueba" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>La configuración de radio utilizada en esta prueba. La captura de pantalla se tomó de Companion2, que funciona con el Modo Repeat deshabilitado.</i></p>

### Paso 2: Habilitar el Modo Companion Repeat en el dispositivo intermedio

En Radio Settings en Companion1, activa **Enable Repeat Mode** y guarda. Deja el Modo Repeat deshabilitado en Companion2 y Companion3. Ten en cuenta que el rango de frecuencias en el que se puede habilitar el Modo Repeat está limitado por el firmware y la App. Si se rechaza un ajuste, utiliza una configuración que esté tanto soportada como permitida por la normativa local.

### Paso 3: Establecer relaciones de contacto

Haz que Companion1 intercambie información de identidad con Companion2 y Companion3 por separado. Cuando esto se haya hecho, ambos dispositivos finales aparecerán en la lista de contactos de Companion1, pero Companion2 y Companion3 aún no tendrán al otro guardado como contacto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-list.png" alt="Lista de contactos de Companion1 mostrando Companion2 y Companion3" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>La lista de contactos de Companion1 contiene tanto a Companion2 como a Companion3.</i></p>

### Paso 4: Compartir contactos a través del Canal Público

Comparte las tarjetas de contacto de Companion2 y Companion3 en el Canal Público. En el dispositivo receptor, toca **Add Contact** para guardar la identidad del otro dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-sharing.png" alt="Tarjeta de contacto compartida en el Canal Público con una confirmación de añadido" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>La tarjeta de contacto en el canal y la confirmación de que se añadió.</i></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-before-after.png" alt="Companion3 antes y después de añadir el contacto" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion3 antes y después de añadir el contacto.</i></p>

### Paso 5: Verificar la retransmisión de mensajes

En este despliegue, los dos dispositivos finales no pueden alcanzarse de forma fiable y directa. Primero apaga Companion1 y envía un mensaje Público desde Companion2: Companion3 no lo recibe. Luego vuelve a encender Companion1 y repite la misma prueba de mensaje: la comunicación Pública entre nodos se restaura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-repeat-result.png" alt="Estado del remitente mostrando Heard 1 Repeat en la App MeshCore" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>El remitente muestra "Heard 1 Repeat". Si el mensaje se entregó realmente siempre debe juzgarse por lo que muestra el dispositivo receptor.</i></p>

## Resultados de la prueba

En este entorno de prueba, después de que Companion1 estableció una relación de contacto con cada dispositivo final, las tarjetas de contacto se compartieron a través del Canal Público, y Companion2 y Companion3 guardaron correctamente la información de identidad del otro.

En la prueba comparativa:

- Con Companion1 apagado, los mensajes Públicos enviados por Companion2 no fueron recibidos por Companion3.
- Después de que Companion1 se volvió a encender con el Modo Repeat habilitado, Companion3 recibió los mensajes Públicos enviados por Companion2, y el remitente mostró un estado "Heard 1 Repeat".

Ten en cuenta que esta comparación se hizo apagando y encendiendo la alimentación de Companion1, no solo activando o desactivando la casilla de Modo Repeat. Dentro de este despliegue, el nodo intermedio actuó de forma demostrable como un repetidor temporal.

## Escenarios de aplicación

- **Grupos temporales al aire libre**: intenta complementar la ruta de comunicación con un dispositivo que ya llevas contigo, cuando no hay infraestructura de repetidores fijos disponible.
- **Eventos temporales y despliegues de campo**: comparte contactos rápidamente y ofrece a los miembros distribuidos una opción de comunicación a corto plazo.
- **Aprendizaje y experimentación con MeshCore**: una configuración mínima de tres nodos hace que la diferencia entre compartir identidades y reenviar paquetes sea fácil de ver.

## Limitaciones y consideraciones

- Companion Repeat es un complemento, no un sustituto, de un Repeater fijo dedicado.
- El rendimiento del reenvío depende de la ubicación de los nodos, las interferencias, la alimentación y el tamaño de la red.
- No se recomienda habilitar el Modo Repeat de forma casual en mallas públicas congestionadas.
- Una adición de contacto exitosa no garantiza una ruta de radio funcional, y un estado "Heard 1 Repeat" no es un acuse de recibo de que el destino haya recibido el mensaje.

## Recursos

- [Get Started with MeshCore on SenseCAP T1000-E](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
