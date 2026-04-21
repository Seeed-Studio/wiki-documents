---
description: Este artículo describe cómo usar la pantalla ePaper reTerminal E Serie con TRMNL.
title: Funciona con TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sku: 100073581
sidebar_position: 3
last_update:
  date: 09/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl/
---

:::caution
La versión 1.6.7 de TRMNL ahora admite oficialmente el reTerminal E1001. Debido a limitaciones en la arquitectura de software, el soporte para la pantalla de tinta electrónica a todo color reTerminal E1002 **aún no** está disponible.
:::

# Pantalla ePaper reTerminal E Serie funciona con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse concentradas y tranquilas en nuestro mundo digital cada vez más distractor. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles E Ink®, ofreciendo un enfoque único para mostrar información sin las notificaciones constantes y distracciones de las pantallas tradicionales.

En esencia, TRMNL se basa en la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma proporciona una forma elegante de ver información importante de un vistazo a través de pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué usar TRMNL?

La integración de TRMNL aportará varios beneficios convincentes:

- **Creación de paneles simplificada**: La creciente biblioteca de aplicaciones e integraciones de TRMNL facilita la creación de pantallas de información personalizadas sin programación compleja
- **Bajo consumo de energía**: La combinación del software eficiente de TRMNL con los requisitos mínimos de energía de nuestra pantalla E Ink® crea una solución extremadamente eficiente energéticamente
- **Información sin distracciones**: Obtén la información que necesitas sin las notificaciones constantes y la fatiga visual asociadas con las pantallas tradicionales
- **Actualizaciones periódicas**: El desarrollo activo de TRMNL significa que se añaden nuevas funciones e integraciones cada semana, ampliando continuamente las posibilidades de tu pantalla
- **Amigable para desarrolladores**: Con el API abierto y las herramientas para desarrolladores de TRMNL, puedes crear complementos e integraciones personalizadas para tus necesidades específicas

Al combinar la potente plataforma de TRMNL con nuestra pantalla E Ink® reTerminal E Serie ePaper de alta calidad, ofrecemos a los usuarios una solución elegante para crear paneles de información personalizados y de bajo consumo que respetan tanto su atención como su tiempo.

## Primeros pasos con TRMNL

### Configuración de la cuenta TRMNL y acceso a TRMNL

Antes de conectar tu kit a TRMNL, necesitas:

