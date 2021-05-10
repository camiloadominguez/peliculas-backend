
# PASOS RASPBERRY PI 4

- Instalar Raspbian Buster Lite 

https://www.raspberrypi.org/downloads/raspbian/ 

1 Copiar NetBeansProjects 

2 Habilitar ssh en la raspberry 

    ``sudo systemctl enable ssh``

3 Instalar wvdial para permitir la ejecución de las rutinas del modem (Quectel EC25):  

    ``$sudo apt-get install wvdial``

  - Verificar que el hardware USB este correctamente instalado y conectado 

    ``$lsusb -v -d 12d1:1506 [marca:dir_hardware]`` 

    El archivo de configuración /etc/wvdial.conf debe quedar con las configuraciones de los proveedores 

<img src="https://github.com/INSSATECH/Especificacion-tramas-Inssa-CS/blob/main/logo.png" alt="logo_inssa.png">

Instalar mariadb en la raspberry 

``sudo apt-get install libmariadb-dev``  

(Esta librería se instala si se va a correr el proyecto ICS_4G_TLM_TLPI) 

Instalar libudev en la raspberry 

``sudo apt-get update``

``sudo apt-get install libudev-dev``

Instalar libcurl 

``sudo apt-get install libcurl4-openssl-dev``

Instalar libxml2-dev 

``sudo apt-get install libxml2-dev``

Esto para correr el ICS_4G_TLM_TLPI 
