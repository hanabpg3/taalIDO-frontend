import { Contract, ContractFactory } from '@ethersproject/contracts';
import { fixedData, tokenData } from '../contracts';
import { InfuraProvider } from '@ethersproject/providers';
import Numbers from './Numbers';
import { infuraChainId, infuraApiKey } from 'src/config';

class Taalswap {
  constructor({
    application,
    account,
    library,
    tokenAddress,
    contractAddress,
    notConnected
  }) {
    try {
      let fixedContractAddress = '';
      let tokenContractAddress = '';
      if (application) {
        fixedContractAddress = application.contractAddress;
        tokenContractAddress = application.tokenContractAddr;
      } else {
        if (tokenAddress) tokenContractAddress = tokenAddress;
        if (contractAddress) fixedContractAddress = contractAddress;
      }

      let fixedContract = null;
      let tokenContract = null;
      const provider = new InfuraProvider(infuraChainId, infuraApiKey);
      if (notConnected) {
        tokenContract =
          tokenContractAddress === ''
            ? {}
            : new Contract(
                tokenContractAddress,
                ContractFactory.getInterface(tokenData.abi),
                provider
              );
        fixedContract =
          fixedContractAddress === ''
            ? {}
            : new Contract(
                fixedContractAddress,
                ContractFactory.getInterface(fixedData.abi),
                provider
              );
      } else {
        fixedContract =
          fixedContractAddress === ''
            ? {}
            : new Contract(
                fixedContractAddress,
                ContractFactory.getInterface(fixedData.abi),
                library.getSigner(account).connectUnchecked()
              );
        tokenContract =
          tokenContractAddress === ''
            ? {}
            : new Contract(
                tokenContractAddress,
                ContractFactory.getInterface(tokenData.abi),
                library.getSigner(account).connectUnchecked()
              );
      }
      this.params = {
        application: application,
        fixedContract: fixedContract,
        tokenContract: tokenContract,
        tokenContractAddress: tokenContractAddress,
        fixedContractAddress: fixedContractAddress,
        infuraProvider: provider,
        library: library
      };
    } catch (e) {
      console.log('taalswap create error', e);
      throw e;
    }
  }

