---
description: Este artigo irá guiá-lo para começar rapidamente com o reTerminal E1001.
title: Primeiros Passos com o reTerminal E1001
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.webp
slug: /getting_started_with_reterminal_e1001
sidebar_position: 2
sku: 100073581
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros Passos com o reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

:::caution Dicas para Atualização de Firmware
Recomendamos que você **[complete a atualização de firmware do seu produto](#preliminary)** assim que o receber para ter a melhor experiência.
:::

## Introdução

O reTerminal E1001 é um display ePaper monocromático open-source de 7,5 polegadas com excepcional duração de bateria de 3 meses. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de UI sem código SenseCraft HMI para criação fácil de dashboards, além de suportar Home Assistant, TRMNL E-ink dashboard, Arduino e ESP-IDF para desenvolvimento adicional. Seja para visualização de dashboard de casa inteligente, painéis de escritório ou projetos educacionais, este dispositivo HMI pronto para uso oferece visuais incríveis e personalização flexível em um único e elegante pacote.

### Recursos

- **Belo Display ePaper Pronto para Uso**
- **Ultrabaixo Consumo de Energia com Bateria de 3 Meses de Duração**
- **Design e Implantação de UI sem Código com SenseCraft HMI**
- **Funciona com Plataformas de Software Populares**
- **Personalização Flexível de Hardware e Software**

## Visão Geral do Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

O hardware do reTerminal E1001 inclui:

1. **Display ePaper de 7,5 polegadas**: Display monocromático com resolução de 800×480
2. **Botões**: Localizados na parte superior do dispositivo para uso manual da tela
3. **Microfone**
4. **Slot para Cartão MicroSD**: Para armazenamento expansível
5. **Interruptor de Energia**: Localizado na parte de trás para ligar/desligar o dispositivo
6. **LED de Status**: Indicador do usuário (verde)
7. **LED de Energia**: Indicador de carregamento (vermelho)
8. **Porta USB-C**: Para carregamento e atualização de firmware
9. **Porta de Expansão**: Conector de expansão de 8 pinos fornecendo conexões VDD, GND, I2C e GPIO


## Primeiros Passos

### Preparação

**Passo 1.** Desembale o seu reTerminal E1001 e certifique-se de que todos os componentes estão incluídos:

- Dispositivo reTerminal E1001
- Cabo USB-C
- Guia de início rápido

**Passo 2.** (Opcional) Insira um cartão microSD se você planeja usar o dispositivo como um porta-retratos digital ou se precisar de armazenamento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
O Display ePaper reTerminal E Série só suporta cartões MicroSD de até 64GB no formato Fat32.  
O cartão SD de 64GB vem formatado como exFAT por padrão. Após formatá-lo para FAT32, ele poderá ser montado com sucesso e usado para armazenar imagens.
:::

**Passo 3.** (Opcional) Instale drivers USB se necessário:

Dependendo do seu sistema operacional, pode ser necessário instalar drivers USB para garantir a comunicação adequada com o seu reTerminal E1001:

- **Para computadores Mac**: Baixe e instale o driver CH34X a partir do [site oficial da WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

- **Para computadores Windows**:
  - Sistemas Windows 11 normalmente incluem o driver por padrão
  - Para Windows 10 e versões anteriores, talvez seja necessário baixar e instalar o driver CH341 a partir do [site oficial da WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

- **Para sistemas Linux**: A maioria das distribuições Linux modernas inclui os drivers necessários por padrão

**Passo 4.** Atualize o firmware para garantir que seu dispositivo esteja executando a versão mais recente:

1. Conecte seu reTerminal E1001 ao computador usando o cabo USB-C

2. Ligue o dispositivo usando o interruptor de energia na parte de trás

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. Acesse **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** e faça login na sua conta

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. Navegue até a seção **Workspace**

5. Clique em **Device Flasher** no canto superior direito

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. Selecione o seu dispositivo reTerminal E1001 na lista. De acordo com este tutorial, você deve escolher **reTerminal E1001 7.5" Monochrome Display**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. Escolha a versão mais recente do firmware no menu suspenso

8. Clique em **Flash** e aguarde a conclusão do processo de atualização

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note

1. Atualizar o firmware garante desempenho ideal e acesso aos recursos mais recentes. Recomenda-se realizar essa atualização antes de usar o dispositivo pela primeira vez.

2. Não é possível gravar o firmware corretamente quando o dispositivo está desligado ou em modo de suspensão. Se você selecionar a porta correta para o seu dispositivo, mas nunca vir o progresso de gravação do firmware, talvez seja necessário acordar o dispositivo pressionando o botão verde na parte superior da unidade e tentar novamente.

:::

### Ligar

**Passo 1.** Ligue o dispositivo deslizando o interruptor de energia para a posição **ON**. O interruptor de energia está localizado na parte de trás da unidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Na primeira inicialização, o dispositivo exibirá informações do produto e instruções de configuração de rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**Passo 3.** O LED verde do usuário acenderá por aproximadamente 30 segundos, indicando que o dispositivo está ligado e inicializando. Após 30 segundos sem operação do dispositivo, para garantir a energia, o dispositivo entrará automaticamente em modo de suspensão e o LED será desligado automaticamente.

:::tip
Portanto, precisamos concluir os próximos passos de configuração da rede durante esse período. Quando o dispositivo entra em suspensão, você não conseguirá encontrar o hotspot do dispositivo. Se isso acontecer, você pode acordar o dispositivo clicando uma vez no botão verde Wake do dispositivo.
:::

### Configuração de Rede

<Tabs>
<TabItem value="Network Setup vis PC" label="Configuração de Rede via PC" default>

**Passo 1.** Conecte-se ao ponto de acesso Wi-Fi do dispositivo a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (sem senha). As credenciais da rede são `reTerminal E1001-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 2.** Depois de conectado, seu telefone deve redirecionar automaticamente para a página de configuração de Wi-Fi. Caso isso não aconteça, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Passo 3.** Selecione sua rede Wi-Fi local e insira a senha, depois clique em "Connect".

:::note
O Display ePaper reTerminal E Série só suporta redes WiFi de 2,4GHz, não 5GHz ou outras faixas.
:::

**Passo 4.** Após a conexão bem-sucedida, o dispositivo emitirá um bipe de confirmação e exibirá uma tela com o código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Conectando à Plataforma SenseCraft

**Passo 1.** Acesse [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no seu navegador e crie uma conta ou faça login.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**Passo 2.** Navegue até a seção **Workspace** e clique em **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Depois de pareado, o dispositivo exibirá uma mensagem solicitando que você crie seu primeiro dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Configuração de Rede via SenseCraft APP">

Este método usa o aplicativo móvel SenseCraft para configurar a rede do dispositivo e adicioná-lo à sua conta SenseCraft via Bluetooth.

Primeiro, baixe o aplicativo SenseCraft. Você pode encontrá-lo pesquisando por "SenseCraft" na Google Play Store ou Apple App Store. Como alternativa, você pode baixá-lo a partir deste site.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Baixar APP 🖱️</font></span></strong>
    </a>
</div><br />

**Passo 1.** Abra o SenseCraft App, faça login na sua conta e navegue até a aba **User**. Toque em **Device Bluetooth Configuration** para iniciar o processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 2.** Na tela "Please select the device type", escolha o modelo do seu reTerminal (por exemplo, **reTerminal E1001** ou **reTerminal E1002**).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 3.** Siga as instruções na tela para colocar seu dispositivo no modo de transmissão Bluetooth. Normalmente, isso é feito pressionando simultaneamente os botões de página **Up** e **Down**. Certifique-se de que o Bluetooth do seu telefone esteja ativado. Toque em **Scan**, e o app irá descobrir dispositivos próximos. Selecione seu dispositivo na lista para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 4.** Uma vez conectado via Bluetooth, o app solicitará que você configure a conexão Wi-Fi. Selecione sua rede Wi‑Fi local de 2,4 GHz na lista suspensa, digite a senha e toque em **Next**.

:::note
O dispositivo só pode ser configurado por meio de uma rede Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 5.** O app enviará as credenciais de Wi‑Fi para o dispositivo e o adicionará à sua conta SenseCraft. Uma mensagem "Device added successfully" aparecerá ao concluir. Agora você pode tocar em **Start exploring!** para prosseguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 6.** Seu reTerminal agora aparecerá na sua lista de dispositivos na aba principal **Device** do app, conectado com sucesso à sua conta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 7.** Você pode tocar no dispositivo na lista para ver sua página de **Device Detail**. A partir daí, você pode gerenciar o dispositivo e enviar fotos. Para um design de dashboard e canvas mais complexo, será solicitado que você use a versão em navegador web do SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>


## Criando um Dashboard

O reTerminal E1001 se integra perfeitamente à plataforma SenseCraft HMI, que fornece ferramentas poderosas para criar e personalizar conteúdo para o seu dispositivo. Em vez de detalhar operações passo a passo aqui, vamos explorar os principais recursos da plataforma para ajudar você a entender o que é possível fazer.

### Recursos do SenseCraft HMI

**AI Generator**

Deixe a inteligência artificial projetar seu dashboard! Basta descrever quais informações você quer exibir e o AI Generator criará automaticamente um layout atraente e funcional. Isso é perfeito para gerar rapidamente exibições de clima, calendários, listas de tarefas ou painéis informativos sem trabalho manual de design.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Gallery**

Transforme seu reTerminal E1001 em uma moldura de fotos digital com o recurso Gallery. Envie suas imagens favoritas e a plataforma as otimizará para o display de ePaper. Crie apresentações de slides com tempos de transição personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/19.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

Crie seu dashboard do zero com o Canvas, uma interface de arrastar e soltar que oferece vários elementos:

- Blocos de texto com fontes e tamanhos personalizáveis
- Espaços reservados para imagens
- Widgets para hora, data e clima
- Ferramentas de visualização de dados
- Formas e divisores para organização do layout

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/20.png" style={{width:1000, height:'auto'}}/></div>

**Integração de RSS Feed**

Mantenha-se atualizado com suas fontes de notícias, blogs ou sites favoritos adicionando RSS feeds ao seu dashboard. O recurso RSS permite exibir manchetes, resumos ou artigos completos de múltiplas fontes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/21.png" style={{width:1000, height:'auto'}}/></div>

**Exibição de Conteúdo Web**

Capture e exiba conteúdo web específico no seu dispositivo. O recurso Web pode renderizar partes selecionadas de sites, permitindo que você exiba informações como horários de transporte, cotações de ações ou outras fontes de dados online.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/16.png" style={{width:1000, height:'auto'}}/></div>

### Primeiros Passos com o SenseCraft HMI

Depois de parear seu dispositivo com a plataforma SenseCraft conforme descrito na seção anterior, você estará pronto para criar seu primeiro dashboard. Para instruções detalhadas sobre como usar cada recurso, consulte as páginas Wiki correspondentes:

- [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/)

Depois de criar e salvar seu dashboard na plataforma SenseCraft, simplesmente clique em "Deploy to Device", selecione seu reTerminal E1001 pareado e seu conteúdo personalizado será transmitido sem fio para o dispositivo. O display de ePaper será atualizado para mostrar seu dashboard e você pode usar os botões de navegação para alternar entre múltiplas páginas, se as tiver criado.

## Operando o Dispositivo

### Botão de Atualização

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

O botão de atualização na parte superior do dispositivo possui várias funções:

- **Pressionar uma vez**: Atualiza manualmente o display e verifica se há novo conteúdo na plataforma SenseCraft. O buzzer emitirá um bipe para confirmar a ação. Esse botão também é comumente usado para despertar o dispositivo. Você pode usar esse botão para acordar um dispositivo quando ele entrou em modo de suspensão e um comando de atualização de dashboard geralmente não está imediatamente disponível para o dispositivo.

- **Pressionar e segurar** (funcionalidade futura): Ativará o modo de entrada por voz.

### Botões de Navegação

Os botões esquerdo e direito permitem navegar entre múltiplas páginas se o seu dashboard contiver mais de uma página:

- **Botão Esquerdo**: Navega para a página anterior

- **Botão Direito**: Navega para a próxima página

### Redefinição de Rede

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Se você precisar se conectar a uma rede Wi‑Fi diferente:

**Passo 1.** Pressione e segure ambos os botões de navegação (esquerdo e direito) simultaneamente por 2 segundos.

**Passo 2.** O dispositivo entrará no modo de configuração de Wi‑Fi e você poderá seguir novamente as etapas de [Network Setup](#Network-Setup) para se conectar a uma nova rede.

### LEDs Indicadores

- **LED Vermelho**:
  - Desligado: Totalmente carregado ou não carregando
  - Sempre ligado: carregando

- **LED Verde**:
  - Ligado por 30 segundos na inicialização: Dispositivo está ligando

### Funcionamento com Bateria

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A duração da bateria depende da frequência de atualização (normalmente 3 meses com carga completa e configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível de bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10 ms antes da função analogRead().
:::

### Pinos de Expansão

O reTerminal E1001 possui um conector de expansão de 8 pinos (J2) que fornece opções de conectividade para adicionar sensores externos, módulos ou outros hardwares para ampliar a funcionalidade do seu dispositivo. Esse conector de expansão expõe vários pinos GPIO e interfaces de comunicação do ESP32-S3, tornando-o um ponto de conexão versátil para seus projetos DIY.

#### Pinagem do Conector de Expansão

O conector de expansão de 8 pinos (J2) possui a seguinte pinagem:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Pino (de cima para baixo)</th>
   <th>Rótulo</th>
   <th>Pino ESP32-S3</th>
   <th>Função</th>
   <th>Descrição</th>
  </tr>
  <tr>
   <td>1</td>
   <td>HEADER_3V3</td>
   <td>-</td>
   <td>Alimentação</td>
   <td>Fonte de alimentação de 3,3 V para dispositivos externos</td>
  </tr>
  <tr>
   <td>2</td>
   <td>GND</td>
   <td>-</td>
   <td>Terra</td>
   <td>Referência de terra comum</td>
  </tr>
  <tr>
   <td>3</td>
   <td>ESP_IO46</td>
   <td>GPIO46</td>
   <td>GPIO/ADC</td>
   <td>GPIO de uso geral com capacidade de entrada analógica</td>
  </tr>
  <tr>
   <td>4</td>
   <td>ESP_IO2/ADC1_CH4</td>
   <td>GPIO2</td>
   <td>GPIO/ADC</td>
   <td>GPIO de uso geral com capacidade de entrada analógica (canal 4 do ADC1)</td>
  </tr>
  <tr>
   <td>5</td>
   <td>ESP_IO17/TX1</td>
   <td>GPIO17</td>
   <td>GPIO/UART TX</td>
   <td>GPIO ou sinal de transmissão (TX) UART</td>
  </tr>
  <tr>
   <td>6</td>
   <td>ESP_IO18/RX1</td>
   <td>GPIO18</td>
   <td>GPIO/UART RX</td>
   <td>GPIO ou sinal de recepção (RX) UART</td>
  </tr>
  <tr>
   <td>7</td>
   <td>ESP_IO20/I2C0_SCL</td>
   <td>GPIO20</td>
   <td>GPIO/I2C SCL</td>
   <td>GPIO ou sinal de clock I2C</td>
  </tr>
  <tr>
   <td>8</td>
   <td>ESP_IO19/I2C0_SDA</td>
   <td>GPIO19</td>
   <td>GPIO/I2C SDA</td>
   <td>GPIO ou sinal de dados I2C</td>
  </tr>
 </table>
</div>

## Posicionamento do Dispositivo

O reTerminal E1001 vem com um suporte impresso em 3D que permite posicionar o dispositivo na vertical para visualização ideal:

**Passo 1.** Localize o suporte impresso em 3D incluído na embalagem.

**Passo 2.** Posicione o suporte contra a área de montagem designada na parte inferior traseira do reTerminal E1001, onde estão localizadas as porcas embutidas.

**Passo 3.** Use uma chave de fenda longa para fixar o suporte ao dispositivo apertando os parafusos nas porcas embutidas na parte traseira do reTerminal E1001.

**Passo 4.** Depois de bem fixado, coloque o reTerminal E1001 sobre uma superfície plana, de modo que o suporte o mantenha em posição vertical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
O suporte fornece um ângulo de visualização fixo e não pode ser ajustado. Esse posicionamento fixo foi projetado para oferecer visibilidade ideal na maioria dos cenários de uso.

O suporte permite que o dispositivo seja colocado em mesas, balcões ou prateleiras, tornando-o ideal para uso como display de informações, painel de controle ou porta-retratos digital em diversos ambientes.
:::

## Solução de Problemas

### P1: O Dispositivo Não Liga

- Certifique-se de que o interruptor de energia esteja na posição LIGADO
- Conecte o cabo USB-C para carregar o dispositivo
- Verifique se o LED vermelho permanece aceso (indicando carregamento)
- Se estiver usando energia da bateria, certifique-se de que a bateria esteja devidamente conectada e carregada

### P2: Não Consigo Conectar ao Wi-Fi

- Verifique se você está inserindo a senha correta do Wi-Fi
- Certifique-se de que sua rede Wi-Fi esteja em funcionamento
- Verifique se o seu roteador Wi-Fi suporta redes de 2,4GHz (5GHz não é suportado)
- Tente posicionar o dispositivo mais perto do seu roteador Wi-Fi

### P3: Tela Não Atualiza

- Pressione o botão de atualização para acionar manualmente uma atualização
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique sua conta SenseCraft para garantir que o dashboard foi implantado corretamente
- Se o problema persistir, tente reiniciar o dispositivo

### P4: Conexão de Rede Perdida

- O dispositivo tentará se reconectar automaticamente a redes conhecidas
- Quando reconectar, o ícone de desconexão do Wi-Fi desaparecerá
- Se não conseguir reconectar, siga o procedimento de Redefinição de Rede acima

## Recursos
- [Diagrama Esquemático do reTerminal E1001 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1_2_SCH_251120.pdf)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Documentação da Plataforma SenseCraft HMI](https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview)
- [Arquivo STP do modelo 3D geral do exterior](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/pt-br/getting_started_with_reterminal_e1001) -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
