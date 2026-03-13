---
title: Medidor de Energia CA Wi-Fi XIAO de 2 Canais no Home Assistant
description: |
  Um dispositivo inteligente da Seeed Studio projetado para detectar o consumo de eletricidade de aparelhos alimentados por CA.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /2_channel_wifi_ac_energy_meter
sku: 114993611,E2025042701
keywords:
  - XIAO
  - Home Assistant
  - Medidor de Energia
  - Casa Inteligente
sidebar_position: 5
last_update:
  author: Hugo
  date: 04/01/2025
createdAt: '2025-04-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/2_channel_wifi_ac_energy_meter/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros passos com o Medidor de Energia CA Wi-Fi XIAO de 2 Canais no Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

## Visão geral

O **[Medidor de Energia CA Wi-Fi XIAO de 2 Canais](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)** é um dispositivo inteligente da Seeed Studio projetado para detectar o consumo de eletricidade de aparelhos alimentados por CA. Sua configuração de dois canais oferece detecção independente de até duas cargas, tornando-o uma excelente escolha para automatizar uma variedade de dispositivos em ambientes de casa inteligente.

Este guia fornece um passo a passo detalhado, incluindo configuração, integração e ajustes avançados para usuários que vão de iniciantes a entusiastas de automação residencial.

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Canais</th>
            <td>2 (detecção independente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de Conexão</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Terminais de Entrada</th>
            <td>L (Fase), N (Neutro), PE (Aterramento de Proteção)</td>
        </tr>
        <tr>
            <th>Faixa Efetiva de Detecção de Corrente</th>
            <td>10mA-100A @ 1mΩ (modo CT)</td>
        </tr>
        <tr>
            <th>Energia Ativa</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Aviso de segurança

Sempre desconecte a alimentação CA antes de realizar qualquer fiação.

:::

### Layout físico e conexões

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (Live)**: Conecte o fio de fase da fonte de alimentação CA.
- **N (Neutral)**: Conecte o fio neutro da fonte de alimentação CA.
- **PE (Protective Earthing)**: Conecte o fio de aterramento de proteção da fonte de alimentação CA.
- **CT1, CT2 (Transformador de Corrente)**: Prenda o suporte do transformador de corrente ao fio de fase, com a seta apontando da extremidade de alimentação para a extremidade da carga.

#### Instalação do transformador de corrente

1. Primeiro, abra o suporte e coloque o fio na sua área circular.

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step1.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

2. Em seguida, feche a presilha, pressione com firmeza até ouvir um "clique"; a instalação estará concluída.

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step2.gif"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::warning Instalação do suporte do transformador de corrente

Ao instalar o suporte, certifique-se de que o sentido da corrente corresponda à direção indicada pela seta no suporte.

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/current_flow_direction.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::

## Primeiros Passos

### Requisitos

1. **Componentes principais**:
   - [XIAO 2-Channel Wi-Fi AC Energy Meter](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [Non-invasive AC Current Transformer](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Rede**:
   - Wi-Fi estável para interação contínua entre o hardware e o Home Assistant.

### Etapa 1: Configurando o Home Assistant {#setting-up-home-assistant}

1. **Instalação**: o homeassistant já vem pré-instalado no [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Ativando o complemento ESPHome**:
   - Acesse o painel do Home Assistant.
   - Vá até a seção "Add-ons" e procure pelo complemento ESPHome.
   - Clique em "Install" e depois em "Start" para ativá-lo.
   - Após a instalação, configure o complemento para garantir a comunicação adequada com o XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Reunindo os componentes necessários e configurando o Home Assistant com o complemento ESPHome, você estará pronto para prosseguir com a integração do Medidor de Energia CA Wi-Fi XIAO de 2 Canais.

### Etapa 2: Preparando o Medidor de Energia

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré-gravado com o firmware para o Medidor de Energia CA Wi-Fi XIAO de 2 Canais. No entanto, há dois cenários em que você pode precisar atualizar o firmware:

1. **Regravar o firmware**: se o firmware existente estiver corrompido ou se você precisar começar do zero.
2. **Atualizar o firmware**: se houver uma versão mais recente do firmware com funcionalidades aprimoradas.

Existem dois métodos simples para gravar o firmware:

:::caution
O Firefox não oferece suporte à gravação de firmware em dispositivos ESP. Utilize Google Chrome ou Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Você pode usar esta [Web Tool](https://gadgets.seeed.cc/) para um método fácil e direto de gravar seu firmware. Basta seguir as instruções na tela. (Selecione **SeeedStuido-2CH-EM**)

- Clique no botão `CONNECT` para iniciar a conexão. A ferramenta atualizará o firmware automaticamente.

Se algo der errado, siga as etapas de solução de problemas exibidas na tela ou mude para o método `ESPHome Web` para concluir o processo.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, você precisará baixar o arquivo de firmware `bin` a partir [daqui](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) (será necessário descompactar o arquivo baixado).

1. Conecte o kit de sensor ao seu PC.
2. Acesse a página do [ESPHome Web](https://web.esphome.io/).
3. Selecione o arquivo de firmware com o sufixo `*.factory.bin`.

Assista ao vídeo a seguir para um passo a passo detalhado de gravação do firmware via ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Com qualquer um dos métodos, seu firmware estará atualizado e pronto para a integração com o Home Assistant.

### Etapa 3: Configuração de rede

1. **Ativar o ponto de acesso**:
   - Ao ligar pela primeira vez, o módulo criará uma rede Wi-Fi (SSID: `SeeedStudio-2CH-EM`).

2. **Acessar a configuração**:
   - Conecte-se à rede usando um telefone ou PC.
   - Abra um navegador e acesse `http://192.168.4.1`.
   - Insira o SSID e a senha da sua rede Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integração com o Home Assistant**:
   - Depois de conectado à rede doméstica, o módulo ficará detectável no Home Assistant em `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Dessa forma, você pode conectar o módulo à sua rede do Home Assistant e permitir que o Home Assistant o descubra.

### Etapa 4: Adicionar o dispositivo do módulo

1. **Descoberta automática**:
   - Certifique-se de que o **ESPHome** esteja instalado no Home Assistant.
   - Navegue até `Settings -> Devices & Services -> Integrations` e procure pelo dispositivo.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

1. **Configuração manual**:
   - Se não for descoberto automaticamente, adicione o dispositivo manualmente informando o endereço IP.

Depois de adicionar o dispositivo, você pode ver um interruptor de controle de iluminação, dois canais de uso de corrente, dois canais de consumo de energia e o valor total de tensão na página Visão Geral.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->
<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png"
        style={{
            width: 'auto',
            height: '680px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

<br />
Ao clicar em qualquer ícone de linha, você pode visualizar com mais detalhes os valores correspondentes e suas mudanças recentes, que são representados por um gráfico de linhas.
<br /><br />

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_dashboard_detail.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

## Segurança e Manutenção

1. Inspecione periodicamente a fiação para verificar desgaste e danos.
2. Use dispositivos de proteção de circuito adequados, como fusíveis ou disjuntores.
3. Mantenha o dispositivo longe de água e calor excessivo.

## Perguntas Frequentes

1. **O que acontece se o dispositivo for desconectado do Wi-Fi?**
   - O módulo tentará se reconectar automaticamente. Se falhar, ele ativará seu ponto de acesso de fallback para reconfiguração.

2. **O que devo fazer se o dispositivo perder energia repentinamente de forma inesperada?**
   - Quando o dispositivo perde energia repentinamente, se você quiser remover o fixador do transformador de corrente, aguarde até que o dispositivo reinicie e esteja operando normalmente antes de removê-lo, caso contrário isso pode danificar o dispositivo.

## Recursos

- **Repositório GitHub**: Acesse o Firmware ESPHome na [página GitHub Seeed Studio Dual Channel Energy Meter](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)

- **Esquemático do Medidor de Energia de Canal Duplo**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
