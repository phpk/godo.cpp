package main

import (
	"os"

	"github.com/phpk/godo.cpp/cmd"
	"github.com/urfave/cli/v2"
)

// Usage: go build -ldflags "-X main.VERSION=x.x.x"
var VERSION = "v1.0.0"

// @title godo.cpp
// @version v1.0.0
// @description All packages in llama.cpp whisper.cpp rwkv.cpp chatglm.cpp stable-diffusion.cpp provide HTTP APIs through Golang.
// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization
// @schemes http https
// @basePath /
func main() {
	app := cli.NewApp()
	app.Name = "godo.cpp"
	app.Version = VERSION
	app.Usage = "All packages in llama.cpp whisper.cpp rwkv.cpp chatglm.cpp stable-diffusion.cpp provide HTTP APIs through Golang."
	app.Commands = []*cli.Command{
		cmd.StartCmd(),
		cmd.StopCmd(),
		cmd.VersionCmd(VERSION),
	}
	err := app.Run(os.Args)
	if err != nil {
		panic(err)
	}
}
