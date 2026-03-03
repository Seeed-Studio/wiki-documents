---
description: Este artículo describe cómo usar la pantalla ePaper de la serie reTerminal E con TRMNL.
title: La pantalla ePaper de la serie reTerminal E funciona con TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /es/reterminal_e10xx_trmnl
sku: 100073581
sidebar_position: 1
last_update:
  date: 09/19/2025
  author: Citric
---

:::caution
La versión 1.6.7 de TRMNL ahora soporta oficialmente el reTerminal E1001. Debido a limitaciones de la arquitectura del software, el soporte para la pantalla e-ink a todo color del reTerminal E1002 **no** está disponible aún.
:::

# La pantalla ePaper de la serie reTerminal E funciona con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse enfocadas y tranquilas en nuestro mundo digital cada vez más distractor. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles E Ink®, ofreciendo un enfoque único para mostrar información sin las notificaciones constantes y distracciones de las pantallas tradicionales.

En su núcleo, TRMNL está construido sobre la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma proporciona una forma elegante de ver información importante de un vistazo a través de pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué usar TRMNL?

La integración de TRMNL traerá varios beneficios convincentes:

- **Creación simplificada de paneles**: La creciente biblioteca de aplicaciones e integraciones de TRMNL facilita la creación de pantallas de información personalizadas sin programación compleja
- **Bajo consumo de energía**: La combinación del software eficiente de TRMNL con los requisitos mínimos de energía de nuestra pantalla E Ink® crea una solución extremadamente eficiente en energía
- **Información libre de distracciones**: Obtén la información que necesitas sin las notificaciones constantes y la fatiga visual asociada con las pantallas tradicionales
- **Actualizaciones regulares**: El desarrollo activo de TRMNL significa que se agregan nuevas características e integraciones semanalmente, expandiendo continuamente las posibilidades para tu pantalla
- **Amigable para desarrolladores**: Con la API abierta de TRMNL y las herramientas para desarrolladores, puedes crear plugins e integraciones personalizadas para tus necesidades específicas

Al combinar la poderosa plataforma de TRMNL con nuestra pantalla ePaper de alta calidad de la serie reTerminal E E Ink®, estamos ofreciendo a los usuarios una solución elegante para crear paneles de información personalizados y de bajo consumo que respetan tanto su atención como su tiempo.

## Comenzando con TRMNL

### Configuración de cuenta TRMNL y acceso a TRMNL

Antes de conectar tu kit a TRMNL, necesitarás:

