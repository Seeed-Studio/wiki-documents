---
description: Usa reCamera Pro para reconocer códigos QR y códigos de barras, y ver vídeo en directo directamente o a través de un proxy Windows/Linux.
title: Reconocimiento de códigos QR y códigos de barras con reCamera Pro
keywords:
  - Edge AI
  - reCamera Pro
  - QR Code
  - Barcode Recognition
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_qr_code_barcode
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/16/2026
  author: yylin
createdAt: 2026-10-16
updatedAt: 2026-10-16
url: https://wiki.seeedstudio.com/es/recamera_pro_qr_code_barcode/
---

# Reconocimiento de códigos QR y códigos de barras con reCamera Pro

Esta guía explica cómo obtener el código fuente, compilar e instalar la aplicación de reconocimiento de códigos QR y códigos de barras en reCamera Pro, y elegir cómo ver el vídeo en directo: directamente desde el dispositivo o a través de un proxy Windows/Linux. Sigue la estructura orientada a tareas utilizada en la Wiki de Seeed reCamera Pro. Referencias: [Guía de inicio rápido de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/) y [SDK y aplicación mínima](https://wiki.seeedstudio.com/es/recamera_pro_sdk_setup/).

## Antes de comenzar

- Conecta reCamera Pro a una red a la que tu ordenador pueda acceder. Sigue la [guía de acceso Wi‑Fi](https://wiki.seeedstudio.com/es/recamera_pro_wifi_access/) si es necesario y anota la dirección IP del dispositivo.
- Utiliza un ordenador Linux o WSL en un host Linux de 64 bits para la compilación cruzada. La configuración del SDK descarga varios gigabytes de archivos de compilación de destino, por lo que se requiere conexión a Internet y suficiente espacio libre en disco.
- El acceso directo al vídeo requiere un navegador que pueda conectarse al dispositivo a través de la red.
- Para un proxy Windows o Linux, instala Nginx y FFmpeg en el ordenador proxy. El proxy Linux también requiere una compilación de FFmpeg con el codificador `libx264`. El ejecutable de Windows go2rtc está incluido en este repositorio.
- Completa la configuración inicial del dispositivo en la interfaz web. Habilita SSH en **Device Info → Connection Settings** antes de usar los comandos de despliegue que aparecen a continuación. La [Guía de inicio rápido](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/) de Seeed cubre el inicio de sesión inicial y la configuración de red.

## Desplegar la aplicación en reCamera Pro

Instala y ejecuta la aplicación de reconocimiento en reCamera Pro antes de abrir su página web. Este proyecto está dirigido a RV1126B/aarch64; un programa x86 normal compilado para un ordenador Windows o Linux no puede ejecutarse en el dispositivo.

### 1. Obtener el código fuente e instalar el SDK de compilación cruzada

El código fuente de la aplicación está alojado en [yyling0101-a11y/recamera_pro_qr_code](https://github.com/yyling0101-a11y/recamera_pro_qr_code). Instala las herramientas del host y luego clona el código fuente de la aplicación y el [SDK de compilación cruzada de reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) independiente de Seeed, que proporciona el compilador RV1126B y el sysroot de destino.

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
mkdir -p ~/recamera_pro_workspace
cd ~/recamera_pro_workspace
git clone https://github.com/yyling0101-a11y/recamera_pro_qr_code.git
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` descarga la toolchain del SDK y el sysroot desde la versión de Seeed. Mantén el SDK en el sistema de archivos de Linux cuando uses WSL; no lo extraigas bajo `/mnt/c`.

### 2. Compilar la aplicación

La aplicación enlaza con las bibliotecas de destino GStreamer, OpenCV, ZBar y Mosquitto. Utiliza el sysroot del SDK; las bibliotecas x86 del host no pueden usarse para el binario del dispositivo.

```bash
cd ~/recamera_pro_workspace/recamera_pro_qr_code
export RECAMERA_SDK_ROOT="$(cd ../recamera_pro_toolchain && pwd)"
source "$RECAMERA_SDK_ROOT/scripts/env.sh"
cmake -S cpp -B cpp/build -G Ninja \
  -DCMAKE_TOOLCHAIN_FILE="$RECAMERA_SDK_ROOT/cmake/recamera-pro-toolchain.cmake" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build cpp/build -j4
file cpp/build/qr_pro
```

El último comando debería informar `ARM aarch64`. Si CMake o el enlazador informan de que faltan cabeceras/bibliotecas de GStreamer, OpenCV, ZBar o Mosquitto, comprueba que la configuración del SDK se completó y que estas bibliotecas de destino están presentes en su sysroot. No instales versiones x86 del host para resolver un error de compilación cruzada.

### 3. Preparar el dispositivo y copiar la aplicación

Conecta el dispositivo al host con un cable de datos USB y enciéndelo, o colócalo en la misma LAN que el host. La dirección USB predeterminada es `192.168.42.1`; utiliza la dirección que muestre tu red si es diferente. Inicia sesión por SSH como `root` usando la contraseña del dispositivo configurada durante la configuración inicial. En la primera conexión SSH, verifica la huella digital del host. Crea el directorio de la aplicación y copia el ejecutable, la página web, la configuración de go2rtc del lado del dispositivo y los scripts de inicio:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/qr_rec'
scp cpp/build/qr_pro web/index.html web/go2rtc-recamerapro.yaml \
  scripts/S97qr_go2rtc scripts/S98qr_pro root@192.168.42.1:/userdata/qr_rec/
```

### 4. Instalar e iniciar los servicios

Inicia sesión en el dispositivo y ejecuta:

```bash
ssh root@192.168.42.1
cd /userdata/qr_rec
cp go2rtc-recamerapro.yaml go2rtc.yaml
mkdir -p www
mv index.html www/index.html
chmod 755 qr_pro S97qr_go2rtc S98qr_pro
cp S97qr_go2rtc S98qr_pro /etc/init.d/
/etc/init.d/S97qr_go2rtc start
/etc/init.d/S98qr_pro start
```

`S97qr_go2rtc` utiliza el ejecutable go2rtc ya instalado en el dispositivo para leer el flujo principal H.264 producido por `rkipc`. `S98qr_pro` inicia la aplicación de códigos QR. Los scripts de inicio en `/etc/init.d/` se lanzan automáticamente cuando el dispositivo arranca. Si las credenciales MQTT están configuradas en `/userdata/qr_mqtt.env`, el script de inicio de la aplicación las carga. El vídeo y los resultados WebSocket siguen estando disponibles aunque MQTT no se haya configurado.

### 5. Verificar los servicios del dispositivo

Abre `http://192.168.42.1:8766/` en un navegador. Confirma que la página se carga, que el estado cambia a “Results connected” y que aparece el vídeo en directo. También puedes comprobar los procesos y registros en el dispositivo:

```bash
ldd /userdata/qr_rec/qr_pro
ps | grep -E 'qr_pro|go2rtc'
tail -n 50 /userdata/qr_rec/qr_pro.log
tail -n 50 /userdata/qr_rec/qr_go2rtc.log
```

Comprueba que `ldd` no informe `not found`. La imagen del dispositivo debe proporcionar las bibliotecas en tiempo de ejecución GStreamer, OpenCV, ZBar y Mosquitto utilizadas por el binario.

El acceso directo al vídeo requiere que el puerto TCP 1986 y el puerto TCP/UDP 8557 sean accesibles desde la red del navegador. Si la página no se carga, comprueba primero `/userdata/qr_rec/qr_pro.log`. Si la página y los resultados de escaneo funcionan pero el vídeo está en negro, comprueba el registro de go2rtc y estos puertos.

### 6. Actualizar una instalación existente

Después de recompilar, repite el paso de copia y luego reinicia los servicios en el dispositivo:

```bash
/etc/init.d/S97qr_go2rtc restart
/etc/init.d/S98qr_pro restart
```

La aplicación está lista para usarse en modo directo después del despliegue. El proxy Nginx de Windows/Linux es una forma opcional de reenviar el vídeo; consulta las secciones siguientes para obtener instrucciones de configuración. Después de terminar los comandos del dispositivo, escribe `exit` para volver al host Linux/WSL. Las instrucciones del proxy del host que aparecen a continuación suponen que el directorio actual es el repositorio de la aplicación clonado.

> En los ejemplos siguientes se usa `192.168.42.1` para reCamera Pro y `192.168.3.151` para el ordenador proxy. Sustituye estas direcciones por las direcciones de tu propia red.

## Elegir un método de conexión de vídeo

| Método | URL | Usar cuando |
| --- | --- | --- |
| Directo desde el dispositivo (predeterminado) | `http://DEVICE_IP:8766/` | El ordenador puede acceder a TCP 1986 y UDP 8557 en reCamera Pro |
| Proxy Windows | `http://WINDOWS_HOST_IP:18888/?video=proxy` | Quieres que Nginx y go2rtc en Windows reenvíen el vídeo |
| Proxy Linux | `http://LINUX_HOST_IP:18888/?video=proxy` | Quieres que Nginx y go2rtc en Linux reenvíen el vídeo |

Los resultados del escaneo aparecen en el lado derecho de la página. Nginx reenvía los resultados WebSocket al dispositivo. En modo proxy, FFmpeg en el ordenador proxy lee el flujo MJPEG del dispositivo y lo convierte en vídeo WebRTC para el navegador.

## Opción 1: Conectarse directamente al dispositivo

1. Confirma que la aplicación y el servicio go2rtc del lado del dispositivo se están ejecutando.
2. Abre `http://DEVICE_IP:8766/` en un navegador.
3. Espera a que el estado en la parte superior derecha muestre “Results connected” y confirma que aparece el vídeo en directo.

El acceso directo utiliza TCP 8766 para la página web y el WebSocket de resultados de escaneo, TCP 1986 para la señalización de go2rtc y TCP/UDP 8557 para los medios WebRTC. Si la página y los resultados funcionan pero el vídeo está en negro, comprueba la conectividad a los puertos 1986 y 8557 entre el navegador y el dispositivo.

## Opción 2: Usar un ordenador Windows como proxy

1. Instala Nginx y FFmpeg en Windows. Añade el directorio `bin` de FFmpeg a `PATH`. El ejecutable go2rtc está incluido en `web/bin/windows/go2rtc.exe`.
2. En `web/go2rtc-windows.yaml`, establece `webrtc.candidates` en la dirección IP LAN del ordenador Windows y confirma que la URL del flujo utiliza la IP del dispositivo.
3. En `web/nginx.conf`, sustituye `D:/path/to/recamera_pro_qr_code/web` por la ruta absoluta al directorio `web` de este repositorio. Confirma que el destino del proxy `/ws` utiliza la IP del dispositivo.
4. Desde la raíz del repositorio, inicia go2rtc en PowerShell y mantén la terminal abierta:

   ```powershell
   .\web\bin\windows\go2rtc.exe -config .\web\go2rtc-windows.yaml
   ```

5. Inicia Nginx con la ruta a su directorio extraído y la configuración del repositorio. Por ejemplo, si Nginx está instalado en `C:\nginx` y el repositorio está en `D:\recamera_pro_qr_code`:

   ```powershell
   cd C:\nginx
   .\nginx.exe -p C:/nginx/ -c D:/recamera_pro_qr_code/web/nginx.conf
   ```

   Los puertos TCP entrantes 18888, 8557 y el puerto UDP 8557 deben estar permitidos por el Firewall de Windows. La configuración de Nginx utiliza sus directorios `mime.types` y `logs` relativos al prefijo `-p`.

6. Abre `http://WINDOWS_HOST_IP:18888/?video=proxy` en un navegador.

La API de go2rtc solo escucha en `127.0.0.1:1986`; Nginx reenvía las solicitudes de señalización hacia ella. No expongas el puerto de la API directamente a la LAN.

## Opción 3: Usar un ordenador Linux como proxy

Los pasos siguientes usan Debian/Ubuntu como ejemplo. En otras distribuciones, instala Nginx y FFmpeg con el gestor de paquetes correspondiente.

1. Desde la raíz del proyecto clonado, instala Nginx y una compilación de FFmpeg que incluya `libx264`:

   ```bash
   sudo apt update
   sudo apt install nginx ffmpeg
   ffmpeg -hide_banner -encoders | grep libx264
   ```

   El comando `grep` debería listar `libx264`. Si no lo hace, instala un paquete completo de FFmpeg de tu distribución o compila FFmpeg con x264 habilitado.

2. Descarga el ejecutable de go2rtc para Linux y colócalo en tu PATH, por ejemplo en `/usr/local/bin/go2rtc`. Elige una versión que coincida con la arquitectura de CPU del host Linux desde [go2rtc Releases](https://github.com/AlexxIT/go2rtc/releases).
3. Instala la página web:

   ```bash
   sudo install -d /var/www/qr-pro
   sudo install -m 644 web/index.html /var/www/qr-pro/index.html
   ```

4. Edita `web/go2rtc-linux.yaml`: establece `webrtc.candidates` en la IP LAN del ordenador proxy con Linux y reemplaza la IP del dispositivo en `streams.qr` con la dirección de reCamera Pro. Esta configuración lee el flujo MJPEG del dispositivo y lo codifica con `libx264` en la CPU del ordenador proxy.
5. Inicia go2rtc en una terminal:

   ```bash
   go2rtc -config web/go2rtc-linux.yaml
   ```

   Mantén la terminal abierta y confirma que no haya errores de configuración ni de FFmpeg. Para uso a largo plazo, configura el mismo comando como un servicio systemd.

6. Instala `web/nginx-site.conf` como un sitio de Nginx. Confirma que `root` apunte a `/var/www/qr-pro` y que el destino del proxy `/ws` use la IP del dispositivo, luego habilita el sitio y recarga Nginx. Por ejemplo:

   ```bash
   sudo cp web/nginx-site.conf /etc/nginx/sites-available/qr-pro
   sudo ln -s /etc/nginx/sites-available/qr-pro /etc/nginx/sites-enabled/qr-pro
   sudo nginx -t
   sudo systemctl reload nginx
   ```

   Si ya existe un enlace de sitio con el mismo nombre, inspecciona y reutiliza la configuración existente.

7. Permite el puerto TCP entrante 18888, el puerto TCP 8557 y el puerto UDP 8557 en el ordenador proxy. Abre `http://LINUX_HOST_IP:18888/?video=proxy` en un navegador.

Los modos proxy de Windows y Linux usan la misma página web y el mismo flujo de proxy inverso Nginx. Sus configuraciones de go2rtc difieren en la ruta del ejecutable de FFmpeg y en el directorio raíz web de Nginx. La codificación por proxy utiliza recursos de CPU en el host; usa el modo directo si el host no tiene suficiente capacidad de CPU.

## Usar los resultados del escaneo

- Los resultados del escaneo aparecen en el lado derecho de la página. Cuando el navegador se vuelve a conectar, puede recibir resultados de la ventana de desduplicación actual.
- El dispositivo publica resultados en el tema MQTT `recamera/qr/result` usando QoS 1. MQTT requiere credenciales en el dispositivo y una conexión a un broker MQTT.
- Un código de barras que permanece a la vista se informa una vez. Se puede informar de nuevo después de que haya estado fuera de la vista durante más de 60 segundos.

## Solución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| La página no se abre | Comprueba Nginx, el puerto TCP entrante 18888 y la dirección IP del ordenador proxy |
| La página se abre, pero los resultados del escaneo no se conectan | Comprueba la IP del dispositivo en el destino `/ws` de Nginx y confirma que la aplicación escucha en el puerto TCP 8766 |
| El vídeo está en negro en modo proxy | Confirma que go2rtc se esté ejecutando, que FFmpeg pueda leer `http://DEVICE_IP:8766/video.mjpg` y que la IP candidata sea la dirección del ordenador proxy |
| El vídeo está en negro en modo directo | Comprueba el servicio go2rtc del lado del dispositivo y la conectividad a TCP 1986 y TCP/UDP 8557 |
| `qr_pro` sale inmediatamente | Ejecuta `ldd /userdata/qr_rec/qr_pro` y comprueba si aparece `not found`; recompila contra el sysroot del SDK de reCamera Pro y asegúrate de que sus bibliotecas de tiempo de ejecución coincidan con el firmware instalado |
| Nginx no puede encontrar la página | Comprueba la ruta `root` de Windows/Linux y confirma que `index.html` exista allí |
| FFmpeg en Linux informa que el codificador no está disponible | Ejecuta `ffmpeg -hide_banner -encoders` y comprueba si `libx264` aparece en la lista |

## Más información

- [Guía de inicio rápido de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/)
- [SDK de reCamera Pro y aplicación mínima](https://wiki.seeedstudio.com/es/recamera_pro_sdk_setup/)
- [Documentación WebRTC de go2rtc](https://github.com/AlexxIT/go2rtc/blob/master/internal/webrtc/README.md)

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
