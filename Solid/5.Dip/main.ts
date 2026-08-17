/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface NotificationService {
    sendNotification(message: string): void;
}

class EmailService implements NotificationService {
    sendEmail(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }

    sendNotification(message: string): void {
        this.sendEmail(message);
    }
}

class SMSService implements NotificationService {
    sendSMS(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }

    sendNotification(message: string): void {
        this.sendSMS(message);
    }
}

class SendNotification {
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    sendNotification(message: string): void {
        this.notificationService.sendNotification(message);
    }
}

const emailService = new EmailService();
const emailNotification = new SendNotification(emailService);
emailNotification.sendNotification("Hello, this is a notification!");

const smsService = new SMSService();
const smsNotification = new SendNotification(smsService);
smsNotification.sendNotification("Hello, this is an SMS notification!");

export {
    EmailService,
    NotificationService,
    SendNotification,
    SMSService,
}