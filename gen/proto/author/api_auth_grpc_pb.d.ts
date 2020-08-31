// package: grpc_author
// file: api_auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as api_auth_pb from "./api_auth_pb";

interface IApiAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    auth: IApiAuthServiceService_IAuth;
}

interface IApiAuthServiceService_IAuth extends grpc.MethodDefinition<api_auth_pb.ApiAuthReq, api_auth_pb.ApiAuthRes> {
    path: string; // "/grpc_author.ApiAuthService/Auth"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_auth_pb.ApiAuthReq>;
    requestDeserialize: grpc.deserialize<api_auth_pb.ApiAuthReq>;
    responseSerialize: grpc.serialize<api_auth_pb.ApiAuthRes>;
    responseDeserialize: grpc.deserialize<api_auth_pb.ApiAuthRes>;
}

export const ApiAuthServiceService: IApiAuthServiceService;

export interface IApiAuthServiceServer {
    auth: grpc.handleUnaryCall<api_auth_pb.ApiAuthReq, api_auth_pb.ApiAuthRes>;
}

export interface IApiAuthServiceClient {
    auth(request: api_auth_pb.ApiAuthReq, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
    auth(request: api_auth_pb.ApiAuthReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
    auth(request: api_auth_pb.ApiAuthReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
}

export class ApiAuthServiceClient extends grpc.Client implements IApiAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public auth(request: api_auth_pb.ApiAuthReq, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
    public auth(request: api_auth_pb.ApiAuthReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
    public auth(request: api_auth_pb.ApiAuthReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_auth_pb.ApiAuthRes) => void): grpc.ClientUnaryCall;
}
