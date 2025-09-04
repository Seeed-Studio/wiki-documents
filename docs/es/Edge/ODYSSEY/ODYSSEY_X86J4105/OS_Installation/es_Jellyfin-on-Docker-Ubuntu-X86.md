---
description: ODYSSEY - X86J41x5
title: Instalación del Servidor de Medios Jellyfin
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jellyfin-on-Docker-Ubuntu-X86
last_update:
  date: 01/03/2023
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/thumb.png" alt="pir" width={1000} height="auto" /></p>

Esta guía explica cómo configurar el Servidor de Medios Jellyfin como un contenedor Docker instalado en un sistema Ubuntu ejecutándose en [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html). ¡Usando Jellyfin, puedes transmitir todos tus archivos de medios locales desde cualquier lugar del mundo!

## ¿Qué es Docker?

[Docker](https://docs.docker.com/) es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Docker proporciona la capacidad de empaquetar y ejecutar una aplicación en un entorno ligeramente aislado llamado contenedor. El aislamiento y la seguridad te permiten ejecutar muchos contenedores simultáneamente en un host determinado. Los contenedores son ligeros y contienen todo lo necesario para ejecutar la aplicación, por lo que no necesitas depender de lo que esté instalado actualmente en el host. Puedes compartir fácilmente contenedores mientras trabajas, y estar seguro de que todos con quienes compartas obtengan el mismo contenedor que funciona de la misma manera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width={200} height="auto" /></p>

## ¿Qué es el Servidor de Medios Jellyfin?

[Servidor de Medios Jellyfin](https://www.plex.tv) es una herramienta que te permite acceder a la música, imágenes y videos almacenados en un dispositivo con muchos otros dispositivos. Puedes instalar el software Jellyfin en una computadora Windows, Mac o Linux, dispositivo de almacenamiento conectado a la red (NAS) o incluso un router. Puedes transmitir todos tus archivos de medios almacenados en tu Servidor de Medios Jellyfin remotamente a través de internet y acceder desde cualquier lugar del mundo usando la aplicación Jellyfin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" alt="pir" width={300} height="auto" /></p>

## Comenzando

Ahora vamos a revisar el proceso de ejecutar el Servidor de Medios Jellyfin como un contenedor Docker instalado en un sistema Ubuntu.

### Instalar Ubuntu en X86

Sigue [esta wiki](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-OS) para instalar Ubuntu en ODYSSEY-X86. Puedes descargar el último SO Ubuntu desde [aquí](https://ubuntu.com/download/desktop).

### Instalar Docker en Ubuntu

- **Paso 1.** Actualiza tu lista de paquetes existentes

```sh
sudo apt update
```

- **Paso 2.** Instalar los paquetes de requisitos previos necesarios

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- **Paso 3.** Añade la clave GPG para el repositorio oficial de Docker a tu sistema Ubuntu

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **Paso 4.** Agregar el repositorio de Docker a las fuentes de APT

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **Paso 5.** Instalar Docker

```sh
sudo apt install docker-ce -y
```

- **Paso 6.** Verificar que Docker esté instalado y ya ejecutándose

```sh
sudo systemctl status docker
```

Y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/1.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 7.** Por defecto, el comando docker solo puede ejecutarse como usuario root o por un usuario en el grupo docker. Así que, añade tu nombre de usuario al grupo Docker

```sh
sudo usermod -aG docker ${USER}
```

- **Paso 8.** Aplicar la nueva membresía de grupo

```sh
su - ${USER}
```

### Instalar Jellyfin Media Server en Docker

- **Paso 1.** Descargar la imagen de contenedor más reciente de Jellyfin

```sh
docker pull jellyfin/jellyfin
```

- **Paso 2.** Crear almacenamiento persistente para datos de configuración y caché

```sh
docker volume create jellyfin-config
docker volume create jellyfin-cache
```

- **Paso 3.** Crear una carpeta para guardar los archivos multimedia

```sh
# for example
mkdir /home/username/movies
```

**Nota:** Aquí **username** debe ser reemplazado por el nombre de usuario en tu sistema Ubuntu

- **Paso 4.** Crear y ejecutar un contenedor

```sh
docker run -d \
 --name jellyfin \
 --net=host \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
```

**Nota:** Aquí **/path/to/media** es el directorio **/home/username/movies** que creamos antes

### Configuración Inicial del Servidor de Medios Jellyfin

- **Paso 1.** Escribe lo siguiente en un navegador web desde ODYSSEY-X86 o cualquier otra PC en la misma red que ODYSSEY-X86

```sh
<IP_address_of_ODYSSEY-X86>:8096
```

```sh
# for example:
192.168.1.133:8096
```

- **Paso 2.** En la página de inicio de configuración de Jellyfin, selecciona tu idioma preferido y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/2.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Ingresa un **Username**, **Password** para la cuenta de administrador y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/3.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Haz clic en **Add Media Library**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/4.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Elige el **Content type** del menú desplegable y completa el Display name. Aquí el Display name elegirá el mismo que el tipo de contenido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/5.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 6.** Haz clic en el símbolo **+** junto a **Folders**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/6.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 7.** Haz clic en la carpeta **/media** dentro del contenedor Docker y haz clic en **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/7.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/8.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 8.** Haz clic en **OK** nuevamente manteniendo las otras configuraciones por defecto. Puedes cambiar las otras configuraciones si lo prefieres.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/9.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 9.** Haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/10.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Antes de hacer clic en **Next**, puedes continuar agregando otras bibliotecas de medios como programas de TV. Solo haz clic en **Add Media Library** y repite el proceso

- **Paso 10.** Cambia las configuraciones si quieres y haz clic en **Next** para las siguientes pantallas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/11.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/12.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 11.** Finalmente haz clic en **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/13.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 12.** Inicia sesión en la cuenta de administrador que creamos antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/14.png" alt="pir" width={1000} height="auto" /></p>

¡Y serás llevado a la página de inicio de Jellyfin!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/15.png" alt="pir" width={1000} height="auto" /></p>

### Agregar Películas/ Programas de TV

Ahora agregaremos un par de películas para que podamos reproducir en Jellyfin

- **Paso 1.** Copia y pega todos tus archivos de películas en el directorio (/home/username/movies) que creamos antes

- **Paso 2.** Regresa a la página de inicio de Jellyfin, haz clic en los 3 puntos y selecciona **Refresh metadata**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/16.png" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/17.png" alt="pir" width={400} height="auto" /></p>

- **Paso 3.** Mantén el **Refresh mode** por defecto y haz clic en **Refresh**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/18.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Haz clic en **Movies**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/20.png" alt="pir" width={1000} height="auto" /></p>

Y finalmente verás todas tus películas cargadas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/19.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5.** Haz clic en una película y haz clic en el botón **Play** para comenzar a reproducir la película

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/21.png" alt="pir" width={1000} height="auto" /></p>

### Reproducir los Medios en las Aplicaciones Cliente de Jellyfin

Ahora puedes usar las aplicaciones cliente de Jellyfin para ver todos tus medios dentro del Servidor de Medios Jellyfin. La aplicación Jellyfin puede instalarse en varios dispositivos como teléfonos móviles, PCs, smart TVs, etc...

Visita [este enlace](https://jellyfin.org/clients) para ver los dispositivos compatibles para que puedas instalar la aplicación Jellyfin en ellos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/22.png" alt="pir" width={1000} height="auto" /></p>

¡Ahora puedes navegar a la Aplicación Cliente de Jellyfin, iniciar sesión y transmitir todos tus medios almacenados en el Servidor de Medios Jellyfin!

### Conectar Almacenamiento Externo para Almacenar los Medios

También puedes conectar unidades de almacenamiento externo para expandir el almacenamiento en X86 para que podamos almacenar todos nuestros medios.

ODYSSEY - X86J4125 tiene varias opciones de almacenamiento como:

- PCIe SSD
- SATA SSD
- SATA HDD
- Micro-SD Card
- USB Flash Drives

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

Puedes conectar cualquier almacenamiento externo de tu elección consultando las opciones de almacenamiento anteriores.

## Convertir un TV Ordinario en un Smart TV para Ejecutar Jellyfin

Es muy conveniente transmitir medios como películas desde tu Servidor de Medios Jellyfin usando un Smart TV en casa. Necesitas un smart TV porque la aplicación Jellyfin se puede instalar si el TV tiene una tienda de aplicaciones. Sin embargo, si tienes un TV ordinario, ¡puedes convertirlo en un smart TV usando una Raspberry Pi!

¡Puedes seguir [este enlace](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) para aprender más!

## Comunidad

<iframe width={560} height={315} src="https://www.youtube.com/embed/4VkY1vTpCJY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Recursos

- **[Página Web]** [Documentación Oficial de Docker](https://docs.docker.com)

- **[Página Web]** [Hub de Docker](https://hub.docker.com)

- **[Página Web]** [Servidor de Medios Jellyfin](https://jellyfin.org)

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
