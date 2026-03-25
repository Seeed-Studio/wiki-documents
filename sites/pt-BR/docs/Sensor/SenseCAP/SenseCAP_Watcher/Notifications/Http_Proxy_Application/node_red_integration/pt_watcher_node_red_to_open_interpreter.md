---
description: Enviar mensagem do Watcher & Node-RED para o Open Interpreter
title: Watcher & Node-RED para Open Interpreter
keywords:
  - watcher
  - Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /watcher_node_red_to_open_interpreter
last_update:
  date: 08/19/2024
  author: Allen
createdAt: '2024-08-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_open_interpreter/
---

# Guia Rápido: Watcher para Open Interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. O que é o [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)

Open Interpreter é uma ferramenta de código aberto que facilita a interação entre usuários e seus computadores, permitindo que comandos em linguagem natural executem código em várias linguagens de programação. Ele atua como uma ponte, permitindo que os usuários escrevam instruções em linguagem simples, que o interpretador então traduz em código executável. Isso aumenta a produtividade e torna a programação mais acessível, especialmente para aqueles que podem não estar familiarizados com a sintaxe de código.

## Parte 2. Operações no Node-RED

Nesta parte, precisamos de 4 módulos para concluir a tarefa. São os módulos **SenseCap Watcher OpenSteam, function, http request e debug**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **Módulo SenseCap Watcher OpenSteam**: Receber mensagem do Watcher para o Node-RED.
2. **Módulo function**: Processar os dados para obter a mensagem que você deseja.
3. **Módulo http request**: Enviar mensagem para o Open Interpreter via protocolo HTTP.
4. **Módulo debug**: Depurar todo o fluxo de trabalho para verificar se está tudo certo.

Mostraremos como configurar esses módulos nas etapas a seguir.

### Etapa 1. Configurar o módulo SenseCap Watcher OpenSteam

Primeiro de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Se você ainda não sabe como enviar mensagem do Watcher para o Node_RED, [clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

### Etapa 2. Configurar o módulo function

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### Etapa 3. Configurar o módulo http request

Usamos uma requisição POST por segurança e enviamos para a porta 3000, e depois usaremos o Open Interpreter para ficar escutando a porta 3000.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### Etapa 4. Configurar o módulo debug

Selecione conforme a imagem a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

Quando terminar a configuração, não se esqueça de **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Operações no Open Interpreter

:::tip
Antes de continuarmos, o pré-requisito é que você tenha um ambiente de desenvolvimento Python no seu computador. 

Se você não tiver, [clique aqui para referência.](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### Etapa 5. Instalar o Open Interpreter

Depois de instalar o Python, você pode instalar o Open Interpreter facilmente via Python, com apenas um comando.

```python
pip install open-interpreter
```

### Etapa 6. Iniciar o Open Interpreter

O Interpreter possui dois modos, modo online e modo local. Por padrão, o Interpreter seleciona o modo online, usando a OpenAI GhatGPT gpt-4-turbo API Key. Você também pode defini-lo para o modo local, o que significa que precisa baixar o modelo para rodar localmente.

:::tip
Eu recomendaria o modo online porque o modo online é muito mais rápido e mais inteligente do que o modo local, e o modo local muitas vezes trava.
:::

#### Modo online

1. Antes de começar, precisamos de uma OpenAI API Key. [Você pode clicar aqui](https://platform.openai.com/api-keys) para obter uma se for um membro pago do OpenAI GPT-4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. Em seguida, digitamos o comando ```interpreter``` para iniciá-lo e ele nos pede para inserir a API Key. Depois disso, definimos o modelo para gpt-4-turbo com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### Modo local

1. Antes de começar, precisamos fazer download de um modelo para executá-lo localmente. Eu recomendaria o **Ollama** aqui. [Clique aqui para ir.](https://ollama.com/) Você deve baixar este aplicativo e instalá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. Quando você instalar com sucesso, execute ```ollama``` no seu **PowerShell(or Terminal)**, ficará como na imagem a seguir. Em seguida, execute ```ollama run llama3.1``` para baixar o modelo **llama3.1** e executá-lo. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. Se você quiser experimentar outros modelos, [clique aqui para ir.](https://ollama.com/library) Basta executar ```ollama run xxx```.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. Depois de instalar o modelo e executá-lo com sucesso, podemos continuar. Precisamos digitar o comando ```interpreter -l``` para entrar nele, e então selecionar **ollama** e **llama3.1** (o modelo que você acabou de baixar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 7. Executar comandos

:::tip
Eu tentei muitas vezes executar o comando a seguir no Interpreter, mas nem sempre as reações do Interpreter são as mesmas.

Portanto, você precisa interagir com o Interpreter de acordo com a reação dele. Às vezes é necessário reiniciá-lo e tentar novamente.
:::

Aqui está o meu comando em linguagem natural enviado ao Open Interpreter.

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

Na primeira vez, o Interpreter disse que sua configuração inicial só suporta requisições GET por simplicidade, mas minha requisição é POST por segurança, então ele não pode suportar e me sugeriu modificar o servidor para lidar com requisições POST. Eu disse sim e ele executou automaticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

Como você pode ver, o código foi executado com sucesso, escutando a porta 3000. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

Agora, use o Watcher para detectar você mesmo. A imagem será capturada e aberta automaticamente no navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

Parabéns por integrar com sucesso as aplicações Watcher e Open Interpreter! Essa conquista marca um passo significativo na sua jornada, demonstrando sua dedicação e habilidade. À medida que você avança, encontrará conceitos e ferramentas ainda mais fascinantes para explorar. Abrace os desafios e descobertas que estão por vir e aproveite cada momento desta empolgante aventura!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>