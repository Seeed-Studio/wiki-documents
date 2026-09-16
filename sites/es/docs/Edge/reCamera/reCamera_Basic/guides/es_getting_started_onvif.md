---
description: Desplegar ONVIF en reCamera
title: Desplegar ONVIF en reCamera
keywords:
  - reCamera
  - onvif
slug: /reCamera_onvif
sku: 102991896, 108990119, 100029708
sidebar_position: 6
last_update:
  date: 9/14/2026
  author: yylin
createdAt: '2026-09-14'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/es/reCamera_onvif/
---

# Desplegar ONVIF en reCamera

## Introducción

ONVIF es un estándar de interoperabilidad ampliamente utilizado para dispositivos de seguridad. Después de desplegar esta solución, los clientes compatibles con ONVIF en la red local —como Home Assistant, Frigate, un NVR o un VMS— pueden descubrir automáticamente reCamera y obtener su información de dispositivo, la dirección del flujo de vídeo y las credenciales de inicio de sesión.

El propio vídeo sigue entregándose mediante RTSP: el cliente usa ONVIF para encontrar reCamera y luego utiliza la dirección RTSP devuelta para reproducir o grabar el flujo. Todo el proceso se ejecuta en tu red local y no requiere un servicio en la nube adicional.

Esta guía te acompaña a través de lo siguiente:

1. Desplegar el servicio ONVIF en reCamera.
2. Confirmar que el flujo de vídeo RTSP se reproduce correctamente.
3. Añadir reCamera a Home Assistant, un NVR o un VMS mediante ONVIF.

## Qué necesitas

Antes de comenzar, prepara los siguientes dispositivos y asegúrate de que estén conectados a la misma red local.

| Dispositivo | Propósito |
| --- | --- |
| Una reCamera | Ejecuta los servicios ONVIF y RTSP. Se admiten los modelos reCamera 2002 Serie, Gimbal y HQ PoE. |
| Un ordenador con Linux | Instala y ejecuta SenseCraft Solution para desplegar la solución. El ejemplo siguiente utiliza Ubuntu 24.04 x86_64. |
| Home Assistant, un NVR o un VMS (opcional) | Descubre reCamera y ve o graba su vídeo. |

> **Nota sobre la red:** El modelo HQ PoE no admite Wi‑Fi. Conéctalo a un switch compatible con PoE para obtener tanto alimentación como acceso a la red. Sea cual sea el modelo que utilices, asegúrate de que reCamera y el cliente que la descubre estén en la misma red local. El descubrimiento entre subredes normalmente requiere una configuración de red adicional.

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div>
  </td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
    </div>
  </td>
 </tr>
</table>


## Instalar SenseCraft Solution

