---
description: Integração dos módulos de câmera reTerminal e Pi
title: Módulos de câmera reTerminal e Pi
keywords:
  - Edge
  - reTerminal
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-piCam/
---
# Módulos de câmera reTerminal e Pi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

A Raspberry Pi Camera, comumente chamada de PiCam, é um módulo de câmera projetado especificamente para os computadores de placa única Raspberry Pi. Ela oferece uma solução compacta e conveniente para capturar imagens e gravar vídeos diretamente do seu dispositivo Raspberry Pi.

Aqui estão as especificações de cada versão da PiCam:

**PiCam v1 (Camera Module v1.3):**

- Sensor: OmniVision OV5647
- Resolução: 5 megapixels
- Modos de vídeo: 1080p30, 720p60, 640x480p60/90

**PiCam v2 (Camera Module v2):**

- Sensor: Sony IMX219
- Resolução: 8 megapixels (3280 x 2464 pixels)
- Modos de vídeo: 1080p30, 720p60, 640x480p90

**PiCam v3 (Camera Module 3):**

- Sensor: Sony IMX708
- Resolução: 12 megapixels (4056 x 3040 pixels)
- Modos de vídeo: 1080p30, 720p60, 640x480p90

| Raspberry Pi Camera Module V1|Raspberry Pi Camera Module V2| Raspberry Pi Camera Module 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|
|Raspberry Pi Camera Module 3 Wide NoIR | Raspberry Pi Camera Module 3 NoIR | Raspberry Pi Camera Module 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

Todas as versões da PiCam se conectam ao Raspberry Pi por meio da interface MIPI CSI-2, fornecendo uma conexão direta e de alta velocidade para transmitir dados de imagem e vídeo.

A PiCam oferece uma variedade de recursos e capacidades que a tornam adequada para diversas aplicações, **incluindo fotografia, videografia, projetos de visão computacional, vigilância e muito mais**. Seu formato compacto e a fácil integração com o Raspberry Pi a tornam uma escolha popular entre entusiastas, makers e profissionais.

Observe que as especificações mencionadas acima são para os módulos PiCam padrão, e pode haver variações ou módulos de câmera alternativos disponíveis de fabricantes terceirizados.

Quando se trata de instalar a PiCam, você tem duas opções. A primeira opção é usar imagens pré-compiladas fornecidas pela Seeed Studio, que podem ser encontradas em nossa página wiki. Essas imagens pré-compiladas são especificamente configuradas para a PiCam, garantindo compatibilidade e facilidade de uso. Porém, observe que essas imagens funcionam apenas com a PiCam v1 (sensor OmniVision OV5647).

Como alternativa, você pode optar por instalar a versão mais recente do Raspberry Pi OS a partir do site oficial. Ao fazer isso, você terá acesso aos recursos e melhorias mais recentes. A Seeed Studio recomenda esta abordagem e fornece instruções em nossa página wiki para instalar os drivers necessários e componentes relacionados, a fim de garantir o funcionamento adequado da PiCam na nova instalação do Raspberry Pi OS.

## Usando imagens Raspberry Pi pré‑compiladas

Para instalar a PiCam no reTerminal da Seeed Studio, você tem a opção de usar imagens pré-compiladas fornecidas pela Seeed Studio. Essas imagens estão disponíveis em nossa página wiki e são especificamente projetadas para o reTerminal.

:::note

É importante observar que as imagens pré-compiladas atualmente oferecem suporte **apenas à PiCam v1, que utiliza o sensor OmniVision OV5647**. Isso significa que você pode capturar imagens ou gravar vídeos usando o comando `raspistill`.

:::

- **Passo 1** Visite a página wiki da Seeed Studio dedicada ao reTerminal e navegue até a seção que fornece as imagens pré-compiladas. (você pode consultar este link para obter as imagens e conhecer o procedimento de instalação. Se você já fez isso, pule esta etapa. [This Link](https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal))
- **Passo 2** Desligue o reTerminal e conecte o módulo PiCam v1 à interface de câmera do reTerminal. Certifique-se de que ele esteja bem fixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3** Monte o reTerminal e inicialize o reTerminal. Vá até o ícone do reTerminal que você pode encontrar na área de trabalho, habilite a câmera e reinicie.

- **Passo 4** Abra um terminal ou faça SSH no reTerminal para acessar a interface de linha de comando.
- **Passo 5** Use o comando `raspistill` para capturar imagens. Você pode visitar este site para mais comandos. [Link](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)

```sh
raspistill -o Desktop/image.jpg
```

## Para um Raspberry Pi OS novo

Recomendamos a imagem nova Raspbian Bullseye 64-bit do site oficial do Raspberry Pi para o reTerminal da Seeed Studio:

- **Passo 1** A Seeed Studio fornece instruções detalhadas sobre como instalar os drivers após gravar um novo Raspberry Pi OS ou outro sistema operacional. Consulte a página wiki da Seeed Studio para o reTerminal e siga as instruções fornecidas na seção ["Flash new Raspberry Pi OS"](https://wiki.seeedstudio.com/pt-br/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) e na seção ["How to install reTerminal drivers"](https://wiki.seeedstudio.com/pt-br/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os). Se você já fez isso, pule esta etapa.

- **Passo 2** Desligue o reTerminal e conecte o módulo PiCam à interface de câmera do reTerminal. Certifique-se de que ele esteja bem fixado.

- **Passo 3** Abra um terminal ou faça SSH no seu reTerminal e execute o seguinte comando para editar o arquivo config.txt:

```sh
sudo nano /boot/config.txt 
```

- **Passo 4** Dentro do arquivo config.txt, você precisa fazer alterações específicas para habilitar a PiCam. Siga estes passos:

  - Localize a linha camera_auto_detect=1 e comente-a adicionando um "#" no início da linha. Esta etapa é necessária para desabilitar a detecção automática do módulo de câmera.

  - Adicione as seguintes linhas ao arquivo config.txt:
    - dtoverlay=ov5647,cam0
    - dtoverlay=camera-mux-2port

:::note

Se você estiver usando a PiCam v3 NoIR wide em vez da PiCam v1, use **dtoverlay=imx708,cam0** em vez de **dtoverlay=ov5647,cam0**. A configuração dtoverlay especifica o módulo de câmera que está sendo usado e o multiplexador de câmera.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **Passo 5** : Salve as alterações feitas no arquivo config.txt pressionando Ctrl + X, em seguida Y, e depois Enter para confirmar. Finalmente, reinicie o reTerminal para aplicar as modificações:

```sh
sudo reboot
```

 Após a reinicialização, a PiCam deve estar configurada e pronta para uso com o seu reTerminal da Seeed Studio. Agora você pode prosseguir com a captura de imagens ou gravação de vídeos usando o libcamera.

- **Passo 6** :Abra o terminal e escreva o seguinte código para testar se tudo está funcionando.

```sh
sudo libcamera-hello
```

libcamera-hello é o equivalente a um aplicativo "hello world" para a câmera. Ele inicia a câmera, exibe uma janela de pré-visualização e não faz mais nada.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

você pode consultar os seguintes documentos para mais detalhes sobre o [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html )
