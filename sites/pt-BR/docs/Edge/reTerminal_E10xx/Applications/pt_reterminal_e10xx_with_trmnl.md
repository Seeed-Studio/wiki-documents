---
description: Este artigo descreve como usar o ePaper Display reTerminal E Série com o TRMNL.
title: ePaper Display reTerminal E Série funciona com TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sku: 100073581
sidebar_position: 1
last_update:
  date: 09/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl/
---

:::caution
A versão 1.6.7 do TRMNL agora oferece suporte oficial ao reTerminal E1001. Devido a limitações da arquitetura de software, o suporte para o reTerminal E1002 com display e-ink colorido completo **ainda não** está disponível.
:::

# ePaper Display reTerminal E Série funciona com TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## O que é o [TRMNL](https://trmnl.app/)?

TRMNL é uma plataforma inovadora projetada para ajudar as pessoas a se manterem focadas e calmas em nosso mundo digital cada vez mais cheio de distrações. Fundado em 2023, o TRMNL rapidamente se tornou uma solução líder em gerenciamento de dashboards E Ink®, oferecendo uma abordagem única para exibir informações sem as notificações constantes e distrações das telas tradicionais.

Em sua essência, o TRMNL é construído sobre a filosofia de que a tecnologia deve melhorar nossas vidas sem exigir atenção constante. A plataforma fornece uma maneira elegante de visualizar informações importantes de relance por meio de displays E Ink®, criando uma experiência tecnológica mais focada e menos intrusiva.

### Por que usar o TRMNL?

A integração com o TRMNL trará diversos benefícios atraentes:

- **Criação Simplificada de Dashboards**: A crescente biblioteca de apps e integrações do TRMNL facilita a criação de displays de informação personalizados sem programação complexa
- **Baixo Consumo de Energia**: A combinação do software eficiente do TRMNL com os requisitos mínimos de energia do nosso display E Ink® cria uma solução extremamente eficiente em termos energéticos
- **Informação sem Distrações**: Obtenha as informações de que você precisa sem as notificações constantes e o cansaço visual associados às telas tradicionais
- **Atualizações Regulares**: O desenvolvimento ativo do TRMNL significa que novos recursos e integrações são adicionados semanalmente, expandindo continuamente as possibilidades para o seu display
- **Amigável para Desenvolvedores**: Com a API aberta do TRMNL e ferramentas para desenvolvedores, você pode criar plugins e integrações personalizados para as suas necessidades específicas

Ao combinar a poderosa plataforma do TRMNL com nosso display E Ink® de alta qualidade reTerminal E Série ePaper Display, estamos oferecendo aos usuários uma solução elegante para criar dashboards de informação personalizados, de baixo consumo de energia, que respeitam tanto sua atenção quanto seu tempo.

## Primeiros Passos com o TRMNL

### Configuração de Conta TRMNL e Acesso ao TRMNL

Antes de conectar seu kit ao TRMNL, você precisará:

