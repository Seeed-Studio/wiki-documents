---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: ''
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
createdAt: '2026-01-27'
updatedAt: '2026-01-27'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_zigbee/
---

Este tutorial orienta você na implementação de aplicações [Zigbee](https://en.wikipedia.org/wiki/Zigbee) na placa de desenvolvimento Seeed Studio **XIAO nRF54L15**. Esta placa combina conectividade **Wi-Fi**, **Bluetooth Low Energy (BLE)** e **Zigbee**, tornando-a perfeita para **aplicações de IoT**. Os exemplos deste guia usam o NCS para dar vida à funcionalidade Zigbee.



:::note Pré-requisito: uso do nRFConnect SDK

Se você ainda não preparou o seu NCS, consulte o **[Guia de Introdução](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#uso-do-nrfconnect-sdk)**. 

Se você estiver preocupado que o nRF Connect SDK não tenha sido baixado completamente ou tenha problemas, pode verificar a integridade e a correção do nRF Connect SDK baixado da seguinte forma. Selecione **Manage west workspace** e, em seguida, selecione **West Update**, como mostrado abaixo. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## Índice
- [Visão geral do Zigbee](#visão-geral-do-zigbee)
  - [Modelo de dados Zigbee](#modelo-de-dados-zigbee)
  - [Arquitetura de rede Zigbee](#arquitetura-de-rede-zigbee)
    - [Topologias de rede](#topologias-de-rede)
- [Introdução ao NCS Zigbee](#introdução-ao-ncs-zigbee)

## Visão geral do Zigbee

Zigbee é um protocolo de comunicação sem fio de **baixa potência** e **baixa largura de banda** baseado no padrão IEEE 802.15.4. Ele é voltado para cenários de IoT, como **automação residencial**, **cidades inteligentes** e **controle industrial**, oferecendo recursos robustos de rede em malha para comunicação confiável em ambientes dinâmicos.

- Forneceremos uma breve explicação sobre o conteúdo relacionado ao Zigbee. Se você quiser ir diretamente para os exemplos de aplicação, também pode pular adiante.
       - [Introdução ao NCS Zigbee](#introdução-ao-ncs-zigbee)

### Modelo de dados Zigbee

A comunicação Zigbee depende da **Zigbee Cluster Library (ZCL)**, que define como os dispositivos organizam suas funcionalidades e interagem. Os principais componentes incluem:

1. **Tipos de dispositivo**
    Os dispositivos Zigbee (por exemplo, interruptores, sensores, luminárias) são predefinidos com comportamentos específicos, agrupados em **Clusters** funcionais.

2. **Clusters**
    Clusters são agrupamentos lógicos de:

   - **Atributos**: Representam estados do dispositivo, como brilho ou temperatura.
   - **Comandos**: Disparam ações, como ligar uma luz ou definir o brilho em 50%.

   Exemplos:

   - **On/Off Cluster**: Controla estados binários como energia.
   - **Level Control Cluster**: Ajusta intensidade ou brilho.
   - **Temperature Measurement Cluster**: Envia leituras de temperatura.
   - **Scenes Cluster**: Salva e recupera configurações predefinidas.

3. **Atributos e comandos**
    Atributos armazenam dados do dispositivo (por exemplo, estado, configuração), enquanto comandos iniciam ações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitetura de rede Zigbee

Uma rede Zigbee consiste em três tipos principais de nós:

1. **Zigbee Coordinator (ZC)**  
   - Atua como o hub central da rede.  
   - Lida com a criação da rede, autenticação de dispositivos e alocação de endereços.  
   - Responsável por inicializar e gerenciar a rede.  
   - Cada rede Zigbee pode ter apenas **um Coordinator**.  

2. **Zigbee Router (ZR)**  
   - Estende o alcance da rede retransmitindo mensagens entre dispositivos.  
   - Suporta a entrada de dispositivos adicionais na rede.  
   - Normalmente é alimentado pela rede elétrica para garantir operação constante e retransmissão confiável de mensagens.  
   - Routers alimentados por bateria são possíveis, mas menos comuns devido à maior demanda de energia. 

 :::tip

Claro, roteadores não são necessários. Quando a distância é curta, os roteadores podem ser omitidos. Por exemplo, nossa próxima demonstração não usa um roteador.

:::

3. **Zigbee End Device (ZED)**  
   - Dispositivos leves e eficientes em energia que se comunicam com um nó pai (Coordinator ou Router).  
   - Não roteiam mensagens para outros dispositivos.  
   - Otimizados para operação com bateria e normalmente entram em modos de suspensão para economizar energia.

:::note

- **Endereçamento e roteamento**:
  - Zigbee usa um esquema de endereçamento de 16 bits. Os dispositivos se comunicam por meio de uma combinação de endereçamento direto e indireto.  
  - As decisões de roteamento são tomadas pelos Routers usando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gerenciamento de energia**:
  - Os Zigbee End Devices são otimizados para baixo consumo de energia. Eles frequentemente operam em modo de suspensão e só acordam quando necessário.  
  - Os Routers e o Coordinator geralmente são alimentados pela rede elétrica para disponibilidade constante.

:::

#### Topologias de rede

Zigbee suporta três topologias de rede principais, dependendo dos requisitos da aplicação e do ambiente:

#### 1. Topologia em malha (Mesh)

- Um único Coordinator e vários Routers formam uma rede robusta e auto-recuperável.  
- Os dispositivos podem redirecionar mensagens dinamicamente se um caminho de comunicação for interrompido, garantindo alta confiabilidade.  
- Ideal para redes em grande escala que exigem ampla cobertura e redundância.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Principais características**:  
  - Redirecionamento dinâmico garante alta confiabilidade.  
  - Suporta redes grandes com cobertura escalável.  
  - Mecanismos de auto-recuperação aumentam a tolerância a falhas.  

#### 2. Topologia em árvore

- O Coordinator atua como a raiz de uma estrutura hierárquica, com Routers formando os ramos.  
- Cada ramo pode ter vários End Devices ou Routers adicionais, criando uma estrutura em forma de árvore.  
- A comunicação depende de caminhos hierárquicos, o que introduz possíveis pontos únicos de falha.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Principais características**:  
  - Funciona bem em ambientes estruturados.  
  - Mais fácil de configurar e gerenciar do que uma rede em malha.  
  - Vulnerável à falha de um ramo, o que pode desconectar sub-redes inteiras.  

#### 3. Topologia em estrela

- Todos os dispositivos se comunicam diretamente com o Coordinator.  
- Simples de implantar, mas o Coordinator é um ponto único de falha.  
- Mais adequada para redes pequenas em que os dispositivos estão próximos ao Coordinator.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Principais características**:  
  - Fácil de configurar e gerenciar.  
  - Escalabilidade limitada devido a restrições de alcance e capacidade de dispositivos.  
  - A dependência do Coordinator para toda a comunicação reduz a tolerância a falhas.  

:::tip

Nossa próxima demonstração também é desse tipo de topologia
:::

## Introdução ao NCS Zigbee

### Preparação de hardware

Você precisa preparar 3 placas XIAO nRF54L15.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-114993697-xiao-nrf54l15-sense_pre-soldered_.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54L15-Sense-Pre-Soldered-p-6500.html
        " target="_blank">
    <strong><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**conecte os dispositivos da forma mostrada na figura**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### Preparação de software

**Passo 1.** Instale o plugin Zigbee R23

- Clique no ícone do plugin **NCS** -> **Create a new application** e selecione o modo **Browse nRF Connect SDK Add-on Index**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- Pesquise por **R23**, vá para **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- Selecione a versão mais recente -> Selecione o diretório do workspace e crie-o

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Aguarde até que o plugin Zigbee seja instalado completamente, e a versão do NCS será alternada automaticamente para a v2.9.2.
Como o plugin é bastante grande (mais de 4 GB), o processo de download levará bastante tempo. Mantenha a conexão de rede estável e não interrompa o processo pela metade.

:::

- Uma janela pop-up aparecerá quando a criação for concluída.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Passo 2.** Preparação do código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Consulte o repositório oficial da Seeed Studio para obter exemplos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- Alternativamente, se você tiver um ambiente Git configurado, pode puxar o código diretamente para o diretório de arquivos que você especificou há pouco.

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

Após obter o código de exemplo, vamos ter uma breve compreensão dele:

1.O diretório boards contém arquivos de configuração em nível de placa, que são usados para se adaptar às diferenças de hardware entre diferentes placas de desenvolvimento (como pinos e periféricos):
- Os arquivos .overlay dentro são "arquivos Device Tree Overlay", usados para modificar as configurações de hardware padrão do chip/placa de desenvolvimento;
- Por exemplo, xiao_nrf54l15_nrf54l15_cpuapp.overlay é uma configuração escrita especificamente para o XIAO nRF54L15 (por exemplo, mapeando o pino D3 para o pino de controle do LED no código);

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- Outros arquivos (por exemplo, nrf54l15dk_xxx.overlay) são destinados aos kits de desenvolvimento (DKs) oficiais da Nordic, portanto você não precisa se preocupar com eles — concentre-se apenas nos arquivos prefixados com xiao_xxx.

2. O diretório include é onde os arquivos de cabeçalho são armazenados:
- zb_dimmable_light.h é o arquivo de cabeçalho funcional para lâmpadas dimerizáveis Zigbee, que define as funções e parâmetros relacionados ao protocolo Zigbee para o nó de iluminação (por exemplo, controle de brilho, relatório de status).

3. O diretório src é onde o código principal é armazenado:
 - main.c é o arquivo de entrada de todo o projeto, contendo a lógica de inicialização do programa, inicialização da rede Zigbee e lógica de controle do LED (por exemplo, controlar o nível do pino D3 após receber um comando de chave).

4. Arquivos no diretório raiz Estes são arquivos de compilação e configuração do projeto (arquivos padrão do framework NCS/Zephyr):

- CMakeLists.txt: Um script de compilação CMake que define quais arquivos o projeto precisa compilar e de quais bibliotecas ele depende;
- Kconfig.sysbuild: Configura as opções de compilação do projeto (por exemplo, se deve habilitar a funcionalidade Zigbee, logs de depuração);
- prj.conf: O arquivo de configuração principal do projeto, que define parâmetros do chip e parâmetros do sistema Zephyr (por exemplo, habilitar funcionalidade GPIO, pilha de protocolo Zigbee);
- sample.yaml: Um arquivo de configuração de exemplo do NCS que descreve informações básicas sobre o projeto (por exemplo, placas de desenvolvimento suportadas, descrições de funções).

### Compilar e gravar o código

Este guia mostra como adicionar um aplicativo existente (tomando light_switch como exemplo) ao seu ambiente VS Code, e compilá-lo e gravá-lo no seu hardware de destino (tomando xiao_nrf54l15 como exemplo).

**Passo 1.** Adicionar o aplicativo ao workspace

- Localizar o painel APPLICATIONS: Na barra lateral, encontre o painel chamado "APPLICATIONS".

- Adicionar um aplicativo existente: Clique no ícone "+" (Add an existing application) no canto superior direito do painel, conforme indicado pela caixa vermelha na figura abaixo.

- Selecionar a pasta do aplicativo: Na janela pop-up do navegador de arquivos, navegue até a pasta onde seu projeto está localizado (por exemplo, D:...\workspace). Na lista, selecione a pasta do aplicativo que você deseja gravar — light_switch neste exemplo — e clique no botão "Open".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Passo 2.** Criar e configurar opções de compilação

- Adicionar uma configuração de build: No painel "APPLICATIONS", você verá o projeto light_switch recém-adicionado. Clique em "+ Add build configuration" abaixo dele.

- Configurar parâmetros de compilação: Na página "Add Build Configuration" que foi aberta, faça as seguintes configurações: SDK e Toolchain: Seu nRF Connect SDK e toolchain instalados geralmente serão selecionados automaticamente — verifique se a versão está correta. (Se o plugin que você baixou anteriormente estiver intacto, a versão V2.9 será selecionada aqui automaticamente.)

- Board target: Este é o passo mais crítico. Você precisa selecionar o hardware no qual o código será executado. Clique em "Browse" ou pesquise diretamente na caixa de entrada. Como mostrado na figura, a placa de destino que você precisa selecionar é xiao_nrf54l15/nrf54l15/cpuapp. Você pode marcar "Custom" para filtrar rapidamente ou encontrar placas que não são oficialmente suportadas.

- Outras configurações: A menos que haja requisitos especiais, deixe outras configurações como Kconfig fragments e Devicetree overlays como padrão por enquanto.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
Recomenda-se primeiro marcar **"Custom"** para filtrar rapidamente ou encontrar placas que não são oficialmente suportadas e, em seguida, localizar a placa de destino que você precisa selecionar:**xiao_nrf54l15/nrf54l15/cpuapp**. Se você pesquisar diretamente, o processo de solução de problemas pode levar muito tempo e a placa de destino pode não ser encontrada.

:::


:::note

- Atualize os arquivos em nível de placa. Se seus arquivos não forem atualizados há muito tempo, também é recomendável que você os atualize antes de usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
Para o tutorial detalhado, você pode consultar o link abaixo.
      **[Guia de Introdução](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#uso-do-nrfconnect-sdk)**. 

**Passo 3.** Compilação e gravação

- Conecte o hardware: Certifique-se de que o seu hardware de destino (por exemplo, a placa de desenvolvimento XIAO nRF54L15) esteja devidamente conectado ao computador por meio de um cabo de dados.

- Abra o terminal: No painel WELCOME da **extensão NRF CONNECT**, localize e clique na opção "Open terminal" (marcada pela caixa vermelha na figura).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- Navegue até o diretório do projeto: No terminal, use o comando cd para entrar na pasta do seu projeto.

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- Substitua este caminho pelo caminho real do seu projeto.

- Monitore o processo de gravação: O terminal exibirá logs detalhados, incluindo o progresso da compilação, conexão ao depurador (por exemplo, CMSIS-DAP), apagamento da memória flash e processos de escrita de dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- Da mesma forma, grave os outros dois projetos de código seguindo os mesmos passos.
- Se você estiver preocupado se o código foi gravado com sucesso, há o método para verificá-lo:

  -  Conecte-se à placa de desenvolvimento via porta serial e observe a saída da porta serial (este método não apenas verifica o resultado da gravação, mas também permite visualizar os logs de execução do programa de forma intuitiva, tornando a lógica de verificação mais clara).

### Conectar ao Zigbee

**Passo 1.** Conectar ao Zigbee

1. Ligue e inicie a placa de desenvolvimento XIAO com o **programa Coordinator** carregado.
2. Observe os logs no assistente de porta serial e aguarde o coordenador concluir a inicialização da pilha Zigbee e a configuração dos parâmetros de rede até que as informações da porta serial sejam exibidas.
3. Mantenha o coordenador ligado para manter a rede continuamente, o que fornece a base para que dispositivos subsequentes entrem na rede.

**Passo 2.** Configuração de ingresso na rede para o lado da lâmpada

1. Após a rede do coordenador ligado estar pronta, ligue e inicie a placa de desenvolvimento XIAO com o programa Light Bulb carregado.

2. O lado da lâmpada inicia automaticamente a varredura de rede para encontrar redes de coordenador Zigbee disponíveis.
3. Verifique os logs da porta serial para confirmar que a extremidade da lâmpada se juntou com sucesso à rede do coordenador.
Referência para logs principais:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 3.** Associação à rede e descoberta de dispositivo para a extremidade do interruptor de luz

1. Após confirmar que a extremidade da lâmpada se juntou com sucesso à rede, ligue e inicie a placa de desenvolvimento XIAO com o programa Light Switch carregado (dispare um reset de fábrica por meio do botão onboard, se necessário, para garantir a nova varredura da rede).
2.A extremidade do interruptor de luz faz automaticamente a varredura e se junta à mesma rede do coordenador.
Referência para logs principais:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. Verifique os logs da porta serial da extremidade da lâmpada para confirmar que o comando foi recebido e executado, e que o LED concluiu a ação de ligar/desligar. Referência para logs principais:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Procedimento de redefinição da rede Zigbee

**Etapa 1.** Redefinição de rede para o coordenador

Pressione o botão onboard do coordenador de rede para concluir a redefinição da rede Zigbee.

**Etapa 2.** Redefinição e novo ingresso dos dispositivos de controle de luz (interruptor de luz/lâmpada)

1. Pressione e segure o botão onboard do dispositivo de controle de luz (interruptor de luz/lâmpada);
2. Pressione o botão de reset do dispositivo;
3. Solte o botão onboard. O dispositivo concluirá a redefinição e se juntará automaticamente à nova rede Zigbee.

:::note

> <strong>Importante:</strong> Na revisão de hardware anterior, o UART USB-para-serial onboard pode precisar ser desativado para inicialização a frio somente com BAT, porque seus sinais podem alimentar indiretamente o SAMD11 sem alimentação. A versão V1.2 adiciona isolamento de sinal por hardware e não requer essa solução alternativa de UART apenas para esse problema histórico. Isso afeta apenas o UART USB-para-serial/debug onboard, não os pinos UART de usuário laterais <code>D6/TX</code> e <code>D7/RX</code>. Consulte a [seção Placa Alimentada por Bateria em Introdução](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#detecção-de-tensão-da-bateria) para a configuração específica de cada versão.

:::

## Resultado

Se tudo correr bem, você verá os seguintes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### FQA

1.NÃO use um diretório excessivamente longo como diretório raiz de instalação. Caso contrário, ao compilar exemplos no Windows, você encontrará com frequência erros de compilação causados por nomes de diretório excessivamente longos.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


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
