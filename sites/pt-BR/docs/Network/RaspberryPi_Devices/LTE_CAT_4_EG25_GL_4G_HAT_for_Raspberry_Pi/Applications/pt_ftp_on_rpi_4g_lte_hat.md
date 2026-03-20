---
description: Eleve seus projetos de IoT com FTP e 4G. Aprenda a transferir arquivos com segurança, automatizar tarefas e monitorar dispositivos remotos usando o seu Raspberry Pi 4G HAT.
title: Conecte e Transfira - FTP no seu Raspberry Pi 4G LTE HAT
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - FTP
  - 4G LTE
  - Computação de Borda
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ftp_with_raspberry_pi_4g_lte_hat
last_update:
  date: 12/17/2024
  author: Kasun Thushara
createdAt: '2024-12-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ftp_with_raspberry_pi_4g_lte_hat/
---

## Introdução

FTP é útil para aplicações com Raspberry Pi 4G LTE HAT, possibilitando transferências de arquivos confiáveis entre sistemas embarcados e servidores remotos. Ele simplifica o **gerenciamento de logs, configurações ou arquivos de dados** em configurações de comunicação IoT e M2M. Com sua compatibilidade e comandos simples, o FTP garante uma integração eficiente para projetos conectados.

## Pré-requisitos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software

Se você ainda não instalou os drivers e ferramentas de comunicação relevantes, consulte primeiro o [guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#software-preparation):

### Requisitos Adicionais

Você precisará de um servidor FTP pré-configurado com os seguintes detalhes:

- **Host**: Por exemplo, https://ftp.drivehq.com ou um servidor FileZilla.
- **Porta**: 21.
- **Nome de usuário e senha**: Credenciais necessárias para autenticação.

## Referência de Comandos AT

### Configurando o Contexto de Rede

Antes de iniciar as operações de FTP, configure o contexto PDP para conectividade de rede.

| **Comando**                        | **Descrição**                                                           |
|------------------------------------|---------------------------------------------------------------------------|
| `AT+QICSGP=1,1,"apn_name","","",1` | Define o contexto PDP para a conexão FTP. Substitua `apn_name` pelo APN da sua operadora. |
| `AT+QIACT=1`                       | Ativa o contexto PDP.                                                 |
| `AT+QIACT?`                        | Verifica a ativação do contexto PDP.                                            |

---

### Configuração de FTP

Configure a sessão FTP com os parâmetros necessários.

| **Comando**                                  | **Descrição**                                        |
|----------------------------------------------|--------------------------------------------------------|
| `AT+QFTPCFG="contextid",1`                   | Vincula a conexão FTP ao contexto PDP 1.             |
| `AT+QFTPCFG="account","username","password"` | Define as credenciais da conta FTP. Substitua `username` e `password` pelos dados do seu FTP. |
| `AT+QFTPCFG="filetype",1`                    | Define o tipo de arquivo (1 para binário, 0 para ASCII).            |
| `AT+QFTPCFG="transmode",1`                   | Define o modo de transferência (1 para passivo, 0 para ativo).      |
| `AT+QFTPCFG="rsptimeout",90`                 | Define o tempo limite de resposta FTP (90 segundos).            |

### Abrindo uma Sessão FTP

Conecte-se ao servidor FTP e navegue pelos diretórios.

| **Comando**                           | **Descrição**                                   |
|---------------------------------------|---------------------------------------------------|
| `AT+QFTPOPEN="ftp.drivehq.com",21`    | Conecta ao servidor FTP. Substitua `ftp.drivehq.com` pelo endereço do seu servidor. |
| `AT+QFTPCWD="/"`                      | Altera para o diretório raiz.                    |
| `AT+QFTPLIST="."`                     | Lista arquivos e diretórios no caminho atual.  |

---

### Operações de Arquivo

Há algumas maneiras de enviar e receber arquivos: via porta USB COM, RAM ou UFS.

| **Comando**                          | **Descrição**                                      |
|--------------------------------------|------------------------------------------------------|
| `AT+QFTPPUT="file_name","COM:",0`    | Faz upload de um arquivo. Substitua `file_name` pelo nome desejado para o arquivo no servidor. |
| `AT+QFTPGET="file_name","COM:"`      | Faz download de um arquivo. Substitua `file_name` pelo arquivo a ser obtido do servidor. |
| `AT+QFTPLEN`                         | Verifica o comprimento do último arquivo enviado.         |
| `AT+QFTPSIZE="file_name"`            | Obtém o tamanho de um arquivo específico. Substitua `file_name` pelo nome do arquivo de destino. |

### Fechando a Sessão FTP

Encerre a sessão FTP e desative o contexto PDP.

| **Comando**         | **Descrição**                               |
|---------------------|-----------------------------------------------|
| `AT+QFTPCLOSE`      | Encerra a sessão FTP.                       |
| `AT+QIDEACT=1`      | Desativa o contexto PDP.                  |

---

## Fluxo de Trabalho de Exemplo

Se você estiver usando Windows, abra a ferramenta **WinCOM**. Para Raspberry Pi, inicie o **Minicom** executando o seguinte comando:

```bash
sudo minicom -D /dev/ttyUSB2
```

### Passo a Passo

1. **Configurar Contexto de Rede**:

```bash
    AT+QICSGP=1,1,"dialogbb","","",1
    AT+QIACT=1
    AT+QIACT?
 ```

2. **Configurar FTP**:

```bash
    AT+QFTPCFG="contextid",1
    AT+QFTPCFG="account","your_username","your_password"
    AT+QFTPCFG="filetype",1
    AT+QFTPCFG="transmode",1
    AT+QFTPCFG="rsptimeout",90
```

3. **Conectar ao Servidor FTP**:

```bash
    AT+QFTPOPEN="ftp.drivehq.com",21
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp1.PNG"
    style={{ width: 500}}
  />
</div>

4. **Navegar pelos Diretórios**:

```bash
    AT+QFTPCWD="/"
    AT+QFTPLIST="."
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp2.PNG"
    style={{ width: 500}}
  />
</div>

5. **Fazer Upload de Arquivo**:

```bash
    AT+QFTPPUT="test_my2.txt","COM:",0
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/upload_ftp.PNG"
    style={{ width: 600}}
  />
</div>

6. **Fazer Download de Arquivo**:

```bash
    AT+QFTPGET="test_my2.txt","COM:"
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/download_ftp.PNG"
    style={{ width: 500}}
  />
</div>

7. **Fechar Sessão FTP**:

```bash
    AT+QFTPCLOSE
    AT+QIDEACT=1
```

---

## Recursos

Recomendamos fortemente revisar o guia TCP da Quectel para este módulo, pois ele aborda tópicos avançados. Esse guia pode ajudar você a adaptar seu projeto de IoT para atender a requisitos específicos.

- **[Página da Web]** [Guia de Aplicação FTP](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_ftps_application_note_v1-3/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