  async addToken() {
    const result = await this.params.library.provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: this.params.tokenContractAddress,
          symbol: this.params.application.symbol,
          decimals: this.params.application.decimals
        }
      }
    });
    return result;
  }

  getFixedContract() {
    return this.params.fixedContract;
  }

  getTokenContract() {
    return this.params.tokenContract;
  }

  async getGasPrice() {
    return await this.params.infuraProvider.getGasPrice();
  }

  async waitTxHash(txHash) {
    if (!this.params.infuraProvider) return;
    return await this.params.infuraProvider.waitForTransaction(
      txHash,
      1,
      10 * 60 * 1000
    );
  }

  async getSwapABI({ amountWithDecimals, value }) {
    const data = await this.params.fixedContract.interface.encodeFunctionData(
      'swap',
      [amountWithDecimals]
    );
    // try {
    //   const test = await this.params.fixedContract.estimateGas.swap(
    //     amountWithDecimals,
    //     {
    //       value: value,
    //       gasPrice: await this.getGasPrice(),
    //       gasLimit: 300000
    //     }
    //   );
    //   console.log('test', test);
    // } catch (e) {
    //   console.log(e);
    // }

    console.log('getSwapABI', data);
    return data;
  }

  async getRedeemTokensABI({ purchase_id }) {
    const data = this.params.fixedContract.interface.encodeFunctionData(
      'redeemTokens',
      [purchase_id]
    );
    console.log('=====getRedeemTokensABI', data);
    return data;
  }

  async getRedeemGivenMinimumGoalNotAchievedABI({ purchase_id }) {
    const data = this.params.fixedContract.interface.encodeFunctionData(
      'redeemGivenMinimumGoalNotAchieved',
      [purchase_id]
    );
    console.log('=====redeemGivenMinimumGoalNotAchieved', data);
    return data;
  }

  async getBalance(address) {
    return await this.params.infuraProvider.getBalance(address);
  }

  async approveFundERC20({ tokenAmount }) {
    let amountWithDecimals = Numbers.toSmartContractDecimals(
      tokenAmount,
      this.params.application.decimals
    );

    return await this.params.tokenContract
      .approve(this.params.fixedContractAddress, amountWithDecimals, {
        gasLimit: 300000,
        gasPrice: await this.getGasPrice()
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  async fund({ tokenAmount }) {
    let amountWithDecimals = Numbers.toSmartContractDecimals(
      tokenAmount,
      this.params.application.decimals
    );

    return await this.params.fixedContract
      .fund(amountWithDecimals, {
        gasLimit: 3000000,
        gasPrice: await this.getGasPrice()
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  /**
   * @function addWhitelistedAddress
   * @description add WhiteListed Address
   * @param { Array | Addresses} Addresses
   */
  async addWhitelistedAddress({ addresses }) {
    console.log('=====', addresses);
    if (!addresses || !addresses.length || addresses.length == 0) {
      throw new Error('Addresses not well setup');
    }

    // let oldAddresses = await this.getWhitelistedAddresses();
    // oldAddresses = oldAddresses.map((a) => String(a).toLowerCase());
    // addresses = addresses.map((a) => String(a).toLowerCase());
    //
    // var addressesClean = [];
    // addresses = addresses.filter((item) => {
    //   if (oldAddresses.indexOf(item) < 0 && addressesClean.indexOf(item) < 0) {
    //     // Does not exist
    //     addressesClean.push(item);
    //   }
    // });
    // console.log('========>', addressesClean.toString());

    // return await this.params.fixedContract.add(addressesClean);
    return await this.params.fixedContract.add(addresses, {
      gasLimit: 3000000,
      gasPrice: await this.getGasPrice()
    });
  }

  /**
   * @function getWhitelistedAddresses
   * @description Get White List
   * @returns {Address} Array
   */
  async getWhitelistedAddresses() {
    return await this.params.fixedContract.getWhitelistedAddresses();
  }

  /**
   * @function isWhitelisted
   * @description Get whether ans address is in White List or not
   * @returns {boolelan} Boolean
   */
  async isWhitelisted(address) {
    return await this.params.fixedContract.isWhitelisted(address);
  }

  /**
   * @function hasWhitelisting
   * @description Get the pool is private
   * @returns {boolelan} Boolean
   */
  async hasWhitelisting() {
    return await this.params.fixedContract.hasWhitelisting();
  }

  /**
   * @function decimals
   * @description Get Decimals
   * @returns {Integer} Integer
   */
  async decimalsAsync() {
    return parseInt(await this.params.tokenContract.decimals());
  }

  /**
   * @function balancdOf
   * @description Get balance of an address
   * @returns {Integer} Integer
   */
  async balanceOf(address) {
    return Numbers.fromDecimals(
      await this.params.tokenContract.balanceOf(address),
      18
    );
  }

  /**
   * @function symbol
   * @description Get symbol
   * @returns {String} symbol
   */
  async symbolAsync() {
    return await this.params.tokenContract.symbol();
  }

  /**
   * @function name
   * @description Get name
   * @returns {String} name
   */
  async nameAsync() {
    return await this.params.tokenContract.name();
  }

  /**
   * @function totalSupply
   * @description Get totalSupply
   * @returns {Integer} totalSupply
   */
  async totalSupplyAsync() {
    return parseInt(await this.params.tokenContract.totalSupply());
  }

  /**
   * @function tokensAllocated
   * @description Get Total tokens Allocated already, therefore the tokens bought until now
   * @returns {Integer} Amount in Tokens
   */
  async tokensAllocated() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.tokensAllocated(),
      this.params.application.decimals
    );
  }

  /**
   * @function tokensForSale
   * @description Get Total tokens Allocated/In Sale for the Pool
   * @returns {Integer} Amount in Tokens
   */
  async tokensForSale() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.tokensForSale(),
      this.params.application.decimals
    );
  }

  /**
   * @function isOpen
   * @description Verify if the Token Sale is Open for Swap
   * @returns {Boolean}
   */
  async isOpen() {
    return await this.params.fixedContract.isOpen();
  }

  /**
   * @function hasStarted
   * @description Verify if the Token Sale has started the Swap
   * @returns {Boolean}
   */
  async hasStarted() {
    return await this.params.fixedContract.hasStarted();
  }

  /**
   * @function isFunded
   * @description Verify if the Token Sale is Funded with all Tokens proposed in tokensForSale
   * @returns {Boolean}
   */
  async isFunded() {
    return await this.params.fixedContract.isSaleFunded();
  }

  /**
   * @function isPreStart
   * @description Verify if the Token Sale in not open yet, where the admin can fund the pool
   * @returns {Boolean}
   */
  async isPreStart() {
    return await this.params.fixedContract.isPreStart();
  }

  /**
   * @function hasFinalized
   * @description Verify if the Token Sale has finalized, if the current date is after endDate
   * @returns {Boolean}
   */
  async hasFinalized() {
    return await this.params.fixedContract.hasFinalized();
  }

  /**
   * @function getBuyers
   * @description Get Buyers
   * @returns {Array | Integer} _ids
   */
  async getBuyers() {
    return await this.params.fixedContract.getBuyers();
  }

  /**
   * @function minimumRaiseAchieved
   * @description Was Minimum Raise Achieved
   * @returns {Boolean}
   */
  async minimumRaiseAchieved() {
    try {
      console.log('test');
      return await this.params.fixedContract.minimumRaiseAchieved();
    } catch (err) {
      // console.log('minimumRaiseAchieved error ', err);
      return false;
    }
  }

  /**
   * @function minimumRaise
   * @description Get Minimum Raise amount for Token Sale
   * @returns {Integer} Amount in Tokens
   */
  async minimumRaise() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.minimumRaise(),
      this.params.application.decimals
    );
  }

  /**
   * @function hasMinimumRaise
   * @description See if hasMinimumRaise
   * @returns {Boolea}
   */
  async hasMinimumRaise() {
    return await this.params.fixedContract.hasMinimumRaise();
  }

  /**
   * @function minimumReached
   * @description See if minimumRaise was Reached
   * @returns {Integer}
   */
  async wasMinimumRaiseReached() {
    if (await this.hasMinimumRaise()) {
      return (await this.tokensAllocated()) > (await this.minimumRaise());
    } else {
      return true;
    }
  }

  /**
   * @function individualMinimumAmount
   * @description Get Individual Minimum Amount for each address
   * @returns {Integer}
   */
  async individualMinimumAmount() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.individualMinimumAmount(),
      this.params.application.decimals
    );
  }

  /**
   * @function individualMaximumAmount
   * @description Get Individual Maximum Amount for each address
   * @returns {Integer}
   */
  async individualMaximumAmount() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.individualMaximumAmount(),
      this.params.application.decimals
    );
  }

  /**
   * @function tokensLeft
   * @description Get Total tokens available to be sold in the pool
   * @returns {Integer} Amount in Tokens
   */
  async tokensLeft() {
    return Numbers.fromDecimals(
      await this.params.fixedContract.tokensLeft(),
      this.params.application.decimals
    );
  }

  /**
   * @function getPurchaseIds
   * @description Get All Purchase Ids filter by Address/Purchaser
   * @param {Address} address
   * @returns {Array | Integer} _ids
   */
  async getPurchaseIds() {
    return await this.params.fixedContract.getPurchaseIds();
  }

  /**
   * @function getMyPurchases
   * @description Get All Purchase Ids filter by Address/Purchaser
   * @param {Address} address
   * @returns {Array | Integer} _ids
   */
  async getAddressPurchaseIds({ address }) {
    let res = await this.params.fixedContract.getMyPurchases(address);
    return res.map((id) => Numbers.fromHex(id));
  }

  async purchases({ id }) {
    return await this.params.fixedContract.purchases(id);
  }

  /**
   * @function redeemTokens
   * @variation isStandard
   * @description Reedem tokens bought
   * @param {Integer} purchase_id
   */
  async redeemTokens({ purchase_id }) {
    return await this.params.fixedContract.redeemTokens(purchase_id);
  }

  /**
   * @function redeemGivenMinimumGoalNotAchieved
   * @variation isStandard
   * @description Reedem Ethereum from sale that did not achieve minimum goal
   * @param {Integer} purchase_id
   */
  async redeemGivenMinimumGoalNotAchieved({ purchase_id }) {
    return await this.params.fixedContract.redeemGivenMinimumGoalNotAchieved(
      purchase_id
    );
  }

  /**
   * @function withdrawUnsoldTokens
   * @description Withdraw unsold tokens of sale
   */
  async withdrawUnsoldTokens() {
    return await this.params.fixedContract.withdrawUnsoldTokens({
      gasLimit: 3000000,
      gasPrice: await this.getGasPrice()
    });
  }

  /**
   * @function withdrawFunds
   * @description Withdraw all funds from tokens sold
   */
  async withdrawFunds() {
    return await this.params.fixedContract.withdrawFunds({
      gasLimit: 3000000,
      gasPrice: await this.getGasPrice()
    });
  }

  /**
   * @function getETHCostFromTokens
   * @description Get ETH Cost from Tokens Amount
   * @param {Integer} tokenAmount
   * @returns {Integer} ethAmount
   */
  async getETHCostFromTokens({ tokenAmount }) {
    let amountWithDecimals = Numbers.toSmartContractDecimals(
      tokenAmount,
      this.params.application.decimals
    );

    return Numbers.fromDecimals(
      await this.params.fixedContract.cost(amountWithDecimals),
      this.params.application.decimals
    );
  }

  /**
   * @function swap
   * @description Swap tokens by Ethereum
   * @param {Integer} tokenAmount
   */
  async swap({ tokenAmount, account }) {
    let amountWithDecimals = Numbers.toSmartContractDecimals(
      tokenAmount,
      this.params.application.decimals
    );
    let ETHCost = await this.getETHCostFromTokens({
      tokenAmount
    });
    let ETHToWei = Numbers.toSmartContractDecimals(
      ETHCost,
      this.params.application.decimals
    );
    return await this.params.fixedContract.swap(amountWithDecimals, {
      from: account,
      value: ETHToWei,
      gasPrice: await this.getGasPrice(),
      gasLimit: 3000000 // TODO: 어떻게 처리할까 ?
    });
  }
}
export default Taalswap;
