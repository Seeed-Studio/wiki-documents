---
description: Este artículo describe cómo usar el panel de papel electrónico para trabajar con TRMNL.
title: Funciona con TRMNL
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /es/xiao_7_5_inch_epaper_panel_with_trmnl
sidebar_position: 4
last_update:
  date: 05/19/2025
  author: Citric
---

# Panel ePaper XIAO de 7.5 Pulgadas Funciona con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>


## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse enfocadas y tranquilas en nuestro mundo digital cada vez más distractivo. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles de control E Ink®, ofreciendo un enfoque único para mostrar información sin las notificaciones constantes y distracciones de las pantallas tradicionales.

En su núcleo, TRMNL está construida sobre la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma proporciona una manera elegante de ver información importante de un vistazo a través de pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué Integrar TRMNL con el Panel ePaper XIAO de 7.5"?

La integración de TRMNL con nuestro Panel ePaper XIAO de 7.5" trae varios beneficios convincentes:

- **Creación Simplificada de Paneles**: La creciente biblioteca de aplicaciones e integraciones de TRMNL hace fácil crear pantallas de información personalizadas sin programación compleja
- **Bajo Consumo de Energía**: La combinación del software eficiente de TRMNL con los requisitos mínimos de energía de nuestra pantalla E Ink® crea una solución extremadamente eficiente en energía
- **Información Libre de Distracciones**: Obtén la información que necesitas sin las notificaciones constantes y la fatiga visual asociada con las pantallas tradicionales
- **Actualizaciones Regulares**: El desarrollo activo de TRMNL significa que se añaden nuevas características e integraciones semanalmente, expandiendo continuamente las posibilidades para tu pantalla
- **Amigable para Desarrolladores**: Con la API abierta de TRMNL y herramientas para desarrolladores, puedes crear plugins e integraciones personalizadas para tus necesidades específicas

Al combinar la poderosa plataforma de TRMNL con nuestra pantalla E Ink® de alta calidad, estamos ofreciendo a los usuarios una solución elegante para crear paneles de información personalizados y de bajo consumo que respetan tanto su atención como su tiempo.

## Comenzando con TRMNL

Antes de sumergirse en la configuración de tu Panel ePaper XIAO de 7.5" con TRMNL, reunamos los materiales necesarios y preparemos tus credenciales de TRMNL.

### Materiales Requeridos

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Configuración de Cuenta TRMNL y Acceso a TRMNL

Antes de conectar tu Panel ePaper a TRMNL, necesitarás:

