---
description: Get_Started_with_SenseCAP_T1000_tracker
title: Início Rápido
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 2/14/2026
  author: Janet
createdAt: '2023-08-15'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker/
---


Este capítulo irá guiá-lo na configuração do SenseCAP T1000 Tracker via aplicativo SenseCAP Mate.

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Guia do Usuário </font></span></strong>
    </a>
</div>
<br />

:::caution note
Certifique-se de que você tenha cobertura de uma rede LoRaWAN, como Helium, TTN ou outras redes LoRaWAN. Sem redes LoRaWAN, o dispositivo não pode enviar dados para a nuvem. A maneira mais fácil de usar os rastreadores é com o `SenseCAP LoRaWAN Gateway` e o `SenseCraft app`.
:::

## Funções do Dispositivo

### Modo de Trabalho

Para se adaptar a diferentes cenários, existem vários modos de trabalho no SenseCAP T1000 tracker, que você pode escolher de acordo com suas necessidades.

|**Modo de Trabalho**|**Descrição**|**Cenário**|
| - | - | - |
|Modo de Espera|<p>Somente pacotes de batimento cardíaco são enviados, incluindo apenas informações de bateria. </p><p>A localização pode ser obtida usando o comando LoRa downlink.</p>|Se você precisar localizar o dispositivo por um longo tempo e ele puder funcionar por muito tempo antes de ser carregado, a plataforma em nuvem pode emitir um comando de solicitação de localização para localizar o dispositivo.|
|Modo Periódico|Defina um intervalo no qual o dispositivo envie periodicamente dados de localização e do sensor.|Este modo é recomendado para a maioria dos cenários.|
|Modo de Evento|Ajusta o intervalo de upload de acordo com o sensor de temperatura, luz e aceleração do rastreador, incluindo evento de temperatura, evento de luz, evento de movimento, tempo limite sem movimento e evento de choque.|Pode ser usado em cenários complexos, como monitorar o transporte de itens importantes. Mas o consumo de energia aumenta bastante.|

### Função dos Sensores

O SenseCAP T1000 Tracker está equipado com 3 sensores: sensor de temperatura, sensor de luz e acelerômetro de 3 eixos.
Você pode escolher ativar ou desativar esses sensores:

- Desative todos os sensores, mas você também pode escolher uma versão sem sensor para reduzir custos.
- Somente os sensores de temperatura e luz são ativados para monitorar dados periodicamente com baixo consumo de energia.
- Quando temperatura, iluminação e acelerômetro são usados como condições de disparo, o sensor ficará sempre alimentado e o dispositivo consumirá muita energia.

|**Sensor**|**Descrição**|
| - | - |
|Temperatura|<p>Este é um sensor de temperatura independente onboard com **uma precisão de ±0,5~1℃**. Deve-se notar que pode haver algum atraso na medição de temperatura aqui, porque ele é separado da carcaça.</p><p>Faixa: -20 a 60℃; Precisão: ± 1℃ (mín 0,5℃, máx 1℃); Resolução: 0,1℃</p>|
|Luz|<p>O sensor de luz não é o valor real de lúmen monitorado, mas uma porcentagem da luz do escuro ao claro. Principalmente pode ser usado para monitoramento anti-desmontagem e alguns monitoramentos sensíveis à luz.</p><p>Faixa: 0 a 100% (0% é escuro, 100% é o mais claro)</p>|
|Acelerômetro de 3 Eixos|Definindo o valor da aceleração, os eventos de movimento e de choque são acionados.|

### Cache de Dados

