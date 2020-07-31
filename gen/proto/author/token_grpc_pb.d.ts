// package: grpc_author
// file: token.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as token_pb from "./token_pb";

interface ITokenManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    search: ITokenManagerService_ISearch;
}

interface ITokenManagerService_ISearch extends grpc.MethodDefinition<token_pb.TokenReq, token_pb.TokenRes> {
    path: string; // "/grpc_author.TokenManager/Search"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<token_pb.TokenReq>;
    requestDeserialize: grpc.deserialize<token_pb.TokenReq>;
    responseSerialize: grpc.serialize<token_pb.TokenRes>;
    responseDeserialize: grpc.deserialize<token_pb.TokenRes>;
}

export const TokenManagerService: ITokenManagerService;

export interface ITokenManagerServer {
    search: grpc.handleUnaryCall<token_pb.TokenReq, token_pb.TokenRes>;
}

export interface ITokenManagerClient {
    search(request: token_pb.TokenReq, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
    search(request: token_pb.TokenReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
    search(request: token_pb.TokenReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
}

export class TokenManagerClient extends grpc.Client implements ITokenManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public search(request: token_pb.TokenReq, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
    public search(request: token_pb.TokenReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
    public search(request: token_pb.TokenReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: token_pb.TokenRes) => void): grpc.ClientUnaryCall;
}
