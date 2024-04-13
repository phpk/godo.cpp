# godo.cpp


# llama.cpp
https://github.com/ggerganov/llama.cpp

- linux or macos make
```
cd cpps/llama.cpp
mkdir build
cd build
cmake ..
#cmake .. -DLLAMA_CUDA=ON //Using GPU
cmake --build . --config Release
cp bin/server ../../../service/cpps/llama/
cd ../../../service/cpps/llama/
chmod a+x server 
```

# whisper.cpp
https://github.com/ggerganov/whisper.cpp

# stable-diffusion.cpp
https://github.com/leejet/stable-diffusion.cpp

# rwkv.cpp
https://github.com/RWKV/rwkv.cpp

# chatglm.cpp
https://github.com/li-plus/chatglm.cpp

# init git
```
git clone https://github.com/phpk/godo.cpp.git
git submodule update --init --recursive
```