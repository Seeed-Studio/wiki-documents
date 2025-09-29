---
description: Profundiza en las opciones de personalización disponibles para la apariencia de Watcher y explora las diversas herramientas proporcionadas por la plataforma SenseCraft.
title: Introducción a la APP SenseCraft
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /es/sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric
---

# Guía de la APP SenseCraft

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video de Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio Github</font></span></strong>
    </a>
</div><br />

¡Bienvenido al mundo de personalización de Watcher y las herramientas de SenseCraft! En este artículo, nos sumergiremos en las emocionantes posibilidades de personalizar tu dispositivo Watcher y exploraremos las potentes características ofrecidas por la APP SenseCraft. Ya seas un usuario nuevo que busca darle a tu Watcher una apariencia única o un entusiasta experimentado que busca desbloquear todo el potencial de tu dispositivo, esta guía te proporcionará el conocimiento e inspiración para hacer que tu Watcher sea verdaderamente tuyo. Prepárate para embarcarte en un viaje creativo mientras descubrimos los secretos del diseño de expresión de Watcher y la configuración de la APP SenseCraft.

## Configuraciones de Watcher basadas en Bluetooth

Esta parte de la configuración debe estar disponible con Bluetooth habilitado tanto en el dispositivo como en el teléfono.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

Las configuraciones de Wi-Fi en tu dispositivo Watcher te permiten conectarte a redes inalámbricas disponibles, habilitando el acceso a servicios en línea. Esto es particularmente útil cuando necesitas actualizar el firmware de tu Watcher, sincronizar datos con la APP SenseCraft, o transmitir datos de monitoreo en tiempo real a la nube.

Para configurar Wi-Fi en tu Watcher, simplemente navega al menú de configuraciones de Wi-Fi y escanea las redes disponibles. Selecciona la red deseada e ingresa las credenciales correspondientes (SSID y contraseña) cuando se te solicite. Una vez conectado, tu Watcher se reconectará automáticamente a la red guardada cada vez que esté en rango, asegurando una conexión estable y confiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
Ten en cuenta que Watcher solo soporta conexión a redes de 2.4GHz, no de 5GHz.
:::

### Configuraciones Básicas

El menú de Configuraciones Básicas en tu dispositivo Watcher proporciona una gama de opciones para personalizar tu experiencia de usuario. Una de las características clave es la capacidad de controlar el LED RGB en tu Watcher. Puedes fácilmente encender o apagar el LED RGB, dependiendo de tu preferencia o el entorno en el que te encuentres. Esto puede ser útil cuando quieres conservar la vida de la batería o minimizar las distracciones visuales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

Las configuraciones de sonido también son accesibles dentro del menú de Configuraciones Básicas. Aquí, puedes ajustar el volumen de la salida de audio de tu Watcher para adaptarse a tus necesidades. Ya sea que prefieras notificaciones fuertes y claras o una experiencia de audio más sutil, puedes ajustar finamente las configuraciones de sonido a tu gusto.

El brillo de la pantalla es otro aspecto crucial de la experiencia de usuario de tu Watcher. El menú de Configuraciones Básicas te permite ajustar el brillo de la pantalla de tu Watcher, asegurando una visibilidad óptima en varias condiciones de iluminación. Al personalizar el brillo de la pantalla, puedes hacer que tu Watcher sea más fácil de leer bajo la luz solar brillante o más tenue en situaciones de poca luz, todo mientras conservas la vida de la batería cuando sea necesario.

Por último, el menú de Configuraciones Básicas te permite establecer y gestionar la fecha, hora y zona horaria de tu Watcher. El cronometraje preciso es esencial para el registro adecuado de datos y la sincronización con otros dispositivos y servicios. Al establecer la fecha, hora y zona horaria correctas, puedes asegurar que los datos de monitoreo de tu Watcher tengan marcas de tiempo precisas y estén alineados con tu hora local.

Para acceder y modificar estas configuraciones, simplemente navega al menú de Configuraciones Básicas en tu dispositivo Watcher y usa la interfaz intuitiva para hacer los cambios deseados.

