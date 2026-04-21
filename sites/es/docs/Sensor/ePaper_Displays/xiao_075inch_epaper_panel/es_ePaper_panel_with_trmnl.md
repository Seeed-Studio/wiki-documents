---
description: Este artículo describe cómo usar el panel de tinta electrónica para trabajar con TRMNL.
title: Funciona con TRMNL
keywords:
  - pantalla de tinta electrónica
  - TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /xiao_7_5_inch_epaper_panel_with_trmnl
sku: 114993635
sidebar_position: 3
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/xiao_7_5_inch_epaper_panel_with_trmnl/
---

# Panel de tinta electrónica XIAO de 7,5" funciona con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse concentradas y tranquilas en nuestro mundo digital cada vez más lleno de distracciones. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles E Ink®, ofreciendo un enfoque único para mostrar información sin las notificaciones constantes y distracciones de las pantallas tradicionales.

En esencia, TRMNL se basa en la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma proporciona una forma elegante de ver información importante de un vistazo a través de pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué integrar TRMNL con el panel de tinta electrónica XIAO de 7,5"?

La integración de TRMNL con nuestro panel de tinta electrónica XIAO de 7,5" aporta varios beneficios convincentes:

- **Creación de paneles simplificada**: La creciente biblioteca de aplicaciones e integraciones de TRMNL facilita la creación de pantallas de información personalizadas sin programación compleja
- **Bajo consumo de energía**: La combinación del software eficiente de TRMNL con los requisitos mínimos de energía de nuestra pantalla E Ink® crea una solución extremadamente eficiente energéticamente
- **Información sin distracciones**: Obtén la información que necesitas sin las notificaciones constantes y la fatiga visual asociadas con las pantallas tradicionales
- **Actualizaciones periódicas**: El desarrollo activo de TRMNL significa que se añaden nuevas funciones e integraciones cada semana, ampliando continuamente las posibilidades de tu pantalla
- **Amigable para desarrolladores**: Con el API abierto y las herramientas para desarrolladores de TRMNL, puedes crear plugins e integraciones personalizadas para tus necesidades específicas

Al combinar la potente plataforma de TRMNL con nuestra pantalla E Ink® de alta calidad, ofrecemos a los usuarios una solución elegante para crear paneles de información personalizados y de bajo consumo que respetan tanto su atención como su tiempo.

## Primeros pasos con TRMNL

Antes de comenzar a configurar tu panel de tinta electrónica XIAO de 7,5" con TRMNL, reunamos los materiales necesarios y preparemos tus credenciales de TRMNL.

### Materiales necesarios

Para esta integración, necesitarás:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Panel de tinta electrónica XIAO de 7,5"</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Configuración de la cuenta TRMNL y acceso a TRMNL

Antes de conectar tu panel de tinta electrónica a TRMNL, deberás:

