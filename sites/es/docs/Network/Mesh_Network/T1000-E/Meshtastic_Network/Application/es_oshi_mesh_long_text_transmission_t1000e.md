---
description: Esta guía explica por qué el texto largo ocupa más tiempo de transmisión en LoRa y cómo enviarlo con OSHI Mesh en dos rastreadores SenseCAP T1000-E.
title: Transmisión de texto largo
draft: true
keywords:
  - Meshtastic
  - Long Text Transmission
  - OSHI Mesh
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png
slug: /meshtastic_long_text_transmission
sku: 114993369
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/es/meshtastic_long_text_transmission/
---

## Introducción

### Texto corto vs. texto largo en LoRa

*Tiempo de transmisión (airtime)* es el tiempo que una radio pasa transmitiendo. Más paquetes generalmente usan más tiempo de transmisión con los mismos ajustes de radio. Factores de dispersión más altos o anchos de banda más estrechos pueden hacer que cada paquete tarde más.

| | Texto corto | Texto largo con OSHI Mesh |
| --- | --- | --- |
| **Paquetes enviados** | Un paquete de datos| Varios paquetes de datos, más un acuse de recibo de entrega y cualquier solicitud o reintento de fragmentos faltantes. |
| **Tráfico de retransmisión** | Cada repetidor puede reenviar el único paquete de datos. | Los repetidores pueden reenviar cada fragmento, añadiendo transmisiones a través de la malla. |
| **Impacto en otro tráfico** | Menos tiempo de transmisión| Más tiempo de transmisión. En un canal ocupado, las transmisiones superpuestas pueden causar pérdida de paquetes y retrasos. |
| **Condiciones para la entrega** | Solo tiene que llegar un paquete de datos. | Todos los fragmentos tienen que llegar. Un enlace estable y suficiente tiempo de transmisión para reintentos ayudan. |


### Limitación de longitud de mensaje en LoRa

Un mensaje de texto estándar de Meshtastic cabe aproximadamente en **230 bytes** en un solo paquete. Los emoji y muchos caracteres que no son en inglés usan varios bytes cada uno.

[OSHI Mesh](https://github.com/Lastoneparis/oshi-mesh-protocol) añade compatibilidad con texto largo en tres pasos.

1. **Dividir.** El emisor divide el mensaje en fragmentos numerados y los transporta en paquetes compatibles con Meshtastic.
2. **Rellenar huecos.** El receptor solicita los fragmentos que faltan para que el emisor pueda reenviar esas partes.
3. **Reensamblar y confirmar.** El nodo receptor coloca los fragmentos en orden y puede enviar un acuse de recibo para el mensaje completo.

![El texto largo se divide en paquetes, el paquete que falta se reenvía por LoRa y el mensaje se vuelve a ensamblar](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Deliverylogic.png)

### OSHI Mesh

![Vista previa del sitio web y la app OSHI Messenger](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png)

- **OSHI Mesh** es el [firmware de radio de código abierto](https://github.com/Lastoneparis/oshi-mesh-firmware) de OSHI. Utiliza ajustes, canales y claves LoRa compatibles con Meshtastic. Los nodos que ejecutan cualquiera de los dos firmware pueden retransmitir el tráfico del otro cuando se configuran para ello. Los mensajes largos, los acuses de recibo de entrega y el almacenamiento y reenvío utilizan el Protocolo OSHI Mesh.
- **Cuándo usarlo.** Envía actualizaciones ocasionales de varios párrafos, como indicaciones de ruta o un traspaso de campo, cuando el servicio celular no está disponible y quieres confirmar que llegó el texto completo. Con una versión de la app compatible, puedes enviar mensajes de varios miles de caracteres. La longitud exacta depende de cuántos bytes use el texto.

## Flashear OSHI Mesh en el T1000-E

![SenseCAP T1000-E, cable de datos magnético y página de flasheo de OSHI Mesh](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/OshiT1000-E.png)

Si ambos rastreadores ya ejecutan el firmware OSHI Mesh `2.8.1.fda175c`, puedes pasar a la configuración de la app usando el mismo firmware.

1. Descarga el archivo UF2 de **SenseCAP T1000-E** desde **Boards that install a different way**. [OSHI Mesh flash page](https://oshi-messenger.com/lora/flash/)
2. **Entra en modo DFU manualmente.** Conecta el extremo USB del cable de datos magnético a tu ordenador. Mantén pulsado el botón del rastreador y, sin soltarlo, conecta rápidamente el conector magnético al rastreador dos veces. El LED verde permanece encendido y aparece la unidad **T1000-E**. [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-1-enter-dfu-mode) para ver instrucciones detalladas para el modo DFU.

   ![Cable de datos magnético del T1000-E y unidad DFU en Finder](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/T1000-EDFU.png)

3. Copia el archivo UF2 a la unidad **T1000-E**. El rastreador se reinicia automáticamente. Repite el proceso para el segundo rastreador.

Si ya tienes instalado el Meshtastic CLI, puedes entrar en modo DFU con el rastreador conectado por USB. Sustituye `<YOUR_PORT>` por su puerto serie.

```bash
meshtastic --port <YOUR_PORT> --enter-dfu
```

## Configurar la app y enviar un mensaje largo

**Requisito de la app.** Usa dos teléfonos Android con una versión de OSHI que admita mensajes LoRa largos en OSHI Mesh.

1. En cada teléfono, abre **Settings → LoRa Node** en OSHI y empareja un rastreador. Si se solicita el PIN predeterminado, introduce `123456`.
2. Configura ambos rastreadores en la misma región LoRa para tu ubicación y usa el canal predeterminado. 
3. Intercambia un mensaje corto para que cada teléfono aprenda el nodo de contacto del otro. Esto permite que el emisor reciba un acuse de recibo de entrega para el mensaje largo.
4. Envía unos cuantos párrafos. Observa cómo el estado progresa de **Queued** a **Sent** y luego a **Delivered**. En el segundo teléfono, comprueba que todos los párrafos aparezcan juntos y en orden.

## Qué esperar

- **Tiempo de entrega en la app.** Deja aproximadamente **uno a dos minutos** para un mensaje largo en la configuración de corto alcance anterior. El tamaño del mensaje, los ajustes de radio, el tráfico del canal, los repetidores y los reintentos pueden afectar la espera.
- **Mensajes en cola en EU_868.** El firmware controla el tiempo de transmisión de mensajes largos en una ventana móvil de una hora para mantenerse dentro del límite regional de ciclo de trabajo. Después de varios envíos largos, un mensaje nuevo puede permanecer **Queued** hasta que haya más tiempo de transmisión disponible. Para la demostración, envía un mensaje largo a la vez y espera unos minutos entre envíos.

## Almacenar y reenviar

Un nodo OSHI puede retener un mensaje hasta **72 horas** si el nodo del contacto desconectado ya es conocido. Mantén encendido el nodo que guarda el mensaje para que pueda reenviarlo cuando el nodo del contacto vuelva a estar en línea y sea alcanzable. [Descripción general de las funciones de OSHI Mesh](https://oshi-messenger.com/lora/why-oshi-mesh)

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