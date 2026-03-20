---
title: Módulo Relé Wi-Fi de 6 Canais no Home Assistant
description: |
  Um dispositivo inteligente da Seeed Studio projetado para controlar dispositivos sem fio com tensão DC segura.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /6_channel_wifi_relay
sku: 114993588
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 01/04/2025
createdAt: '2025-01-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/6_channel_wifi_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros passos com o Módulo Relé Wi-Fi de 6 Canais no Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

## Visão geral

O **[Módulo Relé Wi-Fi de 6 Canais](https://www.seeedstudio.com/)** é um dispositivo inteligente da Seeed Studio projetado para controle dentro de uma faixa segura de tensão DC, não para aparelhos alimentados por AC. Sua configuração de seis canais suporta controle independente de até seis cargas, tornando-o uma excelente escolha para automatizar uma variedade de dispositivos em ambientes de casa inteligente.

Além de seus seis canais de relé, este módulo também possui duas interfaces de expansão Grove extras, permitindo que os usuários integrem sensores ou atuadores adicionais para cenários de automação mais avançados.

Este guia fornece um passo a passo detalhado, incluindo configuração, integração e configuração avançada para usuários que vão desde iniciantes até entusiastas de casas inteligentes.

### Principais recursos e especificações

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>Recurso</th>
            <th>Detalhes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Tensão de entrada</th>
            <td>DC 5V(For XIAO)</td>
        </tr>
        <tr>
            <th>Tensão DC suportada</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>Carga máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canais</th>
            <td>6 (controle independente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de conexão</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Porta elétrica</th>
            <td>NO (Normalmente Aberto), COM (Comum), NC (Normalmente Fechado)</td>
        </tr>
        <tr>
            <th>Extensão Grove</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Aviso de segurança

Este módulo relé foi projetado para operação em baixa tensão DC. Não o conecte à alimentação AC para evitar riscos elétricos. Sempre desconecte a fonte de alimentação antes de fazer a fiação do relé para evitar curtos-circuitos e choques elétricos.

Tensões superiores a 24V podem causar choque elétrico ou queimaduras, especialmente em casos de pele lesionada ou em ambientes úmidos. Tenha cuidado ao manusear dispositivos elétricos para evitar ferimentos.

:::

### Layout físico e conexões

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normalmente Aberto)**: O terminal normalmente aberto. Por padrão, este terminal não está conectado ao terminal comum (COM). Quando o relé é acionado, o terminal NO conecta-se ao terminal COM. Ele é normalmente usado para controlar o interruptor de uma carga.
- **COM (Comum)**: O terminal comum do relé, compartilhado como ponto de conexão de um lado do circuito.
- **NC (Normalmente Fechado)**: O terminal normalmente fechado. Por padrão, este terminal está conectado ao terminal comum (COM). Quando o relé é acionado, a conexão entre o terminal NC e o terminal COM é interrompida. Ele é normalmente usado para cenários que exigem controle de desligamento.

   | XIAO GPIO | Canal do relé |
   | --------- | ------------- |
   | GPIO2     | Relé 1        |
   | GPIO21    | Relé 2        |
   | GPIO1     | Relé 3        |
   | GPIO0     | Relé 4        |
   | GPIO19    | Relé 5        |
   | GPIO18    | Relé 6        |

## Primeiros passos

### Requisitos

1. **Componentes principais**:
   - [Módulo Relé Wi-Fi de 6 Canais](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Rede**:
   - Wi-Fi estável para interação contínua entre o hardware e o Home Assistant.

### Etapa 1: Configurando o Home Assistant {#setting-up-home-assistant}

1. **Instalação**: o homeassistant já vem pré-instalado no [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitando o complemento ESPHome**:
   - Acesse o painel do Home Assistant.
   - Navegue até a seção "Add-ons" e procure pelo complemento ESPHome.
   - Clique em "Install" e depois em "Start" para habilitá-lo.
   - Depois de instalado, configure o complemento para garantir a comunicação adequada com o XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Reunindo os componentes necessários e configurando o Home Assistant com o complemento ESPHome, você estará pronto para prosseguir com a integração do módulo relé de 6 canais.

### Etapa 2: Preparando o módulo relé

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré-gravado com firmware para o relé de 6 canais. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravação do firmware**: se o firmware existente estiver corrompido ou você precisar começar do zero.
2. **Atualização do firmware**: se houver uma versão mais recente do firmware com funcionalidade aprimorada.

Existem dois métodos simples para gravar o firmware:

:::caution
O Firefox não oferece suporte à gravação de firmware em dispositivos ESP. Use o Google Chrome ou o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções na tela.

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases) (você precisará descompactar o arquivo baixado).

1. Conecte o kit de sensor ao seu PC.
2. Visite a página [ESPHome Web](https://web.esphome.io/).
3. Selecione o arquivo de firmware com o sufixo `*.factory.bin`.

Assista ao vídeo a seguir para um passo a passo detalhado da gravação do firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Com qualquer um dos métodos, você terá seu firmware atualizado e pronto para integração com o Home Assistant.

### Etapa 3: Configuração de rede

1. **Habilitar ponto de acesso**:
   - Ao ser energizado pela primeira vez, o módulo criará uma rede Wi-Fi (SSID: `seeedstudio-6-channel-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acessar a configuração**:
   - Conecte-se à rede usando um telefone ou PC.
   - Abra um navegador e acesse [http://192.168.4.1](http://192.168.4.1).
   - Insira o SSID e a senha da sua rede Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integração com o Home Assistant**:
   - Depois de conectado à rede doméstica, o módulo poderá ser descoberto no Home Assistant em `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Dessa forma, você pode conectar o módulo à sua rede do Home Assistant e permitir que o Home Assistant o descubra.

### Etapa 4: Adicionar o dispositivo do módulo

1. **Descoberta automática**:
   - Certifique-se de que o **ESPHome** está instalado no Home Assistant.
   - Navegue até `Settings -> Devices & Services -> Integrations` e procure pelo dispositivo.
2. **Configuração manual**:
   - Se não for descoberto automaticamente, adicione o dispositivo manualmente especificando seu endereço IP.

Depois de adicionar o dispositivo, você poderá ver todos os seis interruptores na página Overview.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Você também pode definir o nome de cada interruptor individualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Etapa 5: Conectar os aparelhos que você deseja controlar

:::warning Aviso de segurança

Este módulo relé foi projetado para operação em baixa tensão DC. Não o conecte à alimentação AC para evitar riscos elétricos. Sempre desconecte a fonte de alimentação antes de fazer a fiação do relé para evitar curtos-circuitos e choques elétricos.

Tensões superiores a 24V podem causar choque elétrico ou queimaduras, especialmente em casos de pele lesionada ou em ambientes úmidos. Tenha cuidado ao manusear dispositivos elétricos para evitar ferimentos.

:::

1. Fiação:
    - Siga a seção Layout Físico e Conexões para fazer a fiação do módulo relé.
    - Certifique-se de que todas as conexões estejam firmes e que não haja fios expostos.
2. Ligar:
    - Ligue o módulo via USB.
    - Ligue a fonte de alimentação CC para controlar outros aparelhos elétricos.

## Segurança e Manutenção

1. Inspecione periodicamente a fiação para verificar desgaste e danos.
2. Use dispositivos adequados de proteção de circuito, como fusíveis ou disjuntores.
3. Mantenha o dispositivo longe de água e calor excessivo.

## FAQs

1. **O que acontece se o dispositivo for desconectado do Wi-Fi?**
   - O módulo tentará se reconectar automaticamente. Se não conseguir, ele ativará seu ponto de acesso de fallback para reconfiguração.
2. **Posso usar a porta USB enquanto estiver conectado à alimentação CA?**
   - Não, usar USB enquanto estiver conectado à alimentação CA pode danificar o dispositivo ou criar um risco de segurança.
3. **Este módulo pode funcionar sem o Home Assistant?**
   - Sim, o módulo pode ser controlado através de seu **endereço IP local** ou integrado a outras plataformas que suportem ESPHome ou MQTT.

## Recursos

- **Repositório GitHub**: Acesse o Firmware ESPHome na [página GitHub do Seeed Studio 6 Channel Relay Module](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
