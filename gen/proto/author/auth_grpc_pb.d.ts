// package: grpc_author
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
    auth: IAuthServiceService_IAuth;
    refresh: IAuthServiceService_IRefresh;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<auth_pb.LoginReq, auth_pb.AuthRes> {
    path: string; // "/grpc_author.AuthService/Login"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.LoginReq>;
    requestDeserialize: grpc.deserialize<auth_pb.LoginReq>;
    responseSerialize: grpc.serialize<auth_pb.AuthRes>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthRes>;
}
interface IAuthServiceService_IAuth extends grpc.MethodDefinition<auth_pb.JwtReq, auth_pb.AuthRes> {
    path: string; // "/grpc_author.AuthService/Auth"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.JwtReq>;
    requestDeserialize: grpc.deserialize<auth_pb.JwtReq>;
    responseSerialize: grpc.serialize<auth_pb.AuthRes>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthRes>;
}
interface IAuthServiceService_IRefresh extends grpc.MethodDefinition<auth_pb.RefreshTokenReq, auth_pb.AuthRes> {
    path: string; // "/grpc_author.AuthService/Refresh"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.RefreshTokenReq>;
    requestDeserialize: grpc.deserialize<auth_pb.RefreshTokenReq>;
    responseSerialize: grpc.serialize<auth_pb.AuthRes>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthRes>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    login: grpc.handleUnaryCall<auth_pb.LoginReq, auth_pb.AuthRes>;
    auth: grpc.handleUnaryCall<auth_pb.JwtReq, auth_pb.AuthRes>;
    refresh: grpc.handleUnaryCall<auth_pb.RefreshTokenReq, auth_pb.AuthRes>;
}

export interface IAuthServiceClient {
    login(request: auth_pb.LoginReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    login(request: auth_pb.LoginReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    auth(request: auth_pb.JwtReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    auth(request: auth_pb.JwtReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    auth(request: auth_pb.JwtReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    refresh(request: auth_pb.RefreshTokenReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    refresh(request: auth_pb.RefreshTokenReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    refresh(request: auth_pb.RefreshTokenReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: auth_pb.LoginReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public login(request: auth_pb.LoginReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public auth(request: auth_pb.JwtReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public auth(request: auth_pb.JwtReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public auth(request: auth_pb.JwtReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public refresh(request: auth_pb.RefreshTokenReq, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public refresh(request: auth_pb.RefreshTokenReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
    public refresh(request: auth_pb.RefreshTokenReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthRes) => void): grpc.ClientUnaryCall;
}
