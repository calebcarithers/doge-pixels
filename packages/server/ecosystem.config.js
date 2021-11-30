module.exports = {
  apps : [{
    name   : "dog_server",
    script : "./src/index.js",
    watch: ["src"],
    env_development: {
      NODE_ENV: 'development'
    }
  }],
  deploy: {
    development: {
      user: "nodejs",
      host: "167.172.252.56",
      path: "/home/nodejs/dog",
      repo: "git@github.com:calebcarithers/dog.git",
      ref: "origin/dev",
      "post-deploy": "yarn install --verbose --production --frozen-lockfile && cd /home/nodejs/dog/current/packages/server && yarn dev:start",
      // "post-deploy": "cd /home/nodejs/dog/source && cp -r"
    }
  }
}