O dispositivo pode armazenar dados em cache, o que pode ser habilitado por meio da configuração Bluetooth, ativando "GNSS Data Cache". O dispositivo envia pacotes de confirmação. Quando a cobertura de sinal LoRaWAN é fraca ou não há cobertura de rede, o dispositivo não consegue receber um ack ao enviar dados. Nesse caso, os dados serão salvos e entrarão no próximo ciclo. Quando o dispositivo enviar dados com sucesso em algum momento, ele enviará os dados offline. O número máximo de dados que podem ser armazenados em cache é de 1000 registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Função do Botão

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>Ações</b></th><th colspan="1"><b>Descrição</b></th><th colspan="1"><b>Status do LED</b></th><th colspan="1"><b>Buzina</b></th></tr>
<tr><td colspan="1" rowspan="2">Pressione o botão e segure por 3 segundos</td><td colspan="1">Se o rastreador estiver desligado, pressione e segure o botão por 3 segundos para ligá-lo. O pareamento via Bluetooth será ativado automaticamente e o usuário poderá usar o aplicativo para escanear e conectar.</td><td colspan="1">O LED pisca uma vez por segundo.</td><td colspan="1">Melodia de subida</td></tr>
<tr><td colspan="1">Se o dispositivo estiver ligado, pressione e segure o botão por 3 segundos para ativar o pareamento Bluetooth.</td><td colspan="1">O LED pisca uma vez por segundo.</td><td colspan="1">Nenhum</td></tr>
<tr><td colspan="1">Pressione o botão e segure por 9 segundos</td><td colspan="1">Desligar.</td><td colspan="1">Nenhum</td><td colspan="1">Melodia de descida</td></tr>
<tr><td colspan="1">Ingressar na rede LoRa</td><td colspan="1">Após sair das configurações de Bluetooth, tente ingressar na rede LoRaWAN.</td><td colspan="1">A luz de respiração pisca ao tentar acessar a rede e pisca rapidamente se a rede for ingressada com sucesso</td><td colspan="1">Uma melodia rápida e alegre quando a rede é ingressada com sucesso</td></tr>
<tr><td colspan="1" rowspan="2">Pressione uma vez</td><td colspan="1">Obter dados de localização/sensor, enviar dados e acionar imediatamente o evento "Pressione uma vez".</td><td colspan="1">O LED permanece aceso por 2 segundos</td><td colspan="1">Um som tocará quando os dados forem enviados com sucesso.</td></tr>
<tr><td colspan="1">Se o pareamento Bluetooth estiver ligado, pressionar uma vez pode desligar o Bluetooth.</td><td colspan="1">O LED será desligado</td><td colspan="1">Nenhum</td></tr>
<tr><td colspan="1" rowspan="3">Pressione duas vezes continuamente</td><td colspan="1">Se o SOS estiver definido para modo de disparo único, clicar duas vezes no botão ativará o modo SOS de disparo único e enviará uma vez os dados de localização/sensor e os eventos SOS.</td><td colspan="1">Pisca com o som</td><td colspan="1">3 segundos de som de alarme</td></tr>
<tr><td colspan="1">Se o SOS estiver definido para modo contínuo, clicar duas vezes no botão ativará o modo SOS contínuo. A localização, os dados do sensor e os eventos SOS serão enviados uma vez por minuto, e o modo terminará automaticamente após 30 vezes.</td><td colspan="1">Pisca com o som</td><td colspan="1">Um som de alarme constante</td></tr>
<tr><td colspan="1">Clique duplo duas vezes para sair do modo SOS</td><td colspan="1">Nenhum</td><td colspan="1">Nenhum</td></tr>
<tr><td colspan="1">Entrar no Modo DFU</td><td colspan="1">Após uma falha na atualização do firmware, o dispositivo pode entrar no modo DFU. Você pode ver o nome do dispositivo `SENSECAP_GR_DFU_XXXX` no aplicativo SenseCraft. <br />
No modo DFU, o dispositivo sairá automaticamente após 3 minutos de inatividade.
Se você desejar sair imediatamente, pode pressionar e segurar o botão por 3 segundos, e o dispositivo será reiniciado e retornará à operação normal.</td><td colspan="1">As luzes do LED continuam piscando</td><td colspan="1">Nenhum</td></tr>
</table>

:::info Note

- É recomendável desligar o dispositivo se ele não estiver em uso.
- Quando ligado pela primeira vez, recomenda-se testá-lo ao ar livre, pois o GPS precisa atualizar a hora via satélite.
- Certifique-se de que a banda de frequência corresponda à frequência do seu gateway.
:::

## Primeiros Passos

### Conectar ao Aplicativo SenseCAP Mate

- **Passo 1**: Baixar o aplicativo SenseCAP Mate

O aplicativo SenseCAP Mate é usado para configurar parâmetros LoRa, intervalo, vincular dispositivos à sua conta e verificar informações básicas do dispositivo.

