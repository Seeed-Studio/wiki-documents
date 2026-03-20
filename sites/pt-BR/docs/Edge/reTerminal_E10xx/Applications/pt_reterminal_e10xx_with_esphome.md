---
description: Este artigo descreve como fazer o Display de ePaper da reTerminal E Série funcionar com Home Assistant e ESPHome.
title: Display de ePaper da reTerminal E Série funcionando com ESPHome para Home Assistant
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
sku: 100017057,100073581
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Display de ePaper da reTerminal E Série funcionando com ESPHome para Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong></a>
</div>

## Introdução ao [Home Assistant](https://www.home-assistant.io/)

Home Assistant é uma poderosa plataforma de automação residencial de código aberto que permite controlar e monitorar seus dispositivos de casa inteligente a partir de uma interface única e unificada. Ele atua como o hub central da sua casa inteligente, permitindo automatizar rotinas, monitorar sensores e criar um ambiente doméstico mais inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### Por que Home Assistant?

- **Controle local**: Diferente de muitas soluções baseadas em nuvem, o Home Assistant roda localmente na sua rede, garantindo que seus dados permaneçam privados e que suas automações funcionem mesmo sem acesso à internet.

- **Amplo suporte a dispositivos**: O Home Assistant se integra a milhares de diferentes dispositivos e serviços de casa inteligente, tornando-o altamente versátil e preparado para o futuro.

- **Automação poderosa**: Crie regras de automação sofisticadas que podem responder a vários gatilhos, como horário, estados de dispositivos, leituras de sensores e muito mais.

- **Dashboard personalizável**: Projete sua própria interface de usuário para exibir as informações que mais importam para você.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba mais 🖱️</font></span></strong></a>
</div>

### Por que usar o Display de ePaper da reTerminal E Série com Home Assistant?

O Display de ePaper da reTerminal E Série é um excelente companheiro para o Home Assistant por vários motivos:

1. **Eficiência energética**: O display de e-paper só consome energia ao atualizar o conteúdo, tornando-o perfeito para exibir informações persistentes como previsões do tempo, eventos de calendário ou status do sistema.

2. **Visibilidade clara**: Diferente das telas LCD, os displays de e-paper são facilmente legíveis em qualquer condição de iluminação, incluindo luz solar direta, o que os torna ideais para painéis de controle de parede.

3. **Longa duração de bateria**: Combinado com o modo de sono profundo, o display pode operar por meses com uma única carga de bateria, ainda fornecendo informações valiosas de relance.

4. **Integração flexível**: Por meio do ESPHome, o display se integra perfeitamente ao Home Assistant, permitindo mostrar qualquer dado do seu sistema de casa inteligente em um formato elegante e sempre visível.

Essas vantagens tornam o Display de ePaper da reTerminal E Série uma escolha ideal para criar um display de informações sempre ligado e eficiente em energia para a sua configuração de Home Assistant.

### Integração com ESPHome

ESPHome é uma ferramenta de criação de firmware de código aberto projetada especificamente para dispositivos ESP8266/ESP32. Ela permite criar firmware personalizado usando arquivos de configuração YAML simples, que podem então ser gravados no seu dispositivo. Para a reTerminal E Série, o ESPHome atua como middleware essencial que possibilita a comunicação entre o dispositivo e o Home Assistant.

O sistema funciona convertendo sua configuração YAML em um firmware completo que roda no seu dispositivo ESP. Esse firmware lida com todas as tarefas complexas de conexão à sua rede, comunicação com o Home Assistant e controle do display de ePaper. Quando combinado com o Home Assistant, o ESPHome oferece uma plataforma robusta para criar displays e controles de automação residencial sofisticados.

Vamos explorar como configurá-lo e tirar o máximo proveito desse display versátil.

## Primeiros Passos

Antes de iniciar o conteúdo do tutorial deste artigo, você pode precisar ter o seguinte hardware preparado.

### Materiais necessários

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green é a maneira mais fácil e focada em privacidade de automatizar sua casa. Ele oferece uma configuração simples e permite controlar todos os dispositivos inteligentes com apenas um sistema, onde todos os dados são armazenados localmente por padrão. Esta placa se beneficia do próspero ecossistema do Home Assistant e será aprimorada todos os meses pelo código aberto.

