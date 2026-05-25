---
description: Primeiros passos com o Seeed Studio IoT Button
title: Primeiros passos com o Seeed Studio IoT Button
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /getting_started_with_seeed_iot_button
sku: 113110044
last_update:
  date: 04/08/2025
  author: Citric
createdAt: '2025-04-08'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_seeed_iot_button/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O IoT Button é um interruptor inteligente versátil que oferece duas integrações com o Home Assistant por meio de ESPHome (via Wi-Fi) e Zigbee. Alimentado pelo ESP32-C6, ele possui indicadores LED RGB personalizáveis, acionadores de eventos programáveis para múltiplos padrões de pressionamento, carregamento via USB-C e opções de montagem flexíveis – tudo o que você precisa para um controle de casa inteligente intuitivo.

Este guia o acompanhará na configuração do seu IoT Button, seja você usuário do **hardware V1 (que foi enviado com firmware ESPHome)** ou do **hardware V2 (que é enviado com firmware Zigbee)**.

### Recursos

- **Pronto para Home Assistant**: Integração perfeita via ESPHome ou a integração Zigbee Home Automation (ZHA).
- **Um botão, ações personalizáveis**: Suporta ações de clique único, clique duplo e pressionamento longo para acionar diferentes automações.
- **Alimentação confiável**: Alimentado por uma bateria recarregável padrão 18650 com uma prática porta de carregamento USB-C.
- **Solução de montagem fácil**: Design compacto que pode ser colocado em qualquer lugar ou montado para fácil acesso.
- **Aberto à personalização**: Ambas as versões de hardware suportam gravação de firmware ESPHome ou Zigbee, permitindo que você escolha o melhor protocolo para suas necessidades.

## Visão geral do hardware

Antes de começar, é essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características das versões V1 e V2 do IoT Button.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Parâmetro</th>
   <th>Descrição</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>Espressif ESP32-C6</td>
  </tr>
  <tr>
   <td>Flash</td>
   <td>4MB</td>
  </tr>
        <tr>
   <td>LED</td>
   <td>LED RGB do usuário: WS2812B (GPIO19, requer GPIO18 habilitado)<br />LED de carga: verde<br />LED do usuário (azul): GPIO2 (V1) / GPIO3 (V2)<br />LED de bateria fraca (vermelho): GPIO14 (<b>apenas V2</b>)</td>
  </tr>
        <tr>
   <td>Sem fio</td>
   <td>Wi-Fi 2,4 GHz<br />Zigbee 3.0</td>
  </tr>
        <tr>
   <td>Bateria</td>
   <td>Bateria recarregável Li-ion 18650 de 3,6 V</td>
  </tr>
        <tr>
   <td>Monitoramento da bateria</td>
   <td>ADC para leitura de tensão (<b>apenas V2</b>, GPIO1)</td>
  </tr>
        <tr>
   <td>Interface de carregamento</td>
   <td>USB Type-C</td>
  </tr>
        <tr>
   <td>Proteção da bateria</td>
   <td>Proteção contra polaridade reversa</td>
  </tr>
        <tr>
   <td>Atualização de firmware</td>
   <td>Suporta OTA (Over-the-Air)</td>
  </tr>
        <tr>
   <td>Dimensões</td>
   <td>92x32x25 mm</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

### Etapa 1: Configuração inicial

Quando você receber o seu IoT Button pela primeira vez, é essencial realizar uma etapa inicial de ativação antes do uso. Isso se aplica ao hardware **V1 e V2**.

1. Use um cabo de dados USB Type-C 5 V padrão para conectar o IoT Button a uma fonte de alimentação (como um carregador USB ou computador).
2. **Essa conexão de energia inicial é crucial, pois ativa o circuito de proteção embutido da bateria.**
3. **Sem essa etapa de ativação, o dispositivo não funcionará corretamente usando apenas a bateria.**

:::note
Certifique-se de usar um cabo USB Type-C 5 V compatível para o processo de ativação. O uso de cabos fora do padrão pode resultar em ativação inadequada.
:::

### Etapa 2: Escolha o seu método de conexão

