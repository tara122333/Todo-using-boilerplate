import mongoose, { CallbackError, Connection } from 'mongoose';

import ConfigService from '../../../config/config-service';

import { ListDB, listDbSchema } from './list-db';

export default class ListRepository {
    public static listDB:mongoose.Model<ListDB>;

    static async createDBConnection():Promise<Connection>{
        return new Promise((resolve,reject)=>{
            const mongoURI = ConfigService.getStringValue('mongoDb.uri');
            mongoose.createConnection(
                mongoURI,
                {},
                (error : CallbackError, result : Connection):void=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        ListRepository.listDB = result.model(
                            'List',
                            listDbSchema,
                        ) as unknown as mongoose.Model<ListDB>;
                        resolve(result);
                    }
                }
            )
        })
    }

}