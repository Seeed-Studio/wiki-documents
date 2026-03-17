---
description: MaskCam
title: MaskCam
keywords:
  - Borda
  - Aplicação reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson-Nano-MaskCam
sku: 102110483, 102110484, 114110049, 102110637, 110061363, 110061401, 110061361, 110061404, B110061361, 110061481
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Jetson-Nano-MaskCam/
---

# Maskcam -  Monitoramento do Uso de Máscaras Faciais em Multidões baseado em Jetson Nano

## **Introdução**

Devido aos estragos da COVID - 19, em muitos locais públicos, frequentemente vemos a exigência de usar máscara. Normalmente há responsáveis no portão da área para observar se as pessoas estão usando máscaras. Talvez seja uma tarefa muito simples para os humanos, mas se a combinarmos com o Jetson Nano, captura de imagens e computação de borda com IA, será uma tarefa muito interessante e de grande valor social.

MaskCam foi desenvolvido pela Berkeley Design Technology, Inc. (BDTI) e Tryolabs S.A., com desenvolvimento financiado pela NVIDIA. MaskCam é oferecido sob a Licença MIT. Para mais informações sobre MaskCam, consulte o [relatório da BDTI](https://www.bdti.com/maskcam). Se tiver dúvidas, envie um e‑mail para a BDTI em maskcam@bdti.com.

Neste projeto, usaremos o [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) juntamente com outros acessórios. Ao mesmo tempo, você pode escolher a [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html) da Seeed, que tem o mesmo tamanho e design funcional da placa de apoio oficial da NVIDIA e, além disso, possui excelente estabilidade e versatilidade.

## **Preparação**

### **Requisitos de Hardware**

- [NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)(opcional)

- Monitor HDMI de 7 polegadas e cabo HDMI

- Docking Station USB

- Mouse e teclado

- Fonte de alimentação 5V 4A

- Câmera USB

- Cabo Ethernet

- PC com Windows11 (ou Windows10/Ubuntu18.04/ OSX Big Sur)

### **Requisitos de Software**

- docker

- docker-compose

- Software de Vídeo (para exibir streams RTSP, como VLC/QuickTime/PotPlayer)

## **Começando**

### **Configuração do Jetson Nano**

- #### **Passo 1.** Baixe o contêiner MaskCam a partir do Docker Hub

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **Passo 2.** Encontre o endereço IP do Jetson Nano com o comando ```ifconfig```

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **Passo 3.** Inicie o MaskCam com docker

Lembre-se de conectar seu Jetson Nano a uma câmera USB e, em seguida, digite o comando abaixo no terminal.

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**Nota:** Substitua ```<your-jetson-ip>``` pelo endereço IP do seu próprio Jetson Nano neste comando.

Se você não quiser usar o dispositivo de entrada padrão, também há dois comandos diferentes para escolher e substituir o comando acima.

Use o dispositivo de câmera /dev/video1:

```shell
#Use the /dev/video1 camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

Use o dispositivo de câmera CSI:

```shell
#Use the CSI camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **Passo 4.** Veja o stream de vídeo ao vivo através do ```MASKCAM_DEVICE_ADDRESS```

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**Nota:**  ```aaa.bbb.ccc.ddd``` é o endereço que você forneceu anteriormente em ```MASKCAM_DEVICE_ADDRESS```.

Você pode copiar e colar essa URL no seu visualizador de streaming RSTP em outro computador. No stream de vídeo, se você não estiver usando máscara, verá uma moldura vermelha em seu rosto. Caso contrário, verá uma moldura verde.

### **Configuração do Servidor MQTT**

 Além da função básica, esta biblioteca também inclui a função do [servidor](https://github.com/bdtinc/maskcam/blob/main/server) remoto, o que significa que seu PC pode receber estatísticas do dispositivo, armazená-las em um banco de dados e ter um frontend GUI baseado na web para exibi-las.

Neste artigo, todas as demonstrações sobre o servidor são baseadas em host com sistema Windows11; você também pode encontrar as instruções usando sistema Linux por meio deste artigo: [Maskcam](https://github.com/bdtinc/maskcam).

- #### **Passo1.** Instale Docker e Docker-compose no seu PC

Baixe o pacote de instalação do [Docker](https://www.docker.com/) a partir do site oficial: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

Nota: Se aparecer uma mensagem informando ```WLS 2 installization is incomplete.``` durante o processo de instalação, clique no link na caixa de aviso, faça o download e instale o pacote de atualização do kernel Linux.
Depois você poderá executar ```docker```.

- #### **Passo2.** Configure o diretório de build

Execute ```Windows PowerShell``` como administrador

Vá para a raiz da unidade que você usará, por exemplo:

```shell
cd e:\
```

Baixe o repositório MaskCam :

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

Descompacte-o no caminho ```e:\maskcam``` :

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

Vá para a pasta do servidor maskcam, que possui quatro contêineres: o broker Mosquitto, a API backend, o banco de dados e o frontend Streamlit.

```shell
cd maskcam\maskcam-main\server
```

Em seguida, crie os arquivos ```.env``` copiando os modelos padrão:

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Abra o ```database.env``` :

```shell
notepad database.env
```

Substitua os campos ```<DATABASE_USER>```, ```<DATABASE_PASSWORD>``` e ```<DATABASE_NAME>``` por seus próprios valores

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **Passo3.** Compile e execute o servidor local

Após editar o arquivo de ambiente do banco de dados, você está pronto para compilar todos os contêineres e executá-los com um único comando:

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

Em seguida, abra um navegador da web e insira o IP do servidor para acessar a página frontend:

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Note:** Replace ```<server IP>``` with your own IP address.

If you see a ```ConnectionError``` in the frontend, wait a couple more seconds and reload the page. The backend container can take some time to finish the database setup.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

If you wait a couple more seconds and reload the page but it is still a ```ConnectionError``` in the frontend, please make sure the ports: `5432` and `80` are not being occupied or listened up.

If you visit the frontend webpage successfully the first time but failed the next, the best way to solve it currently is to re-install docker.

- #### **Step4.** Point Jetson Nano at your local server

Return to your Jetson Nano's terminal, and then run the maskcam container with the command below:

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**Note:** Replace ```<server IP>``` and ```<your-jetson-ip>``` with your own server and Jetson Nano's IP address.

After that, you can choose your device on webpage as shown below:

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

Finally, you can see the data collected by Jetson Nano transmitting to the Server.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
