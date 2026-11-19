---
title: Sensor de detecção de quedas MR60FDA2 com Home Assistant
description: Sensor mmWave de detecção de quedas MR60FDA2 com Home Assistant
keywords:
  - mmwave
  - radar
  - MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2026-05-12'
url: https://wiki.seeedstudio.com/pt-br/ha_with_mr60fda2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre o escopo de uso do radar no Home Assistant
As atualizações de firmware do RADAR e as atualizações do YAML do ESPHome são 2 softwares diferentes. O YAML do ESPHome pode ser atualizado por OTA, enquanto a placa RADAR SOMENTE pode ser atualizada via USB dentro do case, com um software especializado fornecido pela SEEED. Você pode personalizar o software ESPHome, você [NÃO pode personalizar o firmware do RADAR](https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60fda2_mmwave_kit/#module-firmware-upgrade). A Seeed Studio só permite personalização do RADAR se você estiver fazendo uma aplicação comercial.
:::

## Introdução {#introduction}

O MR60FDA2 é um módulo sensor de detecção de quedas mmWave de 60 GHz projetado para integração com o microcontrolador XIAO ESP32C6. Este sensor avançado utiliza tecnologia de ondas milimétricas para fornecer monitoramento não invasivo de sinais vitais e detecção de presença.

Este guia tem como objetivo fornecer um passo a passo claro e abrangente para integrar o sensor mmWave MR60FDA2 ao Home Assistant usando o microcontrolador XIAO ESP32C6. Essa integração com o Home Assistant permite que os usuários aprimorem seus sistemas de casa inteligente com capacidades avançadas de detecção, possibilitando respostas automatizadas e monitoramento em tempo real para várias aplicações (por exemplo, detecção de quedas para cuidados com idosos, aplicações de segurança).

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## Visão geral do produto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60FDA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60FDA2 com XIAO ESP32C6

Para integrar de forma eficaz o sensor mmWave MR60FDA2 ao Home Assistant usando o XIAO ESP32C6, siga estas etapas essenciais:

1. **[Configurar o Home Assistant](#setting-up-home-assistant)**: Comece instalando e configurando o Home Assistant para gerenciar seus dispositivos de casa inteligente, garantindo uma conexão perfeita com o sensor.
2. **[Conectar o sensor MR60FDA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprenda como descobrir e adicionar o sensor MR60FDA2 à sua configuração do Home Assistant, permitindo o monitoramento em tempo real dos sinais vitais.
3. **[Monitorar os dados do sensor](#sensor-data-monitoring)**: Uma vez integrado, você pode monitorar de forma eficaz os dados do sensor para verificar se ocorreu ou não uma queda.
4. **[Implementar automação](#implementing-automation-in-home-assistant)**: Explore os poderosos recursos de automação do Home Assistant para criar ações responsivas com base nos dados do sensor, aprimorando seu ambiente de casa inteligente.
5. **[Modificar o firmware com ESPHome](#modifying-the-firmware-with-esphome)**: Utilize o ESPHome para personalizar a funcionalidade do sensor, adaptando-o às suas necessidades específicas para maior flexibilidade e controle.

Essas etapas irão guiá-lo no uso da integração entre o sensor mmWave MR60FDA2 e o XIAO ESP32C6.

## Primeiros passos {#getting-started}

:::note Atenção
Observe que, quando nos referimos a atualizações ou modificações de firmware, estamos nos referindo especificamente ao firmware no XIAO ESP32C6.
:::

Para integrar com sucesso o sensor mmWave MR60FDA2 ao Home Assistant, você precisará dos seguintes componentes:

- **Home Assistant**: Uma plataforma de casa inteligente que irá gerenciar os dados do sensor.
- **Add-on ESPHome**: Firmware que permite configuração e gerenciamento fáceis de dispositivos ESP32.

### Etapa 1: Configurando o Home Assistant {#setting-up-home-assistant}

1. **Instalação**: Para desempenho ideal, é recomendado instalar o [Home Assistant OS](https://www.home-assistant.io/installation/) em uma Máquina Virtual ou Raspberry Pi. Siga o guia de instalação oficial no site do Home Assistant.
2. **Habilitando o add-on ESPHome**:
   - Acesse o painel do Home Assistant.
   - Navegue até a seção "Add-ons" e procure pelo add-on ESPHome.
   - Clique em "Install" e depois em "Start" para habilitá-lo.
   - Depois de instalado, configure o add-on para garantir a comunicação adequada com o XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

Reunindo os componentes necessários e configurando o Home Assistant com o add-on ESPHome, você estará pronto para prosseguir com a integração do sensor mmWave MR60FDA2.

:::tip instalar Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- [Primeiros passos com Home Assistant no ODYSSEY-X86](/pt-br/ODYSSEY-X86-Home-Assistant)
- [Primeiros passos com Home Assistant no reTerminal](/pt-br/reTerminal_Home_Assistant)
- [Primeiros passos com Home Assistant no LinkStar H68K/reRouter CM4](/pt-br/h68k-ha-esphome)
:::

### Etapa 2: Preparando o kit

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré-gravado com firmware para detecção de respiração e frequência cardíaca. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravar o firmware**: Se o firmware existente estiver corrompido ou se você precisar começar do zero.
2. **Atualizar o firmware**: Se houver uma versão mais recente do firmware com funcionalidade aprimorada.

Existem dois métodos simples para gravar o firmware:

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções na tela.

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases) (você precisará descompactar o arquivo baixado).

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

Acesse `192.168.4.1` para configurar as configurações de rede local do seu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Etapa 3: Descobrindo e adicionando o dispositivo no Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

Nesta seção, vamos passar pelo processo usando o aplicativo Home Assistant, onde a lógica é a mesma que na web.

1. **Abrir o aplicativo**: Depois de iniciar o aplicativo, selecione seu servidor Home Assistant. O aplicativo encontrará seu servidor automaticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Criar uma conta**: Se você ainda não criou uma conta, será necessário fazê-lo. Depois disso, faça login com suas credenciais.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegar até a página de Integrações**: Depois de fazer login, vá para a página "Integrations" no Home Assistant. Se você instalou o add-on ESPHome e tanto o XIAO ESP32C6 quanto o seu servidor Home Assistant estiverem na mesma rede, você deverá ver o dispositivo `Seeed Studio MR60FDA2 Kit {device-mac-address}` aparecer em dispositivos descobertos.
4. **Adicionar o dispositivo**: Clique para adicionar o dispositivo à sua configuração do Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Clique no botão `CONFIGURE`, confirme pressionando o botão `SUBMIT` e atribua o dispositivo à sua área preferida (por exemplo, Bathroom). Depois disso, o dispositivo será gerenciado por meio da sua integração ESPHome, permitindo controle total e monitoramento no Home Assistant.

  :::note
  Se a solicitação não exigir que você atribua uma área durante o processo de configuração, você pode atribuí-la manualmente mais tarde, navegando até a seção "Integrations" no Home Assistant, selecionando seu dispositivo e configurando a área a partir daí.
  :::

## Monitoramento e Controle {#monitoring-and-control}

Após concluir as etapas, você terá integrado e adicionado com sucesso o Sensor MR60FDA2 ao Home Assistant, permitindo o monitoramento.

### Monitoramento de dados do sensor

Nesta seção, o sensor é adicionado ao "Bathroom"; navegue até a guia "Overview". Você verá o cartão mmWave exibido na seção Bathroom.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Controle de luz RGB

Nesta seção, exploraremos como controlar uma luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Clique na caixa correspondente para controlar diretamente a luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Próximas etapas {#next-steps}

Agora que você integrou com sucesso o Sensor mmWave MR60FDA2 com o XIAO ESP32C6 e o Home Assistant, pode explorar melhorias adicionais para aproveitar ao máximo sua configuração. Aqui estão dois caminhos essenciais a considerar:

#### Implementando automações no Home Assistant

Os poderosos recursos de automação do Home Assistant permitem criar um ambiente de casa inteligente mais responsivo com base nos dados coletados do seu Sensor MR60FDA2. Isso significa que você pode configurar ações que ocorrem automaticamente com base em gatilhos específicos relacionados à detecção de movimento ou batimentos cardíacos.

Veja como implementar automações passo a passo:

1. **Navegue até a seção de Automations**: No painel do Home Assistant, encontre e clique na guia "Automations". Esta área é dedicada à criação e gerenciamento de ações automatizadas em sua casa.
2. **Crie uma nova automação**: Clique no botão "Add Automation". O Home Assistant oferece um assistente fácil de usar que orienta você no processo de configuração de uma automação.
3. **Defina o gatilho**: Escolha um gatilho com base nos dados do Sensor MR60FDA2. Por exemplo, você pode configurar a automação para ser acionada quando alguém cair. Isso significa que sua automação pode responder imediatamente às leituras do sensor.
4. **Defina condições (opcional)**: As condições permitem refinar quando a automação deve ser executada. Por exemplo, você pode querer que as luzes acendam apenas quando estiver escuro lá fora ou se um usuário específico estiver em casa.
5. **Determine a ação**: Especifique qual ação deve ocorrer quando as condições de gatilho forem atendidas. As ações podem incluir acender luzes, enviar notificações ou até ajustar configurações do termostato. Por exemplo, você pode criar uma ação que acenda uma luz RGB quando um movimento for detectado, aumentando tanto a segurança quanto o conforto.
6. **Salve e teste**: Depois de configurar sua automação, salve-a e teste sua funcionalidade. Passe em frente ao sensor para ver se as luzes acendem como esperado. Se surgir algum problema, você pode voltar às configurações da automação para solucionar e ajustar.

Ao aproveitar os recursos de automação do Home Assistant, você pode criar um ambiente verdadeiramente inteligente que responde aos seus movimentos e métricas de saúde, garantindo que seu espaço de convivência se adapte perfeitamente ao seu estilo de vida.

## Modificando o firmware com ESPHome

Uma das grandes vantagens de usar o XIAO ESP32C6 é sua compatibilidade com o ESPHome, uma ferramenta poderosa para gerenciar e personalizar o firmware do seu microcontrolador. Com o ESPHome, você pode modificar diretamente o firmware para adaptar a funcionalidade do Sensor mmWave MR60FDA2 às suas necessidades específicas.

Para começar com o ESPHome, siga estas etapas:

1. **Acesse o painel do ESPHome**: No Home Assistant, navegue até o add-on ESPHome. Você deverá ver o seu XIAO ESP32C6 listado entre os dispositivos.
2. **Crie uma nova configuração**: Clique no dispositivo para abrir sua configuração. Aqui, você pode ajustar configurações como a sensibilidade do sensor, intervalos de relatório e formatos de saída. O ESPHome usa um formato de configuração YAML, que é fácil de usar e permite definir vários parâmetros. Você pode usar o seguinte arquivo modelo YAML como ponto de partida para sua configuração, que foi projetado especificamente para o Sensor MR60FDA2:

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "2.1"
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf
        sdkconfig_options:
          CONFIG_FREERTOS_UNICORE: y
          CONFIG_FREERTOS_HZ: '1000'
          CONFIG_PM_USE_RTC_TIMER_REF: y
          CONFIG_XTAL_FREQ_40: y
          CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ: '80000000'
          CONFIG_PM_DFS_INIT_AUTO: n
          CONFIG_FREERTOS_USE_TICKLESS_IDLE: y
          CONFIG_PM_ENABLE: y
          CONFIG_PM_SLP_IRAM_OPT: y
          CONFIG_PM_RTOS_IDLE_OPT: y
          CONFIG_ESP_WIFI_SLP_IRAM_OPT: y
          CONFIG_PM_POWER_DOWN_CPU_IN_LIGHT_SLEEP: y
          CONFIG_PM_PROFILING: y

    external_components:
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
        channel_colors: GRB
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
4. **Envie o firmware atualizado**: Depois de fazer suas modificações, salve a configuração. O painel do ESPHome permite enviar o firmware diretamente pelo ar. Basta clicar no botão `Upload` e seguir as instruções para concluir o processo. Esse método simplificado facilita manter seu firmware sempre atualizado.
5. **Teste e itere**: Quando o envio estiver concluído, teste suas alterações em tempo real. Monitore o desempenho do sensor para garantir que ele opere conforme o esperado. Se encontrar algum problema, volte ao painel do ESPHome para refinar suas configurações. Essa abordagem iterativa permite melhorar continuamente seu firmware, garantindo que ele atenda de forma eficaz às suas necessidades.

Ao utilizar o ESPHome, você se capacita a fazer melhorias contínuas na configuração do seu sensor, adaptando-o às suas necessidades em evolução. Essa capacidade não apenas aprimora a funcionalidade do seu projeto, mas também oferece uma plataforma para aprendizado e experimentação com desenvolvimento de IoT.

Por meio dessas etapas, você pode maximizar a funcionalidade da sua configuração com o Sensor mmWave MR60FDA2 e o XIAO ESP32C6, transformando-a em um sistema de casa inteligente altamente personalizado e responsivo, adaptado às suas preferências e necessidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60FDA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
