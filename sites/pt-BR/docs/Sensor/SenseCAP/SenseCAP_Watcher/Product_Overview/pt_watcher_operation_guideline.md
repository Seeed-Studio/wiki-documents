---
description: Diretrizes de operação do SenseCAP Watcher.
title: Diretrizes de Operação
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 10/18/2024
  author: Citric
createdAt: '2024-06-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_operation_guideline/
---

# Diretrizes de Operação do SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Vídeo do Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositório Github</font></span></strong>
    </a>
</div>

Nesta seção do Wiki, forneceremos informações sobre a lógica de operação do SenseCAP Watcher, criação de tarefas e uso dos recursos do dispositivo.

## Operações Básicas

Leia esta parte para conhecer e entender a operação básica do Watcher, para que você possa dominar com sucesso as ideias e métodos de uso do Watcher.

### Ligar

:::caution
Use um plugue de energia compatível com o Watcher; o Watcher deve ser alimentado por uma fonte de 5 V e pode queimar se você usar um adaptador de energia não compatível ou uma fonte com tensão superior a 5 V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

A tabela acima mostra as especificações recomendadas do adaptador. Se você não souber onde comprar o adaptador correto, pode optar por adquiri-lo diretamente no link abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>
:::

Para ligar seu Watcher, mantenha pressionado o botão de rolagem localizado no canto superior direito por aproximadamente 3 segundos, até que o logo da Seeed Studio apareça na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Quando o logo for exibido, solte o botão e aguarde o dispositivo concluir o processo de inicialização. Após alguns instantes, o Watcher exibirá seu menu principal, indicando que está pronto para uso.

:::tip
Se o dispositivo não ligar com um pressionamento longo, ele pode estar com pouca energia e você pode precisar conectar um cabo para alimentá‑lo antes de conseguir ativar o Watcher.
:::

### Desligar

Para desligar o Watcher, você precisa acessar o menu Setting. Usando o botão de rolagem, navegue até a opção Setting e pressione o botão para entrar no menu. Dentro dele, role para baixo até a opção Shutdown e pressione o botão de rolagem para selecioná‑la. Por fim, deslize o controle deslizante da esquerda para a direita para confirmar o processo de desligamento e o Watcher será desligado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
Se o seu Watcher estiver conectado a um cabo de alimentação, o botão Shutdown do dispositivo se torna um botão Reboot, e nesse caso o dispositivo não pode ser desligado. Da mesma forma, um dispositivo que estiver desligado ligará automaticamente quando o cabo de alimentação for conectado.
:::

Na parte inferior do seu Watcher, você encontrará um pequeno orifício. Ele dá acesso ao botão físico de desligar, que permite desligar o dispositivo quando necessário.

Para desligar seu Watcher usando o botão físico, siga estas etapas:

1. Encontre um objeto fino e pontiagudo, como um clipe de papel ou uma pequena agulha.

2. Insira cuidadosamente o objeto pontiagudo no pequeno orifício na parte inferior do seu Watcher.

3. Pressione suavemente o botão de desligar dentro do orifício e o seu Watcher será desligado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
É importante ter cuidado ao usar um objeto pontiagudo para pressionar o botão de reset. Seja delicado e evite aplicar força excessiva para não danificar o dispositivo.

Observe que realizar um reset de hardware não apagará nenhum dado de usuário armazenado no seu Watcher. A operação de reset é projetada para reiniciar o dispositivo em caso de problemas relacionados a software ou se o dispositivo ficar sem resposta.

Se você encontrar problemas persistentes com o seu Watcher que não sejam resolvidos por um reset de hardware, talvez seja necessário considerar fazer um reset de fábrica pelo menu de configurações do dispositivo. No entanto, tenha em mente que um reset de fábrica apagará todos os dados do usuário, portanto deve ser usado apenas como último recurso.

Lembre‑se de manusear o seu Watcher com cuidado e usar o botão de reset de hardware apenas quando necessário, para garantir a longevidade e o bom funcionamento do seu dispositivo.
:::

### Lógica de Operação

A lógica operacional do Watcher gira em torno do botão de rolagem, que funciona como o principal meio de navegação e seleção. Girar o botão de rolagem no sentido anti‑horário permite mover para cima ou para a esquerda nos menus, enquanto girá‑lo no sentido horário permite mover para baixo ou para a direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

Para confirmar uma seleção ou entrar em um submenu, basta pressionar o botão de rolagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

Entretanto, é importante observar que, em certas situações em que possa haver ambiguidade operacional, a lógica de seleção e confirmação do botão de rolagem pode desviar desse padrão. Nesses casos, a interface de tela sensível ao toque oferece um meio alternativo de interação, permitindo concluir a ação desejada tocando nos elementos apropriados na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

Ao longo do Wiki, serão fornecidas instruções específicas para navegar e selecionar opções em cada menu, levando em conta quaisquer exceções à lógica geral do botão de rolagem. Ao se familiarizar tanto com o botão de rolagem quanto com os controles da tela sensível ao toque, você poderá operar seu Watcher com eficiência e acessar seus diversos recursos e configurações.

### Push to Talk

O recurso Push to Talk do Watcher permite que você interaja com o dispositivo usando comandos de voz a partir de qualquer tela ou interface. Basta pressionar e manter pressionado o botão de rolagem localizado no canto superior direito do dispositivo para ativar a interface de entrada de voz. Enquanto estiver segurando o botão, diga seu comando ou mensagem, como atribuir uma tarefa ou iniciar uma conversa. Quando você soltar o botão, o Watcher processará sua entrada de voz e responderá de acordo. Se for necessário mais esclarecimento, pressione e mantenha o botão novamente para fornecer entrada de voz adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. Atualmente o diálogo por voz só oferece suporte ao uso de inglês. Observe que, se você usar outros idiomas, podem ocorrer situações inesperadas.

