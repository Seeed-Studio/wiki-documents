---
description: Introdução ao reTerminal DM SenseCraft Edge OS
title: Introdução ao reTerminal DM SenseCraft Edge OS
keywords:
  - Edge
  - reTerminal-DM
  - SenseCraft Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-sensecraft-edge-os-intro
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2023-06-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reterminal-dm-sensecraft-edge-os-intro/
---
#  Introdução ao reTerminal DM SenseCraft Edge OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OS é um sistema operacional de ponta meticulosamente projetado para o dispositivo HMI (Interface Homem‑Máquina) de 10,1" do reTerminal DM, com uma série de funcionalidades integradas que elevam a experiência do usuário a um novo patamar. Este sistema operacional inovador conta com uma interface intuitiva com funções embutidas de configuração e controle, permitindo que os usuários configurem e gerenciem seus dispositivos com facilidade. Além disso, ele se integra perfeitamente ao editor Node-RED e ao Node-RED Dashboard, possibilitando aos usuários desbloquear capacidades incomparáveis de personalização e automação. Aproveitando o poder da programação visual e das ferramentas de automação do Node-RED, este sistema operacional permite criar fluxos de trabalho complexos e implantar sistemas de controle sofisticados com facilidade. Com sua combinação única de controles HMI intuitivos e a versatilidade do Node-RED, o SenseCraft Edge OS estabelece um novo padrão de funcionalidade avançada e usabilidade incomparável no campo de dispositivos HMI em todos os tipos de cenários de uso. O sistema de arquivos versionado OSTree integrado oferece uma estrutura robusta para gerenciar e implantar sistemas operacionais baseados em Linux de forma escalável e confiável, com foco em atomicidade, imutabilidade e uso eficiente de armazenamento.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"2"}> Adquira o reTerminal DM Agora 🖱️</font></span></strong>
    </a>
</div>

:::note
O reTerminal DM será enviado com Raspberry Pi OS como sistema operacional padrão a partir do próximo lote de produção.
:::

:::note
Este sistema operacional é atualmente desenvolvido com base no reTerminal DM e funciona apenas com a versão de Produção do reTerminal DM. Você pode baixar o [Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)
:::

## Funcionalidades

* **Design de interface amigável ao toque** especificamente adaptado para dispositivos de Interface Homem‑Máquina (HMI), garantindo uma experiência de usuário intuitiva e fluida. 
* **Integra-se perfeitamente** com o amplamente popular ambiente de desenvolvimento **"no code & low code" Node-RED**, juntamente com seu componente complementar **Node-RED Dashboard**. Essa integração oferece aos usuários poderosas capacidades de programação visual e uma estrutura de dashboard versátil para criar aplicações personalizadas sem a necessidade de amplo conhecimento em programação. 
* **Configuração e controle de sistema integrados**, oferecendo uma interface abrangente e intuitiva para configurar e gerenciar vários aspectos do reTerminal DM.
* **Central de Aplicativos integrada para futura expansão de casos de uso**, que serve como um hub para acessar e instalar uma ampla variedade de aplicativos e extensões, permitindo que os usuários personalizem e ampliem a funcionalidade de seu sistema operacional.
* **Serviço Configurável integrado**, como **MQTT, MySQL e ChirpStack**, oferecendo aos usuários funcionalidade e flexibilidade aprimoradas na construção de aplicativos de dashboard de visualização de dados.
* **Sistema de arquivos versionado OSTree** permite **atualizações atômicas** de todo o sistema operacional e permite acompanhar e gerenciar diferentes versões do sistema operacional e de seus componentes. Isso torna mais fácil reverter para uma versão anterior, se necessário.
* **Recurso de Verificação de Saúde do Sistema integrado** que permite aos usuários monitorar o estado geral e o desempenho do reTerminal DM. Esse recurso fornece insights valiosos sobre o status do sistema, garantindo funcionalidade ideal e identificando possíveis problemas.


<!-- ## Choose SenseCraft Edge Version -->

<!-- Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="V1.2.0" label="v0.1.8-1.2.0"> -->

## Visão Geral do Layout

### Barra de Status

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

