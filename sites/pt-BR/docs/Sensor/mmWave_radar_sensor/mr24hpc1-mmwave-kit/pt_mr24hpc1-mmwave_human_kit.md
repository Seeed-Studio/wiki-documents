---
description: Primeiros passos com o Kit de Sensor mmWave de Detecção de Pessoas
title: Kit de Sensor mmWave de Detecção de Pessoas
keywords:
  - radar
  - mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_human_detection_kit
sku: E23010426,110061541,E24121301
sidebar_position: 0
last_update:
  date: 08/17/2023
  author: Citric
createdAt: '2023-08-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mmwave_human_detection_kit/
---

# Kit de Sensor mmWave de Detecção de Pessoas MR24HPC1

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Alimentado pelo XIAO ESP32C3 da Seeed Studio, ele oferece suporte a conectividade WiFi/BLE e fornece detecção humana precisa por meio de sensores mmWave. Conecte módulos Grove sem esforço para recursos adicionais. Alcance uma configuração fácil para o Home Assistant em 1–2 minutos, juntamente com práticas atualizações sem fio Over-The-Air (OTA). Habilite ampla versatilidade com sensores mmWave substituíveis. Ideal para personalizar automação de casa inteligente, detectar intrusões e monitorar o bem‑estar de idosos.

### Recursos

- **Detecção Humana de Precisão**: O sensor mmWave integrado, baseado no princípio FMCW, oferece detecção humana precisa com foco em privacidade.
- **Personalização Flexível**: O sensor de Presença Humana integrado pode ser substituído por outras séries mmWave da Seeed para detecção de batimentos cardíacos, detecção de quedas etc.; habilite funcionalidades adicionais com mais de 400 sensores Grove opcionais.
- **Configuração Fácil, Atualizações Sem Fio**: Configuração sem código para Home Assistant em 1–2 minutos, com atualizações sem fio Over-The-Air (OTA).
- **Conectividade Perfeita**: Alimentado por XIAO ESP32C3, com suporte a WiFi/BLE e compatível com sistemas de casa inteligente.
- **Solução Escalável**: Adapte às suas necessidades com serviços OEM/ODM disponíveis para escalabilidade.

### Aplicações

- **Automação Residencial Inteligente**: Aprimore sistemas de iluminação, HVAC e segurança com base na presença humana.
- **Segurança Predial**: Detecte intrusões e dispare alertas para segurança reforçada.
- **Monitoramento de Saúde**: Monitore o movimento de pacientes e auxilie na detecção de quedas.
- **Portas Automáticas**: Permita que as portas se abram quando as pessoas se aproximarem.
- **Cuidados com Idosos**: Monitore o bem‑estar de idosos e forneça assistência em tempo hábil.

## Visão Geral do Hardware

Antes de tudo começar, é essencial ter alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Kit de Sensor mmWave de Detecção de Pessoas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Há algumas coisas a ter em mente ao usar este kit.

1. A função de rede do XIAO ESP32C3 requer o uso de uma antena. Se você quiser instalar um módulo Grove, tente não alterar a posição da antena. A antena é colocada na parte traseira da placa base por padrão, o que garante um bom sinal e não interfere no funcionamento do radar.

2. Os furos reservados na carcaça do kit são furos de ventilação, reservados considerando que os usuários podem usar o módulo sensor para alguns gases; eles não são usados como critério para julgar se há pessoas ou não, portanto, não se preocupe com a questão de privacidade.

:::

A tabela a seguir mostra a conexão de hardware entre o radar de ondas milimétricas e o XIAO ESP32C3. Se necessário, você pode fazer seu próprio desenvolvimento subsequente com base nas conexões da tabela abaixo.

<div class="table-center">
  <table align="center">
    <tr>
    <th>XIAO ESP32C3</th>
    <th>MR24HPC1</th>
    </tr>
    <tr>
    <td>5V</td>
    <td>VCC</td>
    </tr>
    <tr>
    <td>GND</td>
    <td>GND</td>
    </tr>
      <tr>
        <td>GPIO4 (D2)</td>
        <td>RX</td>
      </tr>
      <tr>
        <td>GPIO5 (D3)</td>
        <td>TX</td>
      </tr>
  </table>
</div>

## Primeiros Passos

