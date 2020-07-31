// package: grpc_author
// file: token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TokenReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenReq.AsObject;
    static toObject(includeInstance: boolean, msg: TokenReq): TokenReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenReq;
    static deserializeBinaryFromReader(message: TokenReq, reader: jspb.BinaryReader): TokenReq;
}

export namespace TokenReq {
    export type AsObject = {
        token: string,
    }
}

export class TokenRes extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenRes;

    getStatus(): TokenRes.Status;
    setStatus(value: TokenRes.Status): TokenRes;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenRes.AsObject;
    static toObject(includeInstance: boolean, msg: TokenRes): TokenRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenRes;
    static deserializeBinaryFromReader(message: TokenRes, reader: jspb.BinaryReader): TokenRes;
}

export namespace TokenRes {
    export type AsObject = {
        token: string,
        status: TokenRes.Status,
    }

    export enum Status {
    VALID = 0,
    UNREGISTERED = 1,
    EXPIRED = 2,
    }

}
