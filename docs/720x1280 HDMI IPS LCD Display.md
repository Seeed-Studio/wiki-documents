## User Guide  
***



### Using with Raspberry Pi 4  

- **Step 1:** Modify `config.txt` file. If you're using Raspberry Pi 4, you can modify it through the following steps:  

If you're using a 7-inch display, just log in to your Raspberry Pi. Copy the parameters shown below and paste them to the end of `/boot/config.txt` file.  

```
hdmi_pixel_freq_limit=400000000 
hdmi_group=2
hdmi_mode=87 
hdmi_force_hotplug=1
config_hdmi_boost=4
disable_overscan=1
hdmi_ignore_edid=0xa5000080
hdmi_timings=720 0 100 24 52 1280 0 10 4 4 0 0 0 60 0 70000000 0 
max_framebuffer_width=1280 
max_framebuffer_height=1280  
framebuffer_width=1280 
framebuffer_height=720
```  

If you're using a 10-inch display, just log in to your Raspberry Pi. Copy the parameters shown below and paste them to the end of `/boot/config.txt` file.  

```
hdmi_pixel_freq_limit=400000000 
hdmi_group=2
hdmi_mode=87 
hdmi_force_hotplug=1
config_hdmi_boost=4
disable_overscan=1
hdmi_ignore_edid=0xa5000080
hdmi_timings=1200 0 100 24 52 1920 0 65 4 25 0 0 0 60 0 169000000 0
max_framebuffer_width=1920
max_framebuffer_height=1920
framebuffer_width=1920
framebuffer_height=1200
```  

- **Step 2:** Reboot it and rotate the screen  

After following the step above, you should see the desktop of Raspberry Pi displayed on your LCD Display.  

If the desktop displays in vertical, just rotate it according to the guide below.  
![](https://raw.githubusercontent.com/SeeedDocument/Raspberry-4-get-start/master/img/Screen-Config.jpg)  



### Using with Raspberry Pi 3/3b+  
Here is the [Raspberry Pi 3 User Guide](https://docs.google.com/viewer?url=https://github.com/SeeedDocument/Pi_screen/raw/master/Instructions_for_use.pdf) .