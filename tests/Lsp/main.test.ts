import {
    CashPayment,
    CreditCardPayment,
    handleOfflinePayment,
    handleOnlinePayment,
    PayPalPayment,
} from '../../Solid/3.Lsp/main';

describe('Online payment processors', () => {
    test('should process credit card payments without throwing', () => {
        expect(() => handleOnlinePayment(new CreditCardPayment(), 100)).not.toThrow();
    });

    test('should process PayPal payments without throwing', () => {
        expect(() => handleOnlinePayment(new PayPalPayment(), 200)).not.toThrow();
    });
});

describe('Offline payment processor', () => {
    test('should process cash payments without violating the online contract', () => {
        expect(() => handleOfflinePayment(new CashPayment(), 50)).not.toThrow();
    });
});