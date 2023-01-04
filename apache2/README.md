## Apache2 Web Server

### Step 1 - Installing
```
sudo su
apt-get update
apt-get install apache2
```

### Step 2 - Checking
```
http://<ip.addr>:<port>/
```
```
systemctl status apache2
```

```
systemctl restart apache2
systemctl reload apache2
systemctl disable apache2
systemctl enable apache2
```
### Configuring
```
cd /etc/apache2/
/etc/apache2/sites-available/000-default.conf
/etc/apache2/port.conf
```

### Reverse Proxy 

```
a2enmod
proxy
proxy_http
```



