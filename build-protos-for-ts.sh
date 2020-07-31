#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/

DESIGNER_PROTO_DEST=./gen/proto/designer
AUTHOR_PROTO_DEST=./gen/proto/author

DESIGNER_PROTO_SRC=./proto/designer
AUTHOR_PROTO_SRC=./proto/author

mkdir -p ${DESIGNER_PROTO_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${DESIGNER_PROTO_DEST} \
    --grpc_out=${DESIGNER_PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${DESIGNER_PROTO_SRC} \
    ${DESIGNER_PROTO_SRC}/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${DESIGNER_PROTO_DEST} \
    -I ${DESIGNER_PROTO_SRC} \
    ${DESIGNER_PROTO_SRC}/*.proto

DESIGNER_PROTO_DEST=./gen/proto/designer

DESIGNER_PROTO_SRC=./proto/designer

mkdir -p ${DESIGNER_PROTO_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${AUTHOR_PROTO_DEST} \
    --grpc_out=${AUTHOR_PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${AUTHOR_PROTO_SRC} \
    ${AUTHOR_PROTO_SRC}/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${AUTHOR_PROTO_DEST} \
    -I ${AUTHOR_PROTO_SRC} \
    ${AUTHOR_PROTO_SRC}/*.proto