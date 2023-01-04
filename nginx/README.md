## NGINX Web Server

### Step 1 - Installing NGINX
```
sudo su
apt-get update
apt-get install nginx
```

### Step 2 - Adjusting Firewall
```
ufw app list
ufw allow 'Nginx HTTP'
ufw status
```

### Step 3 - Checking Web Server
```
systemctl status nginx
```
```
http://<ip_addr>:<port>/
```
```
systemctl stop nginx
systemctl start nginx
systemctl restart nginx
systemctl reload nginx
systemctl disable nginx
systemctl enable nginx
```

### Step 4 - Configuring
```
cd /etc/nginx/
```

### Step 5 - Symlink and Checking
```
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```
