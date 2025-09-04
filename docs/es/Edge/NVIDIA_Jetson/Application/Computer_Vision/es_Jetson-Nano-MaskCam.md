---
description: MaskCam
title: MaskCam
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson-Nano-MaskCam
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Maskcam - Monitoreo del Uso de Mascarillas en Multitudes basado en Jetson Nano

## **Introducción**

Debido a los estragos del COVID-19, en muchos lugares públicos, a menudo vemos el requisito de usar mascarilla. Usualmente hay gerentes en la entrada del área para observar si las personas están usando mascarillas. Tal vez sea una tarea muy simple para los humanos, pero si la combinamos con Jetson Nano, captura gráfica y computación en el borde con IA, será una tarea muy interesante y de valor social.

MaskCam fue desarrollado por Berkeley Design Technology, Inc. (BDTI) y Tryolabs S.A., con desarrollo financiado por NVIDIA. MaskCam se ofrece bajo la Licencia MIT. Para más información sobre MaskCam, por favor consulte el [informe de BDTI](https://www.bdti.com/maskcam). Si tiene preguntas, por favor envíe un correo electrónico a BDTI a maskcam@bdti.com.

En este proyecto, usaremos el [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) junto con otros accesorios. Al mismo tiempo, puede elegir la [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html) de Seeed, que tiene el mismo tamaño y diseño funcional que la placa portadora oficial de NVIDIA, y también, tiene excelente estabilidad y versatilidad.

## **Preparación**

### **Requisitos de Hardware**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)(opcional)

- Monitor hdmi de 7 pulgadas y cable HDMI

- Estación de Acoplamiento USB

- Ratón y Teclado

- Adaptador de Corriente 5V 4A

- Cámara USB

- Cable Ethernet

- PC con Windows11 (o Windows10/Ubuntu18.04/ OSX Big Sur)

### **Requisitos de Software**

- docker

- docker-compose

- Software de Video (Mostrar transmisiones RTSP, como VLC/QuickTime/PotPlayer)

## **Comenzar**

### **Configuración de Jetson Nano**

- #### **Paso 1.** Descargar el contenedor MaskCam desde Docker Hub

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **Paso 2.** Encontrar la Dirección IP de Jetson Nano con el comando ```ifconfig```

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **Paso 3.** Iniciar MaskCam con docker

Recuerde conectar su Jetson Nano con una cámara USB, y luego, escriba el comando de abajo en la terminal.

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**Nota:** Reemplace ```<your-jetson-ip>``` con la dirección IP de su propio Jetson Nano en este comando.

Si no quiere usar el dispositivo de entrada predeterminado, también hay dos comandos diferentes para elegir y reemplazar el comando anterior.

Usar el dispositivo de cámara /dev/video1:

```shell
#Usar el dispositivo de cámara /dev/video1
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

Usar el dispositivo de cámara CSI:

```shell
#Usar el dispositivo de cámara CSI
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **Paso 4.** Ver la transmisión de video en vivo a través de ```MASKCAM_DEVICE_ADDRESS```

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**Nota:**  ```aaa.bbb.ccc.ddd``` es la dirección que proporcionó en ```MASKCAM_DEVICE_ADDRESS``` anteriormente.

Puede copiar y pegar esa URL en su visor de transmisión RSTP en otra computadora. En la transmisión de video, si no está usando mascarilla, verá un marco rojo en su cara. De lo contrario, verá un marco verde.

### **Configuración del Servidor MQTT**

 Además de la función básica, también incluye la función del [servidor](https://github.com/bdtinc/maskcam/blob/main/server) remoto en esta biblioteca, lo que significa que su PC puede recibir estadísticas del dispositivo, almacenarlas en una base de datos, y tener una interfaz gráfica frontend basada en web para mostrarlas.

En este artículo, todas las demostraciones sobre el servidor están basadas en el sistema host Windows11, también puede encontrar las instrucciones usando el sistema Linux a través de este artículo: [Maskcam](https://github.com/bdtinc/maskcam).

- #### **Paso1.** Instalar Docker y Docker-compose en su PC

Descargue el paquete de instalación de [Docker](https://www.docker.com/) desde su sitio web oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

Nota: Si existe un mensaje que dice ```WLS 2 installization is incomplete.``` en el progreso de instalación, haga clic en el enlace en el cuadro de aviso, descargue e instale el paquete de actualización del kernel de Linux.
Entonces puede ejecutar ```docker```.

- #### **Paso2.** Configurar directorio de construcción

Ejecute ```Windows PowerShell``` como administrador

Muévase a la raíz de la unidad que estará usando, como:

```shell
cd e:\
```

Descargar el repositorio MaskCam:

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

Descomprimirlo a la ruta ```e:\maskcam```:

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

Moverse a la carpeta del servidor maskcam, que tiene cuatro contenedores: el broker Mosquitto, API backend, base de datos, y frontend Streamlit.

```shell
cd maskcam\maskcam-main\server
```

Luego, crear los archivos ```.env``` copiando las plantillas predeterminadas:

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Abre el ```database.env``` :

```shell
notepad database.env
```

Reemplaza los campos ```<DATABASE_USER>```, ```<DATABASE_PASSWORD>```, y ```<DATABASE_NAME>``` con tus propios valores

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **Paso3.** Construir y ejecutar el servidor local

Después de editar el archivo de entorno de la base de datos, estás listo para construir todos los contenedores y ejecutarlos con un solo comando:

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

A continuación, abre un navegador web e ingresa la IP del servidor para visitar la página web frontend:

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Nota:** Reemplaza ```<server IP>``` con tu propia dirección IP.

Si ves un ```ConnectionError``` en el frontend, espera un par de segundos más y recarga la página. El contenedor backend puede tomar algo de tiempo para finalizar la configuración de la base de datos.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

Si esperas un par de segundos más y recargas la página pero sigue siendo un ```ConnectionError``` en el frontend, por favor asegúrate de que los puertos: `5432` y `80` no estén siendo ocupados o escuchados.

Si visitas la página web frontend exitosamente la primera vez pero falla la siguiente, la mejor manera de resolverlo actualmente es reinstalar docker.

- #### **Paso4.** Apuntar Jetson Nano a tu servidor local

Regresa a la terminal de tu Jetson Nano, y luego ejecuta el contenedor maskcam con el comando a continuación:

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**Nota:** Reemplaza ```<server IP>``` y ```<your-jetson-ip>``` con tu propio servidor y la dirección IP de Jetson Nano.

Después de eso, puedes elegir tu dispositivo en la página web como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

Finalmente, puedes ver los datos recopilados por Jetson Nano transmitiéndose al Servidor.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

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