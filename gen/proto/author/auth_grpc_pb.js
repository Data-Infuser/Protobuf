// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_grpc_author_AuthRes(arg) {
  if (!(arg instanceof auth_pb.AuthRes)) {
    throw new Error('Expected argument of type grpc_author.AuthRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_AuthRes(buffer_arg) {
  return auth_pb.AuthRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_JwtReq(arg) {
  if (!(arg instanceof auth_pb.JwtReq)) {
    throw new Error('Expected argument of type grpc_author.JwtReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_JwtReq(buffer_arg) {
  return auth_pb.JwtReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_LoginReq(arg) {
  if (!(arg instanceof auth_pb.LoginReq)) {
    throw new Error('Expected argument of type grpc_author.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_LoginReq(buffer_arg) {
  return auth_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_RefreshTokenReq(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenReq)) {
    throw new Error('Expected argument of type grpc_author.RefreshTokenReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_RefreshTokenReq(buffer_arg) {
  return auth_pb.RefreshTokenReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/grpc_author.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginReq,
    responseType: auth_pb.AuthRes,
    requestSerialize: serialize_grpc_author_LoginReq,
    requestDeserialize: deserialize_grpc_author_LoginReq,
    responseSerialize: serialize_grpc_author_AuthRes,
    responseDeserialize: deserialize_grpc_author_AuthRes,
  },
  auth: {
    path: '/grpc_author.AuthService/Auth',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.JwtReq,
    responseType: auth_pb.AuthRes,
    requestSerialize: serialize_grpc_author_JwtReq,
    requestDeserialize: deserialize_grpc_author_JwtReq,
    responseSerialize: serialize_grpc_author_AuthRes,
    responseDeserialize: deserialize_grpc_author_AuthRes,
  },
  refresh: {
    path: '/grpc_author.AuthService/Refresh',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshTokenReq,
    responseType: auth_pb.AuthRes,
    requestSerialize: serialize_grpc_author_RefreshTokenReq,
    requestDeserialize: deserialize_grpc_author_RefreshTokenReq,
    responseSerialize: serialize_grpc_author_AuthRes,
    responseDeserialize: deserialize_grpc_author_AuthRes,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
