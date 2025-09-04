---
description: El Futuro del Entretenimiento Doméstico, Router LinkStar-H68K y Servidor de Medios Plex
title: El Futuro del Entretenimiento Doméstico, Router LinkStar-H68K y Servidor de Medios Plex
keywords:
  - LinkStar
  - Getting started
  - plex media server
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/plex_media_server
last_update:
  date: 6/14/2023
  author: Kasun Thushara
---
# El Futuro del Entretenimiento Doméstico; Router LinkStar-H68K y Servidor de Medios Plex

Descubre la idea revolucionaria de convertir tu router en un servidor de medios de entretenimiento compacto pero potente. Imagina una puerta de entrada a un reino ilimitado de opciones de entretenimiento consolidadas dentro de un solo dispositivo. Esta innovación revolucionaria trasciende las capacidades convencionales de un dispositivo de red, enriqueciendo tu vida diaria y revolucionando pequeños establecimientos como cafés y restaurantes, ofreciendo experiencias extraordinarias al cliente. Prepárate para sumergirte en un mundo de posibilidades cautivadoras, mejorando cada momento y garantizando entretenimiento inigualable. Aquí tienes algunas aplicaciones potenciales y factores a considerar si buscas una transformación de router tan notable.

## ¿Qué es Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y gestión de aplicaciones dentro de contenedores ligeros y aislados. Los contenedores son unidades autónomas que empaquetan una aplicación junto con sus dependencias, bibliotecas y archivos de configuración, permitiendo que funcione de manera consistente en diferentes entornos. Docker simplifica el proceso de crear, distribuir y ejecutar aplicaciones, facilitando el desarrollo e implementación de software de manera consistente y reproducible. Con Docker, los desarrolladores pueden encapsular sus aplicaciones y asegurar que funcionen sin problemas en diferentes sistemas operativos y configuraciones de infraestructura, convirtiéndolo en una herramienta invaluable para construir aplicaciones portátiles y escalables, optimizar flujos de trabajo de desarrollo y permitir colaboración eficiente entre miembros del equipo.

## ¿Qué es Plex?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

