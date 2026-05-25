---
description: Uma introdução sobre como experimentar rapidamente Matter Lighting usando a Matter Deployment Tool da Espressif.
title: Primeiros Passos com Matter Rapidamente com XIAO ESP32
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_matter
last_update:
  date: 05/11/2024
  author: Citric
createdAt: '2024-05-11'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_matter/
---

# Primeiros Passos com Matter Rapidamente com XIAO ESP32 Série

:::tip
Este artigo é o segundo tutorial da série de desenvolvimento Matter com Seeed Studio XIAO ESP32. Se você ainda não configurou seu ambiente ESP-IDF, leia primeiro o primeiro tutorial:

- **[Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/pt-br/xiao_idf)**

Este tutorial se aplica ao XIAO ESP32C3 e XIAO ESP32S3. O exemplo Matter fornecido pela Espressif está temporariamente indisponível para o XIAO ESP32C6 porque o pino GPIO8 não está exposto.
:::

No mundo da tecnologia de casas inteligentes, Matter surgiu como um divisor de águas, prometendo revolucionar a forma como os dispositivos se comunicam e interagem entre si. Matter é um protocolo padronizado e de código aberto que permite interoperabilidade perfeita entre dispositivos de casa inteligente de vários fabricantes. Ao fornecer uma linguagem e um framework comuns, Matter visa simplificar o desenvolvimento e a implantação de dispositivos IoT, criando uma experiência de casa inteligente mais conectada e amigável ao usuário.

Como desenvolvedor ou entusiasta, você pode estar ansioso para explorar o potencial de Matter e começar a construir seus próprios dispositivos compatíveis com Matter. É aí que entram a série XIAO ESP32 e o ESPLaunchPad. A série XIAO ESP32, em particular o XIAO ESP32C3, XIAO ESP32S3 e XIAO ESP32C6, são placas de desenvolvimento compactas e poderosas que oferecem uma plataforma ideal para criar dispositivos Matter. Com seus recursos robustos e interfaces periféricas extensas, essas placas fornecem a base de hardware necessária para seus projetos Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

Para agilizar o processo de desenvolvimento e torná-lo mais acessível, a Espressif Systems introduziu o ESPLaunchPad, uma plataforma abrangente que simplifica o carregamento de firmware e o provisionamento de dispositivos ESP32. O ESPLaunchPad aproveita o poder do ecossistema ESP RainMaker, permitindo que você configure e controle seus dispositivos facilmente usando um aplicativo de smartphone. Ao combinar a série XIAO ESP32 com o ESPLaunchPad, você pode começar rapidamente o desenvolvimento com Matter e experimentar os benefícios desse protocolo transformador.

Neste tutorial, vamos guiá-lo pelo processo de usar o ESPLaunchPad para gravar rapidamente o firmware na sua placa XIAO ESP32 e pareá-la com seu iPhone usando um código QR. Seguindo essas etapas, você conseguirá estabelecer uma conexão entre seu telefone e o dispositivo XIAO ESP32, permitindo controlá-lo e interagir com ele de forma transparente. Essa experiência prática lhe proporcionará uma compreensão fundamental de Matter e de seu potencial no ecossistema de casa inteligente.

Ao longo deste tutorial, você aprenderá a:

1. Configurar sua placa XIAO ESP32 e prepará-la para gravação de firmware.
2. Usar o ESPLaunchPad para gravar facilmente o firmware Matter em seu dispositivo XIAO ESP32.
3. Parear sua placa XIAO ESP32 com seu iPhone usando um código QR.
4. Controlar e interagir com seu dispositivo Matter usando o aplicativo no iPhone.
5. Explorar as funcionalidades e capacidades básicas de Matter em um ambiente prático.

Ao final deste tutorial, você terá adquirido uma compreensão sólida de Matter e de sua implementação usando a série XIAO ESP32 e o ESPLaunchPad. Você estará apto com o conhecimento e as habilidades para levar seu desenvolvimento com Matter adiante, criando soluções inovadoras de casa inteligente que aproveitam o poder desse protocolo revolucionário.

Então vamos mergulhar e embarcar em uma jornada empolgante pelo mundo de Matter com a série XIAO ESP32 e o ESPLaunchPad!

## Preparar o Software

A seguir estão listados os sistemas e versões com suporte para uso neste tutorial.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) ou macOS 10.15 ou superior.

<!-- Matter's ESPLaunchPad is **not supported on Windows**. -->

## Preparar o Hardware

Ao final deste tutorial, mostraremos como adicionar a série XIAO ESP32 como um Endpoint Matter ao Apple Home para controlar as fitas de LED por meio do ecossistema da Apple. Até agora, este tutorial oferece suporte aos seguintes XIAOs, e você pode escolhê-los diretamente para o conteúdo deste curso.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

Além do XIAO, também precisamos da barra de luz ou conta de luz modelo WS281x. Atualmente, o exemplo de iluminação fornecido pela Espressif suporta apenas uma única conta, portanto, quer você use uma fita ou uma conta, apenas uma luz acenderá. Também recomendamos que você pegue o Grove Base para XIAO para facilitar a fiação.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base para XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

