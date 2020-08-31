// package: grpc_author
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signup: IUserServiceService_ISignup;
}

interface IUserServiceService_ISignup extends grpc.MethodDefinition<user_pb.UserReq, user_pb.UserRes> {
    path: string; // "/grpc_author.UserService/Signup"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserReq>;
    requestDeserialize: grpc.deserialize<user_pb.UserReq>;
    responseSerialize: grpc.serialize<user_pb.UserRes>;
    responseDeserialize: grpc.deserialize<user_pb.UserRes>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    signup: grpc.handleUnaryCall<user_pb.UserReq, user_pb.UserRes>;
}

export interface IUserServiceClient {
    signup(request: user_pb.UserReq, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
    signup(request: user_pb.UserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
    signup(request: user_pb.UserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signup(request: user_pb.UserReq, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
    public signup(request: user_pb.UserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
    public signup(request: user_pb.UserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRes) => void): grpc.ClientUnaryCall;
}
