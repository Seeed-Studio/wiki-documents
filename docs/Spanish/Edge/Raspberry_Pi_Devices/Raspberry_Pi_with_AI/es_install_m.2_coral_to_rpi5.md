---
description: Esta wiki demuestra cómo instalar el M.2 Coral en Raspberry Pi 5 y probar el Coral.
title: Instalar M.2 Coral en Raspberry Pi 5
keywords:
  - Edge
  - rpi5
  - M.2 coral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/install_m2_coral_to_rpi5
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Instalar M.2 Coral en Raspberry Pi 5
## Introducción

El [Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) con Dual Edge TPU es un módulo M.2 que agrega dos coprocesadores Edge TPU a sistemas y productos existentes con un slot M.2 E-key disponible.

El [Raspberry Pi 5 Flagship Development Computer](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) está ensamblado con un potente procesador Arm de 64 bits a 2.4 GHz con cuatro núcleos y una GPU VideoCore VII a 800 MHz para gráficos impresionantes. Ofrece soporte avanzado para cámaras, conectividad versátil y periféricos mejorados, perfecto para tareas multimedia, de juegos e industriales.

Esta wiki te mostrará cómo instalar el Coral M.2 Accelerator en Raspberry Pi 5 y finalmente probaremos el Coral M.2 Accelerator.

## Preparar Hardware

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi 5 8GB</th>
		<th>Raspberry Pi M.2 HAT+</th>
		<th>Coral M.2 Accelerator B+M key</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Instalar Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Instalar Python3.8

El software Coral solo admite Python3.6 a Python3.9, pero la última versión de Raspberry Pi OS tiene Python3.11. Por lo tanto, necesitamos instalar Python3.8.

### Paso 1: Actualizar el sistema
Abre una terminal y ejecuta los siguientes comandos para actualizar el sistema:
```
sudo apt update
sudo apt full-upgrade
```

### Paso 2: Instalar los requisitos

Abre una terminal y ejecuta los siguientes comandos para instalar los paquetes requeridos:
```
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

### Paso 3: Descargar Python3.8

Abre una terminal y ejecuta los siguientes comandos para descargar Python3.8:
```
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
```

### Paso 4: Instalar Python3.8

Abre una terminal y ejecuta los siguientes comandos para instalar Python3.8:

```
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
cd ..
```

### Paso 5: Verificar Python3.8

Abre una terminal y ejecuta los siguientes comandos para verificar Python3.8:

```
python3.8 -V
```

El resultado debería ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/Python3.8.png" alt="pir" width={1000} height="auto"/></p>

### Paso 6: Crear un entorno virtual con Python3.8

```
python3.8 -m venv coral_venv
```

## Configurar los ajustes de hardware

Abre una terminal y ejecuta los siguientes comandos para abrir `config.txt`:

```
sudo nano /boot/firmware/config.txt
```

Luego agrega el siguiente texto a `config.txt`:

```
[all]
# Habilitar el conector PCIe Externo.
dtparam=pciex1
kernel=kernel8.img
# Habilitar Pineboards Hat Ai
dtoverlay=pineboards-hat-ai
```
Guarda y cierra el archivo presionando CTRL+X, luego Y para confirmar. Y después reinicia el sistema.

```
sudo reboot
```

Verifica el kernel:

Abre una terminal y ejecuta los siguientes comandos para verificar el kernel:

:::note
Asegúrate de que tu versión del kernel sea 6.6.30 o superior
:::

```
uname -a
```

## Instalar el controlador PCIe y Edge TPU Runtime

### Paso 1: Entrar al entorno virtual

```
source coral_venv/bin/activate
```

### Paso 2: Instalar Edge TPU Runtime

Agrega el repositorio del paquete Google Coral Edge TPU

````
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
````

Instala los paquetes necesarios y Edge TPU Runtime

```
sudo apt-get install cmake libedgetpu1-std devscripts debhelper dkms dh-dkms
```

### Paso 3: Instalar el controlador PCIe

```
git clone https://github.com/google/gasket-driver.git
cd gasket-driver
sudo debuild -us -uc -tc -b
cd ..
sudo dpkg -i gasket-dkms_1.0-18_all.deb
```

## Configurar la regla udev

Añadir una regla udev para gestionar los permisos del dispositivo:

Abre una terminal y ejecuta los siguientes comandos para configurar la regla udev:
```
sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

sudo groupadd apex

sudo adduser $USER apex

sudo reboot
```

## Verificar Edge TPU

```
lspci -nn | grep 089a
```

El resultado debería ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_driver.png" alt="pir" width={1000} height="auto"/></p>

```
ls /dev/apex_0
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_TPU.png" alt="pir" width={1000} height="auto"/></p>

## Instalar la biblioteca PyCoral y probar el Edge TPU

### Paso 1: Instalar la biblioteca PyCoral
```
source coral_venv/bin/activate
pip install --upgrade pip
python3 -m pip install --extra-index-url https://google-coral.github.io/py-repo/ pycoral~=2.0
```

### Paso 2: Probar el Edge TPU

Instala los recursos para el ejemplo:
```
mkdir coral && cd coral
git clone https://github.com/google-coral/pycoral.git
cd pycoral
bash examples/install_requirements.sh classify_image.py
```

Prueba el Edge TPU:

```
python3 examples/classify_image.py \
--model test_data/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels test_data/inat_bird_labels.txt \
--input test_data/parrot.jpg
```

El resultado debería ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/coral_result.png" alt="pir" width={1000} height="auto"/></p>

## Resultado

Hemos instalado correctamente el acelerador M.2 Coral en una Raspberry Pi 5 y probado el Edge TPU. También ejecutamos el modelo YOLOv8s en el Coral M.2 Accelerator con cuantización int8, utilizando un tamaño de entrada de 640x640 y un tamaño de lote de 1. El tiempo de inferencia es aproximadamente de 800-1000 ms, lo que se traduce en alrededor de 1.1 cuadros por segundo (FPS).

<iframe width="800" height="400" src="https://www.youtube.com/embed/4c8UX06d9Tg" title="Raspberry Pi AI: Detección de objetos YOLOv8s con formato Int8 utilizando el acelerador M.2 Coral en RPi 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte el soporte necesario para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