Se você estiver usando o XIAO ESP32C3, conecte a fita de LED ao pino **D8**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

Se você estiver usando o XIAO ESP32S3, conecte a fita de LED ao pino **D9**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

Este tutorial usará o **XIAO ESP32C3** como exemplo para lhe dar uma visão geral de como gravar o firmware, adicionar dispositivos e o restante.

## Tutoriais em Vídeo

<div class="video-container">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Passo 1. Gravar o Firmware Matter para XIAO ESP32

Conecte a placa XIAO ESP32C3 ao seu computador usando um cabo USB. Certifique-se de que a placa seja devidamente reconhecida pelo computador.

<!-- :::caution
Please do not use a Windows computer, you will notice that the Flash button is always greyed out on Windows computers.
::: -->

Abra o site do ESPLaunchPad no seu computador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir para ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

Selecione **light** em **Select Application** e selecione **ESP32C3** em **ESP Chipset Type**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

Em seguida, clique no botão **Connect** no canto superior direito e selecione o dispositivo XIAO que você conectou ao computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

Depois clique no botão **flash** abaixo e aguarde o upload do firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

Quando o upload do firmware for concluído, você verá alguns alertas de ação e também um código QR; basta clicar em **Done**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

Em seguida, clique no botão **Reset Device** no lado direito da tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

Quando você vir a mensagem de depuração, isso significa que tudo está indo muito bem. Agora podemos prosseguir com a vinculação do dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## Passo 2. Adicionar um dispositivo escaneando o código usando o APP Casa do iPhone

Na seção de adição de dispositivos, usaremos o dispositivo da Apple como exemplo (já que é o único que tenho em mãos). Se você tiver [dispositivo do Google](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid) ou [dispositivo da Amazon](https://developer.amazon.com/en-US/alexa/matter) em mãos, talvez também possa usá-los.

Se, como neste artigo, você quiser adicionar dispositivos usando o Home APP para iPhone, você precisa ter um dispositivo Apple como hub residencial. Os dispositivos atualmente suportados como Home Hub são HomePod e Apple TV; leia o [site da Apple para mais detalhes](https://support.apple.com/en-hk/102557). Para o propósito deste tutorial, presume‑se que você já adicionou o Home Hub no Home APP.

O Home APP é instalado por padrão em dispositivos iOS. Se você o tiver apagado alguma vez, pode [procurá‑lo](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB) novamente na App Store e baixá‑lo.

Abra o Home App no seu iPhone. Toque no botão **+** no canto superior direito da tela. Selecione **Add or Scan Accessory** no menu. Use a câmera do seu iPhone para escanear o código QR fornecido com o XIAO ESP32C3. O Home App reconhecerá o Matter Accessory e o exibirá como um novo acessório. Toque em **Add to Home** para adicionar o XIAO ESP32C3 ao seu Home App. Consulte as imagens de operação detalhadas abaixo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 4</th>
      <th>Página 5</th>
      <th>Página 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 7</th>
      <th>Página 8</th>
      <th>Página 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Etapa 3. Usando o XIAO no Home APP

No Home App, localize o acessório XIAO ESP32C3 recém‑adicionado. Toque no acessório para acessar seus controles. Use o controle deslizante de brilho para ajustar o brilho das luzes conectadas. Toque no ícone de cor para alterar a cor das luzes. Você pode escolher entre uma variedade de cores predefinidas ou usar o seletor de cores para criar cores personalizadas. As luzes conectadas ao XIAO ESP32C3 responderão em tempo real aos ajustes feitos no Home App.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

Parabéns! Você gravou com sucesso o firmware de iluminação na placa XIAO ESP32C3 usando o ESPLaunchPad e a emparelhou com o Home App do seu iPhone. Agora você pode controlar o brilho e a cor das luzes conectadas diretamente do seu iPhone, criando uma experiência de iluminação personalizada e conveniente.

Sinta‑se à vontade para explorar recursos mais avançados e opções de personalização disponíveis no Home App e experimentar diferentes acessórios de iluminação compatíveis com a placa XIAO ESP32C3. Com essa base, você pode expandir ainda mais sua configuração de casa inteligente e criar um espaço de convivência realmente conectado e automatizado.

## Suporte Técnico e Discussão sobre o Produto

### P1: Falha ao conectar ao dispositivo por muito tempo no Home APP

Se você não conseguir conectar ao dispositivo por um longo período de tempo, certifique‑se de ver a mensagem de log após o envio do firmware. Se você não tiver emparelhado o dispositivo por muito tempo neste ponto, o XIAO pode entrar em modo de espera; nesse caso, você precisará pressionar o botão Reset no XIAO ou usar Reset Device no ESPLaunchPad para reiniciar o dispositivo. Depois disso, tente adicioná‑lo novamente.

Além disso, podem existir problemas de rede. Certifique‑se de que o XIAO e o seu iPhone estejam na mesma LAN. E ambos precisam estar conectados a uma rede de 2,4 GHz, não a uma rede de 5 GHz. Depois que a configuração for concluída, o telefone poderá usar outras redes. Mas o XIAO só suporta rede de 2,4 GHz.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
