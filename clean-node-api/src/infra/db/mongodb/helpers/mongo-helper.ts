import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,
  
  async connect (uri: string): Promise<void> {
    this.uri = uri
    console.log('url', uri)
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }

}