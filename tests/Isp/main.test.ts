import {
    Printer, Scanner, Fax, OldFashionedPrinter
} from '../../Solid/4.Lsp/main';

describe('OldFashionedPrinter', () => {
    let printer: OldFashionedPrinter;

    beforeEach(() => {
        printer = new OldFashionedPrinter();
    });

    test('should implement the Printer interface', () => {
        expect(typeof printer.print).toBe('function');
    });

    test('should not implement the Scanner interface', () => {
        expect((printer as any).scan).toBeUndefined();
    });

    test('should not implement the Fax interface', () => {
        expect((printer as any).fax).toBeUndefined();
    });
});