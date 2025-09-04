---
description: Elevate your IoT projects with FTP and 4G. Learn how to securely transfer files, automate tasks, and monitor remote devices using your Raspberry Pi 4G HAT.

title: Connect and Transfer- FTP on Your Raspberry Pi 4G LTE HAT 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - FTP
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ftp_with_raspberry_pi_4g_lte_hat
last_update:
  date: 12/17/2024
  author: Kasun Thushara
---

## Introduction

FTP is useful for Raspberry Pi 4G LTE HAT applications, enabling reliable file transfers between embedded systems and remote servers. It simplifies **managing logs, configurations, or data files** in IoT and M2M communication setups. With its compatibility and straightforward commands, FTP ensures efficient integration for connected projects.

## Prerequisites

### Hardware Requirements

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

### Software Requirements

If you have not installed relevant drivers and communication tools, please check the [guide](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation) first:

### Additional Requirements

You will need a pre-configured FTP server with the following details:

- **Host**: For example, https://ftp.drivehq.com or a FileZilla Server.
- **Port**: 21.
- **Username and Password**: Credentials required for authentication.

## AT Command Reference

### Setting Up Network Context

Before starting FTP operations, configure the PDP context for network connectivity.

| **Command**                        | **Description**                                                           |
|------------------------------------|---------------------------------------------------------------------------|
| `AT+QICSGP=1,1,"apn_name","","",1` | Set PDP context for the FTP connection. Replace `apn_name` with your operator's APN. |
| `AT+QIACT=1`                       | Activate the PDP context.                                                 |
| `AT+QIACT?`                        | Verify PDP context activation.                                            |

---

### FTP Configuration

Configure the FTP session with necessary parameters.

| **Command**                                  | **Description**                                        |
|----------------------------------------------|--------------------------------------------------------|
| `AT+QFTPCFG="contextid",1`                   | Link the FTP connection to PDP context 1.             |
| `AT+QFTPCFG="account","username","password"` | Set FTP account credentials. Replace `username` and `password` with your FTP details. |
| `AT+QFTPCFG="filetype",1`                    | Set file type (1 for binary, 0 for ASCII).            |
| `AT+QFTPCFG="transmode",1`                   | Set transfer mode (1 for passive, 0 for active).      |
| `AT+QFTPCFG="rsptimeout",90`                 | Set the FTP response timeout (90 seconds).            |

### Opening an FTP Session

Connect to the FTP server and navigate directories.

| **Command**                           | **Description**                                   |
|---------------------------------------|---------------------------------------------------|
| `AT+QFTPOPEN="ftp.drivehq.com",21`    | Connect to the FTP server. Replace `ftp.drivehq.com` with your server address. |
| `AT+QFTPCWD="/"`                      | Change to the root directory.                    |
| `AT+QFTPLIST="."`                     | List files and directories in the current path.  |

---

### File Operations

There are a couple of ways to send and receive files: via USB COM port, RAM, or UFS.

| **Command**                          | **Description**                                      |
|--------------------------------------|------------------------------------------------------|
| `AT+QFTPPUT="file_name","COM:",0`    | Upload a file. Replace `file_name` with the desired name for the file on the server. |
| `AT+QFTPGET="file_name","COM:"`      | Download a file. Replace `file_name` with the file to retrieve from the server. |
| `AT+QFTPLEN`                         | Check the length of the last file uploaded.         |
| `AT+QFTPSIZE="file_name"`            | Get the size of a specific file. Replace `file_name` with the target file's name. |

### Closing the FTP Session

End the FTP session and deactivate the PDP context.

| **Command**         | **Description**                               |
|---------------------|-----------------------------------------------|
| `AT+QFTPCLOSE`      | Close the FTP session.                       |
| `AT+QIDEACT=1`      | Deactivate the PDP context.                  |

---

## Example Workflow

If you're using Windows, open the **WinCOM** tool. For Raspberry Pi, launch **Minicom** by running the following command:

```bash
sudo minicom -D /dev/ttyUSB2
```

### Step-by-Step

1. **Setup Network Context**:

```bash
    AT+QICSGP=1,1,"dialogbb","","",1
    AT+QIACT=1
    AT+QIACT?
 ```

2. **Configure FTP**:

```bash
    AT+QFTPCFG="contextid",1
    AT+QFTPCFG="account","your_username","your_password"
    AT+QFTPCFG="filetype",1
    AT+QFTPCFG="transmode",1
    AT+QFTPCFG="rsptimeout",90
```

3. **Connect to FTP Server**:

```bash
    AT+QFTPOPEN="ftp.drivehq.com",21
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp1.PNG"
    style={{ width: 500}}
  />
</div>

4. **Navigate Directories**:

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

5. **Upload File**:

```bash
    AT+QFTPPUT="test_my2.txt","COM:",0
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/upload_ftp.PNG"
    style={{ width: 600}}
  />
</div>

6. **Download File**:

```bash
    AT+QFTPGET="test_my2.txt","COM:"
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/download_ftp.PNG"
    style={{ width: 500}}
  />
</div>

7. **Close FTP Session**:

```bash
    AT+QFTPCLOSE
    AT+QIDEACT=1
```

---

## Resources

We highly recommend reviewing the Quectel TCP guide for this module, as it covers advanced topics. This guide can help you tailor your IoT project to meet specific requirements.

- **[Web Page]** [FTP Application Guide](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_ftps_application_note_v1-3/)
  
## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
