import { Schema, Types } from 'mongoose';

export interface ListDB {
  _id: Types.ObjectId;
  account: Types.ObjectId;
  active: boolean;
  list: string;
}

export const listDbSchema: Schema = new Schema<ListDB>(
  {
    active: { type: Boolean, required: true, default: true },
    account: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      index: true,
      required: true,
    },
    list: {
      type: String,
      index: true,
      required: true,
    },
  },
  {
    collection: 'lists',
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);
