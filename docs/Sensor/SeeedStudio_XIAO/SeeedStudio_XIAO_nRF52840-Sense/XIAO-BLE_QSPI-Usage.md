---
description: This article describes how to use the QSPI Flash on the XIAO nRF52840 Sense.
title: The QSPI Flash Usage on Seeed Studio XIAO nRF52840 Sense
keywords:
- QSPI Flash
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-ble-qspi-flash-usage
last_update:
  date: 05/12/2023
  author: MengDu
---

# The QSPI Flash Usage on Seeed Studio XIAO nRF52840 Sense

:::tip
Special thanks to community users **JM_Laird** and **Haakonish** for their support and help with this tutorial! The program used in this article was sourced from Github user **PMCheetham** and the source can be found **[HERE](https://github.com/PMCheetham/SEEED_nRF52840_QSPI/tree/main)**.
:::


Welcome to this tutorial on using QSPI Flash on XIAO nRF52840 and XIAO nRF52840 Sense! XIAO is a powerful and compact board that features 256 KB RAM, 1 MB Flash, and 2 MB onboard Flash. In this tutorial, you will learn how to utilize the QSPI Flash on XIAO boards, which can greatly expand the storage capacity and speed up your projects. Let's get started!

The following is a sample program provided by PMCheetham that works well with the XIAO nRF52840 Sense. With the following program you can freely use the QSPI Flash on the XIAO.

```cpp
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "nrfx_qspi.h"
#include "app_util_platform.h"
#include "nrf_log.h"
#include "nrf_log_ctrl.h"
#include "nrf_log_default_backends.h"
#include "sdk_config.h"
#include "nrf_delay.h"
#include "avr/interrupt.h"

/* 
 * Strange parts of this code ... Or things I don't understand
 * 
 * After the first READ in Setup() it successfully reads the data (Returns 0 = NRFX_SUCCESS), but the status flag
 * has the top 8 bits set to 0xFF which causes nrfx_qspi_mem_busy_check() to show 17 (Returns 17 = NRFX_ERROR_BUSY). 
 * However masking the STATUS register with 8 reveals the Ready Status = 1, QSPI is ready!
 * This was why I wrote the QSPI_IsReady().
 * 
 * nrf_qspi_phy_conf_t not visible as a structure if you try and set it like this :
 *   QSPIConfig.phy_if {
 *     .xxx = yyy,
 *     .aaa = bbb
 *   };
 *   
 * I don't know what the significance of the 48ms Deep Power-down Mode (DPM) is. 
 * Will it go into DPM if not used for 48ms and then take 48ms to wake up if instructed?
 * 
 * Hope you enjoy this little snippet of code!  Feel free to butcher and use it.
 * Thanks to JM_Laird and Haakonish in Case ID: 224515.
 * And, yes, I could have made it neater, but really need to add some of the bits into a project and tidy them up there!
 */

// QSPI Settings
#define QSPI_STD_CMD_WRSR   0x01
#define QSPI_STD_CMD_RSTEN  0x66
#define QSPI_STD_CMD_RST    0x99
#define QSPI_DPM_ENTER      0x0003 // 3 x 256 x 62.5ns = 48ms
#define QSPI_DPM_EXIT       0x0003

static uint32_t               *QSPI_Status_Ptr = (uint32_t*) 0x40029604;  // Setup for the SEEED XIAO BLE - nRF52840
static nrfx_qspi_config_t     QSPIConfig;
static nrf_qspi_cinstr_conf_t QSPICinstr_cfg;
static const uint32_t         MemToUse = 64 * 1024;  // Alter this to create larger read writes, 64Kb is the size of the Erase
static bool                   Debug_On = true;
static uint16_t               pBuf[MemToUse / 2] = {0};  // 16bit used as that is what this memory is going to be used for
static uint32_t               *BufMem = (uint32_t*) &pBuf;
static bool                   QSPIWait = false;
// QSPI Settings Complete

static void qspi_handler(nrfx_qspi_evt_t event, void *p_context) {
  // UNUSED_PARAMETER(p_context);
  // Serial.println("QSPI Interrupt");
  // if (event == NRFX_QSPI_EVENT_DONE) {
  //   QSPI_HasFinished = true;
  // }
}

static void QSPI_Status(char ASender[]) { // Prints the QSPI Status
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI is busy/idle ... Result = ");
  Serial.println(nrfx_qspi_mem_busy_check() & 8);
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI Status flag = 0x");
  Serial.print(NRF_QSPI->STATUS, HEX);
  Serial.print(" (from NRF_QSPI) or 0x");
  Serial.print(*QSPI_Status_Ptr, HEX);
  Serial.println(" (from *QSPI_Status_Ptr)");
}

static void QSPI_PrintData(uint16_t *AnAddress, uint32_t AnAmount) {
  uint32_t i;

  Serial.print("Data :"); 
  for (i = 0; i < AnAmount; i++) {
    Serial.print(" 0x");
    Serial.print(*(AnAddress + i), HEX);
  }
  Serial.println("");
}

static nrfx_err_t QSPI_IsReady() {
  if (((*QSPI_Status_Ptr & 8) == 8) && (*QSPI_Status_Ptr & 0x01000000) == 0) {
    return NRFX_SUCCESS;  
  } else {
   return NRFX_ERROR_BUSY; 
  }
}

static nrfx_err_t QSPI_WaitForReady() {
  while (QSPI_IsReady() == NRFX_ERROR_BUSY) {
    if (Debug_On) {
      Serial.print("*QSPI_Status_Ptr & 8 = ");
      Serial.print(*QSPI_Status_Ptr & 8);
      Serial.print(", *QSPI_Status_Ptr & 0x01000000 = 0x");
      Serial.println(*QSPI_Status_Ptr & 0x01000000, HEX);
      QSPI_Status("QSPI_WaitForReady");
    }   
  }
  return NRFX_SUCCESS;
}

static nrfx_err_t QSPI_Initialise() { // Initialises the QSPI and NRF LOG
  uint32_t Error_Code;

  NRF_LOG_INIT(NULL); // Initialise the NRF Log
  NRF_LOG_DEFAULT_BACKENDS_INIT();
  // QSPI Config
  QSPIConfig.xip_offset = NRFX_QSPI_CONFIG_XIP_OFFSET;                       
  QSPIConfig.pins = { // Setup for the SEEED XIAO BLE - nRF52840                                                     
   .sck_pin     = 21,                                
   .csn_pin     = 25,                                
   .io0_pin     = 20,                                
   .io1_pin     = 24,                                
   .io2_pin     = 22,                                
   .io3_pin     = 23,                                
  };                                                                  
  QSPIConfig.irq_priority = (uint8_t)NRFX_QSPI_CONFIG_IRQ_PRIORITY;           
  QSPIConfig.prot_if = {                                                        
    // .readoc     = (nrf_qspi_readoc_t)NRFX_QSPI_CONFIG_READOC,
    .readoc     = (nrf_qspi_readoc_t)NRF_QSPI_READOC_READ4O,       
    // .writeoc    = (nrf_qspi_writeoc_t)NRFX_QSPI_CONFIG_WRITEOC,     
    .writeoc    = (nrf_qspi_writeoc_t)NRF_QSPI_WRITEOC_PP4O,
    .addrmode   = (nrf_qspi_addrmode_t)NRFX_QSPI_CONFIG_ADDRMODE,   
    .dpmconfig  = false,                                            
  };                   
  QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRF_QSPI_FREQ_32MDIV1;  // I had to do it this way as it complained about nrf_qspi_phy_conf_t not being visible                                        
  // QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRFX_QSPI_CONFIG_FREQUENCY; 
  QSPIConfig.phy_if.spi_mode   = (nrf_qspi_spi_mode_t)NRFX_QSPI_CONFIG_MODE;
  QSPIConfig.phy_if.dpmen      = false;
  // QSPI Config Complete
  // Setup QSPI to allow for DPM but with it turned off
  QSPIConfig.prot_if.dpmconfig = true;
  NRF_QSPI->DPMDUR = (QSPI_DPM_ENTER << 16) | QSPI_DPM_EXIT; // Found this on the Nordic Q&A pages, Sets the Deep power-down mode timer
  Error_Code = 1;
  while (Error_Code != 0) {
    Error_Code = nrfx_qspi_init(&QSPIConfig, NULL, NULL);
    if (Error_Code != NRFX_SUCCESS) {
      if (Debug_On) {
        Serial.print("(QSPI_Initialise) nrfx_qspi_init returned : ");
        Serial.println(Error_Code);
      }
    } else {
      if (Debug_On) {
        Serial.println("(QSPI_Initialise) nrfx_qspi_init successful");
      }
    }
  }
  QSPI_Status("QSPI_Initialise (Before QSIP_Configure_Memory)");
  QSIP_Configure_Memory();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) Wait for QSPI to be ready ...");
  }
  NRF_QSPI->TASKS_ACTIVATE = 1;
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) QSPI is ready");
  }
  return QSPI_IsReady(); 
}

static void QSPI_Erase(uint32_t AStartAddress) {
  uint32_t   TimeTaken;
  bool       QSPIReady = false;
  bool       AlreadyPrinted = false;

  if (Debug_On) {
    Serial.println("(QSPI_Erase) Erasing memory");
  }
  while (!QSPIReady) {
    if (QSPI_IsReady() != NRFX_SUCCESS) {
      if (!AlreadyPrinted) {
        QSPI_Status("QSPI_Erase (Waiting)");
        AlreadyPrinted = true;
      }
    } else {
      QSPIReady = true;
      QSPI_Status("QSPI_Erase (Waiting Loop Breakout)");
    }
  }
  if (Debug_On) {
    QSPI_Status("QSPI_Erase (Finished Waiting)");
    TimeTaken = millis();
  }
  if (nrfx_qspi_erase(NRF_QSPI_ERASE_LEN_64KB, AStartAddress) != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.print("(QSPI_Initialise_Page) QSPI Address 0x");
      Serial.print(AStartAddress, HEX);
      Serial.println(" failed to erase!");
    }
  } else {     
    if (Debug_On) {
      TimeTaken = millis() - TimeTaken;
      Serial.print("(QSPI_Initialise_Page) QSPI took ");
      Serial.print(TimeTaken);
      Serial.println("ms to erase a 64Kb page");
    }
  }
}

static void QSIP_Configure_Memory() {
  // uint8_t  temporary = 0x40;
  uint8_t  temporary[] = {0x00, 0x02};
  uint32_t Error_Code;
  
  QSPICinstr_cfg = {
    .opcode    = QSPI_STD_CMD_RSTEN,
    .length    = NRF_QSPI_CINSTR_LEN_1B,
    .io2_level = true,
    .io3_level = true,
    .wipwait   = QSPIWait,
    .wren      = true
  };
  QSPI_WaitForReady();
  if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // Send reset enable
    if (Debug_On) {
      Serial.println("(QSIP_Configure_Memory) QSPI 'Send reset enable' failed!");
    }
  } else {
    QSPICinstr_cfg.opcode = QSPI_STD_CMD_RST;
    QSPI_WaitForReady();
    if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // Send reset command
      if (Debug_On) {
        Serial.println("(QSIP_Configure_Memory) QSPI Reset failed!");
      }
    } else {
      QSPICinstr_cfg.opcode = QSPI_STD_CMD_WRSR;
      QSPICinstr_cfg.length = NRF_QSPI_CINSTR_LEN_3B;
      QSPI_WaitForReady();
      if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, &temporary, NULL) != NRFX_SUCCESS) { // Switch to qspi mode
        if (Debug_On) {
          Serial.println("(QSIP_Configure_Memory) QSPI failed to switch to QSPI mode!");
        }
      } else {
          QSPI_Status("QSIP_Configure_Memory");
      }
    }
  }
}

void setup() {
  uint32_t Error_Code;
  uint32_t TimeTaken;
  uint16_t i;

  delay(10000);
  Serial.begin(9600);
  while (!Serial) {}

  if (Debug_On) {
    Serial.println("(Setup) QSPI Initialising ...");
  }
  if (QSPI_Initialise() != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.println("(Setup) QSPI Memory failed to start!");
    }
  } else {
    if (Debug_On) {
      Serial.println("(Setup) QSPI initialised and ready");
      QSPI_Status("Setup (After initialise)");
    }
  }

  if (Debug_On) {
    Serial.print("(Setup) QSPI is about to be read and then erased. Current busy state is = ");
    Serial.println(QSPI_IsReady());
  }

  // QSPI Speed Test
  if (Debug_On) {
    QSPI_Status("Setup (Before read)");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI took ");
    Serial.print(TimeTaken);
    Serial.print("ms to read ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... Read result = ");
    Serial.println(Error_Code);
    QSPI_Status("Setup (After read)");
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  if (Debug_On) {
    Serial.println("QSPI Erasing 64Kb of memory");
  }
  QSPI_Erase(0); 
  if (Debug_On) {
    Serial.println("(Setup) QSPI read after erase");
    TimeTaken = millis();
  }
  QSPI_WaitForReady();
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI took ");
    Serial.print(TimeTaken);
    Serial.print("ms to read ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... Read result = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  for (i = 0; i < MemToUse / 2; i++) {
    pBuf[i] = i * 2;
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) Just before QSPI write");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_write(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI took ");
    Serial.print(TimeTaken);
    Serial.print("ms to write ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... Write result = ");
    Serial.println(Error_Code);
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) Just before QSPI read");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI took ");
    Serial.print(TimeTaken);
    Serial.print("ms to read ");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb ... Read result = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  QSPI_WaitForReady();
  QSPI_Status("Setup");
  // QSPI Speed Test Complete
}

void loop() {
  delay(10000);
}
```

The program is only available for **mbed** boards, so please select the XIAO nRF52840 under the mbed tab when compiling and uploading.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={800} height="auto" /></p>


## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

