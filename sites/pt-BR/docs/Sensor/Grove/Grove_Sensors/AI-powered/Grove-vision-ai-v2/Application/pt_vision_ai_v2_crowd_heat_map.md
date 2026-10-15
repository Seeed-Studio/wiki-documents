---
description: Construindo um mapa de calor de multidão com base no Grove Vision AI V2 e Home Assistant.
title: Construindo uma densidade de multidão com base no Grove Vision AI V2 e Home Assistant
keywords:
  - matter
  - XIAO
  - light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /vision_ai_v2_crowd_heat_map
last_update:
  date: 05/22/2024
  author: Citric
createdAt: '2024-05-23'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/vision_ai_v2_crowd_heat_map/
---

# Construindo uma densidade de multidão com base no Grove Vision AI V2 e Home Assistant

Na era das casas inteligentes e da IoT, integrar sensores e dispositivos inteligentes em sistemas de automação residencial tornou-se cada vez mais popular. O [Home Assistant](https://www.home-assistant.io/), uma poderosa plataforma de automação residencial de código aberto, oferece uma ampla gama de possibilidades para criar soluções personalizadas adaptadas às necessidades individuais. Neste tutorial, exploraremos como construir um sistema avançado de detecção de ambiente usando o Grove Vision AI V2 e o XIAO ESP32C3, integrados perfeitamente ao Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/2.png" style={{width:900, height:'auto'}}/></div>

O Grove Vision AI V2, um sensor de visão de ponta, combinado com o versátil microcontrolador XIAO ESP32C3, fornece uma base ideal para criar um sistema de detecção de ambiente rico em recursos e altamente capaz. Ao aproveitar o poder desses dispositivos, podemos implementar uma ampla variedade de funcionalidades, incluindo reconhecimento multi-modelo, configurações personalizadas, taxa de quadros em tempo real, visualização ao vivo, rastreamento de alvos, mapa de calor de alvos e contagem entre áreas.

Ao longo deste tutorial, iremos guiá-lo pelo processo passo a passo de configuração do hardware, configuração do software e integração do sistema com o Home Assistant. Seja você iniciante ou usuário experiente, este tutorial tem como objetivo fornecer o conhecimento e as ferramentas necessários para criar um sistema sofisticado de detecção de ambiente que aprimora sua experiência de casa inteligente.

Prepare-se para embarcar em uma jornada empolgante enquanto desbloqueamos o potencial do Grove Vision AI V2 e do XIAO ESP32C3, e descobrimos como eles podem revolucionar a forma como você monitora e interage com o ambiente da sua casa usando o Home Assistant. Vamos mergulhar e começar a construir o seu próprio sistema inteligente de detecção de ambiente!

## Preparação de Hardware

Antes do conteúdo do tutorial deste artigo começar, você pode precisar ter o seguinte hardware pronto.

### Materiais Necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Home Assistant Green é a maneira mais fácil e focada em privacidade de automatizar sua casa. Ele oferece uma configuração sem esforço e permite controlar todos os dispositivos inteligentes com apenas um sistema, onde todos os dados são armazenados localmente por padrão. Esta placa se beneficia do ecossistema em crescimento do Home Assistant e será aprimorada todos os meses por meio do código aberto.

Recomendamos usar o Home Assistant Green como o host do Home Assistant para este tutorial, ou você pode usar qualquer host do Home Assistant com um Supervisor.

Depois que você tiver o Grove Vision AI V2 e a câmera prontos para uso, poderá conectá-los por meio do cabo de conexão CSI. Ao conectar, preste atenção à direção da fileira de pinos e não os conecte invertidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:400, height:'auto'}}/></div>

Em seguida, você precisa conectar o XIAO e o Grove Vision AI V2 por meio da fileira de pinos (ou usar a placa de expansão e a interface Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:400, height:'auto'}}/></div>

E assumimos que você já carregou um modelo de reconhecimento para o dispositivo.

### Gravar o Firmware de Transparência de Rede para o XIAO ESP32C3

Conecte o XIAO ESP32C3 ao seu computador usando um cabo USB-C adequado. Certifique-se de que os drivers do dispositivo estejam instalados corretamente.

Abra a [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) no seu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, selecione **XIAO ESP32S3** e clique em **Connect**.

