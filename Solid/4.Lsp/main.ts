/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface Printer {
    print(document: string): void;
}

interface Scanner {
    scan(document: string): void;
}

interface Fax {
    fax(document: string): void;
}

class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}

const printer = new OldFashionedPrinter();
printer.print("Document 1");

export { Printer, Scanner, Fax, OldFashionedPrinter };

