#!/usr/bin/env node

const program = require('commander')
const Color = require('color')

program
    .command('whiten <color>')
    .option('-f, --factor <[0:1]>', 'whitening factor')
    .action(function (color, cmd) {
        const c = Color(color)
        const lighter = c.mix(Color('white'), cmd.factor)
        console.log(lighter.hex())
    })
program.parse(process.argv)

