---
description: Apresentando como conectar o Grove Vision AI V2 ao HomeAssistant.
title: Aplicação para HomeAssistant
keywords:
  - vision AI
  - home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 3
last_update:
  date: 01/10/2024
  author: Citric
createdAt: '2024-01-11'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/application/application-for-homeassistant/
---
# Conectar o Grove Vision AI V2 ao Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Integrar o Grove Vision AI V2 ao Home Assistant pode elevar a configuração da sua casa inteligente, adicionando recursos avançados de detecção visual. Essa integração permite análise ambiental em tempo real e automações personalizadas, tornando o ambiente da sua casa mais inteligente e responsivo.

Para facilitar essa integração, o plugin SenseCraft-HomeAssistant, acessível pela loja HACS, conecta o seu Grove Vision AI V2 ao Home Assistant por meio da SenseCraft Data Platform. Esse processo é simplificado e amigável, exigindo apenas o login em uma conta SenseCraft para trazer seu dispositivo e dados de sensores para o ecossistema do Home Assistant, prontos para você personalizar e controlar.

Abaixo está a estrutura principal do conteúdo deste artigo.

1. [Installing the HACS plugin](#Installing-the-HACS-plugin): Instale a Home Assistant Community Store (HACS) para habilitar a instalação do plugin SenseCraft da Seeed Studio dentro do Home Assistant.
2. [Installing the SenseCraft plugin](#Installing-the-SenseCraft-plugin): Instale o plugin SenseCraft da Seeed Studio, que permite a rápida implantação dos produtos da Seeed Studio no Home Assistant.
3. [Preparing the model for Grove Vision AI V2](#Preparing-the-model-for-Grove-Vision-AI-V2): Selecione e faça o deploy do modelo que você deseja usar com o Grove Vision AI V2 e, em seguida, o Home Assistant receberá as informações da cena de reconhecimento e dos resultados do Vision AI.
4. [Building MQTT Services at Home Assistant](#Building-MQTT-Services-at-Home-Assistant): Aproveite um serviço MQTT local para transmitir dados do Grove Vision AI V2 e do XIAO para o Home Assistant.
5. [Integrate Grove Vision AI V2 into Home Assistant](#Integrate-Grove-Vision-AI-V2-into-Home-Assistant): Integre o Grove Vision AI V2 ao Home Assistant e configure um painel visual para configuração.

## Introdução

Antes de começar o conteúdo do tutorial deste artigo, você pode precisar ter o seguinte hardware preparado.

### Materiais necessários

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

O Home Assistant Green é a maneira mais fácil e com maior foco em privacidade para automatizar sua casa. Ele oferece uma configuração simples e permite controlar todos os dispositivos inteligentes com apenas um sistema, em que todos os dados são armazenados localmente por padrão. Esta placa se beneficia do próspero ecossistema do Home Assistant e será aprimorada todos os meses pelo código aberto.

Recomendamos usar o Home Assistant Green como o host do Home Assistant para este tutorial, ou você pode usar qualquer host do Home Assistant com Supervisor.

Em seguida, você precisa conectar o XIAO e o Grove Vision AI V2 por meio da fileira de pinos (ou usar a placa de expansão e a interface Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## Installing the HACS plugin

### Etapa 1. Ativar o Modo Avançado no Home Assistant

Para liberar todo o potencial do Home Assistant e obter acesso a recursos avançados, você pode ativar o "Advanced Mode" na interface do usuário.

Navegue até a sua [interface web do Home Assistant](http://homeassistant.local:8123). Clique no ícone do seu perfil no canto inferior esquerdo da barra lateral do Home Assistant. Na página do seu perfil, role para baixo até encontrar a alternância **Advanced Mode**. Coloque a alternância na posição ligada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Instalar Terminal & SSH

Clique em **Settings** na barra lateral para acessar o menu de configurações. Clique em **Add-ons** para acessar a loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Use a barra de pesquisa ou navegue pelos add-ons disponíveis para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Depois de localizar **Terminal & SSH**, clique nele para ver os detalhes. Na página do add-on, você verá uma visão geral, documentação e opções de configuração. Para instalar o add-on, clique no botão **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Instalar o HACS

Encontre o **Terminal & SSH** recém-baixado na barra lateral. No terminal, navegue até o diretório config, que é a raiz da sua configuração do Home Assistant:

```
cd /config
```

Execute o seguinte comando para baixar e executar o script de instalação do HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

Depois que o script de instalação terminar, você precisa reiniciar o Home Assistant para aplicar as alterações. Você pode reiniciar o Home Assistant pela interface indo em **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

Após a reinicialização, clique em **Settings** na barra lateral para abrir o menu de configurações. Dentro do menu de configurações, navegue até **Devices & Services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Clique em **ADD INTEGRATION** para adicionar uma nova integração à sua configuração do Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

Na barra de pesquisa, digite **HACS** para procurar a integração Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Se o HACS for encontrado, ele deverá aparecer na lista de integrações disponíveis. Clique nele para iniciar o processo de instalação.

Um contrato de licença ou termos de serviço pode aparecer. Leia o contrato com atenção e, se você concordar com os termos, marque todas as caixas para indicar seu acordo. Clique em **SUBMIT** para prosseguir com a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

Em seguida, será solicitado que você faça login com sua conta do GitHub. Isso é necessário porque o HACS se integra ao GitHub para gerenciar a instalação de integrações e plugins criados pela comunidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Siga as instruções para autorizar o Home Assistant a acessar sua conta do GitHub. Isso normalmente envolve inserir um código de verificação fornecido pelo GitHub para confirmar sua identidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Depois que você autorizar o Home Assistant a usar sua conta do GitHub, o HACS concluirá a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Talvez seja necessário reiniciar o Home Assistant para que o HACS seja totalmente integrado ao seu sistema.

## Installing the SenseCraft plugin

### Etapa 4. Instalação do plugin SenseCraft via HACS

Procure por HACS na barra lateral e clique nele para abrir a interface do HACS. No canto inferior direito, você encontrará um botão de menu (três pontos ou um sinal de mais, dependendo da sua versão do HACS). Clique em **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Uma caixa de diálogo aparecerá pedindo para você inserir a URL do repositório. Aqui, você deve inserir a URL do repositório personalizado para a integração SenseCraft. Depois de inserir a URL, selecione a categoria (para a integração SenseCraft, você deve selecionar **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Add**. O repositório agora está adicionado ao seu HACS e você deverá conseguir encontrar a integração SenseCraft na lista em **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Localize a integração SenseCraft e clique em "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

Neste ponto, concluímos com sucesso a instalação do plugin SenseCraft.

## Preparando o modelo para Grove Vision AI V2

### Etapa 5. Gravar o firmware para o XIAO ESP32C3

Conecte o XIAO ESP32C3 ao seu computador usando um cabo USB-C adequado. Certifique-se de que os drivers do dispositivo estejam instalados corretamente.

Abra a [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) no seu navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, selecione **XIAO ESP32S3** e clique em **Connect**.

:::caution
Observe que, embora o XIAO ESP32-S3 esteja selecionado aqui, ainda estamos usando o XIAO ESP32-C3!
:::

Clique no botão abaixo para baixar o arquivo de firmware e clique no botão **Add File** na página da web para gravar o firmware `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` para o endereço `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Por fim, clique no botão **Flash** e aguarde o upload do programa ser concluído com sucesso antes de desconectar o XIAO ESP32C3 do computador.

### Etapa 6. Conectar o Grove Vision AI V2 ao SenseCraft AI Model Assistant

Acesse o workspace do Grove Vision AI V2 por meio de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`Grove Vision AI V2`**, ou use o [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/36).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/grove_vision_ai_v2_workspace.png" style={{width:1000, height:'auto'}}/></div>

Use um cabo do tipo Type-C para conectar o **Grove Vision AI V2** ao seu computador.

Em seguida, clique no botão **Connect** no canto superior esquerdo e selecione o número da porta do dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### Etapa 7. Fazer upload de um modelo adequado

Depois, selecione o modelo apropriado que você deseja usar após clicar em **Select Model** para fazer o upload para o Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

Aguarde de 1 a 2 minutos para o upload do modelo.

### Etapa 8. Observações

Quando o modelo for carregado com sucesso, você poderá ver a transmissão ao vivo da câmera do Grove Vision AI V2 na visualização (Preview) à direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

Podemos ver que, nas configurações de Preview no lado direito, há duas opções de configuração que podem ser alteradas para otimizar a precisão de reconhecimento do modelo.

:::tip
Se não houver tela exibida em Preview ou não houver informações nas informações do modelo, pode haver um problema com o modelo e você precisa selecioná-lo novamente ou fazer o upload outra vez.
:::

## Construindo serviços MQTT no Home Assistant

### Etapa 9. Instalar o EMQX

Clique em **Settings** na barra lateral para acessar o menu de configurações. Clique em **Add-ons** para acessar a loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Use a barra de pesquisa ou navegue pelos add-ons disponíveis para encontrar **emqx**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

Depois de localizar o **EMQX**, clique nele para ver os detalhes. Na página do add-on, você verá uma visão geral, documentação e opções de configuração. Para instalar o add-on, clique no botão **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

Depois que o Add-on EMQX estiver instalado, ative as opções **Start on boot**, **Watchdog** e **Show in sidebar**. Clique em **Start** para iniciar o EMQX.

Na página de login do EMQX Dashboard, insira o nome de usuário e a senha padrão.

- Nome de usuário padrão: **admin**
- Senha padrão: **public**

Clique no botão "Login" para acessar o EMQX Dashboard.

No EMQX Dashboard, navegue até a seção **Authentication** no menu da barra lateral esquerda. Clique na aba **Databases**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

Clique no botão **Create**. No menu suspenso **Mechanism**, selecione **Password-Based**. No menu suspenso **Backend**, selecione **Built-in Database**. Clique no botão "Create" para criar o Built-in Database.

Após criar o Built-in Database, clique na aba **Users** na seção "Authentication". Clique no botão "Add User".

- No campo "Username", insira "seeed".
- No campo "Password", insira "seeed".

Volte para a aba "Databases" na seção "Authentication". Localize o banco de dados criado anteriormente na lista de bancos de dados.

Clique no interruptor ao lado do banco de dados para habilitá-lo. O status do banco de dados deve mudar para "Enabled".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Integrar o Grove Vision AI V2 ao Home Assistant

### Etapa 10. Configurando a rede para Grove Vision AI V2 e XIAO

Conecte o Grove Vision AI V2 ao seu computador e abra a página de configuração do Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

Depois de clicar no canto superior esquerdo para se conectar ao Grove Vision AI V2, ative o botão MQTT e insira as seguintes informações que você precisa preencher na página.

- **SSID & Password**: O dispositivo precisa estar na mesma LAN que o host onde o Home Assistant está instalado. Portanto, configure a rede sob a mesma LAN. O XIAO suporta apenas WiFi 2,4G, rede 5G não é suportada.
- **Encryption**: Selecione **AUTO**.
- **Host**: Endereço IP do host onde o Home Assistant está instalado.
- **Port**: `1883`.
- **clientId**: Para o número de identificação do dispositivo, prefixe com `grove_vision_ai_v2_` seguido pelo número de ID personalizado.
- **username**: O nome do banco de dados EMQX que você acabou de criar.
- **password**: A senha do banco de dados EMQX que você acabou de criar.

Em seguida, clique no botão **Apply** abaixo. Após salvar, isso **não significa que o Grove Vision AI esteja conectado à rede**, volte para **Process** na barra de menu à esquerda e verifique se o endereço IP do dispositivo apareceu e se o status da conexão MQTT está correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Quando o endereço IP é exibido, significa que não há problema com o WIFI, e o Service status deve ser o texto mostrado na figura para representar o funcionamento normal. Observe que, se o WIFI não estiver normal, o MQTT definitivamente não estará normal; quando você acabou de mudar para esta aba, pode mostrar como desconectado, e você precisa esperar cerca de 10 s. Não é necessário atualizar para ver o status, ele mostrará automaticamente o status mais recente após a mudança de estado.
:::

### Etapa 11. Integração ao Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="Cenário 1. Se o dispositivo foi encontrado">

Neste ponto, normalmente, você já pode pesquisar o Grove Vision AI V2 em **Settings->Devices & services** no Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Configure** para definir as informações relevantes, e você terá concluído a adição do dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

Em **Settings->Devices & services**, você poderá ver os detalhes do dispositivo e exibir as abas suportadas; você pode adicionar quantas abas quiser para mostrar na visão geral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. Se você configurou um nome de usuário e senha nas etapas anteriores, poderá ser solicitado a inseri-los ao adicionar um dispositivo.
2. Se você tiver mais de um dispositivo Vision AI para adicionar ao Home Assistant, fique atento ao número de ID do dispositivo, que serve como uma marca distintiva entre as diferentes bandeiras Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="Cenário 2. Se o dispositivo não for encontrado">

Se houver muitos dispositivos em sua casa, às vezes eles podem não ser pesquisáveis diretamente pelo Home Assistant. Nesse caso, talvez seja necessário adicionar os dispositivos manualmente.

Na página **Settings**, escolha **Devices & Services**.

Em seguida, clique no botão **ADD INTEGRATION** no canto inferior direito e pesquise por **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Clique em SenseCraft e selecione Action como **Add device using host/id**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

Clique em **SUBMIT**, depois selecione o tipo do seu dispositivo no menu suspenso, como `Grove Vision AI V2`, e clique em **SUBMIT** novamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

No campo de entrada a seguir, insira o ID exato do seu dispositivo. Esse ID geralmente é encontrado no próprio dispositivo ou no site do SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

A próxima etapa é configurar o serviço MQTT. Insira as informações que correspondem aos detalhes do serviço MQTT que você configurou no site. Se você não tiver configurado um nome de usuário e senha anteriormente, não precisa preenchê-los aqui. Em seguida, clique em **SUBMIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Endereço IP do Home Assistant.
- **Port**: `1883`.
- **clientId**: Para o número de identificação do dispositivo, prefixe-o com `grove_vision_ai_v2_` seguido pelo número de ID personalizado.
- **username**: O nome do banco de dados EMQX que você acabou de criar.
- **password**: A senha do banco de dados EMQX que você acabou de criar.

</TabItem>

</Tabs>

Se a configuração for bem-sucedida, o sistema geralmente solicitará que você selecione um local para o seu dispositivo. Escolha o cômodo ou área apropriada com base na sua situação real e clique em **Finish**.

Quando a configuração estiver concluída, você poderá visualizar seu dispositivo e seu status na página "Overview" do Home Assistant.

Seguindo essas etapas, você deverá conseguir adicionar com sucesso o dispositivo "SenseCraft" à sua instância do Home Assistant e configurá-lo para usar o serviço MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## Solução de problemas

### P1: O que devo fazer se eu nunca mais vir as mensagens de dados no HA depois que o Grove Vision AI V2 cair?

Talvez você precise excluir o dispositivo e adicioná-lo novamente no SenseCraft. Depois de excluí-lo, ele pode não ser mais pesquisado automaticamente e você precisará adicionar o dispositivo manualmente. Consulte os **[passos aqui](#etapa-11-integração-ao-home-assistant)** para readicionar o dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
