#!/bin/bash -x

build_new_image(){
    # Docker Compose up and build new image
    docker-compose up --build --no-start blockhead 
}

commit_new_image(){
    # Commit new image
    docker commit blockhead iiinigence/$1
}

push_to_docker_hub(){
    # Push to docker hub
    docker push iiinigence/$1
}

error_message(){
    echo "Oh poop, let's fix it try it again. script aborting"
}
# Clean up old resources and images
docker-compose down --rmi all

if [ $? -eq 0  ]; then
    echo "building image"
    build_new_image
    if [ $? != 0 ]; then exit 1; fi
    echo "committing image"
    commit_new_image $1
    if [ $? != 0 ]; then exit 1; fi
    echo "pushing image"
    push_to_docker_hub $1
    if [ $? != 0 ]; then exit 1; fi
    echo "Deployment Success!"
else
    error_message
fi