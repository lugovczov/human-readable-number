module.exports = function toReadable (number) {
    let currencyA = Math.floor( number / 100 );
    let currencyB = (number - currencyA * 100);
    let currencyB2 = Math.floor(currencyB / 10);
    let currencyC = (number - (currencyA * 100) - (currencyB2 * 10));

    //сотни

    function a() {
        //console.log(currencyA);

        if ( currencyA == 1 ) {
            let a = 'one hundred'
            return a;
        }

        if ( currencyA == 2 ) {
            let a = 'two hundred'
            return a;
        }

        if ( currencyA == 3 ) {
            let a = 'three hundred'
            return a;
        }

        if ( currencyA == 4 ) {
            let a = 'four hundred'
            return a;
        }

        if ( currencyA == 5 ) {
            let a = 'five hundred'
            return a;
        }

        if ( currencyA == 6 ) {
            let a = 'six hundred'
            return a;
        }

        if ( currencyA == 7 ) {
            let a = 'seven hundred'
            return a;
        }

        if ( currencyA == 8 ) {
            let a = 'eight hundred'
            return a;
        }

        if ( currencyA == 9 ) {
            let a = 'nine hundred'
            return a;
        }
                
    }

    //десятки

    function b() {
        
        //console.log(currencyB);

        if ( currencyB == 1 ) {
            let b = 'one'
            return b;
        }

        if ( currencyB == 2 ) {
            let b = 'two'
            return b;
        }

        if ( currencyB == 3 ) {
            let b = 'three'
            return b;
        }

        if ( currencyB == 4 ) {
            let b = 'four'
            return b;
        }

        if ( currencyB == 5 ) {
            let b = 'five'
            return b;
        }

        if ( currencyB == 6 ) {
            let b = 'six'
            return b;
        }

        if ( currencyB == 7 ) {
            let b = 'seven'
            return b;
        }

        if ( currencyB == 8 ) {
            let b = 'eight'
            return b;
        }

        if ( currencyB == 9 ) {
            let b = 'nine'
            return b;
        }

        if ( currencyB == 10 ) {
            let b = 'ten'
            return b;
        }

        if ( currencyB == 11 ) {
            let b = 'eleven'
            return b;
        }

        if ( currencyB == 12 ) {
            let b = 'twelve'
            return b;
        }

        if ( currencyB == 13 ) {
            let b = 'thirteen'
            return b;
        }

        if ( currencyB == 14 ) {
            let b = 'fourteen'
            return b;
        }

        if ( currencyB == 15 ) {
            let b = 'fifteen'
            return b;
        }

        if ( currencyB == 16 ) {
            let b = 'sixteen'
            return b;
        }

        if ( currencyB == 17 ) {
            let b = 'seventeen'
            return b;
        }

        if ( currencyB == 18 ) {
            let b = 'eighteen'
            return b;
        }

        if ( currencyB == 19 ) {
            let b = 'nineteen'
            return b;
        }

        //console.log(currencyB);

        
        if ( currencyB2 == 2 ) {
            let b = 'twenty'
            return b;
        }

        if ( currencyB2 == 3 ) {
            let b = 'thirty'
            return b;
        }

        if ( currencyB2 == 4 ) {
            let b = 'forty'
            return b;
        }

        if ( currencyB2 == 5 ) {
            let b = 'fifty'
            return b;
        }

        if ( currencyB2 == 6 ) {
            let b = 'sixty'
            return b;
        }

        if ( currencyB2 == 7 ) {
            let b = 'seventy'
            return b;
        }

        if ( currencyB2 == 8 ) {
            let b = 'eighty'
            return b;
        }

        if ( currencyB2 == 9 ) {
            let b = 'ninety'
            return b;
        }

    }

    
    // if (currencyB > 19) {

    //     function c() {

    //     //let currencyC = Math.floor(number - (currencyA * 100) - (currencyB2 * 10));

    //     //console.log(currencyC);

    //     if ( currencyC == 1 ) {
    //         let c = 'one'
    //         return c;
    //     }

    //     if ( currencyC == 2 ) {
    //         let c = 'two'
    //         return c;
    //     }

    //     if ( currencyC == 3 ) {
    //         let c = 'three'
    //         return c;
    //     }

    //     if ( currencyC == 4 ) {
    //         let c = 'four'
    //         return c;
    //     }

    //     if ( currencyC == 5 ) {
    //         let c = 'five'
    //         return c;
    //     }

    //     if ( currencyC == 6 ) {
    //         let c = 'six'
    //         return c;
    //     }

    //     if ( currencyC == 7 ) {
    //         let c = 'seven'
    //         return c;
    //     }

    //     if ( currencyC == 8 ) {
    //         let c = 'eight'
    //         return c;
    //     }

    //     if ( currencyC == 9 ) {
    //         let c = 'nine'
    //         return c;
    //     }

    //     }

    // } 




    
    function c() {
        
        if (currencyB > 19) {

    
            if ( currencyC == 1 ) {
                let c = 'one'
                return c;
            }

            if ( currencyC == 2 ) {
                let c = 'two'
                return c;
            }

            if ( currencyC == 3 ) {
                let c = 'three'
                return c;
            }

            if ( currencyC == 4 ) {
                let c = 'four'
                return c;
            }

            if ( currencyC == 5 ) {
                let c = 'five'
                return c;
            }

            if ( currencyC == 6 ) {
                let c = 'six'
                return c;
            }

            if ( currencyC == 7 ) {
                let c = 'seven'
                return c;
            }

            if ( currencyC == 8 ) {
                let c = 'eight'
                return c;
            }

            if ( currencyC == 9 ) {
                let c = 'nine'
                return c;
            }

        } else {
            return;
        }

    }






    
    if ( (a() !== undefined) & (b() !== undefined) & (c() !== undefined)) {
        return `${a()} ${b()} ${c()}`;
    } else if (a() != undefined & b() != undefined) {
        return `${a()} ${b()}`;
    } else if (a() != undefined & c() != undefined) {
        return `${a()} ${c()}`;
    } else if (b() != undefined & c() != undefined) {
        return `${b()} ${c()}`;
    } else if (a() != undefined) {
        return `${a()}`;
    } else if (b() != undefined) {
        return `${b()}`;
    } else if (c() != undefined) {
        return `${c()}`;
    } else {
        return 'zero';
    }




}
