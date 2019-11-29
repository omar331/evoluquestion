FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y wget gnupg \
                       --fix-missing curl \
                       git-core \
                       openssh-server \
                       nano \
                       gcc \
                       binutils \
                       libglib2.0-dev \
                       software-properties-common \
                       libcairo2-dev \
                       libjpeg8-dev \
                       libpango1.0-dev \
                       libgif-dev \
                       build-essential \
                       g++

RUN cd /tmp && curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get update

RUN apt-get install -y nodejs

RUN npm install babel-cli  webpack webpack-dev-server gulp-cli gulp typescript typings npm install webpack-cli  -g

#
# ---> Instala pkg-config
#
RUN cd /tmp/ && curl https://pkg-config.freedesktop.org/releases/pkg-config-0.28.tar.gz -o pkgconfig.tgz \
             && tar xfz pkgconfig.tgz \
             && cd pkg-config-0.28 \
             && ./configure && make install



#RUN apt-get install -y freetype2-demos

#
# ---> Instala freetype
#
#RUN add-apt-repository ppa:glasen/freetype2 -y && apt-get update
#RUN apt-get install -y freetype2-demos





RUN mkdir -p /opt/scripts

COPY ./run-task /opt/scripts



#
# ---> ssh para operacoes de deploy
#
RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

# To avoid message "The authenticity of host '<host>' can't be established" in ssh commands
RUN ["/bin/bash", "-c", "echo -e 'Host *\n   StrictHostKeyChecking=no   \n   UserKnownHostsFile=/dev/null\n\n' | cat - /etc/ssh/ssh_config > /tmp/out && mv /tmp/out /etc/ssh/ssh_config"]

ENV NOTVISIBLE "in users profile"

RUN echo "export VISIBLE=now" >> /etc/profile
RUN ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa
RUN cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
RUN chmod og-wx ~/.ssh/authorized_keys

RUN echo "cd /opt/front-dev/" >> ~/.bashrc

EXPOSE 22
EXPOSE 7000

