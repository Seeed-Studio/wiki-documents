---
description: This article describes how to use the epaper panel to work with TRMNL.
title: Compatibilidad con TRMNL
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /es/xiao_7_5_inch_epaper_panel_with_trmnl
sidebar_position: 4
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Panel ePaper XIAO de 7.5 pulgadas compatible con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse enfocadas y tranquilas en un mundo digital cada vez más lleno de distracciones. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles de información con pantallas E Ink®, ofreciendo un enfoque único para mostrar información sin notificaciones constantes ni distracciones visuales.

En esencia, TRMNL se basa en la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma ofrece una forma elegante de ver información importante de un vistazo mediante pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué integrar TRMNL con el panel ePaper XIAO de 7.5"?

La integración de TRMNL con nuestro panel ePaper XIAO de 7.5" ofrece varios beneficios clave:

- **Creación simplificada de paneles**: la creciente biblioteca de apps e integraciones de TRMNL facilita la creación de paneles personalizados sin programación compleja  
- **Bajo consumo de energía**: la combinación del software eficiente de TRMNL con el bajo consumo de nuestra pantalla E Ink® crea una solución extremadamente eficiente energéticamente  
- **Información sin distracciones**: obtén la información que necesitas sin las notificaciones constantes ni la fatiga visual de las pantallas tradicionales  
- **Actualizaciones periódicas**: el desarrollo activo de TRMNL agrega nuevas funciones e integraciones cada semana  
- **Amigable para desarrolladores**: con la API abierta y herramientas para desarrolladores de TRMNL, puedes crear plugins e integraciones personalizadas según tus necesidades  

Al combinar la potente plataforma de TRMNL con nuestra pantalla E Ink® de alta calidad, ofrecemos a los usuarios una solución elegante para crear paneles informativos personalizados y de bajo consumo, que respetan tanto su atención como su tiempo.

## Primeros pasos con TRMNL

Antes de configurar tu panel ePaper XIAO de 7.5" con TRMNL, reunamos los materiales necesarios y preparemos tus credenciales de TRMNL.

### Materiales requeridos

Para esta integración, necesitarás:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Panel ePaper XIAO de 7.5"</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Configuración de cuenta y acceso a TRMNL

Antes de conectar tu panel ePaper a TRMNL, necesitas:

1. **Comprar acceso a TRMNL**

   - Compra acceso a la app web de TRMNL + capacidades del dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)  
   - Esto te proporcionará las credenciales necesarias para usar la plataforma TRMNL  
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tardar hasta 10 minutos después de la compra)  

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una cuenta TRMNL**

   - Visita [el sitio web de TRMNL](https://usetrmnl.com)  
   - Haz clic en "Sign Up" para crear una cuenta  
   - Sigue el proceso de registro  

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales TRMNL son información sensible. Nunca las compartas públicamente ni las subas a sistemas de control de versiones.
:::

Una vez que tengas tus materiales y acceso a TRMNL, puedes proceder a conectar tu panel ePaper a la plataforma TRMNL. Si tienes dudas o problemas, puedes contactar directamente al equipo TRMNL en team@usetrmnl.com.

### Flasheo del firmware

Para que tu panel ePaper XIAO de 7.5" funcione con TRMNL, necesitas flashear el firmware adecuado en el dispositivo. Hay tres métodos recomendados:

#### Método 1: Flashear desde TRMNL Web Flasher (el más fácil)

1. **Ir al TRMNL Web Flasher**

   - Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash)  
   - Esta herramienta te permite flashear el dispositivo directamente desde el navegador  
   - Sigue las instrucciones en pantalla para completar el proceso de flasheo  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

---

#### Método 2: Flashear firmware precompilado

1. **Descargar el paquete de firmware**

   - Descarga el último firmware desde [aquí](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/res/TRMNL_XIAO_7.5inch_epaper_panel_1.5.4.zip)

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a className="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/res/TRMNL_XIAO_7.5inch_epaper_panel_1.5.4.zip">
    <strong>
      <span>
        <font color="FFFFFF" size="4">
          Descargar firmware 🖱️
        </font>
      </span>
    </strong>
  </a>
</div>


2. **Extraer los archivos**

   - Descomprime el archivo descargado. Deberías ver los siguientes archivos:
     - `bootloader.bin`
     - `partitions.bin`
     - `boot_app0.bin`
     - `firmware.bin`

3. **Conectar tu dispositivo**

   - Conecta tu panel ePaper XIAO de 7.5" (con XIAO ESP32-C3) a tu computadora vía USB.

4. **Flashear el firmware**

   - Abre una terminal en la carpeta donde están los archivos `.bin` extraídos  
   - Ejecuta el siguiente comando:

     ```
     esptool.py --chip esp32c3 --baud 460800 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 40m --flash_size 4MB 0x0000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin
     ```

   - Espera a que el proceso finalice. Después de cargar el programa, puede que necesites presionar el botón de reinicio para reiniciar el dispositivo.

