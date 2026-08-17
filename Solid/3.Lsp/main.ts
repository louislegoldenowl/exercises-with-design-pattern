/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface OnlinePaymentProcessor {
    processPayment(amount: number): void;
}

interface OfflinePaymentProcessor {
    processPayment(amount: number): void;
}

class CreditCardPayment implements OnlinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
    }
}

class PayPalPayment implements OnlinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
    }
}

class CashPayment implements OfflinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing cash payment of $${amount}`);
        // throw new Error("Cannot process cash payment online!");
    }
}

function handleOnlinePayment(paymentProcessor: OnlinePaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

function handleOfflinePayment(paymentProcessor: OfflinePaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

export {
    CashPayment,
    CreditCardPayment,
    handleOfflinePayment,
    handleOnlinePayment,
    OfflinePaymentProcessor,
    OnlinePaymentProcessor,
    PayPalPayment,
};