- Para iOS, pesquise por “SenseCAP Mate” na App Store e baixe-o.
- Para Android, pesquise por “SenseCAP Mate” na Google Store e baixe-o.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2**: Adicionar Dispositivo

Faça login no aplicativo SenseCAP Mate.
Clique na aba 'Add Device' no canto superior direito e, em seguida, escaneie o código QR na etiqueta do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

Pressione o botão por 3 segundos e selecione o dispositivo pelo SN.

Existem 2 modos de configuração:

- **Configuração Rápida**: Para um início rápido, você pode selecionar a configuração rápida dos parâmetros básicos
- **Configuração Avançada**: Para definir mais parâmetros, verifique as etapas a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### Configuração Rápida

Para a Configuração Rápida, você só precisa configurar os seguintes parâmetros:

- **Frequência**: deve ser a mesma do seu gateway.
- **Intervalo de uplink**: O intervalo de uplink do Modo Periódico (modo padrão); você pode configurar outro modo via “Device Bluetooth Configuration” na página “User”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

O rastreador tentará ingressar na rede LoRaWAN; a luz de respiração pisca ao tentar ingressar na rede e pisca rapidamente se a rede for ingressada com sucesso, acompanhada de uma melodia rápida e alegre.

### Configuração Avançada

- Pressione o botão e segure por 3 segundos para ligá-lo; em seguida, o pareamento Bluetooth será ativado automaticamente, e o usuário poderá usar o aplicativo para escanear e conectar.
- Abra o aplicativo e clique em “Tracker T1000”. Selecione “Setup” para configurar o rastreador.
- Selecione o dispositivo pelo S/N (S/N está na etiqueta do dispositivo). Em seguida, as informações básicas do sensor serão exibidas após a entrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

Clique em “Measure” e então você obterá os valores do sensor:

|Temperatura|Faixa: -20 a 60℃; Precisão: ± 1℃ (mín 0,5℃, máx 1℃); Resolução: 0,1℃|
| - | - |
|Luz|0 a 100% (0% é escuro, 100% é o mais claro)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### Configuração de Parâmetros LoRa

Os rastreadores são fabricados para suportar o plano de frequência universal de 863MHz~928MHz em um único SKU. Cada dispositivo individual pode suportar 7 planos de frequência.

<table align="center">
  <caption> <h2>Plataforma</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Plataforma</h4></td>
    <td><h4>Descrição</h4></td>
    </tr>
    <tr>
      <td>SenseCAP para The Things Network</td>
    <td>Plataforma padrão.
Deve ser usada com o SenseCAP Gateway. SenseCAP constrói um servidor TTN proprietário que permite que os sensores sejam usados imediatamente quando emparelhados com um gateway SenseCAP. <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP para Helium</td>
    <td>Quando houver cobertura da rede Helium, os dados podem ser enviados via Helium. Os dispositivos operam em um console Helium privado da SenseCAP. Os usuários não precisam criar dispositivos no console Helium, funcionando imediatamente com o aplicativo SenseCAP Mate e o Portal. <br /><a href="https://explorer.helium.com/" target="_blank"><span>Cobertura Helium</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>Conecte o dispositivo ao seu console público Helium</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>Conecte o dispositivo ao seu servidor TTN(TTS)</td>
    </tr>
            <tr>
    <td>Outra Plataforma</td>
    <td>Outro Servidor de Rede LoRaWAN</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>Parâmetros</h4></td>
    <td><h4>Descrição</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Plano de Frequência</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>Padrão EU868</td>
    </tr>
        <tr>
    <td>Política de Pacotes</td>
    <td>1C</td>
    <td>LoRaWAN usa pacote confirmado</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>Padrão ativado</td>
    <td>Parâmetros LoRaWAN, recomenda-se deixar ativado por padrão</td>
    </tr>
            <tr>
    <td>Restaurar Configuração LoRa</td>
    <td>Quando a “Plataforma” voltar para SenseCAP a partir de outra plataforma, os parâmetros LoRa (EUI/App EUI/App Key etc.) precisam ser restaurados</td>
    <td>Você pode usar esta função quando precisar restaurar os parâmetros LoRa para os padrões de fábrica</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

O sensor suporta dois modos de acesso à rede, OTAA por padrão.

