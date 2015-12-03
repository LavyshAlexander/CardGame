server{
	charset		utf-8;
	server_name	cardgame.dev;
	listen		80;
	root		/us/apps/cardgame/app;
	index		index.html;
	
	access_log  off;
	error_log   /us/logs/nginx/cardgame.error.log;
	
	location ~ /\. {
        	access_log      off;
        	log_not_found   off;
        	deny            all;
	}
}
