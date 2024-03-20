FROM debian:stable-slim


# See: http://label-schema.org/rc1/
LABEL maintainer="smichael <smichael@ebsco.com>" \
    base-image.name="EBSCOIS-Node" \
    base-image.vendor="EBSCO" \
    base-image.description="EBSCO IS NodeJS docker image with optional Datadog setup"


RUN set -ex && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates curl xz-utils --no-install-recommends && \
    curl -fsSLO --compressed "https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz" && \
    tar -xJf "node-v16.20.2-linux-x64.tar.xz" -C /usr/local --strip-components=1 --no-same-owner && \
    apt-get purge -y --auto-remove xz-utils && \
    apt-get purge -y --auto-remove curl && \
    apt-get purge -y --auto-remove ca-certificates && \
    rm -rf /var/lib/apt/lists/* "node-v16.20.2-linux-x64.tar.xz" *.deb && \
    ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    addgroup --system --gid 1001 ebsco && \
    adduser --system --uid 1001 --gid 1001 --disabled-password --disabled-login --home /opt/ebsco ebsco


# Allow ability to override NODE_OPTIONS like --max-old-space-size
ENV NODE_ENV=production \
    NODE_OPTIONS=""

WORKDIR /opt/ebsco

# Use .dockerignore to avoid unnecessary files like node_modules etc.
COPY . /opt/ebsco/

ENV PORT=3000