:::caution
Observe que, embora o XIAO ESP32S3 seja selecionado aqui, ainda estamos usando o XIAO ESP32C3!
:::

Clique no botão abaixo para baixar o arquivo de firmware e clique no botão **Add File** na página da web para gravar o firmware `sscma_xiao_c3_network_v1.1.0.bin` para o endereço `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/sscma_xiao_c3_network_v1.1.0.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Por fim, clique no botão **Flash** e aguarde o upload bem-sucedido do programa antes de desconectar o XIAO ESP32C3 do computador.

## Instalação de plug-ins no Home Assistant

Antes de começarmos a construir nosso sistema de detecção de ambiente, precisamos instalar alguns complementos essenciais no Home Assistant. Esses complementos fornecerão as funcionalidades e ferramentas necessárias para integrar o Grove Vision AI V2 e o XIAO ESP32C3 com o Home Assistant. Os complementos necessários são **EMQX**, **Advanced SSH & Web Terminal** e **Node-RED**. Vamos passar pelo processo de instalação de cada complemento.

### Etapa 1. Instalando o EMQX

Abra a interface web do Home Assistant e navegue até o menu **Settings**. Clique na opção **Add-ons** para acessar a página de gerenciamento de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/4.png" style={{width:900, height:'auto'}}/></div>

No canto inferior direito da página, clique no botão **ADD-ON STORE** para abrir a loja de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/5.png" style={{width:900, height:'auto'}}/></div>

Na barra de pesquisa da loja de complementos, digite **EMQX** e pressione Enter para pesquisar o complemento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/6.png" style={{width:900, height:'auto'}}/></div>

Localize o complemento **EMQX** nos resultados da pesquisa e clique nele para ver seus detalhes. Clique no botão **INSTALL** para iniciar o processo de instalação. O Home Assistant fará o download e instalará o complemento EMQX. Aguarde a conclusão da instalação.

### Etapa 2. Instalando o Advanced SSH & Web Terminal

Na "Add-on Store" do Home Assistant, pesquise por **Advanced SSH & Web Terminal**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/7.png" style={{width:900, height:'auto'}}/></div>

Localize o complemento **Advanced SSH & Web Terminal** e clique nele para ver seus detalhes. Clique no botão **Install** para iniciar o processo de instalação. O Home Assistant fará o download e instalará o complemento Advanced SSH & Web Terminal.

### Etapa 3. Instalando o Node-RED

Novamente, na "Add-on Store" do Home Assistant, pesquise por **Node-RED**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/8.png" style={{width:900, height:'auto'}}/></div>

Encontre o complemento **Node-RED** e clique nele para acessar seus detalhes. Clique no botão "Install" para iniciar o processo de instalação. Permita que o Home Assistant faça o download e instale o complemento Node-RED.

## Implantando o pysscma via Docker no Home Assistant

Nesta etapa, faremos o download e configuraremos o servidor Python SSCMA (Seeed Studio Cross-platform Modular API) usando o complemento Advanced SSH & Web Terminal no Home Assistant. Este servidor permitirá a comunicação entre o Grove Vision AI V2 e o Home Assistant. Siga as etapas detalhadas abaixo:

### Etapa 4. Acessando o Advanced SSH & Web Terminal

Abra a interface web do Home Assistant e navegue até o menu **Settings**. Clique na opção **Add-ons** para acessar a página de gerenciamento de complementos. Localize o complemento **Advanced SSH & Web Terminal** e clique nele para abrir sua página de detalhes.

Desative o **Protection mode** nesta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/9.png" style={{width:900, height:'auto'}}/></div>

Clique no botão **START** se o complemento ainda não estiver em execução. Quando o complemento estiver em execução, clique no botão **OPEN WEB UI** para acessar a interface do terminal.

:::note
Na primeira vez que você iniciar este plugin, talvez precise preencher `username`, `password` e `authorized_key` na página de configuração da página de detalhes do plugin. Para informações detalhadas de configuração, leia a documentação fornecida com o plugin.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/10.png" style={{width:900, height:'auto'}}/></div>
:::

### Etapa 5. Baixar o pacote pysscma.tar

No Advanced SSH & Web Terminal, navegue até o diretório raiz executando o seguinte comando:

```
cd /
```

Baixe o pacote **pysscma.tar** executando o seguinte comando:

```
wget -O pysscma.tar https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/pysscma.tar
```

Aguarde a conclusão do download. O pacote **pysscma.tar** será salvo no diretório raiz.

### Etapa 6. Carregar a imagem Docker

Após a conclusão do download, execute o seguinte comando para carregar a imagem Docker a partir do pacote pysscma.tar:

```
docker load -i pysscma.tar
```

O Docker carregará a imagem e você verá o ID da imagem quando o processo for concluído.

Para iniciar o servidor Python SSCMA, execute o seguinte comando:

```
docker run -itd --net host --name pysscma_server --restart on-failure --privileged python-sscma:latest server --host 0.0.0.0
```

Este comando criará e iniciará um contêiner Docker chamado "pysscma_server" com as configurações necessárias.

Para verificar se o contêiner Docker está em execução corretamente, execute o seguinte comando:

```
docker ps
```

Você deverá ver o contêiner "pysscma_server" listado com o status "Up".

### Etapa 7. Obter o endereço IP

Para obter o endereço IP do contêiner Docker, execute o seguinte comando:

```
ifconfig | grep docker -A 10
```

Procure pelo campo "inet" na saída e anote o endereço IP associado a ele (por exemplo, 172.30.232.1).

Este endereço IP será usado nas etapas subsequentes para configurar a comunicação entre o Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/1.png" style={{width:900, height:'auto'}}/></div>

## Configurar o Broker MQTT

Nesta etapa, vamos configurar o complemento EMQX no Home Assistant para definir a autenticação de usuário para comunicação segura entre o Grove Vision AI V2 e o Home Assistant.

### Etapa 8. Criar um Banco de Dados Interno e Usuário

Abra a interface web do seu Home Assistant e navegue até o menu "Settings". Clique na opção "Add-ons" para acessar a página de gerenciamento de complementos. Localize o complemento "EMQX" e clique nele para abrir a página de detalhes. Clique no botão "START" se o complemento ainda não estiver em execução. Quando o complemento estiver em execução, clique no botão "OPEN WEB UI" para acessar o EMQX Dashboard.

Na página de login do EMQX Dashboard, insira o nome de usuário e senha padrão.

- Nome de usuário padrão: **admin**
- Senha padrão: **public**

Clique no botão "Login" para acessar o EMQX Dashboard.

No EMQX Dashboard, navegue até a seção **Authentication** no menu lateral esquerdo. Clique na aba **Databases**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Clique no botão **Create**. Na lista suspensa **Mechanism**, selecione **Password-Based**. Na lista suspensa **Backend**, selecione **Built-in Database**. Clique no botão "Create" para criar o Banco de Dados Interno.

Após criar o Banco de Dados Interno, clique na aba **Users** na seção "Authentication". Clique no botão "Add User".

- No campo "Username", insira "seeed".
- No campo "Password", insira "seeed".

Volte para a aba "Databases" na seção "Authentication". Localize o banco de dados criado anteriormente na lista de bancos de dados.

Clique na chave de alternância ao lado do banco de dados para habilitá-lo. O status do banco de dados deve mudar para "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

### Etapa 9. Configurar a rede para o Grove Vision AI V2

Conecte o Grove Vision AI V2 ao seu computador e abra a [página de configuração do Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config).

Depois de clicar no canto superior direito para se conectar ao Grove Vision AI V2, ative o botão MQTT e insira as seguintes informações que você precisa preencher na página.

- **SSID & Password**: O dispositivo precisa estar na mesma LAN que o host onde o Home Assistant está instalado. Portanto, configure a rede na mesma LAN. O XIAO suporta apenas WiFi 2.4G, a rede 5G não é suportada.
- **Encryption**: Selecione **AUTO**.
- **Host**: Endereço IP do host onde o Home Assistant está instalado.
- **Port**: `1883`.
- **clientId**: Para o número de identificação do dispositivo, prefixe com `grove_vision_ai_v2_` seguido pelo número de ID personalizado.
- **username**: O nome do banco de dados EMQX que você acabou de criar.
- **password**: A senha do banco de dados EMQX que você acabou de criar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/13.png" style={{width:900, height:'auto'}}/></div>

Em seguida, clique no botão Save abaixo. Depois de salvar, isso **não significa que o Grove Vision AI V2 tenha sido gravado corretamente**, por favor volte para **Process** na barra de menu à esquerda e verifique se o endereço IP do dispositivo apareceu e se o status da conexão MQTT está correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Quando o IP Address for exibido, significa que não há problema com o WIFI, e Service status deve ser o texto na figura para representar normal; observe que, se o WIFI não estiver normal, o MQTT com certeza não estará normal; quando você acabar de mudar de tela, ele pode mostrar desconectado, e você precisa esperar cerca de 10s, não é necessário atualizar para ver o status, ele mostrará automaticamente o status mais recente após a mudança de status.
:::

Se a conexão estiver funcionando, teoricamente você poderá ver o fluxo de dados no EMQX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/3.png" style={{width:900, height:'auto'}}/></div>

:::note
Como as conexões do Node-RED ainda não foram configuradas, você deverá ver apenas uma All Connections no EMQX.
:::

## Configurar o Node-RED

Nesta etapa, vamos configurar o complemento Node-RED no Home Assistant para criar os fluxos necessários para integrar o Grove Vision AI V2 com o Home Assistant.

### Etapa 10. Configurar e executar o Node-RED

Abra a interface web do seu Home Assistant e navegue até o menu "Settings". Clique na opção "Add-ons" para acessar a página de gerenciamento de complementos. Localize o complemento "Node-RED" e clique nele para abrir a página de detalhes. Clique na aba "Configuration".

Na configuração do Node-RED, localize a opção **ssl**. Desative a opção **ssl**. Clique no botão **SAVE** para aplicar as alterações de configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/14.png" style={{width:900, height:'auto'}}/></div>

Clique no botão "START" para iniciar o complemento Node-RED. Aguarde o complemento iniciar com sucesso. Você pode verificar os logs para monitorar o progresso. Quando o complemento Node-RED estiver em execução, clique no botão "OPEN WEB UI" para acessar o Editor do Node-RED.

### Etapa 11. Instalar o nó `msg-speed`

No Editor do Node-RED, clique no menu hamburguer (três linhas horizontais) no canto superior direito. Selecione **Manage palette** no menu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/15.png" style={{width:900, height:'auto'}}/></div>

Na barra lateral **Palette**, clique na aba **Install**. Na caixa de pesquisa, digite **msg-speed** e pressione Enter. Localize o nó **msg-speed** nos resultados da pesquisa e clique no botão **Install** ao lado dele. Aguarde a conclusão da instalação e, em seguida, feche a barra lateral "Palette".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/16.png" style={{width:900, height:'auto'}}/></div>

### Etapa 12. Importar o Flow JSON

Baixe nosso arquivo JSON preparado `crowd_density.json` para o Flow.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/crowd_density.json" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

No Editor do Node-RED, clique novamente no menu hamburguer. Selecione "Import" no menu. Na caixa de diálogo "Import nodes", clique no botão "select a file to import". Procure e selecione o arquivo JSON fornecido que contém o fluxo Node-RED pré-configurado. Clique no botão "Import" para importar o fluxo para o Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/17.png" style={{width:900, height:'auto'}}/></div>

Então você poderá ver o Flow do Node-RED que preparamos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/18.png" style={{width:900, height:'auto'}}/></div>

### Etapa 13. Configurar o nó MQTT Broker

No fluxo importado, localize o nó **mqtt-broker**. Clique duas vezes no nó para abrir sua configuração.

No campo "Server", insira o endereço IP do broker EMQX (por exemplo, localhost ou o endereço IP da instância do Home Assistant).

No campo "Username", insira o nome de usuário que você criou no EMQX Database (por exemplo, "seeed").

No campo "Password", insira a senha que você definiu para o usuário no EMQX Database (por exemplo, "seeed"). Clique no botão "Done" para salvar a configuração do broker MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/19.png" style={{width:900, height:'auto'}}/></div>

### Etapa 14. Verificando a URL do nó POST

No fluxo importado, localize o nó "POST". Clique duas vezes no nó para abrir sua configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/20.png" style={{width:900, height:'auto'}}/></div>

Verifique se o campo "URL" contém o endereço IP correto do contêiner Docker pysscma que você obteve na **[Etapa 7](#etapa-7-obtaining-the-ip-address)**. Se necessário, atualize a URL para corresponder ao endereço IP do Docker pysscma. Clique no botão "Done" para salvar a configuração do nó POST.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/21.png" style={{width:900, height:'auto'}}/></div>

### Etapa 15. Fazendo o deploy do fluxo

Clique no botão **Deploy** no canto superior direito do Editor Node-RED para fazer o deploy do fluxo. O fluxo agora deve estar ativo e pronto para lidar com dados do Grove Vision AI V2.

## Configuração do Dashboard de Densidade de Multidão

Nesta etapa, acessaremos o dashboard do Node-RED para monitorar e interagir com os dados do dispositivo Grove Vision AI V2.

Abra um navegador da web no seu computador ou dispositivo móvel. Na barra de endereços, insira a URL no seguinte formato:

```
http://homeassistant:1880/endpoint/ui/
```

Agora você pode monitorar o fluxo de dados e interagir com os nós no dashboard do Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/22.png" style={{width:900, height:'auto'}}/></div>

Antes de tudo, insira seu clientId no canto superior esquerdo. Em seguida, clique no botão **REFRESH** e comece a invocar. Então o vídeo do Grove Vision AI V2 é transmitido em tempo real. Você pode ativar ou desativar as seguintes funções de acordo com suas necessidades reais.

- **region**: Ativar esta função inicia a função de Contagem Entre Áreas. Por padrão, quando esta função é ligada, a imagem será dividida em duas áreas, área A e área B, ao longo da linha laranja no meio. Quando uma moldura de identificação viaja da área A atravessando a linha laranja para a área B, então o **COUNT (A to B)** no lado esquerdo do centro é incrementado em 1. Inversamente, o **COUNT (B to A)** no lado direito é incrementado em 1.

  - **pos1**: É usado para definir a posição do ponto final esquerdo (superior) do segmento de linha que divide a área.

  - **pos2**: É usado para definir a posição do ponto final direito (inferior) do segmento de linha que divide a área.

  - **vertical**: Por padrão, o segmento de linha que divide a área é a linha horizontal. Quando este botão é ligado, os segmentos de linha se tornam linhas verticais.

- **box**: Por padrão, a caixa de reconhecimento está desativada. Quando o botão é ligado, a caixa de reconhecimento é exibida em tempo real na tela central.

- **track**: Por padrão, a funcionalidade de Rastreamento de Alvo está desligada. Se o recurso for ativado, então a rota percorrida pelo objeto reconhecido é traçada como uma linha verde fina na imagem central.

- **label**: Por padrão, o rótulo de reconhecimento está desativado. Quando o botão é ligado, o rótulo de reconhecimento é exibido em tempo real na tela central.

- **heatmap**: Por padrão, o Mapa de Calor de Alvos está desligado. Quando o botão é ligado, a densidade de multidão da área atualmente detectada é exibida. Quanto mais vermelha for a cor de uma área, mais ocorrências históricas de objetos monitorados são detectadas nessa área, e quanto mais azul, menos.

**Performance** no extremo direito é a taxa de quadros em tempo real, Image é a taxa de quadros da transferência de tela, e Overlay é a taxa de quadros da tela com várias funções ativadas.

A tela no centro mostra a visualização ao vivo com as várias funções ativadas, e a pequena janela à direita mostra a tela original.

## Solução de Problemas

### P1: Quais modelos este projeto suporta?

Atualmente o projeto só suporta modelos para reconhecimento de alvos, ou seja, a classe de modelos com molduras de reconhecimento, e não suporta, por exemplo, modelos como Human Pose Detection e Hand Pose Detection.

### P2: Por que o dashboard não responde depois que eu ativei os botões de certas funções?

Como esta página é construída em Node-RED, a página pode não ser atualizada em tempo real em alguns casos devido à otimização do kernel do navegador. Você pode tentar atualizar a tela clicando no botão REFRESH e no botão invoke, ou atualizando a página web atual.

## Recursos

- **[GITHUB]** [Código-fonte do pysscma](https://github.com/Seeed-Studio/python-sscma/tree/feat/supervision?tab=readme-ov-file#sample)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
