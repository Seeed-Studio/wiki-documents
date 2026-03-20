---
description: Crie uma página de documentação com conteúdo rico.
title: Modelo de Wiki - versão CN
keywords:
  - Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/name_your_website
last_update:
  date: 03/03/2024
  author: 黎孟度
createdAt: '2024-03-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/name_your_website/
---

> Imagem do produto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png" style={{width:1000, height:'auto'}}/></div>


> Link de compra:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

> Complete aqui a apresentação do produto

> Inclua uma breve introdução do produto, vantagens, cenários de aplicação etc.

> A composição do produto pode ser apresentada por meio de uma lista.

| Item                  |Value      |Remarks    |
| :---------:           |:--------- |:---------:|
| CPU                   |           |           |
| Flash Memory          |           | KB        |
| Memory                |           |           |
| SRAM                  |           | KB        |
| Module Storage        |           |           |
| Carrier Board Storage |           |           |
| Wifi                  |           |           |
| Display               |           |           |
| Bluetooth             |           |           |

### A seção Features é listada com marcadores.

- 
- 
- 

## Visão geral do hardware

Antes de começar qualquer coisa, é essencial ter alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características de 产品名称.

| Characteristic                         | Value   | Unit  |
| :-------:                              | :-----: | :---: |
| Operating Voltage                      |         | mW    |
| Power Consumption                      |         | mA    |
| Output Voltage/Current                 |         | mV/mA |
| Measurement Range                      |         |       |
| Field of View                          |         |       |
| Rate(这里可以是传感器返回数据的默认频率)  |         |       |
| Digital I/O Pins                       | 列出引脚 | -     |
| Analog I/O Pins                        | 列出引脚 | -     |
| I2C interface                          | 列出引脚 | -     |
| I2C Address(如果是IIC通信的话)          |         |       |
| SPI interface                          | 列出引脚 | -     |
| UART interface                         | 列出引脚 | -     |
| Power supply and downloading interface | Type-C  | -     |
| Dimensions                             |         | mm    |

> Abaixo você pode colocar o diagrama de pinos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" style={{width:1000, height:'auto'}}/></div>


## Primeiros passos

> Se for um produto, você pode começar diretamente a partir daqui:

### Instalação do equipamento

> Se o dispositivo precisar de peças instaladas ou montagem antes do uso, preencha aqui as etapas.

### Preparação do ambiente

> Se o produto tiver requisitos para o ambiente do sistema, é necessário apresentar a configuração do ambiente nos sistemas suportados, como a instalação de drivers e o fornecimento de pacotes de instalação.

##### install -Windows

##### install -MacOS

### Inicialização

> Se o dispositivo tiver um método de gravação de firmware, forneça aqui as etapas.

### Reset

> Se o dispositivo tiver um método de redefinição, forneça aqui as etapas.

:::note

    > As precauções para o uso do dispositivo também podem ser mencionadas aqui.

:::

## Visão geral da biblioteca Arduino

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

> Apresente brevemente a biblioteca usada pelo produto, por exemplo, em que ela é baseada, se pode ser baixada diretamente pelo Arduino IDE. Além desse método, anexe o link de download do GitHub.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos ver as funções disponíveis da biblioteca.

- `函数名称` —— 功能、作用、可选参数、输入输出
- 
- 
- 

### Variáveis padrão
> Apresente as variáveis globais que aparecem

### Instalação

- **Método um**

Como você já baixou a biblioteca em formato zip, abra o Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

- **Método dois**

O gerenciador de bibliotecas foi adicionado a partir das versões 1.5 e superiores (1.6.x) do Arduino IDE. Ele é encontrado no menu 'Sketch', em 'Include Library', 'Manage Libraries...'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Library.png" style={{width:800, height:'auto'}}/></div>

Quando você abrir o Library Manager, encontrará uma grande lista de bibliotecas prontas para instalação com um clique. Para encontrar uma biblioteca para o seu produto, pesquise pelo nome do produto ou por uma palavra-chave como 'k type' ou 'digitizer', e a biblioteca desejada deverá aparecer. Clique na biblioteca desejada e o botão 'Install' aparecerá. Clique nesse botão e a biblioteca deverá ser instalada automaticamente. Quando a instalação terminar, feche o Library Manager.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/library_manager.png" style={{width:1000, height:'auto'}}/></div>



### Atualizando o pacote

> Apresente os métodos de atualização futura e as etapas de operação.


## Exemplo Arduino / XIAO

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para nosso 产品名称 para ver como ele se comporta.

