---
description: Seeeduino Cloud e Grove IoT Starter Kit com tecnologia AWS
title: Seeeduino Cloud e Grove IoT Starter Kit com tecnologia AWS
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/
---
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_seeeduino_wiki_cover.JPG)

*Artigos principais: Comece aqui <a href="/pt-br/Grove_IoT_Starter_Kits_Powered_by_AWS" ><span><font size={"3"}> Grove IoT Starter Kits com tecnologia AWS </font></span></a> , <a href="/pt-br/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>*

**<a href="/pt-br/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>** é uma placa microcontroladora baseada no módulo Dragino WiFi IoT [HE](http://www.dragino.com/products/linux-module/item/87-he.html) e no ATmega32u4. **HE** é um módulo WiFi 150M, 2,4G, de alto desempenho e baixo custo, que possui um sistema Open Source OpenWrt interno. Seeeduino Cloud também é uma placa compatível com [Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun). Este kit inclui os sensores e atuadores mais frequentemente usados para transformar suas ideias em aplicações tangíveis com computação em nuvem AWS.

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B01669BB60)

## Recursos

--------

- Pronto para uso, plug and play, sem necessidade de protoboard ou soldagem.
- Totalmente compatível com os serviços e práticas da AWS.
- Tutoriais passo a passo para desenvolvedores e makers para prototipagem mais rápida.

## Lista de Peças

-------------------

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_seeeduino_cloud.JPG)

