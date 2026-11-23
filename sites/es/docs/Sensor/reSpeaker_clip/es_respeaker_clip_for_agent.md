---
# Document type: project
description: "Usa reSpeaker Clip con DeepSeek Harness (DSH) para entrada de voz. Conecta el dispositivo y prepara el reconocimiento local SenseVoice para convertir el audio en vivo RTC o las grabaciones en la SD en borradores de chat editables."
title: "Usar reSpeaker Clip para entrada de voz en DSH"
keywords:
  - reSpeaker Clip
  - DeepSeek Harness
  - DSH
  - SenseVoice
  - speech-to-text
  - RTC
  - BLE
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip_for_agent
sku: 100020126
last_update:
  date: 11/20/2026
  author: Wang Kunpeng
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/es/respeaker_clip_for_agent/
---

# Usar reSpeaker Clip para entrada de voz en DSH

Usa reSpeaker Clip con DeepSeek Harness (DSH) para entrada de voz. Conecta el dispositivo y prepara el reconocimiento local SenseVoice para convertir el audio en vivo RTC o las grabaciones en la SD en borradores de chat editables.


## 1. Preparar el dispositivo Clip

En esta guía, RTC se refiere a la transmisión de audio en tiempo real de Clip a través de BLE. El modo SD guarda la grabación en Clip y la sincroniza por Bluetooth después de que la grabación se detiene.

Para usar el botón del dispositivo para la entrada RTC, flashea el firmware desde la rama `clip_agent` siguiendo la [guía de flasheo de firmware](/es/respeaker_clip_firmware_quick_start). El modo no RTC (SD) no requiere esta actualización adicional de firmware para el flujo de trabajo descrito aquí.

[Repositorio de firmware, rama clip_agent](https://github.com/Ant-wkp/reSpeaker_Clip/tree/clip_agent)



## 2. Instalar el plugin y conectar el dispositivo

1. **Instalar el plugin**

   Abre **Plugins → Add plugin** en DSH, introduce `dsh-clip-for-agent`, e instala y habilita el plugin. Si se te solicita reiniciar DSH, hazlo antes de continuar.

   [Paquete npm](https://www.npmjs.com/package/dsh-clip-for-agent) · [Repositorio GitHub](https://github.com/Ant-wkp/dsh-clip-for-agent)

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-2.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-3.jpg" alt="pir" width={1080} height="auto" /></p>
2. **Conectar el dispositivo**

   Enciende el Bluetooth de tu ordenador y Clip. Abre **Clip** en la barra lateral izquierda y haz clic en **Scan for devices**. Busca tu dispositivo y haz clic en **Pair and connect**. Completa cualquier solicitud de emparejamiento Bluetooth que muestre tu sistema operativo.
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-4.jpg" alt="pir" width={1080} height="auto" /></p>

3. **Preparar el reconocimiento de voz**

   En **Clip → Speech recognition**, sigue las indicaciones para instalar los componentes oficiales de reconocimiento de voz y el modelo SenseVoice. Si aparece **Install official speech recognition**, haz clic directamente en él en el panel de Clip. Si DSH te pide que lo reinicies, reinícialo y vuelve a este panel para terminar de preparar el modelo.

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-5.jpg" alt="pir" width={1080} height="auto" /></p>

## 3. Introducir texto por voz

En **Clip → Recording results → Recording mode**, selecciona **RTC live audio** o **SD recording (sync on stop)**. Luego abre el chat donde quieras introducir texto.

1. **Modo RTC**

   Este modo ofrece menor latencia de entrada y requiere el firmware `clip_agent` descrito arriba. Pulsa dos veces el botón del dispositivo para iniciar la entrada de voz y vuelve a pulsarlo dos veces para detenerla. El plugin recibe el audio durante la grabación y lo decodifica y transcribe después de que la grabación se detiene.

2. **Modo no RTC (SD)**

   Mantén pulsado el botón del dispositivo para iniciar la grabación y vuelve a mantenerlo pulsado para detenerla. El audio se guarda en Clip antes de transferirse por Bluetooth y transcribirse, por lo que la espera después de detener es más larga.

También puedes iniciar la grabación con el botón de micrófono de Clip en la entrada del chat o con el botón de grabación en el panel de Clip. Usa el botón de parada en pantalla para finalizar la grabación.


## Solución de problemas

- **El dispositivo no aparece en el escaneo.** Confirma que el Bluetooth y Clip estén encendidos, acerca Clip al ordenador y vuelve a escanear.
- **El modelo no está listo.** Abre **Clip → Speech recognition** para comprobar el progreso de la descarga o vuelve a intentarlo según se indique. Espera hasta que el modelo esté listo antes de grabar.
- **La sincronización SD o la transcripción falla.** Vuelve a intentarlo en **Clip → Recording results**. Después de reconectar el dispositivo, también puedes seleccionar **Sync latest SD recording**.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
