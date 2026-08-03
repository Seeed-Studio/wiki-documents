---
title: Detecção de Pessoas com IA e Notificação via Meshtastic
description: Este wiki demonstra um sistema de detecção de pessoas baseado em IA usando uma câmera com IA e rede Meshtastic com XIAO ESP32S3 & Wio SX1262 para transmitir alertas em tempo real.
keywords:
  - Detecção de Pessoas com IA
  - XIAO ESP32S3
  - ESP-Mesh
  - Edge AI
  - Disparo por GPIO
slug: /ai_human_detection_meshtastic_broadcast_bak
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
  date: 2026-01-28
  author: John Xiang
createdAt: '2026-01-28'
updatedAt: '2026-02-11'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/ai_human_detection_meshtastic_broadcast_bak/
---

## Introdução
Esta demonstração apresenta uma solução de monitoramento remoto com Edge AI que integra a reCamera a uma rede mesh LoRa Meshtastic. Aproveitando os recursos de inferência embarcada da reCamera, um modelo local YOLO11n identifica pessoas e aciona diretamente um sinal GPIO. Esse sinal físico faz com que um nó XIAO ESP32S3 transmita um alerta "Human detected" pela rede Meshtastic. A arquitetura permite integrar múltiplas reCameras e nós Meshtastic para uma cobertura ampla. 

## Preparação de Hardware
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>Wio Tracker L1(Pro)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Configurar a Demonstração
Para realizar esta demonstração, precisamos configurar a reCamera e dois nós Mesh de forma diferente. Primeiro, execute um programa em C++ na reCamera, que acionará um sinal GPIO quando uma pessoa for detectada. Em seguida, precisamos gravar o firmware Meshtastic no primeiro nó Mesh, permitindo que esse nó monitore o sinal GPIO e envie uma mensagem para a rede Meshtastic quando o sinal for acionado. A mensagem transmitida será recebida pelo segundo nó Mesh; por fim, conectando um telefone ao segundo nó Mesh via Bluetooth, a mensagem enviada poderá ser visualizada no telefone.

### Configuração da reCamera
:::warning
Certifique-se de que a placa base da reCamera que você possui é a versão PoE, pois somente a versão PoE da reCamera possui interfaces GPIO. Sobre as diferenças entre a versão padrão e a versão PoE da reCamera, consulte [reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/pt-br/recamera_2002_series_hardware_and_specs/) e [reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/pt-br/reCamera_hq_poe_hardware_and_specs/).

Se você adquiriu a versão PoE da reCamera - [reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html), pode usá-la diretamente para reproduzir esta demonstração.

Se você adquiriu a versão padrão da reCamera - [reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html), será necessário adquirir uma placa base PoE adicional - [reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html) e instalá-la na reCamera, substituindo a placa base padrão.
:::

O objetivo da configuração a seguir é implantar um aplicativo de **detecção de objetos** na **reCamera**. Ao interromper os serviços padrão do Node-RED, permitimos que a reCamera execute um programa dedicado em C++ chamado `model_detector`. 

Esta configuração utiliza um modelo **YOLO11n** (treinado no conjunto de dados COCO) para realizar computação em tempo real na borda. 

O objetivo final é permitir que a reCamera detecte autonomamente objetos específicos (pessoas, neste caso). Quando uma detecção ocorrer, o sistema acionará um sinal de hardware puxando o **GPIO 490** para nível **High**. Esse disparo de hardware serve como ponte para se comunicar com o nó Meshtastic **XIAO ESP32S3 + Wio SX1262**.

