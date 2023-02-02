import joi from "joi";

const carValidatol = joi.object({
    brand: joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string,patern.base': 'Що ти строчиш?'
    }),

    price: joi.number().min(0).max(1000000).required().messages({
        'number.min': 'то задешево, не бреши! ', 'number.max': 'ніхто таких грошей не дасть!'
    }),

    year: joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'старий драндулет!', 'number.max': 'машина з майбутнього!'
    })
});

export {
    carValidatol
}