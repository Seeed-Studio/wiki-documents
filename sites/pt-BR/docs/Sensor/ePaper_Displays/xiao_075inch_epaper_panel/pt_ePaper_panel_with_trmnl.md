---
description: Este artigo descreve como usar o painel epaper para funcionar com o TRMNL.
title: Funciona com TRMNL
keywords:
  - display ePaper
  - TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /xiao_7_5_inch_epaper_panel_with_trmnl
sku: 114993635
sidebar_position: 3
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/xiao_7_5_inch_epaper_panel_with_trmnl/
---

# Painel ePaper XIAO 7,5" funciona com TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## O que é o [TRMNL](https://trmnl.app/)?

TRMNL é uma plataforma inovadora projetada para ajudar as pessoas a se manterem focadas e calmas em nosso mundo digital cada vez mais cheio de distrações. Fundado em 2023, o TRMNL rapidamente se tornou uma solução líder para gerenciamento de dashboards em E Ink®, oferecendo uma abordagem exclusiva para exibir informações sem as notificações constantes e distrações das telas tradicionais.

Em sua essência, o TRMNL é construído sobre a filosofia de que a tecnologia deve melhorar nossas vidas sem exigir atenção constante. A plataforma oferece uma maneira elegante de visualizar informações importantes de relance por meio de displays E Ink®, criando uma experiência tecnológica mais consciente e menos intrusiva.

### Por que integrar o TRMNL com o Painel ePaper XIAO 7,5"?

A integração do TRMNL com o nosso Painel ePaper XIAO 7,5" traz vários benefícios convincentes:

- **Criação de dashboard simplificada**: A biblioteca em crescimento de apps e integrações do TRMNL torna fácil criar telas de informação personalizadas sem programação complexa
- **Baixo consumo de energia**: A combinação do software eficiente do TRMNL com os requisitos mínimos de energia do nosso display E Ink® cria uma solução extremamente eficiente em termos de energia
- **Informação sem distrações**: Obtenha as informações de que você precisa sem as notificações constantes e o cansaço visual associados às telas tradicionais
- **Atualizações regulares**: O desenvolvimento ativo do TRMNL significa que novos recursos e integrações são adicionados semanalmente, expandindo continuamente as possibilidades para o seu display
- **Amigável para desenvolvedores**: Com a API aberta do TRMNL e ferramentas para desenvolvedores, você pode criar plugins e integrações personalizados para suas necessidades específicas

Ao combinar a poderosa plataforma do TRMNL com nosso display E Ink® de alta qualidade, estamos oferecendo aos usuários uma solução elegante para criar dashboards de informação personalizados e de baixo consumo de energia que respeitam tanto sua atenção quanto seu tempo.

## Primeiros passos com o TRMNL

Antes de começar a configurar seu Painel ePaper XIAO 7,5" com o TRMNL, vamos reunir os materiais necessários e preparar suas credenciais do TRMNL.

### Materiais necessários

Para esta integração, você vai precisar de:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Painel ePaper XIAO 7,5"</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Configuração de conta TRMNL e acesso ao TRMNL

Antes de conectar seu Painel ePaper ao TRMNL, você precisará:

