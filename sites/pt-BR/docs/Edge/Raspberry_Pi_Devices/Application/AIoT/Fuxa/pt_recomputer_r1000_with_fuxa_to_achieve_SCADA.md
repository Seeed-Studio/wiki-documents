---
description: Este artigo apresenta principalmente como usar o fuxa para implementar SCADA.
title: reComputer R1000 com fuxa para implementar SCADA
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_achieve_scada/
---

## Introdução

FUXA é um software web de Visualização de Processo (SCADA/HMI/Dashboard). Com o FUXA você pode criar visualizações de processo modernas com designs individuais para suas máquinas e exibição de dados em tempo real. Ele suporta Modbus RTU/TCP, protocolo Siemens S7, OPC-UA, BACnet IP, MQTT e outros protocolos.

Este artigo apresenta principalmente como usar o fuxa para implementar SCADA. No artigo, o fuxa recebe dados de `node-red` e `OPC UA Simulator`, e os exibe usando `chart` e `Circular Gauge`; ao mesmo tempo, desenha uma série de padrões para simular processos industriais.

## Primeiros Passos

Antes de iniciar este projeto, talvez seja necessário preparar seu hardware e software com antecedência conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

- Python 3.11 pode ser incompatível com o fuxa. Se a sua versão do Python for 3.11, considere mudar para uma versão diferente do Python.

- Usando [fuxa](https://github.com/frangoteam/FUXA) no reComputer R1000. Você pode consultar as etapas a seguir para instalar o fuxa no reComputer R1000

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- Quanto a como usar o fuxa para implementar interação de dados OPC-UA, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_opc_ua/).

- Quanto a como usar o fuxa para implementar a interação de dados com o cliente mqtt, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_mqtt_client/). Diferentemente deste wiki, os dados que publicamos em `node-red` são processados pelo módulo `function`, e o módulo `loop` é usado para publicação contínua. O código do módulo `function` é o seguinte:

  ```java
  ## On Start
    global.set('firstTank', '10000');
    global.set('secondTank', '0');
    global.set('thirdTank', '0');
  ```

  ```java
  ## On Message
    var firstTank = global.get('firstTank');
    var secondTank = global.get('secondTank');
    var thirdTank = global.get('thirdTank');
    if (firstTank <= 0) {
        global.set('firstTank', 10000);
        global.set('secondTank', 0);
        global.set('thirdTank', 0);
        firstTank=10000;
        secondTank=0;
        thirdTank=0;
    }

    firstTank = firstTank - 3;
    secondTank++;
    thirdTank++;
    thirdTank++;
    global.set('firstTank',firstTank);
    global.set('secondTank',secondTank);
    global.set('thirdTank',thirdTank);
    var data = {
        "firstTank":firstTank,
        "scondTank":secondTank,
        "thirdTank":thirdTank,
    };
    msg.payload = data;
    return msg;
  ```

  O principal é encapsular firstTank, secondTank e thirdTank em formato json, e então deixar o módulo mqtt-out publicá-lo.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- Clique no botão `+` no canto inferior direito do fuxa, insira `Name`, `Type`, selecione `Internal` e, por fim, clique em `OK` para obter um novo módulo. Este módulo não possui a função de comunicação com dispositivos externos, mas nos permite adicionar tags personalizadas. Essas tags suportam três tipos de dados, como `boolean`, `number` e `string`, o que pode facilitar nosso trabalho subsequente.

    <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### Configuração de Hardware

Usamos cabos Ethernet para conectar o PC W10 e o reComputer R1000 a um switch para garantir que estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Introdução à exibição visual e aos principais controles

### Chart

Há gráficos de curva e histogramas disponíveis no fuxa. Tomando o gráfico de curva como exemplo, as propriedades de `Chart` são mostradas na figura. Você pode definir as propriedades de `Chart`, como `Name`, `font size`, `data format`, `time format`, `X axis and Y axis styles` e outras. O mais importante é `Chart to show`, que determina a fonte de dados que queremos exibir e o formato das linhas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

Clicamos em `Chart to show`, depois selecionamos `New Chart`, uma nova janela pop-up aparecerá, clique no botão `+` no canto superior direito da nova janela pop-up, insira `Name` e depois clique em `OK`, você pode criar com sucesso uma nova configuração de linha. Em seguida, clique na configuração de linha recém-criada, depois clique em `Add Line`, selecione os dados que deseja exibir e, por fim, clique em `OK`, uma nova curva aparecerá. Várias curvas podem ser adicionadas por meio desse processo. Por fim, clique em `OK` para concluir a configuração.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png" /></center>