O IoT Button oferece duas formas principais de conexão ao Home Assistant. Sua escolha dependerá da versão de hardware que você possui ou do protocolo que prefere.

- O **IoT Button V1** vem pré-carregado com firmware **ESPHome**. Siga o **Método 1**.
- O **IoT Button V2** vem pré-carregado com firmware **Zigbee**. Siga o **Método 2**.

Se você é um usuário avançado, pode gravar qualquer um dos firmwares em qualquer versão de hardware. Consulte a seção "Uso avançado" para mais detalhes.

---

### Método 1: Integração ESPHome (Wi‑Fi)

Este método é o padrão para o **hardware V1** e é destinado a usuários que desejam conectar seu IoT Button ao Home Assistant via Wi‑Fi.

#### 1. Configure o Home Assistant

Para desempenho ideal, recomenda-se instalar o [Home Assistant OS](https://www.home-assistant.io/installation/) em um dispositivo como um Raspberry Pi ou Home Assistant Green.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Comprar Home Assistant Green</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"3"}>Comprar Home Assistant Yellow</font></span></strong>
    </a>
</div><br />

Quando o Home Assistant estiver em execução, verifique se o **complemento ESPHome** está instalado e iniciado a partir da loja de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Gravar/atualizar o firmware ESPHome (se necessário)

Seu dispositivo já vem pré-gravado. Você só precisa executar esta etapa se quiser atualizar para a [versão mais recente do firmware](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) ou se o firmware existente estiver corrompido.

<Tabs>
<TabItem value='Web Tool'>

O método mais simples é usar o nosso [**XIAO ESPHome Projects Firmware Flasher**](https://gadgets.seeed.cc/).

1. Conecte o seu IoT Button ao computador por meio de um cabo USB.
2. Na página do gravador, encontre "Seeed Studio IoT Button" e clique em **INSTALL**.
3. Selecione a porta COM correta na janela pop-up.
4. O navegador fará o download e gravará automaticamente o firmware ESPHome mais recente no seu dispositivo.

</TabItem>
<TabItem value='ESPHome Web'>

Como alternativa, você pode usar a ferramenta oficial [ESPHome Web](https://web.esphome.io/).

1. Baixe o arquivo de firmware `*.factory.bin` mais recente da [página de lançamentos do GitHub](https://github.com/Seeed-Studio/xiao-esphome-projects/releases).
2. Conecte o IoT Button ao seu PC.
3. Visite a página [ESPHome Web](https://web.esphome.io/), clique em **CONNECT** e escolha a porta COM correta.
4. Clique em **INSTALL** e selecione o arquivo `.bin` que você baixou.

</TabItem>
</Tabs>

#### 3. Conectar ao Wi‑Fi e ao Home Assistant

1. Após a gravação, o IoT Button criará um ponto de acesso Wi‑Fi chamado `seeedstudio-iot-button`.
2. Conecte-se a essa rede Wi‑Fi a partir do seu telefone ou computador.
3. Um portal cativo deve abrir automaticamente. Se isso não acontecer, acesse `192.168.4.1` no seu navegador.
4. Selecione a rede Wi‑Fi da sua casa (SSID) e insira a senha. Em seguida, o botão se conectará à sua rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

#### 4. Adicionar o dispositivo no Home Assistant

Quando o IoT Button estiver na mesma rede que o seu servidor Home Assistant, ele deverá ser descoberto automaticamente.

1. Navegue até **Settings > Devices & Services**.
2. Na seção "Discovered", você deverá ver `Seeed Studio IoT Button`.
3. Clique em **CONFIGURE**, depois em **SUBMIT**, e atribua o dispositivo a uma área (por exemplo, Sala de Estar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

#### 5. Criar automações com ESPHome

O firmware ESPHome expõe diferentes padrões de pressionamento como interruptores separados.

1. Vá para **Settings > Automations & Scenes** e clique em **CREATE AUTOMATION**.
2. Para o **Trigger**, selecione `Device` e escolha o seu IoT Button.
3. Selecione um tipo de acionador na lista, como:
    - `Single-press action`
    - `Double-press action`
    - `Long-press action`
4. Para a **Action**, escolha o dispositivo ou serviço que deseja controlar (por exemplo, `light.toggle`).
5. Salve a automação.

---

### Método 2: Integração Zigbee

Este método é o padrão para o **hardware V2** e é destinado a usuários que desejam conectar seu IoT Button a uma rede mesh Zigbee.

#### 1. Configure o Zigbee no Home Assistant

Antes de emparelhar, você precisa de um coordenador Zigbee conectado à sua instância do Home Assistant.

1. **Instale um coordenador Zigbee**: Conecte um coordenador, como o [Home Assistant SkyConnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html), ao seu servidor.
2. **Configure o Zigbee Home Automation (ZHA)**:
    - Vá para **Settings > Devices & Services**.
    - Clique em **Add Integration** e procure por **Zigbee Home Automation**.
    - Siga as instruções para configurar o ZHA com o seu coordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

#### 2. Emparelhar o IoT Button com o Home Assistant

1. No Home Assistant, navegue até a página da integração **Zigbee Home Automation**.
2. Clique em **Add Device** para colocar o seu coordenador em modo de emparelhamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

3. Pressione o botão do seu IoT Button uma vez para despertá-lo e iniciar o emparelhamento.
    - Se não emparelhar, o dispositivo pode ter entrado em modo de suspensão. Pressione novamente.
    - Para forçar o emparelhamento, mantenha o botão pressionado por **mais de 5 segundos**. Isso aciona um reset de fábrica e coloca o dispositivo diretamente em modo de emparelhamento. O LED RGB piscará para confirmar.
4. O Home Assistant deverá descobrir o dispositivo como **Seeed Studio IoT_Button**.
5. O dispositivo aparecerá com múltiplas entidades: um sensor binário para o estado em tempo real e vários interruptores para diferentes ações de clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

#### 3. Criar automações com Zigbee

Após o pareamento, você pode criar automações com base nas ações do botão.

1. Vá em **Settings > Automations & Scenes** e clique em **CREATE AUTOMATION**.
2. Para o **Trigger**, selecione `Device` e encontre o seu IoT Button.
3. O ZHA expõe os cliques como ações do dispositivo. Selecione o disparo desejado na lista, por exemplo:
    - `"remote_button_short_press"`
    - `"remote_button_double_press"`
    - `"remote_button_long_press"`
4. Configure a **Action** que você quer executar.
5. Salve a automação.

Exemplo de automação em YAML do Home Assistant para alternar uma luz com um **clique duplo**:

```yaml
alias: IoT Button Double Click - Toggle Living Room Light
description: ""
trigger:
  - platform: device
    domain: zha
    device_id: YOUR_DEVICE_ID_HERE # Replace with your button's device ID
    type: "remote_button_double_press" # The exact type may vary, select it from the UI
action:
  - service: light.toggle
    target:
      entity_id: light.living_room
mode: single
```

## Uso avançado: alternando o firmware

Um dos principais recursos do IoT Button é sua flexibilidade. Você pode alternar entre o firmware ESPHome e Zigbee em **hardware V1 ou V2**.

- (Não recomendado) **Para alternar para ESPHome**: Se o seu botão estiver executando o firmware Zigbee e você quiser usar Wi‑Fi, basta seguir as instruções de gravação no **Método 1, Etapa 2** para instalar o firmware ESPHome.

- **Para alternar para Zigbee**: Se o seu botão estiver executando ESPHome e você quiser ingressar em uma rede Zigbee, será necessário compilar e gravar o [firmware Zigbee usando Arduino IDE](https://wiki.seeedstudio.com/pt-br/seeed_iot_button_with_zigbee/). Após a gravação, siga as etapas de pareamento no **Método 2**.

## Recursos

- **[GITHUB]** [Repositório Github do Seeed Studio IoT Button V2](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[Arquivos de design de PCB]** [Projeto KiCad do Seeed Studio IoT Button V2](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed%20IoT%20Button-C6%20v2.0_SCH&PCB_250721.zip)
- **[Esquemático]** [Esquemático do Seeed Studio IoT Button V2](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed%20IoT%20Button-C6%20v2.0_SCH_250721.pdf)


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