> Coloque primeiro as etapas repetidas e idênticas.

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32-C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeeduino V4.3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/)** to finish adding.

### Demo 1 — recomenda-se usar o nome do módulo ou o nome do projeto

> Introdução da função e dos cenários de aplicação do Exemplo 1.

#### Materiais necessários

> Aqui estão os materiais necessários para executar este exemplo e os links de compra

<div class="table-center">
	<table align="center">
		<tr>
			<th>Name</th>
			<th>Name</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> Explique como este código pode ser modificado para realizar determinadas operações (introdução da extensibilidade). Se houver algumas funções de difícil compreensão no demo, você pode explicar aqui o uso delas.

> Anexe imagens e a demonstração do efeito.

Exemplo

Ao abrir o monitor serial com uma taxa de baud de 9600, deverá ser exibida a distância entre o sensor e o objeto para o qual ele está apontado, tanto em milímetros quanto em pés. A saída deverá ser semelhante à imagem abaixo.

### Demo 2 — recomenda-se usar o nome do módulo ou o nome do projeto

> Introdução às funções e cenários de aplicação do Exemplo 2.

#### Materiais necessários

> Aqui ficam os materiais necessários para executar este exemplo e os links de compra

<div class="table-center">
	<table align="center">
		<tr>
			<th>Nome</th>
			<th>Nome</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


```cpp
//文件名

代码段

```

> Explique como este código pode ser modificado para realizar outras operações (introdução à extensibilidade). Se houver funções no demo cujo uso seja difícil de entender, você pode explicá-las aqui.

> Imagens e demonstração do efeito.

Exemplo

Ao abrir o monitor serial com uma taxa de baud de 9600, deverá ser exibida a distância entre o sensor e o objeto para o qual ele está apontado, tanto em milímetros quanto em pés. A saída deverá ser semelhante à imagem abaixo.

## Visão geral do pacote Python

:::tip

Se esta é a sua primeira vez usando o Raspberry Pi, recomendamos fortemente que você consulte [Getting Started with Raspberry Pi](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt).

:::

> No início do texto, indique a compatibilidade, o modelo de Raspberry Pi usado nos testes, a versão do sistema etc., bem como as informações sobre o Python utilizado.

> Em seguida, adicione uma breve introdução como abertura.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="超链接" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download do código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `函数名称` —— função, propósito, parâmetros opcionais, entrada e saída
- 
- 
- 

### Instalação

#### Instalação online com um clique

Instalação com um clique, início rápido, chame como quiser: com o único comando abaixo, podemos instalar/atualizar todas as dependências e a versão mais recente do grove.py.

:::caution

Se você estiver usando Raspberry Pi com Raspberrypi OS >= Bullseye, não poderá usar esta linha de comando.

:::

```sh
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::info

Se tudo correr bem, você verá o seguinte aviso.

```sh
Successfully installed grove.py-0.5
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

:::

#### Instalação passo a passo

Além da instalação com um clique, você também pode instalar todas as dependências e a versão mais recente do grove.py passo a passo.

:::caution

Se você estiver usando Raspberry Pi com Raspberrypi OS >= Bullseye, deverá usar esta linha de comando apenas com Python3.

:::

```sh
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python3
sudo pip3 install .
```

### Dependências

> Apresente as bibliotecas importadas e as informações dos pacotes de dependência.

### Variáveis padrão

> Apresente as variáveis globais que aparecem.

### Classe

> Apresente as classes de código Python definidas.

### Atualizando o pacote

> Apresente os métodos de atualização futura e os passos de operação.

## Exemplo com Raspberry Pi

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para o nosso 产品名称 e ver como ele se comporta.

> Coloque primeiro os passos repetidos e idênticos.

**Passo 1.** 


**Passo 2.** 

**Passo 3.** 

### Demo 1 — recomenda-se usar o nome do módulo ou o nome do projeto

> Introdução às funções e cenários de aplicação do Exemplo 1.

#### Materiais necessários

> Aqui ficam os materiais necessários para executar este exemplo e os links de compra

<div class="table-center">
	<table align="center">
		<tr>
			<th>Nome</th>
			<th>Nome</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> Explique como este código pode ser modificado para realizar outras operações (introdução à extensibilidade). Se houver funções no demo cujo uso seja difícil de entender, você pode explicá-las aqui.

> Imagens e demonstração do efeito.

### Demo 2 — recomenda-se usar o nome do módulo ou o nome do projeto

> Introdução às funções e cenários de aplicação do Exemplo 2.