1. **Comprar acceso a TRMNL**

   - Compra acceso a la aplicación web TRMNL + capacidades del dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Esto te proporciona las credenciales necesarias para usar la plataforma de TRMNL
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tomar hasta 10 minutos después de la compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una cuenta TRMNL**

   - Visita [el sitio web de TRMNL](https://usetrmnl.com)
   - Haz clic en "Sign Up" para crear una nueva cuenta
   - Sigue el proceso de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales de TRMNL son información sensible. Nunca las compartas públicamente o las confirmes en sistemas de control de versiones.
:::

Una vez que tengas tus materiales y hayas comprado el acceso a TRMNL, puedes proceder con la conexión de tu dispositivo a la plataforma de TRMNL. Si encuentras algún problema o tienes preguntas, puedes contactar al equipo de TRMNL directamente en team@usetrmnl.com.

### Materiales requeridos

Comenzando inmediatamente. Por favor prepara cualquiera de los siguientes reTerminal para completar el contenido del tutorial después.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Flasheo de firmware

Si aún estás usando el firmware de fábrica para la serie reTerminal E, entonces necesitarás grabar el firmware TRMNL usando el siguiente método antes de poder conectar el dispositivo a TRMNL.

#### Método 1: Flashear vía TRMNL Web Flasher (Más fácil)

:::tip
Por favor usa **FW 1.6.7** o firmware más nuevo para compatibilidad con Seeed.
:::

1. **Ve al TRMNL Web Flasher**

   - Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - Esta herramienta te permite flashear tu dispositivo directamente desde tu navegador.
   - Sigue las instrucciones en pantalla para completar el proceso de flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### Método 2: Flashear vía plataforma Sensecraft HMI

1. Visita [plataforma Sensecraft HMI](https://sensecraft.seeed.cc/hmi/device)

2. Selecciona tu dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. Selecciona el firmware TRMNL. Si quieres flashear firmware HMI, también puedes seleccionarlos. Después de eso, haz clic en **Full Flash** y **Flash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. Conecta tu dispositivo a la computadora y selecciona el puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. Si todo va bien, la pantalla se actualizará y mostrará el logo de TRMNL y la dirección MAC. Ahora puedes jugar con él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### Método 3: Construir y flashear desde el código fuente (Para usuarios avanzados/desarrolladores)

1. **Clonar el repositorio de firmware**

- Visita el [repositorio oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) y clónalo:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Hay veces cuando actualizamos nuestro código y necesitamos enviar PR a TRMNL y revisarlo antes de que se muestre, si quieres ser el primero en usar la versión de firmware más reciente, también puedes usar el repositorio TRMNL bajo Seeed Project.

- Visita el [repositorio de Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) y clónalo:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Instalar PlatformIO**

   - Instala [PlatformIO](https://platformio.org/) como una extensión de VSCode o vía línea de comandos.

3. **Abrir el proyecto**

   - Abre la carpeta `firmware` clonada en VSCode.

4. **Seleccionar el entorno correcto**

- En `platformio.ini`,

  - Si estás usando reTerminal E1001, selecciona el entorno `seeed_reTerminal_E1001`.

  <!-- - Si estás usando reTerminal E1002, selecciona el entorno `seeed_reTerminal_E1002`. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **Conectar tu dispositivo**

   - Conecta tu dispositivo de pantalla ePaper de la serie reTerminal E.

6. **Construir y subir**

   - En PlatformIO, haz clic en el botón "Upload", o ejecuta:

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - El firmware será compilado y subido a tu dispositivo.

## Configurar Wi-Fi y enviar listas de reproducción a TRMNL

Para usar tu pantalla ePaper de la serie reTerminal E con TRMNL y enviar listas de reproducción, primero necesitas conectar el dispositivo a tu red Wi-Fi. Este proceso se llama "modo de emparejamiento WiFi" y se hace a través de un portal cautivo simple. Por favor sigue los pasos a continuación:

> 💡 **¿Problemas con Wi-Fi?** Si encuentras problemas conectando tu dispositivo a Wi-Fi, por favor consulta la [Guía de solución de problemas de Wi-Fi del dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para soluciones a problemas comunes de red y compatibilidad de router.

### Encender y entrar en modo de aprovisionamiento

- Después de flashear el firmware TRMNL y encender tu dispositivo, automáticamente entrará en modo de aprovisionamiento si aún no está conectado a Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### Conectar al Wi-Fi TRMNL

- En tu **teléfono** o **computadora**, abre la lista de redes Wi-Fi disponibles.
- Busca una red llamada **TRMNL** y conéctate a ella. (No se requiere contraseña por defecto.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el portal cautivo

- Una vez conectado, abre un navegador web (como Chrome o Edge).
- El dispositivo debería redirigirte automáticamente a la página de configuración de TRMNL. Si no lo hace, visita manualmente [http://4.3.2.1](http://4.3.2.1) en tu navegador.

### Ingresa tus Credenciales de Wi-Fi

- En la página de configuración, verás una lista de redes Wi-Fi disponibles.
- **Selecciona tu red Wi-Fi de 2.4GHz** (reTerminal E Series ePaper Display no soporta redes de 5GHz).
- Ingresa tu contraseña de Wi-Fi.
- Haz clic en **Save** o **Connect**.

> ⚠️ **Importante:** Asegúrate de usar una red Wi-Fi de 2.4GHz. Las redes de 5GHz no son compatibles con reTerminal E Series.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El Dispositivo se Conecta a tu Red

- El dispositivo intentará conectarse a tu Wi-Fi.
- Una vez exitoso, se desconectará del Wi-Fi TRMNL y se unirá a tu red doméstica.
- La ventana mostrará la dirección MAC del dispositivo. **Por favor registra la dirección MAC**, ya que la necesitarás en un paso posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** La dirección MAC solo es visible en el portal cautivo por 1-2 segundos. Si la pierdes, también puedes:
>
> - Recuperarla de los registros de compilación/carga de VS Code > PlatformIO.
> - Usar el método [usetrmnl.com/flash](https://usetrmnl.com/flash) y verificar la consola de desarrollador de Chrome/Edge/Firefox para la dirección MAC durante el flasheo.
> - Encontrarla en la lista de dispositivos conectados de tu router o aplicación de red Mesh.
>
> Para más detalles y capturas de pantalla, consulta la guía oficial: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Accede a la Interfaz Web de TRMNL

Después de que tu reTerminal E Series ePaper Display esté conectado a tu Wi-Fi y hayas registrado su dirección MAC (Device ID), puedes agregarlo a tu cuenta TRMNL:

1. **Abre la Interfaz Web de TRMNL**  
   - En tu computadora o dispositivo móvil, abre un navegador y ve a la [interfaz web de TRMNL](https://trmnl.app).

2. **Ve a la Página de Dispositivos**  
   - En la interfaz TRMNL, navega a la sección **Devices**.

3. **Agrega un Nuevo Dispositivo**  
   - Haz clic en el botón **Add new device**, que generalmente se encuentra en la esquina superior derecha o en el centro de la página de Dispositivos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Ingresa el Device ID**  
   - En la ventana emergente, ingresa el Device ID que recibiste cuando compraste el acceso a TRMNL (esto no es la dirección MAC). Usa el Device ID de tu email de confirmación de compra o panel de TRMNL.
   - Haz clic en **Add new device** para completar el proceso.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registra la Dirección MAC de reTerminal E Series ePaper Display**

   Para establecer una conexión entre reTerminal E Series ePaper Display y TRMNL, necesitamos vincular la dirección MAC correcta del dispositivo dentro de la página de configuración de TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Puedes recuperar la dirección MAC durante el proceso de carga de PlatformIO (verifica los registros de carga), o desde el portal de aprovisionamiento (se mostrará después de la configuración Wi-Fi).
   - Agregar tu dirección MAC temprano ayuda a asegurar un proceso de incorporación fluido y gestión del dispositivo.

   - Luego puedes establecer un nombre personalizado para tu reTerminal E Series ePaper Display y ajustar otras configuraciones según sea necesario.

¡Tu reTerminal E Series ePaper Display ahora está vinculado a tu cuenta TRMNL! Ahora puedes enviar listas de reproducción, imágenes u otro contenido a tu pantalla directamente desde la interfaz TRMNL.

> 💡 **Consejo:** Si tienes múltiples reTerminal E Series, repite los pasos anteriores para cada dispositivo usando sus Device IDs únicos.

:::caution
Después de agregar tu dispositivo en la interfaz web de TRMNL, por favor ve a la página de configuración del dispositivo y **desactiva** tanto **Firmware Early Release** como **OTA Updates Enabled**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Si estas opciones se dejan habilitadas, tu dispositivo puede descargar e instalar automáticamente actualizaciones de firmware de TRMNL cuando esté conectado a internet. Estas actualizaciones están destinadas para hardware oficial de TRMNL y **no son compatibles con reTerminal E Series**. Instalar firmware incompatible puede causar que tu dispositivo funcione mal o deje de responder.

Mantén siempre ambas opciones deshabilitadas para asegurar el funcionamiento estable de tu reTerminal E Series.
:::

## Entendiendo la Función de Lista de Reproducción de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La función de Lista de Reproducción de TRMNL te permite controlar exactamente qué se muestra en tu reTerminal E Series ePaper Display y cuándo. Aquí tienes un desglose de las secciones principales y controles, como se muestra en la captura de pantalla anterior:

### Resumen de Lista de Reproducción

- **Título de Lista de Reproducción**: En la parte superior, ves el nombre de tu dispositivo TRMNL (ej., "MengDu's TRMNL").
- **Rango de Tiempo de Visualización**: Puedes establecer el rango de tiempo para cuando la lista de reproducción esté activa (ej., de 00:00 a 23:45).
- **Intervalo de Actualización**: Elige qué tan seguido se actualiza la pantalla (ej., cada 5 minutos).
- **Add a Group / Add a Plugin**: Usa estos botones para organizar tu lista de reproducción en grupos o agregar nuevos plugins de contenido (como clima, calendario o texto personalizado).

### Elementos de Lista de Reproducción

Cada fila en la lista de reproducción representa una pantalla o widget que se mostrará en tu reTerminal E Series ePaper Display (solo para referencia):

1. **Weather**
   - Muestra información meteorológica actual para tu ubicación seleccionada.
   - La etiqueta verde "Displayed now" indica que esta pantalla se está mostrando actualmente en tu dispositivo.
2. **Days Left This Year**
   - Muestra una cuenta regresiva de días restantes en el año actual (ej., "2025").
   - La etiqueta (ej., "9 days ago") muestra cuándo esta pantalla fue actualizada o mostrada por última vez.
3. **Custom Text**
   - Te permite mostrar cualquier mensaje personalizado (ej., "Hello World").
   - También muestra cuándo fue actualizado por última vez.

Para cada elemento, tienes varios controles:

- **Settings (ícono de engranaje)**: Configura las opciones del plugin.
- **Delete (ícono X)**: Elimina el elemento de tu lista de reproducción.
- **Preview (ícono de ojo)**: Previsualiza cómo se verá la pantalla.
- **Reorder (ícono de barras)**: Arrastra para cambiar el orden en que se muestran las pantallas.

### Lista de Reproducción Inteligente

- **Opción de Lista de Reproducción Inteligente**: En la parte inferior, puedes elegir si omitir automáticamente pantallas cuyo contenido no ha cambiado (ej., "Never skip screens").

> 📖 ¿Quieres aprender más? Lee la [publicación del blog Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para consejos avanzados y detalles.

Este sistema flexible de lista de reproducción te permite personalizar completamente qué muestra tu reTerminal E Series, qué tan seguido se actualiza y en qué orden. Puedes mezclar y combinar diferentes plugins para crear un panel personalizado que se ajuste a tus necesidades.

## Explorando los Plugins de TRMNL

El sistema de plugins de TRMNL es lo que hace que tu reTerminal E Series ePaper Display sea verdaderamente poderoso y personalizable. Los plugins son aplicaciones o widgets modulares que puedes agregar a tu dispositivo para mostrar una amplia variedad de información y contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### ¿Qué son los Plugins?

Los plugins son bloques de contenido individuales que pueden mostrar cosas como clima, eventos de calendario, precios de acciones, feeds RSS, citas motivacionales, actividad de GitHub y mucho más. Puedes mezclar y combinar plugins para crear un panel que se ajuste a tus necesidades.

### Plugins Conectados

En la parte superior de la página de Plugins, verás todos los plugins que ya has conectado a tu cuenta TRMNL. Estos están listos para ser agregados a tu lista de reproducción y mostrados en tu reTerminal E Series. Los ejemplos incluyen:

- **Weather**: Muestra las condiciones meteorológicas actuales.
- **Days Left This Year**: Cuenta regresiva hasta el final del año.
- **Stock Price**: Rastrea tus acciones favoritas.
- **RSS Feed**: Muestra noticias o actualizaciones de blog.
- **Reddit, Hacker News**: Muestra publicaciones en tendencia.
- **Language Learning, Motivational Quote, Custom Text**: Personaliza tu pantalla con herramientas de aprendizaje o mensajes personalizados.

### Mercado de Plugins

Debajo de tus plugins conectados, encontrarás el mercado de plugins. Aquí puedes navegar, buscar y descubrir nuevos plugins para agregar a tu dispositivo. Los plugins están organizados por categorías y etiquetas (como #productivity, #news, #ecommerce, etc.), facilitando encontrar lo que necesitas.

- **Navegar y Buscar**: Usa la barra de búsqueda o etiquetas para encontrar rápidamente plugins que te interesen.
- **Agregar Plugins**: Haz clic en cualquier plugin para conectarlo a tu cuenta y comenzar a usarlo en tu lista de reproducción.

Los desarrolladores incluso pueden crear y publicar sus propios plugins para que otros los usen, haciendo que el ecosistema se expanda continuamente con nuevas posibilidades ([aprende más sobre la creación de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Si tienes alguna pregunta sobre el uso de TRMNL o quieres explorar funciones más avanzadas, eres bienvenido a leer la documentación oficial de TRMNL para más información: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimientos Especiales

Agradecimientos especiales a todo el **equipo de TRMNL** por su fuerte apoyo y ayuda invaluable con este proyecto. En particular, nos gustaría agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d** y todos los demás miembros del equipo por su dedicación y asistencia durante todo el proceso de desarrollo y documentación.

Su experiencia y compromiso han hecho posible esta integración y han mejorado enormemente la experiencia del usuario para la comunidad de reTerminal E Series ePaper Display.

## Solución de Problemas

### ¿Cómo reconfigurar la red?

Mantén presionado el Botón Verde durante cinco segundos. El dispositivo regresará a la interfaz inicial de TRMNL y activará el AP.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