1. **Comprar acceso a TRMNL**

   - Compra acceso a la aplicación web de TRMNL + capacidades de dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Esto te proporciona las credenciales necesarias para usar la plataforma de TRMNL
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tardar hasta 10 minutos después de la compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una cuenta TRMNL**

   - Visita [el sitio web de TRMNL](https://usetrmnl.com)
   - Haz clic en "Sign Up" para crear una nueva cuenta
   - Sigue el proceso de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales de TRMNL son información sensible. Nunca las compartas públicamente ni las subas a sistemas de control de versiones.
:::

Una vez que tengas tus materiales y hayas comprado el acceso a TRMNL, puedes continuar conectando tu panel de tinta electrónica a la plataforma de TRMNL. Si encuentras algún problema o tienes preguntas, puedes contactar directamente con el equipo de TRMNL en team@usetrmnl.com.

### Grabación del firmware

Para que tu panel de tinta electrónica XIAO de 7,5" funcione con TRMNL, necesitas grabar el firmware adecuado en tu dispositivo. Hay tres métodos recomendados:

#### Método 1: Grabar mediante TRMNL Web Flasher (el más sencillo)

1. **Ir a TRMNL Web Flasher**

:::tip
Utiliza el **FW 1.5.12** o una versión de firmware más reciente para la compatibilidad con Seeed.
:::

- Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
- Esta herramienta te permite grabar tu dispositivo directamente desde el navegador.
- Sigue las instrucciones en pantalla para completar el proceso de grabación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### Método 2: Compilar y grabar desde el código fuente (para usuarios avanzados/desarrolladores)

1. **Clonar el repositorio de firmware**

- Visita el [repositorio oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) y clónalo:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Hay ocasiones en las que actualizamos nuestro código y necesitamos enviar un PR a TRMNL y revisarlo antes de que se muestre; si quieres ser el primero en usar la versión más reciente del firmware, también puedes usar el repositorio de TRMNL bajo Seeed Project.

- Visita el [repositorio de Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) y clónalo:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Instalar PlatformIO**

   - Instala [PlatformIO](https://platformio.org/) como extensión de VSCode o mediante la línea de comandos.

3. **Abrir el proyecto**

   - Abre la carpeta `firmware` clonada en VSCode.

4. **Seleccionar el entorno correcto**

   - En `platformio.ini`, selecciona el entorno `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **Conectar tu dispositivo**

   - Conecta tu panel de tinta electrónica XIAO de 7,5".

6. **Compilar y subir**

   - En PlatformIO, haz clic en el botón "Upload" o ejecuta:

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - El firmware se compilará y se subirá a tu dispositivo.

## Configurar Wi‑Fi y enviar listas de reproducción a TRMNL

Para usar tu panel de tinta electrónica XIAO de 7,5" con TRMNL y enviar listas de reproducción, primero debes conectar el dispositivo a tu red Wi‑Fi. Este proceso se llama "modo de emparejamiento WiFi" y se realiza a través de un portal cautivo sencillo. Sigue los pasos a continuación:

> 💡 **¿Problemas con el Wi‑Fi?** Si encuentras problemas al conectar tu dispositivo al Wi‑Fi, consulta la [guía de solución de problemas de Wi‑Fi de dispositivos TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para obtener soluciones a problemas comunes de red y compatibilidad de routers.

### Encender y entrar en modo de aprovisionamiento

- Después de grabar el firmware de TRMNL y encender tu dispositivo, entrará automáticamente en modo de aprovisionamiento si aún no está conectado al Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### Conectarse al Wi‑Fi TRMNL

- En tu **teléfono** o **ordenador**, abre la lista de redes Wi‑Fi disponibles.
- Busca una red llamada **TRMNL** y conéctate a ella. (De forma predeterminada no se requiere contraseña).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el portal cautivo

- Una vez conectado, abre un navegador web (como Chrome o Edge).
- El dispositivo debería redirigirte automáticamente a la página de configuración de TRMNL. Si no lo hace, visita manualmente [http://4.3.2.1](http://4.3.2.1) en tu navegador.

### Introducir tus credenciales de Wi‑Fi

- En la página de configuración, verás una lista de redes Wi‑Fi disponibles.
- **Selecciona tu red Wi‑Fi de 2,4 GHz** (TRMNL no es compatible con redes de 5 GHz).
- Introduce la contraseña de tu Wi‑Fi.
- Haz clic en **Save** o **Connect**.

> ⚠️ **Importante:** Asegúrate de usar una red Wi‑Fi de 2,4 GHz. Las redes de 5 GHz no son compatibles con el chip ESP32‑C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El dispositivo se conecta a tu red

- El dispositivo intentará conectarse a tu Wi‑Fi.
- Una vez que lo consiga, se desconectará del Wi‑Fi TRMNL y se unirá a tu red doméstica.
- La ventana mostrará la dirección MAC del dispositivo. **Anota la dirección MAC**, ya que la necesitarás en un paso posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** La dirección MAC solo es visible en el portal cautivo durante 1‑2 segundos. Si te la pierdes, también puedes:
>
> - Recuperarla desde los registros de compilación/subida de VS Code > PlatformIO.
> - Usar el método [usetrmnl.com/flash](https://usetrmnl.com/flash) y comprobar la consola de desarrollador de Chrome/Edge/Firefox para ver la dirección MAC durante la grabación.
> - Encontrarla en la lista de dispositivos conectados de tu router o de la app de tu red Mesh.
>
> Para más detalles y capturas de pantalla, consulta la guía oficial: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Acceder a la Interfaz Web de TRMNL

Después de que tu XIAO Panel de ePaper de 7,5" esté conectado a tu Wi‑Fi y hayas registrado su dirección MAC (ID de dispositivo), puedes añadirlo a tu cuenta TRMNL:

1. **Abre la Interfaz Web de TRMNL**  
   - En tu ordenador o dispositivo móvil, abre un navegador y ve a la [interfaz web de TRMNL](https://trmnl.app).

2. **Ve a la página de Dispositivos**  
   - En la interfaz de TRMNL, navega a la sección **Devices**.

3. **Añadir un nuevo dispositivo**  
   - Haz clic en el botón **Add new device**, que normalmente se encuentra en la esquina superior derecha o en el centro de la página Devices.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Introduce el ID del dispositivo**  
   - En la ventana emergente, introduce el ID de dispositivo que recibiste cuando compraste el acceso a TRMNL (esto no es la dirección MAC). Utiliza el ID de dispositivo de tu correo de confirmación de compra o del panel de TRMNL.
   - Haz clic en **Add new device** para completar el proceso.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar la dirección MAC del dispositivo XIAO 7,5"**

   Para establecer una conexión entre el panel de ePaper XIAO y TRMNL, necesitamos vincular la dirección MAC correcta del dispositivo dentro de la página de configuración de TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Puedes obtener la dirección MAC durante el proceso de carga en PlatformIO (revisa los registros de carga), o desde el portal de aprovisionamiento (se mostrará después de la configuración de Wi‑Fi).
   - Añadir tu dirección MAC con antelación ayuda a garantizar un proceso de incorporación y gestión del dispositivo sin problemas.

   - Luego puedes establecer un nombre personalizado para tu Panel de ePaper y ajustar otros parámetros según sea necesario.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

¡Tu Panel de ePaper XIAO de 7,5" ahora está vinculado a tu cuenta TRMNL! Ahora puedes enviar listas de reproducción, imágenes u otro contenido a tu pantalla directamente desde la interfaz de TRMNL.

> 💡 **Consejo:** Si tienes varios Paneles de ePaper, repite los pasos anteriores para cada dispositivo utilizando sus ID de dispositivo únicos.

:::caution
Después de añadir tu dispositivo en la interfaz web de TRMNL, ve a la página de configuración del dispositivo y **desactiva** tanto **Firmware Early Release** como **OTA Updates Enabled**.  

Si estas opciones permanecen activadas, tu dispositivo puede descargar e instalar automáticamente actualizaciones de firmware desde TRMNL cuando esté conectado a Internet. Estas actualizaciones están pensadas para el hardware oficial de TRMNL y **no son compatibles con el Panel de ePaper XIAO de 7,5"**. Instalar firmware incompatible puede hacer que tu dispositivo funcione mal o deje de responder.

Mantén siempre ambas opciones desactivadas para garantizar un funcionamiento estable de tu Panel de ePaper XIAO.
:::

## Comprender la función de Lista de Reproducción de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La función de Lista de Reproducción de TRMNL te permite controlar exactamente qué se muestra en tu Panel de ePaper y cuándo. A continuación se muestra un desglose de las secciones y controles principales, como se muestra en la captura de pantalla anterior:

### Visión general de la Lista de Reproducción

- **Título de la Lista de Reproducción**: En la parte superior, ves el nombre de tu dispositivo TRMNL (por ejemplo, "MengDu's TRMNL").
- **Intervalo de tiempo de visualización**: Puedes establecer el intervalo de tiempo durante el cual la lista de reproducción está activa (por ejemplo, de 00:00 a 23:45).
- **Intervalo de actualización**: Elige con qué frecuencia se actualiza la pantalla (por ejemplo, cada 5 minutos).
- **Add a Group / Add a Plugin**: Utiliza estos botones para organizar tu lista de reproducción en grupos o añadir nuevos plugins de contenido (como clima, calendario o texto personalizado).

### Elementos de la Lista de Reproducción

Cada fila de la lista de reproducción representa una pantalla o widget que se mostrará en tu Panel de ePaper (solo como referencia):

1. **Weather**
   - Muestra la información meteorológica actual para la ubicación seleccionada.
   - La etiqueta verde "Displayed now" indica que esta pantalla se está mostrando actualmente en tu dispositivo.
2. **Days Left This Year**
   - Muestra una cuenta regresiva de los días restantes del año en curso (por ejemplo, "2025").
   - La etiqueta (por ejemplo, "9 days ago") muestra cuándo se actualizó o mostró esta pantalla por última vez.
3. **Custom Text**
   - Te permite mostrar cualquier mensaje personalizado (por ejemplo, "Hello World").
   - También muestra cuándo se actualizó por última vez.

Para cada elemento, dispones de varios controles:

- **Configuración (icono de engranaje)**: Configura las opciones del plugin.
- **Eliminar (icono X)**: Elimina el elemento de tu lista de reproducción.
- **Vista previa (icono de ojo)**: Previsualiza cómo se verá la pantalla.
- **Reordenar (icono de barras)**: Arrastra para cambiar el orden en que se muestran las pantallas.

### Lista de Reproducción Inteligente

- **Opción de Lista de Reproducción Inteligente**: En la parte inferior, puedes elegir si deseas omitir automáticamente las pantallas cuyo contenido no haya cambiado (por ejemplo, "Never skip screens").

> 📖 ¿Quieres saber más? Lee la [entrada del blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para obtener consejos avanzados y más detalles.

Este sistema flexible de listas de reproducción te permite personalizar completamente lo que muestra tu Panel de ePaper, con qué frecuencia se actualiza y en qué orden. Puedes combinar diferentes plugins para crear un panel de control personalizado que se adapte a tus necesidades.

## Explorando los Plugins de TRMNL

El sistema de plugins de TRMNL es lo que hace que tu Panel de ePaper sea realmente potente y personalizable. Los plugins son aplicaciones o widgets modulares que puedes añadir a tu dispositivo para mostrar una gran variedad de información y contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### ¿Qué son los Plugins?

Los plugins son bloques de contenido individuales que pueden mostrar cosas como el clima, eventos de calendario, precios de acciones, fuentes RSS, frases motivacionales, actividad de GitHub y mucho más. Puedes combinar plugins para crear un panel que se adapte a tus necesidades.

### Plugins Conectados

En la parte superior de la página de Plugins, verás todos los plugins que ya has conectado a tu cuenta TRMNL. Estos están listos para añadirse a tu lista de reproducción y mostrarse en tu Panel de ePaper. Algunos ejemplos son:

- **Weather**: Muestra las condiciones meteorológicas actuales.
- **Days Left This Year**: Cuenta regresiva hasta el final del año.
- **Stock Price**: Sigue tus acciones favoritas.
- **RSS Feed**: Muestra noticias o actualizaciones de blogs.
- **Reddit, Hacker News**: Muestra publicaciones en tendencia.
- **Language Learning, Motivational Quote, Custom Text**: Personaliza tu pantalla con herramientas de aprendizaje o mensajes personalizados.

### Mercado de Plugins

Debajo de tus plugins conectados, encontrarás el mercado de plugins. Aquí puedes explorar, buscar y descubrir nuevos plugins para añadir a tu dispositivo. Los plugins están organizados por categorías y etiquetas (como #productivity, #news, #ecommerce, etc.), lo que facilita encontrar lo que necesitas.

- **Explorar y buscar**: Utiliza la barra de búsqueda o las etiquetas para encontrar rápidamente plugins que te interesen.
- **Añadir plugins**: Haz clic en cualquier plugin para conectarlo a tu cuenta y empezar a usarlo en tu lista de reproducción.

Los desarrolladores incluso pueden crear y publicar sus propios plugins para que otros los utilicen, haciendo que el ecosistema se expanda continuamente con nuevas posibilidades ([learn more about plugin creation](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Si tienes alguna pregunta sobre el uso de TRMNL o quieres explorar funciones más avanzadas, te invitamos a leer la documentación oficial de TRMNL para obtener más información: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimientos Especiales

Agradecimientos especiales a todo el **equipo de TRMNL** por su sólido apoyo y ayuda inestimable en este proyecto. En particular, queremos agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi** y a todos los demás miembros del equipo por su dedicación y asistencia durante todo el proceso de desarrollo y documentación.

Su experiencia y compromiso han hecho posible esta integración y han mejorado enormemente la experiencia de usuario para la comunidad del Panel de ePaper XIAO de 7,5".

## Solución de Problemas

### ¿Cómo reconfigurar la red?

Pulsa el botón Reset en el XIAO, suéltalo y luego mantén pulsado el botón Boot durante cinco segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

## Recursos

- **[STP]**: [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF del esquema de la Placa Controladora de ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [Repositorio de firmware de TRMNL](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Repositorio Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## Soporte Técnico y Debate sobre el Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
