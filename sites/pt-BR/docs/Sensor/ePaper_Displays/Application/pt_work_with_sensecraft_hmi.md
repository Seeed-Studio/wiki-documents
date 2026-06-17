---
description: Use o SenseCraft HMI para projetar e implantar dashboards sem código para dispositivos de display ePaper compatíveis da Seeed.
title: Trabalhar com SenseCraft HMI
keywords:
  - display ePaper
  - SenseCraft HMI
  - dashboard sem código
  - reTerminal
  - XIAO ePaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 06/15/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/EE04_with_hmi/
updatedAt: '2026-06-15'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) é a plataforma de design de interface sem código da Seeed Studio para dispositivos de display ePaper. Você pode projetar dashboards, galerias de imagens, calendários, páginas de RSS, páginas de conteúdo da web e outras telas de informação sempre ativas em um navegador e, em seguida, implantá-las em um dispositivo compatível via Wi-Fi.

Este Wiki é um guia de aplicação de Display ePaper. Ele explica o caminho mais curto de um dispositivo ePaper da Seeed até uma página SenseCraft HMI funcional e usa uma placa de display ePaper mais uma tela ePaper como exemplo de configuração de hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Abrir SenseCraft HMI</font></span></strong>
    </a>
</div><br />

## Quando usar este guia

Use este guia quando quiser usar o SenseCraft HMI com um produto ePaper compatível da Seeed e concluir rapidamente o seguinte fluxo de trabalho:

1. Confirmar ou gravar o firmware SenseCraft HMI.
2. Conectar o dispositivo ao Wi-Fi.
3. Adicionar o dispositivo ao seu workspace do SenseCraft HMI.
4. Implantar sua primeira página no display ePaper.

Para o manual completo da plataforma, incluindo configurações de conta, detalhes do editor, modelos, widgets de dados e notas de versão, consulte a [documentação oficial do SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/overview/).

## Antes de começar

Prepare os seguintes itens antes de usar o SenseCraft HMI:

- Um dispositivo de display ePaper compatível da Seeed.
- Uma conta SenseCraft. Você pode criar uma a partir da página de login do [SenseCraft HMI](https://sensecraft.seeed.cc/hmi).
- Uma rede Wi-Fi de 2,4 GHz.
- Um cabo de dados USB-C se o seu dispositivo precisar de gravação de firmware.
- Um computador executando um navegador que suporte gravação via porta serial pela ferramenta web do SenseCraft HMI.

:::tip
Produtos ePaper diferentes usam compilações de firmware HMI diferentes. Sempre selecione o firmware que corresponde exatamente ao seu dispositivo e ao tamanho da tela.
:::

## Documentação oficial do SenseCraft HMI

O SenseCraft HMI tem um site de documentação dedicado. Use este Wiki para o fluxo de início rápido do Display ePaper e use a documentação oficial para instruções completas da plataforma.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Tópico</th>
      <th>Use isto quando você precisar</th>
      <th>Link</th>
    </tr>
    <tr>
      <td>Visão geral</td>
      <td>Entender o que é o SenseCraft HMI e o que ele pode fazer.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir visão geral</a></td>
    </tr>
    <tr>
      <td>Hardware compatível</td>
      <td>Verificar a lista atual de compatibilidade de dispositivos e telas.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/" target="_blank" rel="noopener noreferrer">Abrir hardware compatível</a></td>
    </tr>
    <tr>
      <td>Primeiros passos</td>
      <td>Seguir o fluxo oficial de conta, firmware, conexão e implantação.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/" target="_blank" rel="noopener noreferrer">Abrir primeiros passos</a></td>
    </tr>
    <tr>
      <td>Workspace e Canvas</td>
      <td>Aprender o layout do editor, widgets, fontes de dados e fluxo de criação de páginas.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Abrir guia do workspace</a></td>
    </tr>
    <tr>
      <td>Geração por IA</td>
      <td>Gerar imagens ou layouts de página com prompts de texto.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Abrir geração por IA</a></td>
    </tr>
    <tr>
      <td>Notas de versão</td>
      <td>Verificar as atualizações mais recentes da plataforma e do firmware.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/release_note/" target="_blank" rel="noopener noreferrer">Abrir notas de versão</a></td>
    </tr>
  </table>
</div>

## Exemplo de configuração de hardware

As etapas abaixo usam a **XIAO ePaper Display Board (ESP32-S3) - EE04** com o **display ePaper Spectra 6 de 7,3"** como exemplo. Outros dispositivos ePaper compatíveis da Seeed seguem o mesmo fluxo de plataforma, mas a compilação de firmware, o tamanho da tela e a montagem de hardware podem ser diferentes.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board (ESP32-S3) - EE04</th>
      <th>Display ePaper Spectra 6 de 7,3"</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
Este exemplo não é uma lista de compatibilidade. Para a matriz atual de hardware e firmware compatíveis, consulte sempre a [página de hardware compatível do SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/).
:::

## Etapa 1: confirmar ou gravar o firmware HMI

A primeira etapa é garantir que o seu dispositivo ePaper esteja executando o firmware SenseCraft HMI.

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

O reTerminal E Series é projetado para funcionar com o SenseCraft HMI pronto para uso. Ligue o dispositivo e continue para a [Etapa 2: Conectar o dispositivo ao Wi-Fi](#etapa-2-conectar-o-dispositivo-ao-wi-fi).

Se você tiver gravado anteriormente outro firmware, abra a [página de dispositivo do SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device), escolha o modelo do seu dispositivo e siga as instruções de firmware na tela.

:::tip
Use **Full Flash** apenas quando quiser limpar as informações de Wi-Fi armazenadas, dados de pareamento e conteúdo existente do dispositivo.
:::

</TabItem>
<TabItem value="display-board" label="Placa de display ePaper + tela">

Para uma placa de display mais uma tela ePaper separada, grave o firmware HMI que corresponde à sua placa e ao seu painel.

**Etapa 1.** Faça login no [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) e, em seguida, abra **Tools** no menu superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/256.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 2.** Selecione a entrada de firmware que corresponde ao seu display. Neste exemplo, selecione a entrada **7.3" Full-Color Display 800 x 480**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 3.** Selecione a versão de firmware mais recente disponível para o seu hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 4.** Conecte a placa ao seu computador com um cabo de dados USB-C e, em seguida, clique em **Flash**.

Após clicar em **Flash**, o navegador exibirá uma janela de seleção de porta serial. Escolha a porta que pertence ao seu dispositivo.

:::tip
Se nenhuma porta aparecer, pressione o botão **RESET** na placa e tente novamente. Confirme também se o seu cabo USB-C suporta transferência de dados.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 5.** Aguarde o display ePaper atualizar e mostrar o código QR de configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Etapa 2: conectar o dispositivo ao Wi-Fi

Depois que o dispositivo estiver executando o firmware HMI, conecte-o à sua rede Wi-Fi local.

**Etapa 1.** Conecte seu telefone ou computador ao ponto de acesso Wi-Fi mostrado na tela ePaper. Este ponto de acesso temporário não requer senha.

O nome do ponto de acesso depende do tipo de dispositivo. Para uma placa de display ePaper com uma tela separada, o nome pode aparecer como `ePaper DIY Kit-xxxx`. Para um dispositivo reTerminal E Series, o nome pode aparecer como `reTerminal E100x-xxxx`. Em ambos os casos, `xxxx` geralmente representa os últimos quatro caracteres do endereço MAC.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de display ePaper + tela</th>
      <th>reTerminal E Series</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:360, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:360, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>Exemplo de nome de AP: <code>ePaper DIY Kit-xxxx</code></td>
      <td>Exemplo de nome de AP: <code>reTerminal E100x-xxxx</code></td>
    </tr>
  </table>
</div>

**Etapa 2.** Escaneie o código QR na tela ePaper. Se a página de configuração não abrir automaticamente, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Etapa 3.** Selecione sua rede Wi-Fi local, insira a senha e clique em **Connect**.

:::tip
Use uma rede Wi-Fi de 2,4 GHz. Muitos dispositivos baseados em ESP32-S3 não se conectam a redes Wi-Fi de 5 GHz.
:::

**Etapa 4.** Aguarde até que o dispositivo entre na rede e exiba um código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Etapa 3: Adicionar o dispositivo ao SenseCraft HMI

Após a configuração do Wi-Fi, adicione o dispositivo ao seu workspace do SenseCraft HMI.

**Etapa 1.** Abra a página **Device** e clique em **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.png" style={{width:700, height:'auto'}}/></div>

**Etapa 2.** Insira um nome para o dispositivo e o código de pareamento exibido na tela de ePaper e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.png" style={{width:700, height:'auto'}}/></div>

**Etapa 3.** Confirme que o dispositivo aparece no seu painel.

## Etapa 4: Fazer o deploy da sua primeira página

Depois que o dispositivo estiver pareado, você poderá fazer o deploy de conteúdo do SenseCraft HMI para a tela de ePaper.

A maneira mais rápida de começar é usar um template existente ou uma das ferramentas de criação integradas. Para o fluxo detalhado do editor, siga o [guia oficial de introdução](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/).

<div class="table-center">
  <table align="center">
    <tr>
      <th>Recurso</th>
      <th>Para que serve</th>
      <th>Guia oficial</th>
    </tr>
    <tr>
      <td>Canvas</td>
      <td>Crie uma página a partir de texto, imagens, widgets, formas e fontes de dados.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">Abrir guia</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>Crie imagens ou layouts a partir de prompts de texto.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">Abrir guia</a></td>
    </tr>
    <tr>
      <td>Gallery</td>
      <td>Exiba imagens enviadas ou conteúdo em estilo de apresentação de slides.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir docs</a></td>
    </tr>
    <tr>
      <td>RSS</td>
      <td>Mostre manchetes ou conteúdo de artigos de um feed RSS.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir docs</a></td>
    </tr>
    <tr>
      <td>Web Content</td>
      <td>Renderize uma página da web ou um painel de informações baseado na web na tela de ePaper.</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">Abrir docs</a></td>
    </tr>
  </table>
</div>

O exemplo abaixo mostra uma página do SenseCraft HMI feita o deploy em um display de ePaper de 7,3".

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="SenseCraft HMI page on a 7.3 inch ePaper display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado de exemplo em um display de ePaper de 7,3"</em></p>
</div>

## Solução de problemas

### P1: Por que meu computador não detecta o dispositivo durante o flashing?

Isso geralmente significa que o navegador não consegue acessar a porta serial, o cabo só suporta carregamento ou a placa não entrou no estado USB correto.

- Use um cabo USB-C que suporte transferência de dados.
- Conecte o dispositivo diretamente ao computador em vez de usar um hub USB.
- Pressione o botão **RESET** e abra novamente a janela de seleção de porta.
- Tente usar um navegador baseado em Chromium se o seu navegador atual não suportar flashing serial pela web.

### P2: Por que o dispositivo não consegue se conectar ao Wi-Fi?

A causa mais comum é o uso de uma banda Wi-Fi não suportada ou a inserção de uma senha incorreta.

- Use uma rede Wi-Fi de 2,4 GHz.
- Digite novamente a senha do Wi-Fi com atenção.
- Aproxime o dispositivo do roteador durante a configuração.
- Se o dispositivo já tiver sido configurado anteriormente, use **Full Flash** apenas quando quiser limpar as configurações de rede salvas e começar novamente.

### P3: Por que a tela não mostra o código QR de configuração esperado após o flashing?

O firmware pode não corresponder à tela conectada ou a tela pode não estar conectada corretamente.

- Verifique novamente o modelo do dispositivo, o tamanho da tela e a entrada de firmware na página SenseCraft HMI Tools.
- Desligue a placa antes de reconectar o cabo flat do ePaper.
- Confirme se a direção do cabo flat e o tipo de conector correspondem ao seu hardware.
- Faça o flashing novamente com o firmware correspondente e aguarde a conclusão da atualização do ePaper.

### P4: Por que a página feita o deploy parece diferente da pré-visualização do editor?

Painéis de ePaper diferentes têm resolução, capacidade de cor, comportamento de escala de cinza e características de atualização diferentes.

- Crie a página com a mesma resolução da tela de destino.
- Evite textos muito pequenos se a resolução da tela for baixa.
- Use cores de alto contraste para telas monocromáticas ou em escala de cinza.
- Verifique a documentação oficial para detalhes sobre o editor e o deploy.

## Recursos

- [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi)
- [Documentação oficial do SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/overview/)
- [Hardware compatível com SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)
- [Introdução ao SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)
- [Notas de versão do SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/release_note/)

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