#### Expor os Pinos GPIO
Para expor os pinos GPIO na placa base PoE da reCamera, precisamos desparafusar os parafusos da placa base e remover a tampa. Em seguida, você encontrará um conector na placa base, que possui 6 pinos. Usaremos o GPIO 490 e o GND desse conector. Para mais informações sobre as interfaces na placa base, como esse conector de 6 pinos, consulte [reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/pt-br/recamera_hq_poe_hardware/#b3_poe).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

Em seguida, no pacote da reCamera, retire o cabo de extensão ilustrado abaixo. Este cabo é um **MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White wire**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

Conecte o cabo à placa base. A conexão final deve se parecer com a imagem mostrada abaixo. O GPIO 490 está conectado ao fio verde, enquanto o GND está conectado ao fio preto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### Fazer Login na reCamera
Primeiro, atualize sua reCamera para a versão mais recente 0.2.2 seguindo este tutorial: [reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control/). Se sua versão já for 0.2.2, você pode pular esta etapa.

:::note
Como os recursos da câmera da reCamera são exclusivos, os serviços de IA e Node-RED em execução por padrão ocuparão o driver de imagem subjacente por um longo tempo. Se o programa de detecção de objetos em C++ for iniciado diretamente enquanto esses serviços estiverem em execução, isso causará conflitos entre múltiplos processos, fazendo com que o programa em C++ não consiga iniciar devido à impossibilidade de acessar a câmera normalmente. 

Portanto, precisamos acessar a reCamera via SSH para garantir que o dispositivo ainda possa ser controlado remotamente após o fechamento dos serviços Web; em seguida, executar comandos no terminal da reCamera via SSH para interromper processos em segundo plano como o Node-RED, liberando assim o bloqueio da câmera e desobstruindo o caminho de acesso ao hardware necessário para o programa model_detector.
:::

#### Estabelecer Conexão SSH
Use ferramentas como **MobaXTerm** para fazer login na **reCamera** via SSH. IP padrão: geralmente `192.168.42.1`
* Após o login, é recomendável mudar para o diretório `/userdata/`, pois ele é normalmente usado para armazenar dados e modelos do usuário.

#### Parar Serviços Relacionados ao Node-RED
Como o serviço Node-RED em execução por padrão na reCamera consome muitos recursos do sistema, você deve executar os três comandos a seguir para pará-lo antes de rodar o Demo em C++:

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1n.jpg" /></div>

#### Enviar Modelo e Firmware

Use a **função de transferência de arquivos do MobaXTerm** (o ícone de upload no painel de arquivos à esquerda) para enviar os seguintes arquivos para o diretório `/home/recamera/`.

**Firmware compilado**: por exemplo, `model_detector`
**Modelo quantizado**: por exemplo, `yolo11n_cv181x_int8.cvimodel`

O `model_detector` aqui é um arquivo executável. Ele é gerado configurando o **SDK da reCamera** e **cross-compilando** o código-fonte em C++. A lógica deste programa é a seguinte: ele usa o `yolo.cvimodel` enviado para detectar se existe uma pessoa no quadro. Se uma pessoa for detectada, o **GPIO 490** na placa base PoE da reCamera será definido como **High**; caso contrário, permanecerá em **Low**.

Como configurar o ambiente de cross-compilação pode ser complexo, fornecemos o executável pré-compilado para sua conveniência. Você pode simplesmente baixá-lo e enviá-lo diretamente para sua reCamera. [Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

Quanto ao arquivo de modelo, ele é um modelo de detecção YOLO11n treinado com base no **conjunto de dados COCO**. Ele contém 80 classes e pode reconhecer objetos comuns do dia a dia, como pessoas e veículos. Da mesma forma, fornecemos um link para download, de modo que você não precise treinar ou converter o modelo por conta própria. Após o download, você pode enviá-lo diretamente para sua reCamera. [reCamera Yolo Models](https://wiki.seeedstudio.com/pt-br/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2n.jpg" /></div>

:::note
Modificar o código-fonte e realizar a cross-compilação é recomendado para quem tem experiência em sistemas embarcados. Se você tiver interesse em explorar isso mais a fundo, consulte o documento.
:::

#### Conceder Permissões e Executar
No terminal, primeiro acesse a pasta onde você enviou o firmware compilado e o modelo quantizado. Em seguida, adicione permissões de execução ao firmware e inicie o programa de detecção.
```bash
chmod +x model_detector
```

Para demonstração visual, o programa model_detector possui uma função integrada de streaming de vídeo via UDP. Desde que a reCamera e o seu PC estejam na mesma rede local (LAN), você pode obter uma visualização em tempo real executando o programa na reCamera enquanto executa o script udp_receiver.py no seu PC.

:::note
Este stream UDP é estritamente para monitoramento local e fins de demonstração (um recurso "extra"). Devido às limitações físicas de largura de banda da tecnologia LoRa, streaming de vídeo não é suportado nem possível pela rede Meshtastic. Os dados realmente transmitidos pela rede Mesh se limitam a alertas de texto leves, como "Human detected."
:::

Execute o seguinte comando para executar o programa model_detector usando `0.5` (50%) como exemplo de limite de confiança:

```bash
sudo ./model_detector [model_name] [confidence_threshold] [PC_IP_address] [udp_port]
```
onde:
* `[model_name]`: O nome do arquivo de modelo quantizado. Neste exemplo, é `yolo11n_cv181x_int8.cvimodel`.
* `[confidence_threshold]`: O limite de confiança entre 0.0 e 1.0 para detecção de objetos. Um valor mais alto significa menos detecções, porém com maior precisão. Neste exemplo, é `0.5`.
* `[PC_IP_address]`: O endereço IP do seu PC onde o script `udp_receiver.py` será executado. Neste exemplo, é `10.0.0.228`. **Lembre-se sempre de usar o endereço IP do seu PC, não o meu.**
* `[udp_port]`: O número da porta UDP usada para transmissão de vídeo. Neste exemplo, é `5000`.

Aqui está o comando de exemplo completo:
```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5 10.0.0.228 5000
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1n.jpg" /></div>

Agora, vamos configurar o script `udp_receiver.py` no seu PC. Certifique-se de que o seu PC tenha Python instalado, bem como as bibliotecas **OpenCV** e **NumPy**. Em seguida, baixe o script `udp_receiver.py` a partir do link [udp_receiver.py](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/udp_receiver.py) e execute-o no seu PC. Neste exemplo, ele é executado no Windows Powershell:

```bash
python .\udp_receiver.py --port [udp_port] --scale [scale_factor]
```
onde:
* `[udp_port]`: O número da porta UDP usada para transmissão de vídeo a partir da reCamera. Neste exemplo, é `5000`.
* `[scale_factor]`: O fator de escala para redimensionar o quadro de vídeo. Neste exemplo, é `1.5`.

Aqui está o comando de exemplo completo:
```bash
python .\udp_receiver.py --port 5000 --scale 1.5
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_3n.jpg" /></div>

Por fim, você verá informações de classes detectadas em tempo real (por exemplo, `Class 0`) e suas coordenadas no terminal.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2n.jpg" /></div>

Enquanto isso, um fluxo de vídeo ao vivo será exibido no seu PC:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_4n.jpg" /></div>

### Configuração do XIAO ESP32S3 + Wio-SX1262 (Nó Meshtastic)
Agora, vamos configurar o **primeiro nó Mesh**. Este nó é responsável por receber a saída de IO da reCamera e transmitir uma mensagem de texto: **"Human detected"**.

#### Gravação de firmware
Um firmware Mesh específico deve ser gravado no dispositivo. Devido ao mecanismo exclusivo de gerenciamento de canais das redes Mesh, as informações de saída pelo módulo **DetectionSensor** para o **Channel 0** no firmware padrão são normalmente descartadas. Esse design é intencional para evitar que dados de detecção de alta frequência congestionem os canais da rede Mesh. Siga as etapas abaixo:

:::note
Antes de gravar o firmware, remova temporariamente a **placa de expansão Wio SX1262** do XIAO. Embora a placa de expansão não interfira diretamente no processo de gravação, ela bloqueia fisicamente o botão **BOOT** no XIAO ESP32S3.
:::

1.  Primeiro, baixe o firmware Mesh pré-compilado [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin).
2.  Conecte o XIAO ESP32S3 ao seu computador via cabo USB e **entre no modo Bootloader**. Você pode consultar este guia [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/#bootloader-mode)
3.  Use uma ferramenta de gravação baseada na web [Meshtastic Web Flasher](https://flasher.meshtastic.org/), selecione o dispositivo **Seeed XIAO esp32s3**, depois selecione o firmware que você acabou de baixar e, por fim, clique no botão **Flash** para gravar o firmware no XIAO ESP32S3.
Um tutorial em vídeo está disponível, mas lembre-se de gravar o firmware baixado em vez do firmware oficial Meshtastic [Flash Firmware Video](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware).
4.  Quando a gravação estiver concluída e nenhum erro for relatado, desconecte o XIAO ESP32S3 para desligá-lo. Reinstale a placa de expansão Wio SX1262 e reconecte o cabo USB ao seu computador. O dispositivo agora será inicializado com o novo firmware.

#### Configurar o nó Mesh
Existem duas maneiras de configurar nós Mesh. Primeiro, conecte o dispositivo ao seu computador com um cabo USB e então você pode: 1: Usar outra ferramenta web Mesh: [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) para acessar o nó Mesh via serial 2: Baixar o aplicativo móvel Meshtastic para acessar o nó Mesh via Bluetooth no seu telefone. Aqui, demonstramos o uso do [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) em um PC para configurar o esp32s3 e o Wio Tracker.

:::note
A interface do aplicativo Mesh no iOS e Android, bem como a interface da ferramenta Meshtastic Web Client, podem ser diferentes, mas configurações específicas, como configurar bandas de frequência LoRa, podem ser encontradas em suas respectivas opções de configuração. Portanto, se você não tiver iOS, não há necessidade de se preocupar; aplicativos em outras plataformas certamente terão as opções de configuração correspondentes.
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) e [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) são duas ferramentas web oficiais fornecidas pelo Meshtastic. Elas são usadas para configurar nós Mesh e gravar firmware Mesh, respectivamente. Por favor, não as confunda.
:::

1.Certifique-se de que o seu nó Mesh XIAO esp32s3 esteja conectado ao computador via cabo USB. Abra o [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) e você verá a página inicial. Agora clique em "+ New Connection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.Clique em "Serial", depois clique em "New Device" e selecione a porta do seu nó Mesh.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.Entre na página de configuração do dispositivo; aqui, o nome do meu dispositivo é "Meshtastic ff28". 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.Clique em 'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.Defina 'Region' e 'Modem Preset' como 'US' e 'Short Turbo', respectivamente:
:::note
Na verdade, não há restrições rígidas nas configurações de Region e Modem Preset, mas você deve garantir que as configurações de Region e Modem Preset dos dois dispositivos nó Mesh que você possui sejam consistentes. Neste documento, usamos 'US' e 'Short Turbo' como exemplos.
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.Agora, vamos para 'Module Config' e selecionar 'DetectionSensor'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.Ative este módulo e, em seguida, defina o intervalo de transmissão para 15 segundos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name é definido como 'Human', Monitor Pin é definido como '3', e Detection Triggered Type é definido como 'LOGIC_HIGH'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.Agora, vamos para 'Channel Config' e selecionar 'Ch1'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.Defina 'Role' como 'SECONDARY' e selecione '128 bit' para o formato da Pre-Shared Key. Em seguida, clique em 'Generate' para criar uma Pre-Shared Key aleatória de 128 bits. **Lembre-se desta chave e salve-a em um arquivo de texto para uso posterior.** Além disso, defina o Name como 'reCamera'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.Por fim, clique em 'Save' para salvar a configuração. Aguarde o dispositivo salvar a configuração e, em seguida, reinicie.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Configuração do Wio Tracker L1 (Nó Meshtastic)
A configuração para o Wio Tracker é semelhante à acima; ainda usamos o [Meshtastic Web Flasher](https://flasher.meshtastic.org/), selecionamos 'Wio Tracker L1' e gravamos o **Official Meshtastic Firmware** em vez do firmware personalizado que você baixou acima. Consulte o [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

Da mesma forma que acima, definimos Region e Modem Preset como 'US' e 'Short Turbo' para o Wio Tracker L1. Em seguida, habilite o Channel1 e defina a Pre-Shared Key para a chave de 128 bits que você gerou acima.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### Montagem
Da mesma forma que acima, conectamos o GPIO490 (fio verde) na reCamera ao pino D2 e GND ao pino GND no XIAO esp32s3. Em seguida, o sistema será executado.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

Quando a conexão for estabelecida, você ouvirá um som do Wio Tracker L1, e o visor do Wio Tracker L1 exibirá o texto 'Human detected'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Se você precisar de orientação sobre metas específicas de personalização ou quiser estender ainda mais o fluxo de trabalho, sinta-se à vontade para entrar em contato. Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>