2. Se você iniciar um diálogo enquanto o Watcher estiver executando uma tarefa, o Watcher primeiro irá pausar a tarefa atual e depois retornará à sua tarefa original quando o diálogo terminar.

3. Para saber como atribuir tarefas, leia primeiro o tutorial **[How to assign tasks to Watcher](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/)**.
:::

## Visão Geral das Funções

O Watcher oferece quatro opções principais de menu: **Task Templates**, **Current Task**, **Extension** e **Setting**. Esses menus fornecem acesso a vários recursos e funções do dispositivo.

### Task Templates

O menu Task Templates contém uma seleção de tarefas pré‑configuradas prontas para uso. Essas tarefas incluem detecção de pessoas, detecção de animais de estimação e detecção de gestos. Ao escolher um desses templates, você pode configurar rapidamente o Watcher para executar a tarefa desejada sem a necessidade de uma configuração extensa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### Current Task

A opção de menu Current Task oferece uma forma prática de acessar e gerenciar a tarefa em execução no Watcher. Se você precisar sair da tarefa atual para ajustar configurações do dispositivo, como volume, brilho ou interruptor de luz LED, poderá retornar facilmente à sua tarefa selecionando a opção Current Task no menu principal, garantindo uma experiência de uso contínua e eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### Extension

O menu Extension, atualmente acessível no Watcher, funciona como um hub para exibir dados de uma faixa selecionada de sensores Grove conectados, especificamente o **[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**, **[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)** e **[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**.

Esse recurso permite que os usuários integrem sem dificuldades um desses sensores Grove compatíveis por vez ao seu Watcher, possibilitando o monitoramento em tempo real e a visualização dos dados do sensor. Ao navegar até o menu Extension, os usuários podem ver os valores e leituras do sensor conectado, o que lhes permite obter insights e tomar decisões informadas com base nos dados coletados.

À medida que a plataforma Watcher continua a evoluir, o menu Extension poderá se expandir para incluir suporte a uma gama mais ampla de sensores Grove e recursos e funcionalidades adicionais, aprimorando ainda mais as capacidades do dispositivo e a experiência do usuário. Fique atento a atualizações e anúncios sobre futuras melhorias no menu Extension.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### Setting

Por fim, o menu Setting é onde você pode acessar e modificar as configurações gerais do Watcher. Este menu oferece opções para personalizar vários aspectos do dispositivo, como brilho da tela, volume do som, configurações de conectividade e muito mais. Ao explorar o menu Setting, você pode ajustar o desempenho e o comportamento do Watcher às suas preferências, garantindo uma experiência de uso personalizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Configurações do Watcher

Este guia irá conduzi-lo pelas diversas opções de configuração disponíveis no seu dispositivo Watcher e explicar suas funções.

- **Connect App**:
   - A configuração Connect App permite estabelecer uma conexão entre o seu Watcher e um aplicativo móvel complementar.
   - Ao conectar seu Watcher ao app, você pode acessar recursos adicionais, capacidades de controle remoto e receber notificações em seu dispositivo móvel.

- **Wi-Fi**:
   - A configuração Wi-Fi no dispositivo Watcher exibe informações sobre a rede sem fio atualmente conectada.
   - Se nenhuma rede tiver sido configurada, a configuração Wi-Fi não exibirá nenhuma informação.
   - Observe que a configuração de redes Wi-Fi só pode ser feita por meio do aplicativo móvel complementar e não é suportada diretamente no dispositivo Watcher.

- **Bluetooth**:
   - A configuração Bluetooth permite ativar ou desativar a funcionalidade Bluetooth.

- **Sound**:
   - A configuração Sound permite ajustar o volume da saída de áudio do seu Watcher.
   - Você pode aumentar ou diminuir o volume para atender às suas preferências ou ao ambiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brightness**:
   - A configuração Brightness permite controlar o nível de brilho da tela do seu Watcher.
   - Ajustar o brilho pode ajudar a melhorar a visibilidade em diferentes condições de iluminação e a economizar bateria.

- **RGB Light**:
   - A configuração RGB Light é uma chave de alternância que permite ligar ou desligar a luz indicadora de LED.

- **About Device**:
   - A seção About Device fornece informações importantes sobre o seu Watcher, como o número do modelo, a versão do firmware e o número de série.
   - Essas informações podem ser úteis ao solucionar problemas ou verificar se há atualizações disponíveis.

- **Shutdown/Reboot**:
   - A configuração Shutdown/Reboot permite reiniciar ou desligar o dispositivo Watcher, dependendo da fonte de alimentação.
   - Quando o Watcher está conectado a uma fonte de energia, a opção "Reboot" será exibida, permitindo reiniciar o dispositivo. Não é permitido desligar enquanto estiver conectado à energia.
   - Quando o Watcher estiver funcionando com bateria, a opção "Shutdown" estará disponível, permitindo desligar o dispositivo.

- **Factory Reset**:
   - A opção Factory Reset restaura o seu Watcher às configurações originais de fábrica.
   - Essa ação apagará todos os dados, preferências e configurações do usuário, retornando o dispositivo ao seu estado padrão.
   - Use esta opção com cautela, pois ela não pode ser desfeita e você precisará configurar seu Watcher novamente após um factory reset.

Ao se familiarizar com essas opções de configuração, você pode personalizar e otimizar sua experiência com o Watcher para atender melhor às suas necessidades. Tenha em mente que certas configurações, como configuração de Wi-Fi e Bluetooth, só podem ser acessadas e modificadas por meio do aplicativo móvel complementar.

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