1. **Comprar TRMNL Access**

   - Compra acceso a la aplicación web TRMNL + capacidades del dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Esto te proporciona las credenciales necesarias para usar la plataforma de TRMNL
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tardar hasta 10 minutos después de la compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una cuenta TRMNL**

   - Visita el [sitio web de TRMNL](https://usetrmnl.com)
   - Haz clic en "Sign Up" para crear una nueva cuenta
   - Sigue el proceso de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales de TRMNL son información sensible. Nunca las compartas públicamente ni las subas a sistemas de control de versiones.
:::

Una vez que tengas tus materiales y hayas comprado el acceso a TRMNL, puedes continuar conectando tu dispositivo a la plataforma de TRMNL. Si encuentras algún problema o tienes preguntas, puedes contactar directamente con el equipo de TRMNL en team@usetrmnl.com.

### Materiales necesarios

Comenzando de inmediato. Por favor prepara cualquiera de los siguientes reTerminal para completar el contenido del tutorial más adelante.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Grabación del firmware

Si todavía estás usando el firmware de fábrica para el reTerminal E Serie, entonces tendrás que grabar el firmware TRMNL usando el siguiente método antes de poder conectar el dispositivo al TRMNL.

#### Método 1: Grabar mediante TRMNL Web Flasher (el más fácil)

:::tip
Por favor usa **FW 1.6.7** o una versión de firmware más reciente para la compatibilidad con Seeed.
:::

1. **Ve a TRMNL Web Flasher**

   - Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - Esta herramienta te permite grabar tu dispositivo directamente desde tu navegador.
   - Sigue las instrucciones en pantalla para completar el proceso de grabación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### Método 2: Grabar mediante la plataforma Sensecraft HMI

1. Visita la [plataforma Sensecraft HMI](https://sensecraft.seeed.cc/hmi/device)

2. Selecciona tu dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. Selecciona el firmware TRMNL. Si quieres grabar el firmware HMI, también puedes seleccionarlos. Después de eso, haz clic en **Full Flash** y **Flash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. Conecta tu dispositivo al ordenador y selecciona el puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. Si todo va bien, la pantalla se actualizará y mostrará el logotipo de TRMNL y la dirección MAC. Ahora ya puedes empezar a usarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### Método 3: Compilar y grabar desde el código fuente (para usuarios/desarrolladores avanzados)

1. **Clonar el repositorio de firmware**

- Visita el [repositorio oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) y clónalo:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Hay ocasiones en las que actualizamos nuestro código y necesitamos enviar un PR a TRMNL y revisarlo antes de que se muestre; si quieres ser el primero en usar la última versión de firmware, también puedes usar el repositorio TRMNL bajo Seeed Project.

- Visita el [repositorio de Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) y clónalo:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Instalar PlatformIO**

   - Instala [PlatformIO](https://platformio.org/) como una extensión de VSCode o mediante la línea de comandos.

3. **Abrir el proyecto**

   - Abre la carpeta `firmware` clonada en VSCode.

4. **Seleccionar el entorno correcto**

- En `platformio.ini`,

  - Si estás usando reTerminal E1001, selecciona el entorno `seeed_reTerminal_E1001`.

  <!-- - If you are using reTerminal E1002, select the `seeed_reTerminal_E1002` environment. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **Conecta tu dispositivo**

   - Conecta tu dispositivo reTerminal E Serie ePaper Display.

6. **Compilar y subir**

   - En PlatformIO, haz clic en el botón "Upload" o ejecuta:

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - El firmware se compilará y se subirá a tu dispositivo.

## Configurar Wi‑Fi y enviar listas de reproducción a TRMNL

Para usar tu reTerminal E Serie ePaper Display con TRMNL y enviar listas de reproducción, primero necesitas conectar el dispositivo a tu red Wi‑Fi. Este proceso se llama "modo de emparejamiento WiFi" y se realiza a través de un sencillo portal cautivo. Por favor sigue los pasos a continuación:

> 💡 **¿Problemas con el Wi‑Fi?** Si encuentras problemas al conectar tu dispositivo al Wi‑Fi, consulta la [guía de solución de problemas de Wi‑Fi del dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para obtener soluciones a problemas comunes de red y compatibilidad de routers.

### Encender y entrar en modo de aprovisionamiento

- Después de grabar el firmware TRMNL y encender tu dispositivo, entrará automáticamente en modo de aprovisionamiento si aún no está conectado al Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### Conectarse al Wi‑Fi TRMNL

- En tu **teléfono** u **ordenador**, abre la lista de redes Wi‑Fi disponibles.
- Busca una red llamada **TRMNL** y conéctate a ella. (De forma predeterminada no se requiere contraseña).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el portal cautivo

- Una vez conectado, abre un navegador web (como Chrome o Edge).
- El dispositivo debería redirigirte automáticamente a la página de configuración de TRMNL. Si no lo hace, visita manualmente [http://4.3.2.1](http://4.3.2.1) en tu navegador.

### Introduce tus credenciales de Wi‑Fi

- En la página de configuración, verás una lista de redes Wi‑Fi disponibles.
- **Selecciona tu red Wi‑Fi de 2,4 GHz** (la reTerminal E Series ePaper Display no es compatible con redes de 5 GHz).
- Introduce la contraseña de tu Wi‑Fi.
- Haz clic en **Save** o **Connect**.

> ⚠️ **Importante:** Asegúrate de usar una red Wi‑Fi de 2,4 GHz. Las redes de 5 GHz no son compatibles con la reTerminal E Series.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El dispositivo se conecta a tu red

- El dispositivo intentará conectarse a tu Wi‑Fi.
- Una vez que lo consiga, se desconectará del Wi‑Fi TRMNL y se unirá a tu red doméstica.
- La ventana mostrará la dirección MAC del dispositivo. **Por favor, anota la dirección MAC**, ya que la necesitarás en un paso posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** La dirección MAC solo es visible en el portal cautivo durante 1‑2 segundos. Si te la pierdes, también puedes:
>
> - Recuperarla desde los registros de compilación/carga de VS Code > PlatformIO.
> - Usar el método [usetrmnl.com/flash](https://usetrmnl.com/flash) y comprobar la consola de desarrollador de Chrome/Edge/Firefox para ver la dirección MAC durante el flasheo.
> - Encontrarla en la lista de dispositivos conectados de tu router o de la app de tu red Mesh.
>
> Para más detalles y capturas de pantalla, consulta la guía oficial: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Accede a la interfaz web de TRMNL

Después de que tu reTerminal E Series ePaper Display esté conectada a tu Wi‑Fi y hayas anotado su dirección MAC (ID del dispositivo), puedes añadirla a tu cuenta TRMNL:

1. **Abre la interfaz web de TRMNL**  
   - En tu ordenador o dispositivo móvil, abre un navegador y ve a la [interfaz web de TRMNL](https://trmnl.app).

2. **Ve a la página de dispositivos**  
   - En la interfaz de TRMNL, navega a la sección **Devices**.

3. **Añade un nuevo dispositivo**  
   - Haz clic en el botón **Add new device**, que normalmente se encuentra en la esquina superior derecha o en el centro de la página Devices.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Introduce el ID del dispositivo**  
   - En la ventana emergente, introduce el ID del dispositivo que recibiste cuando compraste el acceso a TRMNL (esto no es la dirección MAC). Usa el ID del dispositivo de tu correo de confirmación de compra o del panel de TRMNL.
   - Haz clic en **Add new device** para completar el proceso.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar la dirección MAC de la reTerminal E Series ePaper Display**

   Para establecer una conexión entre la reTerminal E Series ePaper Display y TRMNL, necesitamos vincular la dirección MAC correcta del dispositivo en la página de configuración de TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Puedes recuperar la dirección MAC durante el proceso de carga de PlatformIO (revisa los registros de carga) o desde el portal de aprovisionamiento (se mostrará después de la configuración de Wi‑Fi).
   - Añadir tu dirección MAC con antelación ayuda a garantizar un proceso de incorporación y gestión del dispositivo sin problemas.

   - Después puedes establecer un nombre personalizado para tu reTerminal E Series ePaper Display y ajustar otros parámetros según sea necesario.

¡Tu reTerminal E Series ePaper Display ahora está vinculada a tu cuenta TRMNL! Ahora puedes enviar listas de reproducción, imágenes u otro contenido a tu pantalla directamente desde la interfaz de TRMNL.

> 💡 **Consejo:** Si tienes varias reTerminal E Series, repite los pasos anteriores para cada dispositivo usando sus IDs de dispositivo únicos.

:::caution
Después de añadir tu dispositivo en la interfaz web de TRMNL, ve a la página de configuración del dispositivo y **desactiva** tanto **Firmware Early Release** como **OTA Updates Enabled**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Si estas opciones permanecen activadas, tu dispositivo puede descargar e instalar automáticamente actualizaciones de firmware desde TRMNL cuando esté conectado a internet. Estas actualizaciones están pensadas para el hardware oficial de TRMNL y **no son compatibles con la reTerminal E Series**. Instalar firmware incompatible puede hacer que tu dispositivo funcione mal o deje de responder.

Mantén siempre ambas opciones desactivadas para garantizar un funcionamiento estable de tu reTerminal E Series.
:::

## Comprender la función de listas de reproducción de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La función de listas de reproducción de TRMNL te permite controlar exactamente qué se muestra en tu reTerminal E Series ePaper Display y cuándo. A continuación se muestra un desglose de las secciones y controles principales, como se ve en la captura de pantalla anterior:

### Visión general de la lista de reproducción

- **Título de la lista de reproducción**: En la parte superior, ves el nombre de tu dispositivo TRMNL (por ejemplo, «MengDu's TRMNL»).
- **Intervalo de tiempo de visualización**: Puedes establecer el intervalo de tiempo durante el cual la lista de reproducción está activa (por ejemplo, de 00:00 a 23:45).
- **Intervalo de actualización**: Elige con qué frecuencia se actualiza la pantalla (por ejemplo, cada 5 minutos).
- **Add a Group / Add a Plugin**: Usa estos botones para organizar tu lista de reproducción en grupos o añadir nuevos plugins de contenido (como tiempo, calendario o texto personalizado).

### Elementos de la lista de reproducción

Cada fila de la lista de reproducción representa una pantalla o widget que se mostrará en tu reTerminal E Series ePaper Display (solo como referencia):

1. **Weather**
   - Muestra la información meteorológica actual para la ubicación seleccionada.
   - La etiqueta verde "Displayed now" indica que esta pantalla se está mostrando actualmente en tu dispositivo.
2. **Days Left This Year**
   - Muestra una cuenta atrás de los días restantes del año en curso (por ejemplo, «2025»).
   - La etiqueta (por ejemplo, "9 days ago") muestra cuándo se actualizó o mostró esta pantalla por última vez.
3. **Custom Text**
   - Te permite mostrar cualquier mensaje personalizado (por ejemplo, «Hello World»).
   - También muestra cuándo se actualizó por última vez.

Para cada elemento, dispones de varios controles:

- **Configuración (icono de engranaje)**: Configura las opciones del plugin.
- **Eliminar (icono X)**: Elimina el elemento de tu lista de reproducción.
- **Vista previa (icono de ojo)**: Previsualiza cómo se verá la pantalla.
- **Reordenar (icono de barras)**: Arrastra para cambiar el orden en que se muestran las pantallas.

### Lista de reproducción inteligente

- **Opción de lista de reproducción inteligente**: En la parte inferior, puedes elegir si quieres omitir automáticamente las pantallas cuyo contenido no haya cambiado (por ejemplo, "Never skip screens").

> 📖 ¿Quieres saber más? Lee la [entrada del blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para obtener consejos avanzados y más detalles.

Este sistema flexible de listas de reproducción te permite personalizar por completo qué muestra tu reTerminal E Series, con qué frecuencia se actualiza y en qué orden. Puedes combinar diferentes plugins para crear un panel personalizado que se adapte a tus necesidades.

## Explorando los plugins de TRMNL

El sistema de plugins de TRMNL es lo que hace que tu reTerminal E Series ePaper Display sea realmente potente y personalizable. Los plugins son aplicaciones o widgets modulares que puedes añadir a tu dispositivo para mostrar una gran variedad de información y contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### ¿Qué son los plugins?

Los plugins son bloques de contenido individuales que pueden mostrar cosas como el tiempo, eventos de calendario, precios de acciones, fuentes RSS, frases motivacionales, actividad de GitHub y mucho más. Puedes combinar plugins para crear un panel que se adapte a tus necesidades.

### Plugins conectados

En la parte superior de la página de Plugins, verás todos los plugins que ya has conectado a tu cuenta TRMNL. Estos están listos para añadirse a tu lista de reproducción y mostrarse en tu reTerminal E Series. Algunos ejemplos son:

- **Weather**: Muestra las condiciones meteorológicas actuales.
- **Days Left This Year**: Cuenta atrás hasta el final del año.
- **Stock Price**: Sigue tus acciones favoritas.
- **RSS Feed**: Muestra noticias o actualizaciones de blogs.
- **Reddit, Hacker News**: Muestra publicaciones destacadas.
- **Language Learning, Motivational Quote, Custom Text**: Personaliza tu pantalla con herramientas de aprendizaje o mensajes personalizados.

### Marketplace de plugins

Debajo de tus plugins conectados encontrarás el marketplace de plugins. Aquí puedes explorar, buscar y descubrir nuevos plugins para añadir a tu dispositivo. Los plugins están organizados por categorías y etiquetas (como #productivity, #news, #ecommerce, etc.), lo que facilita encontrar lo que necesitas.

- **Explorar y buscar**: Usa la barra de búsqueda o las etiquetas para encontrar rápidamente plugins que te interesen.
- **Añadir plugins**: Haz clic en cualquier plugin para conectarlo a tu cuenta y empezar a usarlo en tu lista de reproducción.

Los desarrolladores incluso pueden crear y publicar sus propios plugins para que otros los usen, haciendo que el ecosistema se expanda continuamente con nuevas posibilidades ([learn more about plugin creation](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Si tienes alguna pregunta sobre el uso de TRMNL o quieres explorar funciones más avanzadas, te invitamos a leer la documentación oficial de TRMNL para obtener más información: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimientos especiales

Agradecimientos especiales a todo el **equipo de TRMNL** por su sólido apoyo y ayuda inestimable en este proyecto. En particular, queremos agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d** y a todos los demás miembros del equipo por su dedicación y asistencia durante todo el proceso de desarrollo y documentación.

Su experiencia y compromiso han hecho posible esta integración y han mejorado enormemente la experiencia de usuario para la comunidad de reTerminal E Series ePaper Display.

## Solución de problemas

### ¿Cómo reconfigurar la red?

Mantén pulsado el Botón Verde durante cinco segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
