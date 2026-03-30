---
description: Configurar e ajustar o OpenDisplay com o OpenDisplay Kit
title: Configurar o firmware OpenDisplay com o OpenDisplay Kit
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen
createdAt: '2026-01-09'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/EN04_opendisplay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Configurar o firmware OpenDisplay com o OpenDisplay Kit

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Com alimentação do **XIAO nRF52840** Plus, a XIAO EN04 ePaper Display Board é a maneira mais fácil de começar a usar displays e-paper com Bluetooth utilizando o firmware OpenDisplay. Diferente de sistemas tradicionais que exigem Access Points dedicados com rádios 802.15.4, esta placa usa Bluetooth Low Energy para controle sem fio direto a partir do seu celular, computador ou Home Assistant.

### Aplicações

- **Dashboard de Casa Inteligente**: Exiba informações em tempo real, como previsão do tempo, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de Energia**: Mostre dados de consumo de energia de medidores inteligentes, ajudando moradores a acompanhar e gerenciar o uso de energia com mais eficiência.
- **Alertas de Segurança**: Exiba alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Display de Termostato Inteligente**: Mostre níveis de temperatura e umidade, bem como configurações de controle do seu termostato inteligente.

## O que é o [OpenDisplay](https://opendisplay.org)?

OpenDisplay é um projeto open-source que fornece firmware e protocolos para displays e-paper. Ele é projetado especificamente para montagens de hardware personalizadas usando microcontroladores como o nRF52840 e o ESP32.

O [firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware) permite:
- **Comunicação Bluetooth Low Energy (BLE)**: Controle sem fio direto sem necessidade de access points dedicados
- **Suporte Dedicado a Hardware**: Funciona com placas desenvolvidas para esse fim, como a XIAO ePaper Board EN04, EE04 e outras
- **Gravação e Configuração via Web**: Configuração simples e upload de imagens por meio da interface web em [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html)
- **Suporte a Múltiplos Displays**: Compatível com vários tamanhos e controladores de e-paper


### Por que usar o firmware OpenDisplay?

O firmware OpenDisplay oferece várias vantagens para projetos personalizados com displays e-paper:

- **Nenhum Access Point Necessário**: Usa Bluetooth Low Energy para comunicação direta - nenhum hardware adicional é necessário
- **Ferramentas Baseadas na Web**: Instalação de firmware, configuração e upload de imagens de forma simples usando ferramentas no navegador
- **Hardware Desenvolvido para o Fim Proposto**: Projetado para placas como a EN04, não limitado a etiquetas ESL comerciais
- **Open Source e Gratuito**: Projeto completamente open-source com desenvolvimento ativo no GitHub
- **Suporte a Vários Microcontroladores**: Funciona com nRF52840, ESP32-S3, ESP32-C6 e ESP32-C3
- **Configuração Simples**: Envie o firmware arrastando e soltando um único arquivo para a sua placa, configure via interface web, sem necessidade de programação complexa
- **Eficiente em Bateria**: Otimizado para operação de baixo consumo com displays e-paper
- **Comunidade Ativa**: Suporte e desenvolvimento por meio do [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z)


## Primeiros Passos com o firmware OpenDisplay

### Montagem de Hardware

**Passo 1. Conectar o Display à Placa Controladora**  
Alinhe o cabo FPC com o conector na placa XIAO EN04 e, em seguida, prenda a trava para garantir uma conexão firme.  

:::tip
O lado metálico do cabo FPC deve ficar virado para cima, caso contrário, nenhum conteúdo será exibido. A maioria dos displays tem 1 e 50 no cabo FPC; esses números devem estar alinhados com os da placa!

