const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'ef56c689-3237-46bc-8d90-bb655b614516'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
