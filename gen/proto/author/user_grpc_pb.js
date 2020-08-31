// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_grpc_author_UserReq(arg) {
  if (!(arg instanceof user_pb.UserReq)) {
    throw new Error('Expected argument of type grpc_author.UserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_UserReq(buffer_arg) {
  return user_pb.UserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_author_UserRes(arg) {
  if (!(arg instanceof user_pb.UserRes)) {
    throw new Error('Expected argument of type grpc_author.UserRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_author_UserRes(buffer_arg) {
  return user_pb.UserRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  signup: {
    path: '/grpc_author.UserService/Signup',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserReq,
    responseType: user_pb.UserRes,
    requestSerialize: serialize_grpc_author_UserReq,
    requestDeserialize: deserialize_grpc_author_UserReq,
    responseSerialize: serialize_grpc_author_UserRes,
    responseDeserialize: deserialize_grpc_author_UserRes,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
