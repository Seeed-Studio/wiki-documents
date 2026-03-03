---
description: Optimizando el Desarrollo Web, El Dúo Perfecto - Linkstar y WordPress
title: Optimizando el Desarrollo Web, El Dúo Perfecto - Linkstar y WordPress
keywords:
  - LinkStar
  - Getting started
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wordpress_linkstar
last_update:
  date: 6/8/2023
  author: Kasun Thushara
---
# Optimizando el Desarrollo Web El Dúo Perfecto - Linkstar y WordPress

Bienvenido a esta wiki informativa que te guiará a través del proceso de instalación de WordPress usando Docker y cómo acceder al panel de WordPress. Abraza el poder transformador de Linkstar mientras personalizas tu sitio web de host local, cautivando clientes e impulsando ventas. Prepárate para experimentar un crecimiento, eficiencia y destreza técnica sin precedentes con las capacidades de vanguardia de Linkstar. Da el primer paso hoy hacia el desbloqueo de un éxito inigualable.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autocontenidas que empaquetan una aplicación junto con sus dependencias, bibliotecas y archivos de configuración, permitiendo que funcione de manera consistente a través de diferentes entornos. Docker simplifica el proceso de crear, distribuir y ejecutar aplicaciones, haciendo más fácil desarrollar y desplegar software de manera consistente y reproducible. Con Docker, los desarrolladores pueden encapsular sus aplicaciones y asegurar que funcionen sin problemas a través de diferentes sistemas operativos y configuraciones de infraestructura, convirtiéndolo en una herramienta invaluable para construir aplicaciones portátiles y escalables, optimizar flujos de trabajo de desarrollo y permitir colaboración eficiente entre miembros del equipo.

## ¿Qué es Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) es una interfaz de gestión de código abierto poderosa e intuitiva diseñada específicamente para Docker. Con su GUI basada en web fácil de usar, Portainer simplifica el despliegue y administración de contenedores, imágenes, redes y volúmenes de Docker. Ofrece una representación visual del entorno de contenedores, permitiendo a los usuarios crear, iniciar, detener y eliminar contenedores fácilmente con solo unos pocos clics. El monitoreo del uso de recursos, visualización de registros y acceso a terminales de contenedores se hace sin esfuerzo dentro de la interfaz de Portainer. Además, Portainer soporta control de acceso basado en roles, proporcionando control granular sobre los privilegios de usuario. Ya seas un principiante o un usuario experimentado de Docker, Portainer es una herramienta invaluable que optimiza la gestión de contenedores, haciéndola accesible y eficiente para todos.

## ¿Qué es WordPress?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/) es un sistema de gestión de contenidos (CMS) de código abierto popular y ampliamente utilizado que impulsa millones de sitios web en todo el mundo. Proporciona una interfaz fácil de usar y un vasto ecosistema de temas, plugins y extensiones que permiten a los usuarios crear y personalizar sus sitios web con facilidad. Con WordPress, puedes publicar y gestionar fácilmente varios tipos de contenido, incluyendo publicaciones de blog, páginas, imágenes y multimedia. Su naturaleza flexible y extensible lo hace adecuado para una amplia gama de sitios web, desde blogs simples hasta plataformas de comercio electrónico complejas. Ya seas un principiante o un usuario experimentado, WordPress ofrece una plataforma robusta y versátil para construir y gestionar tu presencia en línea.

