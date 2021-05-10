
# PASOS RASPBERRY PI 4

## **1 Instalar Raspbian Buster Lite**

https://www.raspberrypi.org/downloads/raspbian/ 

## **2 Copiar NetBeansProjects**

## **3 Habilitar ssh en la raspberry**

``sudo systemctl enable ssh``

## **4 Instalar wvdial para permitir la ejecución de las rutinas del modem (Quectel EC25):**

``$sudo apt-get install wvdial``

- Verificar que el hardware USB este correctamente instalado y conectado 

``$lsusb -v -d 12d1:1506 [marca:dir_hardware]`` 

- El archivo de configuración /etc/wvdial.conf debe quedar con las configuraciones de los proveedores 

<img src="https://github.com/camiloadominguez/peliculas-backend/blob/master/img/configuracionProveedores.png" alt="logo_inssa.png">

## **5 Instalar mariadb en la raspberry**

``sudo apt-get install libmariadb-dev``  

> Esta librería se instala si se va a correr el proyecto ICS_4G_TLM_TLPI 

## **6 Instalar libudev en la raspberry**

``sudo apt-get update``

``sudo apt-get install libudev-dev``

## **7 Instalar libcurl**

``sudo apt-get install libcurl4-openssl-dev``

## **8 Instalar libxml2-dev**

``sudo apt-get install libxml2-dev``

## **9 Correr el ICS_4G_TLM_TLPI**

- Asignar permisos

``Chmod 777 a la carpeta /usr/local/lib`` 

- Copiar las lib de /usr/local/lib 

```sh
libPCLService.so 

libPclUtilities.so
```

- Instalar la librería de libssl.so.1.0.0 porque libPCLServices.so la necesita 

> La librería libssl.so.1.0.0 se descarga el deb en windows y en la raspberry se ejecuta el .deb asi 

``sudo dpkg -i libssl1.0.0_1.0.1t-1+deb8u12_armhf.deb ``

> Descargar en home/pi e instalar desde ese mismo directorio

> Para correr el firmware nuevo ICS_5G_TLM_TLPI no son necesarias estas librerías