|**Parâmetro**|**Descrição**|
| - | - |
|OTAA (padrão)|Over The Air Activation, entra na rede através de Device EUI, App EUI e App Key.|
|ABP|Activation By Personalization, entra na rede através de DevAddr, NwkSkey e AppSkey.|

O dispositivo usa OTAA para ingressar na rede LoRaWAN por padrão. Portanto, é possível definir o Device EUI, App EUI e App Key.

|**Parâmetro**|**Tipo**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

:::info Note
Ao usar a plataforma SenseCAP, o EUI, APP EUI e APP Key são fixos e são os mesmos do rótulo do sensor.<br />
Quando o sensor é selecionado para ser usado com uma plataforma pública como Helium ou TTN, o EUI não mudará, e o sensor gerará um novo App EUI e App Key fixos para acesso à rede.<br />
Para obter informações de EUI em lotes, entre em contato com nossa equipe de vendas.
:::

<table>
<tr><th colspan="1" valign="top"><b>Frequência</b></th><th colspan="1" valign="top"><b>Nome Comum</b></th><th colspan="2" valign="top"><b>Sub-banda</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">Sub-banda de 1 a 8 (sub-banda padrão 2)</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">Sub-banda de 1 a 8 (sub-banda padrão 2)</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">Plano de frequência para TTN</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">Plano de frequência para TTN</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Plano de frequência para Helium</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Note
Países e servidores de rede LoRaWAN diferentes usam planos de frequência diferentes.<br />
Para a rede Helium, consulte: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
Para The Things Network, consulte:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### Configuração do Modo de Trabalho

Configure o modo de trabalho de acordo com suas necessidades.

<table>
<tr><th colspan="1"><b>Parâmetros</b></th><th colspan="1"><b>Descrição</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Intervalo de Heartbeat</td><td colspan="1">Quando nenhum dado é enviado pelo dispositivo dentro do intervalo de heartbeat, um pacote de heartbeat será acionado. Este pacote contém apenas informações da bateria.</td><td colspan="1">Padrão 720 minutos.</td></tr>
<tr><td colspan="1">Ativar Temp&Light</td><td colspan="1">Se esta chave estiver ligada, temperatura e luz serão coletadas e enviadas, mas isso aumentará o consumo de energia.</td><td colspan="1">Desativado por padrão.</td></tr>
<tr><td colspan="1" rowspan="2">Modo de Relatório SOS</td><td colspan="1">Único</td><td colspan="1"><a name="ole_link7"></a>Se o SOS estiver definido para modo único, ao clicar duas vezes no botão será ativado o modo SOS de disparo único e serão enviados uma vez os dados de localização/sensor e os eventos SOS</td></tr>
<tr><td colspan="1">Contínuo</td><td colspan="1"><p>Padrão usar contínuo.</p><p>Se o SOS estiver definido para modo contínuo, clique duas vezes no botão para abrir o modo contínuo de SOS, e enviar dados de localização, sensor e eventos SOS uma vez a cada 1 minuto, encerrando automaticamente após 30 vezes</p></td></tr>
<tr><td colspan="1" rowspan="3">Modo de Trabalho</td><td colspan="1">Modo de Espera</td><td colspan="1">Enviar pacotes de heartbeat (apenas nível de bateria) com base no intervalo de heartbeat.</td></tr>
<tr><td colspan="1">Modo Periódico</td><td colspan="1">Dados de localização e do sensor são enviados de acordo com o intervalo de envio.</td></tr>
<tr><td colspan="1">Modo de Evento</td><td colspan="1"><a name="ole_link15"></a>Defina condições de disparo de limiar de acordo com valores medidos como temperatura, luz e movimento, e ajuste o intervalo de envio após o disparo.</td></tr>
<tr><td colspan="1">Intervalo de Uplink (min) – Modo Periódico</td><td colspan="1">Localiza e envia dados periodicamente.</td><td colspan="1"><p>Padrão 60 minutos. </p><p>Quanto maior a frequência, maior o consumo de energia.</p></td></tr>
<tr><td colspan="1">Restaurar Todas as Configurações</td><td colspan="1">Restaura todos os parâmetros de configuração para as configurações de fábrica, incluindo LoRa, Modo de Trabalho e Geolocalização.</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

