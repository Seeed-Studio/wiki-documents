---
description: Aprenda como configurar e ajustar Modbus TCP e Modbus RTU com o Home Assistant em um reComputer R1000, uma solução poderosa baseada em Raspberry Pi para integração e controle perfeitos dos seus dispositivos Modbus em um Sistema de Gerenciamento de Prédios (BMS).
title: reComputer R1000 e Modbus com Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Automação Residencial
  - BMS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_home_assistant_modbus
last_update:
  date: 08/07/2024
  author: Kasun Thushara
createdAt: '2024-08-07'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_home_assistant_modbus/
---

## Introdução

Em sistemas modernos de gerenciamento de prédios (BMS), integrar vários protocolos e dispositivos é crucial para um monitoramento e controle eficientes. Este guia foca em aproveitar os recursos dos protocolos de comunicação Modbus (Modbus TCP e Modbus RTU) com o Home Assistant OS, usando o poderoso reComputer R1000, uma solução baseada em Raspberry Pi. Esteja você configurando um novo sistema ou aprimorando um já existente, este guia o conduzirá pelo processo de conectar seus dispositivos Modbus ao Home Assistant, garantindo integração e controle perfeitos.

## Primeiros Passos

Antes de iniciar este projeto, talvez seja necessário preparar o seu hardware com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

Antes de mergulhar no processo de integração, é fundamental garantir que todos os drivers e ferramentas necessários estejam instalados. A [instalação adequada dos drivers](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/) é um pré-requisito para uma comunicação perfeita entre dispositivos Modbus RTU e o Home Assistant. É altamente recomendável estudar cuidadosamente e instalar os drivers necessários antes de prosseguir com este guia.

Além disso, se você ainda não instalou o Home Assistant, siga o [guia de instalação do Home Assistant](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_home_automation/) para configurá-lo no seu reComputer R1000.

## Complemento File Editor

Embora você possa configurar a maior parte do Home Assistant diretamente pela interface do usuário em Settings, algumas partes exigem que você edite arquivos como configuration.yaml. Este arquivo contém integrações a serem carregadas juntamente com suas configurações. Ao adicionar trechos de código a este arquivo de configuração, você pode habilitar funcionalidades específicas, incluindo a integração Modbus.

Para começar, você precisa instalar o complemento File Editor no Home Assistant:

- Abra o Home Assistant.
- Navegue até `Settings > Add-ons`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- Clique em `Add-on Store`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- Procure por `File Editor` e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- Clique no botão Install.
- Depois de instalado, clique em Start para iniciar o File Editor.
- Opcionalmente, ative Show in Sidebar para acesso rápido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

Com o complemento File Editor, agora você pode editar o arquivo `configuration.yaml` para adicionar a integração Modbus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## Ativando a Integração Modbus TCP

Para ativar a integração Modbus no Home Assistant, você precisa adicionar parâmetros específicos ao seu arquivo configuration.yaml. Abaixo estão os parâmetros e suas descrições que você precisará configurar:

- **name**: O nome deste hub. Deve ser único.
- **host**: O endereço IP ou nome do seu dispositivo Modbus, por exemplo, `192.168.1.1`.
- **port**: A porta de rede para comunicação.
- **type**: O tipo de conexão Modbus. As opções são tcp ou serial. Aqui usamos `tcp`

Para configurar entidades para sua integração Modbus, você precisa definir vários parâmetros para cada entidade. A seguir estão os parâmetros necessários para configurar sensores binários:
Existem várias entidades. Você pode conferir na [página oficial do Modbus no Home Assistant](https://www.home-assistant.io/integrations/modbus).

- **binary_sensors**: Uma lista de todos os sensores binários configurados para esta conexão.
- **address**: O endereço da bobina/registrador.
- **name**: O nome da entidade, que deve ser único dentro do tipo de entidade.
- **scan_interval**: O intervalo de atualização em segundos. Defina scan_interval = 0 para desativar o polling. As entidades são lidas pouco após a inicialização e depois de acordo com scan_interval.
- **slave**: Idêntico a device_address.
- **input_type**: O tipo de requisição. As opções são coil, holding ou input.

**Exemplo** :

```bash
modbus:
  - name: modbus_hub
    type: tcp
    host: IP_ADDRESS_of_PLC
    port: 502
    binary_sensors:
      - name: Relay_1
        address: 8193
        slave: 1
        input_type: coil
        scan_interval: 1
      - name: Relay_2
        address: 8194
        slave: 1
        input_type: coil
        scan_interval: 1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-settings.PNG" style={{width:600}}/></div>

:::note
É necessário salvar e reiniciar o HA após alterar o arquivo configuration.yml
:::

## Ativando a Integração Modbus RTU

Para ativar a integração Modbus RTU no Home Assistant, você precisa adicionar os seguintes parâmetros ao seu arquivo configuration.yaml:

- **name**: O nome deste hub. Deve ser único.
- **type**: O tipo de conexão Modbus. Aqui, deve ser serial.
- **port**: A porta serial ou dispositivo USB onde seu dispositivo Modbus está conectado ao host do Home Assistant. Descobrimos que é `/dev/ttyAMA30`
- **baudrate**: A velocidade da conexão serial.
- **method**: O método de conexão ao Modbus. As opções são rtu e ascii.
- **parity**: A paridade dos bytes de dados. As opções são E (Even), O (Odd), N (None).
- **bytesize**: O tamanho dos dados em bits de cada byte. Tipicamente 8.
- **stopbits**: Os bits de parada dos bytes de dados.

Para configurar entidades para sua integração Modbus RTU, você precisa definir vários parâmetros para cada sensor. A seguir estão os parâmetros necessários para configurar sensores:

- **sensors**: O sensor Modbus permite coletar dados de registradores Modbus.
- **name**: O nome da entidade, que deve ser único dentro do tipo de entidade.
- **address**: O endereço do registrador.
- **slave**: Idêntico a device_address.
- **input_type**: O tipo de registrador Modbus para o sensor. As opções são holding ou input.
- **scale**: O fator de escala.
- **device_class**: O tipo/classe do sensor para definir o ícone no frontend.
- **unit_of_measurement**: A unidade a ser anexada ao valor.

Exemplo:

```bash
modbus:
  - name: modbus_hub2
    type: serial
    port: /dev/ttyAMA30
    baudrate: 9600
    bytesize: 8
    method: rtu
    parity: N
    stopbits: 1
    sensors:
      - name: Room Temperature
        address: 1
        input_type: input
        slave: 1
        scale: 0.01
        device_class: temperature
        unit_of_measurement: °C
      - name: Room Humidity
        address: 2
        input_type: input
        slave: 1
        scale: 0.01
        unit_of_measurement: '%'
        device_class: humidity
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-rtu-setting.PNG" style={{width:600}}/></div>

:::note
É necessário salvar e reiniciar o HA após alterar o arquivo configuration.yml
:::

Por fim, você conseguirá ver o fenômeno funcionando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
