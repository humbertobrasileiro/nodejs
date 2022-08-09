import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,
  isConnected: null as boolean,
  
  async connect (uri: string): Promise<void> {
    this.uri = uri
    try {
      this.client = await MongoClient.connect(uri)
      this.isConnected = true
    } catch {
      this.isConnected = false
    }
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
    this.isConnected = false
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.isConnected) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }

}