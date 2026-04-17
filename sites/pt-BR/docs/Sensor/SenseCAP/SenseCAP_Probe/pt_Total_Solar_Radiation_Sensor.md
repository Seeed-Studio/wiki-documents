---
description: Sensor de Radiação Solar Total
title: Sensor de Radiação Solar Total
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /total_solar_radiation_sensor
last_update:
  date: 4/23/2025
  author: Leo
createdAt: '2025-04-24'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/total_solar_radiation_sensor/
---

# Sensor de Radiação Solar Total

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

O Sensor de Radiação Solar Total RS485 IP68 mede, em tempo real, a radiação solar total de 300 a 1100 nanômetros. Ele é ideal para monitoramento ambiental e agricultura. Combine-o com o SenseCAP Sensor Hub 4G Data Logger ou SenseCAP S2100 LoRaWAN® Data Logger para uma coleta e gestão de dados perfeita.

## Atualizável para Sensores Industriais

Com o [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, você pode facilmente transformar este sensor em um sensor LoRaWAN®. A Seeed não só auxilia você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition).

## Uso com S2100 LoRaWAN Data Logger

Nesta página, vamos guiá-lo pelo processo de conexão do S2100 LoRaWAN Data Logger com um Sensor de Radiação Solar Total, permitindo que você crie um sensor sem fio LoRaWAN robusto, de nível industrial, que pode ser usado comercialmente em apenas cinco minutos.

### Preparação de Hardware

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>Sensor de Radiação Solar Total</th>
    <th>Chave de fenda Phillips</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**Data logger**: É um conversor LoRaWAN que converte sensores MODBUS RS485/Analógico/GPIO em sensores compatíveis com LoRa e, portanto, transfere dados por meio do protocolo LoRaWAN.

**Sensor de Radiação Solar Total**: O sensor de radiação solar total utiliza um fotodetector de silício que gera um sinal de corrente proporcional à intensidade da luz incidente quando irradiado e pode fornecer diretamente um valor medido em W/㎡.

**Chave de fenda Phillips**: Usada para montar a sonda do sensor.

**Gateway**: O sensor LoRaWAN transmite dados para um gateway LoRaWAN, que então os transmite para o servidor em nuvem. Se você não tiver um gateway, há duas opções:

- Opção 1: Sensores funcionando em áreas cobertas pela Helium Network (verifique no [Helium Explorer](https://explorer.helium.com/)). Onde quer que a rede Helium esteja disponível, você pode usar sensores para transferir dados sem comprar um gateway.
- Opção 2: Comprar um [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

**Baixe o SenseCAP Mate App para configuração:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

A preparação está concluída. Vamos começar!

### 2. Arquitetura de Rede

Vamos começar com a rede LoRaWAN.
O data logger converte os dados do sensor em dados LoRa e faz o upload dos dados para o gateway. O gateway faz o upload dos dados para o servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### Conectar o Sensor de Radiação Solar Total ao SenseCAP Data Logger

- **Passo 1:** Desaperte os três parafusos no data logger

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Passo 2:** Remova a tampa inferior e puxe a PCBA interna até que os terminais de parafuso fiquem acessíveis. Você não precisa retirar toda a placa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Passo 3:** Remova a tampa roscada desparafusando no sentido horário anti-horário

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Passo 4:** Passe o cabo incluído pela tampa roscada e pela tampa inferior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Passo 5:** Conecte os fios do cabo ao terminal de parafuso da seguinte forma

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Dicas**: Se você estiver usando outro protocolo, como 4-20mA, consulte a tabela de pinos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

Sequência de fios do Sensor de Radiação Solar Total. O conector à prova d'água está incluído por padrão; para conectar ao S2100, você precisa cortar o conector:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **Passo 6:** Coloque novamente a unidade de hardware dentro do gabinete, feche-a pela tampa inferior e parafuse de volta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Passo 7:** Aperte a tampa roscada e fixe o cabo no lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Quando todas as conexões entre o Sensor de Radiação Solar Total e o Data Logger estiverem concluídas, ele deverá ficar como mostrado abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### Configurar Parâmetros para Comunicação RS485

**Passo 1:** Selecione **S2100 Data Logger** e clique em **Setup** na página de configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**Passo 2:** Pressione o botão e segure por **3** segundos; o LED verde piscará em frequência de 1s. Em seguida, clique em **Scan** para iniciar a varredura do Bluetooth do data logger.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**Passo 3:** Configure os parâmetros LoRaWAN e do sensor (incluindo o comando RS485 Modbus-RTU).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### Como importar o template

**Passo 1:** Clique no link a seguir e escolha seu navegador para fazer o download.[Total Solar Radiation Sensor](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**Passo 2:** Toque em "➕" no canto superior direito, selecione "import Template", em seguida selecione o arquivo baixado, e o template será importado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**Passo 3:** Clique em Send e teste o sensor clicando em **Measure**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

A radiação solar total do sensor foi obtida com sucesso!

## Recursos

- **[PDF]** [Manual do Usuário do Sensor de Radiação Solar Total](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [Guia do Usuário do SenseCAP S2100 Data Logger](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
