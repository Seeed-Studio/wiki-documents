---
description: Kit mmWave e Grove Conectam ao ESPHome
title: Kit mmWave e Grove Conectam ao ESPHome
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Allen
createdAt: '2023-12-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mmWave_Kit_And_Grove_Connect_To_ESPHome/
---

## Introdução

Kit de Sensor de Detecção de Presença Humana mmWave alimentado por Seeed Studio XIAO ESP32C3, com suporte a conectividade Wi‑Fi/BLE e detecção precisa de pessoas por meio de sensores mmWave. Conecte módulos Grove de forma perfeita para recursos adicionais. Alcance uma configuração simples para o Home Assistant em 1–2 minutos, junto com atualizações OTA (Over‑The‑Air) sem fio convenientes. Habilite ampla versatilidade com sensores mmWave substituíveis. Ideal para personalizar automação residencial inteligente, detectar invasões e monitorar o bem‑estar de idosos.

## Preparação de Hardware

Estou usando um Raspberry Pi 4B como servidor para rodar o Home Assistant, usando o Kit de Sensor de Detecção de Presença Humana mmWave como hardware aqui, junto com vários sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Kit de Sensor de Detecção de Presença Humana mmWave</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Sensores Grove**

- [Grove - Temperature and Humidity Sensor (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - Light Sensor (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## Preparação de Software

### Instalar o Home Assistant

Certifique-se de que você já tenha o Home Assistant em execução. Há vários wikis apresentando como gravar o Home Assistant nos [produtos](https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-) aqui. Estou usando Raspberry Pi 4B, então posso [usar diretamente o método oficial para gravar o sistema operacional no Raspberry Pi 4B](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome no Home Assistant

ESPHome está disponível como um **Add-On do Home Assistant** e pode ser simplesmente instalado pela loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 1.** Clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 2.** Habilite todas as opções e clique em **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## Primeiros passos

### Conectar o kit mmWave ao ESPHome

#### Passo 1: Conexão de hardware

Conecte o kit mmWave ao Home Assistant via cabo Type‑C; você pode consultar a imagem abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### Passo 2: Configuração de software

##### a. Configurar o kit mmWave

1. Abra a página do ESPHome e clique no botão **NEW DEVICE** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. Em seguida, clique em **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. Dê o nome que quiser e clique em **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. Selecione o tipo do seu dispositivo, clique em **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. Você pode encontrar a chave mais tarde no arquivo de configuração, então aqui apenas clique em **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. Precisamos editar o arquivo de configuração aqui, clique em **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. O código abaixo é para sua referência. Você pode copiá‑lo para o seu arquivo de configuração. Depois de finalizar o código, clique no botão **INSTALL** no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip

1. As partes `api` e `ota` têm chave ou senha padrão, você não precisa alterá-las.
2. Na parte `wifi` você precisa trocar pelo seu próprio ssid e senha.
3. [clique aqui para ver o código](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)

:::

8. Em seguida, aparecerá uma janela pop‑up; clique na terceira entrada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. Clique conforme abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. Agora o kit mmWave já está configurado e você verá esta página; clique no botão **CLOSE** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. Adicionar dados do kit mmWave à visão geral

1. Vá para a página **Settings** e clique em **Devcies & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. Clique em **ESPHome** na zona Configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se você não encontrar ESPHome na zona Configured, mas na parte Discovered acima, você pode seguir do passo 15 ao passo 18 neste [link](https://wiki.seeedstudio.com/pt-br/XIAO-ESP32C3-for-ESPHome-Support/).
:::

3. Clique em **devices**. Tenho 2 dispositivos aqui; provavelmente, no seu caso, haverá apenas 1 dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. Clique em **mmWave Kit Plus Grove**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. Clique em **ADD TO DASHBOARD** para adicionar essas informações ao painel. E você pode rolar esta página para baixo para adicionar mais informações que desejar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. Continue clicando em **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. Por fim, você pode ver essas informações no painel clicando no botão **overview** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Conectar Grove ao ESPHome

#### Sensor de luz (LS06-S)

##### Passo 1: Conexão de hardware

Conecte o [sensor de luz](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) ao kit mmWave via cabo Grove; você pode consultar a imagem abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### Passo 2: Configuração de software

###### a. Configurar o sensor de luz

1. Adicione este código ao seu arquivo de configuração na posição correspondente; você pode se orientar pela imagem abaixo.

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. Em seguida, clique no botão **INSTALL** no canto superior esquerdo. Se tudo correr bem, você verá esta imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">Se você encontrar erro, pode limpar os arquivos de build como abaixo.</span>
:::

1. Provavelmente você encontrará um erro como este.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. Você pode clicar em **Clean Build Files** para limpar alguns arquivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. Após a limpeza, clique em **CLOSE** e tente **INSTALL** novamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. Adicionar sensor de luz ao painel

1. Clique em **Overview** no canto superior esquerdo e depois clique em **"three points"** e **Edit dashboard** no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Clique em **ADD CARD** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Clique em **BY ENTITY**, selecione a entrada **Light Sensor** e depois clique em **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. Selecione **PICK DIFFERENT CARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. Selecione **Gauge**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. Defina o Mínimo como 0 e o Máximo como 1, clique em **SAVE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. Finalmente, você verá o sensor de luz no seu painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de temperatura e umidade (DHT20)

##### Passo 1: Conexão de hardware

Conecte o [sensor de temperatura e umidade](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) ao kit mmwave via cabo Grove, você pode consultar a imagem abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### Passo 2: Configuração de software

###### a. Configurar sensor de temperatura e umidade

1. Adicione este código ao seu arquivo de configuração na posição correspondente; você pode consultar a imagem abaixo.

```
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38
```

```
sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/20.png" style={{width:1000, height:'auto'}}/></div>

2. Em seguida, clique no botão **INSTALL** no canto superior esquerdo. Se tudo correr bem, você verá esta imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se você encontrar erro, pode pular para [aqui](#pular) para sua referência.
:::

###### b. Adicionar sensor de temperatura e umidade ao painel

1. Clique em **Overview** no canto superior esquerdo e depois clique em **"three points"** e **Edit dashboard** no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Clique em **ADD CARD** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Clique em **BY ENTITY**, selecione as entradas **Humidiy** e **Temperature** e depois clique em **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. Clique em **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. Finalmente você verá os dados de Temperatura e Umidade no seu painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### Sensor de chama

##### Passo 1: Conexão de hardware

Use um cabo Grove para conectar o [sensor de chama](https://www.seeedstudio.com/Grove-Flame-Sensor.html) à porta analógica do kit mmWave. Você pode consultar o vídeo abaixo.

##### Passo 2: Configuração de software

###### a. Configurar sensor de chama

Adicione o código abaixo ao seu arquivo de configuração e **INSTALL** no kit mmWave.

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. Adicionar sensor de chama ao painel

Você pode consultar o sensor de luz ou o sensor de temperatura e umidade acima.

#### Outros sensores com arquivos Yaml

Suportado pelo [Programa de Contribuidores da Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/12/views/1), obrigado ao Mohammed e há mais sensores suportados abaixo:

[ATH20 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[SHT35 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[SHT40 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[Vibration Sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