Recomendamos usar o Home Assistant Green como o host do Home Assistant para este tutorial, ou você pode usar qualquer host do Home Assistant com Supervisor.

:::tip install Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- **[Primeiros Passos com Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)**
- **[Primeiros Passos com Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)**
- **[Primeiros Passos com Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)**

Se você não estiver usando um produto da Seeed Studio, também pode verificar e aprender como instalar o Home Assistant para outros produtos no site oficial do Home Assistant.

- **[Instalação do Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Etapa 1. Instalar o ESPHome

:::note
Se você já instalou o ESPHome, pode pular esta etapa.
:::

Vá para **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

Digite o termo de pesquisa **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

Clique em **INSTALL** e **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se você não conseguir encontrar o ESPHome na loja de complementos, certifique-se de que está usando uma instalação do Home Assistant que oferece suporte a complementos (como Home Assistant OS ou instalações supervisionadas). Para outros tipos de instalação (como Home Assistant Container), talvez seja necessário executar o ESPHome Device Builder de forma independente usando Docker. Consulte a [documentação oficial do ESPHome](https://esphome.io/guides/getting_started_hassio) para mais detalhes.
:::

### Etapa 2. Adicionar um novo dispositivo

Vá para o ESPHome e clique em **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

Dê ao dispositivo um nome de sua preferência e selecione **ESP32-S3** para o tipo de chip, depois clique em **SKIP**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Depois de criar um novo dispositivo, clique em **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### Etapa 3. Instalar o firmware

Este é um exemplo bem básico e mostrará "Hello World!" no display.

**O principal objetivo é mostrar diferentes maneiras de instalar o firmware no dispositivo.**

Você pode usar este exemplo copiando o código abaixo e colando-o após a linha de código `captive_portal` no seu arquivo Yaml.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      # const auto RED     = Color(255, 0,   0,   0);
      # const auto GREEN   = Color(0,   255, 0,   0);
      # const auto BLUE    = Color(0,   0,   255, 0);
      # const auto YELLOW  = Color(255, 255, 0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

Clique em **INSTALL** para instalar o código no dispositivo e você verá a imagem a seguir.

<Tabs>
<TabItem value='Instalar pelo navegador'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver longe de você, recomendamos usar este método. Você pode instalá-lo com o computador que tiver em mãos.
:::

Primeiro, você precisa clicar em **Manual download** para baixar o firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abra este site onde vamos enviar o firmware para o painel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Volte para o ESPHome para baixar o firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecione Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use um cabo USB para **conectar o painel ePaper ao seu computador** e clique em **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecione usbmodemxxx (no Windows é COMxxx) e clique em connect. [Encontrou um problema? Clique aqui.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Clique em **INSTALL** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div]

Aguarde um momento e você verá 'Hello world!' no display ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar pelo host'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver próximo, recomendamos usar este método, pois é mais simples.
:::

Antes de instalar o código no dispositivo, você precisa usar um cabo USB para **conectar este dispositivo ao seu Raspberry Pi ou HA Green(Yellow) etc.** que está executando o Home Assistant.

Clique nas opções seguindo a imagem para instalar o código no dispositivo. [Não encontrou a porta quando o dispositivo está em modo de sono profundo?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Isso significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar via Wi-Fi'>

:::tip
Esta é a maneira mais simples, mas com a premissa de que, ao instalar o programa pela primeira vez, você deve primeiro enviar o programa para o ePaper Panel usando o método à esquerda. Depois disso, você pode enviá-lo via Wi-Fi. Além disso, certifique-se de que sua configuração YAML inclui seções `ota` e `api` devidamente configuradas com chaves de criptografia válidas para que este método funcione.
:::

Dessa forma, você não precisa conectar o painel ePaper a nada, apenas certifique-se de que ele esteja online.

Clique na opção e então o firmware será instalado automaticamente no ePaper penal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Se falhar, pode ser devido a um sinal fraco. Por favor, aproxime o dispositivo do seu roteador. [Encontrou um problema? Clique aqui.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Noções básicas para desenho no ESPHome

### Desenhando gráficos simples

Este exemplo de código YAML configura a interface SPI e o reTerminal E Série ePaper Display para um projeto ESPHome. A seção `lambda` contém comandos de desenho que renderizam formas simples na tela:

- Dois retângulos (um na posição (10, 10) com tamanho 100x50, e outro em (150, 10) com tamanho 50x50)
- Um círculo em (250, 35) com raio de 25
- Dois retângulos preenchidos (em (10, 80) e (150, 80))
- Um círculo preenchido em (250, 105) com raio de 25

Você pode usar este exemplo copiando o código abaixo e colando-o após a linha de código `captive_portal` no seu arquivo Yaml.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

Quando você vir o retorno como na imagem a seguir, significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50, BLACK);
      it.rectangle(150, 10, 50, 50, RED);
      it.circle(250, 35, 25, GREEN);
      it.filled_rectangle(10, 80, 100, 50, BLUE);
      it.filled_rectangle(150, 80, 50, 50, YELLOW);
      it.filled_circle(250, 105, 25, WHITE);
```

Quando você vir o retorno como na imagem a seguir, significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

Devido a limitações de espaço, não vamos detalhar muito os métodos de desenho e princípios de outros padrões; se necessário, recomenda-se ao leitor consultar [ESPHome nesta parte dos exemplos detalhados](https://esphome.io/components/display/).

### Obtendo valores do Home Assistant para exibição

Para exibir dados meteorológicos no seu dispositivo reTerminal E Série ePaper Display, você precisará acessar dados de temperatura, condições climáticas e velocidade do vento do Home Assistant. A integração Open-Meteo fornece dados meteorológicos confiáveis que podem ser acessados por meio das Developer Tools.

#### Instalando a integração Open-Meteo

Passo 1. Abra o painel do Home Assistant e navegue até **Settings** → **Devices & Services**.

Passo 2. Clique no botão **Add Integration** no canto inferior direito.

Passo 3. Pesquise por "Open-Meteo" e selecione-o na lista.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

Passo 4. Siga o assistente de configuração para definir sua localização e unidades preferidas.

Passo 5. Depois de instalada, a integração Open-Meteo criará várias entidades relacionadas ao clima na sua instância do Home Assistant.

#### Acessando dados meteorológicos em Developer Tools

Depois de instalar a integração Open-Meteo, você pode acessar os dados meteorológicos por meio de Developer Tools:

Passo 1. No painel do Home Assistant, navegue até **Developer Tools** → **States**.

Passo 2. Na caixa de filtro, digite `weather` para encontrar a entidade principal de clima.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

Passo 3. Clique na entidade para ver todos os atributos disponíveis. Os principais atributos de clima incluem:

- `temperature`: Temperatura atual (nas unidades configuradas)
- `wind_bearing`: Direção do vento
- `wind_speed`: Velocidade do vento

#### Usando dados meteorológicos no ESPHome

Para usar esses dados meteorológicos na sua configuração ESPHome para o reTerminal E Série, você precisará configurar uma conexão de API do Home Assistant no seu arquivo YAML do ESPHome:

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true
```

Essa configuração cria entidades de sensor no seu dispositivo ESPHome que obtêm dados da integração de clima do Home Assistant. Você pode então usar esses sensores para atualizar o display ePaper do reTerminal E Série com as informações meteorológicas atuais.

:::tip
Para dados de previsão, você precisará usar as entidades `weather.open_meteo_forecast`, que contêm valores previstos para os próximos dias.
:::

Por fim, adicione o código para a seção de display para usar esses valores acima. O código completo é o seguinte:

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myWindBearing).state);
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      // const auto RED     = Color(255, 0,   0,   0);
      // const auto GREEN   = Color(0,   255, 0,   0);
      // const auto BLUE    = Color(0,   0,   255, 0);
      // const auto YELLOW  = Color(255, 255, 0,   0);

      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>
</Tabs>

Depois de compilar o código acima e fazer o upload para o seu dispositivo, você pode primeiro ver **NaN** exibido na tela, por favor não se preocupe, isso é normal. Isso se deve ao fato de que o dispositivo ainda não foi adicionado ao ambiente do Home Assistant, portanto o reTerminal ainda não pôde obter dados do Home Assistant. Só precisamos seguir os passos abaixo para adicionar o dispositivo.

#### Adicionando o display ePaper do reTerminal E Série ao Home Assistant

Passo 1. Depois de gravar o seu dispositivo, volte ao Home Assistant e navegue até **Settings → Devices & Services**.

Passo 3. O Home Assistant deve detectar automaticamente o dispositivo reTerminal E Série ePaper via mDNS. Se ele aparecer na seção de dispositivos descobertos, clique em Configure para adicioná-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

Passo 4. Se o dispositivo não for detectado automaticamente, clique em Add Integration e procure por "ESPHome".

Passo 5. Insira o endereço IP do dispositivo reTerminal E Série ePaper e a chave de criptografia da API, se você tiver definido uma.

Passo 6. Depois que a conexão for estabelecida, o display ePaper do reTerminal E Série aparecerá como um dispositivo no Home Assistant com todos os seus sensores e componentes disponíveis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
O programa pode levar de 2 a 3 minutos desde a conclusão da gravação até a exibição final.
:::

Aqui está o conteúdo aprimorado da Demo 3 com formatação melhorada, posicionamento de imagens e descrições adicionais:

### Desenhando fontes TrueType

Este exemplo demonstra como exibir ícones personalizados no display ePaper do reTerminal E Série usando fontes TrueType. Os Material Design Icons fornecem uma ampla variedade de símbolos escalonáveis perfeitos para displays de papel eletrônico.

#### Instalando as ferramentas necessárias

Passo 1. Primeiro, precisamos instalar o complemento Studio Code Server para gerenciar arquivos. Navegue até a loja de Add-ons do Home Assistant, procure por **Studio Code Server** e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

Passo 2. Clique em **INSTALL** e aguarde a conclusão da instalação. Depois de instalado, clique em **START** para iniciar o editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### Configurando fontes de ícones

Passo 3. Crie uma nova pasta chamada **fonts** no diretório de configuração do ESPHome. Esta pasta armazenará os arquivos de fonte TrueType necessários para exibir ícones.

Passo 4. Baixe o arquivo de fonte Material Design Icons clicando no botão abaixo e extraia o conteúdo.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Baixar fonte Material Design Icons</button></p>
</a>
</div>

Passo 5. Faça o upload do arquivo de fonte baixado (`materialdesignicons-webfont.ttf`) para a pasta fonts que você criou anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### Configurando o ESPHome para ícones

Passo 6. Adicione o seguinte código ao seu arquivo de configuração ESPHome após a seção `captive_portal`. Este código define dois tamanhos de fonte para ícones e configura o display para mostrar ícones de clima.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      it.printf(100, 200, id(font_mdi_medium), RED, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), GREEN, TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

:::note

1. A seção `glyphs` define quais ícones serão carregados do arquivo de fonte. Carregar apenas os ícones necessários economiza memória no seu dispositivo.

2. O programa pode levar de 2 a 3 minutos desde a conclusão da gravação até a exibição final.

:::

Passo 7. Salve sua configuração e envie-a para o seu reTerminal E Série. Quando você vir um retorno como na imagem a seguir, isso significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### Personalizando com Diferentes Ícones

A biblioteca Material Design Icons contém milhares de ícones que você pode usar em seus projetos. Veja como encontrar e usar diferentes ícones:

Passo 1. Acesse o site do Material Design Icons clicando no botão abaixo.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Navegar pelos Material Design Icons</button></p>
</a>
</div>

Passo 2. Procure um ícone que você queira usar em seu projeto. Você pode navegar por categoria ou usar a função de busca.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Passo 3. Quando encontrar um ícone de que gostar, clique nele para ver os detalhes. Procure o valor Unicode, que estará no formato `F0595`.

Passo 4. Adicione o valor Unicode à sua configuração ESPHome:

- Adicionando-o à lista `glyphs` na sua configuração de fonte
- Atualizando o código de exibição para usar o novo ícone

Por exemplo, para usar um novo ícone com Unicode `F0123`:

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

E no lambda de exibição:

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

Passo 5. Salve sua configuração atualizada e envie-a para o seu dispositivo para ver o novo ícone.

:::tip
Para dashboards de clima, considere usar ícones como `F0590` (ensolarado), `F0591` (parcialmente nublado), `F0593` (chuvoso) e `F059E` (ventoso).
:::

Ao combinar esses ícones com os dados de clima do Home Assistant que configuramos anteriormente, você pode criar uma tela de clima dinâmica que mostra as condições atuais usando ícones apropriados.

### Exibindo Imagens Personalizadas

Este exemplo demonstra como exibir imagens personalizadas na sua reTerminal E Série ePaper Display. Você pode usar esse recurso para mostrar logotipos, ícones ou qualquer gráfico que melhore a experiência do seu dashboard.

#### Preparação

Passo 1. Certifique-se de que o add-on **Studio Code Server** esteja instalado no Home Assistant. Se ainda não o instalou, siga as instruções do exemplo anterior.

Passo 2. Crie uma nova pasta chamada **image** no diretório de configuração ESPHome. Esta pasta armazenará os arquivos de imagem que você deseja exibir.

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### Adicionando Imagens

Passo 3. Baixe uma imagem de exemplo para testar a funcionalidade. Você pode usar o ícone de WiFi fornecido abaixo ou usar sua própria imagem.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Baixar Imagem de Exemplo de WiFi</button></p>
</a>
</div>

Passo 4. Envie a imagem baixada para a pasta **image** que você criou anteriormente usando o gerenciador de arquivos do Studio Code Server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
Se você quiser exibir imagens de paisagem complexas e bonitas, é melhor realizar a dithering da imagem com antecedência [em nosso site](https://sensecraft.seeed.cc/hmi/tools/dither) para obter um efeito melhor. Os formatos JPG e PNG são suportados.
:::

#### Configurando o ESPHome para Exibição de Imagens

Passo 5. Adicione o código a seguir ao seu arquivo de configuração ESPHome após a seção `captive_portal`. Este código define o recurso de imagem e configura a tela para exibi-la.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors is needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
<TabItem value="For E1002" label="For E1002">

:::tip
Atualize sua versão do ESPHome para **2025.11.1** ou superior.
:::

```yaml


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            #  Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

Passo 6. Salve sua configuração e envie-a para o seu reTerminal E Série. Quando a atualização for concluída, sua tela de e-paper exibirá a imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### Técnicas Avançadas de Imagem

Você pode aprimorar a exibição de imagens com estas técnicas adicionais:

**Posicionando Imagens**

Para posicionar sua imagem em coordenadas específicas na tela:

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**Combinando Imagens com Texto**

Você pode exibir imagens e texto na mesma tela:

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**Usando Múltiplas Imagens**

Para exibir várias imagens na mesma tela, defina cada imagem na sua configuração:

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
Lembre-se de que telas de e-paper têm taxas de atualização limitadas. A configuração `update_interval: 300s` significa que sua tela será atualizada apenas a cada 5 minutos. Ajuste esse valor de acordo com suas necessidades, mas esteja ciente de que atualizações frequentes podem reduzir a vida útil das telas de e-paper.
:::

Ao combinar imagens com texto e outros elementos de exibição abordados em exemplos anteriores, você pode criar dashboards ricos e informativos no seu reTerminal E Série.

## Continue Lendo

Devido a limitações de espaço, este artigo aborda apenas alguns casos de uso básicos e exemplos de desenho do dispositivo. Abordaremos o uso do hardware do reTerminal no ESPHome com mais detalhes na Wiki [Advanced ESPHome Usage of reTerminal E Series ePaper Display in Home Assistant](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_advanced), que você pode continuar lendo.

## FAQ

### P1: Por que não há dados?

Nesse caso, você deve ir em Settings -> Devices & Services -> Integrations para **RECONGFIGURE** o dispositivo. Não encontrou seu reTerminal? Tente reiniciar o Home Assistant.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### P2: Por que não consigo obter esses dados no Home Assistant? {#port}

Nesse caso, você deve ir em Settings -> Devices & Services -> Integrations para **ADD** seu dispositivo ao HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### P3: reTerminal E Series ePaper Display não consegue se conectar ao seu computador?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Tente desconectar e reconectar várias vezes, ou simplesmente instalar o driver de acordo com os avisos.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
