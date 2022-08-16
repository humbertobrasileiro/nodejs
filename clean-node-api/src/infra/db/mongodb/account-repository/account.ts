import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account' 
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData) 
    const dados = await accountCollection.find().toArray() as []
    const index = dados.length - 1
    return MongoHelper.map(dados[index])
  }
}