:::tip
Todo este tutorial se concentra na aplicação rápida do kit no Home Assistant & ESPHome; se você quiser usar o kit para desenvolvimento secundário, consulte a seção [Customized secondary development](#Desenvolvimento-secundário-personalizado) do tutorial.
:::

### Preparação de Software

Nesta rotina, não vamos detalhar como instalar o ambiente do Home Assistant; vamos supor que você já tenha um dispositivo Home Assistant em funcionamento.

Se você quiser aprender como instalar o Home Assistant, então pode consultar o [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos fortemente que você instale o Home Assistant usando um dispositivo x86, pois esta é a maneira mais amigável para instalar o Home Assistant com Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

De acordo com a tabela acima, é mais adequado instalar **Home Assistant OS** e **Home Assistant Supervised**, o que tirará muito trabalho de suas mãos.

Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte‑os.

- [Primeiros Passos com Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)
- [Primeiros Passos com Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)
- [Primeiros Passos com Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)

Além disso, o XIAO ESP32C3 depende do projeto open source ESPHome para acessar o Home Assistant, então você também precisa ter o serviço **ESPHome** instalado em **Add-Ons**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## Primeiros Passos com ESPHome

Saindo de fábrica, o XIAO ESP32C3 do kit já foi gravado com firmware pronto para ser ligado, e conseguimos colocar o kit em funcionamento no Home Assistant em pouquíssimo tempo. O vídeo abaixo mostrará as etapas exatas para começar rapidamente.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Abaixo estão os detalhes passo a passo em forma gráfica; consulte o seguinte para concluir o início rápido.

### Etapa 1. Alimentando o kit

Forneça energia ao kit por meio de um cabo do tipo USB-C. Tome cuidado para que a entrada de energia não exceda 5V/1A, caso contrário, o produto poderá ser danificado.

### Etapa 2. Conectar ao hotspot do kit "seedstudio-mr24hpc1"

Depois que o kit é ligado, um hotspot chamado **seedstudio-mr24hpc1** será aberto automaticamente; procure e conecte‑se a esse hotspot. Você pode usar seu celular para se conectar a essa rede para não precisar alternar de rede no computador com tanta frequência.

:::note
Se você estiver usando uma versão mais antiga do firmware, isso pode exigir que você insira sua senha de WiFi para se conectar a **mmwave-kit**. Recomendamos **[atualizar seu firmware](#Restaurar-firmware-de-fábrica)**. Se você quiser continuar, a senha da rede é `seeedstudio`.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

Em seguida, use seu navegador para acessar o endereço de administração de backend: `192.168.4.1`. É aqui que iremos configurar a rede e a senha que o kit precisa para se conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

Depois, selecione o nome da rede à qual você deseja que o kit se conecte. Observe que a rede selecionada precisa estar na mesma LAN que o Home Assistant, caso contrário, seu kit não será reconhecido pelas buscas do Home Assistant.

:::caution
Se você não conseguir encontrar na página a rede à qual deseja se conectar, é provável que o XIAO ESP32C3 não seja compatível com sua rede. Ajuste o seu roteador para permitir compatibilidade máxima e certifique‑se de que a rede esteja na banda de 2,4 GHz. O XIAO não é compatível com redes na banda de 5 GHz.
:::

Digite a senha correta do WiFi e clique em Save. O dispositivo reiniciará automaticamente e tentará se conectar à rede que você configurou. Você não precisa permanecer nesta página; já pode fechá‑la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### Etapa 3. Adicionar seu dispositivo ao Home Assistant

Se a conexão de rede correr bem, você conseguirá encontrar seu dispositivo no Home Assistant. Siga o caminho abaixo para adicionar seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

Clique em **Settings** na barra de menu e selecione **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

Você deverá ver o dispositivo aparecer na seção **Discovered**; clique no botão **CONFIGURE**. Selecione **SUBMIT** na janela que aparecer em seguida e configure a região para usar o dispositivo normalmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

O kit foi então adicionado com sucesso ao Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
Se você tiver muitos dispositivos em casa, existe uma certa probabilidade de que seu dispositivo não seja encontrado em Discovered. Nesse caso, obtenha o endereço IP do kit no console do seu roteador, clique no botão **Add Integration** no canto inferior direito e insira manualmente o endereço IP para adicionar o dispositivo.
:::

### Etapa 4. Adicionar componentes ao dashboard

Em seguida, clicamos no cartão **ESPHome** adicionado, aqui **1 device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

Isso mostrará todo o conteúdo de componentes que escrevemos para o kit. Vamos rolar um pouco a área de exibição para baixo para adicionar todos esses componentes ao dashboard.

:::caution
Se você não encontrar os componentes mostrados nesta página, verifique a fonte de alimentação do kit e os logs. Se você estiver usando a função de computador, alguns computadores podem não ter portas USB que forneçam energia suficiente. Se tiver certeza de que não há problema com a fonte de alimentação, abra os logs e envie os logs detalhados para o suporte técnico da Seeed Studio.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

Podemos então ver todas as informações e conteúdo em **Overview**.

### Etapa 5. Editar Dashboard

Atualmente, a ordem de exibição do componente do dashboard é automática, o que pode não ser propício para observar e realizar operações de configuração, então em seguida precisamos editar o dashboard para tornar sua exibição mais alinhada com sua função.

Em Overviw, clique nos três pontos com os triângulos e depois clique em **Edit Dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

Na página Edit, clique novamente nos três pontos no canto superior direito para selecionar o **Raw Configuration Editor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, limpe o código no editor original, copie o código abaixo e salve.

:::tip
O novo firmware foi revisado de acordo com a documentação fornecida pela ESPHome e cada dispositivo tem um nome de MAC exclusivo. Portanto, os nomes dos componentes não serão os mesmos. Se você quiser usar o código abaixo, substitua todo o `{$DEVICE}` no código pelo nome do seu dispositivo. O nome do seu dispositivo pode ser visto na entidade do dispositivo no ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Clique aqui para visualizar o código completo</summary>

```css
title: My Home
views:
  - path: default_view
    title: Home
    cards:
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: button.{$DEVICE}_module_restart
                name: Module Restart
              - entity: sensor.{$DEVICE}_hardware_model
                name: Hardware Model
              - entity: sensor.{$DEVICE}_hardware_version
                name: Hardware Version
              - entity: sensor.{$DEVICE}_heartbeat
                name: Heartbeat
              - entity: sensor.{$DEVICE}_product_id
                name: Product ID
              - entity: sensor.{$DEVICE}_product_model
                name: Product Model
            title: DEVICE Information
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: Scene
              - entity: number.{$DEVICE}_sensitivity
                name: Sensitivity
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: Time For Entering No Person State Setting (Standard Function)
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: Presence Information
              - entity: sensor.{$DEVICE}_motion_information
                name: Motion Information
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: Body Movement Parameter
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: Active Reporting Of Proximity
            title: Unsolicited Information
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: Underlying Open Function Info Output Switch
              - entity: sensor.{$DEVICE}_existence_energy
                name: Existence Energy
              - entity: sensor.{$DEVICE}_motion_energy
                name: Motion Energy
              - entity: sensor.{$DEVICE}_static_distance
                name: Static Distance
              - entity: sensor.{$DEVICE}_motion_distance
                name: Motion Distance
              - entity: sensor.{$DEVICE}_motion_speed
                name: Motion Speed
            title: Underlying Open Function
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: Custom Mode Status
              - entity: number.{$DEVICE}_custom_mode
                name: Custom Mode
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: Current Custom Mode
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: End Of Custom Mode Settings
              - entity: select.{$DEVICE}_existence_boundary
                name: Existence Boundary
              - entity: select.{$DEVICE}_motion_boundary
                name: Motion Boundary
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: Existence Energy Threshold
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: Motion Energy Threshold
              - entity: number.{$DEVICE}_motion_trigger_time
                name: Motion Trigger Time
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: Motion To Rest Time
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: Time For Entering No Person State (Underlying Open Function)
            title: Custom Settings
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **DONE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

Uma interface de dashboard totalmente nova é configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

Parabéns, até este ponto você concluiu todo o acesso do kit ao Home Assistant!

## Detalhes de operação do Dashboard

Para ajudá-lo a entender rapidamente todos os recursos do conjunto e o uso dessas funções, você precisa ler esta seção com atenção. Se quiser informações mais detalhadas, recomendamos que você reserve um tempo para ler o [manual do usuário do produto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para detalhes sobre a configuração e os parâmetros do dashboard, compilamos um texto detalhado na documentação do ESPHome, então acesse para ler o texto completo e os detalhes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Documentação ESPHome 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## Desenvolvimento secundário personalizado

Se você precisar substituir o radar ou instalar o módulo Grove, pode consultar as imagens em movimento abaixo para fazer isso. Os quatro parafusos da carcaça estão na parte de trás do produto, remova-os e depois bata suavemente para remover a tampa frontal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

Se você quiser instalar o módulo Grove, pode consultar a imagem abaixo para instalá-lo. Recomendamos que o conector Grove fique voltado para fora e o cabo Grove fique escondido sob o módulo Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
Além da instalação de módulos, a instalação de kits requer atenção especial. A posição de instalação do kit afetará diretamente a precisão do monitoramento, consulte as instruções relevantes no **[Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)** para instalação.
:::

Este kit é voltado principalmente para a área de casa inteligente. O conteúdo de desenvolvimento secundário não será abordado em muitos detalhes, mas forneceremos as informações e conteúdos de desenvolvimento secundário de que você possa precisar, para sua referência.

- Wiki sobre o módulo MR24HPC1 integrado: [24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/pt-br/Radar_MR24HPC1)

- Materiais de desenvolvimento e Wiki prático sobre o XIAO ESP32C3 integrado: [Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/)

### Desenvolvimento secundário para ESPHome

Todo o código do kit está atualmente open source. Se você precisar desenvolver com ESPHome, pode usar o código de componentes externos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Para o uso deste framework de código, você pode consultar o arquivo [**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml) na pasta examples do projeto. Este arquivo é um exemplo de arquivo yaml para ESPHome.

Se você não tiver nenhuma experiência com ESPHome antes disso, pode ler [**este Wiki**](https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-esphome/) para aprender a usá-lo.

## Atualizações de Software com ESPHome OTA

Quando o produto foi projetado, queríamos que ele fosse um dispositivo de monitoramento continuamente alimentado e fixo em um único local. Ao mesmo tempo, continuaremos a atualizar e manter seu software e imaginamos uma situação em que você não precise alterar sua localização e possa implementar atualizações OTA pela LAN.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Clique na tela principal do ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

Clique em **NEW DEVICE**. Em seguida, clique em **Continue**.

Na nova janela pop-up, insira o nome do aplicativo que você deseja configurar, bem como o nome e a senha do WiFi. Certifique-se de que o kit e o Home Assistant estejam na **mesma LAN**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

Em seguida, clique em **Next**. No tipo de dispositivo, selecione **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

Depois clique em **Next**. Em seguida, clique em **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

Atualizaremos nosso programa no projeto Github; assim que o programa for atualizado, você só precisa copiar tudo dentro e sobrescrever o arquivo yaml gerado. Alterações também podem ser feitas nesse arquivo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Por fim, basta selecionar **Wireless** para enviar o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## Restaurar Firmware de Fábrica

### Método 1: Gravar rapidamente o firmware mais recente

Se você estiver usando o kit e encontrar inconsistências com as etapas e o conteúdo acima, atualize o firmware do kit na página a seguir para restaurar as configurações de fábrica.

**Etapa 1.** Clique no botão abaixo para ir para a página Flash Firmware. Em seguida, conecte o kit ao seu computador por meio de um cabo USB-C.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Gravar o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Etapa 2.** Clique no botão Connect e selecione o dispositivo com número de porta que tenha o nome **JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 3.** Gravar Firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

Basta clicar em **INSTALL SEEED STUDIO MMWAVE KIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

Se você vir a tela abaixo, a gravação do firmware foi concluída. Neste ponto, talvez seja necessário ligar novamente o dispositivo para que o programa seja executado. Após concluir a gravação do firmware, você precisará configurar a rede do zero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### Método 2: Gravar o firmware com a ajuda da Ferramenta ESPHome

Se você estiver enfrentando problemas com o dispositivo não funcionando corretamente, tente restaurar o firmware de fábrica e adicionar o dispositivo novamente ao Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- Opção 1: usar a [ferramenta Web ESPhome](https://web.esphome.io/?dashboard_install) para fazer o upload.

Abra a [ferramenta Web ESPhome](https://web.esphome.io/?dashboard_install) com o navegador Chrome ou Edge.

Clique em **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

selecione a porta serial do XIAO ESP32 na janela pop-up.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Clique em **INSTALL** e selecione o arquivo `.bin` baixado nos passos acima.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- Opção 2: Usando a [ferramenta esphome-flasher](https://github.com/esphome/esphome-flasher).

Se você ainda não conseguir fazer o upload do firmware usando o primeiro método após instalar o driver e trocar de navegador, então pode tentar usar o segundo método. Consulte o tutorial oficial para obter métodos específicos de instalação e instruções.

:::tip
Se você desejar observar as mensagens de log do XIAO ESP32C3, também poderá visualizá-las por meio do botão View Logs deste software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Depois que o firmware for carregado com sucesso, você poderá ver a rede chamada **seeedstudio-mr24hpc1**. Consulte o conteúdo [Three minutes to get started ESPHome](#três-minutos-para-começar-esphome) para reconfigurar o dispositivo.

## Recursos

- **[GITHUB]** [Projeto de código aberto](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [Modelo de Configuração Rápida](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Folha de Dados](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual do Usuário](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### Versão 1

- **[ZIP]** [Arquivos PCB&SCH EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### Versão 2

- **[ZIP]** [Arquivos PCB&SCH EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
