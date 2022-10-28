export default interface ICard {
  expiryDate: Date | string | undefined;
  holdersName: string | undefined;
  number: number | string | undefined;
  securityCode: number | string | undefined;
  validDate: Date | string | undefined;
}
