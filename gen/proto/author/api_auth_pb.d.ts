// package: grpc_author
// file: api_auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ApiAuthReq extends jspb.Message { 
    getNameSpace(): string;
    setNameSpace(value: string): ApiAuthReq;

    getOperationUrl(): string;
    setOperationUrl(value: string): ApiAuthReq;

    getToken(): string;
    setToken(value: string): ApiAuthReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiAuthReq.AsObject;
    static toObject(includeInstance: boolean, msg: ApiAuthReq): ApiAuthReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiAuthReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiAuthReq;
    static deserializeBinaryFromReader(message: ApiAuthReq, reader: jspb.BinaryReader): ApiAuthReq;
}

export namespace ApiAuthReq {
    export type AsObject = {
        nameSpace: string,
        operationUrl: string,
        token: string,
    }
}

export class ApiAuthRes extends jspb.Message { 
    getCode(): ApiAuthRes.Code;
    setCode(value: ApiAuthRes.Code): ApiAuthRes;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiAuthRes.AsObject;
    static toObject(includeInstance: boolean, msg: ApiAuthRes): ApiAuthRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiAuthRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiAuthRes;
    static deserializeBinaryFromReader(message: ApiAuthRes, reader: jspb.BinaryReader): ApiAuthRes;
}

export namespace ApiAuthRes {
    export type AsObject = {
        code: ApiAuthRes.Code,
    }

    export enum Code {
    VALID = 0,
    INTERNAL_EXCEPTION = -1,
    PARAMETER_EXCEPTION = -2,
    UNREGISTERED_SERVICE = -3,
    UNREGISTERED_TOKEN = -4,
    TERMINATED_SERVICE = -9,
    LIMIT_EXCEEDED = -10,
    UNAUTHORIZED = -401,
    UNKNOWN = -999,
    }

}