Usamos `Chart` aqui para exibir dados do `Prosys OPC UA Simulation Server`. Você pode ver que os dados são exibidos com sucesso na forma de um gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### Swich

Os atributos do switch são mostrados na figura. Selecionamos um dado boolean chamado `swich_1` como o estado do swich. Você pode configurar o estado de exibição do `swich` quando estiver ligado ou desligado, incluindo configuração de cor, exibição de texto etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### Shape

O Fuxa fornece uma variedade de `shape` para que os usuários desenhem interfaces de visualização industrial. Cada `shape` possui três atributos, a saber, `Property`, `Events` e `Actions`.
Entre eles, `Property` é usado principalmente para configurar a cor de `shape`. Ao vincular um `Tag`, `shape` exibe cores diferentes de acordo com a mudança do valor de `Tag`. Você pode clicar em `+` no canto superior direito para definir cores diferentes.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

Aqui tomamos um padrão de armazém como exemplo, preenchendo sua cor com `Property`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events` tem principalmente dois conteúdos, `Type` representa o tipo de evento e `Action` representa a ação após o evento ser acionado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions` precisa ser vinculado a um `Tag`, e diferentes valores de `Tag` podem acionar ações diferentes. Defina os valores de `Min` e `Max` e, em seguida, selecione a ação desejada na opção `Type`. Quando os dados do `Tag` atingirem o intervalo entre Min e Max, a ação correspondente será acionada.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png" /></center>

Aqui tomamos um padrão de armazém como exemplo, controlando sua rotação e parada por meio de `Actions`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### Pipe

Ao exibir processos industriais, você pode usar `pipe` para representar a direção de fluxo dos materiais industriais. As propriedades do pipe são mostradas na figura.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

A parte `Property` pode definir a largura, a cor e outras propriedades do pipe. `Actions` também precisa ser vinculado a um `Tag`. Diferentes valores de tag permitem que o tubo tenha ações diferentes. Há quatro ações principais: `Stop`, `Turn clockwise`, `Turn anticlockwise` e `Hide conten`. Este artigo mostra duas ações: `Stop` e `Turn clockwise`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

Para simular o processo industrial, adicionamos padrões como dois tanques e alguns tubos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### Circular Gauge

Além de `charts`, `Circular Gauge` também pode exibir dados em tempo real. Há três `Circular Gauge` disponíveis.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

Ao usá-lo, você precisa especificar os dados a serem exibidos vinculando um `Tag`. Ao mesmo tempo, é necessário especificar o intervalo máximo de dados que o instrumento pode exibir. Você também pode definir atributos como linhas no painel do instrumento. Aqui selecionamos os dados de `Tank1` no tópico `/dev/fromfuxa` para exibição.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

Depois disso, os dados de `Tank2` e `Tank3` também são exibidos por meio do `Circular Gauge` para indicar a capacidade atual de cada tanque.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### Slider

Use o slider para ajustar variáveis como vazão, pressão, etc. As suas propriedades são mostradas na figura. Você pode definir sua cor e formato. Ao utilizá-lo, é necessário vincular um `Tag`. Então o slider pode ajustar o valor do `Tag` em tempo real. Aqui vinculamos um `Flow control 1` personalizado

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### Alarme

No processo industrial, valores excessivos de certos parâmetros (como pressão) podem causar alguns perigos. Nesse momento, é necessário um alarme para lembrar a equipe de que pode haver alguns problemas ali. O Fuxa suporta monitoramento em tempo real de um determinado valor e aciona um alarme quando o valor atinge uma determinada faixa perigosa.
Por padrão, a interface do fuxa não abre a barra de alarmes. Você precisa configurá-la para abrir a barra de alarmes.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

Depois que a barra de alarmes é aberta, você pode configurar o alarme. Clique no botão de configurações no canto superior esquerdo, depois clique em `Alarms` e, em seguida, clique em `+` na nova janela para exibir a janela de configuração de alarmes. Nesse momento, é necessário vincular um `Tag`, e o sistema irá monitorar o valor desse `Tag`. `Alarms` tem quatro níveis, a saber: `High High`, `High`, `Low`, `Message`. Você pode definir uma faixa de valores de `Tag` para cada nível, e quando o valor do `Tag` atingir essa faixa, alertas do nível correspondente serão acionados.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### Demonstração de SCADA

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