## Configurar el entorno de Docker en el router LinkStar OpenWRT

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo cual puede no ser suficiente para instalar imágenes. Por lo tanto, necesitamos asignar más espacio a Docker para satisfacer nuestros requisitos. Al igual que en [Plex media server WiKi](https://wiki.seeedstudio.com/es/plex_media_server/) necesitas seguir los pasos. Si ya lo has hecho, por favor omite este paso.

**Nota:** Para eso asegúrate de seguir [Configurar el entorno docker en el router linkstar openwrt](https://wiki.seeedstudio.com/es/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de continuar con esta guía.

## Instalar el contenedor Portainer

### Paso 1: Abrir Putty y SSH al Terminal OpenWrt

Para comenzar el proceso de instalación, abre Putty y establece una conexión SSH al terminal OpenWrt. Ingresa los siguientes detalles:

:::note

Nombre de usuario: root

Contraseña: password

:::

### Paso 2: Instalar Portainer

Para eso usa este comando.

```sh
docker pull portainer/portainer
```

A continuación, escribe el siguiente comando en la terminal

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

Podrás observar el contenedor en ejecución con la interfaz LuCi operando bajo Docker-Container. Puedes ver que el número de puerto es 9000.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 3: Acceso a Portainer

Abre tu navegador web e ingresa la siguiente dirección: **192.168.100.1:9000**.

Esto te llevará a la página de inicio de Portainer. Para continuar, simplemente proporciona tu nombre de usuario y contraseña deseados. Luego haz clic en el botón crear usuario

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar WordPress

### Paso 1: Crear plantilla personalizada de imagen de wordpress

En la página de inicio de Portainer, navega a la sección "App Templates". Desplázate hacia abajo hasta localizar la plantilla de WordPress. Una vez que la encuentres, haz clic en "Copy as Custom" para crear una configuración personalizada para tu instalación de WordPress. Esto te permitirá adaptar las configuraciones y opciones según tus requisitos específicos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 2: Modificar la plantilla

Al hacer clic en "Copy as Custom" para la plantilla de WordPress, se te presentará un formulario que requiere que proporciones un título y descripción para tu configuración personalizada. Completa los campos respectivos con un título y descripción adecuados que representen con precisión el propósito y naturaleza de tu instalación de WordPress.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, encontrarás el script docker-compose.yml para WordPress. Este archivo juega un papel crucial en la definición y configuración de la aplicación WordPress dentro de un entorno Docker. Te permite especificar una gama de parámetros, incluyendo imágenes de contenedores, variables de entorno, configuraciones de red, mapeos de volúmenes y dependencias de servicios.

Al definir el estado deseado de la aplicación en el archivo docker-compose.yml, Docker puede crear, iniciar y gestionar automáticamente los contenedores interconectados. Esto asegura despliegues consistentes y reproducibles a través de varios entornos. El script docker-compose.yml actúa como un plano para orquestar los contenedores y sus configuraciones, permitiéndote gestionar y escalar fácilmente aplicaciones complejas con eficiencia y facilidad.

**Bajo Services >>db>>image cambiar a:**

```sh
mysql/mysql-server:8.0
```

:::note

Puedes cambiar otros parámetros como MYSQL_USER, MYSQL_PASSWORD etc. Pero los mantengo tal como están

:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

Luego puedes encontrar **Create custom template** debajo de la página y hacer clic en él.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

A continuación serás redirigido a una página como esta con el nombre de tu plantilla personalizada. Y solo haz un clic en ella.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

A continuación serás redirigido a una página como esta y presiona en **Deploy the Stack**. Espera unos minutos para el despliegue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

A continuación serás redirigido a una página como esta. Puedes ver tu lista de stacks. Haz clic en tu stack creado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

Ahora puedes ver que dos contenedores están ejecutándose y el número de puerto de wordpress es 49153.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## Acceso a Wordpress

A continuación abre tu navegador web y escribe la dirección del router Linkstar y el puerto. es decir **192.168.100.1:49153**
Puedes ver la página de inicio :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

Al presionar el botón Continue puedes ver un formulario para llenar. Después de proporcionar Título, Nombre de usuario, contraseña, email puedes acceder al panel de control.

Aquí está el panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

El alojamiento web local en Linkstar ofrece una gran cantidad de beneficios para varios negocios, incluyendo **cafés, pizzerías, institutos**, y más. Al alojar sus sitios web localmente, estos negocios pueden reducir los tiempos de espera y mejorar la experiencia general del cliente. Con un sitio web de host local, los clientes pueden **acceder fácilmente a menús, realizar pedidos, hacer reservaciones, o programar citas, todo desde la comodidad de sus propios dispositivos. Este proceso optimizado ahorra tiempo tanto para clientes como para el personal, resultando en tiempos de espera más cortos y mayor eficiencia**. Además, un sitio web de host local abre oportunidades para **publicidad efectiva, permitiendo a los negocios promover sus últimas ofertas, especiales, o eventos directamente a su audiencia objetivo**. Al aprovechar el poder de Linkstar, los negocios pueden crear una presencia en línea fluida y atractiva, atrayendo efectivamente a los clientes y mejorando su satisfacción general.

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Portainer](https://www.portainer.io/)

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
