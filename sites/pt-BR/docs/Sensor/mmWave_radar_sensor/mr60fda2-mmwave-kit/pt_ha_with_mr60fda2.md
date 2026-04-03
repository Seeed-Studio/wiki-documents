---
title: Sensor de detecção de quedas MR60FDA2 com Home Assistant
description: Sensor mmWave de detecção de quedas MR60FDA2 com Home Assistant
keywords:
  - mmwave
  - radar
  - MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ha_with_mr60fda2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre o escopo de uso do radar no Home Assistant
As atualizações de firmware do RADAR e as atualizações do YAML do ESPHome são 2 softwares diferentes. O YAML do ESPHome pode ser atualizado por OTA, enquanto a placa RADAR só pode ser atualizada via USB dentro do case, com um software especializado fornecido pela SEEED. Você pode personalizar o software ESPHome, você [NÃO pode personalizar o firmware do RADAR](https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60fda2_mmwave_kit/#atualização-de-firmware-do-módulo). A Seeed Studio só permite personalização do RADAR se você estiver fazendo uma aplicação comercial.
:::

## Introdução {#introduction}

O MR60FDA2 é um módulo Sensor de Detecção de Quedas mmWave de 60 GHz projetado para integração com o microcontrolador XIAO ESP32C6. Este sensor avançado utiliza tecnologia de ondas milimétricas para fornecer monitoramento não invasivo de sinais vitais e detecção de presença.

Este guia tem como objetivo fornecer um passo a passo claro e abrangente para integrar o Sensor mmWave MR60FDA2 ao Home Assistant usando o microcontrolador XIAO ESP32C6. Esta integração com o Home Assistant permite aos usuários aprimorar seus sistemas de casa inteligente com capacidades avançadas de detecção, viabilizando respostas automatizadas e monitoramento em tempo real para diversas aplicações (por exemplo, detecção de quedas para cuidados com idosos, aplicações de segurança).

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## Visão Geral do Produto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60FDA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60FDA2 com XIAO ESP32C6

Para integrar de forma eficaz o Sensor mmWave MR60FDA2 com o Home Assistant usando o XIAO ESP32C6, siga estas etapas essenciais:

1. **[Configurar o Home Assistant](#setting-up-home-assistant)**: Comece instalando e configurando o Home Assistant para gerenciar seus dispositivos de casa inteligente, garantindo uma conexão perfeita com o sensor.
2. **[Conectar o Sensor MR60FDA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprenda como descobrir e adicionar o Sensor MR60FDA2 à sua configuração do Home Assistant, permitindo o monitoramento em tempo real de sinais vitais.
3. **[Monitorar os Dados do Sensor](#sensor-data-monitoring)**: Uma vez integrado, você pode monitorar de forma eficaz os dados do sensor para verificar se ocorreu ou não uma queda.
4. **[Implementar Automação](#implementing-automation-in-home-assistant)**: Explore os poderosos recursos de automação do Home Assistant para criar ações responsivas com base nos dados do sensor, aprimorando seu ambiente de casa inteligente.
5. **[Modificar o Firmware com ESPHome](#modifying-the-firmware-with-esphome)**: Utilize o ESPHome para personalizar a funcionalidade do sensor, ajustando-o para atender às suas necessidades específicas, oferecendo maior flexibilidade e controle.

Essas etapas irão guiá-lo no uso da integração entre seu Sensor mmWave MR60FDA2 e o XIAO ESP32C6.

## Primeiros Passos {#getting-started}

:::note Atenção
Observe que, quando nos referimos a atualizações ou modificações de firmware, estamos especificamente tratando do firmware no XIAO ESP32C6.
:::

Para integrar com sucesso o Sensor mmWave MR60FDA2 ao Home Assistant, você precisará dos seguintes componentes:

- **Home Assistant**: Uma plataforma de casa inteligente que irá gerenciar os dados do sensor.
- **Add-on ESPHome**: Firmware que permite fácil configuração e gerenciamento de dispositivos ESP32.

### Etapa 1: Configurando o Home Assistant {#setting-up-home-assistant}

1. **Instalação**: Para desempenho ideal, é recomendável instalar o [Home Assistant OS](https://www.home-assistant.io/installation/) em uma Máquina Virtual ou Raspberry Pi. Siga o guia de instalação oficial no site do Home Assistant.
2. **Habilitando o Add-on ESPHome**:
   - Acesse o painel do Home Assistant.
   - Navegue até a seção "Add-ons" e procure pelo add-on ESPHome.
   - Clique em "Install" e depois em "Start" para habilitá-lo.
   - Depois de instalado, configure o add-on para garantir a comunicação adequada com o XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

Reunindo os componentes necessários e configurando o Home Assistant com o add-on ESPHome, você estará pronto para prosseguir com a integração do Sensor mmWave MR60FDA2.

:::tip instalar Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- [Primeiros Passos com Home Assistant no ODYSSEY-X86](/pt-br/ODYSSEY-X86-Home-Assistant)
- [Primeiros Passos com Home Assistant no reTerminal](/pt-br/reTerminal_Home_Assistant)
- [Primeiros Passos com Home Assistant no LinkStar H68K/reRouter CM4](/pt-br/h68k-ha-esphome)
:::

### Etapa 2: Preparando o Kit

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré-gravado com firmware para detecção de respiração e batimentos cardíacos. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravar o Firmware**: Se o firmware existente estiver corrompido ou você precisar começar do zero.
2. **Atualizar o Firmware**: Se houver uma versão mais recente do firmware com funcionalidades aprimoradas.

Existem dois métodos simples para gravar o firmware:

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Ferramenta Web](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções na tela.

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases) (será necessário descompactar o arquivo baixado).

1. Conecte o kit do sensor ao seu PC.
2. Visite a página [ESPHome Web](https://web.esphome.io/).
3. Selecione o arquivo de firmware com o sufixo `*.factory.bin`.

Assista ao vídeo a seguir para um passo a passo detalhado de como gravar o firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Com qualquer um dos métodos, você terá seu firmware atualizado e pronto para integração com o Home Assistant.

#### Conectar ao hotspot do kit

Com o firmware, você pode ligar o kit do sensor, e um ponto de acesso Wi-Fi aparecerá: `seeedstudio-mr60fda2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navegue até `192.168.4.1` para configurar as configurações de rede local do servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Etapa 3: Descobrindo e Adicionando o Dispositivo no Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

Nesta seção, vamos passar pelo processo usando o aplicativo Home Assistant, onde a lógica é a mesma que na web.

1. **Abrir o Aplicativo**: Assim que você iniciar o aplicativo, selecione seu servidor Home Assistant. O aplicativo encontrará seu servidor automaticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Criar uma Conta**: Se você ainda não criou uma conta, será necessário fazê-lo. Depois disso, faça login com suas credenciais.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegar até a Página de Integrações**: Depois de fazer login, vá para a página "Integrations" no Home Assistant. Se você instalou o add-on ESPHome e tanto o XIAO ESP32C6 quanto o servidor Home Assistant estiverem na mesma rede, você deverá ver o dispositivo `Seeed Studio MR60FDA2 Kit {device-mac-address}` aparecer em dispositivos descobertos.
4. **Adicionar o Dispositivo**: Clique para adicionar o dispositivo à sua configuração do Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Clique no botão `CONFIGURE`, confirme pressionando o botão `SUBMIT` e atribua o dispositivo à área de sua preferência (por exemplo, Bathroom). Depois disso, o dispositivo será gerenciado por meio da sua integração ESPHome, permitindo controle total e monitoramento no Home Assistant.

  :::note
  Se o prompt não solicitar que você atribua uma área durante o processo de configuração, você poderá atribuí-la manualmente mais tarde, navegando até a seção "Integrations" no Home Assistant, selecionando seu dispositivo e configurando a área a partir daí.
  :::

## Monitoramento e Controle {#monitoring-and-control}

Ao concluir as etapas, você terá integrado e adicionado com sucesso o Sensor MR60FDA2 ao Home Assistant, habilitando o monitoramento.

### Monitoramento de dados do sensor

Nesta seção, o sensor é adicionado ao "Bathroom"; navegue até a guia "Overview". Você verá o cartão mmWave exibido na seção Bathroom.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Controle da luz RGB

Nesta seção, exploraremos como controlar uma luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Clique na caixa correspondente para controlar diretamente a luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Próximas Etapas {#next-steps}

Agora que você integrou com sucesso o Sensor mmWave MR60FDA2 com o XIAO ESP32C6 e o Home Assistant, pode explorar melhorias adicionais para aproveitar ao máximo sua configuração. Aqui estão dois caminhos essenciais a considerar:

#### Implementando automação no Home Assistant

Os poderosos recursos de automação do Home Assistant permitem criar um ambiente de casa inteligente mais responsivo com base nos dados coletados do seu Sensor MR60FDA2. Isso significa que você pode configurar ações que ocorrem automaticamente com base em gatilhos específicos relacionados à detecção de movimento ou batimentos cardíacos.

Veja como implementar automações passo a passo:

1. **Navegue até a seção de Automações**: No painel do Home Assistant, encontre e clique na guia "Automations". Esta área é dedicada à criação e gestão de ações automatizadas em sua casa.
2. **Crie uma nova automação**: Clique no botão "Add Automation". O Home Assistant oferece um assistente fácil de usar que o guia pelo processo de configuração de uma automação.
3. **Defina o gatilho**: Escolha um gatilho com base nos dados do Sensor MR60FDA2. Por exemplo, você pode configurar a automação para disparar quando alguém cair. Isso significa que sua automação pode responder imediatamente às leituras do sensor.
4. **Defina condições (opcional)**: As condições permitem refinar quando a automação deve ser executada. Por exemplo, você pode querer que as luzes acendam somente quando estiver escuro do lado de fora ou se um usuário específico estiver em casa.
5. **Determine a ação**: Especifique qual ação deve ocorrer quando as condições do gatilho forem atendidas. As ações podem incluir ligar luzes, enviar notificações ou até ajustar configurações do termostato. Por exemplo, você pode criar uma ação que acenda uma luz RGB quando um movimento for detectado, aumentando tanto a segurança quanto o conforto.
6. **Salve e teste**: Depois de configurar sua automação, salve-a e teste sua funcionalidade. Passe na frente do sensor para ver se as luzes acendem como esperado. Se surgir algum problema, você pode voltar às configurações da automação para solucionar e ajustar.

Aproveitando os recursos de automação do Home Assistant, você pode criar um ambiente realmente inteligente que responda aos seus movimentos e métricas de saúde, garantindo que seu espaço de convivência se adapte ao seu estilo de vida de forma contínua.

## Modificando o firmware com ESPHome

Uma das grandes vantagens de usar o XIAO ESP32C6 é sua compatibilidade com o ESPHome, uma poderosa ferramenta para gerenciar e personalizar o firmware do seu microcontrolador. Com o ESPHome, você pode modificar diretamente o firmware para adaptar a funcionalidade do Sensor mmWave MR60FDA2 às suas necessidades específicas.

Para começar com o ESPHome, siga estas etapas:

1. **Acesse o painel do ESPHome**: No Home Assistant, navegue até o add-on ESPHome. Você deverá ver o seu XIAO ESP32C6 listado entre os dispositivos.
2. **Crie uma nova configuração**: Clique no dispositivo para abrir sua configuração. Aqui, você pode ajustar configurações como a sensibilidade do sensor, intervalos de relatório e formatos de saída. O ESPHome usa um formato de configuração YAML, que é fácil de usar e permite definir vários parâmetros. Você pode usar o seguinte arquivo modelo YAML como ponto de partida para sua configuração, que foi projetado especificamente para o Sensor MR60FDA2:

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/limengdu/MR60FDA2_ESPHome_external_components/blob/main/example/mr60fda2.yaml

    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "1.0"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf
        platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6

        # Tasmota's release of 5.1.3 works, first-party release does not LOL
        version: 5.1.3
        source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

        # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)
        # See https://github.com/esphome/issues/issues/5404
        sdkconfig_options:
          CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y

    external_components:
      - source:
          type: git
          url: https://github.com/ssieb/esphome
          ref: adc
        components: [ adc ]
        refresh: 1min
      - source:
          type: git
          url: https://github.com/limengdu/MR60FDA2_ESPHome_external_components
          ref: main
        components: [ seeed_mr60fda2 ]
        refresh: 0s

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    wifi:
      # Enable fallback hotspot (captive portal) in case wifi connection fails
      ap:
        ssid: "seeedstudio-mr60fda2"

    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15

    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60FDA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        rmt_channel: 0
        rgb_order: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    sensor:
      - platform: bh1750
        name: "Seeed MR60FDA2 Illuminance"
        address: 0x23
        update_interval: 1s

    uart:
      id: seeed_mr60fda2_uart
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60fda2:
      id: my_seeed_mr60fda2
      uart_id: seeed_mr60fda2_uart

    binary_sensor:
      - platform: seeed_mr60fda2
        people_exist:
          name: "Person Information"
        fall_detected:
          name: "Falling Information"

    button:
      - platform: seeed_mr60fda2
        get_radar_parameters:
          name: "Get Radar Parameters"
        factory_reset:
          name: "Reset"

    select:
      - platform: seeed_mr60fda2
        install_height:
          name: "Set Install Height"
        height_threshold:
          name: "Set Height Threshold"
        sensitivity:
          name: "Set Sensitivity"
    ```

3. **Personalize a funcionalidade**: Você pode aprimorar os recursos do sensor explorando vários recursos disponíveis no ESPHome, permitindo ajustes flexíveis para atender às suas necessidades específicas.
4. **Envie o firmware atualizado**: Depois de fazer suas modificações, salve a configuração. O painel do ESPHome permite que você envie o firmware diretamente pelo ar. Basta clicar no botão `Upload` e seguir as instruções para concluir o processo. Esse método simplificado torna fácil manter seu firmware atualizado.
5. **Teste e itere**: Quando o envio estiver concluído, teste suas alterações em tempo real. Monitore o desempenho do sensor para garantir que ele opere conforme o esperado. Se encontrar algum problema, volte ao painel do ESPHome para refinar suas configurações. Essa abordagem iterativa permite melhorar continuamente seu firmware, garantindo que ele atenda às suas necessidades de forma eficaz.

Ao utilizar o ESPHome, você se capacita a fazer melhorias contínuas na configuração do seu sensor, adaptando-o às suas necessidades em evolução. Essa capacidade não apenas melhora a funcionalidade do seu projeto, como também fornece uma plataforma para aprendizado e experimentação com desenvolvimento de IoT.

Por meio dessas etapas, você pode maximizar a funcionalidade da sua configuração com o Sensor mmWave MR60FDA2 e o XIAO ESP32C6, transformando-a em um sistema de casa inteligente altamente personalizado e responsivo, adaptado às suas preferências e necessidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
