---
title: Sensor de Respiração e Batimentos Cardíacos MR60BHA2 com Home Assistant
description: |
  Sensor mmWave de Batimentos Cardíacos MR60BHA2 com Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2025-10-20'
url: https://wiki.seeedstudio.com/pt-br/ha_with_mr60bha2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre o escopo de uso do radar no Home Assistant
As atualizações de firmware do RADAR e as atualizações do YAML do ESPHome são 2 softwares diferentes. O YAML do ESPHome pode ser atualizado por OTA, enquanto a placa RADAR só pode ser atualizada via USB dentro do case, com um software especializado fornecido pela SEEED. Você pode personalizar o software ESPHome, você [NÃO pode personalizar o firmware do RADAR](https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60bha2_mmwave_kit/#atualização-de-firmware-do-módulo). A Seeed Studio só permite personalização do RADAR se você estiver fazendo uma aplicação comercial.
:::

## Introdução {#introduction}

O MR60BHA2 é um módulo sensor de detecção de respiração e batimentos cardíacos mmWave de 60 GHz projetado para integração com o microcontrolador XIAO ESP32C6. Este sensor avançado utiliza tecnologia de ondas milimétricas para fornecer monitoramento não invasivo de sinais vitais e detecção de presença.

Este guia tem como objetivo fornecer um passo a passo claro e abrangente para integrar o Sensor mmWave MR60BHA2 ao Home Assistant usando o microcontrolador XIAO ESP32C6. Seguindo este guia, os usuários aprenderão como configurar o sensor para detecção de batimentos cardíacos, conectá‑lo ao ambiente Home Assistant e utilizar o ESPHome para gerenciar e monitorar o dispositivo de forma eficaz.

Essa integração permite que os usuários aprimorem seus sistemas de casa inteligente com capacidades avançadas de detecção, possibilitando respostas automatizadas e monitoramento em tempo real para diversas aplicações.

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## Visão geral do produto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60BHA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60BHA2 com XIAO ESP32C6

Para integrar de forma eficaz o Sensor mmWave MR60BHA2 com o Home Assistant usando o XIAO ESP32C6, siga estas etapas essenciais:

:::caution
Certifique‑se de ter [atualizado o firmware](/pt-br/getting_started_with_mr60bha2_mmwave_kit#atualização-de-firmware-do-módulo) do módulo MR60BHA2 para a versão mais recente.  
O firmware mais recente adiciona os recursos de detecção de presença humana e detecção de pessoas.
:::

1. **[Configurar o Home Assistant](#setting-up-home-assistant)**: Comece instalando e configurando o Home Assistant para gerenciar seus dispositivos de casa inteligente, garantindo uma conexão perfeita com o sensor.
2. **[Conectar o Sensor MR60BHA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprenda como descobrir e adicionar o Sensor MR60BHA2 à sua configuração do Home Assistant, permitindo o monitoramento em tempo real dos sinais vitais.
3. **[Monitorar os dados do sensor](#sensor-data-monitoring)**: Uma vez integrado, você poderá monitorar os dados do sensor de forma eficaz, permitindo obter insights sobre a frequência cardíaca e os padrões de respiração.
4. **[Implementar automações](#implementing-automation-in-home-assistant)**: Explore os poderosos recursos de automação do Home Assistant para criar ações responsivas com base nos dados do sensor, aprimorando seu ambiente de casa inteligente.
5. **[Modificar o firmware com ESPHome](#modifying-the-firmware-with-esphome)**: Utilize o ESPHome para personalizar a funcionalidade do sensor, adaptando‑o às suas necessidades específicas para maior flexibilidade e controle.

Essas etapas irão guiá‑lo durante o processo de integração, ajudando você a aproveitar ao máximo o seu Sensor mmWave MR60BHA2 e o conjunto com XIAO ESP32C6.

## Introdução {#getting-started}

:::note Atenção
Observe que, quando nos referimos a atualizações ou modificações de firmware, estamos nos referindo especificamente ao firmware no XIAO ESP32C6.
:::

Para integrar com sucesso o Sensor mmWave MR60BHA2 ao Home Assistant, você precisará dos seguintes componentes:

- **Home Assistant**: Uma plataforma de casa inteligente que irá gerenciar os dados do sensor.
- **Complemento ESPHome**: Firmware que permite configuração e gerenciamento fáceis de dispositivos ESP32.

### Etapa 1: Configurando o Home Assistant {#setting-up-home-assistant}

1. **Instalação**: Para desempenho ideal, é recomendado instalar o [Home Assistant OS](https://www.home-assistant.io/installation/) em uma Máquina Virtual ou Raspberry Pi. Siga o guia de instalação oficial no site do Home Assistant.
2. **Habilitando o complemento ESPHome**:
   - Acesse o painel do Home Assistant.
   - Navegue até a seção "Add-ons" e procure pelo complemento ESPHome.
   - Clique em "Install" e depois em "Start" para habilitá‑lo.
   - Depois de instalado, configure o complemento para garantir a comunicação adequada com o XIAO ESP32C6.

:::caution Atenção
Devido aos novos ícones, instale a versão 2024.12.0 ou superior do plugin ESPHome.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Reunindo os componentes necessários e configurando o Home Assistant com o complemento ESPHome, você estará pronto para prosseguir com a integração do Sensor mmWave MR60BHA2.

:::tip instalar Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte‑os.

- [Introdução ao Home Assistant no ODYSSEY-X86](/pt-br/ODYSSEY-X86-Home-Assistant)
- [Introdução ao Home Assistant no reTerminal](/pt-br/reTerminal_Home_Assistant)
- [Introdução ao Home Assistant no LinkStar H68K/reRouter CM4](/pt-br/h68k-ha-esphome)
:::

### Etapa 2: Preparando o kit

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré‑gravado com firmware para detecção de respiração e frequência cardíaca. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravar o firmware**: Se o firmware existente estiver corrompido ou você precisar começar do zero.
2. **Atualizar o firmware**: Se houver uma versão mais recente do firmware com funcionalidade aprimorada.

Existem dois métodos simples para gravar o firmware:

:::caution
O Firefox não oferece suporte à gravação de firmware em dispositivos ESP. Use o Google Chrome ou o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Web Tool](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções na tela.

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas exibidas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases) (você precisará descompactar o arquivo baixado).

1. Conecte o kit do sensor ao seu PC.
2. Visite a página do [ESPHome Web](https://web.esphome.io/).
3. Selecione o arquivo de firmware com o sufixo `*.factory.bin`.

Assista ao vídeo a seguir para um passo a passo detalhado de como gravar o firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Com qualquer um dos métodos, você terá seu firmware atualizado e pronto para integração com o Home Assistant.

#### Conectar ao hotspot do kit

Com o firmware, você pode ligar o kit do sensor, e um ponto de acesso Wi‑Fi aparecerá: `seeedstudio-mr60bha2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Acesse `192.168.4.1` para configurar as definições de rede local do seu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Etapa 3: Descobrindo e adicionando o dispositivo no Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

Nesta seção, vamos passar pelo processo usando o aplicativo Home Assistant, onde a lógica é a mesma que na web.

1. **Abra o aplicativo**: Depois de iniciar o aplicativo, selecione o seu servidor Home Assistant. O aplicativo encontrará seu servidor automaticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crie uma conta**: Se você ainda não criou uma conta, será necessário fazê‑lo. Depois disso, faça login com suas credenciais.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegue até a página de Integrações**: Depois de fazer login, vá para a página "Integrations" no Home Assistant. Se você instalou o complemento ESPHome e tanto o XIAO ESP32C6 quanto o seu servidor Home Assistant estiverem na mesma rede, você deverá ver o dispositivo `Seeed Studio MR60BHA2 Kit {device-mac-address}` aparecer em dispositivos descobertos.
4. **Adicione o dispositivo**: Clique para adicionar o dispositivo à sua configuração do Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Clique no botão `CONFIGURE`, confirme pressionando o botão `SUBMIT` e atribua o dispositivo à sua área preferida (por exemplo, Quarto). Depois disso, o dispositivo será gerenciado por meio da sua integração ESPHome, permitindo controle total e monitoramento no Home Assistant.

## Monitoramento e Controle {#monitoring-and-control}

Seguindo as etapas acima, você terá descoberto e adicionado com sucesso o Sensor MR60BHA2 ao seu Home Assistant, permitindo monitoramento e controle em tempo real.

### Monitoramento de dados do sensor

Agora que o sensor foi adicionado ao "Bedroom", navegue até a aba "Overview". Você verá o cartão mmWave exibido na seção Bedroom.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Controle de luz RGB

Nesta seção, vamos explorar como controlar uma luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Clique na caixa correspondente para controlar diretamente a luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### Próximas etapas {#next-steps}

Agora que você integrou com sucesso o Sensor mmWave MR60BHA2 com o XIAO ESP32C6 e o Home Assistant, pode explorar melhorias adicionais para aproveitar ao máximo sua configuração. Aqui estão dois caminhos essenciais a considerar:

#### Implementando automações no Home Assistant

Os poderosos recursos de automação do Home Assistant permitem criar um ambiente de casa inteligente mais responsivo com base nos dados coletados pelo seu Sensor MR60BHA2. Isso significa que você pode configurar ações que ocorrem automaticamente com base em gatilhos específicos relacionados à detecção de movimento ou batimentos cardíacos.

Veja como implementar automações passo a passo:

1. **Navegue até a seção de Automations**: No painel do Home Assistant, encontre e clique na aba "Automations". Esta área é dedicada à criação e gerenciamento de ações automatizadas na sua casa.
2. **Crie uma nova automação**: Clique no botão "Add Automation". O Home Assistant oferece um assistente amigável que o orienta no processo de configuração de uma automação.
3. **Defina o gatilho (Trigger)**: Escolha um gatilho com base nos dados do Sensor MR60BHA2. Por exemplo, você pode configurar a automação para disparar quando o sensor detectar movimento ou um padrão específico de batimentos cardíacos. Isso significa que sua automação pode responder imediatamente às leituras do sensor.
4. **Defina condições (opcional)**: As condições permitem refinar quando a automação deve ser executada. Por exemplo, você pode querer que as luzes acendam apenas quando estiver escuro lá fora ou se um usuário específico estiver em casa.
5. **Determine a ação**: Especifique qual ação deve ocorrer quando as condições de gatilho forem atendidas. As ações podem incluir acender luzes, enviar notificações ou até ajustar configurações do termostato. Por exemplo, você pode criar uma ação que acenda uma luz RGB quando for detectado movimento, aumentando tanto a segurança quanto o conforto.
6. **Salve e teste**: Depois de configurar sua automação, salve-a e teste sua funcionalidade. Passe em frente ao sensor para ver se as luzes acendem como esperado. Se surgir algum problema, você pode voltar às configurações da automação para solucionar e ajustar.

Aproveitando os recursos de automação do Home Assistant, você pode criar um ambiente verdadeiramente inteligente que responde aos seus movimentos e métricas de saúde, garantindo que seu espaço de convivência se adapte perfeitamente ao seu estilo de vida.

## Modificando o firmware com ESPHome

Uma das grandes vantagens de usar o XIAO ESP32C6 é sua compatibilidade com o ESPHome, uma ferramenta poderosa para gerenciar e personalizar o firmware do seu microcontrolador. Com o ESPHome, você pode modificar diretamente o firmware para adaptar a funcionalidade do Sensor mmWave MR60BHA2 às suas necessidades específicas.

Para começar com o ESPHome, siga estas etapas:

1. **Acesse o painel do ESPHome**: No Home Assistant, navegue até o add-on ESPHome. Você deverá ver o seu XIAO ESP32C6 listado entre os dispositivos.

2. **Crie uma nova configuração**: Clique no dispositivo para abrir sua configuração. Aqui, você pode ajustar configurações como a sensibilidade do sensor, intervalos de relatório e formatos de saída. O ESPHome usa um formato de configuração YAML, que é fácil de usar e permite definir vários parâmetros. Você pode usar o seguinte arquivo modelo YAML como ponto de partida para sua configuração, que foi projetado especificamente para o Sensor MR60BHA2:

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.6"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2026.8.0"


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    # It is highly recommended to use secrets
    wifi:
      ssid: !secret wifi_ssid
      password: !secret wifi_password

      ap:
        ssid: "seeedstudio-mr60bha2"


    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15


    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60BHA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        channel_colors: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    uart:
      id: uart_bus
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60bha2:
      id: my_seeed_mr60bha2

    binary_sensor:
      - platform: seeed_mr60bha2
        has_target:
          name: "Person Information"

    sensor:
      - platform: bh1750
        name: "Seeed MR60BHA2 Illuminance"
        address: 0x23
        update_interval: 1s
      - platform: seeed_mr60bha2
        breath_rate:
          name: "Real-time respiratory rate"
        heart_rate:
          name: "Real-time heart rate"
        distance:
          name: "Distance to detection object"
        num_targets:
          name: "Target number"
  ```

3. **Personalize a funcionalidade**: Você pode aprimorar as capacidades do sensor explorando vários recursos disponíveis no ESPHome, permitindo ajustes flexíveis para atender às suas necessidades específicas.

4. **Envie o firmware atualizado**: Depois de fazer suas modificações, salve a configuração. O painel do ESPHome permite enviar o firmware diretamente pelo ar (OTA). Basta clicar no botão `Upload` e seguir as instruções para concluir o processo. Esse método simplificado facilita manter seu firmware sempre atualizado.

5. **Teste e itere**: Quando o envio estiver concluído, teste suas alterações em tempo real. Monitore o desempenho do sensor para garantir que ele opere conforme o esperado. Se encontrar algum problema, volte ao painel do ESPHome para refinar suas configurações. Essa abordagem iterativa permite melhorar continuamente seu firmware, garantindo que ele atenda de forma eficaz às suas necessidades.

Ao utilizar o ESPHome, você se capacita a fazer melhorias contínuas na sua configuração de sensor, adaptando-a às suas necessidades em evolução. Essa capacidade não apenas aprimora a funcionalidade do seu projeto, como também oferece uma plataforma para aprendizado e experimentação com desenvolvimento em IoT.

Por meio dessas etapas, você pode maximizar a funcionalidade da sua configuração com o Sensor mmWave MR60BHA2 e o XIAO ESP32C6, transformando-a em um sistema de casa inteligente altamente personalizado e responsivo, adaptado às suas preferências e necessidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60BHA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60bha2-kit)

## Solução de problemas

### Explicação do mecanismo de relatório de dados do sensor de radar (para v1.6.12 e posteriores)

Esta parte detalha o tempo, a precisão e as condições necessárias para os dados relatados pelas várias funções de detecção do sensor de radar. Ela tem como objetivo ajudar os usuários a entender e utilizar melhor os dados do sensor.

---

### 1. Presença humana estática

- **Descrição da função**:
    Detecta a presença de um alvo humano estacionário dentro de uma área especificada.
- **Parâmetro principal**:
  - **Faixa efetiva de detecção**: Até **4 metros**.
- **Lógica de relatório de dados**:
  - Reporta um status de "Presence" quando um alvo humano é detectado na área.
  - Reporta um status de "No Presence" quando a área está livre de alvos humanos.
  - **Observação**: A faixa de detecção de 4 metros é exclusiva da função de Presença Humana Estática. Ela não se aplica a outros recursos, como Detecção de Respiração e Batimentos Cardíacos ou Detecção de Distância do Alvo, que possuem suas próprias faixas efetivas, mais curtas. O único propósito desta função é determinar presença ou ausência, não fornecer dados detalhados.

---

### 2. Detecção de Respiração e Batimentos Cardíacos

- **Descrição da função**:
    Realiza detecção não contatual de sinais vitais em um único alvo humano estacionário.
- **Parâmetros principais**:
  - **Faixa efetiva de detecção**: Aproximadamente **1,5 metro**.
  - **Alvo de detecção**: Um único ser humano estacionário.
- **Condições necessárias de operação**:
  - **Imobilidade do alvo**: A pessoa monitorada deve permanecer completamente imóvel.
  - **Estabilidade do dispositivo**: O dispositivo de radar deve estar firmemente fixado, sem trepidação ou vibração.
  - **Alvo único**: Apenas uma pessoa deve estar dentro da faixa de detecção.
- **Lógica de envio de dados**:
  - **Envio normal**: Quando todas as condições acima são atendidas, o radar envia em tempo real os valores de respiração e frequência cardíaca.
  - **Cenários de envio anormal**:
    - **Alvo além de 1,5 m**: Quando um alvo detectado está além da faixa efetiva de 1,5 metro, os dados de respiração e frequência cardíaca **param de ser atualizados** e permanecem no último valor válido medido.
    - **Nenhum alvo na zona central**: Quando nenhum alvo é detectado dentro da zona central de detecção de 0,5 a 1,5 metro, os valores de respiração e frequência cardíaca serão ativamente reportados como **0**.
- **Observação**: Esteja atento à interferência ambiental. Micromovimentos de fontes como ventiladores, aparelhos de ar-condicionado ou cortinas balançando podem às vezes ser interpretados incorretamente pelo sensor. Nesses casos, o radar pode reportar um valor de **frequência cardíaca** diferente de zero mesmo quando nenhum alvo humano é detectado (e a taxa de respiração é reportada como 0).

---

### 3. Detecção de Distância do Alvo

- **Firmware aplicável**: `1.6.10` e mais recente.
- **Descrição da função**:
    Detecta e reporta a distância em linha reta entre o radar e um alvo.
- **Parâmetro principal**:
  - **Faixa máxima efetiva de detecção**: **5 metros**.
- **Lógica de envio de dados e limitações**:
  - **Estado sem alvo**: Quando nenhum alvo é detectado, o valor de distância é reportado como **0**.
  - **Alvo(s) detectado(s)**: Quando um ou mais alvos são detectados dentro da faixa de 5 metros, o radar reporta a distância do alvo **mais próximo** do sensor.
  - **Dados não atualizados (mantém o último valor)**: O valor de distância deixará de ser atualizado se o alvo mais próximo estiver ou se mover além da faixa efetiva de detecção de 5 metros. Nesse caso, o valor será mantido no último valor válido medido.
- **Desempenho de rastreamento**:
    Para garantir a estabilidade de alvos estacionários em curta distância, a estratégia de rastreamento do radar é otimizada para diferentes distâncias. O desempenho é detalhado na tabela abaixo:

| Faixa de distância | Estado do alvo | Desempenho de rastreamento e observações |
| :--- | :--- | :--- |
| **0,5 m ~ 1,5 m** | Estacionário | **Taxa de sucesso de rastreamento > 96%**. O desempenho é muito estável. |
| **1,5 m ~ 3 m** | Estacionário | **Taxa de sucesso de rastreamento > 90%**. O desempenho é estável. |
| **3 m ~ 5 m** | Estacionário | A estabilidade de rastreamento diminui, com perda ocasional do alvo. A versão 1.6.12 apresenta uma melhoria de 80% em relação às versões anteriores. |
| **Aproximando-se** | Em movimento | Quando um alvo se move em direção ao radar a partir de uma distância maior, o rastreamento estável normalmente começa quando a pessoa atinge aproximadamente **3 metros**. |
| **Afastando-se** | Em movimento | Quando um alvo se afasta do radar, o rastreamento pode se estender **além de 5 metros**. |

---

### 4. Contagem de Ocupantes no Ambiente

- **Descrição da função**:
    Fornece uma contagem preliminar e estimada de indivíduos dentro da área de detecção.
- **Explicação dos dados**:
  - Esta função está atualmente em fase de desenvolvimento e deve ser considerada experimental. O valor retornado é uma estimativa aproximada derivada de uma análise complexa de sinais.
  - Sua precisão é fortemente influenciada por fatores como sobreposição de sinais de várias pessoas, posturas individuais e padrões de movimento.
  - Consequentemente, **este recurso não é adequado para aplicações que dependem de números precisos de ocupantes**.
  - Estamos trabalhando ativamente no aprimoramento do algoritmo subjacente e esperamos oferecer melhorias substanciais de precisão em futuras versões de firmware.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
