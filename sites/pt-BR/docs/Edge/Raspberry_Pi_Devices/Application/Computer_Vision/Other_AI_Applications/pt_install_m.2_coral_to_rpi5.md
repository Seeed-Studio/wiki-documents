---
description: Este wiki demonstra como instalar o M.2 coral no rpi5 e testar o coral.
title: Instalar M.2 Coral no Raspberry Pi 5
keywords:
  - Edge
  - rpi5
  - M.2 coral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_m2_coral_to_rpi5
last_update:
  date: 07/19/2024
  author: Jiahao
no_comments: false
createdAt: '2024-07-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/install_m2_coral_to_rpi5/
---

# Instalar M.2 Coral no Raspberry Pi 5

## Introdução

O [Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) com Dual Edge TPU é um módulo M.2 que traz dois coprocessadores Edge TPU para sistemas e produtos existentes com um slot M.2 E-key disponível.

O [Raspberry Pi Fifth Flagship Development Computer](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) é montado com um poderoso processador Arm quad-core de 64 bits a 2,4GHz e uma GPU VideoCore VII de 800MHz para gráficos impressionantes. Ele oferece suporte avançado para câmera, conectividade versátil e periféricos aprimorados, perfeito para tarefas de multimídia, jogos e industriais.

Neste wiki, mostraremos como instalar o Coral M.2 Accelerator no Raspberry Pi 5 e, por fim, testaremos o Coral M.2 Accelerator.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Instalar Python3.8

O software Coral oferece suporte apenas a Python3.6-Python3.9, mas a versão mais recente do Raspberry Pi OS Python é Python3.11. Portanto, precisamos instalar o Python3.8.

### Passo 1: Atualizar o sistema

Abra um terminal e execute os seguintes comandos para atualizar o sistema:

```
sudo apt update
sudo apt full-upgrade
```

### Passo 2: Instalar dependências

Abra um terminal e execute os seguintes comandos para instalar os pacotes necessários:

```
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

### Passo 3: Fazer o download do Python3.8

Abra um terminal e execute os seguintes comandos para fazer o download do Python3.8:

```
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
```

### Passo 4: Instalar o Python3.8

Abra um terminal e execute os seguintes comandos para instalar o Python3.8:

```
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
cd ..
```

### Passo 5: Verificar o Python3.8

Abra um terminal e execute os seguintes comandos para verificar o Python3.8:

```
python3.8 -V
```

O resultado deve ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/Python3.8.png" alt="pir" width={1000} height="auto"/></p>

### Passo 6: Criar um ambiente virtual com Python3.8

```
python3.8 -m venv coral_venv
```

## Configurar Definições de Hardware

Abra um terminal e execute os seguintes comandos para abrir ```config.txt```:

```
sudo nano /boot/firmware/config.txt
```

Em seguida, adicione o seguinte texto a ```config.txt```:

```
[all]
# Enable the PCIe External connector.
dtparam=pciex1
kernel=kernel8.img
# Enable Pineboards Hat Ai
dtoverlay=pineboards-hat-ai
```

Salve e feche o arquivo pressionando CTRL+X e depois Y para confirmar. Em seguida, reinicie o sistema.

```
sudo reboot
```

Verifique o kernel:

Abra um terminal e execute os seguintes comandos para verificar o kernel:

:::note
Certifique-se de que sua versão do kernel seja 6.6.30 ou superior
:::

```
uname -a
```

## Instalar o Driver PCIe e o Edge TPU Runtime

### Passo 1: Entrar no ambiente virtual

```
source coral_venv/bin/activate
```

### Passo 2: Instalar o Edge TPU Runtime

Adicione o repositório de pacotes Google Coral Edge TPU

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
```

Instale os pacotes necessários e o Edge TPU Runtime

```
sudo apt-get install cmake libedgetpu1-std devscripts debhelper dkms dh-dkms
```

### Passo 3: Instalar o driver PCIe

```
git clone https://github.com/google/gasket-driver.git
cd gasket-driver
sudo debuild -us -uc -tc -b
cd ..
sudo dpkg -i gasket-dkms_1.0-18_all.deb
```

## Configurar a regra udev Adicione uma regra udev para gerenciar as permissões do dispositivo

abra um terminal e execute os seguintes comandos para configurar a regra udev:

```
sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

sudo groupadd apex

sudo adduser $USER apex

sudo reboot

```

## Verificar o Edge TPU

```
lspci -nn | grep 089a
```

O resultado deve ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_driver.png" alt="pir" width={1000} height="auto"/></p>

```
ls /dev/apex_0
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_TPU.png" alt="pir" width={1000} height="auto"/></p>

## Instalar a biblioteca PyCoral e testar o Edge TPU

### Passo 1: Instalar a biblioteca PyCoral

```
source coral_venv/bin/activate
pip install --upgrade pip
python3 -m pip install --extra-index-url https://google-coral.github.io/py-repo/ pycoral~=2.0
```

### Passo 2: Testar o Edge TPU

Instale os recursos para o exemplo:

```
mkdir coral && cd coral
git clone https://github.com/google-coral/pycoral.git
cd pycoral
bash examples/install_requirements.sh classify_image.py
```

Teste o Edge TPU:

```
python3 examples/classify_image.py \
--model test_data/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels test_data/inat_bird_labels.txt \
--input test_data/parrot.jpg
```

O resultado deve ser:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/coral_result.png" alt="pir" width={1000} height="auto"/></p>

## Resultado

Instalamos com sucesso o acelerador M.2 Coral em um Raspberry Pi 5 e testamos o Edge TPU. Também executamos o modelo YOLOv8s no Coral M.2 Accelerator com quantização int8, usando um tamanho de entrada de 640x640 e um tamanho de lote de 1. O tempo de inferência é de aproximadamente 800-1000ms, o que se traduz em cerca de 1,1 quadros por segundo (FPS).

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/4c8UX06d9Tg" title="Raspberry Pi AI: YOLOv8s Object Detection with Int8 Format Using M.2 Coral Accelerator on RPi 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