### Control Remoto SenseCraft

La característica de Control Remoto SenseCraft es una configuración crucial que determina cómo tu dispositivo Watcher se comunica con los servicios en la nube de SenseCraft. Cuando está habilitada, esta característica establece un canal de comunicación entre tu Watcher y la nube de SenseCraft, permitiéndote acceder a una amplia gama de características y servicios avanzados, como Modelos de Lenguaje Grande (LLMs) basados en la nube y capacidades de notificación remota.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

Sin embargo, si eliges deshabilitar la característica de Control Remoto SenseCraft, tu Watcher solo se comunicará con tu dispositivo móvil vía Bluetooth. Aunque esto puede ser útil para control y configuración local, también significa que perderás acceso a los potentes servicios basados en la nube y las capacidades de notificación remota. Además, si tu Watcher se mueve fuera del rango de Bluetooth de tu dispositivo móvil, corres el riesgo de perder completamente el control de tu Watcher.

Para gestionar la configuración de Control Remoto de SenseCraft, simplemente navega al menú correspondiente en tu dispositivo Watcher y activa o desactiva la función según desees. Al considerar cuidadosamente tus necesidades y evaluar los beneficios de la conectividad en la nube, puedes tomar una decisión informada sobre cómo configurar esta configuración esencial para tu Watcher.

### Bloque de Mensaje HTTP

La función de Bloque de Mensaje HTTP en Watcher es un servicio de alarma localizado que opera junto con otros métodos de alarma como alarmas RGB, alarmas de APP y alarmas UART. Su propósito principal es proporcionar a los usuarios un servicio de envío de mensajes completamente localizado, dirigido a proteger la privacidad del usuario. A diferencia de otros servicios de alarma que pueden depender de plataformas o servidores externos, el Bloque de Mensaje HTTP está diseñado para funcionar exclusivamente con el endpoint HTTP propio del usuario, asegurando que todos los datos y notificaciones permanezcan dentro del entorno local del usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