1. **Comprar acesso ao TRMNL**

   - Compre acesso ao app web TRMNL + recursos de dispositivo em: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Isso fornece as credenciais necessárias para usar a plataforma do TRMNL
   - Vá para [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para ativar um dispositivo virtual (pode levar até 10 minutos após a compra)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Criar uma conta TRMNL**

   - Visite o [site do TRMNL](https://usetrmnl.com)
   - Clique em "Sign Up" para criar uma nova conta
   - Siga o processo de registro

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Suas credenciais do TRMNL são informações sensíveis. Nunca as compartilhe publicamente nem as envie para sistemas de controle de versão.
:::

Depois que você tiver seus materiais e tiver comprado o acesso ao TRMNL, poderá prosseguir com a conexão do seu Painel ePaper à plataforma do TRMNL. Se encontrar algum problema ou tiver dúvidas, você pode entrar em contato diretamente com a equipe TRMNL em team@usetrmnl.com.

### Gravação do firmware

Para fazer seu Painel ePaper XIAO 7,5" funcionar com o TRMNL, você precisa gravar o firmware apropriado no seu dispositivo. Há três métodos recomendados:

#### Método 1: Gravar via TRMNL Web Flasher (mais fácil)

1. **Acesse o TRMNL Web Flasher**

:::tip
Use o **FW 1.5.12** ou firmware mais recente para compatibilidade com a Seeed.
:::

- Visite [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
- Esta ferramenta permite gravar seu dispositivo diretamente do navegador.
- Siga as instruções na tela para concluir o processo de gravação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### Método 2: Compilar e gravar a partir do código-fonte (para usuários avançados/desenvolvedores)

1. **Clonar o repositório de firmware**

- Visite o [repositório oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) e faça o clone:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

Há momentos em que atualizamos nosso código e precisamos enviar PR para o TRMNL e revisá-lo antes que seja exibido; se você quiser ser o primeiro a usar a versão mais recente do firmware, também pode usar o repositório TRMNL sob o projeto Seeed.

- Visite o [repositório da Seeed](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) e faça o clone:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Instalar o PlatformIO**

   - Instale o [PlatformIO](https://platformio.org/) como uma extensão do VSCode ou via linha de comando.

3. **Abrir o projeto**

   - Abra a pasta `firmware` clonada no VSCode.

4. **Selecionar o ambiente correto**

   - Em `platformio.ini`, selecione o ambiente `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **Conectar seu dispositivo**

   - Conecte seu Painel ePaper XIAO 7,5".

6. **Compilar e enviar**

   - No PlatformIO, clique no botão "Upload" ou execute:

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - O firmware será compilado e enviado para o seu dispositivo.

## Configurar Wi-Fi e enviar playlists para o TRMNL

Para usar seu Painel ePaper XIAO 7,5" com o TRMNL e enviar playlists, primeiro você precisa conectar o dispositivo à sua rede Wi-Fi. Esse processo é chamado de "modo de pareamento WiFi" e é feito por meio de um portal cativo simples. Siga as etapas abaixo:

> 💡 **Problemas com o Wi-Fi?** Se você encontrar problemas ao conectar seu dispositivo ao Wi-Fi, consulte o [Guia de solução de problemas de Wi-Fi do dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) para soluções de problemas comuns de rede e compatibilidade de roteadores.

### Ligar e entrar no modo de provisionamento

- Após gravar o firmware TRMNL e ligar o dispositivo, ele entrará automaticamente no modo de provisionamento se ainda não estiver conectado ao Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### Conectar ao Wi-Fi TRMNL

- No seu **telefone** ou **computador**, abra a lista de redes Wi-Fi disponíveis.
- Procure uma rede chamada **TRMNL** e conecte-se a ela. (Nenhuma senha é exigida por padrão.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir o portal cativo

- Depois de conectado, abra um navegador (como Chrome ou Edge).
- O dispositivo deve redirecionar automaticamente para a página de configuração do TRMNL. Se isso não acontecer, acesse manualmente [http://4.3.2.1](http://4.3.2.1) no navegador.

### Inserir suas credenciais de Wi-Fi

- Na página de configuração, você verá uma lista de redes Wi-Fi disponíveis.
- **Selecione sua rede Wi-Fi de 2,4 GHz** (o TRMNL não oferece suporte a redes de 5 GHz).
- Digite a senha do seu Wi-Fi.
- Clique em **Save** ou **Connect**.

> ⚠️ **Importante:** Certifique-se de usar uma rede Wi-Fi de 2,4 GHz. Redes de 5 GHz não são suportadas pelo chip ESP32-C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### Dispositivo se conecta à sua rede

- O dispositivo tentará se conectar ao seu Wi-Fi.
- Quando a conexão for bem-sucedida, ele se desconectará do Wi-Fi TRMNL e entrará na sua rede doméstica.
- A janela exibirá o endereço MAC do dispositivo. **Anote o endereço MAC**, pois você precisará dele em uma etapa posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Observação:** O endereço MAC fica visível no portal cativo por apenas 1–2 segundos. Se você perder esse momento, também pode:
>
> - Recuperá-lo nos logs de compilação/envio do VS Code > PlatformIO.
> - Usar o método [usetrmnl.com/flash](https://usetrmnl.com/flash) e verificar o console de desenvolvedor do Chrome/Edge/Firefox para o endereço MAC durante a gravação.
> - Encontrá-lo na lista de dispositivos conectados do seu roteador ou app de rede Mesh.
>
> Para mais detalhes e capturas de tela, consulte o guia oficial: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Acessar a Interface Web do TRMNL

Depois que o seu XIAO Painel ePaper de 7,5" estiver conectado ao seu Wi-Fi e você tiver registrado o endereço MAC (ID do dispositivo), você poderá adicioná-lo à sua conta TRMNL:

1. **Abra a Interface Web do TRMNL**  
   - No seu computador ou dispositivo móvel, abra um navegador e acesse a [interface web do TRMNL](https://trmnl.app).

2. **Vá para a Página de Dispositivos**  
   - Na interface do TRMNL, navegue até a seção **Devices**.

3. **Adicione um Novo Dispositivo**  
   - Clique no botão **Add new device**, que geralmente é encontrado no canto superior direito ou no centro da página Devices.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Insira o ID do Dispositivo**  
   - Na janela pop-up, insira o ID do dispositivo que você recebeu ao adquirir o acesso ao TRMNL (este não é o endereço MAC). Use o ID do dispositivo do e-mail de confirmação da compra ou do painel do TRMNL.
   - Clique em **Add new device** para concluir o processo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Registrar o Endereço MAC do Dispositivo XIAO 7,5"**

   Para estabelecer uma conexão entre o painel epaper XIAO e o TRMNL, precisamos vincular o endereço MAC correto do dispositivo na página de configurações do TRMNL.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - Você pode obter o endereço MAC durante o processo de upload pelo PlatformIO (verifique os logs de upload) ou pelo portal de provisionamento (ele será exibido após a configuração do Wi-Fi).
   - Adicionar o endereço MAC antecipadamente ajuda a garantir um processo de integração e gerenciamento do dispositivo mais tranquilo.

   - Em seguida, você pode definir um nome personalizado para o seu Painel ePaper e ajustar outras configurações conforme necessário.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Seu XIAO Painel ePaper de 7,5" agora está vinculado à sua conta TRMNL! Agora você pode enviar playlists, imagens ou outros conteúdos para o seu display diretamente pela interface do TRMNL.

> 💡 **Dica:** Se você tiver vários Painéis ePaper, repita as etapas acima para cada dispositivo usando seus respectivos IDs de dispositivo exclusivos.

:::caution
Depois de adicionar seu dispositivo na interface web do TRMNL, acesse a página de configurações do dispositivo e **desative** tanto **Firmware Early Release** quanto **OTA Updates Enabled**.  

Se essas opções permanecerem ativadas, seu dispositivo poderá baixar e instalar automaticamente atualizações de firmware do TRMNL quando estiver conectado à internet. Essas atualizações são destinadas ao hardware oficial do TRMNL e **não são compatíveis com o XIAO Painel ePaper de 7,5"**. Instalar firmware incompatível pode fazer com que o dispositivo apresente mau funcionamento ou deixe de responder.

Mantenha sempre ambas as opções desativadas para garantir o funcionamento estável do seu Painel ePaper XIAO.
:::

## Entendendo o Recurso de Playlist do TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

O recurso de Playlist do TRMNL permite controlar exatamente o que é exibido no seu Painel ePaper e quando. Aqui está uma visão geral das principais seções e controles, conforme mostrado na captura de tela acima:

### Visão Geral da Playlist

- **Título da Playlist**: Na parte superior, você vê o nome do seu dispositivo TRMNL (por exemplo, "MengDu's TRMNL").
- **Intervalo de Tempo de Exibição**: Você pode definir o intervalo de tempo em que a playlist ficará ativa (por exemplo, de 00:00 a 23:45).
- **Intervalo de Atualização**: Escolha com que frequência o display será atualizado (por exemplo, a cada 5 minutos).
- **Add a Group / Add a Plugin**: Use esses botões para organizar sua playlist em grupos ou adicionar novos plugins de conteúdo (como clima, calendário ou texto personalizado).

### Itens da Playlist

Cada linha da playlist representa uma tela ou widget que será exibido no seu Painel ePaper (apenas para referência):

1. **Weather**
   - Mostra informações meteorológicas atuais para o local selecionado.
   - O rótulo verde "Displayed now" indica que esta tela está sendo exibida no seu dispositivo no momento.
2. **Days Left This Year**
   - Exibe uma contagem regressiva dos dias restantes no ano atual (por exemplo, "2025").
   - O rótulo (por exemplo, "9 days ago") mostra quando esta tela foi atualizada ou exibida pela última vez.
3. **Custom Text**
   - Permite exibir qualquer mensagem personalizada (por exemplo, "Hello World").
   - Também mostra quando foi atualizada pela última vez.

Para cada item, você tem vários controles:

- **Configurações (ícone de engrenagem)**: Configura as opções do plugin.
- **Excluir (ícone X)**: Remove o item da sua playlist.
- **Pré-visualizar (ícone de olho)**: Visualiza como a tela ficará.
- **Reordenar (ícone de barras)**: Arraste para alterar a ordem em que as telas são exibidas.

### Smart Playlist

- **Opção Smart Playlist**: Na parte inferior, você pode escolher se deseja pular automaticamente telas cujo conteúdo não tenha mudado (por exemplo, "Never skip screens").

> 📖 Quer saber mais? Leia o [post do blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para dicas avançadas e mais detalhes.

Esse sistema de playlist flexível permite personalizar totalmente o que o seu Painel ePaper exibe, com que frequência ele é atualizado e em que ordem. Você pode combinar diferentes plugins para criar um painel personalizado que atenda às suas necessidades.

## Explorando os Plugins do TRMNL

O sistema de plugins do TRMNL é o que torna o seu Painel ePaper realmente poderoso e personalizável. Plugins são aplicativos ou widgets modulares que você pode adicionar ao seu dispositivo para exibir uma grande variedade de informações e conteúdos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### O que são Plugins?

Plugins são blocos de conteúdo individuais que podem mostrar coisas como clima, eventos de calendário, preços de ações, feeds RSS, frases motivacionais, atividade no GitHub e muito mais. Você pode combinar plugins para criar um painel que atenda às suas necessidades.

### Plugins Conectados

Na parte superior da página de Plugins, você verá todos os plugins que já conectou à sua conta TRMNL. Eles estão prontos para serem adicionados à sua playlist e exibidos no seu Painel ePaper. Exemplos incluem:

- **Weather**: Mostra as condições meteorológicas atuais.
- **Days Left This Year**: Contagem regressiva até o final do ano.
- **Stock Price**: Acompanha suas ações favoritas.
- **RSS Feed**: Exibe notícias ou atualizações de blogs.
- **Reddit, Hacker News**: Mostra posts em destaque.
- **Language Learning, Motivational Quote, Custom Text**: Personalize seu display com ferramentas de aprendizado ou mensagens personalizadas.

### Marketplace de Plugins

Abaixo dos seus plugins conectados, você encontrará o marketplace de plugins. Nele, você pode navegar, pesquisar e descobrir novos plugins para adicionar ao seu dispositivo. Os plugins são organizados por categorias e tags (como #productivity, #news, #ecommerce, etc.), facilitando encontrar o que você precisa.

- **Navegar e Pesquisar**: Use a barra de pesquisa ou as tags para encontrar rapidamente plugins do seu interesse.
- **Adicionar Plugins**: Clique em qualquer plugin para conectá-lo à sua conta e começar a usá-lo na sua playlist.

Desenvolvedores podem até criar e publicar seus próprios plugins para que outros usem, fazendo com que o ecossistema se expanda continuamente com novas possibilidades ([learn more about plugin creation](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

Se você tiver qualquer dúvida sobre como usar o TRMNL ou quiser explorar recursos mais avançados, sinta-se à vontade para ler a documentação oficial do TRMNL para mais informações: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Agradecimentos Especiais

Agradecimentos especiais a toda a **equipe TRMNL** pelo forte apoio e ajuda inestimável neste projeto. Em particular, gostaríamos de agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi** e a todos os demais membros da equipe por sua dedicação e assistência ao longo de todo o processo de desenvolvimento e documentação.

Sua experiência e comprometimento tornaram essa integração possível e melhoraram muito a experiência do usuário para a comunidade do XIAO Painel ePaper de 7,5".

## Solução de Problemas

### Como reconfigurar a rede?

Pressione o botão Reset no XIAO, solte-o e, em seguida, pressione e segure o botão Boot por cinco segundos. O dispositivo retornará à interface inicial do TRMNL e ativará o AP.

## Recursos

- **[STP]**: [Modelo 3D do gabinete](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF do esquema da Placa Controladora do ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [Repositório de firmware do TRMNL](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Repositório Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
