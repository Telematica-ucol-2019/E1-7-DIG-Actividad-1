import ICard from '../types/card';

export default class Card implements ICard {
  public expiryDate: Date | string | undefined;
  public holdersName: string | undefined;
  public number: number | string | undefined;
  public securityCode: number | string | undefined;
  public validDate: Date | string | undefined;
  constructor({
    number,
    holdersName,
    expiryDate,
    validDate,
    securityCode,
  }: ICard | any) {
    this.expiryDate = expiryDate || '';
    this.holdersName = holdersName || '';
    this.number = number || '';
    this.validDate = validDate || '';
    this.securityCode = securityCode || '';
  }
}
