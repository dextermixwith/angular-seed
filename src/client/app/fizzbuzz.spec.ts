export function main() {
    describe('FizzBuzzer', function(){
        let fizzBuzzer : FizzBuzzer;
        beforeEach(() => fizzBuzzer = new FizzBuzzer;

        it('Should return 1 as string if 1 as integer passed in', ()  => expect(fizzBuzzer.Process(1)).toBe('1'));

        it('Should return 2 as a string if 2 as an integer is passed in', () => expect(fizzBuzzer.Process(2)).toBe('2'));

        it('Should return Fizz if 3 as an integer is passed in', () => expect(fizzBuzzer.Process(3)).toBe('Fizz'));

        it('Should return 4 as a string if 4 as an integer is passed in', () => expect(fizzBuzzer.Process(4)).toBe('4'));

        it('Should return Buzz if 5 as an integer is passed in', () => expect(fizzBuzzer.Process(5)).toBe('Buzz'));
    });
}


class FizzBuzzer {
    public Process(number: number) : string {
        if(number === 3) return 'Fizz';
        if(number === 5) return 'Buzz';
        return number.toString();
    }
}
