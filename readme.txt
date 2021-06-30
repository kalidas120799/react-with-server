connect node server in react client file concurrently
##############################################################

concurrently setup in scripts
-----------------------
"client-install": "cd client && npm install",
"start": "node server/index.js",
"server": "nodemon server/index.js",
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""

#######################

npm run server => start node server
npm run dev => start node server and react client same time
