---
description: Primeiros passos com o Ignition Edge
title: Primeiros passos com o Ignition Edge
keywords:
  - Edge
  - Edgebox RPI 200
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-ignition-edge
last_update:
  date: 10/13/2023
  author: Corey Thompson
createdAt: '2023-09-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-ignition-edge/
---
# Primeiros passos com Ignition Edge no Edgebox RPI 200

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" />
</p>

> Capturar, processar e visualizar dados críticos na borda remota da rede pode ser difícil e caro. Ignition Edge da Inductive Automation® é uma linha de soluções de software Ignition® limitadas e leves, projetadas especificamente para dispositivos usados em campo e dispositivos OEM na borda da rede. Com Ignition Edge, a computação de borda fica mais fácil e mais acessível do que nunca, para que você possa estender sua coleta de dados, visualização e gerenciamento de sistemas até a borda da sua rede.
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge oferece vários produtos que podem ser combinados em um dispositivo de borda para criar soluções poderosas na borda da rede:

- **Ignition Edge IIoT**: Publica dados de dispositivos de campo via MQTT.
- **Ignition Edge Panel**: Cria IHMs locais para dispositivos de campo.
- **Ignition Edge Compute**: Adiciona computação de borda verdadeira à sua rede.
- **Ignition Edge Sync Services**: Sincroniza dados a partir da borda da rede.
- **Ignition Edge EAM**: Combina com outros produtos Edge para gerenciamento centralizado.

Ao incorporar o Ignition Edge em dispositivos de campo e OEM na borda da rede, os superpoderes do Ignition podem funcionar até mesmo nos seus dispositivos mais remotos. O Edgebox RPI 200 é equipado com confiabilidade industrial e conectividade híbrida, como E/S digitais, RS485, RS232 e poderosas capacidades de comunicação sem fio como WiFi, BLE, \*4G e \*LoRa®, o que o torna uma excelente opção para hospedar combinações dos aplicativos poderosos da coleção Ignition Edge.

> Os módulos \*4G e LoRa® não estão incluídos por padrão; adquira os módulos correspondentes de acordo com a necessidade.

## Pré-requisitos de hardware

- PC / Mac com capacidade de terminal SSH
- PC / Mac com espaço disponível em disco rígido para instalar os aplicativos Designer do Ignition.
- Fonte de alimentação CC de 12–24 V
- Cabo Ethernet
- Edgebox RPI 200 x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*Este guia pressupõe que seu Edgebox esteja executando a instalação de fábrica do SenseCraft Edge OS com acesso a terminal SSH a partir de outro dispositivo cliente.*
:::

## Instalando o Ignition Edge

Instalar o Ignition Edge no seu dispositivo é simples.

:::tip
O SenseCraft Edge OS padrão é uma instalação de 32 bits; certifique-se de baixar o instalador correto.
:::

1. Visite a [página de download do Ignition](https://inductiveautomation.com/downloads/)
2. Baixe a versão do aplicativo que você deseja usar – você será solicitado a inserir suas informações antes de poder baixar o pacote.
3. Copie o pacote compactado para o seu dispositivo de borda, no local onde deseja que ele seja instalado (neste exemplo foi escolhido um local em /opt/)
4. Extraia o pacote no local atual
5. Exclua o pacote original restante
6. Modifique as permissões para executar o script de inicialização do Ignition
7. Inicie o script de inicialização do Igntion

Um script de conveniência foi escrito para automatizar essas etapas. Para usá-lo, você simplesmente precisa obter o script de download/instalação do Ignition Edge. Depois de baixar o script, marque-o como executável e execute-o. Talvez você precise de credenciais de superusuário para criar os diretórios necessários. Vá em frente e pegue um café, pois levará alguns minutos para instalar.

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### Desinstalação

Se você desejar desinstalar o pacote (conforme instalado pelo script de instalação), basta baixar e executar o script de desinstalação. A Inductive Automation não sugere um local padrão para a aplicação, portanto *isso só funcionará para esta instalação personalizada*.

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## Iniciando o Ignition Edge Gateway pela primeira vez

Quando a instalação estiver concluída, você precisará iniciar o serviço. Você pode [configurar o gateway para iniciar na inicialização](#Iniciar-Ignition-Edge-Gateway-na-inicialização) e reinicializar o dispositivo ou optar por iniciar o serviço manualmente.

 ```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Você pode verificar facilmente se o serviço está em execução se conseguir carregar a página inicial do Ignition Edge Gateway.
:::

Para carregar a página inicial do gateway, abra um navegador da web no próprio Edgebox em `localhost:8088` OU a partir de outro dispositivo na rede em `{edgeboxhostname}:8088` OU de qualquer lugar da rede usando o endereço IP do próprio Edgebox em `{edgeboxip}:8088`

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### Iniciar Ignition Edge Gateway na inicialização

:::note
Recomenda-se iniciar o serviço do gateway automaticamente na inicialização do dispositivo. Há várias maneiras de fazer isso, e cabe ao usuário decidir como fazê-lo.
:::

Uma maneira de iniciar o serviço na inicialização é adicionar o comando de inicialização ao seu `.bashrc`. Para fazer isso, simplesmente abra seu `.bashrc` em um editor de texto de sua preferência.

```bash
nano ~/.bashrc
```

Anexe o comando de inicialização ao arquivo

```bash
/opt/ignitionedge/ignition.sh start
```

<p style={{textAlign: 'center'}}>
  <img alt="Launch On Boot Setup" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>

E não se esqueça de salvar o arquivo!
(`ctrl + x` no exemplo acima usando nano)

:::warning
Esse método não inicia o gateway ao salvar, portanto reinicie o Edgebox para garantir que a alteração funcione como esperado.
:::

## Configurando o Ignition Edge

Configurar o gateway é um processo simples. Prossiga aceitando o EULA e, em seguida, crie um usuário/senha padrão para o Ignition. Lembre-se dessas informações, pois o usuário será criado com credenciais de administrador e será usado para a configuração do sistema ao longo desta série.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Embora o Ignition Edge seja configurado por padrão para se comunicar com um sistema SCADA mestre, não é obrigatório usar um servidor SCADA. Ignition Edge é um produto completamente autônomo, configurado para se integrar facilmente a uma rede SCADA no futuro, se desejado.
:::

Depois que você tiver um usuário, será perguntado se deseja alterar alguma das configurações de portas padrão para a instalação. Não há uma rede aqui com portas em conflito, então foi escolhida a opção de aceitar os padrões. Essas portas serão usadas para se comunicar com a instalação SCADA principal, portanto, se você estiver configurando para funcionar com uma instalação Ignition existente, certifique-se de que esta página corresponda aos valores esperados. Observe que estas são as portas principais usadas pelo aplicativo, mas se você optar por instalar módulos no futuro, provavelmente terá mais portas para configurar depois.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

Agora você está pronto para inicializar e iniciar o serviço! Isso leva alguns minutos para ser configurado e não requer nenhuma interação, então você pode simplesmente voltar mais tarde. Quando estiver concluído, haverá um redirecionamento para a página inicial do Designer e você estará livre para começar a trabalhar!

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