| Placa/Peça                                                                                                                                            | Qtde | Documentação                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------|
| [Placa de desenvolvimento Seeeduino Cloud](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html?cPath=6_7) | 1   | <a href="/pt-br/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>                               |
| [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                | 1   | [Leia Aqui](/pt-br/Base_Shield_V2/ "Base shield v2")                                 |
| [Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                         | 1   | [Leia Aqui](/pt-br/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")             |
| [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)                                                                  | 1   | [Leia Aqui](/pt-br/Grove-Relay "Grove - Relay")                                     |
| [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)                                                                   | 1   | [Leia Aqui](/pt-br/Grove-Buzzer "Grove - Buzzer")                                   |
| [Grove - Sound Sensor](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                                   | 1   | [Leia Aqui](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor")                       |
| [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)                                                    | 1   | [Leia Aqui](/pt-br/Grove-Touch_Sensor "Grove - Touch Sensor")                       |
| [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)                                      | 1   | [Leia Aqui](/pt-br/Grove-Rotary_Angle_Sensor "Grove - Rotary Angle Sensor")         |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                                       | 1   | [Leia Aqui](/pt-br/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2") |
| [Grove - LED](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                                                  | 1   | [Leia Aqui](/pt-br/Grove-Red_LED "Grove-Red_LED")                                         |
| [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                    | 1   | [Leia Aqui](/pt-br/Grove-Light_Sensor "Grove - Light Sensor")                       |
| [Grove – Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)                                                                | 1   | [Leia Aqui](/pt-br/Grove-Button "Grove - Button")                                   |
| DIP LED Azul-Azul                                                                                                                                     | 1   |                                                                               |
| DIP LED Verde-Verde                                                                                                                                   | 1   |                                                                               |
| DIP LED Vermelho-Vermelho                                                                                                                             | 1   |                                                                               |
| Mini Servo                                                                                                                                            | 1   |                                                                               |
| Cabo Micro USB - 48cm                                                                                                                                | 1   |                                                                               |

## Configure seu serviço AWS IoT

------------------------------

Nesta seção, mostraremos como configurar o serviço AWS IoT:

- Passo 1. Crie uma [Conta AWS](https://aws.amazon.com/free/?nc1=h_ls).

- Passo 2. Vá para [AWS IoT](https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/home).

- Passo 3. Depois de carregar o console do IoT, clique em “Get Started”.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Get%20started.png)

- Passo 4. Clique em “Manage” no menu do lado esquerdo. E clique em “Register a thing”.
- Passo 5. Digite um nome, o que você quiser, no tutorial original ele foi chamado de temperature, então clique em "create" (imagem "Register a thing").

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Register%20a%20thing.png)

- Passo 6. Clique na coisa que você criou.
- Passo 7. Clique em Security no menu à esquerda e clique em Create certificate.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Thing%20-%20Security.png)

- Passo 8. Serão exibidos três links de download que correspondem a diferentes arquivos de chave ou certificado. Baixe esses arquivos, vamos precisar deles mais tarde. Certifique-se também de baixar o root CA (acima do botão "Activate"). Clique em Activate e depois clique em Attach a policy e então em Create a policy.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20created.png)

- Passo 9. Dê o nome que quiser para sua política, nós a nomeamos de policy1. Para começar, você pode usar iot:* como Action e * como Resource ARN. Marque Allow e clique em create.
Para referência futura, o * para ações e resource ARN permite que você faça todas as ações em todos os dispositivos. A melhor prática para políticas de produção é torná-las mais específicas.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Create%20a%20policy.png)

- Passo 10. Agora que a política foi criada, clique em Certificates no lado esquerdo.
Clique no certificado que criamos anteriormente.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificates.png)

- Passo 11. Clique no botão Actions e escolha Attach policy no menu.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20Actions.png)

- Passo 12. Escolha a política que criamos anteriormente e clique em Attach.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Attach%20policy.png)

## Configure seu Seeeduino Cloud (Arduino Yun)

-----------------------------------------

### Primeiros passos com Seeeduino Cloud (Arduino Yun)

Se esta é a primeira vez que você usa o Seeeduino Cloud ou Arduino Yun, você pode clicar em <a href="/pt-br/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a> para começar. Antes de prosseguir para as etapas seguintes, certifique-se de que você tenha o **expect** instalado em seu computador e o [Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases) corretamente instalado.

### Baixar AWS-IoT-Arduino-Yún-SDK

Clique [aqui](https://s3.amazonaws.com/aws-iot-device-sdk-arduino-yun/AWS-IoT-Arduino-Yun-SDK-latest.zip) para baixar o pacote zip AWS-IoT-Arduino-Yún-SDK e extraí-lo para AWS-IoT-Arduino-Yun-SDK em seu computador.

### Instalação no Mac OS/Linux

Antes de prosseguir para as etapas seguintes, certifique-se de que você tenha instalado em seu computador e corretamente instalado o Arduino IDE.

#### Para instalar o Ubuntu

Para Ubuntu, simplesmente execute o seguinte comando. sudo apt-get install expect Para Mac OS X, o **expect** é instalado por padrão.

#### Para instalar o Arduino IDE

Para a instalação do Arduino IDE no Linux, visite [aqui](http://playground.arduino.cc/Linux/All).

#### Configurar a placa de desenvolvimento

- Passo 1. Configure a placa Arduino Yún e conecte-a ao WiFi. Obtenha seu endereço IP e senha. Se você não sabe como fazer isso, você pode seguir este <a href="/pt-br/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>.
- Passo 2. Certifique-se de que seu computador esteja conectado à mesma rede (faixa de endereço IP local).
- Passo 3. Baixe o arquivo CA do AWS IoT a partir [daqui](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). E salve-o como *root-CA.crt*.
- Passo 4. Coloque seu arquivo CA do AWS IoT, chave privada e certificado em AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs.
- Passo 5. Abra um terminal, faça cd para **AWS-IoT-Arduino-Yun-SDK**. Execute *chmod 755 AWSIoTArduinoYunInstallAll.sh* e execute-o como abaixo. Por padrão, para Seeeduino Cloud, seu nome de usuário será root e sua senha será seeeduino. Para a placa Arduino Yún, seu nome de usuário será root e sua senha será Arduino. Para o passo 5, pode levar de 15 a 20 minutos para o dispositivo baixar e instalar os pacotes necessários (distribute, python-OpenSSL, pip, paho-MQTT). Não feche o terminal antes que o script termine, caso contrário você terá que começar novamente a partir do passo 5. Certifique-se de que você esteja em seu terminal local antes de repetir o passo 5.

```
./AWSIoTArduinoYunInstallAll.sh <Board IP> <UserName> <Board Password>.
```

- Passo 6. Copie e cole a pasta **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** nas bibliotecas do Arduino que foram instaladas com a instalação do seu SDK do Arduino. No padrão do Mac OS, ela deve estar em **Documents/Arduino/libraries**.

- Passo 7. Reinicie o Arduino IDE se ele estava em execução durante a instalação. Você deverá conseguir ver os exemplos do AWS IoT na pasta Examples no seu IDE. Existem outros dois scripts: **AWSIoTArduinoYunScp.sh** e **AWSIoTArduinoYunSetupEnvironment.sh**, que são utilizados em **AWSIoTArduinoYunInstallAll.sh**. Você sempre pode usar **AWSIoTArduinoYunScp.sh** para enviar suas novas credenciais para sua placa. Quando você estiver no diretório **AWS-IoT-Arduino-Yun-SDK/**, o comando deve ser algo como isto:

```
./AWSIoTArduinoYunScp.sh <Board IP> <UserName> <Board Password> <File> <Destination>
```

### Instalação no Windows

Antes de prosseguir para os passos seguintes, certifique-se de que você tenha o Putty e o WinSCP instalados em seu PC. Se você preferir usar outras ferramentas para fazer SSH na sua placa Arduino Yún e transferir arquivos, você terá que ajustar os passos abaixo de acordo com suas ferramentas. O Putty pode ser baixado a partir [daqui](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). O WinSCP pode ser baixado a partir [daqui](http://winscp.net/eng/download.php). Configure a placa.

- Passo 1. Configure a placa Arduino Yún Cloud e conecte-a ao WiFi. Obtenha seu endereço IP e senha. Se você não sabe como fazer isso, siga este <a href="/pt-br/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>.

- Passo 2. Certifique-se de que seu PC esteja conectado à mesma rede (faixa de endereço IP local).

- Passo 3. Baixe o arquivo CA do AWS IoT a partir [daqui](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). E salve-o como root-CA.crt

- Passo 4. Coloque seu arquivo CA do AWS IoT que você salvou antes, chave privada e certificado na pasta **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_certs.png)

- Passo 5. Inicie o WinSCP e envie a pasta AWS-IoT-Python-Runtime/ para /root na placa.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_run_time_file.png)

- Passo 6. Use o Putty para fazer ssh no OpenWRT na sua placa e execute os seguintes comandos para instalar as bibliotecas necessárias. Pode levar de 15 a 20 minutos para o dispositivo baixar e instalar os pacotes necessários.

```
opkg update
opkg install distribute
opkg install python-openssl
easy_install pip
pip install AWSIoTPythonSDK==1.0.0
```

- Passo 7. Copie e cole a pasta AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library nas bibliotecas do Arduino que foram instaladas com a instalação do seu SDK do Arduino. No padrão do Windows, ela deve estar em **Documents/Arduino/libraries**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_AWS_library_file_to_arduino_library.png)

- Passo 8. Reinicie o Arduino IDE se ele estava em execução durante a instalação. Você deverá conseguir ver os exemplos do AWS IoT na pasta Examples no seu IDE.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_load_example.png)

### Conectar o Módulo Grove

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_hardware_connection.png)

Executar exemplos
------------

### Baixar o projeto de exemplo

- Passo 1. Por favor, baixe primeiro o projeto de exemplo a partir [daqui](https://github.com/Lee-Kevin/10.GroveWithAWSIot/).

- Passo 2. Descompacte os arquivos zip baixados para o seu computador e remova **-master** no nome do arquivo descompactado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_open_example_sketch.png)

### Modificar o arquivo de cabeçalho

- Passo 1. Abra o arquivo **aws_iot_config.h** e substitua o conteúdo na caixa vermelha como na figura abaixo pelo código de exemplo baseado em sua conta que você já salvou antes.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_replace_header_file.png)

- Passo 2. Dê um clique duplo em **GroveWithAWSIot.ino**, substitua o código marcado a seguir pelo arquivo de cabeçalho salvo há alguns minutos e então clique em upload.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_select_serial_port.png)

- Passo 3. Quando você vir as informações abaixo, significa que você já fez o download do código para o seu Seeeduino Cloud com sucesso.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_upload_complete.png)

### Ver Resultado

- Passo 1. Abra o monitor serial, você poderá ver as informações como abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_view_result_in_serial_monitor.png)

- Passo 2. Em seguida abra o site do AWS IoT, faça login em sua conta. E clique na thing que você criou há alguns minutos.

- Passo 3. Clique no botão **Update shadow**. Agora você pode ver que a temperatura foi enviada para o site.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_reopen_thing_and_update_shadow.png)

## Recursos

---------

- [Documentação do AWS IoT](http://aws.amazon.com/documentation/iot/)
- <a href="/pt-br/Seeeduino_Cloud" ><span><font size={"3"}>Página wiki do Seeeduino Cloud</font></span></a>
- [AWS IoT Arduino Yún SDK](https://github.com/aws/aws-iot-device-sdk-arduino-yun)

## Suporte Técnico e Discussão de Produto

   <br />
 Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