Para o Modo de Evento, há cinco eventos:

<table>
<tr><th><b>Modo de Evento</b></th><th><b>Descrição</b></th><th></th></tr>
<tr><td>Intervalo de Uplink – Sem evento (min)</td><td><a name="ole_link16"></a>Este é o intervalo de envio quando nenhum evento é acionado.</td><td><p>Padrão 60 minutos. </p><p>Faixa: 1~10080 min.</p></td></tr>
<tr><td rowspan="2">Evento de Choque</td><td>Quando o evento de choque está ativado, o impacto no rastreador acionará um relatório de dados, incluindo o evento de choque, localização e dados do sensor.</td><td>Desativado por padrão.</td></tr>
<tr><td>Limiar de Movimento em 3 Eixos (mg)</td><td>O padrão é 300. Quando a aceleração exceder 300mg, o evento de choque será acionado.</td></tr>
<tr><td rowspan="3">Evento de Movimento</td><td>Quando a aceleração excede o valor definido, o dispositivo começa a se mover, e quando não há movimento por 2 minutos, o movimento do dispositivo para. Defina o intervalo de envio de acordo com o início e o fim do movimento.</td><td>Desativado por padrão.</td></tr>
<tr><td>Limiar de Movimento em 3 Eixos (mg)</td><td>O padrão é 30. Quando a aceleração excede 30mg, determina-se que o dispositivo está em movimento; quando ficar 2 minutos abaixo desse valor, determina-se que o dispositivo está parado.</td></tr>
<tr><td>Intervalo de Uplink em Movimento (min)</td><td>Defina o intervalo de envio para o estado atual quando o dispositivo estiver em movimento.</td></tr>
<tr><td rowspan="2">Evento de Imobilidade</td><td>Quando o dispositivo permanece parado em um local por mais do que uma certa quantidade de tempo, um evento de tempo limite de imobilidade é acionado.</td><td></td></tr>
<tr><td>Tempo Limite de Imobilidade (min)</td><td>O padrão é 360 minutos.</td></tr>
<tr><td rowspan="4">Evento de Temperatura</td><td>Se o evento de temperatura estiver ativado, você pode definir o intervalo de envio com base na temperatura. </td><td>Por exemplo, Intervalo de Uplink=10, Valor≥30, se a temperatura estiver acima de 30 °C, o dispositivo enviará a localização em intervalos de 10 minutos.</td></tr>
<tr><td>Intervalo de Amostragem (s)</td><td><p>Padrão 30 segundos.</p><p>A temperatura é detectada a cada 30 segundos. Quando o limiar é acionado, enviar localização e dados do sensor.</p></td></tr>
<tr><td>Intervalo de Uplink (min)</td><td>Quando a temperatura excede o limite, os dados de localização e do sensor são enviados de acordo com este intervalo.</td></tr>
<tr><td>Regra de Valor</td><td>Uma das quatro regras de limite pode ser definida.</td></tr>
<tr><td rowspan="3">Evento de Luz</td><td>Se o evento de luz estiver ativado, você pode definir o intervalo de envio com base na temperatura.</td><td>Por exemplo, Intervalo de Uplink=10, Valor≥30, se a temperatura for maior que 30 %, o dispositivo enviará a localização em um intervalo de 10 minutos.</td></tr>
<tr><td>Intervalo de Uplink (min)</td><td>Quando a luz excede o limite, os dados de localização e do sensor são enviados de acordo com este intervalo.</td></tr>
<tr><td>Regra de Valor</td><td>Uma das quatro regras de limite pode ser definida.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### Configuração do Modo de Geolocalização

O rastreador suporta posicionamento via GNSS, Wi-Fi e Bluetooth.

- **GNSS**: A longitude e a latitude podem ser obtidas diretamente por meio de GPS e outros sistemas de posicionamento por satélite, e então os dados são enviados via LoRa.
- **Wi-Fi**: Varredura passiva, envia via LoRa os 4 endereços MAC escaneados.
- **BLE**: Envia via LoRa os 3 melhores endereços MAC de sinal de Beacon escaneados.

