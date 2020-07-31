GO_PLUGIN=bin/protoc-gen-go
GO_PROTOBUF_REPO=github.com/golang/protobuf
GO_PLUGIN_PKG=$(GO_PROTOBUF_REPO)/protoc-gen-go
GO_PTYPES_ANY_PKG=$(GO_PROTOBUF_REPO)/ptypes/any

GO_SOURCE_DIR=-I${GOPATH}/src
GOOGLEAPIS_DIR=third_party/googleapis

PKGMAP=plugins=grpc:gen

AUTHOR_PROTO_SRC=proto/author/*.proto
DESIGNER_PROTO_SRC=proto/designer/*.proto

all-proto: author-proto designer-proto

author-proto:
	protoc -I. -I${GOPATH}/src -I$(GOOGLEAPIS_DIR) --go_out=$(PKGMAP) ${AUTHOR_PROTO_SRC}

designer-proto:
	protoc -I. -I${GOPATH}/src -I$(GOOGLEAPIS_DIR) --go_out=$(PKGMAP) ${DESIGNER_PROTO_SRC}

gen-dir: clean
	mkdir gen

clean:
	rm -rf gen