import {
    EmailService,
    NotificationService,
    SendNotification,
    SMSService,
} from "../../Solid/5.Dip/main";

describe("SendNotification", () => {
    let emailService: NotificationService;
    let smsService: NotificationService;
    let emailNotification: SendNotification;
    let smsNotification: SendNotification;

    beforeEach(() => {
        emailService = new EmailService();
        smsService = new SMSService();
        emailNotification = new SendNotification(emailService);
        smsNotification = new SendNotification(smsService);
    });

    test("should send notification via EmailService", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        emailNotification.sendNotification("Test Email");
        expect(consoleSpy).toHaveBeenCalledWith(
            "Sending email with message: Test Email"
        );
        consoleSpy.mockRestore();
    });

    test("should send notification via SMSService", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        smsNotification.sendNotification("Test SMS");
        expect(consoleSpy).toHaveBeenCalledWith("Sending SMS with message: Test SMS");
        consoleSpy.mockRestore();
    });
});