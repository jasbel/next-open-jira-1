import mongoose, { mongo } from "mongoose";

/**
 * 0 = diconnected
 * 1 = connected
 * 2 = connecting
 * 3 -= disconnecing
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("usando coneccion anterior");
      return;
    }
  }

  await mongoose.connect("....");
  mongoConnection.isConnected = 1;
  console.log('Conectado a mongoDB ...');
  
};

export const disconnect = async() => {
  if(mongoConnection.isConnected !== 0) return;

  await mongoose.disconnect()
  console.log('desconectado de mongodb');
  
}
