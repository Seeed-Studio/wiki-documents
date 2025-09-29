---
description: Una Guía para Integrar LinkStar, Grocy y BookStack en tu Oficina
title: Una Guía para Integrar LinkStar, Grocy y BookStack en tu Oficina
keywords:
  - LinkStar
  - Getting started
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/grocy-bookstack-linkstar
last_update:
  date: 6/26/2023
  author: Kasun Thushara
---
# Tomando Control: Soluciones Auto-Hospedadas para la Gestión de Oficinas con LinkStar, Grocy y BookStack

La integración de Grocy y BookStack dentro de un servidor de oficina auto-hospedado impulsado por un router LinkStar ofrece una solución convincente para operaciones eficientes y organizadas. Con Grocy, las empresas pueden gestionar efectivamente sus comestibles, listas de compras y tareas, asegurando procesos optimizados y reduciendo el desperdicio. Por otro lado, BookStack proporciona una plataforma de documentación centralizada que promueve la colaboración, el intercambio de conocimientos y el fácil acceso a información importante. Al hospedar ambas aplicaciones en el router LinkStar, las empresas obtienen control sobre sus datos, mejoran la seguridad y eliminan la dependencia de servicios externos. Esta configuración auto-hospedada empodera a las oficinas para optimizar flujos de trabajo, mejorar la productividad y crear un entorno de trabajo bien estructurado y productivo. En esta publicación del blog, profundizaremos en la importancia de integrar Grocy y BookStack dentro de un servidor de oficina impulsado por LinkStar, explorando los beneficios y mostrando cómo esta combinación revoluciona la gestión de oficinas.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autónomas que empaquetan una aplicación junto con sus dependencias, bibliotecas y archivos de configuración, permitiendo que funcione de manera consistente a través de diferentes entornos. Docker simplifica el proceso de crear, distribuir y ejecutar aplicaciones, haciendo más fácil desarrollar y desplegar software de manera consistente y reproducible. Con Docker, los desarrolladores pueden encapsular sus aplicaciones y asegurar que funcionen sin problemas a través de diferentes sistemas operativos y configuraciones de infraestructura, convirtiéndolo en una herramienta invaluable para construir aplicaciones portátiles y escalables, optimizar flujos de trabajo de desarrollo y permitir colaboración eficiente entre miembros del equipo.

## ¿Qué es Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) es una interfaz de gestión de código abierto poderosa e intuitiva diseñada específicamente para Docker. Con su GUI basada en web fácil de usar, Portainer simplifica el despliegue y administración de contenedores, imágenes, redes y volúmenes de Docker. Ofrece una representación visual del entorno de contenedores, permitiendo a los usuarios crear, iniciar, detener y eliminar contenedores fácilmente con solo unos pocos clics. El monitoreo del uso de recursos, visualización de registros y acceso a terminales de contenedores se hace sin esfuerzo dentro de la interfaz de Portainer. Además, Portainer soporta control de acceso basado en roles, proporcionando control granular sobre los privilegios de usuario. Ya seas un principiante o un usuario experimentado de Docker, Portainer es una herramienta invaluable que optimiza la gestión de contenedores, haciéndola accesible y eficiente para todos.

## ¿Qué es Bookstack?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/) es una plataforma de código abierto potente y fácil de usar diseñada para crear y gestionar documentación y bases de conocimiento. Con su interfaz intuitiva, BookStack permite a los equipos y organizaciones organizar y compartir información de manera eficiente. Ofrece una estructura jerárquica donde el contenido puede organizarse en libros, capítulos y páginas, permitiendo una navegación y recuperación de información fácil. BookStack admite edición de texto enriquecido, permitiendo a los usuarios formatear y dar estilo a su contenido de manera efectiva. También ofrece características como incrustación de imágenes, control de versiones y herramientas de colaboración, promoviendo el trabajo en equipo sin problemas y la gestión eficiente del conocimiento. Ya sea para documentación interna, soporte al cliente o propósitos educativos, BookStack es una solución versátil y ampliamente utilizada que agiliza el proceso de crear y mantener bases de conocimiento integrales.

## ¿Qué es Grocy?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/) es una aplicación web de código abierto auto-hospedada que ayuda a los usuarios a gestionar sus comestibles, artículos del hogar y tareas. Proporciona características para rastrear el inventario de alimentos, crear listas de compras, gestionar recetas y llevar un registro de las fechas de vencimiento.