1. **Comprar Acceso a TRMNL**

   - Compra acceso a la aplicación web TRMNL + capacidades del dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Esto te proporciona las credenciales necesarias para usar la plataforma de TRMNL
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tomar hasta 10 minutos después de la compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una Cuenta TRMNL**

   - Visita [el sitio web de TRMNL](https://usetrmnl.com)
   - Haz clic en "Sign Up" para crear una nueva cuenta
   - Sigue el proceso de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales de TRMNL son información sensible. Nunca las compartas públicamente ni las confirmes en sistemas de control de versiones.
:::

Una vez que tengas tus materiales y hayas comprado el acceso a TRMNL, puedes proceder con la conexión de tu Panel ePaper a la plataforma de TRMNL. Si encuentras algún problema o tienes preguntas, puedes contactar al equipo de TRMNL directamente en team@usetrmnl.com.


### Flasheo de Firmware

Para que tu Panel ePaper XIAO 7.5" funcione con TRMNL, necesitas flashear el firmware apropiado en tu dispositivo. Hay tres métodos recomendados:

#### Método 1: Flashear vía Flasheador Web de TRMNL (Más Fácil)

1. **Ve al Flasheador Web de TRMNL**

:::tip
Por favor usa firmware **FW 1.5.12** o más nuevo para compatibilidad con Seeed.
:::

   - Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - Esta herramienta te permite flashear tu dispositivo directamente desde tu navegador.
   - Sigue las instrucciones en pantalla para completar el proceso de flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### Método 2: Compilar y Flashear desde el Código Fuente (Para Usuarios Avanzados/Desarrolladores)

1. **Clonar el Repositorio de Firmware**

  - Visita el [repositorio oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) y clónalo:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Hay veces cuando actualizamos nuestro código y necesitamos enviar PR a TRMNL y revisarlo antes de que se muestre, si quieres ser el primero en usar la versión más reciente del firmware, también puedes usar el repositorio TRMNL bajo Seeed Project.

  - Visita el [repositorio de Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) y clónalo:
  
    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```
:::

2. **Instalar PlatformIO**

   - Instala [PlatformIO](https://platformio.org/) como una extensión de VSCode o vía línea de comandos.

3. **Abrir el Proyecto**

   - Abre la carpeta `firmware` clonada en VSCode.

4. **Seleccionar el Entorno Correcto**

   - En `platformio.ini`, selecciona el entorno `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **Conectar tu Dispositivo**

   - Conecta tu Panel ePaper XIAO 7.5".

6. **Compilar y Subir**

   - En PlatformIO, haz clic en el botón "Upload", o ejecuta:
     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - El firmware será compilado y subido a tu dispositivo.

## Configurar Wi-Fi y Enviar Listas de Reproducción a TRMNL

Para usar tu Panel ePaper XIAO de 7.5" con TRMNL y enviar listas de reproducción, primero necesitas conectar el dispositivo a tu red Wi-Fi. Este proceso se llama "modo de emparejamiento WiFi" y se realiza a través de un portal cautivo simple. Por favor, sigue los pasos a continuación:

> 💡 **¿Problemas con Wi-Fi?** Si encuentras problemas conectando tu dispositivo a Wi-Fi, por favor consulta la [Guía de Solución de Problemas de Wi-Fi del Dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para soluciones a problemas comunes de red y compatibilidad de router.

### Encender y Entrar al Modo de Aprovisionamiento

- Después de flashear el firmware TRMNL y encender tu dispositivo, entrará automáticamente al modo de aprovisionamiento si aún no está conectado a Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### Conectar al Wi-Fi TRMNL

- En tu **teléfono** o **computadora**, abre la lista de redes Wi-Fi disponibles.
- Busca una red llamada **TRMNL** y conéctate a ella. (No se requiere contraseña por defecto.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el Portal Cautivo

- Una vez conectado, abre un navegador web (como Chrome o Edge).
- El dispositivo debería redirigirte automáticamente a la página de configuración TRMNL. Si no lo hace, visita manualmente [http://4.3.2.1](http://4.3.2.1) en tu navegador.

### Ingresar tus Credenciales de Wi-Fi

- En la página de configuración, verás una lista de redes Wi-Fi disponibles.
- **Selecciona tu red Wi-Fi de 2.4GHz** (TRMNL no soporta redes de 5GHz).
- Ingresa tu contraseña de Wi-Fi.
- Haz clic en **Save** o **Connect**.

> ⚠️ **Importante:** Asegúrate de usar una red Wi-Fi de 2.4GHz. Las redes de 5GHz no son compatibles con el chip ESP32-C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El Dispositivo se Conecta a tu Red

- El dispositivo intentará conectarse a tu Wi-Fi.
- Una vez exitoso, se desconectará del Wi-Fi TRMNL y se unirá a tu red doméstica.
- La ventana mostrará la dirección MAC del dispositivo. **Por favor registra la dirección MAC**, ya que la necesitarás en un paso posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** La dirección MAC solo es visible en el portal cautivo por 1-2 segundos. Si la pierdes, también puedes:
> - Recuperarla de los registros de construcción/carga de VS Code > PlatformIO.
> - Usar el método [usetrmnl.com/flash](https://usetrmnl.com/flash) y verificar la consola de desarrollador de Chrome/Edge/Firefox para la dirección MAC durante el flasheo.
> - Encontrarla en la lista de dispositivos conectados de tu router o aplicación de red Mesh.
>
> Para más detalles y capturas de pantalla, consulta la guía oficial: [Encontrar tu dirección MAC TRMNL](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Acceder a la Interfaz Web TRMNL

Después de que tu Panel ePaper XIAO de 7.5" esté conectado a tu Wi-Fi y hayas registrado su dirección MAC (ID del Dispositivo), puedes agregarlo a tu cuenta TRMNL:

1. **Abrir la Interfaz Web TRMNL**  
   - En tu computadora o dispositivo móvil, abre un navegador y ve a la [interfaz web TRMNL](https://trmnl.app).

2. **Ir a la Página de Dispositivos**  
   - En la interfaz TRMNL, navega a la sección **Devices**.

3. **Agregar un Nuevo Dispositivo**  
   - Haz clic en el botón **Add new device**, que usualmente se encuentra en la esquina superior derecha o en el centro de la página de Dispositivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Ingresar ID del Dispositivo**  
   - En la ventana emergente, ingresa el ID del Dispositivo que recibiste cuando compraste el acceso TRMNL (esto no es la dirección MAC). Usa el ID del Dispositivo de tu email de confirmación de compra o panel TRMNL.
   - Haz clic en **Add new device** para completar el proceso.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar la Dirección MAC del Dispositivo XIAO 7.5"**

   Para construir una conexión entre el panel epaper XIAO y TRMNL, necesitamos vincular la dirección MAC correcta del dispositivo dentro de la página de configuración TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Puedes recuperar la dirección MAC durante el proceso de carga de PlatformIO (verifica los registros de carga), o del portal de aprovisionamiento (se mostrará después de la configuración Wi-Fi).
   - Agregar tu dirección MAC temprano ayuda a asegurar un proceso de incorporación fluido y gestión del dispositivo.

   - Luego puedes establecer un nombre personalizado para tu Panel ePaper y ajustar otras configuraciones según sea necesario.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

¡Tu Panel ePaper XIAO de 7.5" ahora está vinculado a tu cuenta TRMNL! Ahora puedes enviar listas de reproducción, imágenes u otro contenido a tu pantalla directamente desde la interfaz TRMNL.

> 💡 **Consejo:** Si tienes múltiples Paneles ePaper, repite los pasos anteriores para cada dispositivo usando sus IDs de Dispositivo únicos.

:::caution
Después de agregar tu dispositivo en la interfaz web TRMNL, por favor ve a la página de configuración del dispositivo y **desactiva** tanto **Firmware Early Release** como **OTA Updates Enabled**.  

Si estas opciones se dejan habilitadas, tu dispositivo puede descargar e instalar automáticamente actualizaciones de firmware de TRMNL cuando esté conectado a internet. Estas actualizaciones están destinadas para hardware oficial TRMNL y **no son compatibles con el Panel ePaper XIAO de 7.5"**. Instalar firmware incompatible puede causar que tu dispositivo funcione mal o deje de responder.

Mantén siempre ambas opciones deshabilitadas para asegurar el funcionamiento estable de tu Panel ePaper XIAO.
:::

## Entendiendo la Función de Lista de Reproducción de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La función de Lista de Reproducción de TRMNL te permite controlar exactamente qué se muestra en tu Panel ePaper y cuándo. Aquí tienes un desglose de las secciones principales y controles, como se muestra en la captura de pantalla anterior:

### Resumen de la Lista de Reproducción
- **Título de la Lista de Reproducción**: En la parte superior, ves el nombre de tu dispositivo TRMNL (por ejemplo, "MengDu's TRMNL").
- **Rango de Tiempo de Visualización**: Puedes establecer el rango de tiempo para cuando la lista de reproducción esté activa (por ejemplo, de 00:00 a 23:45).
- **Intervalo de Actualización**: Elige con qué frecuencia se actualiza la pantalla (por ejemplo, cada 5 minutos).
- **Añadir un Grupo / Añadir un Plugin**: Usa estos botones para organizar tu lista de reproducción en grupos o añadir nuevos plugins de contenido (como clima, calendario o texto personalizado).

### Elementos de la Lista de Reproducción
Cada fila en la lista de reproducción representa una pantalla o widget que se mostrará en tu Panel ePaper (solo para referencia):

1. **Clima**
   - Muestra información meteorológica actual para tu ubicación seleccionada.
   - La etiqueta verde "Displayed now" indica que esta pantalla se está mostrando actualmente en tu dispositivo.
2. **Días Restantes Este Año**
   - Muestra una cuenta regresiva de los días restantes en el año actual (por ejemplo, "2025").
   - La etiqueta (por ejemplo, "9 days ago") muestra cuándo esta pantalla fue actualizada o mostrada por última vez.
3. **Texto Personalizado**
   - Te permite mostrar cualquier mensaje personalizado (por ejemplo, "Hello World").
   - También muestra cuándo fue actualizado por última vez.

Para cada elemento, tienes varios controles:
- **Configuración (icono de engranaje)**: Configura las opciones del plugin.
- **Eliminar (icono X)**: Remueve el elemento de tu lista de reproducción.
- **Vista previa (icono de ojo)**: Previsualiza cómo se verá la pantalla.
- **Reordenar (icono de barras)**: Arrastra para cambiar el orden en que se muestran las pantallas.

### Lista de Reproducción Inteligente
- **Opción de Lista de Reproducción Inteligente**: En la parte inferior, puedes elegir si omitir automáticamente las pantallas cuyo contenido no ha cambiado (por ejemplo, "Never skip screens").

> 📖 ¿Quieres aprender más? Lee la [publicación del blog sobre Listas de Reproducción Inteligentes](https://usetrmnl.com/blog/smart-playlists) para consejos avanzados y detalles.

Este sistema flexible de lista de reproducción te permite personalizar completamente lo que muestra tu Panel ePaper, con qué frecuencia se actualiza y en qué orden. Puedes mezclar y combinar diferentes plugins para crear un tablero personalizado que se ajuste a tus necesidades.


## Explorando los Plugins de TRMNL

El sistema de plugins de TRMNL es lo que hace que tu Panel ePaper sea verdaderamente poderoso y personalizable. Los plugins son aplicaciones o widgets modulares que puedes añadir a tu dispositivo para mostrar una amplia variedad de información y contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### ¿Qué son los Plugins?
Los plugins son bloques de contenido individuales que pueden mostrar cosas como clima, eventos de calendario, precios de acciones, feeds RSS, citas motivacionales, actividad de GitHub y mucho más. Puedes mezclar y combinar plugins para crear un tablero que se ajuste a tus necesidades.

### Plugins Conectados
En la parte superior de la página de Plugins, verás todos los plugins que ya has conectado a tu cuenta de TRMNL. Estos están listos para ser añadidos a tu lista de reproducción y mostrados en tu Panel ePaper. Los ejemplos incluyen:
- **Clima**: Muestra las condiciones meteorológicas actuales.
- **Días Restantes Este Año**: Cuenta regresiva hasta el final del año.
- **Precio de Acciones**: Rastrea tus acciones favoritas.
- **Feed RSS**: Muestra noticias o actualizaciones de blogs.
- **Reddit, Hacker News**: Muestra publicaciones en tendencia.
- **Aprendizaje de Idiomas, Cita Motivacional, Texto Personalizado**: Personaliza tu pantalla con herramientas de aprendizaje o mensajes personalizados.

### Mercado de Plugins
Debajo de tus plugins conectados, encontrarás el mercado de plugins. Aquí puedes navegar, buscar y descubrir nuevos plugins para añadir a tu dispositivo. Los plugins están organizados por categorías y etiquetas (como #productivity, #news, #ecommerce, etc.), facilitando encontrar lo que necesitas.

- **Navegar y Buscar**: Usa la barra de búsqueda o etiquetas para encontrar rápidamente plugins que te interesen.
- **Añadir Plugins**: Haz clic en cualquier plugin para conectarlo a tu cuenta y comenzar a usarlo en tu lista de reproducción.

Los desarrolladores pueden incluso crear y publicar sus propios plugins para que otros los usen, haciendo que el ecosistema se expanda continuamente con nuevas posibilidades ([aprende más sobre la creación de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Si tienes alguna pregunta sobre el uso de TRMNL o quieres explorar funciones más avanzadas, eres bienvenido a leer la documentación oficial de TRMNL para más información: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimientos Especiales

Agradecimientos especiales a todo el **equipo de TRMNL** por su fuerte apoyo y ayuda invaluable con este proyecto. En particular, nos gustaría agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi**, y a todos los demás miembros del equipo por su dedicación y asistencia durante todo el proceso de desarrollo y documentación.

Su experiencia y compromiso han hecho posible esta integración y han mejorado enormemente la experiencia del usuario para la comunidad del Panel ePaper XIAO de 7.5".


## Recursos

- **[STP]**: [Carcasa modelo 3D](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF del esquema de la placa controladora ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [Repositorio de firmware TRMNL](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Repositorio Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

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


