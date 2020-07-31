# infuser-protobuf

Infuser 서비스간 연계를 위한 IDL 관리 Repository

## proto 파일 작성 관련 convention

* package 명은 server 모듈에 맞춰 작성 (manager, designer 등)


## proto compile for Go
```sh
make
```


## proto compile for TS
```
npm install

sh build-protos-for-ts.sh
```