Abre la [página de descarga de SenseCraft Solution](https://www.seeed.cc/category/reference-designs), haz clic en **Deploy** y elige el instalador que coincida con el sistema operativo y la arquitectura de procesador de tu ordenador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-2.png" /></div>

El siguiente ejemplo utiliza Ubuntu 24.04 x86_64. Abre una terminal y luego descarga e instala la aplicación:

```bash
wget https://appcenter.seeed.xyz/SenseCraft.Solution/SenseCraft.Solution_amd64.deb

sudo dpkg -i ./SenseCraft.Solution_amd64.deb
```

Después de la instalación, ejecuta el siguiente comando para iniciar SenseCraft Solution:

```bash
sensecraft-solution
```

La pantalla de inicio de SenseCraft Solution aparece cuando se inicia la aplicación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-11.png" /></div>

## Desplegar el servicio ONVIF en reCamera

### Actualizar SenseCraft Solution

Para asegurarte de que la última solución ONVIF esté disponible, actualiza primero tu lista local de soluciones. Selecciona **System Settings** en la barra lateral, busca la opción de actualización y completa la actualización antes de continuar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-12.png" /></div>
### Desplegar la solución ONVIF

1. Selecciona **Technical Demos** en la barra lateral.
2. Selecciona **reCamera** en el filtro de dispositivos.
3. Busca y abre la solución **reCamera ONVIF Gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-13.png" /></div>

Abre la solución, selecciona la reCamera de destino y completa la configuración de conexión según las indicaciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-14.png" /></div>

Confirma que los detalles del dispositivo sean correctos y luego haz clic en **Deploy**. Espera a que la tarea de despliegue informe que se ha completado correctamente. Ahora reCamera tiene el servicio ONVIF habilitado y proporciona un flujo de vídeo RTSP autenticado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-15.png" /></div>

### Verificar el flujo de vídeo

Después de un despliegue correcto, reproduce el flujo de vídeo RTSP antes de añadir el dispositivo a Home Assistant, Frigate, un NVR o un VMS. Esto ayuda a descartar primero problemas de red o del flujo de vídeo.

Puedes probar el flujo con VLC o con `ffplay` en Ubuntu. Si `ffplay` no está instalado, instala primero FFmpeg:

```bash
sudo apt install -y ffmpeg

ffplay rtsp://admin:recamera.1@<reCamera_IP>:8554/onvif
```

Sustituye `<reCamera_IP>` por la dirección IP real de reCamera en tu red local. Por ejemplo, si su dirección IP es `192.168.42.1`, ejecuta:

```bash
ffplay rtsp://admin:recamera.1@192.168.42.1:8554/onvif
```

Si puedes ver el vídeo en directo, tanto el servicio ONVIF como el flujo RTSP están funcionando correctamente. A continuación puedes añadir una cámara ONVIF en tu cliente. Normalmente, selecciona **Auto Discover** o **Add ONVIF Device** y luego introduce la dirección IP, el nombre de usuario y la contraseña de reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-9.png" /></div>


## Credenciales predeterminadas y seguridad

La autenticación está habilitada de forma predeterminada. Las credenciales predeterminadas son:

| Elemento | Valor predeterminado |
| --- | --- |
| Nombre de usuario | `admin` |
| Contraseña | `recamera.1` |
| Ruta RTSP | `/onvif` |

> **Importante:** La contraseña predeterminada está pensada solo para la verificación inicial. Si otras personas pueden acceder a la red de reCamera, cambia la contraseña antes de usarla en producción para evitar el acceso no autorizado al flujo de vídeo.

Para cambiar el nombre de usuario o la contraseña, clona el [SDK de reCamera](https://github.com/yyling0101-a11y/reCamera_2002w_sdk) desde GitHub y localiza la configuración correspondiente en `examples/camera_onvif_rtsp`:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-10.png" /></div>

Actualiza la configuración y recompila el proyecto. Para obtener instrucciones detalladas de compilación, consulta el [README](https://github.com/yyling0101-a11y/reCamera_2002w_sdk/blob/main/README.md) del repositorio. Transfiere el ejecutable compilado a reCamera, dale permisos de ejecución y ejecútalo para usar las nuevas credenciales.

## Solución de problemas

| Problema | Solución |
| --- | --- |
| El cliente no puede encontrar reCamera | Asegúrate de que reCamera y Home Assistant, Frigate, el NVR o el VMS estén en la misma red local. Confirma también que el despliegue se haya completado correctamente. |
| El flujo RTSP no se reproduce | Comprueba que el comando utilice la dirección IP real de reCamera. Confirma el nombre de usuario, la contraseña y la ruta: `admin`, `recamera.1` y `/onvif`. |
| El modelo HQ PoE no puede conectarse a la red | Confirma que el switch sea compatible con PoE y que el cable Ethernet proporcione tanto alimentación como conectividad de red. |
| La solución ONVIF sigue sin estar disponible después de una actualización | Reinicia SenseCraft Solution, confirma que la actualización de la lista de soluciones se haya completado y luego selecciona **Technical Demos > reCamera**. |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestro producto. Ofrecemos varios canales de soporte para ayudarte a que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