[Plex Media Server](https://www.plex.tv) es una potente plataforma de gestión y transmisión de medios que permite a los usuarios organizar, acceder y transmitir su biblioteca de medios personal a través de varios dispositivos. Con Plex Media Server, los usuarios pueden centralizar sin esfuerzo su colección de películas, programas de TV, música, fotos y más, creando un centro de medios unificado dentro de su red doméstica. Plex organiza e indexa automáticamente los archivos de medios, obteniendo metadatos como descripciones, ilustraciones y subtítulos, para crear una interfaz visualmente atractiva y fácil de usar. Se puede acceder al servidor a través de aplicaciones Plex dedicadas en teléfonos inteligentes, tabletas, televisores inteligentes y dispositivos de transmisión, permitiendo la transmisión fluida de contenido multimedia tanto en casa como de forma remota. Plex Media Server también ofrece características robustas como controles parentales, soporte multiusuario y capacidades de transcodificación, asegurando compatibilidad y calidad de transmisión óptima en diferentes dispositivos y condiciones de red. En general, Plex Media Server permite a los usuarios disfrutar de su colección de medios personal en cualquier momento y lugar, proporcionando una experiencia de entretenimiento integral e inmersiva.

## Configurar el entorno Docker en el router LinkStar OpenWRT

- **Paso 01**  Instalación de OpenWRT en LinkStar

Para comenzar el proceso de instalación de OpenWRT en tu dispositivo LinkStar, consulta la guía de instalación completa proporcionada en el Wiki de LinkStar. Este tutorial se enfoca en utilizar el sistema OpenWRT y demuestra cómo instalar el Contenedor Plex mientras se asegura que LinkStar funcione como un router suave.
Elige una de las siguientes opciones basándote en tu preferencia para instalar OpenWRT en LinkStar:

1. Flashear OpenWRT en la tarjeta TF. [Aquí está el tutorial](https://wiki.seeedstudio.com/es/linkstar-install-system/#flash-openwrt-to-the-tf-card)
2. Flashear OpenWRT en el eMMC. [Aquí está el tutorial](https://wiki.seeedstudio.com/es/linkstar-install-system/#flash-openwrt-to-emmc)

- **Paso 2**: Configuración de la Red LinkStar

Para comenzar a configurar los ajustes de red en tu dispositivo LinkStar, establece una conexión conectándolo a tu computadora a través de un cable de red. Accede al backend operativo de OpenWRT ingresando la dirección IP 192.168.100.1 en tu navegador web. La contraseña inicial de la cuenta es:

```
Account: root
Password: password
```

Una vez que hayas iniciado sesión, el siguiente paso es establecer una conexión a internet para tu dispositivo LinkStar.
Tienes la opción de conectarte ya sea a través de un cable de red o mediante WiFi. Elige el método de conexión que se adapte a tu configuración y preferencias. Aquí utilicé el método inalámbrico. Después de seleccionar la red inalámbrica puedes simplemente ingresar la contraseña y guardar y aplicarla.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img1.png"/></div>

- **Paso 3** : Aumentar la Capacidad de Almacenamiento de Docker

Por defecto, la instalación de Docker en LinkStar tiene una capacidad de almacenamiento de alrededor de 250MB, lo cual puede no ser suficiente para instalar imágenes. Por lo tanto, necesitamos asignar más espacio a Docker para satisfacer nuestros requisitos.
Para comenzar, navega a la sección Sistema en el backend del sistema operativo OpenWRT. Luego, haz clic en Disk Man y localiza la opción **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img2.png"/></div>

En la columna **"END SECTOR"**, especifica el tamaño deseado del espacio de almacenamiento adicional que se asignará para Docker. En este ejemplo, agregaremos 20GB de almacenamiento. Después de ingresar el valor, haz clic en el botón **"NEW"** para crear la nueva asignación de almacenamiento.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img3.png"/></div>

Elige el formato ext4, luego haz clic en el botón FORMAT.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img4.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img5.png"/></div>

Una vez que la asignación esté completa, notarás la adición de un nuevo espacio de 20GB. Sin embargo, este espacio actualmente está desmontado y necesita ser asociado con Docker.
Para proceder, navega a la sección Sistema en el backend del sistema operativo OpenWRT y selecciona Mount Points. Busca la sección Mount Point y haz clic en el botón **"ADD"**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img6.png"/></div>

Elige el nuevo espacio que acabas de crear.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img7.png"/></div>

Elige el Mount Point Use como **Docker data (/opt)**. No olvides marcar la casilla Enable this mount, luego haz clic en el botón **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img8.png"/></div>

Después de completar las configuraciones necesarias para la expansión de almacenamiento, el paso final es reiniciar el dispositivo LinkStar para aplicar los cambios.

Para iniciar el proceso de reinicio, ve a la sección Sistema en el backend del sistema operativo OpenWRT y selecciona Reboot. Haz clic en el botón **"PERFORM REBOOT"** para comenzar el proceso de reinicio. Espera a que OpenWRT se reinicie, y luego procede a iniciar sesión nuevamente una vez que el sistema esté listo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img9.png"/></div>

## Crear Contenedor Docker del Servidor de Medios Plex

A continuación necesitamos obtener la imagen docker de plex. Para eso tienes que visitar este [enlace](https://hub.docker.com/r/linuxserver/plex) para más detalles.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img.PNG"/></div>

A continuación ve a la pestaña Containers y haz clic en el botón add

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img2.png"/></div>

Después de eso puedes ver un formulario para completar.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex3.PNG"/></div>

- **Paso 1**: Establecer Nombre del Contenedor y Red

        Establece el nombre del contenedor como "plex".
        Elige el modo de red como "host".

- **Paso 2**: Configurar Entornos

    Obtén la zona horaria visitando el [enlace](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) proporcionado y copia el nombre de la base de datos TZ.
    Establece la zona horaria usando el siguiente formato

        TZ=[ingresar zona horaria]

    Obtén el claimToken visitando el [enlace](https://www.plex.tv/claim/) proporcionado y copia/pega el token.
    Establece el claimToken usando el siguiente formato

         PLEX_CLAIM=[ingresar claimToken]

- **Paso 3** : Configurar Bind Mounts

 Bajo la sección bind mounts, agrega las siguientes líneas una por una:

        /plex/database:/config
        /plex/temp:/transcode
        /plex/media:/data

- **Paso 4**: Enviar Configuración

    Después de configurar el nombre del contenedor, red, entornos y bind mounts, haz clic en el botón "Submit" para guardar los cambios.

    Siguiendo estos pasos, configurarás exitosamente el contenedor Plex con las configuraciones especificadas.

## Ejecutar y Configurar Plex Media Server

- **Paso 1:**

    Bajo los contenedores docker puedes ver la información del contenedor. Haz clic en el botón de verificación y presiona iniciar.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker 1.PNG"/></div>

- **Paso 2**: Abrir la Configuración Inicial de Plex Media Server

    En tu navegador web, ingresa la dirección 192.168.2.1:32400/web. Esto abrirá la página de configuración inicial para Plex Media Server. Ten en cuenta que 32400 es el puerto donde se está ejecutando el contenedor Docker de Plex.

- **Paso 3**: Establecer un Nombre de Servidor

    Ingresa el nombre de servidor deseado en el campo proporcionado y haz clic en "SIGUIENTE" para continuar.

- **Paso 4**: Organizar Biblioteca de Medios

    Para comenzar a organizar tu biblioteca de medios, haz clic en el botón "AGREGAR BIBLIOTECA".

- **Paso 5**: Seleccionar Tipo de Biblioteca

     Elige el tipo de biblioteca apropiado para tus medios, como Películas, Programas de TV, Música, etc., y haz clic en "SIGUIENTE".

- **Paso 6**: Agregar Carpeta de Medios

     Haz clic en "BUSCAR CARPETA DE MEDIOS" y selecciona la carpeta de datos. Al configurar previamente el contenedor de Plex, esta carpeta de datos está vinculada a la carpeta /plex/media en OpenWrt. Haz clic en "AGREGAR BIBLIOTECA" para confirmar.

- **Paso 7**: Completar la Configuración

     Haz clic en "SIGUIENTE" y luego en "HECHO" para finalizar el proceso de configuración inicial.

Ahora serás recibido con la interfaz de usuario de Plex Media Server, permitiéndote acceder y gestionar tu colección de medios sin problemas.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex interface.PNG"/></div>

## Montar Directorio de Plex en la PC y Transferir los Medios

- **Paso 1.** En la interfaz Luci de OpenWrt, navega a `NAS > Network Shares > ADD`

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS1.PNG"/></div>

- **Paso 2.** Completa la fila según lo siguiente

        - name: Plex 
        - Path: /plex
        - Browse-able: marcado
        - Allow guests: marcado
        - Create mask: 0666
        - Directory mask: 0777
- **Paso 3** Presiona **Guardar y aplicar**:
- **Paso 4** Ve al explorador de windows y haz clic en **Conectar a unidad de red** y escribe //192.168.100.1/plex

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS2.PNG"/></div>

- **Paso 5** Agrega tus películas favoritas, música a la carpeta de medios.
- **Paso 6** Ve a Plex media server nuevamente y haz clic en **Más**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS3.PNG"/></div>

- **Paso 7** Luego haz clic en estos tres puntos y haz clic en **Escanear Archivos de Biblioteca**. Entonces podrás ver las películas o canciones que agregaste recientemente a tu biblioteca.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS4.PNG"/></div>

Al implementar un servidor de medios, ya sea en casa o en un hotel o café de pequeña escala, los usuarios pueden ofrecer una experiencia de entretenimiento excepcional para ellos mismos, miembros de la familia, huéspedes y clientes. Es una solución rentable que centraliza el almacenamiento de medios, reduce el desorden de dispositivos y proporciona acceso remoto y opciones de personalización.

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Plex Media Server](https://www.plex.tv)

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
