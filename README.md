# godo.cpp

> All packages in llama.cpp whisper.cpp rwkv.cpp chatglm.cpp stable-diffusion.cpp provide HTTP APIs through Golang.

## Quick Start

### init git
```
git clone https://github.com/phpk/godo.cpp.git
git submodule update --init --recursive
```

```bash
cd service
make start
```

## Build

```bash
make build
```

## Generate wire inject files

```bash
make wire
```

## Generate swagger documents

```bash
make swagger
```

# llama.cpp
https://github.com/ggerganov/llama.cpp

-> llama.cpp use ollama libs
```
cd service/cpps/ollama
go generate ./...
```

# whisper.cpp
https://github.com/ggerganov/whisper.cpp

# stable-diffusion.cpp
https://github.com/leejet/stable-diffusion.cpp

# rwkv.cpp
https://github.com/RWKV/rwkv.cpp

# chatglm.cpp
https://github.com/li-plus/chatglm.cpp

