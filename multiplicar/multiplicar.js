// requireds
const fs = require('fs');

const colors = require ('colors');

const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i<= limite; i++){
      console.log(`${base} * ${i} = ${base*i}`.green); 
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor ${base} no es un número.`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else resolve(`El archivo tabla-${base}.txt ha sido creado.`.green)

        });
    });
} 

module.exports = {
    crearArchivo,
    listarTabla
}