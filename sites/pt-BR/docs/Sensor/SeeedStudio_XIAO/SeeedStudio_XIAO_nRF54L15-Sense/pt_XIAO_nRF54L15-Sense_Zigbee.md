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
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_zigbee/
---

Este tutorial orienta você na implementação de aplicações [Zigbee](https://en.wikipedia.org/wiki/Zigbee) na placa de desenvolvimento Seeed Studio **XIAO nRF54L15**, que combina conectividade **Wi-Fi**, **Bluetooth Low Energy (BLE)** e **Zigbee**, tornando-a ideal para **aplicações IoT**. Os exemplos neste guia utilizam o NCS para dar vida à funcionalidade Zigbee.



:::note Pré-requisito: Uso do nRFConnect SDK

Se você ainda não preparou seu NCS, consulte o **[Guia de Primeiros Passos](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

Se você está preocupado que o nRF Connect SDK não foi baixado completamente ou apresenta problemas, você pode verificar a integridade e a correção do nRF Connect SDK baixado da seguinte forma. Selecione **Manage west workspace**, depois selecione **West Update**, conforme mostrado abaixo. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## Índice
- [Visão Geral do Zigbee](#Visão-Geral-do-Zigbee)
  - [Modelo de Dados Zigbee](#Modelo-de-Dados-Zigbee)
  - [Arquitetura de Rede Zigbee](#Arquitetura-de-Rede-Zigbee)
    - [Topologias de Rede](#Topologias-de-Rede)
- [Primeiros Passos com NCS Zigbee](#Primeiros-Passos-com-NCS-Zigbee)

## Visão Geral do Zigbee

Zigbee é um protocolo de comunicação sem fio de **baixo consumo de energia** e **baixa largura de banda**, baseado no padrão IEEE 802.15.4. É voltado para cenários de IoT como **automação residencial**, **cidades inteligentes** e **controle industrial**, oferecendo robustas capacidades de rede em malha para comunicação confiável em ambientes dinâmicos.

- Forneceremos uma breve explicação sobre o conteúdo relacionado ao Zigbee. Se você quiser consultar diretamente os exemplos de aplicação, também pode pular adiante.
       - [Primeiros Passos com NCS Zigbee](#Primeiros-Passos-com-NCS-Zigbee)

### Modelo de Dados Zigbee

A comunicação Zigbee depende da **Zigbee Cluster Library (ZCL)**, que define como os dispositivos organizam suas funcionalidades e interagem. Os principais componentes incluem:

1. **Tipos de Dispositivo**
    Os dispositivos Zigbee (por exemplo, interruptores, sensores, lâmpadas) são pré-definidos com comportamentos específicos, agrupados em **Clusters** funcionais.

2. **Clusters**
    Clusters são agrupamentos lógicos de:

   - **Atributos**: Representam estados do dispositivo, como brilho ou temperatura.
   - **Comandos**: Acionam ações, como ligar uma luz ou definir o brilho para 50%.

   Exemplos:

   - **Cluster On/Off**: Controla estados binários como energia.
   - **Cluster de Controle de Nível**: Ajusta intensidade ou brilho.
   - **Cluster de Medição de Temperatura**: Envia leituras de temperatura.
   - **Cluster de Cenas**: Salva e recupera configurações predefinidas.

3. **Atributos e Comandos**
    Atributos armazenam dados do dispositivo (por exemplo, estado, configuração), enquanto comandos iniciam ações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitetura de Rede Zigbee

Uma rede Zigbee é composta por três tipos principais de nós:

1. **Coordenador Zigbee (ZC)**  
   - Atua como o hub central da rede.  
   - Gerencia a criação da rede, autenticação de dispositivos e alocação de endereços.  
   - Responsável por inicializar e gerenciar a rede.  
   - Cada rede Zigbee pode ter apenas **um Coordenador**.  

2. **Roteador Zigbee (ZR)**  
   - Estende o alcance da rede retransmitindo mensagens entre dispositivos.  
   - Suporta a entrada de dispositivos adicionais na rede.  
   - Normalmente alimentado pela rede elétrica para garantir operação constante e retransmissão confiável de mensagens.  
   - Roteadores alimentados por bateria são possíveis, mas menos comuns devido à maior demanda de energia. 

 :::tip

Claro, roteadores não são necessários. Quando a distância é curta, os roteadores podem ser omitidos. Por exemplo, nossa próxima demonstração não utiliza um roteador.

:::

3. **Dispositivo Final Zigbee (ZED)**  
   - Dispositivos leves e eficientes em energia que se comunicam com um nó pai (Coordenador ou Roteador).  
   - Não roteiam mensagens para outros dispositivos.  
   - Otimizados para operação com bateria e normalmente entram em modos de suspensão para conservar energia.

:::note

- **Endereçamento e Roteamento**:
  - O Zigbee utiliza um esquema de endereçamento de 16 bits. Os dispositivos se comunicam por meio de uma combinação de endereçamento direto e indireto.  
  - As decisões de roteamento são tomadas pelos Roteadores usando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gerenciamento de Energia**:
  - Os Dispositivos Finais Zigbee são otimizados para baixo consumo de energia. Frequentemente operam em modo de suspensão e só acordam quando necessário.  
  - Roteadores e o Coordenador geralmente são alimentados pela rede elétrica para disponibilidade consistente.

:::

#### Topologias de Rede

O Zigbee suporta três topologias de rede principais, dependendo dos requisitos da aplicação e do ambiente:

#### 1. Topologia em Malha

- Um único Coordenador e múltiplos Roteadores formam uma rede robusta e autocurativa.  
- Os dispositivos podem redirecionar mensagens dinamicamente se um caminho de comunicação for interrompido, garantindo alta confiabilidade.  
- Ideal para redes de grande escala que exigem ampla cobertura e redundância.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Características Principais**:  
  - O redirecionamento dinâmico garante alta confiabilidade.  
  - Suporta redes grandes com cobertura escalável.  
  - Mecanismos de autocura aumentam a tolerância a falhas.  

#### 2. Topologia em Árvore

- O Coordenador atua como a raiz de uma estrutura hierárquica, com Roteadores formando os ramos.  
- Cada ramo pode ter múltiplos Dispositivos Finais ou Roteadores adicionais, criando uma estrutura em forma de árvore.  
- A comunicação depende de caminhos hierárquicos, o que introduz potenciais pontos únicos de falha.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Características Principais**:  
  - Funciona bem em ambientes estruturados.  
  - Mais fácil de configurar e gerenciar do que uma rede em malha.  
  - Vulnerável a falhas em ramos, o que pode desconectar sub-redes inteiras.  

#### 3. Topologia em Estrela

- Todos os dispositivos se comunicam diretamente com o Coordenador.  
- Simples de implantar, mas o Coordenador é um ponto único de falha.  
- Mais adequada para redes pequenas onde os dispositivos estão localizados próximos ao Coordenador.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Características Principais**:  
  - Fácil de configurar e gerenciar.  
  - Escalabilidade limitada devido a restrições de alcance e capacidade de dispositivos.  
  - A dependência do Coordenador para toda a comunicação reduz a tolerância a falhas.  

:::tip

Nossa próxima demonstração também é deste tipo de topologia
:::

## Primeiros Passos com NCS Zigbee

### Preparação de Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**conecte os dispositivos da forma mostrada na figura**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### Preparação de Software

**Passo 1.** Instale o plugin Zigbee R23

- Clique no ícone do plugin **NCS** -> **Create a new application** e selecione o modo como **Browse nRF Connect SDK Add-on Index**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- Pesquise por **R23**, vá para **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- Selecione a versão mais recente -> Selecione o diretório do workspace e crie-o

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Aguarde a instalação completa do plugin Zigbee; a versão do NCS será alterada automaticamente para v2.9.2.
Como o plugin é bastante grande (mais de 4 GB), o processo de download levará muito tempo. Mantenha a conexão de rede estável e não interrompa o processo no meio.

:::

- Um prompt pop-up aparecerá ao concluir a criação.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Passo 2.** Preparação do Código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Consulte o repositório oficial da Seeed Studio para obter exemplos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- Alternativamente, se você tiver um ambiente Git configurado, pode puxar o código diretamente para o diretório de arquivos que você especificou agora.

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

Após obter o código de exemplo, vamos ter uma breve compreensão dele:

1.O diretório boards contém arquivos de configuração em nível de placa, que são usados para adaptar às diferenças de hardware entre diferentes placas de desenvolvimento (como pinos e periféricos):
- Os arquivos .overlay dentro são "arquivos de Sobreposição de Árvore de Dispositivos", que são usados para modificar as configurações de hardware padrão do chip/placa de desenvolvimento;
- Por exemplo, xiao_nrf54l15_nrf54l15_cpuapp.overlay é uma configuração escrita especificamente para o XIAO nRF54L15 (por exemplo, mapeando o pino D3 para o pino de controle de LED no código);

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- Outros arquivos (por exemplo, nrf54l15dk_xxx.overlay) são destinados aos kits de desenvolvimento (DKs) oficiais da Nordic, portanto você não precisa se preocupar com eles—foque apenas nos arquivos com prefixo xiao_xxx.

2. O diretório include é onde os arquivos de cabeçalho são armazenados:
- zb_dimmable_light.h é o arquivo de cabeçalho funcional para luzes dimerizáveis Zigbee, que define as funções e parâmetros relacionados ao protocolo Zigbee para o nó de luz (por exemplo, controle de brilho, relatório de status).

3. O diretório src é onde o código principal é armazenado:
 - main.c é o arquivo de entrada de todo o projeto, contendo a lógica de inicialização do programa, inicialização da rede Zigbee e lógica de controle de LED (por exemplo, controlando o nível do pino D3 após receber um comando de chave).

4. Arquivos no diretório raiz São arquivos de compilação e configuração do projeto (arquivos padrão do framework NCS/Zephyr):

- CMakeLists.txt: Um script de compilação CMake que define quais arquivos o projeto precisa compilar e de quais bibliotecas ele depende;
- Kconfig.sysbuild: Configura as opções de compilação do projeto (por exemplo, se deve habilitar a funcionalidade Zigbee, logs de depuração);
- prj.conf: O arquivo de configuração principal do projeto, que define os parâmetros do chip e os parâmetros do sistema Zephyr (por exemplo, habilitando a funcionalidade GPIO, pilha de protocolo Zigbee);
- sample.yaml: Um arquivo de configuração de amostra NCS que descreve informações básicas sobre o projeto (por exemplo, placas de desenvolvimento suportadas, descrições de funções).

### Compilar e Gravar o Código

Este guia mostra como adicionar um aplicativo existente (usando light_switch como exemplo) ao seu ambiente VS Code, e compilá-lo e gravá-lo no hardware de destino (usando xiao_nrf54l15 como exemplo).

**Passo 1.** Adicionar o aplicativo ao espaço de trabalho

- Localize o painel APPLICATIONS: Na barra lateral, encontre o painel chamado "APPLICATIONS".

- Adicionar um aplicativo existente: Clique no ícone "+" (Adicionar um aplicativo existente) no canto superior direito do painel, conforme indicado pela caixa vermelha na figura abaixo.

- Selecionar a pasta do aplicativo: Na janela do navegador de arquivos pop-up, navegue até a pasta onde seu projeto está localizado (por exemplo, D:...\workspace). Na lista, selecione a pasta do aplicativo que deseja gravar—light_switch neste exemplo—e clique no botão "Open".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Passo 2.** Criar e Configurar Opções de Compilação

- Adicionar uma configuração de compilação: No painel "APPLICATIONS", você verá o projeto light_switch recém-adicionado. Clique em "+ Add build configuration" abaixo dele.

- Configurar parâmetros de compilação: Na página "Add Build Configuration" aberta, faça as seguintes configurações: SDK e Toolchain: O nRF Connect SDK e o toolchain instalados geralmente serão selecionados automaticamente—verifique se a versão está correta. (Se o plugin que você baixou anteriormente estiver íntegro, V2.9 será selecionado automaticamente aqui.)

- Alvo da placa: Esta é a etapa mais crítica. Você precisa selecionar o hardware no qual o código será executado. Clique em "Browse" ou pesquise diretamente na caixa de entrada. Conforme mostrado na figura, o alvo da placa que você precisa selecionar é xiao_nrf54l15/nrf54l15/cpuapp. Você pode marcar "Custom" para filtrar rapidamente ou encontrar placas que não são oficialmente suportadas.

- Outras configurações: A menos que haja requisitos especiais, deixe outras configurações como fragmentos Kconfig e sobreposições Devicetree como padrão por enquanto.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
É recomendado primeiro marcar **"Custom"** para filtrar rapidamente ou encontrar placas que não são oficialmente suportadas, e então localizar o alvo da placa que você precisa selecionar:**xiao_nrf54l15/nrf54l15/cpuapp**. Se você pesquisar diretamente, o processo de solução de problemas pode demorar muito, e o alvo da placa pode não ser encontrado.

:::


:::note

- Atualize os arquivos em nível de placa. Se seus arquivos não foram atualizados por muito tempo, também é recomendado que você os atualize antes de usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
Para o tutorial detalhado, você pode consultar o link abaixo.
      **[Guia de Primeiros Passos](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

**Passo 3.** Compilação e Gravação

- Conectar o hardware: Certifique-se de que seu hardware de destino (por exemplo, placa de desenvolvimento XIAO nRF54L15) esteja devidamente conectado ao seu computador via cabo de dados.

- Abrir o terminal: No painel WELCOME da **extensão NRF CONNECT**, localize e clique na opção "Open terminal" (marcada pela caixa vermelha na figura).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- Navegar até o diretório do projeto: No terminal, use o comando `cd` para entrar na pasta do seu projeto.

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- Por favor, substitua este caminho pelo caminho real do seu próprio projeto.

- Monitorar o processo de gravação: O terminal exibirá logs detalhados, incluindo o progresso da compilação, conexão ao depurador (por exemplo, CMSIS-DAP), apagamento do flash e processos de escrita de dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- Da mesma forma, grave os dois projetos de código restantes seguindo os mesmos passos.
- Se você estiver preocupado se o código foi gravado com sucesso, há um método para verificar:

  -  Conecte-se à placa de desenvolvimento via porta serial e observe a saída da porta serial (este método não apenas verifica o resultado da gravação, mas também permite visualizar os logs de execução do programa de forma intuitiva, tornando a lógica de verificação mais clara).

### Conectar ao Zigbee

**Passo 1.** Conectar ao Zigbee

1. Ligue e inicie a placa de desenvolvimento XIAO com o programa **Coordinator** carregado.
2. Observe os logs no assistente de porta serial e aguarde o coordenador concluir a inicialização da pilha Zigbee e a configuração dos parâmetros de rede até que as informações da porta serial sejam exibidas.
3. Mantenha o coordenador ligado para manter a rede continuamente, o que fornece uma base para que dispositivos subsequentes ingressem na rede.

**Passo 2.** Configuração de Ingresso na Rede para o Dispositivo Final Lâmpada

1. Após a rede do coordenador ligado estar pronta, ligue e inicie a placa de desenvolvimento XIAO com o programa de Lâmpada carregado.

2. O dispositivo final da lâmpada inicia automaticamente a varredura de rede para encontrar redes de coordenador Zigbee disponíveis.
3. Verifique os logs da porta serial para confirmar que o dispositivo de lâmpada ingressou com sucesso na rede do coordenador.
Referência para logs principais:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Passo 3.** Ingresso na Rede e Descoberta de Dispositivos para o Interruptor de Luz

1. Após confirmar que o dispositivo de lâmpada ingressou com sucesso na rede, ligue e inicie a placa de desenvolvimento XIAO com o programa de Interruptor de Luz carregado (acione uma redefinição de fábrica pelo botão integrado, se necessário, para garantir o reescaneamento da rede).
2. O interruptor de luz escaneia automaticamente e ingressa na mesma rede do coordenador.
Referência para logs principais:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. Verifique os logs da porta serial do dispositivo de lâmpada para confirmar que o comando foi recebido e executado, e que o LED completou a ação de ligar/desligar. Referência para logs principais:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Procedimento de Redefinição da Rede Zigbee

**Passo 1.** Redefinição de Rede para o Coordenador

Pressione o botão integrado do coordenador de rede para concluir a redefinição da rede Zigbee.

**Passo 2.** Redefinição e Reingresso dos Dispositivos de Controle de Luz (Interruptor/Lâmpada)

1. Pressione e segure o botão integrado do dispositivo de controle de luz (interruptor/lâmpada);
2. Pressione o botão de reset do dispositivo;
3. Solte o botão integrado. O dispositivo concluirá a redefinição e ingressará automaticamente na nova rede Zigbee.

:::note

> **Importante:** Se o dispositivo for alimentado por bateria, a porta serial deve ser explicitamente desabilitada; caso contrário, o programa não iniciará.

:::

## Resultado

Se tudo correr bem, você verá os seguintes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### Perguntas Frequentes

1. NÃO use um diretório excessivamente longo como diretório raiz de instalação. Caso contrário, ao compilar exemplos no Windows, você encontrará frequentemente erros de compilação causados por nomes de diretório excessivamente longos.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
