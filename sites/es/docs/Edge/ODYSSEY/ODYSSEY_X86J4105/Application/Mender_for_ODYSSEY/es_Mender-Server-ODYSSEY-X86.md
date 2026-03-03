---
description: Mender Server on ODYSSEY - X86
title: Mender Server on ODYSSEY - X86
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mender-Server-ODYSSEY-X86
last_update:
  date: 03/16/2023
  author: Lakshantha
---

# Instalación del Servidor Mender Auto-Hospedado en ODYSSEY - X86

Podemos configurar un Servidor Mender Auto-Hospedado en una placa ODYSSEY - X86 y luego enviar actualizaciones OTA a otros dispositivos cliente que ejecutan como clientes Mender.

Esta guía se enfoca en usar la placa ODYSSEY - X86 ejecutando el Sistema OpenWrt de Seeed. Luego ejecutamos el Servidor Mender Auto-Hospedado como un contenedor Docker en OpenWrt.

## Prerrequisitos

- [Sistema OpenWrt de Seeed](https://wiki.seeedstudio.com/es/OpenWrt-Getting-Started) instalado en [placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Si deseas que este Servidor Mender Auto-Hospedado esté disponible públicamente, necesitas una dirección IP pública con el puerto 443 accesible públicamente
- Si usas IP pública como se mencionó arriba, necesitas vincular la IP pública a un nombre DNS para el Servidor Mender

## Instalación

Ten en cuenta que la siguiente guía se basa en la [guía oficial de Mender](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose) para instalación con Docker. Hay algunos cambios menores de la guía oficial en esta versión y por lo tanto, sigue esta guía paso a paso para configurar exitosamente el Servidor Mender Auto-Hospedado en la placa ODYSSEY - X86.

### Preparación Básica

- **Paso 1.** Después de encender la placa ODYSSEY - X86 con el Sistema OpenWrt ejecutándose, conecta un puerto Ethernet a internet y el otro puerto Ethernet a una PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Abre la Interfaz Web Luci de OpenWrt accediendo a **192.168.2.1**

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/10/openwrt-webui-1030x723.png" alt="pir" width="1000" height="auto"/></p>

Por defecto, el Servidor Mender está configurado en el puerto **443 para https** y puerto **80 para http**. Pero OpenWrt usa el puerto 443 para acceder a la interfaz web Luci vía https y el puerto 80 para acceder a la interfaz web Luci vía http. Así que necesitamos cambiar el puerto para la Interfaz Web Luci primero.

- **Paso 3.** Navega a `Services > Terminal` e inicia sesión con tus credenciales

- **Paso 4.** Escribe lo siguiente para acceder al **archivo de configuración uhttpd**

```sh
vi /etc/config/uhttpd
```

- **Paso 5.** Cambia **80** y **443** a valores diferentes. Aquí 80 se cambia a 85 y 443 se cambia a 446

```sh
config uhttpd 'main'
        list listen_http '0.0.0.0:85'
        list listen_http '[::]:85'
        list listen_https '0.0.0.0:446'
        list listen_https '[::]:446'
```

**Nota:** Presiona "i" en el editor de texto Vi para entrar al modo de inserción

- **Paso 6.** Guarda y sal del editor de texto presionando "ESC" y escribiendo ":wq"

- **Paso 7.** En la terminal, escribe lo siguiente para reiniciar el servicio uhttpd

```sh
service uhttpd restart
```

- **Paso 8.** Accede nuevamente a la interfaz web Luci usando el puerto recién definido

```sh
example:
192.168.2.1:85
```

- **Paso 9.** Abre la terminal nuevamente y escribe lo siguiente para actualizar la lista de paquetes de OpenWrt

```sh
opkg update
```

- **Paso 10.** Instalar Git

```sh
opkg install git-http
```

- **Paso 11.** Clona el siguiente repositorio

```sh
git clone -b 3.1.0 https://github.com/mendersoftware/integration mender-server
```

- **Paso 12.** Ingresa al siguiente directorio:

```sh
cd mender-server/production
```

- **Paso 13.** Copia la plantilla de producción a su propio archivo

```sh
cp config/prod.yml.template config/prod.yml
```

- **Paso 14.** Lista los archivos en el directorio

```sh
ls -l *
```

```
-rwxr-xr-x    1 root     root          1489 Nov  8 18:35 run

config:
-rw-r--r--    1 root     root           660 Nov  8 18:35 enterprise.yml.template
-rw-r--r--    1 root     root          5298 Nov  8 18:36 prod.yml
-rw-r--r--    1 root     root          5298 Nov  8 18:35 prod.yml.template
```

- **Paso 15.** Aquí eliminamos el archivo **enterprise.yml.template** porque vamos a ejecutar la edición de código abierto del servidor Mender

```sh
rm config/enterprise.yml.template
```

Sin embargo, si vas a ejecutar la edición Enterprise del Servidor Mender, mantén el archivo **enterprise.yml.template** y por favor [sigue aquí](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose#enterprise).

- **Paso 16.** Mientras el directorio de trabajo actual sigue siendo **production**, descarga las imágenes Docker necesarias

```sh
./run pull
```

```
Pulling mender-mongo                  ... done
Pulling mender-deviceconfig           ... done
Pulling mender-useradm                ... done
Pulling mender-workflows-worker       ... done
Pulling mender-create-artifact-worker ... done
Pulling mender-workflows-server       ... done
Pulling mender-device-auth            ... done
Pulling mender-gui                    ... done
Pulling mender-inventory              ... done
Pulling mender-api-gateway            ... done
Pulling minio                         ... done
Pulling mender-deployments            ... done
Pulling mender-nats                   ... done
Pulling mender-deviceconnect          ... done
Pulling mender-mongo (mongo:4.4)...
```

**Nota:** Ten en cuenta que Docker Hub impuso límites en las descargas originadas por usuarios anónimos a 100 por 6 horas (ver: [precios de Docker](https://www.docker.com/pricing)). Esto significa que, por razones completamente independientes de Mender, el paso anterior puede fallar y es posible que tengas que reintentar después de un tiempo.

### Certificados y Claves

- **Paso 1.** Establece el nombre de dominio público de tu servidor

```sh
API_GATEWAY_DOMAIN_NAME="mender.example.com"  # replace with your server's public domain name
STORAGE_PROXY_DOMAIN_NAME="${API_GATEWAY_DOMAIN_NAME}"
```

**Nota:** Si quieres que este Servidor Mender Auto-Hospedado esté disponible solo localmente, puedes elegir un nombre de dominio que ya tengas y adjuntar un subdominio aleatorio de tu preferencia. Por ejemplo: **mender.seeedstudio.com**. Asegúrate de no usar directamente la dirección IP del servidor Mender aquí porque no funcionará.

- **Paso 2.** Prepara certificados usando el script auxiliar keygen

```sh
CERT_CN=$API_GATEWAY_DOMAIN_NAME \
CERT_SAN="DNS:${API_GATEWAY_DOMAIN_NAME},DNS:*.${STORAGE_PROXY_DOMAIN_NAME}" \
../keygen
```

```
Generating an EC private key
writing new private key to 'private.key'
-----
................................................................................++++
...........................................................................................++++
writing RSA key
................................................................................................++++
...........................++++
writing RSA key
All Mender Server keys and certificates have been generated in directory /root/mender-server/production/keys-generated.
Please include them in your docker compose and device builds.
For more information, please refer to https://docs.mender.io/

```

Tu árbol de directorios local ahora debería verse así:

```
├── keys-generated
│   ├── cert
│   │   ├── cert.crt
│   │   └── private.key
│   └── keys
│       ├── deviceauth
│       │   └── private.key
│       └── useradm
│           └── private.key
├── config/enterprise.yml.template
├── config/prod.yml
├── config/prod.yml.template
└── run
```

Los certificados del API Gateway y Storage Proxy generados aquí necesitan estar disponibles para el cliente Mender. Consulta la sección sobre [construcción para producción](https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production) para una descripción sobre cómo incluir los certificados en las construcciones del cliente.

### Almacenamiento Persistente

El almacenamiento persistente de los datos de los servicios backend se implementa usando volúmenes Docker con nombre. La plantilla está configurada para montar los siguientes volúmenes:

- mender-artifacts - almacenamiento de objetos de artefactos
- mender-db - datos de las bases de datos de los servicios mender

Crear los volúmenes:

```sh
docker volume create --name=mender-artifacts
docker volume create --name=mender-db
```

La configuración de despliegue en **config/prod.yml** ahora necesita ser actualizada. Vamos a revisar los pasos a continuación.

### Minio

Las claves **MINIO_ACCESS_KEY** y **MINIO_SECRET_KEY** controlan las credenciales para subir artefactos al almacén de objetos. Dado que Minio es un servicio compatible con la API de S3, estas configuraciones corresponden al ID de Clave de Acceso y Clave de Acceso Secreta de Amazon AWS respectivamente

- **Paso 1.** Necesitamos generar una clave secreta con longitud 16. Hay 2 formas de hacer esto

**Método 1:**

1. Si tienes acceso a una máquina Linux, instala primero la utilidad pwgen

```sh
sudo apt install pwgen
```

2. Después de eso, genera una clave secreta aleatoria de 16 caracteres de longitud

```sh
pwgen 16 1
```

**Método 2:**

Escribe una clave secreta aleatoria de 16 caracteres por ti mismo. Necesita tener **números, caracteres en mayúsculas y minúsculas**

- **Paso 2.** Reemplaza la clave secreta anterior con este comando

```sh
MINIO_SECRET_KEY_GENERATED=<secret key-generated>
```

- **Paso 3.** Inserta las claves de acceso y secretas en **config/prod.yml** con los siguientes comandos

```sh
sed -i.bak "s/MINIO_ACCESS_KEY:.*/MINIO_ACCESS_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/MINIO_SECRET_KEY:.*/MINIO_SECRET_KEY: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

### Servicio de Despliegues

El servicio de despliegues subirá objetos de artefactos al almacenamiento minio a través del storage-proxy, consulta la [descripción general de administración](https://docs.mender.io/3.1/server-installation/overview) para más detalles. Por esta razón, las credenciales de acceso **DEPLOYMENTS_AWS_AUTH_KEY** y **DEPLOYMENTS_AWS_AUTH_SECRET** necesitan ser actualizadas y **DEPLOYMENTS_AWS_URI** debe apuntar al nombre de dominio de tu proxy de almacenamiento.

- **Paso 1.** Ejecuta los siguientes comandos para establecer **DEPLOYMENTS_AWS_AUTH_KEY** y **DEPLOYMENTS_AWS_AUTH_SECRET** a los valores de **MINIO_ACCESS_KEY** y **MINIO_SECRET_KEY**, respectivamente

```sh
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_KEY:.*/DEPLOYMENTS_AWS_AUTH_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_SECRET:.*/DEPLOYMENTS_AWS_AUTH_SECRET: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

**Paso 2.** Ejecuta el siguiente comando para que **DEPLOYMENTS_AWS_URI** apunte a tu proxy de almacenamiento

```sh
sed -i.bak "s/https:\/\/set-my-alias-here.com/https:\/\/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### Proxy de Almacenamiento

En la configuración predeterminada no hay un proceso separado que actúe como proxy al servicio de almacenamiento. Para este propósito puedes usar Mender API Gateway, pero con un nombre de dominio adicional. Cambia el valor de marcador de posición set-my-alias-here a un nombre de dominio válido para usar Mender API Gateway como proxy al servicio de almacenamiento, ejecutando el siguiente comando

```sh
sed -i.bak "s/set-my-alias-here.com/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### API Gateway

Por motivos de seguridad, el API Gateway debe conocer con precisión el nombre DNS asignado a él, el cual configurarás a través de la variable de entorno ALLOWED_HOSTS.

Cambia el valor de marcador de posición my-gateway-dns-name por un nombre de host válido, ejecutando el siguiente comando

```sh
sed -i.bak "s/my-gateway-dns-name/$API_GATEWAY_DOMAIN_NAME/g" config/prod.yml
```

## Ejecutar el Servidor

- **Paso 1.** Iniciar todos los servicios en modo separado con el siguiente comando

```sh
./run up -d
```

```
Creating network "menderproduction_mender" with the default driver
Creating menderproduction_mender-nats_1                   ... done
Creating menderproduction_mender-mongo_1 ... done
Creating menderproduction_minio_1        ... done
Creating menderproduction_mender-gui_1   ... done
Creating menderproduction_mender-workflows-worker_1       ... done
Creating menderproduction_mender-create-artifact-worker_1 ... done
Creating menderproduction_mender-useradm_1                ... done
Creating menderproduction_mender-workflows-server_1       ... done
Creating menderproduction_mender-deviceconfig_1           ... done
Creating menderproduction_mender-inventory_1              ... done
Creating menderproduction_mender-deviceconnect_1          ... done
Creating menderproduction_mender-device-auth_1            ... done
Creating menderproduction_mender-api-gateway_1            ... done
Creating menderproduction_mender-deployments_1            ... done
```

- **Paso 2.** Para verificar que los servicios están ejecutándose, ejecuta el siguiente comando y verifica que el estado de todos los servicios sea "Up"

```sh
./run ps
```

```
                      Name                                    Command                  State                  Ports            
-------------------------------------------------------------------------------------------------------------------------------
menderproduction_mender-api-gateway_1              /entrypoint.sh --accesslog ...   Up             0.0.0.0:443->443/tcp, 80/tcp
menderproduction_mender-auditlogs_1                /usr/bin/auditlogs --confi ...   Up             8080/tcp                    
menderproduction_mender-create-artifact-worker_1   /usr/bin/workflows --confi ...   Up             8080/tcp                    
menderproduction_mender-deployments_1              /entrypoint.sh --config /e ...   Up             8080/tcp                    
menderproduction_mender-device-auth_1              /usr/bin/deviceauth --conf ...   Up             8080/tcp                    
menderproduction_mender-deviceconfig_1             /usr/bin/deviceconfig --co ...   Up             8080/tcp                    
menderproduction_mender-deviceconnect_1            /usr/bin/deviceconnect --c ...   Up             8080/tcp                    
menderproduction_mender-gui_1                      /entrypoint.sh nginx             Up (healthy)   80/tcp, 8080/tcp            
menderproduction_mender-inventory_1                /usr/bin/inventory-enterpr ...   Up             8080/tcp                    
menderproduction_mender-mongo_1                    docker-entrypoint.sh mongod      Up             27017/tcp                   
menderproduction_mender-nats_1                     docker-entrypoint.sh nats- ...   Up             4222/tcp, 6222/tcp, 8222/tcp
menderproduction_mender-tenantadm_1                /usr/bin/tenantadm --confi ...   Up             8080/tcp                    
menderproduction_mender-useradm_1                  /usr/bin/useradm-enterpris ...   Up             8080/tcp                    
menderproduction_mender-workflows-server_1         /usr/bin/workflows-enterpr ...   Up             8080/tcp                    
menderproduction_mender-workflows-worker_1         /entrypoint.sh worker --au ...   Up                                         
menderproduction_minio_1                           /usr/bin/docker-entrypoint ...   Up (healthy)   9000/tcp
```

- **Paso 3.** Dado que esta es una instalación completamente nueva, necesitamos crear el usuario inicial a través de la CLI proporcionada por el Servicio de Administración de Usuarios. El binario del servicio está integrado en un contenedor de Docker, por lo que para ejecutarlo deberás emitir el subcomando exec de docker-compose

```sh
./run exec mender-useradm /usr/bin/useradm create-user --username=myname@host.com --password=mypassword
```

## Acceder al Servidor

### Servidor Público

Ahora puedes acceder al servidor público de Mender con el nombre de dominio especificado en los pasos anteriores. Después de eso puedes introducir las credenciales anteriores para el primer usuario e iniciar sesión en el servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/login.png" alt="pir" width="400" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/after-login.jpg" alt="pir" width="1000" height="auto"/></p>

### Servidor Local

Sin embargo, si estás ejecutando el Servidor Mender localmente, hay algunos pasos adicionales.

- **Paso 1.** Ingresa a la Interfaz Web Luci de OpenWrt

```sh
example:
192.168.2.1:85
```

- **Paso 2.** Navega a `Network > DHCP and DNS`

- **Paso 3.** En **Server Settings** haz clic en **General Settings**

- **Paso 4.** Dentro del espacio junto a **Addresses**, escribe el subdominio creado previamente con el nombre de dominio y luego ingresa la dirección IP de X86 como sigue

```sh
/mender.seeedstudio.com/192.168.2.1
```

- **Paso 5.** Haz clic en **SAVE & APPLY**

- **Paso 6.** Ahora puedes acceder al servidor Mender local escribiendo el subdominio y el nombre de dominio en el navegador

```sh
example:
https://mender.seeedstudio.com
```

**Nota:** Recuerda añadir **`https://`** al principio

¡Ahora puedes enviar actualizaciones OTA a los clientes que están conectados a este servidor Mender auto-hospedado!

**Nota:** Si encuentras algún problema al iniciar o ejecutar tu servidor Mender, puedes echar un vistazo a la sección para [solucionar problemas del servidor Mender](https://docs.mender.io/3.1/troubleshoot/mender-server).
