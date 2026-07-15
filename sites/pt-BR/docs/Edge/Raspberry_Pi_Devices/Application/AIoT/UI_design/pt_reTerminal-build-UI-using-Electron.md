---
description: Electron para reTerminal
title: Electron para reTerminal
keywords:
  - Borda
  - Aplicativo reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Electron
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-build-UI-using-Electron/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Introdução

Este wiki explica como criar sua própria interface de usuário usando Electron. Electron é um framework de código aberto para criar aplicativos nativos de desktop (Windows, Mac, Linux) com tecnologias web como HTML, CSS e JavaScript. Isso significa que, se você consegue criar um site, você consegue criar um aplicativo de desktop!

Seguindo o guia abaixo, você será capaz de criar um aplicativo para controlar os pinos GPIO no reTerminal apenas clicando em botões no LCD. Então vamos começar!

## Preparar Ambiente de Desenvolvimento

### No reTerminal

Primeiro, vamos instalar **Node.js** junto com **npm** no reTerminal. npm é um gerenciador de pacotes para pacotes Node.js.  

- **Passo 1.** Acesse o reTerminal usando o **LCD integrado, display externo ou SSH** conforme explicado [aqui](https://wiki.seeedstudio.com/pt-br/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Passo 2.** Atualize os pacotes

```sh
sudo apt update
sudo apt full-upgrade 
```

- **Passo 3.** Baixe o script para instalar o Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Passo 4.** Instale o Node.js

```sh
sudo apt install -y nodejs
```

Node.js agora está instalado no reTerminal. Para verificar se a instalação foi bem-sucedida, execute os seguintes comandos para verificar a versão do **Node.js** e do **npm**

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### No PC Host

Agora, vamos configurar o Microsoft Visual Studio Code para o nosso desenvolvimento.

- **Passo 1.** Baixe e instale o [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Baixe o instalador que seja adequado para o seu sistema operacional

- **Passo 2.** Clique na guia **Extensions** no menu de navegação à esquerda e digite **remote development** na caixa de pesquisa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Selecione **Remote Development** e clique em **Install**

- **Passo 4.** Pressione **F1** no teclado, digite **ssh** e selecione **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Passo 5.** Digite o seguinte

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** é o nome de usuário e **192.xxx.xx.xx** é o endereço IP do reTerminal

- **Passo 6.** Insira a senha para o usuário

Agora você fez login com sucesso no reTerminal usando SSH e concluiu com êxito a preparação do ambiente de desenvolvimento

## Aplicativo Electron Smart Light

Agora vamos criar um **Aplicativo Electron Smart Light** que pode ser usado para controlar o GPIO no reTerminal pressionando botões no LCD. Você pode então conectar relés ao GPIO e controlar também eletrodomésticos!

### Conexões de Hardware

Nós conectaremos um **LED** ao **GPIO 24** do reTerminal para fins de teste. Depois você pode adicionar um relé e controlar eletrodomésticos usando o GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** É necessário um resistor entre o pino GPIO e o LED, caso contrário o LED queimará.

### Criar e Inicializar o Aplicativo

- **Passo 1.** Abra o VSCode no PC Host e faça login no reTerminal via SSH conforme explicado anteriormente

- **Passo 2.** Navegue até `File > Open Folder...` e selecione uma pasta de sua preferência no reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Crie uma nova pasta e dê um nome a ela

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **Passo 4.** Navegue até `Terminal > New Terminal` e navegue até a pasta recém-criada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**Nota:** Aqui usamos **cd** para mudar o diretório

- **Passo 5.** Digite o seguinte dentro desta janela de terminal para criar um arquivo **package.json** com as configurações necessárias para o nosso app Node.js

```sh
npm init
```

**Nota:** Continue pressionando **ENTER** para usar os valores padrão das respostas, mas defina o **entry point: (index.js)** como **main.js** e **test command:** como **electron .**(Use um espaço e um ponto depois de **electron**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

Se você quiser alterar as configurações mais tarde, você pode acessar o arquivo **package.json** dentro da nossa pasta principal do aplicativo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **Passo 6.** No terminal dentro do VSCode, digite o seguinte para instalar o **Electron**

```sh
npm install --save-dev electron
```

Você verá a seguinte saída se o Electron for instalado com sucesso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

Você também verá a pasta **node_modules** gerada com os pacotes necessários para executar o Electron

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### Instalar módulo npm onoff

O módulo npm onoff permite acessar e controlar o GPIO no reTerminal usando o aplicativo Electron

- **Passo 1.** Abra uma janela de terminal dentro do VSCode conforme explicado anteriormente e navegue até o nosso diretório principal do aplicativo

- **Passo 2.** Digite o seguinte para instalar o módulo npm **onoff**

```sh
npm install onoff
```

#### Instalar e Executar módulo npm electron-rebuild

O módulo npm electron-rebuild recompila módulos nativos Node.js com a versão do Node.js que o seu projeto Electron está usando. Isso permite que você use módulos nativos Node.js em aplicativos Electron sem que a versão do Node.js do seu sistema corresponda exatamente (o que muitas vezes não é o caso e, às vezes, nem mesmo é possível)

- **Passo 1.** Instale o módulo npm **electron-rebuild**

```sh
npm install --save-dev electron-rebuild
```

- **Passo 2.** Execute o electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**Nota:** Sempre que você instalar um novo pacote npm, execute novamente o electron-rebuild

### Criar o HTML (UI Básica)

Usaremos o arquivo HTML para criar a interface de usuário básica sem qualquer estilo. Este arquivo HTML é responsável por exibir os elementos da UI na tela.

Dentro do nosso diretório principal do aplicativo, crie um novo arquivo chamado **index.html** e copie os seguintes códigos

```html
<!doctype html>
<html>
    <head>
        <!-- Specify the character encoding for the HTML document -->
        <meta charset="UTF-8">
        <!-- App title bar -->
        <title>Test Application</title>
        <!-- Load the material icons api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Load the google fonts api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- Load style.css with UI styling -->
        <link rel="stylesheet" href="style.css">
        <!-- Embed  JavaScript code -->
        <script>
            // Load ipcRenderer module
            const { ipcRenderer } = require('electron');
            // Function to turn ON the GPIO on button press
            function buttonclick1()
            {
                // This will send 1 as a message to the main process with "msg" as the channel name
                ipcRenderer.send("msg1",1)
            }

            // Function to turn OFF the GPIO on button press
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // Function to close the app on button press
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- Application close button -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- Application heading -->
        <h1>SMART LAMP</h1>
        <!-- Lightbulb icon from the material icons api -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- Empty lines -->
        <br>
        <!-- ON button with class attribute for styling 
        and onclick attribute for button click event -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**Nota:** O **módulo ipcRenderer** é um EventEmitter. Ele fornece alguns métodos para que você possa enviar mensagens do processo de renderização (página web - html/css) para o processo principal (main.js). Você também pode receber respostas do processo principal.

Agora terminamos de criar o arquivo HTML.

Execute **npm test** para ver a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### Criar o CSS (Estilização)

Usaremos o arquivo CSS para adicionar diferentes estilos à interface de usuário criada usando o arquivo HTML

Dentro do nosso diretório principal do aplicativo, crie um novo arquivo chamado **style.css** e copie os seguintes códigos

```css
/* Styling for the body of the app */
body {
    background-color: rgb(141, 141, 141);
}

/* Styling for heading of the app */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* Styling for the light bulb */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* Styling for the ON button */
.button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(76, 175, 80);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
  }

/* Button press effect for ON button */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* Hover effect for ON button */
.button1:hover {background-color: rgb(62, 142, 65)}

/* Styling for OFF button */
.button2 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(207, 85, 85);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
}

/* Button press effect for OFF button */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* Hover effect for OFF button */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* Styling for Close button */
.button3 {
  padding: 8px 25px;
  font-size: 20px;
  text-align: center;
  outline: none;
  color: rgb(255, 255, 255);
  background-color:rgb(179, 44, 44);
  border: none;
  width: 6%;
  margin:auto;
  display:grid;
  float: right;
}
```

A saída final do aplicativo será a seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Criar o Javascript (Carregar e Executar o App)

Vamos usar o arquivo Javascript para criar a janela do aplicativo, carregar o arquivo HTML e adicionar a funcionalidade de GPIO.

Dentro do nosso diretório principal do app, crie um novo arquivo chamado **main.js** e copie os seguintes códigos

```javascript
var Gpio = require('onoff').Gpio; //include onoff module to interact with the GPIO
var LED = new Gpio(24, 'out'); //initialize GPIO 24 as an output

// Include app, BrowserWindow and ipcMain module
const { app, BrowserWindow, ipcMain } = require('electron')
/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn ON the GPIO*/
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn OFF the GPIO */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
close the app */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// Create application window
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Make the app fullscreen
        "fullscreen": true,
        webPreferences: {
            // enable the communication between the main and rendered process
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Load the HTML page with CSS styling
    mainWindow.loadFile('index.html');
});
```

**Nota:** O **ipcMain** fornece alguns métodos para que você possa receber as mensagens enviadas a partir do processo renderer (página web).

### Testar o App

Você verá a saída assim que salvar o arquivo anterior porque ativamos o **electron-rebuild**. No entanto, se você tiver fechado o app, pode abri‑lo novamente usando **npm test** e ver a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Preparar um Script para Executar o App

- **Passo 1.** Abra a pasta Root que criamos antes e crie um novo **arquivo .sh** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **Passo 2.** Abra o arquivo criado e insira o seguinte

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**Nota:** Aqui **$HOME/Desktop/testapp** é a localização do projeto electron

- **Passo 3.** Abra uma janela de terminal dentro do VSCode e navegue até o diretório raiz do app

```sh
example:
cd ~/Desktop/testapp
```

- **Passo 4.** Torne o ledstart.sh um arquivo executável

```sh
sudo chmod +x ledstart.sh
```

## Preparar um Arquivo Desktop para Iniciar o App

- **Passo 1.** Abra a **pasta Desktop** e crie um novo **arquivo .desktop** dentro dessa pasta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **Passo 2.** Abra o arquivo criado e insira o seguinte

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** é a localização do script que criamos antes

- **Passo 3.** Abra uma janela de terminal dentro do VSCode e navegue até o Desktop

```sh
example:
cd ~/Desktop
```

- **Passo 4.** Torne o **ledStart.desktop** um arquivo executável

```sh
sudo chmod +x ledStart.desktop
```

### Iniciar o App

Dê um clique duplo no arquivo **LED Test** na área de trabalho do LCD do reTerminal

Você verá a saída da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

Agora você pode clicar nos botões e verá o LED acender!

## Depurar o App

Vamos passar pelo processo de depuração do seu app enquanto o desenvolve

- **Passo 1.** Faça login no reTerminal via **SSH** usando o **Microsoft Visual Studio Code** como mencionado antes

- **Passo 2.** Faça login no reTerminal via SSH usando um aplicativo SSH como o [MobaXterm](https://mobaxterm.mobatek.net/) com **recurso X11 server**

**Nota:** X11 é necessário para encaminhar a tela do reTerminal e aparecer no PC

- **Passo 3.** Depois de escrever todos os códigos no Microsoft Visual Studio Code para o reTerminal, navegue até o diretório principal do app e execute o seguinte

```sh
npm test
```

Por fim, você verá a saída exibida em uma nova janela. Se houver algum erro no código, eles serão exibidos na janela de terminal do MobaXterm.

## FAQ

### P: Como configurar atualizações automáticas no app à medida que o salvamos?

Para isso você pode configurar o recurso Hot Reload usando o módulo npm electron-reloader

- **Passo 1.** Instale o **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **Passo 2.** Adicione a seguinte linha ao final do arquivo **main.js**

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

Agora execute o arquivo uma vez usando **npm test** e o aplicativo será atualizado conforme você salvar os arquivos. Você não precisará executar **npm test** toda vez que mudar o conteúdo dentro do seu projeto.

## Demo Bônus

Se você quiser experimentar uma demo mais interessante com Electron, pode conferir [este repositório GitHub](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Webpage]** [Documentação do Electron](https://www.electronjs.org/docs/api)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