#### Materiais necessários

> Aqui ficam os materiais necessários para executar este exemplo e os links de compra

<div class="table-center">
	<table align="center">
		<tr>
			<th>Nome</th>
			<th>Nome</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



```cpp
//文件名

代码段

```

> Explique como este código pode ser modificado para realizar outras operações (introdução à extensibilidade). Se houver funções no demo cujo uso seja difícil de entender, você pode explicá-las aqui.

> Imagens e demonstração do efeito.
Exemplo


## Solução de problemas

> Depois de recebermos o conteúdo de P&D, podemos registrar aqui os problemas que encontramos ao executar o demo, ajudando os usuários a evitar armadilhas.

## Recursos

- **[Tipo de arquivo]** [Nome do arquivo](链接)
- **[Tipo de arquivo]** [Nome do arquivo](链接)
- **[Tipo de arquivo]** [Nome do arquivo](链接)

<!-- ## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p> -->

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


## Apêndice

### Tabela HTML

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th colspan="4">Cabeçalho do botão</th>
		</tr>
		<tr>
			<td rowspan="6"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center">1</td>
			<td align="center">PWR BTN</td>
			<td align="center">7</td>
			<td align="center">AUTO ON</td>
		</tr>
		<tr>
			<td align="center">2</td>
			<td align="center">GND</td>
			<td align="center">8</td>
			<td align="center">DIS</td>
		</tr>
		<tr>
			<td align="center">3</td>
			<td align="center">FC REC</td>
			<td align="center">9</td>
			<td align="center">UART TXD</td>
		</tr>
		<tr>
			<td align="center">4</td>
			<td align="center">GND</td>
			<td align="center">10</td>
			<td align="center">UART RXD</td>
		</tr>
		<tr>
			<td align="center">5</td>
			<td align="center">SYS RET</td>
			<td align="center">11</td>
			<td align="center">LED +</td>
		</tr>
		<tr>
			<td align="center">6</td>
			<td align="center">GND</td>
			<td align="center">12</td>
			<td align="center">LED -</td>
		</tr>
	</table>
</div>

### Comentários

<!--这是注释-->

### Hyperlink de tabela HTML

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

### Hyperlink de texto em tabela HTML

<a href="购买链接" target="_blank"><b>ADQUIRA AGORA</b></a>


### Âncoras

<span id="jump1">Placeholders</span>

[**Introdução -- Notas especiais sobre a linha de comando -- Placeholders**](#jump1)

### Destaque de cor do texto

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

O parágrafo acima deve ser colocado no início do Wiki que precisa ser destacado.

<Highlight color="#25c2a0">Verde do Docusaurus</Highlight> e <Highlight color="#1877F2">Azul do Facebook</Highlight> são minhas cores favoritas.


<span style={{backgroundColor: 'red'}}>Foo</span>

## Abas

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Maçã" default>
    Isto é uma maçã 🍎
  </TabItem>
  <TabItem value="orange" label="Laranja">
    Isto é uma laranja 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    Isto é uma banana 🍌
  </TabItem>
</Tabs>

### Janela em colunas

<Tabs>
<TabItem value="Windows" label="Windows">

</TabItem>

<TabItem value="MacOS" label="MacOS">

</TabItem>

<TabItem value="Linux" label="Linux">

</TabItem>

</Tabs>

## Avisos e dicas

:::note

Algum **conteúdo** com sintaxe _Markdown_ `syntax`. Confira [esta `api`](#).

:::


:::tip

Algum **conteúdo** com sintaxe _Markdown_ `syntax`. Confira [esta `api`](#).

:::


:::info

Algum **conteúdo** com sintaxe _Markdown_ `syntax`. Confira [esta `api`](#).

:::


:::caution

Algum **conteúdo** com sintaxe _Markdown_ `syntax`. Confira [esta `api`](#).

:::


:::danger

Algum **conteúdo** com sintaxe _Markdown_ `syntax`. Confira [esta `api`](#).

:::

## Inserir vídeo

<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>








## Texto recolhível

<details>

<summary>Clique aqui para visualizar o código completo</summary>

</details>


## Visualização online de esquemático

<div className="altium-ecad-viewer" data-project-src="RAR格式的压缩包URL" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Saiba mais

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_WiFi_Usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div>

## Tabela sem bordas

<tr class="form_without_frame">
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>

## Tabela sem cor de fundo

<div class="table-center">
	<table align="center">
    	<tr class="table-trnobg">
			<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
      		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
      		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div></td>
		</tr>
	</table>
</div>








