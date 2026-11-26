---
title: NFC para Seeed Studio XIAO nRF54L15 Series
description: Use a interface NFC no XIAO nRF54L15 e XIAO nRF54L15 Sense com o nRF Connect SDK.
keywords:
  - xiao
  - nrf54l15
  - nfc
  - ncs
slug: /xiao_nrf54l15_nfc
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_nfc/
---

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a
    className="get_one_now_item"
    href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>
      <span>
        <font color="#FFFFFF" size="4">
          Adquira agora 🖱️
        </font>
      </span>
    </strong>
  </a>
</div>

## Introdução

Near Field Communication (NFC) é uma tecnologia para transferir pequenas quantidades de dados sem fio entre dois dispositivos. Ela usa protocolos muito simples, então se conecta mais rápido do que Bluetooth Low Energy, mas como depende de indução magnética, os dois dispositivos precisam estar muito próximos — a menos de 10 cm — para se conectar. O XIAO nRF54L15 expõe o periférico NFCT integrado do nRF54L15 em dois pinos, permitindo que você use a placa como uma tag NFC que um telefone ou leitor pode aproximar para ler ou gravar. O periférico oferece suporte tanto a tags Tipo 2 quanto Tipo 4: o exemplo de registro de texto abaixo é uma tag de texto somente leitura Tipo 2, enquanto o exemplo gravável de NDEF é uma tag Tipo 4 de leitura/gravação.

Para a referência do protocolo NFC da Nordic, consulte [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html); para a especificação em si, veja a [visão geral das especificações do NFC Forum](https://nfc-forum.org/build/specifications).


## Preparação de hardware

Você precisa de um XIAO nRF54L15 e de uma antena NFC. A placa L15 simples **não possui bobina NFC integrada** — os pinos NFC são roteados apenas para as ilhas N1 e N2 — portanto, é necessária uma antena externa para que qualquer um dos exemplos abaixo possa ser escaneado.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

:::tip
A antena NFC da Nordic não é vendida separadamente no Seeed Studio Bazaar, portanto você precisará comprá-la de outras fontes.
:::


### Solde a antena

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/0.png" style={{width:600, height:'auto'}}/></div>

No XIAO nRF54L15 os pinos NFC são P1.02 e P1.03. Solde sua antena externa às ilhas N1 e N2; a posição delas na placa é mostrada acima.

:::caution
Os pinos NFC não distinguem positivo e negativo. Soldar pontos de teste de passo fino é desafiador — tome precauções de segurança para evitar lesões pessoais e danos ao equipamento, ou use fios voadores em vez disso.
:::

## Software

### Registros de texto NFC (tag de texto somente leitura Tipo 2)

Este exemplo demonstra a leitura de informações de texto via NFC.

1. Dentro da extensão, crie uma rotina em branco e escolha copiar uma rotina existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Digite nfc, selecione o exemplo NFC text Records

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. Selecione o caminho de armazenamento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. Abra o projeto, adicione a configuração do XIAO nRF54L15 na extensão correspondente e compile.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/1.png" alt="Adding the XIAO nRF54L15 board configuration and compiling" style={{width:1000, height:'auto'}}/></div>


5. Abra o terminal e insira o comando `west flash` para gravar o firmware no XIAO nRF54L15.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/2.png" alt="Flashing the XIAO nRF54L15 with west flash" style={{width:1000, height:'auto'}}/></div>


#### Resultado

Selecione um celular com funcionalidade NFC para tentar este experimento.

1. Para visualizar as informações lidas por NFC em mais detalhes, você precisa baixar o aplicativo correspondente ao seu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Coloque a área NFC do seu telefone próxima à antena NFC para ler informações detalhadas de NFC.

As informações de texto exibidas no seu telefone são:

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/10.gif"
    alt="NFC tag read on a phone"
    style={{width: 800, height: 'auto'}}
  />
</div>

### Exemplo de leitura/gravação NFC: mensagem NDEF gravável (tag de leitura/gravação Tipo 4)

Este é o exemplo do Nordic Connect SDK **[writable NDEF message](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)**, compilado para o XIAO nRF54L15. 



1. Obtenha o exemplo a partir do nRF Connect SDK oficial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>




2. Compile o exemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/4.png" alt="Building the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>


3. Grave 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/5.png" alt="Flashing the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>
<br/>


#### Resultado

1. Para inspecionar o conteúdo NFC em detalhes, instale o aplicativo correspondente ao seu telefone.

- iOS: [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Alimente a placa e aproxime a área NFC do seu telefone da antena. O navegador abrirá `http://www.nordicsemi.com`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-4.jpg" style={{width:200, height:'auto'}}/></div>



3. Sobrescreva a tag com sua própria mensagem NDEF usando o NFC Tools (ou equivalente). Como este é um exemplo de leitura/gravação, você pode inserir uma URL diferente sua e aproximar a tag para gravá-la — na próxima vez que você ler a tag, o conteúdo terá mudado.

<div className="table-center">
<table align="center">
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-2.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-5.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-1.jpg" style={{width:200, height:'auto'}}/></div></td>
</tr>
</table>
</div>




## Resumo

NFC pode ser reutilizado em muitos cenários — transferência de dados, wake-up de baixo consumo, pareamento — e o nRF Connect SDK traz exemplos correspondentes para cada um. Você pode estender este exemplo de leitura/gravação para aplicações reais, por exemplo combinando wake-up NFC de baixo consumo com controle de motor para construir uma fechadura inteligente simples. Com a antena soldada e o exemplo em execução, o resto depende das suas próprias ideias e contribuições de volta para a comunidade de código aberto.




## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
