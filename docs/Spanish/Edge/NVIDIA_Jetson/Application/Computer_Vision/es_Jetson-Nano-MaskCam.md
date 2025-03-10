---
description: MaskCam
title: MaskCam
keywords:
  - Edge
  - Aplicación con la reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson-Nano-MaskCam
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Maskcam: monitoreo del uso de mascarillas faciales en público basado en Jetson Nano

## **Introducción**

Debido a los estragos del COVID-19, en muchos lugares públicos a menudo vemos el requisito de usar mascarilla. Por lo general, hay encargados en la entrada del área para observar si las personas llevan mascarilla. Tal vez sea una tarea muy simple para los humanos, pero si la combinamos con Jetson Nano, captura de gráficos y computación en el borde con IA, será una tarea muy interesante y de gran valor social.

MaskCam fue desarrollado por Berkeley Design Technology, Inc. (BDTI) y Tryolabs S.A., con financiación de NVIDIA. MaskCam se ofrece bajo la Licencia MIT. Para obtener más información sobre MaskCam, consulta el [Informe de BDTI](https://www.bdti.com/maskcam). Si tienes preguntas, envía un correo electrónico a BDTI a maskcam@bdti.com.

En este proyecto, utilizaremos el [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) junto con otros accesorios. Al mismo tiempo, puedes optar por la [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html de Seeed, que tiene el mismo tamaño y diseño funcional que la placa base oficial de NVIDIA, además de ofrecer una excelente estabilidad y versatilidad.

## **Preparación**

### **Requerimientos de Hardware**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)(optional)

- Monitor hdmi de 7 pulgadas y cable HDMI

- Estación USB

- Teclado y mouse

- Adaptador de potencia 5V 4A

- Cámara USB

- Cable Ethernet

- PC con Windows11 (o Windows10/Ubuntu18.04/ OSX Big Sur)

### **Requerimientos de Software**

- docker

- docker-compose

- Software de video (Reproductor de Stream RTSP, como VLC/QuickTime/PotPlayer)

## **Primeros pasos**

### **Configuración de la Jetson Nano**

- #### **Paso 1.** Descargar el contenedor de MaskCam de Docker Hub

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **Paso 2.** Encontrar la dirección IP de la Jetson Nano con el comando ```ifconfig```

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **Paso 3.** Inicializar MaskCam con docker

Recuerda conectar tu Jetson Nano con una cámara USB y, luego, ingresa el siguiente comando en la terminal.

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**Nota:** Reemplaza ```<tu-jetson-ip>``` con la dirección Ip de tu Jetson en este comando.

Si no deseas utilizar el dispositivo input por defecto, hay otros dos comandos para elegir y reemplazar el comando de arriba.

Usa el dispositivo /dev/video1:

```shell
#Use the /dev/video1 camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

Utiliza el dispositivo de cámara CSI:

```shell
#Use the CSI camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **Paso 4.** Visualización del streaming con ```MASKCAM_DEVICE_ADDRESS```

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**Nota:**  ```aaa.bbb.ccc.ddd``` es la dirección que colocaste en ```MASKCAM_DEVICE_ADDRESS``` previamente.

Puedes copiar y pegar esa URL en tu visor de transmisión RSTP en otra computadora. En la transmisión de video, si no llevas mascarilla, verás un marco rojo en tu rostro. De lo contrario, verás un marco verde.

### **Configuración del servidor MQTT**

 Además de la función básica, también incluye la función de [servidor remoto](https://github.com/bdtinc/maskcam/blob/main/server) en esta biblioteca, lo que significa que tu PC puede recibir estadísticas del dispositivo, almacenarlas en una base de datos y tener una interfaz gráfica basada en web para mostrarlas.

En este artículo, todas las demostraciones sobre el servidor se basan en un host con sistema Windows 11. También puedes encontrar las instrucciones para usar el sistema Linux en este artículo: [Maskcam](https://github.com/bdtinc/maskcam).

- #### **Paso 1.** Instalar Docker y Docker-compose en tu PC

Descarga el paquete de instalación de [Docker](https://www.docker.com/) desde su sitio web oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

Nota: Si aparece un mensaje que dice ```WLS 2 installization is incomplete```. durante el proceso de instalación, haz click en el enlace del cuadro de mensaje, descarga e instala el paquete de actualización del kernel de Linux.
Luego, puedes ejecutar ```docker```.

- #### **Paso 2.** Configura el directorio de compilación

Ejecuta ```Windows PowerShell``` como administrador

Ve al directorio raíz del disco que utilizarás, como en el siguiente ejemplo:

```shell
cd e:\
```

Descarga el repositorio MaskCam:

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

Descomprimelo en la ruta ```e:\maskcam``` :

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

Muévete a la carpeta del servidor de Maskcam, que contiene cuatro contenedores: el broker Mosquitto, la API backend, la base de datos y el frontend Streamlit.

```shell
cd maskcam\maskcam-main\server
```

Luego, crea los archivos ```.env``` copiando las plantillas predeterminadas:

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Abre la ```database.env```:

```shell
notepad database.env
```

Reemplaza ```<DATABASE_USER>```, ```<DATABASE_PASSWORD>```, y ```<DATABASE_NAME>``` por el usuario de tu base de datos, tu contraseña y el nombre de tu base de datos respectivamente.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **Paso 3.** Compila y ejecuta el servidor local

Después de editar el archivo de entorno de la base de datos, estarás listo para construir todos los contenedores y ejecutarlos con un solo comando:

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

Ahora, abre el navegador e ingresa la dirección IP del servidor para visitar el frontend web:

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Nota:** Reemplaza ```<server IP>``` por tu dirección IP.

Si ves un ```ConnectionError``` en el frontend, espera unos segundos más y recarga la página. El contenedor backend puede tardar un poco en completar la configuración de la base de datos.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

Si después de esperar unos segundos más y recargar la página sigue apareciendo un ```ConnectionError``` en el frontend, asegúrate de que los puertos: <5432> y <80> no estén siendo ocupados o escuchados por otro proceso.

Si visitas la página web del frontend con éxito la primera vez pero falla la siguiente, la mejor manera de solucionarlo actualmente es reinstalar Docker.

- #### **Paso 4.** Apunta la Jetson Nano a tu servidor local

Vuelve al terminal de tu Jetson Nano y luego ejecuta el contenedor de Maskcam con el siguiente comando:

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**Nota:** Reemplaza ```<server IP>``` y ```<your-jetson-ip>``` con la dirección IP de tu servidor y de tu Jetson respectivamente.

Ahora puedes seleccionar tu dispositivo en la página web como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

Finalmente, podrás ver los datos recolectados por la Jetson Nano siendo transmitidos al servidor.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

