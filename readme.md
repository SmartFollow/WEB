# SmartFollow - Web Client

[![Creative Commons Attribution - NonCommercial - NoDerivatives 4.0 International license](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This software is distributed under the Creative Commons Attribution - Non Commercial - No Derivatives 4.0 International license

## Git workflow

1. Do not push on `master`
2. "main" branch is `dev`
3. Create a new `feature` branch for each new feature development
4. Do not merge `feature` branches with `dev`, create a pull request from `feature` branch to `dev`

## Installation

1. Create a local virtual host
 * Go to `C:\wamp\bin\apache\Apache2.2.17\conf\`
	open `httpd.conf` file and change
	`#Include conf/extra/httpd-vhosts.conf`
	to
	`Include conf/extra/httpd-vhosts.conf`

 * Go to `C:\wamp\bin\apache\Apache2.2.17\conf\extra` and open `httpd-vhosts.conf` file and add the following code
	```sh
	<VirtualHost smartfollow.web:80>
	    DocumentRoot "C:/wamp/www/web/"
	    ServerName smartfollow.web
	    ServerAlias smartfollow.web
	    <Directory "C:/wamp/www/web/">
	        Order allow,deny
	        Allow from all
	    </Directory>
	</VirtualHost>
	```

 * change `C:/wamp/www/web/` as per your requirements.

 * Open hosts file in `C:/Windows/System32/drivers/etc/` and add the following line ( Don't delete anything ) 
	`127.0.0.1 smartfollow.web`

2. Restart your server.
3. (optional) Edit the configuration file of the website `\app\scripts\constant\config.js` and change apiUrl, clientId and clientSecret
	```
	apiUrl: "http://api.dev.smartfollow.org/",
	clientId: "2",
	clientSecret: "IT1tAxoBLlzOJeE5gOoNqq2LOZws1EV5rfc7tZW2"
    ```
4. Go to [http://smartfollow.web/](http://smartfollow.web/)
