import ICard from '~~/src/typescript/interfaces/card';

export default class Card implements ICard {
  public expiryDate?: string;
  public holdersName?: string;
  public number?: string;
  public securityCode?: string;
  public validDate?: string;
  constructor({
    number,
    holdersName,
    expiryDate,
    validDate,
    securityCode,
  }: ICard) {
    this.expiryDate = expiryDate || '';
    this.holdersName = holdersName || '';
    this.number = number || '';
    this.securityCode = securityCode || '';
    this.validDate = validDate;
  }
}
