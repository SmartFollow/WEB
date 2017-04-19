# SmartFollow - API

## Git workflow

1. Do not push on `master`
2. "main" branch is `dev`
3. Create a new `feature` branch for each new feature development
4. Do not merge `feature` branches with `dev`, create a pull request from `feature` branch to `dev`

## Installation

1. Install node.js from [https://nodejs.org/](https://nodejs.org/)
2. Open a console and type: `npm install`
3. Followed by: `bower install`
4. Create a local virtual host
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
7. Restart your server.
8. Edit `\app\scripts\controllers\oauth.js` and change baseUrl, clientId and clientSecret
	```baseUrl: "http://smartfollow.api/",
    clientId: "2",
    clientSecret: "YXVobXmgaz6xl0YWAkpw2t7MWT59IftlwUbk0Uis"```
9. Go to [http://smartfollow.web/](http://smartfollow.web/)