---
description: Descreve como conectar o Watcher ao Home Assistant localmente.
title: Integrar Watcher ao Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2024-08-15'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/integrate_watcher_to_ha/
---

# Integrar Watcher ao Home Assistant

:::caution Nota
Este tutorial não se aplica à versão de firmware Xiaozhi.  
Para o firmware Xiaozhi, visite o [Guia Xiaozhi Watcher](https://wiki.seeedstudio.com/pt-br/ha_dify_watcher_llms/) para obter instruções detalhadas.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

A integração da inteligência artificial (IA) revolucionou o mundo da tecnologia de casas inteligentes, e o Watcher, um dispositivo avançado alimentado por IA, surgiu como um divisor de águas. Ao integrar o Watcher perfeitamente ao Home Assistant, uma popular plataforma de automação residencial de código aberto, os usuários podem desbloquear um novo nível de conveniência, segurança e eficiência em suas casas inteligentes.

Neste wiki abrangente, vamos guiá‑lo pelo processo de integração do Watcher ao Home Assistant, permitindo que você aproveite todo o potencial da IA na configuração da sua casa inteligente. Seja você um usuário experiente de Home Assistant ou iniciante em automação residencial, essa integração abre um leque de possibilidades empolgantes, permitindo que sua casa se torne mais inteligente, mais responsiva e adaptada às suas necessidades exclusivas.

Abaixo está a estrutura principal de conteúdo deste artigo.

1. [Instalar o plugin HACS](#Instalar-o-plugin-HACS): Instale o Home Assistant Community Store (HACS) para permitir a instalação do plugin SenseCraft da Seeed Studio dentro do Home Assistant.
2. [Instalar o plugin SenseCraft](#Instalar-o-plugin-SenseCraft): Instale o plugin SenseCraft da Seeed Studio, que permite a implantação rápida dos produtos da Seeed Studio no Home Assistant.
3. [Integrar o SenseCAP Watcher ao Home Assistant](#Integrar-o-SenseCAP-Watcher-ao-Home-Assistant): Integre o SenseCAP Watcher ao Home Assistant e configure um painel visual para configuração.

## Primeiros Passos

Antes de começar o conteúdo deste tutorial, você pode precisar ter o seguinte hardware preparado.

### Materiais Necessários

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
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

O Home Assistant Green é a forma mais simples e com maior foco em privacidade de automatizar sua casa. Ele oferece uma configuração sem esforço e permite que você controle todos os dispositivos inteligentes com apenas um sistema, em que todos os dados são armazenados localmente por padrão. Esta placa se beneficia do próspero ecossistema do Home Assistant e será aprimorada todos os meses graças ao código aberto.

Recomendamos usar o Home Assistant Green como o host do Home Assistant para este tutorial, ou você pode usar qualquer host de Home Assistant com Supervisor.

## Instalar o plugin HACS

### Etapa 1. Ativar o Modo Avançado no Home Assistant

Para liberar todo o potencial do Home Assistant e obter acesso a recursos avançados, você pode ativar o "Advanced Mode" na interface do usuário.

Acesse sua [interface web do Home Assistant](http://homeassistant.local:8123). Clique no ícone do seu perfil no canto inferior esquerdo da barra lateral do Home Assistant. Na página de perfil, role para baixo até encontrar a alternância **Advanced Mode**. Coloque a alternância na posição ligada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Instalar Terminal & SSH

Clique em **Settings** na barra lateral para acessar o menu de configurações. Clique em **Add-ons** para acessar a loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Use a barra de pesquisa ou navegue pelos add-ons disponíveis para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Depois de localizar **Terminal & SSH**, clique nele para ver os detalhes. Na página do add-on, você verá uma visão geral, documentação e opções de configuração. Para instalar o add-on, clique no botão **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Instalar o HACS

Encontre o **Terminal & SSH** recém‑baixado na barra lateral. No terminal, navegue até o diretório config, que é a raiz da sua configuração do Home Assistant:

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

Clique em **ADD INTEGRATION** para adicionar uma nova integração à sua instalação do Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

Na barra de pesquisa, digite **HACS** para procurar a integração Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Se o HACS for encontrado, ele deverá aparecer na lista de integrações disponíveis. Clique nele para iniciar o processo de instalação.

Um contrato de licença ou termos de serviço pode aparecer. Leia atentamente o contrato e, se você concordar com os termos, marque todas as caixas para indicar seu aceite. Clique em **SUBMIT** para prosseguir com a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

Em seguida, será solicitado que você faça login com sua conta do GitHub. Isso é necessário porque o HACS se integra ao GitHub para gerenciar a instalação de integrações e plugins criados pela comunidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Siga as instruções para autorizar o Home Assistant a acessar sua conta do GitHub. Isso normalmente envolverá inserir um código de verificação fornecido pelo GitHub para confirmar sua identidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Depois que você autorizar o Home Assistant a usar sua conta do GitHub, o HACS concluirá a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Você pode precisar reiniciar o Home Assistant para que o HACS seja totalmente integrado ao seu sistema.

## Instalar o plugin SenseCraft

### Etapa 4. Instalação do plugin SenseCraft via HACS

Procure o HACS na barra lateral e clique nele para abrir a interface do HACS. No canto inferior direito, você encontrará um botão de menu (três pontos ou um sinal de mais, dependendo da versão do HACS). Clique em **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Uma caixa de diálogo aparecerá pedindo que você insira a URL do repositório. Aqui, você deve inserir a URL do repositório personalizado para a integração SenseCraft. Após inserir a URL, selecione a categoria (para a integração SenseCraft, você deve selecionar **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Add**. O repositório agora está adicionado ao seu HACS, e você deve conseguir encontrar a integração SenseCraft na lista em **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Localize a integração SenseCraft e clique em "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

Até este ponto, concluímos com sucesso a instalação do plugin SenseCraft.

## Integrar SenseCAP Watcher ao Home Assistant

### Etapa 5. Adicionando o Watcher a partir do SenseCraft

Na página **Settings**, escolha **Devices & Services**.

Em seguida, clique no botão **ADD INTEGRATION** no canto inferior direito e pesquise por **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Clique em SenseCraft e selecione Ação como **Add device using host/id (局域网集成)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
Atualmente, **Add devices using SenseCraft Account（账号集成）** não está disponível.
:::

Em seguida, selecione **Watcher** nas opções de dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

Na próxima página, insira o EUI do dispositivo Watcher; você pode encontrar o EUI do Watcher em [SenseCraft APP's Watcher's Setting](https://wiki.seeedstudio.com/pt-br/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
Certifique-se de que o EUI esteja todo em maiúsculas!
:::

Após **SUBMIT**, o componente Watcher do Home Assistant será adicionado automaticamente para ser exibido no Dashboard, que agora deverá estar em um estado sem dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 6. Definir a tarefa e configurar o Bloco de Mensagem HTTP

Para que os dados do Watcher cheguem ao Home Assistant, você precisa deixar o Watcher em um estado em que a tarefa esteja em execução e configurar o Bloco de Mensagem HTTP para enviar um fluxo de alarmes ao Home Assistant.

Por exemplo, agora estou definindo uma tarefa no Watcher para detectar se um gato está comendo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

Em **Detail Config**, encontre ‘If yes, then do the following’ e marque a caixa **HTTP Push Notification** abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

Em seguida, clique no botão **Go Setup** e configure as informações do Home Assistant ali para garantir que os dados possam chegar ao Home Assistant.

- **HTTP URL**: Preencha com o endereço IP completo do Home Assistant, número da porta 8887. por exemplo, `http://192.168.1.151:8887`.

- **HTTP Token**: deixe em branco.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

Após confirmar que tudo foi preenchido corretamente, clique em Update Now na parte inferior. então a tarefa será enviada ao Watcher.

Em seguida, quando o Watcher detectar o seu gato comendo, ele acionará um alarme e reportará os dados do sensor ao Home Assistant. com base nisso, você fica livre para configurar a automação da sua casa inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>Clique para ver o código de Dashboard de exemplo</summary>

```javascript
views:
  - type: sections
    title: Home Assistant
    path: home
    icon: mdi:home-assistant
    sections:
      - cards:
          - type: tile
            entity: sensor.air_humidity
            name: SenseCAP Watcher Air Humidity
            color: blue
            show_entity_picture: true
          - type: tile
            entity: sensor.co2
            name: SenseCAP Watcher CO2
            color: deep-orange
          - type: tile
            entity: sensor.temperature
            name: SenseCAP Watcher Air Temperature
            color: purple
            show_entity_picture: true
          - type: tile
            entity: sensor.alarm
            name: SenseCAP Watcher Alarm Message
            color: red
            show_entity_picture: true
          - type: picture
            image_entity: image.alarm_image
```

</details>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