Para configurar el Bloque de Mensaje HTTP, los usuarios necesitan configurar dos piezas esenciales de información: la **URL HTTP** y el **Token HTTP**. Estos detalles son proporcionados ya sea por tu propio servidor HTTP o por el software desplegado localmente, como la [APP Watcher](https://wiki.seeedstudio.com/es/watcher_local_deploy/#software-preparation). Si eliges usar tu propio servidor HTTP, asegúrate de que esté configurado correctamente y proporcione la URL y token necesarios. Alternativamente, si optas por la APP Watcher, el software generará y gestionará estos detalles de configuración por ti. Al mantener los datos de configuración ya sea en tu propio servidor o local a la APP Watcher, Watcher mantiene un alto nivel de privacidad y seguridad para sus usuarios, asegurando que la información sensible permanezca bajo tu control.

:::caution
Si quieres usar un servicio de notificación completamente local sin pasar por SenseCraft, entonces cuando configures la notificación de mensajes, por favor **no** marques **Notificación Push de APP**, de lo contrario tu notificación aún pasará por SenseCraft y luego será enviada a tu app. y recuerda **marcar la opción de Notificación Push HTTP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### Servidor AI del Dispositivo

El Servicio AI del Dispositivo en Watcher es una función poderosa que permite a los usuarios desplegar capacidades de IA directamente en sus dispositivos locales, como PCs o máquinas de alto rendimiento como Jetson. Para configurar el Servicio AI del Dispositivo, los usuarios necesitan proporcionar la URL y el Token del Servicio Watcher, que se muestran en la interfaz de usuario del software del Servicio AI del Dispositivo acompañante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

Una vez configurado, el Servicio AI del Dispositivo permite a Watcher aprovechar los recursos de computación locales del usuario para una variedad de funcionalidades impulsadas por IA, incluyendo interacción por voz, descomposición de tareas, análisis de imágenes y servicios de chatbot.

Para usuarios que valoran la flexibilidad y control de ejecutar servicios de IA localmente, el Servicio AI del Dispositivo en Watcher ofrece una solución integral y personalizable. Información detallada sobre la configuración del Servicio AI del Dispositivo, junto con explicaciones profundas de cada capacidad de IA, se puede encontrar en **[Desplegar las capacidades de IA de Watcher localmente](https://wiki.seeedstudio.com/es/watcher_local_deploy/)**.

:::caution
Si previamente has hecho clic en Servicio Watcher Privado, entonces no podrás usar el servicio en la nube de SenseCraft. Cuando de repente encuentres que no puedes recibir mensajes del servicio en la nube, por favor verifica si **SenseCraft** no está seleccionado.
:::

### Restaurar Configuración del Dispositivo

La función de Restaurar Configuración del Dispositivo te permite restablecer tu Watcher a su configuración predeterminada de fábrica, lo cual puede ser útil cuando encuentres un problema que no puede resolverse por otros medios o cuando quieras empezar de nuevo con una pizarra limpia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

Sin embargo, es crucial ejercer precaución al usar esta función, ya que todas las configuraciones de tu Watcher, incluyendo personalizaciones, registros históricos de alertas y expresiones personalizadas, se perderán permanentemente. No hay funcionalidad de respaldo incorporada, así que una vez que inicies el proceso de restauración, tus configuraciones y datos previos no pueden recuperarse.

Para acceder a la función de Restaurar Configuración del Dispositivo, navega al menú correspondiente en tu dispositivo Watcher. Antes de confirmar el proceso de restauración, considera cuidadosamente si restablecer tu Watcher a sus valores predeterminados de fábrica es absolutamente necesario. Si procedes, tu Watcher será restaurado a su estado original, listo para que lo reconfigures y personalices según tus necesidades.

:::tip
Después de Restaurar Dispositivo, necesitas eliminar manualmente el dispositivo correspondiente en la app y luego agregarlo nuevamente.
:::

## Otras Configuraciones

Las siguientes configuraciones no dependen de una conexión Bluetooth al teléfono, solo asegúrate de que tanto el Watcher como el teléfono estén conectados a Internet y que la función de Control Remoto SenseCraft esté activada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### Nombre del Dispositivo y Grupo de Dispositivos

Las configuraciones de Nombre del Dispositivo y Grupo de Dispositivos te permiten personalizar tu Watcher y organizar múltiples dispositivos para una gestión más fácil. Al asignar un nombre único a tu Watcher, puedes identificarlo rápidamente al conectarte vía Bluetooth o gestionarlo a través de la APP SenseCraft. Esto es particularmente útil si tienes múltiples dispositivos Watcher en tu posesión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

Además, puedes asignar tu Watcher a un Grupo de Dispositivos específico, lo cual es útil cuando gestionas una gran cantidad de dispositivos para diferentes propósitos o ubicaciones. Por ejemplo, podrías crear Grupos de Dispositivos separados para casa, oficina o monitoreo exterior. Al agrupar tus dispositivos Watcher de manera lógica, puedes localizar, configurar y controlarlos fácilmente según su propósito designado o ubicación.

### Suscripción

Al suscribirte, obtienes acceso a nuestras capacidades avanzadas de modelo de lenguaje. Ya sea que quieras analizar imágenes o participar en conversaciones inteligentes, nuestra plataforma te tiene cubierto. Explora toda la gama de funciones y ve cómo nuestra tecnología puede mejorar tu experiencia. ¡Haz clic para saber más!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### Verificar Actualización

La función Verificar Actualización asegura que tu Watcher siempre esté ejecutando las últimas versiones de firmware y software. Al verificar regularmente las actualizaciones, puedes acceder a nuevas funciones, mejoras de rendimiento, correcciones de errores y mejoras de seguridad tan pronto como estén disponibles.

Para verificar actualizaciones, simplemente navega al menú Verificar Actualización en tu dispositivo Watcher o dentro de la APP SenseCraft. Si hay una actualización disponible, se te pedirá que la descargues e instales. Se recomienda mantener tu Watcher actualizado para asegurar un rendimiento, estabilidad y seguridad óptimos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
Algunas versiones OTA pueden requerir que los usuarios de Watcher fuercen una actualización para continuar usándolo. Esto puede deberse a la corrección de un error importante de software o una actualización de servicio en segundo plano.
:::

### Eliminar Historial Detectado

La función Eliminar Historial Detectado te permite borrar los datos históricos de alertas almacenados dentro de la APP SenseCraft. Esto puede ser útil cuando quieres limpiar tu historial de alertas o mantener una vista más enfocada de eventos recientes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

Para eliminar el historial detectado, accede al menú Eliminar Historial Detectado dentro de la APP SenseCraft. Antes de confirmar la eliminación, revisa cuidadosamente las implicaciones, ya que esta acción es irreversible, y todos los datos históricos de alertas serán borrados permanentemente de la APP.

### Eliminar Dispositivo

La función Eliminar Dispositivo se usa cuando quieres remover un dispositivo Watcher de tu cuenta SenseCraft o conexiones Bluetooth. Esto puede ser necesario cuando ya no necesitas usar un Watcher particular, cuando quieres transferir la propiedad del dispositivo, o cuando encuentras problemas persistentes que requieren empezar de nuevo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

Para eliminar un dispositivo, localiza la opción Eliminar Dispositivo dentro de las configuraciones del Watcher o la APP SenseCraft. Antes de confirmar la eliminación, asegúrate de haber entendido que este proceso es irreversible. Una vez que elimines un dispositivo, ya no estará asociado con tu cuenta, y necesitarás volver a agregarlo si deseas usarlo nuevamente en el futuro.

:::note
Después de que la app elimine el dispositivo y quieras volver a vincular el dispositivo, también necesitas hacer un Restablecimiento de Fábrica en las configuraciones del dispositivo.
:::

## Animación del Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

El dispositivo Watcher ofrece una forma única y atractiva de personalizar tu experiencia de monitoreo a través de animaciones personalizadas. Al subir tus propias imágenes, puedes crear expresiones a medida que reflejen tu estilo, transmitan mensajes específicos o simplemente añadan un toque de diversión a los indicadores de estado de tu Watcher.

### Creando Animaciones Personalizadas

Hay varias formas de crear animaciones personalizadas para tu Watcher, dependiendo de tus habilidades y preferencias:

- **Usando Software de Animación**: Si estás familiarizado con software de animación como Adobe After Effects o Lottie, puedes crear tus propias animaciones desde cero. Diseña tu animación con hasta 5 fotogramas, teniendo en cuenta que cada fotograma se mostrará durante aproximadamente 500ms. Una vez que hayas creado tu animación, selecciona hasta 5 fotogramas clave, toma capturas de pantalla y súbelos usando la APP SenseCraft.

- **Usando Software de Diseño Gráfico**: Si prefieres trabajar con software de diseño gráfico como Figma o Adobe Illustrator, puedes crear una serie de imágenes estáticas para formar tu animación. Diseña hasta 5 fotogramas, teniendo en cuenta que cada fotograma se mostrará durante aproximadamente 500ms. Exporta tus diseños como imágenes PNG individuales y súbelos usando la APP SenseCraft.

- **Usando GIFs Existentes**: Si encuentras un GIF en línea que te gustaría usar para la animación personalizada de tu Watcher, puedes convertirlo fácilmente en una serie de imágenes PNG. Usa una herramienta gratuita en línea como [EZGif](https://www.ezgif.com/split) para dividir tu GIF en fotogramas individuales. Selecciona hasta 5 fotogramas que mejor representen la animación que quieres lograr, luego sube estas imágenes PNG usando la APP SenseCraft.

Independientemente del método que elijas, cada imagen debe estar en formato **PNG** y tener una resolución de **412x412** píxeles para asegurar una calidad de visualización óptima en la pantalla del Watcher. Cuando se suban, estas imágenes se combinarán para formar una animación fluida, dando vida a tu Watcher con tus expresiones personalizadas.

### Convirtiendo y Redimensionando Imágenes

Si tus imágenes deseadas no están ya en formato PNG o no cumplen con la resolución requerida de 412x412, puedes convertirlas y redimensionarlas fácilmente usando varias herramientas:

- **Adobe Photoshop**: Abre tu imagen en Photoshop, ve a "Imagen" > "Tamaño de imagen", establece el ancho y alto a 412 píxeles (manteniendo la relación de aspecto), y guarda la imagen como un archivo PNG.

- **GIMP**: Abre tu imagen en GIMP, navega a "Imagen" > "Escalar imagen", ingresa 412 en los campos de ancho y alto (manteniendo la relación de aspecto), y exporta la imagen como un archivo PNG.

- **Herramientas en Línea**: Usa sitios web como [Resize Image](https://www.resizeimage.net) o [CloudConvert](https://www.cloudconvert.com) para redimensionar tus imágenes a 412x412 píxeles y convertirlas a formato PNG.

### Subiendo tu Animación Personalizada

Una vez que tengas tu serie de imágenes PNG listas, es hora de dar vida a tus animaciones personalizadas en tu Watcher. Conecta tu Watcher a la APP SenseCraft y navega a la página "Animación". Aquí encontrarás varios estados del Watcher que permiten personalización de animación, incluyendo **Standby**, **Listening**, **Speaking**, **Watching Space**, y **Greeting**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

Para reemplazar las animaciones de los estados Watching Space o Greeting, simplemente selecciona el estado deseado y sigue las indicaciones para subir tus imágenes PNG. Asegúrate de **subir el mismo número de imágenes que se muestra en los ejemplos** para cada estado para garantizar una experiencia de animación fluida.

:::caution
Al subir tus animaciones personalizadas, ten en cuenta que cada imagen debe estar en formato **PNG** y tener una resolución de **412x412** píxeles para una calidad de visualización óptima en la pantalla del Watcher. Tus imágenes subidas reemplazarán las animaciones predeterminadas para los estados seleccionados del Watcher, permitiéndote personalizar las expresiones de tu dispositivo y añadir un toque único a tu experiencia de monitoreo.
:::

## Una Llamada a los Diseñadores: ¡Deja que tu Creatividad Brille

En SenseCraft, creemos que el poder de la creatividad y la colaboración puede llevar a innovaciones increíbles. Por eso estamos invitando a diseñadores de todos los ámbitos a contribuir con sus perspectivas y habilidades únicas para ayudar a expandir las posibilidades de animación para el Watcher.

Si eres un diseñador con pasión por crear animaciones atractivas y expresivas, te animamos a participar en esta emocionante oportunidad. Al compartir tus ideas creativas y diseños, puedes ayudar a dar forma al futuro de las capacidades de animación del Watcher y contribuir a una experiencia de usuario más vibrante y personalizada.

Ya sea que te especialices en animación de personajes, gráficos en movimiento, o cualquier otro estilo, tu experiencia e imaginación pueden tener un impacto significativo. Damos la bienvenida a animaciones que transmitan una amplia gama de emociones, desde alegría y emoción hasta calma y contemplación, así como diseños que muestren las capacidades únicas y el potencial del Watcher.

Para participar, simplemente crea tus animaciones personalizadas siguiendo las pautas descritas anteriormente y compártelas con la comunidad SenseCraft. Puedes subir tus diseños directamente a través de la APP SenseCraft o compartirlos en redes sociales usando el hashtag `#WatcherAnimations`. ¡No podemos esperar a ver las ideas y diseños increíbles que nuestra talentosa comunidad de diseñadores traerá a la vida!

Al trabajar juntos y aprovechar el poder de la colaboración, podemos empujar los límites de lo que es posible con las características de animación del Watcher. Así que deja que tu creatividad corra libre, comparte tu visión única, y únete a nosotros para dar forma al futuro de las animaciones del Watcher. Juntos, podemos crear una experiencia de monitoreo más expresiva, atractiva y personalizada para usuarios del Watcher alrededor del mundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### Escaparate e Inspiración

¡Descubre un mundo de creatividad e inspiración en nuestro Escaparate de Animaciones del Watcher! Aquí es donde celebramos el increíble talento e imaginación de nuestra comunidad de diseñadores, presentando algunas de las animaciones personalizadas más impresionantes e innovadoras creadas para el Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