<table>
<tr><th colspan="1"><b>Geolocalização</b></th><th colspan="1"><b>Descrição</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">Estratégia de Geolocalização</td><td colspan="1">Somente GNSS</td><td colspan="1"><p>Usar GNSS por padrão. </p><p>Somente GNSS é usado para posicionamento.</p></td></tr>
<tr><td colspan="1">Somente Wi-Fi</td><td colspan="1">Somente varreduras Wi-Fi são usadas para posicionamento.</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">Use Wi-Fi antes do GNSS. Se o Wi-Fi falhar, então use GNSS em um ciclo de geolocalização.</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Use GNSS antes do Wi-Fi. Se o GNSS falhar, então use Wi-Fi em um ciclo de geolocalização.</td></tr>
<tr><td colspan="1">Somente Bluetooth</td><td colspan="1">Somente varreduras Bluetooth são usadas para posicionamento.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Use Bluetooth antes do Wi-Fi. Se o Bluetooth falhar, então use Wi-Fi em um ciclo de geolocalização.</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">Use Bluetooth antes do GNSS. Se o Bluetooth falhar, então use GNSS em um ciclo de geolocalização.</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Use Bluetooth, Wi-Fi e GNSS para posicionamento sucessivamente (mude para o próximo tipo de posicionamento após um tipo de posicionamento falhar)</td></tr>
<tr><td colspan="1">Tempo Limite do GNSS</td><td colspan="1"><p>O tempo máximo de espera para o </p><p>GNSS obter uma correção grosseira de posição</p></td><td colspan="1"><p>O padrão é 60s. </p><p>Não é recomendado modificar, quanto maior o tempo, maior o consumo de energia.</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>Cache de Dados GNSS</td><td colspan="1">Quando não for possível enviar dados através do LoRa, os dados são salvos localmente e enviados quando o sinal LoRa for recuperado.</td><td colspan="1">Desativado por padrão.</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

Depois que todos os parâmetros forem configurados, clique em “Send”.
Se nenhum parâmetro precisar ser modificado, saia da configuração Bluetooth e volte para a página inicial. Neste ponto, o dispositivo inicia uma solicitação de acesso à rede LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### Visualização de Dados do Dispositivo

#### SenseCAP Mate App

Verifique a localização no APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

A principal função do SenseCAP Portal é gerenciar dispositivos SenseCAP e armazenar dados. Ele é construído sobre o Azure, um serviço de nuvem seguro e confiável da Microsoft. Os usuários podem solicitar uma conta e vincular todos os dispositivos a essa conta. O SenseCAP Portal fornece um portal web e API. O portal web inclui Painel, Gerenciamento de Dispositivos, Gerenciamento de Dados e Gerenciamento de Chave de Acesso. A API é aberta aos usuários para desenvolvimento adicional.

- **Dashboard:** Inclui Visão Geral do Dispositivo, Avisos, Dados de Cenário e Gráfico de Dados, etc.
- **Gerenciamento de Dispositivos:** Gerenciar dispositivos SenseCAP.
- **Gerenciamento de Dados:** Gerenciar dados, incluindo Tabela de Dados e seção de Gráficos, fornecendo métodos para pesquisar dados.
- **Sistema de Subcontas:** Registrar subcontas com diferentes permissões.
- **Gerenciamento de Chave de Acesso:** Gerenciar a Chave de Acesso (para acessar o serviço de API), incluindo Criação de Chave, Atualização de Chave e Verificação de Chave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Visualização de Dados do Dispositivo

Faça login em [SenseCAP Portal](http://sensecap.seeed.cc)

Se você criou uma conta pelo APP, pode fazer login diretamente.

1) Selecione registrar conta, insira as informações de e-mail e clique em "register", o e-mail de registro será enviado para a caixa de correio do usuário

2) Abra o e-mail "SenseCAP…", clique no link de redirecionamento, preencha as informações relevantes e conclua o registro

3) Volte para a interface de login e conclua o login

Verifique o [Guia do Usuário do SenseCAP Portal](https://sensecap-docs.seeed.cc/quickstart.html) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API é para os usuários gerenciarem dispositivos IoT e dados. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.

- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa, para obter dados brutos ou dados históricos.
- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor através do protocolo MQTT.
- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores por meio do protocolo Websocket.

Verifique o [Guia do Usuário da API](https://sensecap-docs.seeed.cc/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
