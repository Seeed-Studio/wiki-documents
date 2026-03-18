---
description: Introdução ao Seeed Studio 24GHz mmWave for XIAO
title: 24GHz mmWave for XIAO
keywords:
  - mmwave
  - radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_for_xiao
sku: 101010001
last_update:
  date: 11/09/2023
  author: Citric
createdAt: '2023-10-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao/
---

# Seeed Studio 24GHz mmWave for XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução

O 24GHz mmWave Sensor for XIAO - Human Static Presence é uma placa de expansão para a série Seeed Studio XIAO. É um sensor de radar mmwave de alta sensibilidade, com antena integrada, que se baseia no princípio FMCW. Combinado com processamento de sinal de radar e algoritmos precisos de detecção do corpo humano, ele pode identificar corpos humanos em movimento e em estado estacionário.

### Características

- **Baseado no princípio FMCW**: altamente sensível e imune a interferências ambientais
- **Detecção Abrangente do Corpo Humano**: o sensor não apenas detecta corpos humanos em movimento com alta sensibilidade, mas também apresenta sensibilidade a indivíduos estáticos, micromovimentos, bem como indivíduos em posições sentadas ou deitados.
- **Ajuste Inteligente de Parâmetros em Múltiplos Níveis**: ajustado usando Bluetooth ou uma porta serial, proporcionando flexibilidade para atender a diferentes condições ambientais e mudanças de cenário. Além disso, suporta configuração direta de parâmetros por meio de um app, eliminando a necessidade de conexão via porta serial.
- **Amplo Ângulo de Detecção e Longa Distância de Sensoriamento**: com um campo de visão de até 60 graus, o sensor pode detectar movimentos em um amplo ângulo. Além disso, pode detectar objetos a até 5 metros de distância.
- **Excelente Penetração de Carcaça e Melhora da Estética**: possui boa capacidade de penetração de carcaça, permitindo que funcione discretamente dentro do invólucro do produto, sem necessidade de perfurações na superfície.

### Aplicações

- Controle de iluminação por sensor de presença humana
- Proteção de segurança de vida
- Eletrodomésticos inteligentes
- Segurança inteligente

### Especificações

<div class="table-center">
  <table align="center">
    <tr>
        <th>Parâmetro</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td align="center">Frequência de operação</td>
        <td align="center">24GHz ~ 24.25GHz</td>
    </tr>
    <tr>
        <td align="center">Tensão de operação</td>
        <td align="center">DC 5V</td>
    </tr>
    <tr>
        <td align="center">Capacidade de fornecimento de energia</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">Corrente média de operação</td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">Modulação</td>
        <td align="center">FMCW</td>
    </tr>
    <tr>
        <td align="center">Interface</td>
        <td align="center">GPIO (nível de IO 3.3V), UART</td>
    </tr>
    <tr>
        <td align="center">Aplicação alvo</td>
        <td align="center">Sensor de presença humana</td>
    </tr>
    <tr>
        <td align="center">Distância de detecção</td>
        <td align="center">0.75m ~ 6m (ajustável)</td>
    </tr>
    <tr>
        <td align="center">Ângulo de detecção</td>
        <td align="center">±60°</td>
    </tr>
    <tr>
        <td align="center">Resolução de distância</td>
        <td align="center">0.75m</td>
    </tr>
    <tr>
        <td align="center">Largura de banda de varredura</td>
        <td align="center">250MHz</td>
    </tr>
    <tr>
        <td align="center">Temperatura ambiente</td>
        <td align="center">-40℃ ~ 85℃</td>
    </tr>
    <tr>
        <td align="center">Dimensões</td>
        <td align="center">18mm x 22mm</td>
    </tr>
  </table>
</div>

## Visão Geral de Hardware

Este sensor mmwave é compatível com toda a linha XIAO, portanto as definições de pinos seguem as definições de pinos do XIAO. No entanto, considerando o uso generalizado de portas seriais, projetamos uma conexão serial por software para o sensor mmwave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

O sensor depende fortemente das portas seriais por software (D2 - TX, D3 - RX) e de uma fonte de alimentação de 3.3V. Fora isso, nenhum dos outros pinos será utilizado.

## Primeiros Passos

Este módulo sensor oferece suporte tanto à visualização direta por software (via Bluetooth) quanto ao desenvolvimento secundário (usando XIAO e UART). Se você quiser observar os valores do sensor o mais rápido possível, pode consultar as etapas de **Primeiros Passos** para usar o software que fornecemos.

## Conexões de Hardware

O sensor foi projetado para compatibilidade com XIAO, então, em geral, se você quiser usar este sensor, precisa preparar um XIAO e instalar o conector fêmea de fileira de pinos para o sensor. Ao conectar ao XIAO, preste atenção especial à direção de instalação do sensor; não o conecte invertido, caso contrário é provável queimar o sensor ou o XIAO.

:::caution
A direção correta a ser seguida é que a antena do sensor deve ficar voltada para fora.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Depois de confirmar que a direção da conexão está correta, você pode conectar o cabo USB-C ao computador ou fonte de alimentação, e o sensor começará a funcionar.

