---
title: Módulo Relé CA Wi‑Fi de 2 Canais no Home Assistant
description: |
  Um dispositivo inteligente da Seeed Studio projetado para controlar aparelhos alimentados por CA sem fio
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /2_channel_wifi_ac_relay
sku: 114993526
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Spencer
  date: 2024-11-27T03:21:36.491Z
createdAt: '2024-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/2_channel_wifi_ac_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros passos com o Módulo Relé CA Wi‑Fi de 2 Canais no Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

## Visão geral

O **[Módulo Relé CA Wi‑Fi de 2 Canais](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** é um dispositivo inteligente da Seeed Studio projetado para controlar aparelhos alimentados por CA sem fio. Sua configuração de dois canais oferece controle independente de duas cargas, tornando‑o uma excelente escolha para automatizar eletrodomésticos como luzes, ventiladores e outros dispositivos em um ambiente com Home Assistant.

Este guia fornece um passo a passo detalhado, incluindo configuração, integração e ajustes avançados, para usuários que vão desde iniciantes até entusiastas de casas inteligentes.

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
            <th>Tensão de Entrada</th>
            <td>CA 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Tensão de Saída</th>
            <td>CA 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Carga Máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canais</th>
            <td>2 (controle independente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de Conexão</th>
            <td>Wi‑Fi</td>
        </tr>
        <tr>
            <th>Terminais de Entrada</th>
            <td>N (Neutro), L (Fase)</td>
        </tr>
        <tr>
            <th rolspan="2">Terminais de Saída</th>
            <td><b>Canal 1:</b> N1 (Neutro), L1 (Fase) <br></br> <b>Canal 2:</b> N2 (Neutro), L2 (Fase)</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Aviso de segurança

Sempre desconecte a alimentação de CA antes de fazer a fiação do relé. Evite usar a porta USB enquanto o dispositivo estiver conectado à alimentação de CA para evitar riscos elétricos.

:::

### Layout físico e conexões

#### Terminais de entrada e saída

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- Entrada
  - **N (Neutro)**: Conecte o fio neutro da fonte de alimentação de CA.
  - **L (Fase)**: Conecte o fio fase da fonte de alimentação de CA.
- Saída
  - Canal 1
    - **N1 (Neutro)**: Fio neutro para a carga conectada ao Relé 1.
    - **L1 (Fase)**: Fio fase para a carga conectada ao Relé 1.
  - Canal 2
    - **N2 (Neutro)**: Fio neutro para a carga conectada ao Relé 2.
    - **L2 (Fase)**: Fio fase para a carga conectada ao Relé 2.

## Primeiros passos

### Requisitos

1. **Componentes principais**:
   - [Módulo Relé CA Wi‑Fi de 2 Canais](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Rede**:
   - Wi‑Fi estável para interação contínua entre o hardware e o Home Assistant.

### Etapa 1: Configurar o módulo relé (configuração física)

1. **Instalação**: homeassistant já vem pré-instalado no [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitar o complemento ESPHome**:
   - Acesse o painel do Home Assistant.
   - Vá para a seção "Add-ons" e procure pelo complemento ESPHome.
   - Clique em "Install" e depois em "Start" para habilitá-lo.
   - Depois de instalado, configure o complemento para garantir a comunicação adequada com o XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Ao reunir os componentes necessários e configurar o Home Assistant com o complemento ESPHome, você estará pronto para prosseguir com a integração do Módulo Relé CA Wi‑Fi de 2 Canais.

### Etapa 2: Preparando o módulo relé

Por padrão, seu dispositivo (XIAO ESP32C3) vem pré-gravado com o firmware para o Módulo Relé CA Wi‑Fi de 2 Canais. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravar o firmware**: se o firmware existente estiver corrompido ou se você precisar começar do zero.
2. **Atualizar o firmware**: se houver uma versão mais recente do firmware com funcionalidades aprimoradas.

Existem dois métodos simples para gravar o firmware:

:::caution
O Firefox não oferece suporte à gravação de firmware em dispositivos ESP. Use o Google Chrome ou o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Web Tool](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções exibidas na tela.

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas exibidas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases) (você precisará descompactar o arquivo baixado).

1. Conecte o kit de sensor ao seu PC.
2. Acesse a página do [ESPHome Web](https://web.esphome.io/).
3. Selecione o arquivo de firmware com o sufixo `*.factory.bin`.

Assista ao vídeo a seguir para um passo a passo detalhado de como gravar o firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Com qualquer um dos métodos, o seu firmware estará atualizado e pronto para integração com o Home Assistant.

### Etapa 3: Configuração de rede

1. **Habilitar o ponto de acesso**:
   - Ao ligar pela primeira vez, o módulo criará uma rede Wi‑Fi (SSID: `seeedstudio-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acessar a configuração**:
   - Conecte‑se à rede usando um telefone ou PC.
   - Abra um navegador e acesse `http://192.168.4.1`.
   - Insira o SSID e a senha da sua rede Wi‑Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integração com o Home Assistant**:
   - Depois de conectado à rede doméstica, o módulo será detectado no Home Assistant em `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Dessa forma, você pode conectar o módulo à sua rede do Home Assistant e deixar o Home Assistant descobri-lo.

### Etapa 4: Adicionar o dispositivo do módulo

1. **Descoberta automática**:
   - Certifique‑se de que o **ESPHome** esteja instalado no Home Assistant.
   - Navegue até `Settings -> Devices & Services -> Integrations` e procure pelo dispositivo.
2. **Configuração manual**:
   - Se não for descoberto automaticamente, adicione o dispositivo manualmente especificando seu endereço IP.

Depois de adicionar o dispositivo, você poderá ver ambos os interruptores na página Overview. Você também pode definir o nome de cada interruptor individualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## Segurança e manutenção

1. Inspecione periodicamente a fiação quanto a desgaste e danos.
2. Use dispositivos adequados de proteção de circuito, como fusíveis ou disjuntores.
3. Mantenha o dispositivo longe de água e calor excessivo.

## Perguntas frequentes (FAQs)

1. **O que acontece se o dispositivo for desconectado do Wi‑Fi?**
   - O módulo tentará se reconectar automaticamente. Se falhar, ele ativará seu ponto de acesso de fallback para reconfiguração.
2. **Posso usar a porta USB enquanto estiver conectado à alimentação de CA?**
   - Não, usar USB enquanto estiver conectado à alimentação de CA pode danificar o dispositivo ou criar um risco à segurança.
3. **Este módulo pode funcionar sem o Home Assistant?**
   - Sim, o módulo pode ser controlado por meio de seu **endereço IP local** ou integrado a outras plataformas que suportem ESPHome ou MQTT.

## Recursos

- **Repositório GitHub**: acesse o firmware ESPHome na [página do GitHub Seeed Studio Dual Channel Relay Module](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_2_channel_wifi_ac_energy_meter).
- **Esquema do Módulo Relé de Dois Canais**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf).

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
