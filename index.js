#!/usr/bin/env node

const program = require('commander')
const Color = require('color')

program
    .command('whiten <color>')
    .option('-f, --factor <[0:1]>', 'whitening factor')
    .action(mixColorWith('white'))

program
    .command('darken <color>')
    .option('-f, --factor <[0:1]>', 'darkening factor')
    .action(mixColorWith('black'))

program.parse(process.argv)

function mixColorWith(toMixWith) {
    return function (color, cmd) {
        mixAndPrintColor(color, toMixWith, cmd.factor)
    }
}

function mixAndPrintColor(color, toMixWith, factor) {
    const mixed = mixColor(color, toMixWith, factor)
    printColor(mixed)
}

function mixColor(color, toMixWith, factor) {
    const c = Color(color)
    return c.mix(Color(toMixWith), factor)
}

function printColor(color) {
    console.log(color.hex())
}

