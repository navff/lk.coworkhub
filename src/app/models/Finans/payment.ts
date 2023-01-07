export class Payment {
  id: string;
  externalId: string;
  date: string;
  userId: string;
  amount: number;
  maskedCard?: string;
  cardHolder?: string;
  method?: string;

}