Siga o tutorial de instalação abaixo, muitas pessoas cometem erros nessa etapa.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Passo 2. Conectar a Bateria**  
Conecte o cabo da bateria ao conector JST na placa controladora, garantindo a polaridade correta (fio vermelho no +, preto no -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Verifique a polaridade duas vezes; baterias diferentes podem ter fiação invertida. Se o vermelho e o preto estiverem trocados, eles podem ser facilmente removidos do conector JST usando uma agulha e então reposicionados corretamente.
:::



## Instalando o Firmware OpenDisplay

### Método com Instalador Web (Recomendado)

A maneira mais simples de instalar o firmware OpenDisplay é usando o instalador baseado na web.

**Passo 1. Abrir o Instalador Web**  
Acesse o [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) em um navegador.

**Passo 2. Selecionar Sua Placa**  
Escolha **"Seeed EN04 4.26"** ou **"Seeed EN04 7.3"** (ou qualquer predefinição adequada ao seu hardware) na lista de dispositivos (com base no tamanho do display do seu kit).

**Passo 3. Baixar o firmware**  
Clique no botão **"Download Firmware"** e salve o arquivo **"NRF52840.uf2"** no seu disco rígido.

**Passo 4. Conectar Sua Placa**  
Conecte a XIAO ePaper Board EN04 ao seu computador usando um cabo USB-C.

**Passo 5. Instalar o Firmware**  
Pressione o botão de reset duas vezes consecutivas. Você verá um gerenciador de arquivos abrir no seu PC. Copie o arquivo **"NRF52840.uf2"** baixado para a unidade USB que aparecer (a unidade USB é a placa EN04 em modo DFU)

:::tip
Se a instalação falhar, tente:
- Usar um cabo USB diferente (alguns cabos são apenas para alimentação)
- Pressionar o botão de reset duas vezes na placa EN04
- Usar uma porta USB diferente
:::

**Passo 6. Configurar a Placa**  
Abra a [Página de Configuração do OpenDisplay](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) e conecte-se à sua placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


Se você selecionou **"Seeed EN04 4.26"** ou **"Seeed EN04 7.3"**, verá **"Auto Install to Device"**.
Este é o modo mais fácil de configurar seu Kit.

**Passo 7. Conectar à Placa**
Pressione o botão **""Connect** na página. Você deverá ver uma janela mostrando os dispositivos OpenDisplay disponíveis; selecione o novo dispositivo e clique em **"Pair"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**Passo 8. Salvar a configuração na Placa**  
A última coisa a fazer é pressionar o botão **"Auto Install to Device"**; isso salvará a configuração no dispositivo.


### Verificar a Configuração

Após a instalação e configuração, o display deverá mostrar uma tela de inicialização. O dispositivo agora está pronto para exibir conteúdo via Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




## Enviando Imagens para o Display

### Usando a Ferramenta Web de Display

**Passo 1. Ferramenta OpenDisplay**  
Acesse o [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) no seu navegador.

**Passo 2. Conectar ao Dispositivo**  
Clique em **"Connect"** e selecione seu dispositivo OpenDisplay na janela de pareamento Bluetooth.

**Passo 3. Selecionar Imagem**  
Clique em **"Select Image"** e escolha um arquivo de imagem no seu computador.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
Para melhores resultados:
- Use imagens que correspondam à resolução do seu display (o display de 7,3" é de 800x480 pixels)
- Imagens em preto e branco funcionam melhor em displays monocromáticos
- A ferramenta converterá e aplicará dithering automaticamente em imagens coloridas
:::

**Passo 4. Enviar Imagem**  
Clique em **"Upload Image"** para enviar a imagem para o seu display. O e-paper será atualizado e mostrará sua imagem.



### Criando Conteúdo Personalizado

Você pode criar conteúdo personalizado para o display usando:
- Softwares de edição de imagem (GIMP, Photoshop, etc.)
- Scripts em Python com a biblioteca PIL/Pillow
- Geradores de imagem baseados na web
- Integração com Home Assistant


### Integração com Home Assistant
:::tip
Para integrar com o Home Assistant, você precisa de uma configuração com suporte a Bluetooth:
- **Home Assistant Green** (Bluetooth integrado)
- **Home Assistant OS/Supervised** em hardware com suporte a Bluetooth
- **ESPHome Bluetooth Proxy** (recomendado para melhor alcance)

**Observação**: Dispositivos Shelly atuando como proxies Bluetooth **não suportam conexões ativas** exigidas pelo OpenDisplay, portanto não podem ser usados para essa integração.
:::

**Passo 1. Instalar a Integração**

Para instruções detalhadas de instalação, consulte o [Repositório da Integração OpenDisplay para Home Assistant](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

A forma mais fácil de instalar a integração é via **HACS** (Home Assistant Community Store). Clique no botão abaixo para abrir o repositório diretamente no HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
Após instalar a integração personalizada via HACS, você deve **reiniciar o Home Assistant** para que as alterações entrem em vigor.
:::

**Passo 2. Adicionar o Dispositivo Detectado**

Depois que o Home Assistant for reiniciado:
1. Vá em **Settings > Devices & services**.
2. Você deverá ver o seu dispositivo OpenDisplay listado em **Discovered**.
3. Clique em **Add**.
4. Uma caixa de diálogo será exibida permitindo que você defina o **Name** e a **Area** do dispositivo.
5. Clique em **Finish**. Você será redirecionado para a página de detalhes do dispositivo, onde poderá gerenciar seu display de papel eletrônico.

Você verá uma nova imagem exibida no display, mostrando que o dispositivo está conectado ao Home Assistant.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## Usando com Home Assistant

Depois de integrar seu dispositivo OpenDisplay com o Home Assistant, você pode criar automações para atualizar dinamicamente o conteúdo do display com base em dados de sensores, horário ou outros eventos.

### Automatizando Atualizações do Display

O serviço principal para atualizar o display é `open_epaper_link.drawcustom`. Este serviço permite desenhar texto, ícones, imagens e formas no display. Para obter a lista completa de tipos e parâmetros suportados, consulte a [documentação do drawcustom](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md).

Você pode criar automações no Home Assistant usando o **Editor Visual** ou escrevendo o código **YAML** diretamente. Abaixo estão exemplos de ambos os métodos.

#### Exemplo 1: Exibir Dados de Sensor (Editor Visual)

1.  Vá em **Settings > Automations & Scenes** e clique em **Create Automation**.
2.  Adicione um gatilho **Time Pattern** (por exemplo, a cada 10 minutos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  Adicione uma **Action** e selecione **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  Selecione seu dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  No campo **Payload**, insira a configuração para os elementos do seu display.

<!-- <div style={{textAlign:'center'}}><img src={require('./ha_automation_visual.jpg').default} style={{width:800, height:'auto'}}/></div> -->

**Configuração do Payload:**

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution Importante: IDs de Entidade
Os IDs de entidade usados no payload acima (por exemplo, `sensor.living_room_temperature`, `sensor.living_room_humidity`) são exemplos. Você **deve** substituí-los pelos IDs de Entidade reais dos seus sensores no Home Assistant.
:::

#### Exemplo 2: Contagem Regressiva (YAML)

Para usuários avançados, você pode editar a automação no modo YAML. Esta automação calcula os dias restantes até uma data específica (por exemplo, Natal) e os exibe.

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution Importante: ID do Dispositivo
O `device_id` mostrado no exemplo acima (`2ad706d4aa7c657b6fe99a733cef2253`) é apenas um exemplo. Você **deve** substituí-lo pelo ID de Dispositivo real do seu próprio display OpenDisplay.

Para encontrar seu ID de Dispositivo:
1. Crie uma nova automação no Home Assistant usando o Editor Visual.
2. Selecione seu dispositivo OpenDisplay nas configurações da ação.
3. Altere para o **modo YAML** (clique nos três pontos no canto superior direito do card de ação).
4. Copie o `device_id` do código YAML e cole-o na sua automação.
:::

## Bônus

Se você está procurando uma forma estilosa de montar seu display, confira este insert impresso em 3D para a moldura IKEA RODALM. Ele permite uma montagem fácil do display.

- **[MakerWorld]** [Insert Seeed 7.3" Spectra para Moldura IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Solução de Problemas

### Problemas de Instalação de Firmware

**Problema**: O PC não detecta uma nova unidade USB após conectar a placa EN04
- **Solução**: 
  - Tente usar um cabo USB diferente (cabo de dados, não apenas de alimentação)
  - Pressione o botão de reset duas vezes após conectar a placa


### Problemas de Configuração

**Problema**: A placa EN04 não é descoberta
- **Solução**:
  - Verifique se o LED na placa pisca – isso confirma que o dispositivo está alimentado
  - Tente reiniciar a placa
  - Verifique a instalação do firmware ou copie o arquivo novamente

**Problema**: O display não mostra nada após a instalação do firmware
- **Solução**:
  - Verifique se o cabo FPC está inserido corretamente (contatos metálicos voltados para cima)
  - Confira se o cabo está totalmente inserido e travado
  - Verifique se a configuração está correta (você pode conectar-se à placa via configurador e ler a configuração)


### Problemas de Conexão Bluetooth

**Problema**: Não é possível encontrar o dispositivo OpenDisplay no emparelhamento Bluetooth
- **Solução**:
  - Certifique-se de que o dispositivo está ligado e que o firmware está instalado
  - Aproxime-se mais do dispositivo (dentro de 2–3 metros)
  - Verifique se o Bluetooth está ativado no seu computador/celular

**Problema**: A conexão cai durante o upload de imagem
- **Solução**:
  - Permaneça próximo ao dispositivo durante o upload
  - Certifique-se de que a bateria está suficientemente carregada ou alimente o dispositivo via USB
  - Evite enviar imagens muito grandes
  - Tente novamente em um ambiente Bluetooth mais estável

### Problemas de Bateria e Alimentação

**Problema**: Vida útil da bateria curta
- **Solução**:
  - Configure intervalos de sono mais longos no configurador
  - Sempre use a versão mais recente do firmware; cada versão otimiza o uso da bateria
  - Reduza a frequência de atualização do display
  - Verifique se a bateria está totalmente carregada (4,2 V para Li-Po)

**Problema**: O dispositivo não carrega
- **Solução**:
  - Verifique a polaridade da bateria (vermelho: +, preto: -)
  - Verifique se o cabo de carregamento fornece corrente suficiente (mín. 500 mA)
  - Certifique-se de que a chave de energia está na posição ON
  - Teste com uma fonte de alimentação USB diferente

## Recursos

- **[GitHub]** [Repositório de Firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware)
- **[Web Tool]** [Instalador Web de Firmware](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [Construtor de Configuração](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [Testador de Display](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [Comunidade OpenDisplay](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [Site Oficial OpenDisplay](https://opendisplay.org)



## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