### Software do Sensor mmwave

O software HLKRadarTool pode ser usado para observar diretamente os valores do sensor do radar. O software atualmente é compatível com sistemas IOS, Android e Windows.

- [Baixe o HLKRadarTool na Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [Baixe o HLKRadarTool na App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

- [Baixe o HLKRadarTool para Windows](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

A seguir, descrevemos como usar esses softwares em conjunto com o sensor.

### Guia de Operação do Software para Dispositivos Móveis

Se você deseja observar os valores do sensor no seu telefone celular, então será necessário se comunicar com o telefone usando o Bluetooth do sensor, o que significa que você também precisará de um telefone com Bluetooth. E faça o download antecipado do software acima.

**Passo 1.** Abra o app, e o app pesquisará por dispositivos de radar próximos. O nome de broadcast do dispositivo é **HLK-LD2410_xxxx** (xxxx são os últimos quatro dígitos do endereço MAC).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
A distância de uso do APP não deve exceder o alcance do sinal Bluetooth (dentro de 4 metros).
:::

**Passo 2.** Após o módulo ser conectado com sucesso, você pode visualizar as informações do radar, ou depurar e salvar os parâmetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**Passo 3.** Na opção More, no canto superior direito do software, você pode acessar o menu de configurações para definir parâmetros e recursos personalizados para o sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
Antes de modificar esses parâmetros e configurações, recomendamos que você leia atentamente o [User Protocol Manual](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf) e consulte as instruções do manual para modificá-los. Para mais detalhes sobre o significado dos valores exibidos pelo software e os parâmetros de configuração, leia o [User Protocol Manual](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf).
:::

### Guia de Operação do Software para Windows

A fim de facilitar que o usuário teste e configure o módulo de forma rápida e eficiente, é fornecida uma ferramenta de configuração para PC. O usuário pode usar esse software de ferramenta para conectar-se à porta serial do módulo, ler e configurar os parâmetros do módulo, e receber os resultados de detecção relatados pelo módulo. Os dados são exibidos visualmente em tempo real, o que facilita muito o uso pelos usuários.

**Passo 1.** Use a ferramenta USB para porta serial para conectar corretamente a porta serial do módulo.

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>Ferramenta USB para porta serial</th>
            <th>Sensor mmWave</th>
  </tr>
  <tr>
   <td rowspan="5"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/9.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td align="center">3V3</td>
   <td align="center">3V3</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
  <tr>
   <td align="center">RX</td>
   <td align="center">TX</td>
  </tr>
  <tr>
   <td align="center">TX</td>
   <td align="center">RX</td>
  </tr>
 </table>
</div>

**Passo 2.** Selecione o número de porta serial correspondente na ferramenta do computador hospedeiro, defina a taxa de transmissão para **256000**, selecione o **Engineering Mode** e clique em **Connect** para conectar o dispositivo.

:::tip
Se você abriu o software antes de conectar o sensor ao computador, talvez seja necessário clicar em Refresh para atualizar o número da porta.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**Passo 3.** Após a conexão ser bem-sucedida, clique no botão Start, e a interface gráfica à direita exibirá os resultados de teste e os dados. Após a conexão ser bem-sucedida, clique no botão Start, e a interface gráfica à direita exibirá os resultados de teste e os dados.

:::note
Os parâmetros não podem ser lidos e configurados após clicar em iniciar, e a configuração só pode ser realizada após parar.
:::

A bola é a indicação de saída do status do alvo: vermelho significa que há um alvo em movimento; roxo significa que há um alvo estacionário; verde significa que não há ninguém.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## Recuperação de Anomalias do Sensor

Se você encontrou anomalias do radar durante o uso do sensor, como dados não sendo reportados, travamentos e assim por diante, pode tentar restaurar o firmware do sensor conforme descrito aqui.

O método para recuperar o firmware é usar o aplicativo de celular com função Bluetooth; no canto superior direito da interface principal do software, selecione **More** e, em seguida, selecione **Initialize**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## Atualização OTA

Quando o firmware do dispositivo tiver sido atualizado, a palavra **upgradeable** aparecerá na versão do firmware; mantenha pressionado o número da versão para entrar na interface de atualização; apenas a versão **V1.07.22091516** ou mais recente oferece suporte à atualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

O tempo total de atualização leva de 1 a 3 minutos. A atualização deve ser realizada a partir do módulo, caso contrário, se o sinal Bluetooth for fraco, a atualização falhará.

Não desligue nem reinicie o módulo antes que a atualização seja concluída, e não force o encerramento do APP, caso contrário, a atualização falhará. Se a atualização falhar, o programa do sensor será desabilitado e a detecção do sensor não será possível. Se a atualização do dispositivo falhar, reinicie o dispositivo e reconecte o APP; um aviso de "waiting for upgrade" aparecerá na lista de dispositivos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

Clique no dispositivo a ser atualizado para atualizar novamente; a função de radar só poderá ser restaurada após a conclusão bem-sucedida da atualização.

## Recursos

- **[PDF]** [24GHz mmWave for XIAO Datasheet-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO User Protocol Manual](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO SCH](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
