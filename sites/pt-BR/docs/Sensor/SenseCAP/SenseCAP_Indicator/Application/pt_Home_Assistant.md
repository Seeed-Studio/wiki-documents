---
description: SenseCAP Indicator - Desenvolvimento de Aplicativo para Home Assistant
title: Home Assistant - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Home Assistant
  - ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /SenseCAP_Indicator_Application_Home_Assistant
sku: E23010426,E24121301
sidebar_position: 1
last_update:
  date: 10/09/2024
  author: Spencer
createdAt: '2023-05-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Application_Home_Assistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Desenvolvimento de Aplicativo para Home Assistant

## Introdução

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Adquira Agora 🖱️
</a>
</div>

Liberte todo o potencial da sua casa inteligente integrando o SenseCAP Indicator ao Home Assistant. Essa combinação poderosa permite monitorar e controlar seu ambiente com uma facilidade sem precedentes.

Aprenda como integrar perfeitamente seu SenseCAP Indicator ao Home Assistant usando MQTT neste guia abrangente.

Antes de começarmos, vamos explorar suas opções para configurar o Home Assistant. O Home Assistant pode ser facilmente instalado em duas opções de hardware dedicadas:

:::note
Com certeza, você tem várias opções para instalar o HA seguindo [Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/).
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> O acessível **[Home Assistant Green](https://www.home-assistant.io/green)** é a maneira mais fácil de começar a usar o Home Assistant. Ele é plug-and-play e vem com o Home Assistant já instalado.

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> O **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** vem pré-montado em um gabinete personalizado com um Raspberry Pi Compute Module 4 (CM4) e um dissipador de calor customizado para operação silenciosa, sem ventoinha. O CM4 é uma versão sem wireless e possui 2 GB de RAM e 16 GB de armazenamento eMMC. Vem com o Home Assistant pré-instalado.

</TabItem>
</Tabs>

Para maximizar os recursos do Home Assistant, recomendamos usar Home Assistant OS ou Home Assistant Supervised. Ambas as opções oferecem recursos avançados e maior possibilidade de personalização, permitindo que você adapte sua experiência de casa inteligente exatamente às suas necessidades.

Agora, vamos começar o processo de integração. Siga estas três etapas principais para fazer seu SenseCAP Indicator funcionar com o Home Assistant:

1. [Instalar o Home Assistant OS](#install_HA)
   1. [Instalar Add-ons](#mqtt-addons)
   2. [Configurar a Integração MQTT](#mqtt-integration)
2. [Compilar e Gravar o Firmware](#build-flash-firmware)
3. [Adicionar Dispositivos MQTT](#add-mqtt-devices)
4. [Configurar um Dashboard](#set-up-dashboard)

## Pré-requisitos

Antes de começarmos, certifique-se de ter lido o [Guia do Usuário](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) da SenseCAP Indicator Board para se familiarizar com as informações de hardware e software.

## Instalar Home Assistant OS {#install_HA}

> Home Assistant é uma poderosa plataforma de automação residencial de código aberto que se concentra em privacidade e controle local. Ela oferece uma estrutura personalizável e flexível para gerenciar e automatizar todos os dispositivos da sua casa a partir de uma única plataforma unificada.

Com o **Home Assistant Yellow** você pode seguir as instruções fornecidas [aqui](https://www.home-assistant.io/installation/yellow). Além disso, para executar em qualquer tipo de Raspberry Pi ou em um servidor local, você pode seguir este [tutorial](https://www.home-assistant.io/installation/) passo a passo.

Depois de instalado, acessar esta página significa que você pode ir para o próximo passo.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip Não sabe como fazer o onboarding do Home Assistant?
Depois de instalar o Home Assistant, consulte [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) para mais detalhes.
:::

### Passo 1: Instalar Add-ons {#mqtt-addons}

:::caution Recurso de Add-ons necessário
O Home Assistant Yellow vem com o **Home Assistant Operating System**, que permite instalar Add-ons facilmente. No entanto, o **Home Assistant Container** não suporta Add-ons, o que significa que você precisa instalar um aplicativo de broker MQTT separado do Home Assistant. Para mais detalhes, consulte os [métodos de instalação](https://www.home-assistant.io/installation/#compare-installation-methods).
:::

O próximo passo é instalar o **Mosquitto Broker** e o **File Editor**. O **Mosquitto** é um broker de mensagens open source que implementa o protocolo MQTT, enquanto o **File Editor** permite modificar o arquivo `configuration.yaml` sem acessar o terminal.

No Home Assistant Yellow, você pode instalar o Mosquitto Broker e o File Editor usando o recurso de Add-ons.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Para conveniência, mostre o 'File editor' na barra lateral:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

Agora temos dois add-ons.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Passo 2: Configurar a Integração MQTT {#mqtt-integration}

MQTT (Message Queuing Telemetry Transport) é um protocolo de mensagens leve que é fundamental para conectar sua SenseCAP Indicator Board ao Home Assistant. Para habilitar essa funcionalidade, você precisa adicionar a [integração MQTT](https://www.home-assistant.io/integrations/mqtt) à sua configuração do Home Assistant.

> Adicionar a integração MQTT permite que o Home Assistant se comunique perfeitamente com sua SenseCAP Indicator Board, possibilitando troca de dados e controle em tempo real. Essa comunicação bidirecional é essencial para monitorar dados de sensores e enviar comandos para o seu dispositivo.

Para configurar a integração MQTT:

1. No painel do Home Assistant, vá até a página Integrations (`Devices & Services` -> `Integrations`).
2. Procure por "MQTT" e selecione-o na lista. (Se não for descoberto automaticamente,)
3. Siga as instruções na tela para concluir a configuração.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Se você estiver usando um broker MQTT não oficial (como o EMQX Broker) em vez do broker Mosquitto padrão, a descoberta automática pode não funcionar. Nesse caso, você precisará inserir manualmente o endereço IP do broker para estabelecer a conexão. Isso garante que o Home Assistant possa se comunicar com sua configuração MQTT personalizada.
:::

### Adicionar Usuários para o Add-on MQTT

Ao usar o add-on oficial Mosquitto Broker no Home Assistant, talvez seja necessário configurar credenciais para a conexão MQTT. Essa etapa garante uma comunicação segura entre seus dispositivos e o Home Assistant. Veja como adicionar um usuário:

1. Navegue até o add-on Mosquitto broker na interface do Home Assistant.
2. Procure pela seção ou aba "Users" dentro da configuração do add-on.
3. Clique no botão "Add User" ou "+" para criar um novo usuário.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT default credential - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. No formulário de criação de usuário:
   - Insira um nome de usuário de sua escolha. o padrão é `indicator-usr`[^ref].
   - Crie uma senha forte. o padrão é `indicator-password`.
   - Opcionalmente, você pode definir permissões específicas, se necessário.
5. Salve as novas credenciais de usuário.

:::tip
Certifique-se de usar essas credenciais ao configurar seu SenseCAP Indicator ou qualquer outro dispositivo MQTT para se conectar ao Home Assistant.
:::

Depois de adicionar o usuário, talvez seja necessário reiniciar o add-on Mosquitto broker para que as alterações entrem em vigor. Agora você já deve conseguir estabelecer uma conexão MQTT segura usando essas credenciais.

Lembre-se de atualizar as configurações MQTT do seu SenseCAP Indicator com o novo nome de usuário e senha para garantir que ele possa se comunicar com o Home Assistant.

## Configurando o Projeto SenseCAP Indicator ESP32 {#build-flash-firmware}

Antes de integrar o seu SenseCAP Indicator com o Home Assistant, você precisa configurar o dispositivo com o firmware apropriado. Siga estes passos para baixar, compilar e gravar o projeto no seu SenseCAP Indicator.

### Etapa 1: Baixar o Projeto

Existem dois projetos disponíveis para integrar o SenseCAP Indicator com o Home Assistant. Escolha o que melhor atender às suas necessidades:

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

Este projeto é especificamente projetado para integração com o Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obter o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

Ou use Git para clonar o repositório:

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem>
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

Este projeto inclui mais exemplos e recursos para o SenseCAP Indicator.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obter o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

Ou use Git para clonar o repositório:

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem>
</Tabs>

### Etapa 2: Navegar até o Diretório do Projeto

Depois de ter baixado ou clonado o projeto, navegue até o diretório apropriado:

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha">

```bash
cd sensecap-indicator-ha
```

</TabItem>
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

```bash
cd SenseCAP_Indicator_ESP32/examples/indicator_ha
```

</TabItem>
</Tabs>

### Etapa 3: Compilar, Gravar e Monitorar o Projeto

Agora você está pronto para compilar o firmware, gravá-lo no seu SenseCAP Indicator e monitorar a saída do dispositivo. Use o seguinte comando:

```bash
idf.py -p PORT build flash monitor
```

Substitua `PORT` pela porta apropriada para o seu dispositivo (por exemplo, `COM3` no Windows ou `/dev/ttyUSB0` no Linux).

:::tip
Se você não tiver certeza sobre a porta do seu dispositivo:

- No Windows: Verifique o Gerenciador de Dispositivos em "Ports (COM & LPT)"
- No Linux/macOS: Execute `ls /dev/tty*` no terminal

:::

Este comando irá:

1. Compilar o projeto
2. Gravar o firmware no seu SenseCAP Indicator
3. Abrir um monitor serial para exibir a saída do dispositivo

Para sair do monitor serial, pressione `Ctrl-]`.

### Etapa 4: Verificar a Configuração

Depois de gravar o firmware, o monitor serial exibirá a saída do seu SenseCAP Indicator. Procure por mensagens indicando conexão bem-sucedida à sua rede Wi-Fi e ao broker MQTT.

:::caution
Certifique-se de que o seu SenseCAP Indicator esteja conectado à mesma rede que a sua instância do Home Assistant e que o seu broker MQTT esteja devidamente configurado e acessível.
:::

Depois de gravar e verificar com sucesso o firmware no seu SenseCAP Indicator, você estará pronto para prosseguir com a integração dele ao Home Assistant usando a integração MQTT.

Em seguida, vamos configurar o Home Assistant para reconhecer e se comunicar com o seu SenseCAP Indicator.

## Adicionar Dispositivos MQTT {#add-mqtt-devices}

Depois de configurar a integração MQTT no Home Assistant, o próximo passo é adicionar dispositivos MQTT. Esse processo envolve configurar o Home Assistant para reconhecer e se comunicar com a sua SenseCAP Indicator Board por meio de MQTT.

### Etapa 1: Adicionar Entidades do Indicator

Para adicionar as entidades do SenseCAP Indicator ao Home Assistant, você precisa modificar o arquivo `configuration.yaml`. Este arquivo é crucial para definir como o Home Assistant interage com seus dispositivos.

:::tip
Se você estiver usando o Home Assistant Yellow ou qualquer sistema com o complemento **File editor**, poderá facilmente modificar o arquivo `configuration.yaml` pela interface web. Para outras configurações, como o Home Assistant Container, talvez seja necessário modificar o arquivo via acesso ao terminal.
:::

Para modificar o arquivo `configuration.yaml`:

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. Navegue até o complemento File editor no painel do Home Assistant.
2. Selecione o arquivo `configuration.yaml` na lista de arquivos.
3. Adicione a seguinte configuração MQTT ao arquivo:

<details>
<summary>Clique para expandir e copiar a configuração MQTT para o SenseCAP Indicator</summary>

```yaml
# Example configuration.yaml entry | SenseCAP Indicator MQTT Configuration
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

1. Salve as alterações no arquivo `configuration.yaml`.

:::caution
Se a sua instalação do Home Assistant não oferece suporte a add-ons (por exemplo, Home Assistant Container), você precisará modificar o arquivo `configuration.yaml` por meio de um terminal ou conexão SSH.
:::

### Etapa 2: Aplicando as alterações de configuração

Após modificar o arquivo `configuration.yaml`, você precisa aplicar as alterações:

1. Navegue até `Developer Tools` no painel do Home Assistant.
2. Encontre e clique na aba "YAML".
3. Recarregue a configuração por `ALL YAML CONFIGURATION`.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Configuração YAML em Developer Tools"/></div>

:::note
se algo der errado, você pode

- Clicar no botão "Check Configuration" para verificar suas alterações.
- Se a verificação da configuração for aprovada, clique no botão "Restart" para aplicar a nova configuração.

Após reiniciar, o Home Assistant reconhecerá as entidades do seu SenseCAP Indicator, e você deverá conseguir vê-las no seu painel. Se as entidades não aparecerem imediatamente, talvez seja necessário aguardar alguns minutos para que o processo de descoberta MQTT seja concluído.

Lembre-se de garantir que o seu SenseCAP Indicator esteja devidamente configurado para publicar seus dados nos tópicos MQTT corretos, conforme definido na configuração.
:::

Seguindo estas etapas, você adicionou com sucesso seus dispositivos SenseCAP Indicator ao Home Assistant via MQTT. Agora você pode usar essas entidades em suas automações, scripts e painel para uma experiência de casa inteligente mais integrada.

## Configurar Dashboard {#set-up-dashboard}

A etapa final na integração do seu SenseCAP Indicator com o Home Assistant é configurar um painel personalizado. Isso permitirá que você visualize e controle com facilidade os dados e funções do seu dispositivo.

### Criando um novo painel (Opcional)

Se você quiser criar um painel dedicado para o seu SenseCAP Indicator:

1. Navegue até `Settings -> Dashboards` na barra lateral do Home Assistant.
2. Clique no botão "Add Dashboard".
3. Defina um título (por exemplo, "SenseCAP Indicator") e escolha um ícone.
4. Clique em "Create" para finalizar o novo painel.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Criar Painel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="Novo Painel"/></div></td>
    </tr>
  </table>
</div>

### Configurando o painel

Para adicionar entidades do SenseCAP Indicator ao seu painel:

1. Abra o painel que você quer editar.
2. Clique no menu de três pontos no canto superior direito e selecione "Edit Dashboard".
3. Clique no botão "TAKE CONTROL" para habilitar a configuração manual.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Editar Painel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Assumir Controle"/></div></td>
    </tr>
  </table>
</div>

4. No editor de painel, clique novamente no menu de três pontos e selecione "Raw configuration editor".
5. Substitua o conteúdo YAML existente pela seguinte configuração:

<details>

<summary>Clique para copiar o YAML do Painel para alterar a interface</summary>

> Observação: Isto não é para `Configuration.YAML`.

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

:::caution
Esta configuração YAML é especificamente para o painel e não deve ser adicionada ao seu arquivo `configuration.yaml`.
:::

1. Clique em "SAVE" para aplicar as alterações.

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Editor de Configuração Bruta"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Salvar Configuração"/></div>
         </td>
      </tr>
   </table>
</div>

Parabéns! Você configurou com sucesso o painel do Home Assistant para exibir e controlar o seu SenseCAP Indicator. Agora você pode monitorar níveis de CO2, temperatura, umidade e TVOC, bem como controlar vários interruptores diretamente na interface do Home Assistant.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Recursos

1. **Demo SDK**: O Demo SDK para o SenseCAP Indicator está disponível no [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. Arquivo **`indicator_ha.c`**: Este arquivo contém as funções principais para a integração com o Home Assistant. Você pode vê-lo [aqui](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).
3. **Guia do Usuário**: O Guia do Usuário fornece informações detalhadas sobre o software e o hardware da SenseCAP Indicator Board. Você pode lê-lo [aqui](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
4. **Guia de Instalação do Home Assistant**: Se você é novo no Home Assistant, este guia ajudará você a instalá-lo e configurá-lo. Você pode encontrá-lo [aqui](https://www.home-assistant.io/installation/).
5. **Guia de Introdução ao ESP-IDF**: Este guia fornece todas as etapas para configurar e usar o ESP-IDF para construir projetos. Você pode acessá-lo [aqui](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
6. [Conceitos e terminologia do Home Assistant](https://www.home-assistant.io/getting-started/concepts-terminology/)

## Referência

- 🔗 **[Link]** [Home Assistant and MQTT: 4 Things You Could Build | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## Suporte Técnico

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

Se você encontrar algum problema ou tiver dúvidas enquanto segue este tutorial, sinta-se à vontade para entrar em contato com o nosso suporte técnico. Estamos sempre aqui para ajudar!

Visite o nosso [Canal Oficial da Seeed no Discord](https://discord.gg/kpY74apCWj) para fazer suas perguntas ou as [discussões no GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartilhar tudo o que você quiser!
