export class Transaction {
    ID : string;
    sountryID  : string;
    senderID  : string;
    receiverID  : string;
    senderWalletID  : string;
    receiverWalletID  : string;
    transactionType  : string;
    senderRefCode  : string;
    receiverRefCode  : string;
    walletAddress  : string;
    networkFee  : number;
    isConfirmed  : boolean;
    amount   : number;
    initiatorBUSDAddress  : string;
    recieverBUSDAddress  : string;
    bUSDTransactionHash  : string;
    transactionDesc  : string;
    transactionCurrency  : string;
    isOfficial   : boolean;
    isActive   : boolean;
    dateCreated : string;
}