1. **Comprar o TRMNL Access**

   - Compre o acesso ao app web do TRMNL + recursos de dispositivo em: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Isso fornece as credenciais necessárias para usar a plataforma do TRMNL
   - Acesse [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para ativar um dispositivo virtual (pode levar até 10 minutos após a compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Criar uma Conta TRMNL**

   - Visite o [site do TRMNL](https://usetrmnl.com)
   - Clique em "Sign Up" para criar uma nova conta
   - Siga o processo de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Suas credenciais TRMNL são informações confidenciais. Nunca as compartilhe publicamente nem as envie para sistemas de controle de versão.
:::

Depois de ter seus materiais e ter adquirido o acesso ao TRMNL, você pode prosseguir com a conexão do seu dispositivo à plataforma TRMNL. Se você encontrar algum problema ou tiver dúvidas, pode entrar em contato diretamente com a equipe TRMNL em team@usetrmnl.com.

### Materiais Necessários

Começando imediatamente. Prepare qualquer um dos seguintes reTerminal para concluir o conteúdo do tutorial posteriormente.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Gravação de Firmware

Se você ainda estiver usando o firmware de fábrica do reTerminal E Série, será necessário gravar o firmware TRMNL usando o método a seguir antes de poder conectar o dispositivo ao TRMNL.

#### Método 1: Gravar via TRMNL Web Flasher (Mais fácil)

:::tip
Use o **FW 1.6.7** ou firmware mais recente para compatibilidade com a Seeed.
:::

1. **Acesse o TRMNL Web Flasher**

   - Visite [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - Esta ferramenta permite gravar seu dispositivo diretamente a partir do navegador.
   - Siga as instruções na tela para concluir o processo de gravação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### Método 2: Gravar via plataforma Sensecraft HMI

1. Visite a [plataforma Sensecraft HMI](https://sensecraft.seeed.cc/hmi/device)

2. Selecione seu dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. Selecione o firmware TRMNL. Se quiser gravar o firmware HMI, você também pode selecioná-lo. Depois disso, clique em **Full Flash** e **Flash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. Conecte seu dispositivo ao computador e selecione a porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. Se tudo correr bem, a tela será atualizada e exibirá o logo TRMNL e o endereço MAC. Agora você já pode utilizá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### Método 3: Compilar e Gravar a partir do Código‑fonte (Para Usuários Avançados/Desenvolvedores)

1. **Clonar o Repositório de Firmware**

- Visite o [repositório oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) e faça o clone:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Às vezes atualizamos nosso código e precisamos enviar PR para o TRMNL e revisá-lo antes que seja exibido; se você quiser ser o primeiro a usar a versão mais recente do firmware, também pode usar o repositório TRMNL no projeto da Seeed.

- Visite o [repositório da Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) e faça o clone:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Instalar o PlatformIO**

   - Instale o [PlatformIO](https://platformio.org/) como uma extensão do VSCode ou via linha de comando.

3. **Abrir o Projeto**

   - Abra a pasta `firmware` clonada no VSCode.

4. **Selecionar o Ambiente Correto**

- Em `platformio.ini`,

  - Se você estiver usando o reTerminal E1001, selecione o ambiente `seeed_reTerminal_E1001`.

  <!-- - If you are using reTerminal E1002, select the `seeed_reTerminal_E1002` environment. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **Conecte Seu Dispositivo**

   - Conecte seu dispositivo reTerminal E Série ePaper Display.

6. **Compilar e Enviar**

   - No PlatformIO, clique no botão "Upload" ou execute:

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - O firmware será compilado e enviado para o seu dispositivo.

## Configurar Wi‑Fi e Enviar Playlists para o TRMNL

Para usar seu reTerminal E Série ePaper Display com o TRMNL e enviar playlists, primeiro você precisa conectar o dispositivo à sua rede Wi‑Fi. Esse processo é chamado de "modo de pareamento WiFi" e é feito por meio de um portal cativo simples. Siga as etapas abaixo:

> 💡 **Problemas com o Wi‑Fi?** Se você tiver problemas ao conectar seu dispositivo ao Wi‑Fi, consulte o [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para soluções de problemas comuns de rede e compatibilidade de roteadores.

### Ligar e Entrar no Modo de Provisionamento

- Após gravar o firmware TRMNL e ligar seu dispositivo, ele entrará automaticamente no modo de provisionamento se ainda não estiver conectado ao Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### Conectar à rede Wi‑Fi TRMNL

- No seu **celular** ou **computador**, abra a lista de redes Wi‑Fi disponíveis.
- Procure por uma rede chamada **TRMNL** e conecte‑se a ela. (Nenhuma senha é exigida por padrão.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir o Portal Cativo

- Depois de conectado, abra um navegador web (como Chrome ou Edge).
- O dispositivo deve redirecionar você automaticamente para a página de configuração do TRMNL. Se isso não acontecer, acesse manualmente [http://4.3.2.1](http://4.3.2.1) no seu navegador.

### Insira as credenciais do seu Wi‑Fi

- Na página de configuração, você verá uma lista de redes Wi‑Fi disponíveis.
- **Selecione sua rede Wi‑Fi de 2,4GHz** (o reTerminal E Series ePaper Display não é compatível com redes de 5GHz).
- Insira a senha do seu Wi‑Fi.
- Clique em **Save** ou **Connect**.

> ⚠️ **Importante:** Certifique‑se de usar uma rede Wi‑Fi de 2,4GHz. Redes de 5GHz não são suportadas pelo reTerminal E Series.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### Dispositivo se conecta à sua rede

- O dispositivo tentará se conectar ao seu Wi‑Fi.
- Quando a conexão for bem‑sucedida, ele se desconectará do Wi‑Fi TRMNL e entrará na sua rede doméstica.
- A janela mostrará o endereço MAC do dispositivo. **Anote o endereço MAC**, pois você irá precisar dele em uma etapa posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Observação:** O endereço MAC fica visível no portal cativo por apenas 1–2 segundos. Se você perder esse momento, também pode:
>
> - Recuperá‑lo nos logs de build/upload do VS Code > PlatformIO.
> - Usar o método [usetrmnl.com/flash](https://usetrmnl.com/flash) e verificar o console de desenvolvedor do Chrome/Edge/Firefox para o endereço MAC durante o processo de gravação.
> - Encontrá‑lo na lista de dispositivos conectados do seu roteador ou app da rede Mesh.
>
> Para mais detalhes e capturas de tela, consulte o guia oficial: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Acessar a interface web TRMNL

Depois que o seu reTerminal E Series ePaper Display estiver conectado ao seu Wi‑Fi e você tiver anotado o endereço MAC (ID do Dispositivo), você poderá adicioná‑lo à sua conta TRMNL:

1. **Abra a interface web TRMNL**  
   - No seu computador ou dispositivo móvel, abra um navegador e acesse a [interface web TRMNL](https://trmnl.app).

2. **Vá para a página Devices**  
   - Na interface TRMNL, navegue até a seção **Devices**.

3. **Adicione um novo dispositivo**  
   - Clique no botão **Add new device**, que geralmente fica no canto superior direito ou no centro da página Devices.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Insira o Device ID**  
   - Na janela pop‑up, insira o Device ID que você recebeu ao comprar o acesso TRMNL (este não é o endereço MAC). Use o Device ID do e‑mail de confirmação da compra ou do painel TRMNL.
   - Clique em **Add new device** para concluir o processo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar o endereço MAC do reTerminal E Series ePaper Display**

   Para estabelecer uma conexão entre o reTerminal E Series ePaper Display e o TRMNL, precisamos vincular o endereço MAC correto do dispositivo dentro da página de configurações do TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Você pode obter o endereço MAC durante o processo de upload pelo PlatformIO (verifique os logs de upload) ou a partir do portal de provisionamento (ele será exibido após a configuração do Wi‑Fi).
   - Adicionar seu endereço MAC antecipadamente ajuda a garantir um processo de integração e gerenciamento do dispositivo mais suave.

   - Depois você pode definir um nome personalizado para o seu reTerminal E Series ePaper Display e ajustar outras configurações conforme necessário.

Seu reTerminal E Series ePaper Display agora está vinculado à sua conta TRMNL! Agora você pode enviar playlists, imagens ou outro conteúdo para o seu display diretamente a partir da interface TRMNL.

> 💡 **Dica:** Se você tiver vários reTerminal E Series, repita as etapas acima para cada dispositivo usando seus Device IDs exclusivos.

:::caution
Depois de adicionar seu dispositivo na interface web TRMNL, acesse a página de configurações do dispositivo e **desative** tanto **Firmware Early Release** quanto **OTA Updates Enabled**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Se essas opções permanecerem ativadas, seu dispositivo poderá baixar e instalar automaticamente atualizações de firmware do TRMNL quando estiver conectado à internet. Essas atualizações são destinadas ao hardware oficial TRMNL e **não são compatíveis com o reTerminal E Series**. A instalação de firmware incompatível pode fazer com que o seu dispositivo apresente mau funcionamento ou deixe de responder.

Mantenha sempre ambas as opções desativadas para garantir o funcionamento estável do seu reTerminal E Series.
:::

## Entendendo o recurso de Playlist do TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

O recurso de Playlist do TRMNL permite que você controle exatamente o que é exibido no seu reTerminal E Series ePaper Display e quando. A seguir está uma visão geral das principais seções e controles, conforme mostrado na captura de tela acima:

### Visão geral da Playlist

- **Título da Playlist**: Na parte superior, você vê o nome do seu dispositivo TRMNL (por exemplo, "MengDu's TRMNL").
- **Intervalo de tempo de exibição**: Você pode definir o intervalo de tempo em que a playlist ficará ativa (por exemplo, de 00:00 até 23:45).
- **Intervalo de atualização**: Escolha com que frequência o display será atualizado (por exemplo, a cada 5 minutos).
- **Add a Group / Add a Plugin**: Use esses botões para organizar sua playlist em grupos ou adicionar novos plugins de conteúdo (como clima, calendário ou texto personalizado).

### Itens da Playlist

Cada linha da playlist representa uma tela ou widget que será exibido no seu reTerminal E Series ePaper Display (apenas para referência):

1. **Weather**
   - Mostra as informações meteorológicas atuais para o local selecionado.
   - O rótulo verde "Displayed now" indica que essa tela está sendo exibida no momento no seu dispositivo.
2. **Days Left This Year**
   - Exibe uma contagem regressiva dos dias restantes no ano atual (por exemplo, "2025").
   - O rótulo (por exemplo, "9 days ago") mostra quando essa tela foi atualizada ou exibida pela última vez.
3. **Custom Text**
   - Permite exibir qualquer mensagem personalizada (por exemplo, "Hello World").
   - Também mostra quando foi atualizada pela última vez.

Para cada item, você possui vários controles:

- **Configurações (ícone de engrenagem)**: Configura as opções do plugin.
- **Excluir (ícone X)**: Remove o item da sua playlist.
- **Pré‑visualizar (ícone de olho)**: Visualiza como a tela será exibida.
- **Reordenar (ícone de barras)**: Arraste para alterar a ordem em que as telas são exibidas.

### Smart Playlist

- **Opção Smart Playlist**: Na parte inferior, você pode escolher se deseja pular automaticamente telas cujo conteúdo não mudou (por exemplo, "Never skip screens").

> 📖 Quer saber mais? Leia o [post do blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para dicas avançadas e mais detalhes.

Este sistema flexível de playlist permite que você personalize totalmente o que o seu reTerminal E Series exibirá, com que frequência ele será atualizado e em qual ordem. Você pode combinar diferentes plugins para criar um painel personalizado que atenda às suas necessidades.

## Explorando os plugins TRMNL

O sistema de plugins do TRMNL é o que torna o seu reTerminal E Series ePaper Display realmente poderoso e personalizável. Plugins são apps ou widgets modulares que você pode adicionar ao seu dispositivo para exibir uma grande variedade de informações e conteúdos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### O que são Plugins?

Plugins são blocos de conteúdo individuais que podem mostrar coisas como clima, eventos de calendário, preços de ações, feeds RSS, frases motivacionais, atividade no GitHub e muito mais. Você pode combinar plugins para criar um painel que atenda às suas necessidades.

### Connected Plugins

Na parte superior da página de Plugins, você verá todos os plugins que já conectou à sua conta TRMNL. Eles estão prontos para serem adicionados à sua playlist e exibidos no seu reTerminal E Series. Exemplos incluem:

- **Weather**: Mostra as condições meteorológicas atuais.
- **Days Left This Year**: Contagem regressiva até o fim do ano.
- **Stock Price**: Acompanha suas ações favoritas.
- **RSS Feed**: Exibe notícias ou atualizações de blogs.
- **Reddit, Hacker News**: Mostra posts em destaque.
- **Language Learning, Motivational Quote, Custom Text**: Personalize sua tela com ferramentas de aprendizado ou mensagens personalizadas.

### Plugin Marketplace

Abaixo dos seus plugins conectados, você encontrará o plugin marketplace. Nele você pode navegar, pesquisar e descobrir novos plugins para adicionar ao seu dispositivo. Os plugins são organizados por categorias e tags (como #productivity, #news, #ecommerce, etc.), facilitando encontrar o que você precisa.

- **Navegar e pesquisar**: Use a barra de pesquisa ou as tags para encontrar rapidamente plugins do seu interesse.
- **Adicionar plugins**: Clique em qualquer plugin para conectá‑lo à sua conta e começar a usá‑lo na sua playlist.

Desenvolvedores podem até criar e publicar seus próprios plugins para que outros utilizem, fazendo com que o ecossistema se expanda continuamente com novas possibilidades ([saiba mais sobre a criação de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Se você tiver qualquer dúvida sobre o uso do TRMNL ou quiser explorar recursos mais avançados, sinta‑se à vontade para ler a documentação oficial do TRMNL para mais informações: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimentos especiais

Agradecimentos especiais a toda a **equipe TRMNL** pelo forte apoio e ajuda inestimável neste projeto. Em particular, gostaríamos de agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d** e a todos os outros membros da equipe por sua dedicação e assistência ao longo de todo o processo de desenvolvimento e documentação.

A sua experiência e comprometimento tornaram esta integração possível e melhoraram muito a experiência do usuário para a comunidade do reTerminal E Series ePaper Display.

## Solução de problemas

### Como reconfigurar a rede?

Pressione e segure o Green Button por cinco segundos. O dispositivo retornará à interface TRMNL inicial e ativará o AP.

## Suporte Técnico e Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
