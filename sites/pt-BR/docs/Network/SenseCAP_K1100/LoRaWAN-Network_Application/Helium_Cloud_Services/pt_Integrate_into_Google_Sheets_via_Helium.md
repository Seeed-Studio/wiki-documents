---
description: Integrado ao Google Sheets
title: Integrado ao Google Sheets
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Integrate_into_Google_Sheets_via_Helium/
---
# Integrar ao Google Sheets via Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets é um aplicativo baseado na web que permite aos usuários criar, atualizar e modificar planilhas e compartilhar os dados online em tempo real.

O aplicativo de planilhas online Google Sheets permite que os usuários criem, editem e formatem planilhas online para organizar e analisar informações. O Google Sheets é frequentemente comparado ao Microsoft Excel, pois ambos os aplicativos são usados para propósitos semelhantes. O Google Sheets é essencialmente a versão em nuvem do Google dos recursos básicos do Microsoft Excel.

Graças aos recursos de integração do Helium, podemos facilmente salvar dados dos sensores via Google Sheets e fazer algumas análises de dados simples de acordo.

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. e Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. e Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp. do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp. do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Criar Google Form

Se você ainda não tiver se registrado para uma conta Google antes de aprender este tutorial, conclua primeiro a criação da sua conta Google [aqui](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

Depois de concluir o registro da conta, faça login na [página do Google Forms](https://docs.google.com/forms/u/0/). Em seguida, simplesmente crie um novo Google Form.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

Recomendamos definir as perguntas como "Short answer".

Aqui, criarei uma tabela usando o Vision AI Module como exemplo. Esta tabela deve ter dois conjuntos de dados, um para o número de pessoas detectadas e outro para seu nível de confiança.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    É necessário selecionar Short Answer para cada nova tag de sensor criada.
:::
Vá até a aba de respostas e indique ao formulário que você deseja que seus resultados sejam enviados ao Google Sheets clicando no botão do Google Sheets.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

Basta inserir o título do Google Form na nova janela pop-up e clicar no botão **Create** no canto inferior direito.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

Certifique-se de que criamos as colunas necessárias.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## Tornar o Form público

Volte para nossa página de configuração do formulário e clique no botão **Send** no canto superior direito para obter o link de compartilhamento do formulário.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

Você receberá um link de compartilhamento como este.

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

Estamos interessados apenas no ID do formulário, então vamos remover o prefixo `https://docs.google.com/forms/d/e/` e o sufixo `/viewform?usp=sf_link`. Devemos ficar com uma grande string que não contém barras.

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

Por favor, anote este ID, que será usado na integração com o Helium.

## Adicionar integração com Google Sheets no Helium

Volte para o Helium e adicione uma integração com o Google Sheets no Console; vá para Integrations no menu à esquerda. Selecione a integração a ser adicionada – neste caso, a integração com o Google Sheets, como mostrado abaixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

Clique em **Add Integration** na nova página.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

Na nova página, inserimos o ID do formulário que obtivemos acima no campo correspondente e clicamos em **Get Google Form Fields** para verificar se o ID está correto. Se, após clicar, conseguirmos obter o conteúdo dos rótulos nas colunas do formulário, o link está correto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

Clique em **Generate Function Body w/ Fields Above** na parte inferior e o Helium irá gerar automaticamente o decodificador necessário para nós.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
Neste ponto, você não precisa se apressar em clicar no botão Add Integration à direita, pois a integração ainda precisa de uma pequena modificação para acomodar os valores dos sensores que transmitimos.
:::

## Crie seu Decoder

Preparamos para você o código do decoder completo necessário para importar todos os sensores do kit para o Google Sheets; consulte a tabela abaixo.

Antes de usar o código do decodificador para o sensor correspondente, certifique-se de que você seguiu o tutorial acima para criar e compartilhar o Google Form. E se você quiser usar diretamente o código fornecido por nós, **o rótulo do sensor no seu formulário também deve corresponder ao código**.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Endereço de Download</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Umidade do Solo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gás VOC e eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temperatura e Umidade (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">Download</a></td>
    </tr>
  </tbody></table>

:::note
O decodificador usado pelo Google Forms não pode ser usado com o decodificador fornecido em [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#write-decoders-function-for-different-sensors).
:::
Dando continuidade ao passo anterior, precisamos copiar e substituir a área de código do Helium pelo codec do sensor que você está usando e, em seguida, basta clicar em Add Integration no lado direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

Claro, não se esqueça que precisamos adicionar a integração do decodificador e do Google Forms ao **Flow**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## Enviar dados para o Helium fazendo upload do código

Siga as instruções do [tutorial Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#upload-code-send-data-to-helium) para fazer upload do código e enviar os valores do seu sensor para o Helium.

Assim que os dados começarem a ser enviados, você poderá ver uma atualização em tempo real dos dados no Google Sheets.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

Você também pode fazer como eu fiz acima, adicionando uma variedade de estilos de tabela ao Google Sheets para torná-lo mais intuitivo e fácil para você ver os dados ou entender as tendências deles.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
