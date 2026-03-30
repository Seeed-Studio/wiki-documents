---
description: Integração do Frigate com o reTerminal
title: Integração do Frigate com o reTerminal
keywords:
  - reTerminal
  - Primeiros passos
  - Frigate
  - Home assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal_frigate
last_update:
  date: 8/22/2023
  author: Kasun Thushara
createdAt: '2023-08-21'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reterminal_frigate/
---

## Introdução

Na era atual de integração perfeita da tecnologia inteligente em nossas vidas diárias, a demanda por automação residencial inteligente e segura é mais forte do que nunca. Imagine um cenário em que sua casa não apenas atenda às suas necessidades, mas também detecte e o alerte prontamente sobre atividades suspeitas no seu quintal. É aqui que a combinação de hardware avançado e software open-source entra em cena. Neste artigo, exploraremos a sinergia entre o reTerminal da Seeed Studio, o Home Assistant OS e o add-on Frigate com Coral AI USB TPU. Este trio oferece uma oportunidade única para uma configuração centralizada, consciente de privacidade e orientada por IA de automação residencial que melhora seu estilo de vida enquanto garante segurança. Junte-se a nós para explorar as vantagens e o potencial ilimitado dessa fusão na vanguarda da vida inteligente moderna.

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate surge como um notável gravador de vídeo em rede (NVR) open-source, voltado para detecção de objetos em tempo real baseada em IA. A característica distintiva do Frigate está em seu processamento local, garantindo que todos os cálculos ocorram no seu hardware pessoal. Essa abordagem garante o máximo de privacidade, pois os fluxos das suas câmeras nunca saem dos limites da sua casa. Com o Frigate, você obtém uma ferramenta poderosa que permite aumentar a segurança e o monitoramento por meio de tecnologia avançada de reconhecimento de objetos, mantendo controle total sobre seus dados.

### Home assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS é um sistema operacional projetado especificamente para executar o Home Assistant, uma plataforma de automação residencial open-source. O Home Assistant permite controlar e automatizar vários dispositivos e serviços inteligentes na sua casa.
Home Assistant OS fornece um ambiente simplificado e otimizado para executar o Home Assistant. Ele vem pré-instalado com os componentes necessários para configurar e gerenciar seus dispositivos de casa inteligente, integrar com diferentes protocolos e plataformas e criar rotinas de automação.

## Primeiros passos