---

#### Método 3: Compilar y flashear desde el código fuente (para usuarios avanzados/desarrolladores)

1. **Clonar el repositorio del firmware**

   - Visita el [repositorio oficial del firmware de TRMNL](https://github.com/usetrmnl/firmware) y clónalo:
     ```
     git clone https://github.com/usetrmnl/firmware.git
     ```

2. **Instalar PlatformIO**

   - Instala [PlatformIO](https://platformio.org/) como extensión de VSCode o mediante línea de comandos.

3. **Abrir el proyecto**

   - Abre la carpeta `firmware` clonada en VSCode.

4. **Seleccionar el entorno correcto**

   - En `platformio.ini`, selecciona el entorno `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **Conectar tu dispositivo**

   - Conecta tu panel ePaper XIAO de 7.5".

6. **Compilar y subir**

   - En PlatformIO, haz clic en el botón "Upload" o ejecuta:
     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - El firmware se compilará y subirá a tu dispositivo.

---

## Configurar Wi-Fi y enviar listas de reproducción a TRMNL

Para usar tu panel ePaper XIAO de 7.5" con TRMNL y enviar listas de reproducción, primero debes conectar el dispositivo a tu red Wi-Fi mediante un portal cautivo. Sigue los pasos a continuación:

> 💡 **¿Problemas con el Wi-Fi?** Consulta la [Guía de solución de problemas de Wi-Fi de TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para resolver conflictos comunes de red y compatibilidad.

### Encender y entrar en modo de configuración

- Después de flashear el firmware TRMNL y encender el dispositivo, este entrará automáticamente en modo de configuración si aún no está conectado a Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### Conectarse al Wi-Fi TRMNL

- En tu **teléfono** o **computadora**, abre la lista de redes Wi-Fi disponibles.
- Conéctate a la red llamada **TRMNL** (sin contraseña).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el portal cautivo

- Una vez conectado, abre un navegador web (como Chrome o Edge).
- Debería redirigirte automáticamente a la página de configuración de TRMNL. Si no, visita manualmente [http://192.168.4.1](http://192.168.4.1)

### Ingresar credenciales de Wi-Fi

- Selecciona tu red Wi-Fi de 2.4 GHz (TRMNL no es compatible con 5 GHz).
- Ingresa tu contraseña.
- Haz clic en **Save** o **Connect**.

> ⚠️ **Importante:** Asegúrate de usar una red Wi-Fi de **2.4 GHz**. Las redes 5 GHz no son compatibles con el chip ESP32-C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El dispositivo se conecta a tu red

- El dispositivo intentará conectarse a tu red Wi-Fi.
- Una vez conectado, se desconectará de la red TRMNL y se unirá a tu red doméstica.
- La ventana mostrará la dirección MAC del dispositivo. **Guárdala**, la necesitarás más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** La dirección MAC aparece solo durante 1–2 segundos. Si la pierdes:
> - Revisa los logs de PlatformIO al subir el firmware.
> - Usa el método [usetrmnl.com/flash](https://usetrmnl.com/flash) y consulta la consola del navegador.
> - Busca el dispositivo en la lista de tu router o app de red Mesh.
>
> Más información: [Encontrar la MAC de tu TRMNL](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

---

### Acceder a la interfaz web de TRMNL

Una vez que tu panel ePaper esté conectado y tengas su dirección MAC, agrégalo a tu cuenta TRMNL:

1. **Abre la interfaz web de TRMNL**  
   - Ve a [https://trmnl.app](https://trmnl.app) en tu navegador.

2. **Ir a la sección Devices**  
   - En el panel TRMNL, abre la sección **Devices**.

3. **Agregar un nuevo dispositivo**  
   - Haz clic en **Add new device** (esquina superior derecha o en el centro).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Ingresar Device ID**  
   - Introduce el **Device ID** que recibiste al comprar acceso a TRMNL (no es la MAC).
   - Lo encontrarás en el email de confirmación o el panel de TRMNL.
   - Haz clic en **Add new device**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar la dirección MAC del dispositivo XIAO**

   - Para vincular el panel ePaper XIAO, debes agregar la dirección MAC en la configuración de TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Puedes obtenerla desde los logs de PlatformIO o del portal cautivo tras configurar Wi-Fi.
   - Agregarla asegura una correcta gestión del dispositivo.

   - Luego, puedes asignar un nombre personalizado a tu dispositivo y ajustar configuraciones.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Tu panel ePaper XIAO de 7.5" ya está vinculado a tu cuenta TRMNL. Ahora puedes enviar listas, imágenes o contenido desde la interfaz web.

> 💡 **Consejo:** Si tienes múltiples paneles, repite el proceso con cada Device ID.

:::caution
Después de agregar el dispositivo en TRMNL, ve a su página de configuración y **desactiva**:
- **Firmware Early Release**
- **OTA Updates Enabled**

Estas opciones están pensadas para hardware oficial TRMNL. Si permanecen activadas, tu panel XIAO podría descargar firmware incompatible, provocando errores o inestabilidad.

Mantén ambas opciones desactivadas para asegurar el funcionamiento estable del panel.
:::

---

## Comprender la función Playlist de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La función Playlist te permite controlar exactamente qué se muestra en tu panel ePaper y cuándo. A continuación, un resumen de las secciones:

### Vista general de la Playlist

- **Título de la Playlist**: Nombre del dispositivo (ej. "TRMNL de MengDu").
- **Rango horario**: Define cuándo está activa la lista (ej. 00:00–23:45).
- **Intervalo de actualización**: Frecuencia con la que se actualiza la pantalla (ej. cada 5 min).
- **Agregar grupo/plugin**: Organiza contenido o añade nuevos plugins (clima, calendario, texto).

### Elementos de la Playlist

Cada fila representa una pantalla o widget en tu panel (ejemplos):

1. **Clima**  
   - Muestra el clima actual.  
   - Etiqueta "Displayed now" indica que está en pantalla.

2. **Días restantes del año**  
   - Cuenta regresiva de días restantes del año actual.  
   - Muestra cuándo se actualizó por última vez.

3. **Texto personalizado**  
   - Muestra un mensaje (ej. "Hola mundo").  
   - Muestra fecha de última actualización.

### Controles por elemento

- **Configurar**: Ajusta opciones del plugin  
- **Eliminar**: Quita el elemento  
- **Vista previa**: Muestra cómo se verá  
- **Reordenar**: Arrastra para cambiar el orden de aparición

### Lista inteligente (Smart Playlist)

- **Opción de Lista Inteligente**: Al final de la página de listas, puedes elegir si deseas omitir automáticamente las pantallas cuyo contenido no ha cambiado (por ejemplo, “Never skip screens”).

> ¿Quieres saber más? Lee la publicación del blog sobre [Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para conocer consejos avanzados y más detalles.

Este sistema de listas de reproducción flexible te permite personalizar completamente lo que muestra tu panel ePaper, con qué frecuencia se actualiza y en qué orden. Puedes combinar diferentes plugins para crear un panel de control personalizado que se adapte a tus necesidades.

## Explorando los Plugins de TRMNL

El sistema de plugins de TRMNL es lo que convierte a tu panel ePaper en una herramienta verdaderamente poderosa y personalizable. Los plugins son aplicaciones o widgets modulares que puedes añadir a tu dispositivo para mostrar una gran variedad de información y contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### ¿Qué son los Plugins?

Los plugins son bloques de contenido individuales que pueden mostrar información como el clima, eventos del calendario, precios de acciones, feeds RSS, frases motivacionales, actividad en GitHub y mucho más. Puedes combinar diferentes plugins para construir un panel que se adapte exactamente a tus necesidades.

### Plugins Conectados

En la parte superior de la página de Plugins verás todos los plugins que ya están conectados a tu cuenta TRMNL. Están listos para ser agregados a tus listas y mostrarse en el panel ePaper. Algunos ejemplos incluyen:

- **Clima (Weather)**: Muestra el clima actual.
- **Días Restantes del Año**: Cuenta regresiva para fin de año.
- **Precio de Acciones**: Seguimiento de tus acciones favoritas.
- **Feed RSS**: Muestra noticias o blogs.
- **Reddit, Hacker News**: Publicaciones populares.
- **Aprendizaje de Idiomas, Frases Motivacionales, Texto Personalizado**: Personaliza la pantalla con herramientas de aprendizaje o mensajes únicos.

### Marketplace de Plugins

Debajo de los plugins conectados encontrarás el *Plugin Marketplace*. Aquí puedes explorar, buscar y descubrir nuevos plugins para añadir a tu dispositivo. Los plugins están organizados por categorías y etiquetas (como #productividad, #noticias, #ecommerce, etc.), lo cual facilita encontrar justo lo que necesitas.

- **Explorar y Buscar**: Usa la barra de búsqueda o las etiquetas para encontrar plugins de tu interés.
- **Agregar Plugins**: Haz clic en cualquier plugin para conectarlo a tu cuenta y comenzar a usarlo en tus listas.

Además, los desarrolladores pueden crear y publicar sus propios plugins para que otros los utilicen, lo cual hace que el ecosistema de TRMNL crezca continuamente con nuevas posibilidades ([conoce más sobre la creación de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

Si tienes preguntas sobre cómo usar TRMNL o deseas explorar funciones más avanzadas, puedes consultar la documentación oficial en: [Documentación de TRMNL](https://docs.usetrmnl.com/g)

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>