Os itens clicáveis e suas funcionalidades:

<div class="table-center">

| Ícone | Função | 
|---| ---|
|Controle de Energia | Abre uma lista suspensa com as opções "Restart", "Shut Down", "Sleep" |
|Conexão Bluetooth | Leva você à tela de configuração de Bluetooth |
|Conexão Ethernet|Leva você à tela de configuração de Ethernet |
|Conexão WiFi |Leva você à tela de configuração de WiFi |

</div>

### Aba do Dashboard

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

A aba Dashboard renderiza a visualização do "node-red-dashboard" localmente no reTerminal DM. Aqui estão algumas considerações de design para referência:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* Largura máxima sem rolagem: 1075px
* Altura máxima sem rolagem: 752px

Você também pode acessar a visualização do dashboard em uma máquina externa que esteja na mesma rede do reTerminal DM. Basta abrir seu navegador web favorito nessa máquina externa e digitar o endereço IP do seu reTerminal DM, seguido pela porta padrão 1880 do Node-RED e, em seguida, por **'/ui/'**, de forma que a URL fique assim: **"ipaddress:1880/ui/"**

> Por exemplo: no meu caso, o endereço IP do reTerminal DM é "192.168.49.163", então a URL é: **"192.168.49.163:1880/ui/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Aba do editor Node-RED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

Observe que você pode abrir o editor Node-RED em uma máquina externa que esteja na mesma rede do reTerminal DM. Basta abrir seu navegador web favorito nessa máquina externa e digitar o endereço IP do seu reTerminal DM seguido pela porta padrão 1880 do Node-RED. Para encontrar o endereço IP do seu reTerminal DM, você pode localizar o Endereço IP conforme mostrado na imagem abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> Por exemplo: no meu caso, o endereço IP do reTerminal DM é "192.168.49.163", então a URL é: **"192.168.49.163:1880/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
Você pode baixar o [Fluxo Padrão](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json) para referência.
:::

Para mais informações sobre como usar o Node-RED com o reTerminal DM, visite as páginas da Wiki do Node-RED:

* [Porta RS485 do reTerminal DM com Node-RED](/pt-br/reTerminal-DM-Node-Red-RS485)
* [MQTT do reTerminal DM com Node-RED](/pt-br/reTerminal-DM-Node-Red-mqtt)
* [CAN BUS do reTerminal DM com Node-RED](/pt-br/reTerminal-DM-Node-Red-canbus)

### Aba de Configurações do Sistema

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### Subaba de Rede

A seção Rede é usada para visualizar e configurar funções de rede para Ethernet, WiFi e Bluetooth.

##### Subaba Ethernet

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>


##### Subaba WiFi

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

Para conectar ao WiFi, clique no SSID de WiFi ao qual você deseja se conectar e então verá a seguinte janela pop‑up. Insira as credenciais de WiFi e clique em `Confirm` para continuar. 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>


##### Subaba Bluetooth

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### Dataset

A seção Dataset é usada para habilitar e desabilitar os serviços relacionados aos controles de dataset. No momento, temos um servidor MySQL integrado e um servidor MQTT integrado.

##### Subaba MySQL

Você pode habilitar ou desabilitar o serviço MySQL nesta aba, bem como visualizar as informações do serviço MySQL, como endereço do servidor MySQL e credenciais de acesso ao servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### Subaba MQTT

Você pode habilitar ou desabilitar o serviço MQTT nesta aba, bem como visualizar as informações do serviço MQTT, como endereço do servidor MQTT e credenciais de acesso ao serviço.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### Geral

A seção Geral é usada para obter informações do dispositivo na aba Sobre, controlar a atualização do dispositivo na aba Atualização, ajustar a configuração da tela na aba Tela, alterar as configurações locais na aba Idioma e Hora e configurar o PIN de bloqueio de tela a partir da aba PIN por motivos de segurança.

##### Sobre

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### Atualizações

:::note
Há duas coisas que você precisará atualizar para o SenseCraft Edge OS.

Atualização do Sistema:

* Cuidar dos componentes de Backend do sistema

Atualização do SenseCraft Edge:

* Componentes de Backend e Frontend e interface de usuário relacionados à interface do aplicativo SenseCraft.

Existem duas maneiras de atualizá‑los.

Atualização Local:

* Usando um dispositivo de armazenamento USB que contenha os arquivos de atualização.

Atualização pela Rede:

* Atualização pela rede

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### Verificar e Atualizar

Você pode clicar no botão `Update Now` separadamente para atualizar o Sistema ou o aplicativo SenseCraft Edge.

Se o seu sistema estiver atualizado, você será saudado com a notificação pop-up `The System Version is latest version`.

Para Atualização do Sistema:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

Para Atualização do SenseCraft Edge:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

Você pode clicar no botão `Check Update` para verificar a atualização mais recente disponível e confirmar para atualizar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### Atualização Local

<!-- STEP 1: Please download the update files and save it to an USB storage device -->

ETAPA 1: Clique no botão `Local Update`

Você deverá ver a seguinte janela pop-up.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

ETAPA 2: Insira o dispositivo de armazenamento USB com os arquivos de atualização no reTerminal DM conforme indicado na imagem acima.

ETAPA 3: Na janela pop-up clique em `next`, por favor seja paciente, pois após clicar em `next` levará algum tempo para carregar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning

**Erro de USB**

Se houver algum erro com o USB, você verá `No USB flash drive detected`, 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

Para tornar a atualização do sistema muito mais fácil, certifique-se de que você tem um bom dispositivo de armazenamento USB formatado em FAT32 ou EXT4, e que o tamanho do armazenamento USB seja menor ou igual a 64Gb, então 
:::

ETAPA 4: Clique em Next e aguarde o processo de atualização

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### Tela

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### Idioma e Hora

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PIN

Por padrão o PIN não está definido, e este PIN define um bloqueio por código de acesso para a [Aba do editor Node-RED](#aba-do-editor-node-red) e para a [Aba de Configurações do Sistema](#aba-de-configurações-do-sistema)

##### Configurar Código PIN:

Etapas para configurar os PINs:

ETAPA 1: Clique e alterne o botão Set PIN para entrar no processo de configuração do PIN

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

ETAPA 2: Digite o código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

ETAPA 3: Repita o código PIN de 8 dígitos para confirmar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>


##### Redefinir o Código PIN:

:::note
Esta etapa só é válida quando você já tiver um código PIN configurado 
:::

ETAPA 1:  Clique no botão RESET

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

ETAPA 2: Digite o código PIN atual para confirmar o processo de redefinição

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

ETAPA 3: Digite o novo código PIN de 8 dígitos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

ETAPA 4: Repita o novo código PIN de 8 dígitos para confirmar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### Desbloquear

Depois de configurar o Código PIN, quando você acessar a [Aba do editor Node-RED](#aba-do-editor-node-red) ou a [Aba de Configurações do Sistema](#aba-de-configurações-do-sistema), será necessário inserir o código PIN para desbloquear

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>


#### Centro

A seção Centro é usada para controlar Aplicativos instalados, onde a aba do centro atua como uma loja de aplicativos em que você pode instalar, abrir, desativar e também hospedar seus próprios aplicativos, funcionando de forma semelhante à Google Play Store ou à Apple App Store. Atualmente a função deste centro de aplicativos é limitada; novos recursos serão adicionados, portanto fique atento e tenha paciência. Também gostaríamos de contar com suas contribuições para o centro de aplicativos assim que a função de contribuição da comunidade for implementada. A aba ChirpStack é exibida pois é a visualização de configuração do aplicativo, em que o aplicativo ChirpStack é instalado a partir do App Center.

##### Centro 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
atualmente a função deste centro de aplicativos é limitada; novos recursos serão adicionados, portanto fique atento e tenha paciência. Também gostaríamos de contar com suas contribuições para o centro de aplicativos assim que a função de contribuição da comunidade for implementada.
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

<!-- </TabItem>
<TabItem value="DALL·E" label="DALL·E Code">

</TabItem>
</Tabs>

Code END -->

## Recursos Adicionais

*  [reTerminal DM Datasheet](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [reTerminal DM User Manual](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

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