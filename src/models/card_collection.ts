import mongoose, { Schema } from 'mongoose'

import { ICardCollectionModel } from '@interfaces'

const cardArrSchema: Schema = new Schema(
  {
    id: { type: String, required: [true, 'Missing card.id'] },
    name: { type: String, required: [true, 'Missing card.name'] },
    number: { type: String, required: [true, 'Missing card.numer'] },
    path: { type: String, required: [true, 'Missing card.path'] },
    set: {
      id: { type: String, required: [true, 'Missing card.set.id'] },
      name: { type: String, required: [true, 'Missing card.set.name'] },
      series: { type: String, required: [true, 'Missing card.set.series'] },
      printedTotal: String,
      total: Number,
      legalities: {
        unlimited: String,
        standard: String,
        expanded: String
      },
      ptcgoCode: String,
      releaseDate: String,
      updatedAt: String,
      images: {
        symbol: String,
        logo: String
      }
    },
    prices: {
      normal: {
        low: Schema.Types.Mixed,
        mid: Schema.Types.Mixed,
        high: Schema.Types.Mixed,
        market: Schema.Types.Mixed,
        directLow: Schema.Types.Mixed
      },
      holofoil: {
        low: Schema.Types.Mixed,
        mid: Schema.Types.Mixed,
        high: Schema.Types.Mixed,
        market: Schema.Types.Mixed,
        directLow: Schema.Types.Mixed
      },
      reverseHolofoil: {
        low: Schema.Types.Mixed,
        mid: Schema.Types.Mixed,
        high: Schema.Types.Mixed,
        market: Schema.Types.Mixed,
        directLow: Schema.Types.Mixed
      }
    }
  },
  { _id: false, versionKey: false }
)

const CardCollectionSchema: Schema = new Schema(
  {
    collection_id: { type: String, required: [true, 'Missing collection id'] },
    owner_id: { type: String, required: [true, 'Missing owner_id'] },
    name: {
      type: String,
      default: 'My default collection name',
      required: [true, 'Missing collection name']
    },
    images: {
      thumbnail: {
        type: String,
        default: '/path/to/thumbnail',
        required: [true, 'Missing thumbnail image']
      },
      header: {
        type: String,
        default: '/path/to/header',
        required: [true, 'Missing header image']
      }
    },
    cards: [cardArrSchema]
  },
  { versionKey: false }
)

export default mongoose.models.CardCollection ||
  mongoose.model<ICardCollectionModel>('CardCollection', CardCollectionSchema)
