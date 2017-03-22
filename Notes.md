
# cd .../GitHub/baseBits/node

# 8000 - node server, 5858/8080 node inspector
# named node_modules volume
# docker run -it --name bb-node-server -p 8000:8000 -p 5858:5858 -p 8080:8080 -v $(pwd):/usr/src/app -v node_modules-bb:/usr/src/app/node_modules/ vid-info-svr /bin/bash
# 