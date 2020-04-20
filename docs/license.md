---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

---
name: License
nointro:
---

## Documents and Images


<img class="img-left" alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />

This work (product documents, tutorials and associated images) are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"> </a>

## Software Library


All demo software, code examples embedded in the document and any software libraray provided with the product document are licensed under [MIT License](https://files.seeedstudio.com/wiki/common/MIT_LICENSE "MIT LICENSE") unless otherwise specified.

## Thirdparty content


The resources provided with the product documents also contains datasheets, software examples, images and other content copyrighted by 3rd party authors and companies. All such items are copyright of respective owners. The use of such items are governed by their respective licenses. 

All trademarks and logos are the property of their respective owners.

## To Contact

Write to us at <img class="img-left" src="https://files.seeedstudio.com/wiki/common/contact-us.png" /> with subject line "Wiki". Thanks.

Credits
-------

This website is built with <a href="http://www.mkdocs.org">MkDocs</a> using a <a href="https://github.com/snide/sphinx_rtd_theme">theme</a> provided by <a href="https://readthedocs.org">Read the Docs</a>(modified version of the theme).












## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>