## Configurar el entorno Docker en el router LinkStar OpenWRT

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo cual puede no ser suficiente para instalar imágenes. Por lo tanto, necesitamos asignar más espacio a Docker para acomodar nuestros requisitos. Al igual que en el [Wiki del servidor multimedia Plex](https://wiki.seeedstudio.com/es/plex_media_server/) necesitas seguir los pasos. Si ya lo has hecho, por favor omite este paso.

**Nota:** Para eso asegúrate de seguir [Configurar el entorno docker en el router linkstar openwrt](https://wiki.seeedstudio.com/es/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de seguir esta guía.

## Instalar el contenedor Portainer

Este tema se discute en la integración de WordPress a Linkstar. Así que necesitas seguir estos pasos si estás instalando Portainer por primera vez. Aquí está el enlace para [instalar el contenedor Portainer](https://wiki.seeedstudio.com/es/wordpress_linkstar/#install-portainer-container).

## Instalar BookStack

### Paso 01: Crear un nuevo stack

En el contexto del uso de aplicaciones, un stack se refiere a un conjunto de servicios relacionados. Por lo tanto, nuestro primer paso es establecer un nuevo stack. Para hacer esto, navega a la barra lateral y localiza la opción **Stacks**. Haz clic en ella y selecciona **Add Stack** para proceder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### Paso 02: Instalar BookStack usando el editor web

En este paso, necesitarás proporcionar un nombre de stack y copiar el siguiente texto en formato docker-compose al editor web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped

```

El archivo docker-compose proporcionado incluye dos contenedores docker distintos: uno para la aplicación Bookstack y otro para la base de datos SQL. Este es el método recomendado para instalar Bookstack. Sin embargo, hay algunos cambios cruciales que deben realizarse antes de proceder.

En primer lugar, reemplaza "yourappurl" con la URL deseada a través de la cual pretendes acceder a la aplicación Bookstack. Además, modifica "yourdbpass" por una contraseña de tu preferencia. Es esencial asegurar que se use la misma contraseña para ambos contenedores para mantener la consistencia.

Finalmente, recuerda ajustar la variable "TZ" para que coincida con tu [Zona horaria](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) específica.

Al realizar estas modificaciones necesarias, puedes configurar exitosamente el archivo docker-compose para tu instalación de Bookstack.

Debajo de la página puedes encontrar el botón **Deploy Stack** y hacer clic en él.

### Paso 03: Acceso a BookStack

Después de que el proceso de despliegue esté completo, puedes ver que se crea un nuevo stack. En nuestro caso, es bookstack y haz clic en él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

Entonces puedes observar que dos contenedores están ejecutándose, y el número de puerto es 6875.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, abre tu navegador web y escribe 192.168.100.1:6875. Entonces navegarás a la página de inicio de sesión.

:::note

Email: admin@admin.com

Contraseña: password

:::

Entonces puedes acceder exitosamente a la página de inicio de BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar Grocy

### Paso 01: Crear un nuevo stack

Igual que el primer paso de la instalación de Bookstack, necesitamos crear un nuevo stack. Así que puedes usar la guía anterior sobre cómo crear un nuevo stack.

### Paso 02: Instalar Grocy usando el editor web

Igual que el segundo paso de la instalación de BookStack, necesitas proporcionar un nombre de stack. Luego copia y pega el siguiente texto docker-compose en el editor web.

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped

```

En la parte inferior de la página puedes encontrar el botón **Deploy Stack** y hacer clic en él.

### Paso 03: Acceder a Grocy

Después de que el proceso de despliegue esté completo, puedes ver que se ha creado un nuevo stack. En nuestro caso, es grocy y haz clic en él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

Entonces puedes observar que el contenedor grocy está ejecutándose, y el número de puerto es 9283.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

A continuación, abre tu navegador web y escribe 192.168.100.1:9283. Entonces navegarás a la página de inicio de sesión.

:::note

Nombre de usuario: admin

Contraseña: admin

:::

Entonces puedes acceder exitosamente a la página de inicio de BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## Recursos

- **[Página Web]** [Docker Documentación Oficial](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Portainer](https://www.portainer.io/)

- **[Página Web]** [BookStack](https://www.bookstackapp.com/)

- **[Página Web]** [Grocy](https://grocy.info/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
