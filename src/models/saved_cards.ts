import mongoose, { Schema } from 'mongoose'

import { IMongoSavedCardsModel } from '@interfaces'

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

const SavedCardsSchema: Schema = new Schema(
  {
    collection_id: { type: String, required: [true, 'Missing collection_id'] },
    cards: [cardArrSchema]
  },
  { versionKey: false }
)

export default mongoose.models.SavedCards ||
  mongoose.model<IMongoSavedCardsModel>('SavedCards', SavedCardsSchema)
