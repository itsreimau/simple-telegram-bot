module.exports = {
    apps: [{
        name: "telegraf-bot-starter",
        script: "./index.js",

        // watch: true,
        // ignore_watch: ["database.json", "node_modules", "state"],

        cron_restart: "*/30 * * * *"
    }]
};