Antes de iniciar este projeto, você precisa preparar seu hardware e software com antecedência, conforme descrito aqui. Além disso, você precisa de câmeras IP que ofereçam suporte para este projeto. Você pode ver essas câmeras compatíveis no [site oficial](https://docs.frigate.video/frigate/hardware) do Frigate.

### Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

Considerando os requisitos de energia do USB Coral accelerator, recomendamos fortemente investir em um hub USB alimentado de alta qualidade. Esse hub fornecerá energia suficiente para atender às necessidades do Coral accelerator, garantindo desempenho estável e ideal.

:::

### Preparação de software

Recomendamos instalar a versão mais recente do Raspberry Pi OS 64 bits no site oficial. Se você preferir instalar um novo Raspbian OS, siga as etapas descritas neste [guia](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

## Instalar Home Assistant Supervised OS no Raspberry Pi

A instalação do Home Assistant Supervised no seu Raspberry Pi 4 é um processo abrangente que reúne várias etapas críticas para garantir uma configuração bem-sucedida.

:::note
Em algumas etapas, se você estiver conectado por Wi-Fi, poderá perder a conexão. É recomendável usar uma conexão LAN.

:::

### Etapa 1: Aprimore seu sistema

- **Comece executando um log de atualização do sistema usando o seguinte comando:**

```sh
sudo apt update
```

- **Em seguida, prossiga para instalar as seguintes dependências:**

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **Corrigir instalações quebradas**

```sh
sudo apt --fix-broken install
```

- **Reiniciar o reTerminal**

```sh
sudo reboot
```

### Etapa 2: Integrar o Docker

Instalar o Docker é fundamental. É vital evitar instalar o Portainer, pois ele pode impactar negativamente o processo geral de instalação. Execute os seguintes comandos:

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **Adicionar usuário Docker ao sistema**

```sh
sudo usermod -aG docker pi
```

- **Verificar se o Docker está funcionando corretamente**

```sh
docker --version
```

### Etapa 3: Tratar a versão do CGroup

- **A compatibilidade do Home Assistant Supervisor depende de um Docker CGroup v1 específico. Para garantir essa compatibilidade, as seguintes alterações precisam ser feitas:**

```sh
sudo nano /etc/default/grub
```

- **Adicione esta linha e salve.**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Abra este arquivo**

```sh
sudo nano /boot/cmdline.txt
```

- **Adicione esta linha ao final da frase e salve.**

```sh

systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### Etapa 4: Instalar o OS-Agent (ver. 1.3)

Baixe o OS-Agent adequado com base na arquitetura da sua CPU e, em seguida, prossiga para instalá-lo: **Para Raspberry Pi OS 64 bits é linux aarch64**.

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **Instalar Home Assistant OS Agent**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **Certifique-se de que a instalação foi bem-sucedida executando**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### Etapa 5: Obter o Home Assistant Supervised

- **Baixe o pacote mais recente do Home Assistant Supervised:**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### Etapa 6: Instalação do Home Assistant Supervised

Importante: esta etapa exige uma conexão LAN, pois o Wi-Fi pode ser interrompido durante o processo:

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### Etapa 7: Tratar erros de instalação

Em caso de erros de instalação, corrija-os executando:

```sh
sudo apt --fix-broken install
```

Após a correção bem-sucedida, aparecerá uma tela azul permitindo que você selecione o modelo **Raspberry Pi4 64**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### Etapa 8: Finalizar a instalação e configuração do Wi-Fi

Aguarde alguns minutos para que o Home Assistant fique acessível em http://[your_raspberry_IP]:8123.
:::note

Se você encontrar problemas de conectividade Wi-Fi após reiniciar, siga estas etapas

:::

- Para habilitar o 'dhcpcd', execute o seguinte comando:

```sh
sudo systemctl enable dhcpcd
```

- Desative o serviço de rede com o comando:

```sh
sudo systemctl disable networking
```

- Reinicie o Raspberry Pi para aplicar as alterações:

```sh
sudo reboot
```

:::note

Para resolver os "Network Manager issues" (encontrado em Settings), você pode corrigir a situação iniciando e, em seguida, habilitando o Network Manager. Utilize o seguinte comando para fazer isso:

:::

```sh
sudo systemctl enable NetworkManager
```

## Instalar MQTT Broker

- Navegue até Settings > Add-on  > Clique em MQTT Broker.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- Pressione install e, após a instalação, ative start on the boot

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- Navegue até Settings > Devices and Services  > Configure MQTT Broker.

## Instalar Frigate (Full Access)

### Etapa 1: Clonar o repositório

- Navegue até Settings > Add-on  > Add on Store > Menu > repositories

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- Adicione a URL do repositório: https://github.com/blakeblackshear/frigate-hass-addons. Em seguida, você poderá ver o add-on Frigate na Add on Store.

### Etapa 2: Instalar o addon Frigate NVR Full Access

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### Etapa 3: Criar frigate.yml

- Para prosseguir com esta etapa, você precisará de um editor de arquivos. Acesse a opção "Browse File System" localizada no canto superior esquerdo do editor de arquivos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- Crie um novo arquivo chamado frigate.yml

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- Em seguida, você pode utilizar o trecho de código a seguir para avaliar se consegue obter com sucesso fluxos de vídeo RTSP das suas câmeras IP. Copie o código fornecido e cole-o no seu arquivo `frigate.yml`. É fortemente recomendado seguir as orientações fornecidas no [site oficial do Frigate](https://docs.frigate.video/guides/getting_started) para instruções completas. Lembre-se de substituir os espaços reservados pelo nome específico da sua câmera, resolução e IP do stream da câmera. Essa personalização garantirá uma integração precisa com sua configuração de câmera.

```sh
mqtt:
  enabled: False


cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: False # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

### Passo 4: Iniciar o Frigate

- Antes de iniciar o Frigate, certifique-se de que o modo de proteção esteja desativado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- Assim que você iniciar o Frigate, é importante monitorar o log de perto para quaisquer possíveis problemas que possam surgir. Se nenhum problema tiver surgido, prossiga clicando no ícone do Frigate localizado na barra lateral. Essa ação lhe dará acesso à interface e às funcionalidades do Frigate.

### Passo 5: Verificar o Stream

Se tudo funcionar corretamente, você obterá o stream.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### Passo 6: Ativar detecção de objeto

Para isso, o Coral USB Accelerator Edge TPU é essencial. Embora você possa conectá-lo diretamente a uma porta USB, pode haver casos em que ele não funcione como esperado devido aos seus maiores requisitos de energia. Portanto, recomendamos fortemente utilizar um hub USB alimentado confiável. Isso garantirá fornecimento de energia estável e desempenho ideal para o Coral USB Accelerator, aumentando sua compatibilidade e eficácia.

- Altere o arquivo frigate.yml com o código-fonte abaixo

```sh
mqtt:
  enabled: False

detectors: # <---- add detectors
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: True # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

- Reinicie o addon Frigate. Em seguida, clique no ícone do Frigate na barra lateral. Depois clique no stream e você terá a visualização completa do stream. Por padrão você pode detectar pessoas e desenhar uma caixa delimitadora.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

E aqui está a demonstração

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.gif" /></center>

Você pode detectar muitos objetos diferentes e também enviar notificação para o seu telefone celular. Para isso, você precisa alterar o frigate.yml. Portanto, recomendamos muito que você dê uma rápida olhada nos seguintes guias.

## Recursos

- **[Página Web]** [Documentação Oficial do Frigate](https://docs.frigate.video/)

- **[Página Web]** [Fórum do Home Assistant](https://community.home-assistant.io/)

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
